import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type RevealDelay = 0 | 1 | 2 | 3;

const delayClasses: Record<RevealDelay, string | undefined> = {
  0: undefined,
  1: "reveal-delay-1",
  2: "reveal-delay-2",
  3: "reveal-delay-3",
};

export type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  delay?: RevealDelay;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "delay" | "className" | "children">;

export function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  className,
  children,
  ...props
}: RevealProps<T>) {
  const Component: ElementType = as ?? "div";

  return (
    <Component
      className={cn("reveal", delayClasses[delay], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
