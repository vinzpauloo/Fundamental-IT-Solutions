import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, Container, Eyebrow, Section } from "@/components/ui";
import { caseStudies, type CaseStudy } from "@/content/work";

export function NextCaseStudy({ current }: { current: CaseStudy }) {
  const currentIndex = caseStudies.findIndex(
    (study) => study.slug === current.slug,
  );
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  if (next.slug === current.slug) return null;

  return (
    <Section tone="paper">
      <Container>
        <Link
          href={`/work/${next.slug}`}
          className="group grid overflow-hidden rounded-xl bg-surface shadow-soft ring-1 ring-line transition-shadow duration-200 ease-out hover:shadow-lift md:grid-cols-12"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-forest-100 md:col-span-7 md:aspect-auto md:min-h-80">
            <Image
              src={next.images.desktop.src}
              alt={next.images.desktop.alt}
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-5 p-8 md:col-span-5 md:p-12">
            <Eyebrow>Next project</Eyebrow>
            <h2 className="text-display-md text-ink">{next.name}</h2>
            <p className="text-base text-muted">
              {next.sector}, {next.location}
            </p>
            <span className="mt-2 inline-flex items-center gap-2 font-medium text-forest-800">
              Read the case study
              <ArrowIcon />
            </span>
          </div>
        </Link>
      </Container>
    </Section>
  );
}
