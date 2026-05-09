'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'Nano Banana 2',
        category: 'Web App / SaaS Dashboard',
        year: '2024',
        image: '/images/project-1-v2.png',
        size: 'large', // Spans 2 columns on desktop
    },
    {
        id: 2,
        title: 'Aura Fit App',
        category: 'Mobile UI/UX / Health',
        year: '2024',
        image: '/images/project-2.png',
        size: 'small',
    },
    {
        id: 3,
        title: 'Lunaé Luxury Brand',
        category: 'E-commerce / Branding',
        year: '2023',
        image: '/images/project-3.png',
        size: 'small',
    },
];

export function Portfolio() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section id="portfolio" className="relative w-full py-32 bg-black overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-8">
                {/* Section Header */}
                <div className="mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[0.875rem] font-semibold tracking-[0.2em] uppercase text-white/50 font-pretendard"
                    >
                        Selected Works
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mt-4 font-suit tracking-tight leading-[1.2]"
                    >
                        사업의 가치를 증명하는<br />포트폴리오
                    </motion.h2>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className={`relative group cursor-none ${
                                project.size === 'large' ? 'md:col-span-2' : ''
                            }`}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="relative aspect-[16/10] md:aspect-auto md:h-[600px] overflow-hidden rounded-[32px] border border-white/5 bg-white/5">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                {/* Mobile Info (Always visible on small screens) */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent md:hidden">
                                    <p className="text-white/60 text-sm font-medium mb-1 font-pretendard">{project.category}</p>
                                    <h3 className="text-white text-2xl font-bold font-suit">{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="mt-20 flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 font-pretendard"
                    >
                        더 많은 프로젝트 보기
                    </motion.button>
                </div>
            </div>

            {/* Custom Cursor / Project Info Follower */}
            <AnimatePresence>
                {hoveredId && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        style={{
                            position: 'fixed',
                            left: cursorX,
                            top: cursorY,
                            x: '-50%',
                            y: '-120%', // Position above the cursor
                            pointerEvents: 'none',
                            zIndex: 100,
                        }}
                        className="hidden md:flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl shadow-2xl"
                    >
                        <span className="text-white font-bold text-lg font-suit">
                            {projects.find(p => p.id === hoveredId)?.title}
                        </span>
                        <span className="text-white/60 text-xs font-medium font-pretendard">
                            {projects.find(p => p.id === hoveredId)?.year} — View Project
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
