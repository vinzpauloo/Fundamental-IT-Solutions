import { Container, Section, SectionHeading } from "@/components/ui";
import type { Capability } from "@/content/services";

type CapabilityFaqProps = {
  capability: Capability;
};

export function CapabilityFaq({ capability }: CapabilityFaqProps) {
  return (
    <Section tone="paper" aria-labelledby="faq-heading">
      <Container>
        <SectionHeading
          id="faq-heading"
          eyebrow="Questions"
          title="Common questions"
        />
        <div className="mt-16 max-w-3xl divide-y divide-line border-y border-line">
          {capability.faq.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7 [&::-webkit-details-marker]:hidden">
                <h3 className="text-xl font-medium tracking-tight text-ink transition-colors duration-200 group-hover:text-forest-700">
                  {item.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="relative mt-1.5 size-5 shrink-0 text-forest-700"
                >
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-current" />
                  <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 rounded-full bg-current transition-transform duration-200 ease-out group-open:rotate-90" />
                </span>
              </summary>
              <p className="max-w-2xl pb-7 text-lg leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
