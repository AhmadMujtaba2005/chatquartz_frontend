"use client";

import Link from "next/link";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";

const ErrorBoundary = ({ error, reset }) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Application error:", error);
    }, [error]);

    return (
        <div>
            <SmoothScroll>
                <Navbar />
                <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-brand-secondary to-[#FFFFFF] pt-[112px] px-6 text-center">
                    <h1 className="text-6xl sm:text-8xl font-bold text-gray-900 mb-6">Oops!</h1>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Something went wrong</h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        We apologize for the inconvenience. An unexpected error has occurred.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => reset()}
                            className="px-8 py-3 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-full font-semibold transition-colors duration-200"
                        >
                            Try again
                        </button>
                        <Link 
                            href="/"
                            className="px-8 py-3 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 rounded-full font-semibold transition-colors duration-200"
                        >
                            Go to home
                        </Link>
                    </div>
                </div>
                <div className="w-full bg-[#FFFFFF]">
                    <div className="max-w-[1440px] mx-auto">
                        <Footer />
                    </div>
                </div>
            </SmoothScroll>
        </div>
    );
};

export default ErrorBoundary;
