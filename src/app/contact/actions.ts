"use server";

import {
  buildEnquiryMailto,
  enquirySubject,
  enquiryText,
} from "@/components/contact/email-content";
import { needOptions } from "@/components/contact/need-options";
import type {
  ContactState,
  NotSentReason,
} from "@/components/contact/state";
import {
  normalizeEnquiry,
  validateEnquiry,
  type EnquiryValues,
} from "@/components/contact/validation";
import { site } from "@/lib/site";

const minimumSubmitMilliseconds = 3000;
const deliveryTimeoutMilliseconds = 10000;
const challengeTimeoutMilliseconds = 8000;
const resendEndpoint = "https://api.resend.com/emails";
const turnstileVerifyEndpoint =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const turnstileAction = "contact";

type DeliveryConfig = {
  apiKey: string;
  from: string;
  to: string;
};

export async function submitContactEnquiry(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = readEnquiryValues(formData);

  if (readField(formData, "website") !== "") {
    return notSent("rejected", normalizeEnquiry(raw));
  }

  const validation = validateEnquiry(raw, needOptions);
  if (!validation.ok) {
    return {
      kind: "invalid",
      fieldErrors: validation.fieldErrors,
      values: validation.values,
      submittedAt: Date.now(),
    };
  }

  if (!formOpenedLongEnough(formData)) {
    return notSent("rejected", validation.values);
  }

  if (!(await passedChallenge(formData))) {
    return notSent("unverified", validation.values);
  }

  const config = readDeliveryConfig();
  if (config === null) {
    console.error(
      "Contact enquiry not sent: RESEND_API_KEY or CONTACT_FROM_EMAIL is not set.",
    );
    return notSent("unconfigured", validation.values);
  }

  const delivered = await deliverEnquiry(config, validation.values);
  return delivered
    ? { kind: "sent", submittedAt: Date.now() }
    : notSent("failed", validation.values);
}

function notSent(reason: NotSentReason, values: EnquiryValues): ContactState {
  return {
    kind: "not-sent",
    reason,
    mailtoHref: buildEnquiryMailto(site.email, values),
    values,
    submittedAt: Date.now(),
  };
}

function readEnquiryValues(formData: FormData): EnquiryValues {
  return {
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    company: readField(formData, "company"),
    need: readField(formData, "need"),
    budget: readField(formData, "budget"),
    message: readField(formData, "message"),
  };
}

function readField(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value : "";
}

function formOpenedLongEnough(formData: FormData): boolean {
  const startedAt = readField(formData, "startedAt");
  if (!/^\d+$/.test(startedAt)) {
    return false;
  }
  return Date.now() - Number(startedAt) >= minimumSubmitMilliseconds;
}

async function passedChallenge(formData: FormData): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (!secret) {
    return true;
  }

  const token = readField(formData, "cf-turnstile-response");
  if (token === "") {
    return false;
  }

  try {
    const response = await fetch(turnstileVerifyEndpoint, {
      method: "POST",
      body: new URLSearchParams({ secret, response: token }),
      signal: AbortSignal.timeout(challengeTimeoutMilliseconds),
    });
    if (!response.ok) {
      console.error(
        `Contact enquiry not verified: Turnstile answered HTTP ${response.status}.`,
      );
      return false;
    }
    return isPassingVerdict(await response.json());
  } catch (error) {
    console.error(
      `Contact enquiry not verified: ${error instanceof Error ? error.name : "unknown error"}.`,
    );
    return false;
  }
}

function isPassingVerdict(verdict: unknown): boolean {
  if (typeof verdict !== "object" || verdict === null) {
    return false;
  }
  const { success, action } = verdict as { success?: unknown; action?: unknown };
  return success === true && (action === undefined || action === turnstileAction);
}

function readDeliveryConfig(): DeliveryConfig | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  if (!apiKey || !from) {
    return null;
  }
  return {
    apiKey,
    from,
    to: process.env.CONTACT_TO_EMAIL?.trim() || site.email,
  };
}

async function deliverEnquiry(
  config: DeliveryConfig,
  values: EnquiryValues,
): Promise<boolean> {
  try {
    const response = await fetch(resendEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        reply_to: values.email,
        subject: enquirySubject(values),
        text: enquiryText(values),
      }),
      signal: AbortSignal.timeout(deliveryTimeoutMilliseconds),
    });

    if (!response.ok) {
      console.error(
        `Contact enquiry not sent: Resend answered HTTP ${response.status}.`,
      );
      return false;
    }
    return true;
  } catch (error) {
    console.error(
      `Contact enquiry not sent: ${error instanceof Error ? error.name : "unknown error"}.`,
    );
    return false;
  }
}
