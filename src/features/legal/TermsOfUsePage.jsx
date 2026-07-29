"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";

const TermsOfUsePage = () => {
    return (
        <div>
            <SmoothScroll>
                <div className="w-full bg-gradient-to-b from-[#AAC8FD] to-[#FFFFFF]">
                    <Navbar />
                </div>

                <RevealOnScroll>
                    <div className="w-full bg-gradient-to-t from-[#AAC8FD] to-[#FFFFFF] mt-24">
                        <div className="max-w-[1440px] mx-auto">
                            <Footer />
                        </div>
                    </div>
                </RevealOnScroll>
            </SmoothScroll>
        </div>
    );
};

export default TermsOfUsePage;
