import Image from "next/image";
import {
  Badge,
  BrowserFrame,
  ButtonLink,
  Container,
  Eyebrow,
  PhoneFrame,
  Section,
} from "@/components/ui";
import type { CaseLink, CaseStudy } from "@/content/work";
import { siteHost } from "@/lib/utils";
import {
  ExternalTextLink,
  externalLinkAttributes,
  OpensInNewTab,
} from "./external-links";

export function CaseStudyHero({ study }: { study: CaseStudy }) {
  const hasLinkGroups = Boolean(
    study.appLinks?.length || study.relatedLinks?.length,
  );

  return (
    <Section tone="dark" aria-labelledby="case-study-name">
      <Container>
        <div className="flex max-w-3xl flex-col items-start gap-6">
          <Eyebrow tone="dark">{study.sector}</Eyebrow>
          <h1
            id="case-study-name"
            className="text-display-xl text-paper"
          >
            {study.name}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <Badge tone="live">{study.status}</Badge>
            <span className="text-base text-forest-200">{study.location}</span>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-forest-200 md:text-xl">
            {study.summary}
          </p>
          <div className="pt-2">
            <ButtonLink
              href={study.url}
              variant="on-dark"
              size="lg"
              arrow
              {...externalLinkAttributes}
            >
              Visit {siteHost(study.url)}
              <OpensInNewTab />
            </ButtonLink>
          </div>
          {hasLinkGroups ? (
            <div className="flex flex-col gap-8 md:flex-row md:gap-14">
              {study.appLinks?.length ? (
                <LinkGroup label="Apps" links={study.appLinks} />
              ) : null}
              {study.relatedLinks?.length ? (
                <LinkGroup label="Related sites" links={study.relatedLinks} />
              ) : null}
            </div>
          ) : null}
        </div>
        <CaseStudyShowcase study={study} />
      </Container>
    </Section>
  );
}

function LinkGroup({
  label,
  links,
}: {
  label: string;
  links: readonly CaseLink[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-forest-200 uppercase">
        {label}
      </p>
      <ul className="flex flex-wrap gap-x-6 gap-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <ExternalTextLink href={link.href} className="text-paper">
              {link.label}
            </ExternalTextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CaseStudyShowcase({ study }: { study: CaseStudy }) {
  return (
    <div className="relative mt-16 md:mt-24">
      <BrowserFrame address={siteHost(study.url)}>
        <Image
          src={study.images.desktop.src}
          alt={study.images.desktop.alt}
          fill
          preload
          sizes="(min-width: 1240px) 1100px, 100vw"
          className="object-cover object-top"
        />
      </BrowserFrame>
      <PhoneFrame className="absolute right-[5%] -bottom-16 w-[34%] max-w-[14rem] md:-bottom-24 md:w-[22%]">
        <Image
          src={study.images.mobile.src}
          alt={study.images.mobile.alt}
          fill
          sizes="(min-width: 768px) 14rem, 34vw"
          className="object-cover object-top"
        />
      </PhoneFrame>
    </div>
  );
}
