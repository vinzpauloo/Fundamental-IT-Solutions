import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function SerifAccent({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn("font-serif font-normal tracking-normal italic", className)}
      {...props}
    />
  );
}
