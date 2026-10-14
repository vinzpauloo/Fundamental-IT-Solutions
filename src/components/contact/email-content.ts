import type { EnquiryValues } from "@/components/contact/validation";

const notGiven = "Not given";

export function enquirySubject(values: EnquiryValues): string {
  return `Website enquiry from ${values.name}`;
}

export function enquiryText(values: EnquiryValues): string {
  return [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company: ${values.company || notGiven}`,
    `Need: ${values.need}`,
    `Budget: ${values.budget || notGiven}`,
    "",
    "Message:",
    values.message,
  ].join("\n");
}

export function buildEnquiryMailto(
  address: string,
  values: EnquiryValues,
): string {
  const subject = encodeURIComponent(enquirySubject(values));
  const body = encodeURIComponent(enquiryText(values));
  return `mailto:${address}?subject=${subject}&body=${body}`;
}
