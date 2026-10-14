import { Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export function ContactDetails() {
  const { streetLines, locality, postalCode, region, country } = site.address;
  const [emailLocalPart, emailDomain] = site.email.split("@");
  const addressLines = [
    ...streetLines,
    `${locality} ${postalCode}`,
    region,
    country,
  ];

  return (
    <div className="space-y-14">
      <div className="space-y-4">
        <Eyebrow>Email</Eyebrow>
        <a
          href={`mailto:${site.email}`}
          className="block text-xl font-medium text-ink underline decoration-gold-500 decoration-2 underline-offset-8 transition-colors hover:decoration-forest-600 md:text-2xl"
        >
          {emailLocalPart}@
          <wbr />
          <span className="whitespace-nowrap">{emailDomain}</span>
        </a>
        <p className="text-muted">
          Write to us directly if the form does not suit you.
        </p>
      </div>

      <div className="space-y-4">
        <Eyebrow>Address</Eyebrow>
        <address className="text-lg leading-relaxed text-ink not-italic">
          {addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <p className="text-muted">
          We work with clients remotely across Asia and beyond.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-medium tracking-[-0.02em] text-ink">
          What happens next
        </h2>
        <ol className="mt-6 list-decimal space-y-6 pl-6 marker:font-mono marker:text-forest-700">
          <li className="pl-2">
            <p className="font-medium text-ink">We read every message.</p>
            <p className="mt-1 text-muted">
              Tell us about the product, the people who use it and what is
              slowing you down.
            </p>
          </li>
          <li className="pl-2">
            <p className="font-medium text-ink">
              We reply by email to set up a call.
            </p>
            <p className="mt-1 text-muted">
              The reply comes from {site.email}.
            </p>
          </li>
          <li className="pl-2">
            <p className="font-medium text-ink">We scope the work together.</p>
            <p className="mt-1 text-muted">
              On the call we agree what we build first and how we will run it
              afterwards.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
