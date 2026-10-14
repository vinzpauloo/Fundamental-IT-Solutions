"use client";

import {
  useActionState,
  useRef,
  type ComponentProps,
  type ReactNode,
} from "react";
import { ChevronDown } from "lucide-react";
import { submitContactEnquiry } from "@/app/contact/actions";
import { SubmitButton } from "@/components/contact/submit-button";
import { TurnstileWidget } from "@/components/contact/turnstile-widget";
import {
  idleContactState,
  type ContactState,
  type NotSentReason,
} from "@/components/contact/state";
import {
  budgetOptions,
  emptyEnquiryValues,
  enquiryFields,
  type EnquiryField,
  type EnquiryValues,
  type FieldErrors,
} from "@/components/contact/validation";
import { ButtonLink } from "@/components/ui";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type FocusCallback = (element: HTMLElement | null) => void;

type FieldControl = {
  id: string;
  "aria-describedby"?: string;
  "aria-invalid"?: true;
};

type FieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  className?: string;
  children: (control: FieldControl) => ReactNode;
};

const announcements: Record<
  Exclude<ContactState["kind"], "not-sent">,
  string
> = {
  idle: "",
  invalid: "Check the highlighted fields. Nothing was sent.",
  sent: "Thanks. We have your message.",
};

const controlClasses =
  "block w-full rounded-xl border border-ink/50 bg-surface px-4 py-3 text-base text-ink transition-colors duration-200 focus:border-forest-600 aria-[invalid=true]:border-red-700";

function stampOnMount(input: HTMLInputElement | null) {
  if (input !== null && input.value === "") {
    input.value = String(Date.now());
  }
}

