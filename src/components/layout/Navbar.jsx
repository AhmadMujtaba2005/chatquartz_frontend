"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from 'lenis/react';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useLenis(({ scroll }) => setScrolled(scroll > 20));

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const navLinks = [
        { href: "/pricing", label: "Pricing" },
        { href: "/marketing", label: "Marketing" },
        { href: "/features", label: "Features" },
        { href: "/support", label: "Support" },
    ];

    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-50 h-0 w-full">
                <nav
                    className={`mx-auto w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] xl:w-full max-w-7xl px-5 sm:px-8 md:px-10 py-3 sm:py-3.5 transition-all duration-500 ease-out rounded-2xl border ${scrolled
                        ? "translate-y-4 border-white/50 bg-white/30 backdrop-blur-[48px] backdrop-saturate-[200%] shadow-[0_12px_40px_rgba(43,100,253,0.15)]"
                        : "translate-y-0 border-transparent bg-transparent shadow-none"
                        }`}
                >
                    <div className="flex items-center justify-between relative">

                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <img
                                src="/logo.svg"
                                alt="ChatQuartz Logo"
                                className="h-8 sm:h-9 w-auto brightness-0 block"
                            />
                        </Link>

                        {/* Center Nav Links */}
                        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <ul
                                className="flex items-center gap-1 m-0 p-0"
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {navLinks.map((link, idx) => (
                                    <li key={link.href} className="relative flex items-center">
                                        {/* Active Indicator */}
                                        {hoveredIndex === idx && (
                                            <motion.div
                                                layoutId="nav-indicator"
                                                className="absolute bottom-0 left-4 right-4 h-[2px] rounded-t-md bg-brand-primary"
                                                style={{ boxShadow: "0 -2px 8px rgba(43,100,253,0.4)" }}
                                                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                            />
                                        )}
                                        <Link
                                            href={link.href}
                                            prefetch={false}
                                            onMouseEnter={() => setHoveredIndex(idx)}
                                            className={`relative z-10 flex items-center px-4 py-2.5 text-[14px] font-medium tracking-tight transition-all duration-200 whitespace-nowrap select-none hover:-translate-y-[1px] ${hoveredIndex === idx ? "text-brand-primary" : "text-gray-600 hover:text-gray-900"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: CTA + Hamburger */}
                        <div className="flex items-center gap-2.5">
                            {/* CTA */}
                            <div className="relative hidden sm:flex group items-center justify-center p-[2px] rounded-full overflow-hidden bg-brand-primary shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out cursor-pointer">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 flex items-center justify-center blur-[4px] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-[300%] h-[300%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_20%,rgba(255,255,255,0.8)_45%,#ffffff_50%,transparent_50%,transparent_70%,rgba(255,255,255,0.8)_95%,#ffffff_100%)]"></div>
                                </div>
                                {/* Core Effect */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-100">
                                    <div className="w-[300%] h-[300%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_20%,rgba(255,255,255,0.8)_45%,#ffffff_50%,transparent_50%,transparent_70%,rgba(255,255,255,0.8)_95%,#ffffff_100%)]"></div>
                                </div>
                                <Link
                                    href="/demo"
                                    className="relative z-10 flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-brand-primary group-hover:bg-brand-primary-hover text-white text-sm font-semibold transition-all duration-300 ease-out w-full"
                                >
                                    <span className="relative z-10">Try Now</span>
                                    <span className="relative z-10 inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5 ml-2">→</span>
                                </Link>
                            </div>

                            {/* Hamburger */}
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="md:hidden flex flex-col items-center justify-center w-9 h-9 rounded-xl cursor-pointer transition-colors duration-200 hover:bg-black/10 border border-black/10 bg-black/5"
                                aria-label="Toggle navigation menu"
                            >
                                <motion.span
                                    animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 4 : 0 }}
                                    className="block w-4 h-[1.5px] bg-gray-700 rounded-full origin-center"
                                />
                                <motion.span
                                    animate={{ opacity: mobileOpen ? 0 : 1 }}
                                    className="block w-4 h-[1.5px] bg-gray-700 rounded-full mt-1"
                                />
                                <motion.span
                                    animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
                                    className="block w-4 h-[1.5px] bg-gray-700 rounded-full mt-1 origin-center"
                                />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Drawer */}
                    <AnimatePresence>
                        {mobileOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="md:hidden mt-3"
                            >
                                <nav
                                    className="rounded-2xl p-3 bg-white/30 backdrop-blur-[48px] backdrop-saturate-[200%] border border-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
                                >
                                    <ul className="flex flex-col gap-0.5">
                                        {navLinks.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    prefetch={false}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="flex items-center px-4 py-3 rounded-xl text-[15px] font-medium text-gray-600 hover:text-gray-900 hover:bg-black/5 transition-all duration-150"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-2 pt-2 border-t border-black/6">
                                        <div className="relative group flex items-center justify-center w-full p-[2px] rounded-xl overflow-hidden bg-[linear-gradient(135deg,#3B74FE_0%,var(--color-brand-primary)_100%)] shadow-[0_4px_16px_rgba(43,100,253,0.3)] transition-all duration-300">
                                            <div className="absolute inset-0 flex items-center justify-center blur-[4px] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="w-[300%] h-[300%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_20%,rgba(255,255,255,0.8)_45%,#ffffff_50%,transparent_50%,transparent_70%,rgba(255,255,255,0.8)_95%,#ffffff_100%)]"></div>
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center opacity-100">
                                                <div className="w-[300%] h-[300%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_20%,rgba(255,255,255,0.8)_45%,#ffffff_50%,transparent_50%,transparent_70%,rgba(255,255,255,0.8)_95%,#ffffff_100%)]"></div>
                                            </div>
                                            <Link
                                                href="/demo"
                                                onClick={() => setMobileOpen(false)}
                                                className="relative z-10 flex w-full items-center justify-center gap-2 px-6 py-3 rounded-xl text-[15px] font-semibold text-white transition-all duration-200 bg-[linear-gradient(135deg,#3B74FE_0%,var(--color-brand-primary)_100%)]"
                                            >
                                                Try Now →
                                            </Link>
                                        </div>
                                    </div>
                                </nav>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </header>
        </>
    );
};

export default Navbar;