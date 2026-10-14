import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowIcon,
  BrowserFrame,
  capabilityIcons,
  Container,
  Reveal,
  Section,
  SectionHeading,
  SerifAccent,
} from "@/components/ui";
import {
  capabilities,
  type Capability,
  type CapabilitySlug,
} from "@/content/services";
import { caseStudies, type CaseSlug } from "@/content/work";
import { cn, siteHost } from "@/lib/utils";

type TileTone = "light" | "dark";

type TileLayout = {
  span: string;
  tone: TileTone;
};

const webPlatformShowcase: readonly CaseSlug[] = ["nomad", "b-ticket"];

const showcaseFramePlacement = [
  "top-0 left-0",
  "right-0 bottom-0 transition-transform duration-300 ease-out group-hover:-translate-y-1.5 motion-reduce:transition-none",
];

function WebPlatformsShowcase() {
  const studies = caseStudies.filter((study) =>
    webPlatformShowcase.includes(study.slug),
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none hidden flex-1 items-center md:flex"
    >
      <div className="relative aspect-[16/10] w-full">
        {studies.map((study, index) => (
          <BrowserFrame
            key={study.slug}
            address={siteHost(study.url)}
            className={cn(
              "absolute w-[68%] ring-paper/10",
              showcaseFramePlacement[index],
            )}
          >
            <Image
              src={study.images.desktop.src}
              alt=""
              fill
              sizes="(min-width: 1240px) 490px, (min-width: 1024px) 45vw, 60vw"
              className="object-cover object-top"
            />
          </BrowserFrame>
        ))}
      </div>
    </div>
  );
}

const tilePreviews: Partial<Record<CapabilitySlug, ReactNode>> = {
  "web-platforms": <WebPlatformsShowcase />,
};

const tileLayouts: Record<CapabilitySlug, TileLayout> = {
  "web-platforms": {
    span: "md:col-span-2 lg:col-span-4 lg:row-span-2",
    tone: "dark",
  },
  "mobile-apps": { span: "lg:col-span-2", tone: "light" },
  "backend-integrations": { span: "lg:col-span-2", tone: "light" },
  "cloud-platforms": { span: "lg:col-span-2", tone: "light" },
  "operations-reliability": { span: "lg:col-span-2", tone: "light" },
  "ai-automation": { span: "md:col-span-2 lg:col-span-2", tone: "light" },
};

function CapabilityTile({
  capability,
  tone,
  preview,
}: {
  capability: Capability;
  tone: TileTone;
  preview?: ReactNode;
}) {
  const Icon = capabilityIcons[capability.icon];
  const isDark = tone === "dark";

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col gap-7 overflow-hidden rounded-3xl p-7 transition-shadow duration-200 hover:shadow-lift md:p-8",
        isDark
          ? "texture-glow bg-forest-900 text-paper ring-1 ring-forest-700"
          : "bg-surface text-ink shadow-soft ring-1 ring-line",
      )}
    >
      <span
        className={cn(
          "flex size-12 items-center justify-center rounded-2xl ring-1",
          isDark
            ? "bg-forest-800 text-gold-300 ring-forest-600"
            : "bg-forest-100 text-forest-800 ring-forest-200",
        )}
      >
        <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
      </span>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-medium tracking-[-0.02em]">
          <Link
            href={`/services/${capability.slug}`}
            className="inline-flex items-center gap-2 rounded-sm after:absolute after:inset-0"
          >
            {capability.title}
            <ArrowIcon />
          </Link>
        </h3>
        <p
          className={cn(
            "text-base leading-relaxed",
            isDark ? "text-forest-200" : "text-muted",
          )}
        >
          {capability.short}
        </p>
      </div>
      {preview}
      <ul
        className={cn(
          "mt-auto flex flex-col gap-3 border-t pt-6 text-sm leading-relaxed",
          isDark ? "border-paper/10 text-paper/85" : "border-line text-ink/80",
        )}
      >
        {capability.deliverables.slice(0, 3).map((deliverable) => (
          <li key={deliverable} className="flex gap-3">
            <span
              aria-hidden="true"
              className={cn(
                "mt-2 size-1.5 shrink-0 rounded-full",
                isDark ? "bg-gold-300" : "bg-gold-500",
              )}
            />
            {deliverable}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function CapabilitiesBento() {
  return (
    <Section tone="paper" aria-labelledby="capabilities-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="capabilities-title"
            eyebrow="Capabilities"
            title={
              <>
                From the public website to the{" "}
                <SerifAccent>cloud</SerifAccent> under it.
              </>
            }
            description="Each area has a page of its own, with what we deliver and the stack we use."
          />
        </Reveal>
        <ul className="mt-16 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-6">
          {capabilities.map((capability) => {
            const layout = tileLayouts[capability.slug];

            return (
              <Reveal as="li" key={capability.slug} className={layout.span}>
                <CapabilityTile
                  capability={capability}
                  tone={layout.tone}
                  preview={tilePreviews[capability.slug]}
                />
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
