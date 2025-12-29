"use client";

import React, { useState, useEffect } from "react";
import ShadowButton from "./ShadowButton";

export const PromoPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup every 1 minute
        const interval = setInterval(() => {
            setIsVisible(true);
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <div className="bg-white border-2 border-secondary p-8 max-w-md w-full relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-in zoom-in-95 duration-300">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-secondary hover:text-red-500 font-bold text-xl"
                >
                    ×
                </button>

                <div className="text-center">
                    <span className="inline-block bg-primary text-white text-xs font-bold uppercase px-2 py-1 mb-4 rounded-sm">
                        Valid Limited Time
                    </span>
                    <h2 className="text-3xl font-primary font-bold uppercase mb-2">
                        Mega Discount!
                    </h2>
                    <p className="text-secondary/80 font-secondary mb-6">
                        Get 50% extra bonus on your first deposit. Don't miss out on this
                        exclusive offer!
                    </p>

                    <ShadowButton
                        className="w-full py-3 text-lg"
                        onClick={() => setIsVisible(false)}
                    >
                        Claim Offer
                    </ShadowButton>
                </div>
            </div>
        </div>
    );
};

export default PromoPopup;