export function EnquiryForm({
  needOptions,
  turnstileSiteKey,
}: {
  needOptions: readonly string[];
  turnstileSiteKey?: string;
}) {
  const [state, formAction] = useActionState(
    submitContactEnquiry,
    idleContactState,
  );
  const lastFocusedState = useRef<ContactState | null>(null);

  const values: EnquiryValues =
    state.kind === "invalid" || state.kind === "not-sent"
      ? state.values
      : emptyEnquiryValues;
  const responseKey =
    state.kind === "idle" ? "idle" : String(state.submittedAt);
  const announcement =
    state.kind === "not-sent"
      ? notSentHeadlines[state.reason]
      : announcements[state.kind];
  const fieldErrors: FieldErrors =
    state.kind === "invalid" ? state.fieldErrors : {};
  const firstInvalidField = enquiryFields.find(
    (field) => fieldErrors[field] !== undefined,
  );

  const focusNewResult: FocusCallback = (element) => {
    if (element !== null && lastFocusedState.current !== state) {
      lastFocusedState.current = state;
      element.focus();
    }
  };

  const focusIfFirstInvalid = (field: EnquiryField) =>
    field === firstInvalidField ? focusNewResult : undefined;

  return (
    <div className="rounded-3xl bg-surface p-6 shadow-soft ring-1 ring-line sm:p-10">
      <p role="status" aria-live="polite" className="sr-only">
        {announcement}
      </p>

      {state.kind === "sent" ? (
        <Confirmation focusRef={focusNewResult} />
      ) : (
        <>
          <h2 id="enquiry-heading" className="text-display-md text-ink">
            Send an enquiry
          </h2>

          <form
            action={formAction}
            noValidate
            aria-labelledby="enquiry-heading"
            className="mt-8 grid gap-6 sm:grid-cols-2"
          >
            <div aria-hidden="true" className="sr-only">
              <label>
                Website
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>
            <input type="hidden" name="startedAt" ref={stampOnMount} />

            <Field id="enquiry-name" label="Name" error={fieldErrors.name}>
              {(control) => (
                <input
                  {...control}
                  ref={focusIfFirstInvalid("name")}
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  defaultValue={values.name}
                  className={controlClasses}
                />
              )}
            </Field>

            <Field id="enquiry-email" label="Email" error={fieldErrors.email}>
              {(control) => (
                <input
                  {...control}
                  ref={focusIfFirstInvalid("email")}
                  type="email"
                  name="email"
                  autoComplete="email"
                  spellCheck={false}
                  required
                  defaultValue={values.email}
                  className={controlClasses}
                />
              )}
            </Field>

            <Field
              id="enquiry-company"
              label="Company (optional)"
              error={fieldErrors.company}
            >
              {(control) => (
                <input
                  {...control}
                  ref={focusIfFirstInvalid("company")}
                  type="text"
                  name="company"
                  autoComplete="organization"
                  defaultValue={values.company}
                  className={controlClasses}
                />
              )}
            </Field>

            <Field
              id="enquiry-need"
              label="What do you need help with?"
              error={fieldErrors.need}
            >
              {(control) => (
                <Select
                  {...control}
                  key={responseKey}
                  ref={focusIfFirstInvalid("need")}
                  name="need"
                  required
                  defaultValue={values.need}
                >
                  <option value="">Choose one</option>
                  {needOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              )}
            </Field>

            <Field
              id="enquiry-budget"
              label="Budget in US dollars (optional)"
              error={fieldErrors.budget}
            >
              {(control) => (
                <Select
                  {...control}
                  key={responseKey}
                  ref={focusIfFirstInvalid("budget")}
                  name="budget"
                  defaultValue={values.budget}
                >
                  <option value="">Prefer not to say</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              )}
            </Field>

            <Field
              id="enquiry-message"
              label="Tell us about the project"
              hint="Between 20 and 5000 characters. Include the goal, the people who will use it and any deadline."
              error={fieldErrors.message}
              className="sm:col-span-2"
            >
              {(control) => (
                <textarea
                  {...control}
                  ref={focusIfFirstInvalid("message")}
                  name="message"
                  rows={6}
                  required
                  defaultValue={values.message}
                  className={cn(controlClasses, "min-h-40 resize-y")}
                />
              )}
            </Field>

            {turnstileSiteKey ? (
              <div className="sm:col-span-2">
                <TurnstileWidget
                  key={responseKey}
                  siteKey={turnstileSiteKey}
                />
              </div>
            ) : null}

            <div className="sm:col-span-2">
              <SubmitButton />
            </div>
          </form>

          {state.kind === "not-sent" ? (
            <NotSentNotice
              reason={state.reason}
              mailtoHref={state.mailtoHref}
              focusRef={focusNewResult}
            />
          ) : null}
        </>
      )}
    </div>
  );
}

function Field({ id, label, hint, error, className, children }: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <div className="mt-2">
        {children({
          id,
          "aria-describedby": describedBy,
          "aria-invalid": error ? true : undefined,
        })}
      </div>
      {hint ? (
        <p id={hintId} className="mt-2 text-sm text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="mt-2 text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Select({
  className,
  children,
  ...props
}: ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        {...props}
        className={cn(controlClasses, "appearance-none pr-11", className)}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted"
      />
    </div>
  );
}

function Confirmation({ focusRef }: { focusRef: FocusCallback }) {
  return (
    <div className="py-4 sm:py-8">
      <h2 ref={focusRef} tabIndex={-1} className="text-display-md text-ink">
        Thanks. We have your message.
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        We reply by email from {site.email} to set up a call.
      </p>
    </div>
  );
}

const notSentHeadlines: Record<NotSentReason, string> = {
  unconfigured: "Your message was not sent. Email us instead and nothing is lost.",
  failed: "Your message was not sent. Email us instead and nothing is lost.",
  rejected: "Your message was not sent. Email us instead and nothing is lost.",
  unverified:
    "We could not confirm the form was sent by a person, so nothing was sent. Try again in a moment, or email us instead.",
};

function NotSentNotice({
  reason,
  mailtoHref,
  focusRef,
}: {
  reason: NotSentReason;
  mailtoHref: string;
  focusRef: FocusCallback;
}) {
  return (
    <div
      ref={focusRef}
      tabIndex={-1}
      className="mt-8 rounded-2xl border border-gold-500/50 bg-gold-100 p-5 sm:p-6"
    >
      <p className="font-medium text-ink">{notSentHeadlines[reason]}</p>
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <ButtonLink href={mailtoHref} variant="primary">
          Email us instead
        </ButtonLink>
        <p className="text-sm text-ink">
          Or write to{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium underline underline-offset-4"
          >
            {site.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
