import {
  Container,
  Section,
  SectionHeading,
  SerifAccent,
} from "@/components/ui";

export function ServicesIntro() {
  return (
    <Section tone="dark" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          id="services-heading"
          level={1}
          tone="dark"
          eyebrow="Services"
          title={
            <>
              We build the product and{" "}
              <SerifAccent className="text-gold-300">keep it running</SerifAccent>.
            </>
          }
          description="We design, build and run web platforms, mobile apps, backend services, cloud infrastructure and AI automation. A product often needs more than one of these, so we work across them, and we stay on to monitor, respond and release what we ship."
        />
      </Container>
    </Section>
  );
}
