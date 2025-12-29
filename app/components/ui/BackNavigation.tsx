"use client";

import React from "react";
import Link from "next/link";

interface BackNavigationProps {
    href: string;
    label?: string;
}

export const BackNavigation: React.FC<BackNavigationProps> = ({
    href,
    label = "Back",
}) => {
    return (
        <div className="mb-6">
            <Link
                href={href}
                className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wide text-sm hover:text-secondary hover:gap-1 transition-all group"
            >
                <span className="group-hover:-translate-x-1 transition-transform">
                    ←
                </span>
                {label}
            </Link>
        </div>
    );
};

export default BackNavigation;
