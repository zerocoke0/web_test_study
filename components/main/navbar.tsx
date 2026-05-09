'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Service', href: '#process' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-5 px-4 md:px-6 pointer-events-none"
        >
            <div className="w-full max-w-[1400px] h-[68px] bg-black/30 backdrop-blur-xl border border-white/10 rounded-[34px] flex items-center justify-between px-[12px] pointer-events-auto transition-all duration-300">
                {/* Left: Logo + Text */}
                <Link href="/" className="flex items-center gap-1 no-underline z-50 pl-2">
                    <div className="flex items-center">
                        <Image
                            src="/Black.svg"
                            alt="xtio studio logo"
                            width={32}
                            height={32}
                            className="object-contain"
                        />
                    </div>
                    <span className="text-white text-[1.25rem] font-bold tracking-[-0.02em] font-suit">
                        Atio studio
                    </span>
                </Link>

                {/* Center: Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            className="text-white/60 no-underline text-[0.9375rem] font-medium transition-colors hover:text-white font-pretendard"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right: Desktop Button & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link href="#contact" className="no-underline hidden sm:block">
                        <motion.button
                            initial="initial"
                            whileHover="hover"
                            whileTap="tap"
                            variants={{
                                initial: { scale: 1, backgroundColor: "#ffffff" },
                                hover: { backgroundColor: "#f0f0f0" },
                                tap: { scale: 0.95 }
                            }}
                            className="text-black px-6 h-[44px] rounded-full text-[0.875rem] font-bold cursor-pointer font-pretendard flex items-center gap-2"
                        >
                            프로젝트 문의
                            <motion.div
                                variants={{
                                    initial: { x: 0 },
                                    hover: { 
                                        x: [0, 4, 0],
                                        transition: { 
                                            duration: 0.8, 
                                            repeat: Infinity,
                                            ease: "easeInOut" 
                                        }
                                    }
                                }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </motion.div>
                        </motion.button>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 z-50 pointer-events-auto"
                        aria-label="Toggle Menu"
                    >
                        <motion.span 
                            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-white block rounded-full"
                        />
                        <motion.span 
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-0.5 bg-white block rounded-full"
                        />
                        <motion.span 
                            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-white block rounded-full"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
                        animate={{ opacity: 1, clipPath: 'circle(150% at 90% 5%)' }}
                        exit={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 pointer-events-auto"
                    >
                        {navLinks.map((link, idx) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx + 0.2 }}
                            >
                                <Link 
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white text-3xl font-bold font-suit hover:text-white/60 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-4"
                        >
                            <Link href="#contact" onClick={() => setIsOpen(false)}>
                                <motion.button
                                    initial="initial"
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={{
                                        initial: { scale: 1, backgroundColor: "#ffffff" },
                                        hover: { backgroundColor: "#f0f0f0" },
                                        tap: { scale: 0.95 }
                                    }}
                                    className="text-black px-8 py-4 rounded-full text-lg font-bold font-pretendard flex items-center gap-3"
                                >
                                    프로젝트 문의
                                    <motion.div
                                        variants={{
                                            initial: { x: 0 },
                                            hover: { 
                                                x: [0, 6, 0],
                                                transition: { 
                                                    duration: 0.8, 
                                                    repeat: Infinity,
                                                    ease: "easeInOut" 
                                                }
                                            }
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </motion.div>
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
