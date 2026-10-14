import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CapabilityDeliverables } from "@/components/services/capability-deliverables";
import { CapabilityFaq } from "@/components/services/capability-faq";
import { CapabilityHero } from "@/components/services/capability-hero";
import { ServicesClosingCta } from "@/components/services/closing-cta";
import { OtherCapabilities } from "@/components/services/other-capabilities";
import { RelatedWork } from "@/components/services/related-work";
import { capabilitySlugs, getCapability } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

type CapabilityPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return capabilitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CapabilityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapability(slug);
  if (!capability) notFound();

  return pageMetadata({
    path: `/services/${capability.slug}`,
    title: capability.title,
    description: capability.short,
  });
}

export default async function CapabilityPage({ params }: CapabilityPageProps) {
  const { slug } = await params;
  const capability = getCapability(slug);
  if (!capability) notFound();

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <CapabilityHero capability={capability} />
      <CapabilityDeliverables capability={capability} />
      <RelatedWork capability={capability} />
      <CapabilityFaq capability={capability} />
      <OtherCapabilities capability={capability} />
      <ServicesClosingCta />
    </main>
  );
}
