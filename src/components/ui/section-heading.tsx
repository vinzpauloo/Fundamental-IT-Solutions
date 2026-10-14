import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow, type EyebrowTone } from "./eyebrow";

export type SectionHeadingAlign = "left" | "center";
export type SectionHeadingLevel = 1 | 2 | 3 | 4;

export interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: SectionHeadingAlign;
  level?: SectionHeadingLevel;
  tone?: EyebrowTone;
  id?: string;
  className?: string;
}

const headingTags = { 1: "h1", 2: "h2", 3: "h3", 4: "h4" } as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  level = 2,
  tone = "light",
  id,
  className,
}: SectionHeadingProps) {
  const Heading = headingTags[level];
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-5",
        align === "center" ? "mx-auto items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <Heading
        id={id}
        className={cn("text-display-lg", isDark ? "text-paper" : "text-ink")}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed md:text-xl",
            isDark ? "text-forest-200" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
