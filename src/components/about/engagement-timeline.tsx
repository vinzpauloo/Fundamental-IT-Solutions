import { Container, Reveal, Section, SectionHeading } from "@/components/ui";

const steps = [
  {
    title: "Discover",
    summary:
      "We learn how your business works, who the product is for and which systems it has to connect to. We start from what already runs, including the systems you have today.",
    deliverables: [
      "A written scope that names the systems involved",
      "A plan you can review before any build starts",
    ],
  },
  {
    title: "Design and build",
    summary:
      "We design the product and build it in typed code, with automated checks in CI and a content editor where your team needs one. Infrastructure is written as code, and changes go through review.",
    deliverables: [
      "Working software in a staging environment you can test",
      "Infrastructure as code, reviewed like any other change",
    ],
  },
  {
    title: "Launch",
    summary:
      "We release from staging to production, with error monitoring and tracing switched on. For mobile apps, we run the builds and store submissions through Expo EAS.",
    deliverables: [
      "A live product, with the release steps written down",
      "Error monitoring and tracing in place from the first release",
    ],
  },
  {
    title: "Operate",
    summary:
      "We stay on to monitor, respond and release changes under an ongoing support agreement. Each system we operate has a runbook, and after an incident we write up what happened.",
    deliverables: [
      "On-call cover for production, following written runbooks",
      "Written post-incident reviews, shared with your team",
    ],
  },
];

export function EngagementTimeline() {
  return (
    <Section aria-labelledby="process-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="process-heading"
            eyebrow="Process"
            title="How an engagement runs."
          />
        </Reveal>
        <ol
          role="list"
          className="mt-20 grid gap-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              className="relative flex flex-col gap-5 border-t border-line pt-10"
            >
              <span
                aria-hidden="true"
                className="absolute -top-[5px] left-0 size-2.5 rounded-full bg-gold-500"
              />
              <p className="font-mono text-sm text-forest-700">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
                {step.title}
              </h3>
              <p className="leading-relaxed text-muted">{step.summary}</p>
              <div className="mt-auto flex flex-col gap-3 pt-4">
                <p className="font-mono text-xs font-medium tracking-[0.14em] text-forest-700 uppercase">
                  You get
                </p>
                <ul role="list" className="flex flex-col gap-3">
                  {step.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-3 text-ink">
                      <span
                        aria-hidden="true"
                        className="mt-[0.7em] h-px w-3 shrink-0 bg-gold-500"
                      />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
