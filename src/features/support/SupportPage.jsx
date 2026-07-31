"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";

const SupportPage = () => {
    return (
        <div>
            <SmoothScroll>
                <div className="w-full bg-gradient-to-b from-[#AAC8FD] to-[#FFFFFF]">
                    <Navbar />
                    <div className="mt-16 sm:mt-24">
                        <p className="text-[20px] text-center text-black mb-2 mt-[190px]">Support</p>
                        <h1 className="text-[48px] font-bold leading-tight mb-6 text-center tracking-tight">Elevate Your <span className="font-bold text-[#2B64FD] italic">Support </span>With Advanced Tools   </h1>
                        <div>
                            <p className="text-[14px] text-gray-600 max-w-3xl px-6 mx-auto text-center leading-relaxed mb-100">Live chat not only adds a personal touch but also provides real-time support, enhancing the customer experience and creating a powerful marketing tool. Each interaction fosters greater customer engagement, drives sales, and boosts revenue.</p>
                        </div>
                    </div>
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

export default SupportPage;
