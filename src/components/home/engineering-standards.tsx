import {
  Container,
  Reveal,
  Section,
  SectionHeading,
  SerifAccent,
} from "@/components/ui";

const practices = [
  {
    title: "Typed codebases",
    body: "TypeScript is our default, so many mistakes show up in the editor before they reach a user.",
  },
  {
    title: "Automated checks in CI",
    body: "Changes go through review and automated checks in GitHub Actions before they ship.",
  },
  {
    title: "Infrastructure as code",
    body: "Cloud resources are described in code with Pulumi, and changes to them go through review like any other code.",
  },
  {
    title: "Monitoring and tracing",
    body: "Errors and traces go to Sentry, and uptime checks run in Better Stack, so we can see what failed and where.",
  },
  {
    title: "Documented runbooks",
    body: "Each system we operate has a written runbook, so the engineer on call knows what to check first.",
  },
  {
    title: "Staged releases",
    body: "Releases move from development to staging to production, so problems can show up in staging first.",
  },
];

export function EngineeringStandards() {
  return (
    <Section tone="dark" aria-labelledby="standards-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="standards-title"
            eyebrow="Engineering standards"
            tone="dark"
            title={
              <>
                How we build and{" "}
                <SerifAccent className="text-gold-300">operate</SerifAccent>{" "}
                what we ship.
              </>
            }
            description="The practices we use day to day on production systems."
          />
        </Reveal>
        <Reveal>
          <ul className="mt-20 grid gap-px overflow-hidden rounded-3xl bg-paper/10 ring-1 ring-paper/10 md:grid-cols-2 lg:grid-cols-3">
            {practices.map((practice) => (
              <li
                key={practice.title}
                className="flex flex-col gap-4 bg-forest-900 p-8"
              >
                <span aria-hidden="true" className="h-px w-8 bg-gold-500" />
                <h3 className="mt-4 text-xl font-medium text-paper">
                  {practice.title}
                </h3>
                <p className="leading-relaxed text-forest-200">
                  {practice.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
