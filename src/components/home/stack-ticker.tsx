import {
  Container,
  Reveal,
  Section,
  SectionHeading,
  SerifAccent,
} from "@/components/ui";

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "React Native with Expo",
  "NestJS",
  "Node.js",
  "Go",
  "Rust",
  "C# / ASP.NET Core",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "Prisma",
  "Drizzle",
  "GraphQL",
  "Tailwind CSS",
  "Payload CMS",
  "AWS",
  "Google Cloud",
  "Cloudflare",
  "Vercel",
  "Docker",
  "Pulumi",
  "Sentry",
  "OpenTelemetry",
  "GitHub Actions",
  "Expo EAS",
] as const;

function StackPills() {
  return (
    <>
      {stack.map((tool) => (
        <li
          key={tool}
          className="rounded-full bg-paper px-5 py-2.5 text-base whitespace-nowrap text-ink ring-1 ring-line"
        >
          {tool}
        </li>
      ))}
    </>
  );
}

export function StackTicker() {
  return (
    <Section
      tone="surface"
      className="py-24 md:py-32"
      aria-labelledby="stack-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="stack-title"
            eyebrow="Stack"
            title={
              <>
                The tools we use in{" "}
                <SerifAccent>production</SerifAccent>.
              </>
            }
          />
        </Reveal>
      </Container>
      <div className="mt-14 overflow-hidden motion-safe:mask-fade-x">
        <div className="marquee-track flex w-max motion-reduce:w-full">
          <ul
            aria-label="Tools we use in production"
            className="flex shrink-0 gap-3 pr-3 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center"
          >
            <StackPills />
          </ul>
          <ul
            aria-hidden="true"
            className="flex shrink-0 gap-3 pr-3 motion-reduce:hidden"
          >
            <StackPills />
          </ul>
        </div>
      </div>
    </Section>
  );
}
