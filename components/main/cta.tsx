'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function CTA() {
    return (
        <section id="contact" className="relative w-full py-40 bg-black overflow-hidden">
            {/* Background Light Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.05] blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[0.875rem] font-semibold tracking-[0.3em] uppercase text-white/40 font-pretendard mb-6 block">
                        Get in Touch
                    </span>
                    <h2 className="text-3xl md:text-[80px] font-bold text-white font-suit tracking-tight mb-10 leading-[1.1] break-keep">
                        <span className="block">비즈니스의 가치를 바꾸는</span>
                        <span className="block text-white/90">웹사이트를 만듭니다.</span>
                    </h2>
                    <p className="text-white/60 text-lg md:text-2xl font-medium font-pretendard mb-16 max-w-3xl mx-auto break-keep leading-relaxed">
                        지금 바로 Atio Studio와 함께 성장의 첫걸음을 시작하세요.<br className="hidden md:block" />
                        당신의 사업을 가장 설득력 있게 보여줄 준비가 되었습니다.
                    </p>

                    <div className="flex justify-center mt-16">
                        <motion.button
                            initial="initial"
                            whileHover="hover"
                            whileTap="tap"
                            variants={{
                                initial: { scale: 1, backgroundColor: "#ffffff" },
                                hover: { backgroundColor: "#f0f0f0" },
                                tap: { scale: 0.95 }
                            }}
                            className="px-12 py-6 rounded-full text-black text-[1.25rem] font-bold flex items-center gap-4 cursor-pointer shadow-[0_20px_50px_rgba(255,255,255,0.1)] font-pretendard"
                        >
                            프로젝트 문의하기
                            <motion.div
                                variants={{
                                    initial: { x: 0 },
                                    hover: { 
                                        x: [0, 10, 0],
                                        transition: { 
                                            duration: 0.8, 
                                            repeat: Infinity,
                                            ease: "easeInOut" 
                                        }
                                    }
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </motion.div>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
