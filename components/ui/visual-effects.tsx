'use client';

import React from 'react';

export function VisualEffects() {
    return (
        <>
            {/* Global Grain Texture Overlay */}
            <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noiseFilter">
                        <feTurbulence 
                            type="fractalNoise" 
                            baseFrequency="0.65" 
                            numOctaves="3" 
                            stitchTiles="stitch" 
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>

            {/* Background Glow Blobs for Dark Sections (Common) */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/[0.02] blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-white/[0.01] blur-[100px] rounded-full" />
            </div>
        </>
    );
}
