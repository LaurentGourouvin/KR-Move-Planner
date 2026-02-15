"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import Spinner from "./Spinner";

type ButtonVariant = "contained" | "outlined";
type ButtonColor = "primary" | "secondary" | "danger" | "success";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  color?: ButtonColor;
  icon?: ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
};

const BASE_STYLES =
  "px-4 py-1 text-sm uppercase rounded-lg transition-all duration-200 flex items-center justify-center gap-2 relative cursor-pointer disabled:cursor-not-allowed";

const VARIANT_COLOR_STYLES: Record<ButtonVariant, Record<ButtonColor, string>> = {
  contained: {
    primary:
      "bg-[var(--color-dark-blue)] text-white hover:bg-[var(--color-dark-blue)]/90 active:bg-[var(--color-dark-blue)]/80 disabled:bg-gray-300 disabled:text-gray-500",
    secondary:
      "bg-[var(--color-light-blue)] text-[var(--color-dark-blue)] hover:bg-[var(--color-light-blue)]/90 active:bg-[var(--color-light-blue)]/80 disabled:bg-gray-300 disabled:text-gray-500",
    danger:
      "bg-[var(--color-danger)] text-white hover:bg-[var(--color-danger)]/90 active:bg-[var(--color-danger)]/80 disabled:bg-gray-300 disabled:text-gray-500",
    success:
      "bg-[var(--color-success)] text-white hover:bg-[var(--color-success)]/90 active:bg-[var(--color-success)]/80 disabled:bg-gray-300 disabled:text-gray-500",
  },
  outlined: {
    primary:
      "border-2 border-[var(--color-dark-blue)] text-[var(--color-dark-blue)] hover:bg-[var(--color-dark-blue)]/10 active:bg-[var(--color-dark-blue)]/20 disabled:border-gray-300 disabled:text-gray-400",
    secondary:
      "border-2 border-[var(--color-light-blue)] text-[var(--color-dark-blue)] hover:bg-[var(--color-light-blue)]/10 active:bg-[var(--color-light-blue)]/20 disabled:border-gray-300 disabled:text-gray-400",
    danger:
      "border-2 border-[var(--color-danger)] text-[var(--color-danger)] hover:bg-[var(--color-danger)]/10 active:bg-[var(--color-danger)]/20 disabled:border-gray-300 disabled:text-gray-400",
    success:
      "border-2 border-[var(--color-success)] text-[var(--color-success)] hover:bg-[var(--color-success)]/10 active:bg-[var(--color-success)]/20 disabled:border-gray-300 disabled:text-gray-400",
  },
};

export default function Button({
  children,
  variant = "contained",
  color = "primary",
  icon,
  fullWidth = false,
  className = "",
  isLoading = false,
  disabled,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      className={`${BASE_STYLES} ${VARIANT_COLOR_STYLES[variant][color]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      disabled={isDisabled}
      {...rest}
    >
      {/* Spinner overlay - only visible when loading */}
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Spinner size="small" />
        </span>
      )}

      {/* Content - invisible when loading but still takes up space */}
      <span className={`flex items-center gap-2 ${isLoading ? "invisible" : ""}`}>
        {icon && <span className="flex items-center">{icon}</span>}
        {children}
      </span>
    </button>
  );
}
