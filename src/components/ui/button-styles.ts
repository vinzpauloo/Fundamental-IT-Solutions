import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-700 text-white hover:bg-primary-600 active:bg-primary-800 shadow-sm hover:shadow-md",
  secondary:
    "bg-primary-100 text-primary-800 hover:bg-primary-200 active:bg-primary-300",
  outline:
    "border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white",
  ghost:
    "text-primary-700 hover:bg-primary-50 active:bg-primary-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm rounded-lg",
  md: "h-11 px-6 text-base rounded-xl",
  lg: "h-13 px-8 text-lg rounded-xl",
};

const baseStyles = [
  "inline-flex items-center justify-center gap-2 font-semibold",
  "transition-all duration-200 ease-out",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
  "disabled:pointer-events-none disabled:opacity-50",
  "cursor-pointer select-none",
];

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}): string {
  return cn(
    ...baseStyles,
    variantStyles[variant ?? "primary"],
    sizeStyles[size ?? "md"],
    className,
  );
}

export type { ButtonVariant, ButtonSize };
