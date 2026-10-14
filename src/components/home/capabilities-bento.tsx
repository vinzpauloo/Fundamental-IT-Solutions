import Link from "next/link";
import {
  ArrowIcon,
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
import { cn } from "@/lib/utils";

type TileTone = "light" | "dark";

type TileLayout = {
  span: string;
  tone: TileTone;
};

const tileLayouts: Record<CapabilitySlug, TileLayout> = {
  "web-platforms": { span: "md:col-span-4 md:row-span-2", tone: "dark" },
  "mobile-apps": { span: "md:col-span-2", tone: "light" },
  "backend-integrations": { span: "md:col-span-2", tone: "light" },
  "cloud-platforms": { span: "md:col-span-2", tone: "light" },
  "operations-reliability": { span: "md:col-span-2", tone: "light" },
  "ai-automation": { span: "md:col-span-2", tone: "light" },
};

function CapabilityTile({
  capability,
  tone,
}: {
  capability: Capability;
  tone: TileTone;
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
        <ul className="mt-16 grid gap-4 md:grid-cols-6 md:gap-5">
          {capabilities.map((capability) => {
            const layout = tileLayouts[capability.slug];

            return (
              <Reveal as="li" key={capability.slug} className={layout.span}>
                <CapabilityTile capability={capability} tone={layout.tone} />
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
