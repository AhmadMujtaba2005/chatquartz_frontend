import Link from "next/link";
import { FaFacebook, FaXTwitter, FaLinkedin, FaInstagram, FaThreads } from "react-icons/fa6";
import { SiMailchimp } from "react-icons/si";
import { Mail, RefreshCcw, Sparkles, LayoutGrid } from "lucide-react";
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
                <Navbar />
                {/* Section 1: Hero Section */}
                <div className="relative w-full bg-gradient-to-b from-[#AAC8FD] to-[#FFFFFF] pb-12 sm:pb-20 pt-[64px] sm:pt-[88px] md:pt-[112px] overflow-x-hidden">
                    <div className="relative z-10">
                        <p className="text-[20px] text-center text-black mb-2 mt-10 sm:mt-16 md:mt-24 lg:mt-45">Marketing Strategy</p>
                        <h1 className="text-[48px] leading-tight mb-6 text-center tracking-tight">Made Easy with <span className="font-bold text-[#2B64FD] italic">Live Chat</span></h1>
                        <div>
                            <p className="text-[14px] text-gray-600 max-w-3xl px-6 mx-auto text-center leading-relaxed">Live chat adds a personal touch, driving deeper engagement, more sales, and higher revenue.</p>
                        </div>
                    </div>
                </div>
                {/* Section 2: Mockups Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-[95%] max-w-[950px] mx-auto mt-16 sm:mt-24 md:mt-[120px]">
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
                {/* Section 3: Advanced Marketing Automations & Integrations */}
                <div className="flex flex-col items-center mt-16 sm:mt-24 md:mt-[120px] mb-20 px-4">
                    <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Advanced Marketing Automations</h1>
                    <RevealOnScroll className="w-full flex justify-center">
                        <FeatureShowcase />
                    </RevealOnScroll>
                    <RevealOnScroll className="w-full mt-12 md:mt-16">
                        <div className="flex flex-col items-center justify-center gap-6">
                            <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Streamlined Integrations</h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto w-[94%] mt-10">
                            {/* Card 1: Social Share */}
                            <div className="relative bg-white rounded-3xl border border-gray-100 shadow-[0_8px_40px_rgb(0,0,0,0.06)] p-8 flex flex-col items-center text-center hover:border-[#2B64FD]/20 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_20px_60px_rgb(0,0,0,0.1)] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-transparent to-pink-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 flex flex-col items-center gap-3 mb-6 mt-4">
                                    <div className="flex gap-3">
                                        <div className="w-14 h-14 bg-white rounded-2xl shadow-[0_2px_12px_rgba(24,119,242,0.15)] border border-blue-50 flex items-center justify-center group-hover:shadow-[0_4px_20px_rgba(24,119,242,0.25)] transition-all duration-300">
                                            <FaFacebook className="text-[#1877F2] text-2xl" />
                                        </div>
                                        <div className="w-14 h-14 bg-white rounded-2xl shadow-[0_2px_12px_rgba(29,161,242,0.15)] border border-sky-50 flex items-center justify-center group-hover:shadow-[0_4px_20px_rgba(29,161,242,0.25)] transition-all duration-300 delay-75">
                                            <FaXTwitter className="text-black text-2xl" />
                                        </div>
                                        <div className="w-14 h-14 bg-white rounded-2xl shadow-[0_2px_12px_rgba(225,48,108,0.15)] border border-pink-50 flex items-center justify-center group-hover:shadow-[0_4px_20px_rgba(225,48,108,0.25)] transition-all duration-300 delay-100">
                                            <FaInstagram className="text-[#E1306C] text-2xl" />
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-14 h-14 bg-white rounded-2xl shadow-[0_2px_12px_rgba(10,102,194,0.15)] border border-blue-50 flex items-center justify-center group-hover:shadow-[0_4px_20px_rgba(10,102,194,0.25)] transition-all duration-300 delay-150">
                                            <FaLinkedin className="text-[#0A66C2] text-2xl" />
                                        </div>
                                        <div className="w-14 h-14 bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.1)] border border-gray-50 flex items-center justify-center group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.18)] transition-all duration-300 delay-200">
                                            <FaThreads className="text-black text-2xl" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="relative z-10 font-bold text-gray-900 text-lg">Social Share</h3>
                            </div>

                            {/* Card 2: WooCommerce Integration */}
                            <div className="relative bg-white rounded-3xl border border-gray-100 shadow-[0_8px_40px_rgb(0,0,0,0.06)] p-8 flex flex-col items-center text-center hover:border-[#7C3AED]/20 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_20px_60px_rgb(0,0,0,0.1)] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 flex flex-col items-center mb-6 mt-4">
                                    <div className="w-28 h-28 bg-[#7C3AED] rounded-3xl shadow-[0_4px_24px_rgba(124,58,237,0.3)] flex items-center justify-center group-hover:shadow-[0_8px_32px_rgba(124,58,237,0.45)] group-hover:scale-105 transition-all duration-500">
                                        <span className="text-white font-extrabold text-3xl tracking-tight">Woo</span>
                                    </div>
                                </div>
                                <h3 className="relative z-10 font-bold text-gray-900 text-lg">WooCommerce Integration</h3>
                            </div>

                            {/* Card 3: Newsletter Subscriptions */}
                            <div className="relative bg-white rounded-3xl border border-gray-100 shadow-[0_8px_40px_rgb(0,0,0,0.06)] p-8 flex flex-col items-center text-center hover:border-[#2B64FD]/20 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_20px_60px_rgb(0,0,0,0.1)] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 flex flex-col items-center gap-3 mb-6 mt-4">
                                    <div className="flex gap-3">
                                        <div className="w-14 h-14 bg-[#FFE01B] rounded-2xl shadow-[0_2px_12px_rgba(255,224,27,0.3)] flex items-center justify-center group-hover:shadow-[0_4px_20px_rgba(255,224,27,0.45)] transition-all duration-300">
                                            <SiMailchimp className="text-black text-2xl" />
                                        </div>
                                        <div className="w-14 h-14 bg-[#1E1E2F] rounded-2xl shadow-[0_2px_12px_rgba(30,30,47,0.2)] flex items-center justify-center group-hover:shadow-[0_4px_20px_rgba(30,30,47,0.35)] transition-all duration-300 delay-75">
                                            <RefreshCcw className="text-white w-6 h-6" />
                                        </div>
                                        <div className="w-14 h-14 bg-[#6B46C1] rounded-2xl shadow-[0_2px_12px_rgba(107,70,193,0.25)] flex items-center justify-center group-hover:shadow-[0_4px_20px_rgba(107,70,193,0.4)] transition-all duration-300 delay-100">
                                            <Mail className="text-white w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-14 h-14 bg-[#2B64FD] rounded-2xl shadow-[0_2px_12px_rgba(43,100,253,0.25)] flex items-center justify-center group-hover:shadow-[0_4px_20px_rgba(43,100,253,0.4)] transition-all duration-300 delay-150">
                                            <Sparkles className="text-white w-6 h-6" />
                                        </div>
                                        <div className="w-14 h-14 bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center group-hover:shadow-[0_4px_20px_rgba(14,165,233,0.25)] transition-all duration-300 delay-200">
                                            <LayoutGrid className="text-[#0ea5e9] w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="relative z-10 font-bold text-gray-900 text-lg">Newsletter Subscriptions</h3>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
                {/* Section 4: Real-Time Connections */}
                <RevealOnScroll className="w-full flex flex-col items-center mt-16 sm:mt-24 md:mt-[120px] mb-20 px-4">
                    <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Real-Time Connections</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-22 max-w-[1200px] mx-auto w-[94%] mt-8 text-center px-4">
                        <div className="flex flex-col items-center">
                            <h3 className="text-[20px] font-bold text-gray-900 mb-3 tracking-tight">Proactive Chat</h3>
                            <p className="text-[15px] text-gray-600 leading-relaxed">Actively Invite online visitors to chat in real-time, right from your admin dashboard.</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <h3 className="text-[20px] font-bold text-gray-900 mb-3 tracking-tight">Multi-User Direct Messaging</h3>
                            <p className="text-[15px] text-gray-600 leading-relaxed">Handle multiple conversations at once — chat, email, or text — with a personal touch.</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <h3 className="text-[20px] font-bold text-gray-900 mb-3 tracking-tight">Booking System Integration</h3>
                            <p className="text-[15px] text-gray-600 leading-relaxed">Let visitors book meetings directly from the chat widget via Calendly integration.</p>
                        </div>
                    </div>
                </RevealOnScroll>
                {/* Section 5: CTA Section */}
                <RevealOnScroll>
                    <div className="relative overflow-hidden flex flex-col items-center justify-center mx-auto max-w-[900px] w-[92%] mt-16 sm:mt-24 md:mt-[120px] mb-20 px-5 py-10 sm:p-14 border border-gray-200/80 rounded-2xl sm:rounded-3xl bg-white shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[250px] sm:w-[350px] md:w-[480px] pointer-events-none z-0 select-none opacity-40 mix-blend-multiply">
                            <img src="/hero-bg.png" alt="CTA Background Shape" className="w-full h-auto object-contain" />
                        </div>
                        <div className="absolute -bottom-24 -left-24 sm:-bottom-32 sm:-left-32 w-[250px] sm:w-[350px] md:w-[480px] pointer-events-none z-0 select-none opacity-30 mix-blend-multiply rotate-180">
                            <img src="/hero-bg.png" alt="CTA Background Shape" className="w-full h-auto object-contain" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Experience the Power of <span className="italic text-[#2B64FD]">Marketing</span> with Live Chat!</h1>
                            <Link href="/demo" className="group flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 rounded-full bg-[#2B64FD] hover:bg-[#1E56F0] text-white text-base sm:text-lg font-semibold shadow-md hover:shadow-xl hover:shadow-[#2B64FD]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out cursor-pointer">
                                <span>Start for free</span>
                                <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5 ml-2.5">→</span>
                            </Link>
                        </div>
                    </div>
                </RevealOnScroll>
                {/* Section 6: Footer */}
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
