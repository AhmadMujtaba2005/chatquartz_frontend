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
import PageBackground from "@/components/PageBackground";
import GlobalCTA from "@/components/ui/GlobalCTA";
import { ProactiveChatIcon, MultiUserIcon, BookingSystemIcon } from "@/components/ui/icons/MarketingIcons";

const MarketingPage = () => {
    return (
        <div>
            <SmoothScroll>
                <Navbar />
                {/* Section 1: Hero Section */}
                <div className="relative w-full bg-gradient-to-b from-[#0F0A1F] via-[#1E0B4A] to-[#5B21B6] min-h-screen flex flex-col justify-center items-center pt-[64px] sm:pt-[88px] md:pt-[112px] pb-[64px] sm:pb-[88px] md:pb-[112px] overflow-x-hidden">
                    <PageBackground variant="marketing" />

                    <RevealOnScroll className="relative z-10 flex flex-col items-center w-full px-4">
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-center text-purple-200 mb-3">Marketing Strategy</p>
                        <h1 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] mb-6 text-center tracking-tight text-white">
                            Made Easy with <span className="font-bold text-brand-primary italic">Live Chat</span>
                        </h1>
                        <div className="max-w-3xl mx-auto px-6">
                            <p className="text-[15px] sm:text-[16px] text-purple-200 text-center leading-relaxed">
                                Live chat adds a personal touch, driving deeper engagement, more sales, and higher revenue.
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
                {/* Section 2: Mockups Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-[95%] max-w-[950px] mx-auto mt-16 sm:mt-24 md:mt-[100px]">
                    <RevealOnScroll>
                        <div className="relative flex flex-col h-full p-6 sm:p-7 lg:p-8 rounded-[32px] border border-brand-secondary/50 bg-white/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.15)] hover:border-brand-primary/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="relative z-10 w-full"><PopupMockup /></div>
                            <h2 className="relative z-10 text-[16px] sm:text-[18px] font-bold tracking-tight text-gray-900 mb-3 mt-4">
                                Attract with Pop-up Messages
                            </h2>
                            <p className="relative z-10 text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-auto">Proactively draw in visitors the moment they show interest — turning passive browsers into active prospects.</p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll>
                        <div className="relative flex flex-col h-full p-6 sm:p-7 lg:p-8 rounded-[32px] border border-brand-secondary/50 bg-white/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.15)] hover:border-brand-primary/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="relative z-10 w-full"><WelcomeMockup /></div>
                            <h2 className="relative z-10 text-[16px] sm:text-[18px] font-bold tracking-tight text-gray-900 mb-3 mt-4">
                                Engage with Welcome Messages
                            </h2>
                            <p className="relative z-10 text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-auto">Automatically start a personalized conversation with every visitor, keeping them on your site longer.</p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll>
                        <div className="relative flex flex-col h-full p-6 sm:p-7 lg:p-8 rounded-[32px] border border-brand-secondary/50 bg-white/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.15)] hover:border-brand-primary/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="relative z-10 w-full"><FollowUpMockup /></div>
                            <h2 className="relative z-10 text-[16px] sm:text-[18px] font-bold tracking-tight text-gray-900 mb-3 mt-4">
                                Capture with Follow-up Messages
                            </h2>
                            <p className="relative z-10 text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-auto">Automatically collect contact details when agents are offline, ensuring no high-intent lead goes cold.</p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll>
                        <div className="relative flex flex-col h-full p-6 sm:p-7 lg:p-8 rounded-[32px] border border-brand-secondary/50 bg-white/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.15)] hover:border-brand-primary/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="relative z-10 w-full"><SubscribeMockup /></div>
                            <h2 className="relative z-10 text-[16px] sm:text-[18px] font-bold tracking-tight text-gray-900 mb-3 mt-4">
                                Nurture with Subscribe Messages
                            </h2>
                            <p className="relative z-10 text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-auto">Grow your audience automatically and sync them to your newsletter for long-term engagement.</p>
                        </div>
                    </RevealOnScroll>
                </div>
                {/* Section 3: Advanced Marketing Automations & Integrations */}
                <div className="flex flex-col items-center mt-16 sm:mt-24 md:mt-[120px] mb-20 px-4">
                    <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Convert with Advanced Automations</h2>
                    <RevealOnScroll className="w-full flex justify-center">
                        <FeatureShowcase />
                    </RevealOnScroll>
                    <RevealOnScroll className="w-full mt-12 md:mt-16">
                        <div className="flex flex-col items-center justify-center gap-6">
                            <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Streamlined Integrations</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto w-[94%] mt-10">
                            {/* Card 1: Social Share */}
                            <div className="relative bg-white rounded-3xl border border-gray-100 shadow-[0_8px_40px_rgb(0,0,0,0.06)] p-8 flex flex-col items-center text-center hover:border-brand-primary/20 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_20px_60px_rgb(0,0,0,0.1)] overflow-hidden">
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
                            <div className="relative bg-white rounded-3xl border border-gray-100 shadow-[0_8px_40px_rgb(0,0,0,0.06)] p-8 flex flex-col items-center text-center hover:border-brand-primary/20 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_20px_60px_rgb(0,0,0,0.1)] overflow-hidden">
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
                                        <div className="w-14 h-14 bg-brand-primary rounded-2xl shadow-[0_2px_12px_rgba(124,58,237,0.25)] flex items-center justify-center group-hover:shadow-[0_4px_20px_rgba(124,58,237,0.4)] transition-all duration-300 delay-150">
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
                    <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Real-Time Connections</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1200px] mx-auto w-[94%] mt-12 text-center px-4 relative">
                        {/* Shared Gradient Definition */}
                        <svg width="0" height="0" className="absolute">
                            <defs>
                                <linearGradient id="theme-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop stopColor="var(--color-brand-primary)" offset="0%" />
                                    <stop stopColor="var(--color-brand-secondary)" offset="100%" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="flex flex-col items-center">
                            <ProactiveChatIcon className="mb-6 drop-shadow-sm transition-transform duration-300 hover:-translate-y-1" />
                            <h3 className="text-[20px] font-bold text-gray-900 mb-3 tracking-tight">Proactive Chat</h3>
                            <p className="text-[15px] text-gray-600 leading-relaxed max-w-sm">Actively Invite online visitors to chat in real-time, right from your admin dashboard.</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <MultiUserIcon className="mb-6 drop-shadow-sm transition-transform duration-300 hover:-translate-y-1" />
                            <h3 className="text-[20px] font-bold text-gray-900 mb-3 tracking-tight">Multi-User Direct Messaging</h3>
                            <p className="text-[15px] text-gray-600 leading-relaxed max-w-sm">Handle multiple conversations at once — chat, email, or text — with a personal touch.</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <BookingSystemIcon className="mb-6 drop-shadow-sm transition-transform duration-300 hover:-translate-y-1" />
                            <h3 className="text-[20px] font-bold text-gray-900 mb-3 tracking-tight">Booking System Integration</h3>
                            <p className="text-[15px] text-gray-600 leading-relaxed max-w-sm">Let visitors book meetings directly from the chat widget via Calendly integration.</p>
                        </div>
                    </div>
                </RevealOnScroll>
                {/* Section 5: CTA Section */}
                <GlobalCTA 
                    title={<>Experience the Power of <span className="italic text-brand-primary">Marketing</span> with chatquartz</>}
                    buttonText="Get Started"
                    buttonLink="/contactus"
                    containerClassName="mt-16 sm:mt-24 md:mt-[120px] mb-20 px-5 py-12 sm:p-16"
                    bgImageClassName="w-[250px] sm:w-[350px] md:w-[480px]"
                    description={null}
                    bottomText={null}
                />
                {/* Section 6: Footer */}
                <RevealOnScroll>
                    <div className="w-full bg-gradient-to-t from-[#0F0A1F] via-[#1E0B4A] to-[#5B21B6] mt-16 sm:mt-24 md:mt-[120px]">
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
