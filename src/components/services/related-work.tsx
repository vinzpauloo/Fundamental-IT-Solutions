import Image from "next/image";
import Link from "next/link";
import {
  ArrowIcon,
  ButtonLink,
  Container,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import type { Capability } from "@/content/services";
import { getCaseStudy, type CaseStudy } from "@/content/work";

type RelatedWorkProps = {
  capability: Capability;
};

export function RelatedWork({ capability }: RelatedWorkProps) {
  const studies = capability.relatedWork
    .map((slug) => getCaseStudy(slug))
    .filter((study): study is CaseStudy => study !== undefined);

  return (
    <Section tone="surface" aria-labelledby="related-work-heading">
      <Container>
        {studies.length > 0 ? (
          <CaseStudyList studies={studies} />
        ) : (
          <NoCaseStudyYet />
        )}
      </Container>
    </Section>
  );
}

function CaseStudyList({ studies }: { studies: readonly CaseStudy[] }) {
  return (
    <>
      <SectionHeading
        id="related-work-heading"
        eyebrow="Work"
        title="Related work"
        description="Projects where we built this capability."
      />
      <ul className="mt-16 grid gap-6">
        {studies.map((study) => (
          <li key={study.slug}>
            <Reveal>
              <CaseStudyCard study={study} />
            </Reveal>
          </li>
        ))}
      </ul>
    </>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="grid overflow-hidden rounded-xl bg-paper ring-1 ring-line md:grid-cols-[1.25fr_1fr]">
      <div className="relative aspect-[16/10] bg-forest-100 md:aspect-auto">
        <Image
          src={study.images.desktop.src}
          alt={study.images.desktop.alt}
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-col items-start gap-5 p-8 md:p-10">
        <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
          {study.sector}, {study.location}
        </p>
        <h3 className="text-2xl font-medium tracking-tight text-ink">
          {study.name}
        </h3>
        <p className="text-lg leading-relaxed text-muted">{study.summary}</p>
        <Link
          href={`/work/${study.slug}`}
          className="group mt-auto inline-flex items-center gap-2 font-medium text-forest-700 transition-colors duration-200 hover:text-forest-600"
        >
          Read the {study.name} case study
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

function NoCaseStudyYet() {
  return (
    <div className="flex flex-col items-start gap-8">
      <SectionHeading
        id="related-work-heading"
        eyebrow="Work"
        title="Related work"
      />
      <p className="max-w-2xl text-lg leading-relaxed text-muted">
        We have not published a case study for this capability yet. We are
        happy to walk through recent work on a call, so you can see how we
        would approach your project.
      </p>
      <ButtonLink href="/contact" variant="primary" size="lg" arrow>
        Ask about recent work
      </ButtonLink>
    </div>
  );
}
