import React from 'react';

interface AdSenseProps {
    slotId?: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    style?: React.CSSProperties;
    className?: string;
}

const AdSense = ({ slotId, format = 'auto', style, className }: AdSenseProps) => {
    return (
        <div className={`w-full overflow-hidden flex justify-center items-center bg-white border-2 border-secondary rounded-xl p-4 my-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${className}`} style={{ minHeight: '100px', ...style }}>
            <div className="text-neutral-600 text-xs uppercase tracking-widest font-semibold text-center">
                <span className="block mb-1">Advertisement</span>
                {/* 
                This is a placeholder. 
                In production, you would insert the Google AdSense script here.
                Example:
                <ins className="adsbygoogle"
                     style={{ display: "block" }}
                     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                     data-ad-slot={slotId}
                     data-ad-format={format}
                     data-full-width-responsive="true"></ins>
            */}
                <div className="w-full h-full bg-neutral-800/30 rounded flex items-center justify-center py-8">
                    Ad Space {slotId ? `(${slotId})` : ''}
                </div>
            </div>
        </div>
    );
};
export default AdSense;
