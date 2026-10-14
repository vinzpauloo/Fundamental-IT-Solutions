import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export type LogoTone = "light" | "dark";

const markSourceWidth = 488;
const markSourceHeight = 550;

export interface LogoProps {
  tone?: LogoTone;
  showWordmark?: boolean;
  wordmark?: "short" | "full";
  height?: number;
  href?: string;
  className?: string;
}

export function Logo({
  tone = "light",
  showWordmark = true,
  wordmark = "short",
  height = 36,
  href,
  className,
}: LogoProps) {
  const isDark = tone === "dark";
  const markWidth = Math.round((height * markSourceWidth) / markSourceHeight);

  const content = (
    <>
      <Image
        src="/brand/fit-mark.png"
        alt={site.name}
        width={markWidth}
        height={height}
        className="shrink-0"
      />
      {showWordmark ? (
        <span
          aria-hidden="true"
          className={cn(
            "leading-none font-semibold tracking-[-0.02em]",
            isDark ? "text-paper" : "text-ink",
          )}
          style={{ fontSize: height * 0.55 }}
        >
          Fundamental{" "}
          <span className={isDark ? "text-gold-300" : "text-gold-600"}>IT</span>
          {wordmark === "full" ? " Solutions" : null}
        </span>
      ) : null}
    </>
  );

  const classes = cn("inline-flex items-center gap-2.5 rounded-md", className);

  return href ? (
    <Link href={href} className={classes}>
      {content}
    </Link>
  ) : (
    <span className={classes}>{content}</span>
  );
}
