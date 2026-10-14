import {
  ButtonLink,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";
import { site } from "@/lib/site";

export function ServicesClosingCta() {
  return (
    <Section tone="dark" aria-labelledby="services-cta-heading">
      <Container>
        <div className="flex flex-col items-start gap-12">
          <SectionHeading
            id="services-cta-heading"
            tone="dark"
            eyebrow="Contact"
            title="Tell us what you are building."
            description="Send us a short description of the product, who will use it and what has to be true at launch. We will tell you plainly whether we are the right team."
          />
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
            <ButtonLink href={site.cta.href} variant="on-dark" size="lg" arrow>
              {site.cta.label}
            </ButtonLink>
            <a
              href={`mailto:${site.email}`}
              className="text-forest-200 underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline"
            >
              {site.email}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
