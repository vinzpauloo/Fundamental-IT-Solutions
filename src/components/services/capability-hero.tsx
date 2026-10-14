import Link from "next/link";
import {
  ButtonLink,
  CapabilityIconTile,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";
import type { Capability } from "@/content/services";
import { site } from "@/lib/site";

type CapabilityHeroProps = {
  capability: Capability;
};

export function CapabilityHero({ capability }: CapabilityHeroProps) {
  return (
    <Section tone="dark">
      <Container>
        <Link
          href="/services"
          className="inline-flex text-sm font-medium text-forest-200 underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline"
        >
          All services
        </Link>
        <div className="mt-12 flex flex-col items-start gap-10">
          <CapabilityIconTile icon={capability.icon} tone="dark" />
          <SectionHeading
            level={1}
            tone="dark"
            title={capability.title}
            description={capability.summary}
          />
          <ButtonLink href={site.cta.href} variant="on-dark" size="lg" arrow>
            {site.cta.label}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
