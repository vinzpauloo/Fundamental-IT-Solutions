import { Container, Eyebrow, Section, SerifAccent } from "@/components/ui";

const facts = [
  { label: "Based in", value: "Taguig, Metro Manila" },
  { label: "Clients", value: "Remote, across Asia and beyond" },
  { label: "Stays on", value: "After launch" },
];

export function AboutHero() {
  return (
    <Section
      tone="dark"
      aria-labelledby="about-heading"
      className="pb-24 md:pb-28"
    >
      <Container>
        <div className="flex max-w-5xl flex-col gap-8">
          <Eyebrow tone="dark">About</Eyebrow>
          <h1 id="about-heading" className="text-display-xl text-paper">
            We build software end to end, and we{" "}
            <SerifAccent className="text-gold-300">
              keep it running.
            </SerifAccent>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-forest-200 md:text-xl">
            Fundamental IT Solutions is a product-engineering company in
            Taguig, Metro Manila. We design, build and run web platforms, mobile
            apps, backend services and cloud infrastructure, and we stay on
            after launch to operate what we ship.
          </p>
        </div>
        <dl className="mt-20 grid gap-8 border-t border-paper/10 pt-8 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-xs font-medium tracking-[0.14em] text-forest-200 uppercase">
                {fact.label}
              </dt>
              <dd className="mt-2 text-lg text-paper">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
