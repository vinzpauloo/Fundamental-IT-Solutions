import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyHero } from "@/components/work/case-study-hero";
import {
  CaseStudyBuilt,
  CaseStudyChallenge,
  CaseStudyDetails,
} from "@/components/work/case-study-sections";
import { NextCaseStudy } from "@/components/work/next-case-study";
import { RelatedCapabilities } from "@/components/work/related-capabilities";
import { WorkCta } from "@/components/work/work-cta";
import { caseStudySlugs, getCaseStudy } from "@/content/work";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const path = `/work/${study.slug}`;

  return pageMetadata({
    title: study.name,
    description: study.summary,
    path,
    image: `${path}/opengraph-image`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <CaseStudyHero study={study} />
      <CaseStudyChallenge study={study} />
      <CaseStudyBuilt study={study} />
      <CaseStudyDetails study={study} />
      <RelatedCapabilities study={study} />
      <NextCaseStudy current={study} />
      <WorkCta />
    </main>
  );
}
