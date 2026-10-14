import Link from "next/link";
import { Badge, Eyebrow } from "@/components/ui";
import { caseStudies } from "@/content/work";
import { cn } from "@/lib/utils";

export function LiveProducts({ className }: { className?: string }) {
  return (
    <div className={cn("border-t border-paper/10 pt-10", className)}>
      <Eyebrow tone="dark">Live in production</Eyebrow>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {caseStudies.map((study) => (
          <li key={study.slug}>
            <Link
              href={`/work/${study.slug}`}
              className="flex items-center justify-between gap-4 rounded-2xl bg-paper/5 p-5 ring-1 ring-paper/10 transition-colors duration-200 hover:bg-paper/10"
            >
              <span className="flex min-w-0 flex-col gap-1">
                <span className="text-lg font-medium text-paper">
                  {study.name}
                </span>
                <span className="text-sm text-forest-200">{study.sector}</span>
              </span>
              <Badge tone="live">Live</Badge>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
