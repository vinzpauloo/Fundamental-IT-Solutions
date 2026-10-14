import Image from "next/image";
import {
  Badge,
  BrowserFrame,
  ButtonLink,
  Eyebrow,
  Reveal,
} from "@/components/ui";
import type { CaseStudy } from "@/content/work";
import { cn, siteHost } from "@/lib/utils";
import { FactLabel, PlatformList, StackChips } from "./case-study-facts";
import { ExternalTextLink } from "./external-links";

export function CaseStudyRow({
  study,
  reversed = false,
}: {
  study: CaseStudy;
  reversed?: boolean;
}) {
  return (
    <Reveal as="li" className="border-t border-line pt-12 md:pt-16">
      <article
        aria-labelledby={`${study.slug}-name`}
        className="grid gap-10 md:grid-cols-12 md:items-center md:gap-12"
      >
        <div className={cn("md:col-span-7", reversed && "md:order-last")}>
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
        <div className="flex flex-col items-start gap-6 md:col-span-5">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Eyebrow>{study.sector}</Eyebrow>
            <span className="text-sm text-muted">{study.location}</span>
          </div>
          <h2 id={`${study.slug}-name`} className="text-display-lg text-ink">
            {study.name}
          </h2>
          <Badge tone="live">{study.status}</Badge>
          <p className="text-lg leading-relaxed text-muted">{study.summary}</p>
          <div className="flex flex-col gap-3">
            <FactLabel>Platforms</FactLabel>
            <PlatformList items={study.platforms} inline />
          </div>
          <div className="flex flex-col gap-3">
            <FactLabel>Stack</FactLabel>
            <StackChips items={study.stack.slice(0, 5)} />
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2">
            <ButtonLink href={`/work/${study.slug}`} arrow>
              Read the case study
              <span className="sr-only">: {study.name}</span>
            </ButtonLink>
            <ExternalTextLink href={study.url}>
              Visit {siteHost(study.url)}
            </ExternalTextLink>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
