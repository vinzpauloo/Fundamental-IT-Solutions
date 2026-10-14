import { Container, Section, SectionHeading } from "@/components/ui";
import type { Capability } from "@/content/services";

type CapabilityDeliverablesProps = {
  capability: Capability;
};

export function CapabilityDeliverables({
  capability,
}: CapabilityDeliverablesProps) {
  return (
    <Section tone="paper" aria-labelledby="deliverables-heading">
      <Container>
        <SectionHeading
          id="deliverables-heading"
          eyebrow="Scope"
          title="What we deliver"
        />
        <ul className="mt-16 grid gap-x-12 md:grid-cols-2">
          {capability.deliverables.map((item, index) => (
            <li key={item} className="flex gap-6 border-t border-line py-7">
              <span
                aria-hidden="true"
                className="pt-1 font-mono text-xs tracking-[0.14em] text-forest-700"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-lg leading-relaxed text-ink">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-24 md:mt-32">
          <SectionHeading
            id="stack-heading"
            eyebrow="Stack"
            title="What we build it with"
            description="Tools we use in production for this kind of work."
          />
          <ul className="mt-12 flex flex-wrap gap-3">
            {capability.stack.map((item) => (
              <li
                key={item}
                className="inline-flex h-9 items-center rounded-full bg-surface px-4 font-mono text-sm text-ink ring-1 ring-line"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
