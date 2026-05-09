'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Guarantee() {
    return (
        <section className="relative w-full py-40 bg-black overflow-hidden">
            {/* Background Accent - Large "100%" Text with Parallax */}
            <motion.div 
                style={{ y: '-10%' }}
                whileInView={{ y: '10%' }}
                transition={{ ease: "linear", duration: 2 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            >
                <span className="text-[20vw] md:text-[30vw] font-bold text-white/[0.03] font-suit leading-none">
                    100%
                </span>
            </motion.div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Icon/Badge Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-10 w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                    >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="M9 12l2 2 4-4" />
                        </svg>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[0.875rem] font-semibold tracking-[0.3em] uppercase text-white/50 font-pretendard mb-4"
                    >
                        Risk-Free Guarantee
                    </motion.span>

                    {/* Main Headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-bold text-white font-suit tracking-tight mb-8 leading-[1.2]"
                    >
                        결과에 만족하지 못하신다면,<br />
                        100% 환불해 드립니다.
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg md:text-xl font-medium font-pretendard max-w-2xl leading-relaxed break-keep"
                    >
                        Atio Studio의 목표는 단순한 웹사이트 제작이 아닌 실질적인 비즈니스의 성장입니다. 
                        우리는 결과물의 퀄리티와 효과에 대해 타협하지 않으며, 만약 만족스러운 결과물을 얻지 못하셨다면 대가를 받지 않습니다.
                    </motion.p>

                    {/* CTA/Button or Decoration */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-16 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] text-white/40 font-medium font-pretendard"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        현재 모든 프로젝트에 적용 중인 정책입니다
                    </motion.div>
                </div>
            </div>

            {/* Decorative Light effect */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
