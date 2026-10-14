import type { ComponentPropsWithoutRef } from "react";
import { ArrowIcon } from "@/components/ui";
import { cn } from "@/lib/utils";

export const externalLinkAttributes = {
  target: "_blank",
  rel: "noopener",
} as const;

export function OpensInNewTab() {
  return <span className="sr-only">(opens in a new tab)</span>;
}

export function ExternalTextLink({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...props}
      {...externalLinkAttributes}
      className={cn(
        "group inline-flex items-center gap-2 rounded-sm font-medium text-forest-800 underline-offset-4 hover:underline",
        className,
      )}
    >
      {children}
      <ArrowIcon className="-rotate-45" />
      <OpensInNewTab />
    </a>
  );
}
