import type { ComponentPropsWithoutRef } from "react";
import { ArrowIcon } from "./arrow-icon";
import {
  buttonStyles,
  type ButtonSize,
  type ButtonVariant,
} from "./button-styles";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  type = "button",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      {...props}
    >
      {children}
      {arrow ? <ArrowIcon /> : null}
    </button>
  );
}
