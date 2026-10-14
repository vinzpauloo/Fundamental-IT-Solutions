import {
  Container,
  Reveal,
  Section,
  SectionHeading,
  SerifAccent,
} from "@/components/ui";

const steps = [
  {
    title: "Discover",
    body: "We start by learning how your business works and which steps the software has to support. We check those flows before we commit to a plan.",
  },
  {
    title: "Design and build",
    body: "We build in TypeScript, with review and automated checks on every change. Schema changes live in migration files, so every change can be read and repeated.",
  },
  {
    title: "Launch",
    body: "Each release goes to staging before production. For mobile apps, we submit builds through Expo EAS and keep the release steps written down.",
  },
  {
    title: "Operate",
    body: "We stay on after launch. We watch errors and traces, keep a runbook for each system, cover production on call and release changes through the same staged steps.",
  },
];

export function HowWeWork() {
  return (
    <Section tone="paper" aria-labelledby="how-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="how-title"
            eyebrow="How we work"
            title={
              <>
                From first conversation to a system we{" "}
                <SerifAccent>stay</SerifAccent> with.
              </>
            }
          />
        </Reveal>
        <Reveal>
          <ol className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-col gap-5 border-t border-line pt-8"
              >
                <span className="font-mono text-sm font-medium tracking-[0.14em] text-forest-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-medium tracking-[-0.02em] text-ink">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </Section>
  );
}
