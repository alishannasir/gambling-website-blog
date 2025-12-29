"use client";

import React from "react";
import Link from "next/link";

interface ShadowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    href?: string;
    as?: React.ElementType;
}

export const ShadowButton: React.FC<ShadowButtonProps> = ({
    children,
    className = "",
    variant = "primary",
    href,
    as,
    ...props
}) => {
    const baseStyles =
        "inline-flex items-center justify-center font-bold uppercase tracking-wider border-2 border-secondary transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none";

    const variants = {
        primary: "bg-white text-secondary hover:bg-secondary/5",
        secondary: "bg-secondary text-white hover:bg-secondary/90",
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    const Component = as || "button";

    return (
        <Component className={combinedClasses} {...props}>
            {children}
        </Component>
    );
};

export default ShadowButton;
