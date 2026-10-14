import {
  Container,
  Section,
  SectionHeading,
  SerifAccent,
} from "@/components/ui";
import { CaseStudyRow } from "@/components/work/case-study-row";
import { caseStudies } from "@/content/work";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Selected work",
  description:
    "Products we designed, built and still run: an EV charging platform, a deals marketplace and a skin care studio website.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <Section tone="dark">
        <Container>
          <SectionHeading
            level={1}
            tone="dark"
            eyebrow="Selected work"
            title={
              <>
                Work that <SerifAccent className="text-gold-300">runs</SerifAccent>{" "}
                in production.
              </>
            }
            description="These are products we designed, built and still run. Each case study covers the challenge, what we built and the tools behind it."
          />
        </Container>
      </Section>
      <Section tone="paper">
        <Container>
          <ul className="flex flex-col gap-24 md:gap-36">
            {caseStudies.map((study, index) => (
              <CaseStudyRow
                key={study.slug}
                study={study}
                reversed={index % 2 === 1}
              />
            ))}
          </ul>
        </Container>
      </Section>
    </main>
  );
}
