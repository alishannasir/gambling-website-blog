"use client";

import React from "react";

interface AdSpaceProps {
    className?: string;
}

export const AdSpace: React.FC<AdSpaceProps> = ({ className = "" }) => {
    return (
        <div
            className={`w-full bg-gray-100 border-2 border-dashed border-secondary/30 flex items-center justify-center p-4 min-h-[250px] relative overflow-hidden group ${className}`}
        >
            <div className="text-center z-10">
                <span className="block font-bold uppercase tracking-widest text-secondary/40 text-sm mb-1">
                    Advertisement
                </span>
                <span className="block font-primary font-bold text-2xl text-secondary/20 group-hover:text-secondary/30 transition-colors">
                    Ad Space
                </span>
            </div>
            <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -right-4 -bottom-4 text-[10rem] font-bold text-secondary/5 leading-none select-none pointer-events-none">
                $
            </div>
        </div>
    );
};

export default AdSpace;
