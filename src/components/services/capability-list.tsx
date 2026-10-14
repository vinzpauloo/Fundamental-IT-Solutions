import Link from "next/link";
import {
  ArrowIcon,
  CapabilityIconTile,
  Container,
  Reveal,
  Section,
} from "@/components/ui";
import { capabilities, type Capability } from "@/content/services";

export function CapabilityList() {
  return (
    <Section tone="paper" aria-label="Capabilities" className="pt-0 md:pt-0">
      <Container>
        <ul className="border-b border-line">
          {capabilities.map((capability, index) => (
            <li key={capability.slug}>
              <Reveal>
                <CapabilityBlock
                  capability={capability}
                  number={String(index + 1).padStart(2, "0")}
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

type CapabilityBlockProps = {
  capability: Capability;
  number: string;
};

function CapabilityBlock({ capability, number }: CapabilityBlockProps) {
  return (
    <article className="grid gap-10 border-t border-line py-16 md:grid-cols-12 md:gap-x-12 md:py-24">
      <div className="flex flex-col items-start md:col-span-5">
        <div className="flex items-center gap-5">
          <CapabilityIconTile icon={capability.icon} />
          <span className="font-mono text-xs tracking-[0.14em] text-muted">
            {number}
          </span>
        </div>
        <h2 className="mt-8 text-display-md text-ink">{capability.title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          {capability.summary}
        </p>
        <Link
          href={`/services/${capability.slug}`}
          className="group mt-8 inline-flex items-center gap-2 font-medium text-forest-700 transition-colors duration-200 hover:text-forest-600"
        >
          {capability.title} in detail
          <ArrowIcon />
        </Link>
      </div>
      <div className="md:col-span-6 md:col-start-7">
        <p className="font-mono text-xs tracking-[0.14em] text-forest-700 uppercase">
          What we deliver
        </p>
        <ul className="mt-6 divide-y divide-line border-t border-line">
          {capability.deliverables.map((item) => (
            <li key={item} className="py-4 text-base leading-relaxed text-ink">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
