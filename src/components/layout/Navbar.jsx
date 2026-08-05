"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from 'lenis/react';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useLenis(({ scroll }) => setScrolled(scroll > 20));

    const navLinks = [
        { href: "/pricing", label: "Pricing" },
        { href: "/marketing", label: "Marketing" },
        { href: "/features", label: "Features" },
        { href: "/support", label: "Support" },
    ];

    return (
        <>
            {/* h-0: header takes no space — fixes backdrop-filter compositing over animated elements */}
            <header className="sticky top-0 z-50 h-0 w-full">
                <nav
                    className={`mx-auto w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] xl:w-full max-w-7xl px-5 sm:px-8 md:px-10 py-3 sm:py-3.5 transition-all duration-500 ease-out rounded-2xl border ${
                        scrolled
                            ? "translate-y-4 border-black/5"
                            : "translate-y-0 border-transparent"
                    }`}
                    style={scrolled ? {
                        background: "linear-gradient(160deg, rgba(255,255,255,0.92) 0%, rgba(248,251,255,0.88) 60%, rgba(255,255,255,0.92) 100%)",
                        backdropFilter: "blur(32px) saturate(200%) brightness(1.06)",
                        WebkitBackdropFilter: "blur(32px) saturate(200%) brightness(1.06)",
                        boxShadow: "0 8px 32px rgba(43,100,253,0.06), 0 2px 8px rgba(0,0,0,0.04)",
                    } : {}}
                >
                    <div className="flex items-center justify-between relative">

                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0 flex items-center group">
                            <img
                                src="/logo.svg"
                                alt="ChatQuartz Logo"
                                className="h-8 sm:h-9 w-auto brightness-0 block transition-opacity duration-200 group-hover:opacity-70"
                            />
                        </Link>

                        {/* Center Nav Links */}
                        <nav className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <ul
                                className="flex items-center gap-1 m-0 p-0"
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {navLinks.map((link, idx) => (
                                    <li key={link.href} className="relative flex items-center">
                                        {/* Sleek sliding underline on hover */}
                                        {hoveredIndex === idx && (
                                            <motion.div
                                                layoutId="nav-indicator"
                                                className="absolute bottom-0 left-4 right-4 h-[2px] rounded-t-md bg-[#2B64FD]"
                                                style={{ boxShadow: "0 -2px 8px rgba(43,100,253,0.4)" }}
                                                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                            />
                                        )}
                                        <Link
                                            href={link.href}
                                            onMouseEnter={() => setHoveredIndex(idx)}
                                            className={`relative z-10 flex items-center px-4 py-2.5 text-[14px] font-medium tracking-tight transition-all duration-200 whitespace-nowrap select-none hover:-translate-y-[1px] ${
                                                hoveredIndex === idx ? "text-[#2B64FD]" : "text-gray-600 hover:text-gray-900"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Right: CTA + Hamburger */}
                        <div className="flex items-center gap-2.5">
                            {/* CTA */}
                            <Link
                                href="/demo"
                                className="relative hidden sm:flex group items-center justify-center px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-[#2B64FD] hover:bg-[#1E56F0] text-white text-sm font-semibold shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out cursor-pointer"
                            >
                                {/* Soft breathing glow behind the button on hover */}
                                <div className="absolute inset-0 rounded-full bg-[#2B64FD] blur-md opacity-0 group-hover:opacity-40 group-hover:animate-pulse transition-opacity duration-300" />
                                
                                <span className="relative z-10">Try Now</span>
                                <span className="relative z-10 inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5 ml-2">→</span>
                            </Link>

                            {/* Hamburger */}
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="md:hidden flex flex-col items-center justify-center w-9 h-9 rounded-xl cursor-pointer transition-colors duration-200 hover:bg-black/6"
                                style={{ border: "1px solid rgba(0,0,0,0.09)", background: "rgba(0,0,0,0.03)" }}
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
                                    className="rounded-2xl p-3"
                                    style={{
                                        background: "rgba(255,255,255,0.96)",
                                        backdropFilter: "blur(24px)",
                                        border: "1px solid rgba(0,0,0,0.08)",
                                        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                                    }}
                                >
                                    <ul className="flex flex-col gap-0.5">
                                        {navLinks.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="flex items-center px-4 py-3 rounded-xl text-[15px] font-medium text-gray-600 hover:text-gray-900 hover:bg-black/5 transition-all duration-150"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-2 pt-2 border-t border-black/6">
                                        <Link
                                            href="/demo"
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[15px] font-semibold text-white transition-all duration-200"
                                            style={{
                                                background: "linear-gradient(135deg, #3B74FE 0%, #2B64FD 100%)",
                                                boxShadow: "0 4px 16px rgba(43,100,253,0.3)",
                                            }}
                                        >
                                            Try Now →
                                        </Link>
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