import { Container, Reveal, Section, SectionHeading } from "@/components/ui";

const stackGroups = [
  {
    title: "Frontend and mobile",
    tools: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Payload CMS",
      "React Native with Expo",
      "Expo EAS",
    ],
  },
  {
    title: "Backend and data",
    tools: [
      "Node.js",
      "NestJS",
      "Go",
      "Rust",
      "C# / ASP.NET Core",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "Prisma",
      "Drizzle",
    ],
  },
  {
    title: "Cloud and operations",
    tools: [
      "AWS",
      "Google Cloud",
      "Cloudflare",
      "Vercel",
      "Docker",
      "Pulumi",
      "GitHub Actions",
      "Sentry",
      "OpenTelemetry",
    ],
  },
];

export function TechStack() {
  return (
    <Section aria-labelledby="stack-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="stack-heading"
            eyebrow="Stack"
            title="The tools we use in production."
            description="The stack for each project follows the work. Every tool listed here is one we have used in production."
          />
        </Reveal>
        <Reveal className="mt-20 grid gap-px overflow-hidden rounded-xl bg-line ring-1 ring-line md:grid-cols-3">
          {stackGroups.map((group) => (
            <div
              key={group.title}
              className="flex flex-col gap-6 bg-surface p-8 md:p-10"
            >
              <h3 className="font-mono text-xs font-medium tracking-[0.14em] text-forest-700 uppercase">
                {group.title}
              </h3>
              <ul role="list" className="flex flex-col divide-y divide-line">
                {group.tools.map((tool) => (
                  <li key={tool} className="py-3 text-lg text-ink">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
