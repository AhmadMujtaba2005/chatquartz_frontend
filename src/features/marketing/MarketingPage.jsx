"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";
import PopupMockup from "@/components/mockups/PopupMockup";
import WelcomeMockup from "@/components/mockups/WelcomeMockup";
import FollowUpMockup from "@/components/mockups/FollowUpMockup";
import SubscribeMockup from "@/components/mockups/SubscribeMockup";

const MarketingPage = () => {
    return (
        <div>
            <SmoothScroll>
                <div className="w-full bg-gradient-to-b from-[#AAC8FD] to-[#FFFFFF]">
                    <Navbar />
                    <div className="mt-16 sm:mt-24">
                        <p className="text-[20px] text-center text-black mb-2 mt-[190px]">Marketing Strategy</p>
                        <h1 className="text-[48px] font-bold leading-tight mb-6 text-center tracking-tight">Made Easy with <span className="font-bold text-[#2B64FD] italic">Live Chat</span></h1>
                        <div>
                            <p className="text-[14px] text-gray-600 max-w-3xl px-6 mx-auto text-center leading-relaxed mb-100">Live chat adds a personal touch, driving deeper engagement, more sales, and higher revenue.</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-[95%] max-w-[950px] mx-auto mt-8 sm:mt-10">
                    <RevealOnScroll>
                        <div className="flex flex-col h-full p-6 sm:p-7 lg:p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer">
                            <PopupMockup />
                            <h2 className="text-[16px] sm:text-[18px] font-bold tracking-tight text-gray-900 mb-3 mt-4">
                                Pop-up Messages
                            </h2>
                            <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-auto">Proactively reach out the moment a visitor shows interest — no manual trigger needed.</p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll>
                        <div className="flex flex-col h-full p-6 sm:p-7 lg:p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer">
                            <WelcomeMockup />
                            <h2 className="text-[16px] sm:text-[18px] font-bold tracking-tight text-gray-900 mb-3 mt-4">
                                Welcome Messages
                            </h2>
                            <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-auto">Automatically greet every visitor on arrival — multilingual and fully customizable.</p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll>
                        <div className="flex flex-col h-full p-6 sm:p-7 lg:p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer">
                            <FollowUpMockup />
                            <h2 className="text-[16px] sm:text-[18px] font-bold tracking-tight text-gray-900 mb-3 mt-4">
                                Follow-up Messages
                            </h2>
                            <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-auto">Capture email or phone when agents are offline, so no lead goes cold.</p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll>
                        <div className="flex flex-col h-full p-6 sm:p-7 lg:p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer">
                            <SubscribeMockup />
                            <h2 className="text-[16px] sm:text-[18px] font-bold tracking-tight text-gray-900 mb-3 mt-4">
                                Subscribe Messages
                            </h2>
                            <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-auto">Grow your email list automatically, with confirmation and newsletter integration built in.</p>
                        </div>
                    </RevealOnScroll>
                </div>
                <div className="flex flex-col items-center mt-16 sm:mt-24 md:mt-[120px] px-4">
                    <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Advanced Marketing Automations</h1>

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

export default MarketingPage;
