import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva("inline-flex items-center justify-center rounded-lg text-sm transition-colors disabled:text-gray-200 disabled:bg-white disabled:border-gray-200", {
    variants: {
        variant: {
            primary:
                "text-gray-50 bg-gray-950 hover:bg-teal-400 active:bg-teal-500 disabled:text-gray-200 disabled:bg-gray-100",
            accent: "border text-gray-50 bg-teal-400 border-teal-400 hover:bg-teal-500 hover:border-teal-500 active:bg-teal-600 active:border-teal-600",
            secondary: clsx(
                "border text-gray-500 bg-gray-50 border-gray-300",
                "hover:text-teal-400 hover:bg-teal-50 hover:border-teal-400",
                "active:text-teal-50 active:bg-teal-400 active:border-teal-400",
            ),
            tertiary: "hover:bg-gray-100 focus:bg-teal-200 active:bg-teal-100",
            ghost: "text-teal-400 hover:text-teal-500 active:text-teal-600",
        },
        size: {
            sm: "py-1 px-4",
            md: "py-2 px-4 font-medium",
            icon: "p-2",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    },
});

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>> = ({
    variant,
    size,
    className,
    children,
    ...props
}) => {
    return (
        <button className={twMerge(clsx(buttonVariants({ variant, size }), className))} {...props}>
            {children}
        </button>
    );
};

export default Button;
