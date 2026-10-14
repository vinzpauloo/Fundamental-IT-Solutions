import {
  ButtonLink,
  Container,
  Eyebrow,
  Reveal,
  Section,
  SerifAccent,
} from "@/components/ui";
import { site } from "@/lib/site";

export function ClosingCta() {
  return (
    <Section tone="dark" aria-labelledby="cta-heading">
      <Container>
        <Reveal className="flex max-w-4xl flex-col gap-8">
          <Eyebrow tone="dark">Work with us</Eyebrow>
          <h2 id="cta-heading" className="text-display-lg text-paper">
            Have a product to build, or one to{" "}
            <SerifAccent className="text-gold-300">keep running?</SerifAccent>
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-forest-200 md:text-xl">
            Tell us what the product should do, who it is for and when you need
            it. If we are not the right team for it, we will say so.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink
              href={site.cta.href}
              variant="on-dark"
              size="lg"
              arrow
            >
              {site.cta.label}
            </ButtonLink>
            <ButtonLink
              href={`mailto:${site.email}`}
              variant="ghost"
              size="lg"
              className="text-paper ring-1 ring-paper/25"
            >
              Email us
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
