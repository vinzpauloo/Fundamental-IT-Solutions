import type {
  EnquiryValues,
  FieldErrors,
} from "@/components/contact/validation";

export type NotSentReason = "unconfigured" | "failed" | "rejected" | "unverified";

export type ContactState =
  | { kind: "idle" }
  | {
      kind: "invalid";
      fieldErrors: FieldErrors;
      values: EnquiryValues;
      submittedAt: number;
    }
  | { kind: "sent"; submittedAt: number }
  | {
      kind: "not-sent";
      reason: NotSentReason;
      mailtoHref: string;
      values: EnquiryValues;
      submittedAt: number;
    };

export const idleContactState: ContactState = { kind: "idle" };
