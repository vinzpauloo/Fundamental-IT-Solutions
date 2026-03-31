import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted" | "brand" | "gradient";
}

const variantStyles: Record<NonNullable<SectionProps["variant"]>, string> = {
  default: "bg-background",
  muted: "bg-muted",
  brand: "gradient-brand text-white",
  gradient: "gradient-subtle",
};

export function Section({
  variant = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-20 lg:py-28", variantStyles[variant], className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}
