import type {
  EnquiryValues,
  FieldErrors,
} from "@/components/contact/validation";

export type NotSentReason = "unconfigured" | "failed" | "rejected";

export type ContactState =
  | { kind: "idle" }
  | { kind: "invalid"; fieldErrors: FieldErrors; values: EnquiryValues }
  | { kind: "sent" }
  | {
      kind: "not-sent";
      reason: NotSentReason;
      mailtoHref: string;
      values: EnquiryValues;
    };

export const idleContactState: ContactState = { kind: "idle" };
