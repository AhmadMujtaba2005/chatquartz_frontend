"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { href: "/pricing", label: "Pricing" },
        { href: "/marketing", label: "Marketing" },
        { href: "/support", label: "Support" },
        { href: "/features", label: "Features" },
    ];

    return (
        /* Main Navbar Header */
        <header className="w-full px-4 py-4 sm:px-6 sm:py-6 md:px-9 md:py-9">
            <div className="flex items-center justify-between">

                {/* Left: Brand Logo Section */}
                <div className="flex-shrink-0 flex items-center justify-start">
                    <Link href="/" className="flex items-center">
                        <img src="/logo.svg" alt="Logo" className="h-8 sm:h-10 w-auto brightness-0 block" />
                    </Link>
                </div>

                {/* Center: Navigation Menu Pills — Desktop only */}
                <nav className="hidden md:flex items-center px-8 py-1.5 rounded-full bg-white shadow-md border border-[#AAC8FD]/30">
                    <ul className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="block px-6 py-1.5 rounded-full hover:bg-[#2B64FD] hover:text-white hover:shadow-sm transition-all duration-300 ease-out">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right: Action Button (Desktop) + Hamburger (Mobile) */}
                <div className="flex items-center gap-3">
                    {/* CTA — hidden on small screens to save space, visible on sm+ */}
                    <Link href="/demo" className="hidden sm:flex group items-center justify-center px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-[#2B64FD] hover:bg-[#1E56F0] text-white text-sm font-semibold shadow-sm hover:shadow-lg hover:shadow-[#2B64FD]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out cursor-pointer">
                        <span>Try Now</span>
                        <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5 ml-2">→</span>
                    </Link>

                    {/* Hamburger button — visible only on mobile */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-xl bg-white/80 border border-gray-200/60 shadow-sm cursor-pointer"
                        aria-label="Toggle navigation menu"
                    >
                        <span className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-gray-700 rounded-full mt-1 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-gray-700 rounded-full mt-1 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}>
                <nav className="bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/60 shadow-lg p-5">
                    <ul className="flex flex-col gap-1 text-[15px] font-medium text-gray-700">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-4 py-3 rounded-xl hover:bg-[#2B64FD]/10 hover:text-[#2B64FD] transition-all duration-200"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* Mobile CTA */}
                    <Link
                        href="/demo"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-center mt-3 px-8 py-3 rounded-full bg-[#2B64FD] hover:bg-[#1E56F0] text-white text-sm font-semibold shadow-md transition-all duration-200 ease-out"
                    >
                        <span>Try Now</span>
                        <span className="ml-2">→</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;