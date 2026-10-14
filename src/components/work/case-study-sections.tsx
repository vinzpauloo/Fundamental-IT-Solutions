import { Container, Section } from "@/components/ui";
import type { CaseStudy } from "@/content/work";
import { FactLabel, PlatformList, StackChips } from "./case-study-facts";

export function CaseStudyChallenge({ study }: { study: CaseStudy }) {
  return (
    <Section tone="paper" aria-labelledby="challenge-heading">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <h2
            id="challenge-heading"
            className="text-display-lg text-ink md:col-span-5"
          >
            The challenge
          </h2>
          <p className="text-lg leading-relaxed text-ink md:col-span-6 md:col-start-7 md:text-xl">
            {study.challenge}
          </p>
        </div>
      </Container>
    </Section>
  );
}

export function CaseStudyBuilt({ study }: { study: CaseStudy }) {
  return (
    <Section tone="surface" aria-labelledby="built-heading">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-12">
          <h2
            id="built-heading"
            className="text-display-lg text-ink md:col-span-4"
          >
            What we built
          </h2>
          <ol className="divide-y divide-line border-y border-line md:col-span-8">
            {study.built.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-3 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10 md:py-10"
              >
                <h3 className="flex items-baseline gap-4 text-xl font-medium tracking-[-0.01em] text-ink md:text-2xl">
                  <span
                    aria-hidden="true"
                    className="font-mono text-xs text-muted"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}

export function CaseStudyDetails({ study }: { study: CaseStudy }) {
  return (
    <Section tone="paper">
      <Container>
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="flex flex-col gap-8 md:col-span-6">
            <h2 className="text-display-md text-ink">Highlights</h2>
            <ul className="flex flex-col gap-5">
              {study.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-4 text-lg leading-relaxed text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="mt-3.5 h-px w-6 shrink-0 bg-gold-500"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-10 md:col-span-5 md:col-start-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-display-md text-ink">Platforms and stack</h2>
              <PlatformList items={study.platforms} />
            </div>
            <div className="flex flex-col gap-4">
              <FactLabel>Stack</FactLabel>
              <StackChips items={study.stack} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
