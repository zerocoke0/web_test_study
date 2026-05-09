'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
    {
        question: '제작 기간은 보통 얼마나 소요되나요?',
        answer: '프로젝트의 복잡도에 따라 다르지만, 일반적인 랜딩페이지 기준 기획부터 개발까지 약 2~4주 정도 소요됩니다. 빠른 배포가 필요한 경우 일정 조율이 가능합니다.',
    },
    {
        question: '정말 불만족 시 100% 환불이 가능한가요?',
        answer: '네, Atio Studio는 결과물의 퀄리티에 대해 절대적인 자신감을 가지고 있습니다. 초기 기획 방향과 결과물이 다르거나 최종적으로 만족하지 못하실 경우, 조건 없이 100% 환불해 드립니다.',
    },
    {
        question: '기획이나 카피라이팅도 함께 진행해 주시나요?',
        answer: '네, 저희는 단순한 디자인 대행사가 아닙니다. 비즈니스의 본질을 분석하여 고객을 설득할 수 있는 기획과 카피라이팅을 핵심 프로세스로 포함하고 있습니다.',
    },
    {
        question: '제작 후에 직접 수정이 가능한가요?',
        answer: '물론입니다. 제작 완료 후 텍스트나 이미지를 직접 수정하실 수 있도록 관리 가이드를 제공해 드리며, 필요시 운영 대행 서비스도 이용하실 수 있습니다.',
    },
    {
        question: '타사에서 만든 사이트 리뉴얼도 가능한가요?',
        answer: '네, 기존 사이트의 문제점(낮은 전환율, 느린 속도 등)을 데이터 기반으로 분석하여 최신 트렌드와 기술 스택으로 완벽하게 리뉴얼해 드립니다.',
    },
];

export function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="relative w-full py-32 bg-white">
            <div className="max-w-[1000px] mx-auto px-6 md:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[0.875rem] font-semibold tracking-[0.2em] uppercase text-black/40 font-pretendard"
                    >
                        Questions & Answers
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-black mt-4 font-suit tracking-tight"
                    >
                        자주 묻는 질문
                    </motion.h2>
                </div>

                {/* FAQ List */}
                <div className="flex flex-col gap-4">
                    {faqItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between py-6 px-4 md:px-8 bg-black/[0.02] border border-black/5 rounded-2xl transition-all duration-300 hover:bg-black/[0.04] hover:border-black/10 text-left"
                            >
                                <span className="text-lg md:text-xl font-bold text-black font-suit break-keep pr-8">
                                    {item.question}
                                </span>
                                <motion.span
                                    animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                                    className="flex-shrink-0"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-8 text-black/60 text-lg leading-relaxed font-pretendard break-keep">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-black/40 font-medium font-pretendard">
                        더 궁금한 점이 있으신가요?{' '}
                        <a href="#contact" className="text-black border-b border-black/20 hover:border-black transition-colors ml-2">
                            프로젝트 문의하기
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
