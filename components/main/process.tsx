'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        no: '01',
        title: 'Consulting',
        description: '비즈니스의 본질을 이해하는 것부터 시작합니다. 현재의 문제점과 목표를 분석하여 최적의 솔루션을 도출합니다.',
    },
    {
        no: '02',
        title: 'Strategy',
        description: '단순한 디자인을 넘어, 고객을 설득하는 카피라이팅과 막힘없는 사용자 경험(UX) 시나리오를 설계합니다.',
    },
    {
        no: '03',
        title: 'Design',
        description: 'Atio Studio만의 감각으로 브랜드의 아이덴티티를 투영한 고감도 비주얼 시스템을 구축합니다.',
    },
    {
        no: '04',
        title: 'Development',
        description: 'Next.js와 같은 최신 기술을 활용해 어떤 환경에서도 빠르고 매끄럽게 작동하는 인터페이스를 구현합니다.',
    },
    {
        no: '05',
        title: 'Launch',
        description: '철저한 QA를 거쳐 배포하며, 이후에도 비즈니스가 지속적으로 성장할 수 있도록 든든한 파트너가 됩니다.',
    },
];

export function Process() {
    return (
        <section id="process" className="relative w-full py-32 bg-[#F8F9FA] shadow-[inset_0_20px_40px_rgba(0,0,0,0.02)]">
            {/* Top/Bottom Depth Gradients */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/[0.03] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/[0.03] to-transparent pointer-events-none" />
            
            <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[0.875rem] font-semibold tracking-[0.2em] uppercase text-black/40 font-pretendard"
                        >
                            Our Process
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold text-black mt-4 font-suit tracking-tight leading-[1.2]"
                        >
                            압도적인 결과물을 만드는<br />5가지 단계
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-black/50 text-lg font-medium font-pretendard max-w-sm leading-relaxed break-keep"
                    >
                        기획부터 배포까지, 모든 과정은 투명하게 공유되며<br className="hidden md:block" /> 비즈니스 성공에 집중합니다.
                    </motion.p>
                </div>

                {/* Steps List */}
                <div className="flex flex-col border-t border-black/10">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.no}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="group relative flex flex-col md:flex-row md:items-center py-12 border-b border-black/10 hover:bg-black/[0.02] transition-colors duration-500"
                        >
                            {/* Number */}
                            <div className="flex-shrink-0 mb-4 md:mb-0 md:w-32">
                                <span className="text-4xl md:text-5xl font-bold text-black/10 group-hover:text-black transition-colors duration-500 font-suit">
                                    {step.no}
                                </span>
                            </div>

                            {/* Title */}
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <h3 className="text-2xl md:text-3xl font-bold text-black font-suit group-hover:translate-x-2 transition-transform duration-500">
                                    {step.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="md:flex-1">
                                <p className="text-black/60 text-lg font-medium font-pretendard leading-relaxed group-hover:text-black/90 transition-colors duration-500 break-keep">
                                    {step.description}
                                </p>
                            </div>

                            {/* Arrow (Desktop Only) */}
                            <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 ml-8">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
