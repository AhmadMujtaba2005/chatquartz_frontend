"use client";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";
import PopupMockup from "@/components/mockups/PopupMockup";
import WelcomeMockup from "@/components/mockups/WelcomeMockup";
import FollowUpMockup from "@/components/mockups/FollowUpMockup";
import SubscribeMockup from "@/components/mockups/SubscribeMockup";
import FeatureShowcase from "@/components/features/FeatureShowcase";

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
                    <RevealOnScroll className="w-full flex justify-center">
                        <FeatureShowcase />
                    </RevealOnScroll>
                    <RevealOnScroll className="w-full mt-12 md:mt-16">
                        <div className="flex flex-col items-center justify-center gap-6">
                            <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Streamlined Integrations</h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto w-[94%] mt-10">
                            <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 flex items-center justify-center text-center font-semibold text-gray-900 h-32 hover:border-[#2B64FD]/30 transition-colors">
                                Social Share
                            </div>
                            <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 flex items-center justify-center text-center font-semibold text-gray-900 h-32 hover:border-[#2B64FD]/30 transition-colors">
                                WooCommerce Integration
                            </div>
                            <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 flex items-center justify-center text-center font-semibold text-gray-900 h-32 hover:border-[#2B64FD]/30 transition-colors">
                                Newsletter Subscriptions
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
                <RevealOnScroll className="w-full flex flex-col items-center mt-20 md:mt-24 px-4 mb-8">
                    <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-12 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Real-Time Connections</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto w-[94%] text-center px-4">
                        <div className="flex flex-col items-center">
                            <h3 className="text-[20px] font-bold text-gray-900 mb-3 tracking-tight">Proactive Chat</h3>
                            <p className="text-[15px] text-gray-600 leading-relaxed">Actively invite users to chat in real-time, using an admin dashboard to target and engage online visitors.</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <h3 className="text-[20px] font-bold text-gray-900 mb-3 tracking-tight">Multi-User Direct Messaging</h3>
                            <p className="text-[15px] text-gray-600 leading-relaxed">Enable simultaneous real-time interactions with multiple users via chat, email, or text, all with personalized touches.</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <h3 className="text-[20px] font-bold text-gray-900 mb-3 tracking-tight">Booking System Integration</h3>
                            <p className="text-[15px] text-gray-600 leading-relaxed">Seamlessly schedule meetings using the Calendly integration, allowing users to book appointments directly from the chat widget.</p>
                        </div>
                    </div>
                </RevealOnScroll>
                <RevealOnScroll>
                    <div className="relative overflow-hidden flex flex-col items-center justify-center mx-auto max-w-[900px] w-[92%] mt-16 sm:mt-24 md:mt-[120px] px-5 py-10 sm:p-14 border border-gray-200/80 rounded-2xl sm:rounded-3xl bg-white shadow-md hover:shadow-lg transition-all duration-300">
                        {/* Decorative Footer CTA Background - positioned around outer edges at subtle opacity to avoid competing with headline text */}
                        <div className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[250px] sm:w-[350px] md:w-[480px] pointer-events-none z-0 select-none opacity-40 mix-blend-multiply">
                            <img src="/hero-bg.png" alt="CTA Background Shape" className="w-full h-auto object-contain" />
                        </div>
                        <div className="absolute -bottom-24 -left-24 sm:-bottom-32 sm:-left-32 w-[250px] sm:w-[350px] md:w-[480px] pointer-events-none z-0 select-none opacity-30 mix-blend-multiply rotate-180">
                            <img src="/hero-bg.png" alt="CTA Background Shape" className="w-full h-auto object-contain" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-4 text-center tracking-tight bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Experience the Power of <span className="italic text-[#2B64FD]">Marketing</span> with Live Chat!</h1>
                            <Link href="/demo" className="group flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 rounded-full bg-[#2B64FD] hover:bg-[#1E56F0] text-white text-base sm:text-lg font-semibold shadow-md hover:shadow-xl hover:shadow-[#2B64FD]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out cursor-pointer">
                                <span>Start for free</span>
                                <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5 ml-2.5">→</span>
                            </Link>
                        </div>
                    </div>
                </RevealOnScroll>
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
