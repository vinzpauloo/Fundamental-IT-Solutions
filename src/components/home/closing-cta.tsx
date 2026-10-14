import {
  ButtonLink,
  Container,
  Reveal,
  Section,
  SerifAccent,
} from "@/components/ui";
import { site } from "@/lib/site";

export function ClosingCta() {
  return (
    <Section tone="dark" aria-labelledby="cta-title">
      <Container>
        <Reveal className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-16">
          <h2 id="cta-title" className="max-w-3xl text-display-lg text-paper">
            Have a product to build or a system to{" "}
            <SerifAccent className="text-gold-300">keep running</SerifAccent>?
          </h2>
          <div className="flex shrink-0 flex-col gap-5">
            <ButtonLink href={site.cta.href} variant="on-dark" size="lg" arrow>
              {site.cta.label}
            </ButtonLink>
            <p className="text-forest-200">
              Prefer email?{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-paper underline underline-offset-4 hover:text-gold-300"
              >
                {site.email}
              </a>
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
