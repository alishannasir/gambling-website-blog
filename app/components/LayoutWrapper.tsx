"use client";

import { usePathname } from 'next/navigation';

interface LayoutWrapperProps {
    children: React.ReactNode;
    footer: React.ReactNode;
}

const LayoutWrapper = ({ children, footer }: LayoutWrapperProps) => {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith('/admin');

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                {children}
            </div>
            {!isAdmin && footer}
        </div>
    );
};

export default LayoutWrapper;
