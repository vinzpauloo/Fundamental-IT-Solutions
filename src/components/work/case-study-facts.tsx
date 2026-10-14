import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function FactLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">
      {children}
    </p>
  );
}

export function PlatformList({
  items,
  inline = false,
}: {
  items: readonly string[];
  inline?: boolean;
}) {
  return (
    <ul
      className={cn(
        inline
          ? "flex flex-wrap gap-x-6 gap-y-2"
          : "flex flex-col divide-y divide-line",
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "text-base text-ink",
            inline
              ? "relative pl-4 before:absolute before:top-[0.6em] before:left-0 before:size-1.5 before:rounded-full before:bg-gold-500 before:content-['']"
              : "py-3.5",
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function StackChips({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="inline-flex h-7 items-center rounded-full bg-surface px-3 font-mono text-xs whitespace-nowrap text-ink ring-1 ring-line"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
