import Link from "next/link";
import { ArrowIcon, Container, Section, SectionHeading } from "@/components/ui";
import { capabilities, type Capability } from "@/content/services";

type OtherCapabilitiesProps = {
  capability: Capability;
};

export function OtherCapabilities({ capability }: OtherCapabilitiesProps) {
  const others = capabilities.filter((item) => item.slug !== capability.slug);

  return (
    <Section tone="surface" aria-labelledby="other-capabilities-heading">
      <Container>
        <SectionHeading
          id="other-capabilities-heading"
          eyebrow="Capabilities"
          title="Other capabilities"
        />
        <ul className="mt-16 divide-y divide-line border-y border-line">
          {others.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/services/${item.slug}`}
                className="group flex items-center justify-between gap-8 py-7"
              >
                <span className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-10">
                  <span className="text-xl font-medium tracking-tight text-ink transition-colors duration-200 group-hover:text-forest-700 md:text-2xl">
                    {item.title}
                  </span>
                  <span className="text-muted">{item.short}</span>
                </span>
                <ArrowIcon />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
