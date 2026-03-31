"use client";

import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ hover = true, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 lg:p-8",
        "transition-all duration-200 ease-out",
        hover && "hover:shadow-lg hover:border-primary-200 hover:-translate-y-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardIconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardIcon({ className, children, ...props }: CardIconProps) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-xl",
        "bg-primary-50 text-primary-700",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-muted-foreground leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}
