"use client";

import Link from "next/link";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";

const ErrorBoundary = ({ error, reset }) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Application error:", error);
    }, [error]);

    return (
        <div>
            <SmoothScroll>
                <Navbar />
                <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0F0A1F] via-[#1E0B4A] to-[#5B21B6] pt-[112px] pb-[112px] px-6 text-center overflow-hidden">
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="relative mb-8 flex items-center justify-center">
                            <h1 className="text-[120px] sm:text-[180px] font-black text-white/10 leading-none select-none flex items-center">
                                <span>5</span>
                                <span className="relative flex items-center justify-center">
                                    0
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <AlertTriangle className="w-20 h-20 sm:w-28 sm:h-28 text-brand-primary animate-pulse" strokeWidth={1.5} />
                                    </div>
                                </span>
                                <span>0</span>
                            </h1>
                        </div>

                        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">Oops! Something broke.</h2>
                        <p className="text-purple-200 mb-10 max-w-lg mx-auto text-base sm:text-lg leading-relaxed">
                            We apologize for the inconvenience. An unexpected error has occurred on our end. Please try again or head back to the home page.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button
                                onClick={() => reset()}
                                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 hover:shadow-brand-primary/30"
                            >
                                <RotateCcw className="w-5 h-5" />
                                <span>Try Again</span>
                            </button>
                            
                            <Link 
                                href="/"
                                prefetch={false}
                                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 backdrop-blur-sm"
                            >
                                <Home className="w-5 h-5 text-white" />
                                <span>Back to Home</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gradient-to-t from-[#0F0A1F] via-[#1E0B4A] to-[#5B21B6]">
                    <div className="max-w-[1440px] mx-auto">
                        <Footer />
                    </div>
                </div>
            </SmoothScroll>
        </div>
    );
};

export default ErrorBoundary;

