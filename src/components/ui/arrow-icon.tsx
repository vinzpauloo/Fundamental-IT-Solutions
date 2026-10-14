import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function ArrowIcon({
  className,
  ...props
}: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn(
        "size-4 shrink-0 transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-0.5",
        className,
      )}
      {...props}
    >
      <path d="M2.5 8h10.5M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}
