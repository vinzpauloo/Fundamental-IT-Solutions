import Image from "next/image";
import Link from "next/link";
import {
  ArrowIcon,
  BrowserFrame,
  Container,
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
  SerifAccent,
} from "@/components/ui";
import { caseStudies, type CaseStudy } from "@/content/work";
import { cn, siteHost } from "@/lib/utils";

function CaseCard({ study, reverse }: { study: CaseStudy; reverse: boolean }) {
  return (
    <Reveal
      as="article"
      className="grid gap-10 md:grid-cols-12 md:items-center md:gap-14"
    >
      <div className="md:col-span-7">
        <BrowserFrame address={siteHost(study.url)}>
          <Image
            src={study.images.desktop.src}
            alt={study.images.desktop.alt}
            fill
            sizes="(min-width: 1240px) 700px, (min-width: 768px) 58vw, 100vw"
            className="object-cover object-top"
          />
        </BrowserFrame>
      </div>
      <div
        className={cn(
          "flex flex-col gap-7 md:col-span-5",
          reverse && "md:order-first",
        )}
      >
        <Eyebrow>{study.sector}</Eyebrow>
        <h3 className="text-display-md text-ink">{study.name}</h3>
        <p className="text-lg leading-relaxed text-ink/80">{study.summary}</p>
        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">
            Platforms
          </p>
          <ul className="flex flex-wrap gap-2">
            {study.platforms.map((platform) => (
              <li
                key={platform}
                className="rounded-full bg-paper px-3.5 py-1.5 text-sm text-ink ring-1 ring-line"
              >
                {platform}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={`/work/${study.slug}`}
          className="group mt-2 inline-flex w-fit items-center gap-2 font-medium text-forest-700 underline-offset-4 hover:underline"
        >
          Read the case study
          <span className="sr-only">: {study.name}</span>
          <ArrowIcon />
        </Link>
      </div>
    </Reveal>
  );
}

export function SelectedWork() {
  return (
    <Section tone="surface" aria-labelledby="work-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="work-title"
            eyebrow="Selected work"
            title={
              <>
                Products we built that are{" "}
                <SerifAccent>live</SerifAccent> today.
              </>
            }
            description="Each case study covers the problem, what we built, the platforms and the stack."
          />
        </Reveal>
        <div className="mt-20 flex flex-col gap-24 md:mt-28 md:gap-32">
          {caseStudies.map((study, index) => (
            <CaseCard
              key={study.slug}
              study={study}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
