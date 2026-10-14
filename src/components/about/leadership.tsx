import {
  Container,
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";

export function Leadership() {
  return (
    <Section tone="surface" aria-labelledby="leadership-heading">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-12">
          <Reveal className="md:col-span-5">
            <SectionHeading
              id="leadership-heading"
              eyebrow="Leadership"
              title="Who leads the technical work."
            />
          </Reveal>
          <Reveal delay={1} className="md:col-span-6 md:col-start-7">
            <article className="flex flex-col gap-6 rounded-xl bg-paper p-8 ring-1 ring-line md:p-12">
              <div className="flex flex-col gap-4">
                <Eyebrow>Chief Engineer</Eyebrow>
                <h3 className="text-display-md text-ink">Vincent Paul</h3>
              </div>
              <p className="text-lg leading-relaxed text-muted">
                Leads architecture and delivery across our web, mobile and
                cloud work.
              </p>
            </article>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
