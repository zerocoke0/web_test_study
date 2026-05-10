'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="w-full bg-black border-t border-white/5 pt-20 pb-10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-1 mb-6">
                            <div className="flex items-center">
                                <Image
                                    src="/Black.svg"
                                    alt="xtio studio logo"
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-white text-[1.5rem] font-bold tracking-[-0.02em] font-suit">
                                Atio studio
                            </span>
                        </div>
                        <p className="text-white/40 text-lg font-medium font-pretendard max-w-sm leading-relaxed break-keep">
                            고객을 설득하는 힘, 비즈니스의 본질을 꿰뚫는 디자인과 기술력으로 당신의 가치를 증명합니다.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg font-suit mb-6">Navigation</h4>
                        <ul className="flex flex-col gap-4">
                            {['Portfolio', 'Process', 'Guarantee', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <Link 
                                        href={`#${item.toLowerCase()}`} 
                                        className="text-white/40 hover:text-white transition-colors font-medium font-pretendard"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <h4 className="text-white font-bold text-lg font-suit mb-6">Connect</h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <a href="mailto:hello@atiostudio.com" className="text-white/40 hover:text-white transition-colors font-medium font-pretendard">
                                    hello@atiostudio.com
                                </a>
                            </li>
                            {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
                                <li key={social}>
                                    <a href="#" className="text-white/40 hover:text-white transition-colors font-medium font-pretendard">
                                        {social}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/20 text-sm font-medium font-pretendard">
                        © 2026 Atio Studio. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-white/20 hover:text-white transition-colors text-sm font-medium font-pretendard">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-white/20 hover:text-white transition-colors text-sm font-medium font-pretendard">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
