import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type BadgeTone = "neutral" | "forest" | "gold" | "live";

export interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  tone?: BadgeTone;
}

const toneClasses: Record<BadgeTone, string> = {
  neutral: "bg-surface text-ink ring-1 ring-line",
  forest: "bg-forest-900 text-forest-100",
  gold: "bg-gold-300 text-forest-950",
  live: "bg-forest-100 text-forest-900 ring-1 ring-forest-200",
};

export function Badge({
  tone = "neutral",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center gap-2 rounded-full px-3 text-sm font-medium whitespace-nowrap",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {tone === "live" ? <LiveDot /> : null}
      {children}
    </span>
  );
}

function LiveDot() {
  return (
    <span aria-hidden="true" className="relative flex size-2">
      <span className="absolute inline-flex size-full rounded-full bg-forest-500 motion-safe:animate-halo motion-reduce:opacity-0" />
      <span className="relative inline-flex size-2 rounded-full bg-forest-500" />
    </span>
  );
}
