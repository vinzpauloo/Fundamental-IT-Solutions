import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type SectionTone = "paper" | "surface" | "dark";

export interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  tone?: SectionTone;
}

const toneClasses: Record<SectionTone, string> = {
  paper: "bg-paper text-ink",
  surface: "bg-surface text-ink",
  dark: "isolate overflow-hidden bg-forest-950 text-paper texture-glow",
};

export function Section({
  tone = "paper",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-24 md:py-36",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {tone === "dark" ? <DarkField /> : null}
      {children}
    </section>
  );
}

function DarkField() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 texture-circuit texture-fade"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 texture-grain"
      />
    </>
  );
}
