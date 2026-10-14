import { Container, Section, SectionHeading } from "@/components/ui";

type EngagementModel = {
  title: string;
  bestFor: string;
  description: string;
};

const engagementModels: readonly EngagementModel[] = [
  {
    title: "Scoped project build",
    bestFor:
      "A product or feature with a clear brief, where the scope can be agreed before work starts.",
    description:
      "We agree the scope and what done looks like first. Then we design, build and test the work, and release it through staging to production, with the steps written down.",
  },
  {
    title: "Embedded senior team",
    bestFor:
      "A product your team already owns, when it needs more senior engineers for a period.",
    description:
      "Our engineers work inside your team, in your repositories, tickets and planning, alongside the people who know the product best. Your priorities set the work, and changes go through your review and release process.",
  },
  {
    title: "Ongoing operations",
    bestFor:
      "Software already in production that needs someone watching it, responding to incidents and shipping releases safely.",
    description:
      "We start by reading what is running now. Then we take on monitoring, on-call cover, releases and runbooks under an ongoing support agreement, and we write up each serious incident for your team.",
  },
];

export function EngagementModels() {
  return (
    <Section tone="surface" aria-labelledby="work-together-heading">
      <Container>
        <SectionHeading
          id="work-together-heading"
          eyebrow="Engagement"
          title="How we can work together"
          description="Three ways to work with us. Once we know what you are building, we will tell you which one fits."
        />
        <ol className="mt-16 grid gap-6 md:grid-cols-3">
          {engagementModels.map((model, index) => (
            <li key={model.title} className="flex">
              <article className="flex w-full flex-col rounded-xl bg-paper p-8 ring-1 ring-line md:p-9">
                <span className="font-mono text-xs tracking-[0.14em] text-forest-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl font-medium tracking-tight text-ink">
                  {model.title}
                </h3>
                <p className="mt-8 font-mono text-xs tracking-[0.14em] text-muted uppercase">
                  Best for
                </p>
                <p className="mt-2 text-lg leading-relaxed text-ink">
                  {model.bestFor}
                </p>
                <p className="mt-6 leading-relaxed text-muted">
                  {model.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
