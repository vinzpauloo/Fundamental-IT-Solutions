import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function BrowserFrame({
  address,
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div"> & { address: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg bg-surface shadow-lift ring-1 ring-line",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="flex h-9 items-center gap-4 border-b border-line px-4"
      >
        <span className="flex shrink-0 gap-1.5">
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-ink/15" />
        </span>
        <span className="mx-auto min-w-0 truncate rounded-full bg-paper px-3 py-0.5 font-mono text-xs text-muted">
          {address}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-forest-100">
        {children}
      </div>
    </div>
  );
}

export function PhoneFrame({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "relative rounded-[2.5rem] bg-ink p-2.5 shadow-lift ring-1 ring-white/10",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute top-5 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink"
      />
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-paper">
        {children}
      </div>
    </div>
  );
}
