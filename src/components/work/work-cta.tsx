import {
  ButtonLink,
  Container,
  Section,
  SectionHeading,
  SerifAccent,
} from "@/components/ui";
import { site } from "@/lib/site";

export function WorkCta() {
  return (
    <Section tone="dark">
      <Container>
        <div className="flex max-w-3xl flex-col items-start gap-10">
          <SectionHeading
            tone="dark"
            title={
              <>
                Have a product like this{" "}
                <SerifAccent className="text-gold-300">in mind</SerifAccent>?
              </>
            }
            description="Tell us what it needs to do, who uses it and how it has to run after launch. We will talk through the scope and the stack with you."
          />
          <ButtonLink href={site.cta.href} variant="on-dark" size="lg" arrow>
            {site.cta.label}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
