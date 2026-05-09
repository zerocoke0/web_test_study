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
        <section id="process" className="relative w-full py-32 bg-[#F8F9FA] shadow-[inset_0_20px_40px_rgba(0,0,0,0.01)] border-t border-black/5">
            <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
                {/* Header */}
                <div className="flex flex-col mb-24 gap-10">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[0.875rem] font-semibold tracking-[0.2em] uppercase text-black/40 font-pretendard mb-4 block"
                        >
                            Our Process
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-[80px] font-bold text-black font-suit tracking-tight leading-[1.1] break-keep"
                        >
                            압도적인 결과물을<br className="hidden md:block" /> 만드는 5가지 단계
                        </motion.h2>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 md:mt-10 text-lg md:text-2xl text-black/70 font-medium font-pretendard max-w-2xl leading-relaxed break-keep"
                        >
                            기획부터 배포까지, 단 1주일이면 충분합니다.<br className="hidden md:block" /> 
                            투명한 공유와 빠른 실행력으로 성공을 가속화합니다.
                        </motion.p>
                    </div>
                </div>

                {/* Steps List */}
                <div className="flex flex-col border-t border-black/10">
                    {steps.map((step, idx) => (
                        <motion.article
                            key={step.no}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="group relative flex flex-col md:flex-row md:items-center py-12 border-b border-black/10 hover:bg-black/[0.02] transition-all duration-300 px-4 md:px-8"
                        >
                            {/* Number */}
                            <div className="flex-shrink-0 mb-4 md:mb-0 md:w-32">
                                <span className="text-4xl md:text-5xl font-bold text-black/15 group-hover:text-black/30 transition-colors duration-300 font-suit">
                                    {step.no}
                                </span>
                            </div>

                            {/* Title */}
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <h3 className="text-2xl md:text-3xl font-bold text-black/80 group-hover:text-black group-hover:translate-x-2 transition-all duration-300 font-suit">
                                    {step.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="md:flex-1">
                                <p className="text-black/40 text-lg font-medium font-pretendard leading-relaxed group-hover:text-black/80 transition-colors duration-300 break-keep">
                                    {step.description}
                                </p>
                            </div>

                            {/* Arrow (Desktop Only) */}
                            <div className="hidden md:block opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 ml-8">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/80">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
