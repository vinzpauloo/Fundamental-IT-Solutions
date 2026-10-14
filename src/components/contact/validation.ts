export const enquiryFields = [
  "name",
  "email",
  "company",
  "need",
  "budget",
  "message",
] as const;

export type EnquiryField = (typeof enquiryFields)[number];

export type EnquiryValues = Record<EnquiryField, string>;

export type FieldErrors = Partial<Record<EnquiryField, string>>;

export type EnquiryValidation =
  | { ok: true; values: EnquiryValues }
  | { ok: false; values: EnquiryValues; fieldErrors: FieldErrors };

export const emptyEnquiryValues: EnquiryValues = {
  name: "",
  email: "",
  company: "",
  need: "",
  budget: "",
  message: "",
};

export const budgetOptions: readonly string[] = [
  "Under $10k",
  "$10k–$50k",
  "$50k–$150k",
  "$150k+",
  "Not sure yet",
];

const emailPattern = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/;
const lineBreakPattern = /[\r\n]/;
const maxEmailLength = 254;
const minNameLength = 2;
const maxNameLength = 120;
const maxCompanyLength = 120;
const minMessageLength = 20;
const maxMessageLength = 5000;

export function normalizeEnquiry(input: EnquiryValues): EnquiryValues {
  return {
    name: input.name.trim(),
    email: input.email.trim(),
    company: input.company.trim(),
    need: input.need.trim(),
    budget: input.budget.trim(),
    message: input.message.trim(),
  };
}

export function validateEnquiry(
  input: EnquiryValues,
  needOptions: readonly string[],
): EnquiryValidation {
  const values = normalizeEnquiry(input);
  const fieldErrors: FieldErrors = {};

  const nameLength = characterCount(values.name);
  if (
    nameLength < minNameLength ||
    nameLength > maxNameLength ||
    lineBreakPattern.test(values.name)
  ) {
    fieldErrors.name = "Enter your name. Use 2 to 120 characters.";
  }

  if (!emailPattern.test(values.email) || values.email.length > maxEmailLength) {
    fieldErrors.email =
      "Enter an email address we can reply to, such as name@company.com.";
  }

  if (
    characterCount(values.company) > maxCompanyLength ||
    lineBreakPattern.test(values.company)
  ) {
    fieldErrors.company = "Keep the company name to 120 characters or fewer.";
  }

  if (!needOptions.includes(values.need)) {
    fieldErrors.need = "Choose what you need help with.";
  }

  if (values.budget !== "" && !budgetOptions.includes(values.budget)) {
    fieldErrors.budget = "Choose a range from the list, or prefer not to say.";
  }

  const messageLength = characterCount(values.message);
  if (messageLength < minMessageLength) {
    fieldErrors.message =
      "Tell us a little more. The message needs at least 20 characters.";
  } else if (messageLength > maxMessageLength) {
    fieldErrors.message = "Keep the message to 5000 characters or fewer.";
  }

  return Object.keys(fieldErrors).length === 0
    ? { ok: true, values }
    : { ok: false, values, fieldErrors };
}

function characterCount(value: string): number {
  return Array.from(value).length;
}
