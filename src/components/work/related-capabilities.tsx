import Link from "next/link";
import { ArrowIcon, Container, Section } from "@/components/ui";
import { capabilities } from "@/content/services";
import type { CaseStudy } from "@/content/work";

export function RelatedCapabilities({ study }: { study: CaseStudy }) {
  const related = capabilities.filter((capability) =>
    capability.relatedWork.includes(study.slug),
  );

  if (related.length === 0) return null;

  return (
    <Section tone="surface" aria-labelledby="related-capabilities-heading">
      <Container>
        <div className="flex flex-col gap-12">
          <h2
            id="related-capabilities-heading"
            className="text-display-lg text-ink"
          >
            Related capabilities
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((capability) => (
              <li key={capability.slug}>
                <Link
                  href={`/services/${capability.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-lg bg-paper p-7 ring-1 ring-line transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-soft md:p-8"
                >
                  <h3 className="text-xl font-medium tracking-[-0.01em] text-ink">
                    {capability.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted">
                    {capability.short}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-forest-800">
                    Read about this capability
                    <ArrowIcon />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
