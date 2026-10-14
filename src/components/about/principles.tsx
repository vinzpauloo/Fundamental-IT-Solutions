import { Container, Reveal, Section, SectionHeading } from "@/components/ui";

const principles = [
  {
    title: "One team from design to operations.",
    body: "The people who design a product also build it, launch it and help run it. Knowledge stays with the team, so the people on call understand the systems they run.",
  },
  {
    title: "Boring technology where it counts.",
    body: "For payments, data and the parts of a system that must not fail, we choose mature tools with a long record in production. A newer tool has to solve a problem the proven ones cannot before we adopt it.",
  },
  {
    title: "Everything typed, checked and observable.",
    body: "We write typed code and run automated checks in CI before anything ships. Error monitoring and tracing show what failed and where, so we fix the cause instead of guessing.",
  },
  {
    title: "Write it down.",
    body: "Runbooks, release steps and post-incident reviews are written and shared with your team. A process that only one person knows is not finished.",
  },
  {
    title: "No black boxes.",
    body: "Code, infrastructure and release steps live in version control with written docs, so anyone on your team can see how a system is built, deployed and run.",
  },
];

export function Principles() {
  return (
    <Section tone="surface" aria-labelledby="principles-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="principles-heading"
            eyebrow="Principles"
            title="How we work."
          />
        </Reveal>
        <ul
          role="list"
          className="mt-16 divide-y divide-line border-y border-line"
        >
          {principles.map((principle, index) => (
            <Reveal
              as="li"
              key={principle.title}
              className="grid gap-6 py-10 md:grid-cols-12 md:gap-x-12 md:py-14"
            >
              <div className="flex items-baseline gap-5 md:col-span-6">
                <span
                  aria-hidden="true"
                  className="font-mono text-sm text-forest-700"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-display-md text-ink">{principle.title}</h3>
              </div>
              <p className="text-lg leading-relaxed text-muted md:col-span-5 md:col-start-8">
                {principle.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
