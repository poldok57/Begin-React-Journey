// @ts-nocheck²
"use client";
import { cva, type VariantProps } from "class-variance-authority";

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(
  [
    "inline-flex items-center transition-colors justify-center rounded-md px-3 py-1.5",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
  ],
  {
    variants: {
      variant: {
        default: "bg-gray-950 text-gray-100 shadow hover:bg-gray-800",
        ghost:
          "bg-transparent text-gray-950 shadow  hover:bg-gray-200 active:bg-gray-300",
        secondary: "bg-gray-200 text-gray-950 shadow hover:bg-gray-300",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariantProps["variant"];
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({ variant, className })}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
