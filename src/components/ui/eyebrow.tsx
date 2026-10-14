import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type EyebrowTone = "light" | "dark";

export interface EyebrowProps extends ComponentPropsWithoutRef<"p"> {
  tone?: EyebrowTone;
}

export function Eyebrow({
  tone = "light",
  className,
  children,
  ...props
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 font-mono text-xs font-medium tracking-[0.14em] uppercase",
        tone === "dark" ? "text-gold-300" : "text-forest-700",
        className,
      )}
      {...props}
    >
      <span aria-hidden="true" className="h-px w-8 shrink-0 bg-gold-500" />
      {children}
    </p>
  );
}
