import React from 'react';

interface AffiliateButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline';
}

const AffiliateButton = ({ href, children, className = '', variant = 'primary' }: AffiliateButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg";

    const variants = {
        primary: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-500/25",
        secondary: "bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700",
        outline: "bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10",
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </a>
    );
};

export default AffiliateButton;
