import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";
import PageBackground from "@/components/PageBackground";

const SectionHeader = ({ title }) => (
    <RevealOnScroll>
        <div className="w-full text-center mt-6 mb-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-[13px] tracking-wide uppercase border border-brand-primary/20">
                {title}
            </span>
        </div>
    </RevealOnScroll>
);

const FeaturesPage = () => {
    return (
        <div>
            <SmoothScroll>
                <Navbar />
                {/* Section 1: Hero Section */}
                <div className="relative w-full bg-gradient-to-b from-[#0F0A1F] via-[#1E0B4A] to-[#5B21B6] min-h-screen flex flex-col justify-center items-center pt-[64px] sm:pt-[88px] md:pt-[112px] pb-[64px] sm:pb-[88px] md:pb-[112px] overflow-x-hidden">
                    <PageBackground variant="network" />
                    <RevealOnScroll className="relative z-10 flex flex-col items-center w-full px-4">
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-center text-purple-200 mb-3">
                            Unleash the Power of
                        </p>
                        <h1 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] mb-6 text-center tracking-tight text-white">
                            <span className="font-bold text-brand-primary italic">AI-Driven</span> Chatbots
                        </h1>

                        <div className="mx-auto max-w-[600px] mt-8 mb-10 px-4">
                            <div className="relative rounded-[32px] border border-purple-500/30 bg-white/10 backdrop-blur-md p-8 sm:p-10 flex flex-col items-center text-center gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.2)] transition-all duration-500 overflow-hidden group cursor-default">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                                    <span className="text-[14px] font-bold tracking-widest uppercase text-purple-300">Built on</span>
                                    <span className="text-[20px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">OpenAI</span>
                                    <span className="text-purple-400 font-light text-[24px]">×</span>
                                    <span className="text-[20px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">Dialogflow</span>
                                </div>
                                <p className="relative z-10 text-[15px] text-purple-200 max-w-md leading-relaxed">
                                    Enterprise-grade AI infrastructure from the two names powering conversational AI at scale — not a black-box model you have to trust blindly.
                                </p>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
                {/* Section 2: Transforming Customer Experiences */}
                <RevealOnScroll>
                    <div className="mt-16 sm:mt-24 md:mt-[100px] mb-4 px-4 text-center">
                        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Transforming Customer Experiences with chatquartz</h2>
                        <p className="text-[14px] sm:text-[15px] text-gray-500 max-w-2xl mx-auto leading-relaxed">Everything you need to automate, engage, and grow — all in one platform.</p>
                    </div>
                </RevealOnScroll>

                <div className="max-w-[1100px] mx-auto w-[92%] mt-12 flex flex-col gap-6">

                    {/* Category: Performance + Omnichannel */}
                    <SectionHeader title="Performance & Omnichannel" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <RevealOnScroll>
                            <div className="relative rounded-[28px] border border-brand-secondary/50 bg-white/60 backdrop-blur-md p-7 sm:p-8 flex flex-col gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.12)] hover:border-brand-primary/40 transition-all duration-500 group overflow-hidden h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="relative z-10 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                    </div>
                                    <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900">Elevate Performance with Powerful Tools</h3>
                                </div>
                                <ul className="relative z-10 flex flex-col gap-3.5">
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><div><span className="text-[14px] font-semibold text-gray-800">Real-Time Analytics: </span><span className="text-[14px] text-gray-600">Provides detailed analytics on missing queries, sentiment, and usage patterns.</span></div></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><div><span className="text-[14px] font-semibold text-gray-800">Content Training: </span><span className="text-[14px] text-gray-600">Supports automatic AI training from uploaded documents and website scraping.</span></div></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><div><span className="text-[14px] font-semibold text-gray-800">WooCommerce Integration: </span><span className="text-[14px] text-gray-600">Connects directly with WooCommerce to provide instant product data.</span></div></li>
                                </ul>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="relative rounded-[28px] border border-brand-secondary/50 bg-white/60 backdrop-blur-md p-7 sm:p-8 flex flex-col gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.12)] hover:border-brand-primary/40 transition-all duration-500 group overflow-hidden h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="relative z-10 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                    </div>
                                    <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900">Omnichannel Integrations</h3>
                                </div>
                                <p className="relative z-10 text-[13px] text-gray-500 italic -mt-2">Deploy across multiple platforms simultaneously.</p>
                                <ul className="relative z-10 flex flex-col gap-3.5 -mt-2">
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Supports native integrations with WhatsApp, Instagram, Telegram, and Facebook Messenger.</span></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Provides rich messaging capabilities including attachments, images, and dynamic responses.</span></li>
                                </ul>
                                <div className="relative z-10 flex flex-wrap gap-2 mt-1">
                                    {["WhatsApp", "Instagram", "Telegram", "Messenger"].map(ch => (<span key={ch} className="text-[11px] font-semibold px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">{ch}</span>))}
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Category: AI Conversations + AI Training */}
                    <SectionHeader title="Intelligent Automation" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <RevealOnScroll>
                            <div className="relative rounded-[28px] border border-brand-secondary/50 bg-white/60 backdrop-blur-md p-7 sm:p-8 flex flex-col gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.12)] hover:border-brand-primary/40 transition-all duration-500 group overflow-hidden h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="relative z-10 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                    </div>
                                    <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900">AI-Powered Conversations</h3>
                                </div>
                                <ul className="relative z-10 flex flex-col gap-3.5">
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Leverages advanced natural language processing to understand complex user intent.</span></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Generates contextual, human-like responses automatically.</span></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Requires zero technical setup or coding knowledge to configure.</span></li>
                                </ul>
                                <div className="relative z-10 mt-auto pt-2">
                                    <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4 py-1.5"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>Live 24 / 7</span>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="relative rounded-[28px] border border-brand-secondary/50 bg-white/60 backdrop-blur-md p-7 sm:p-8 flex flex-col gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.12)] hover:border-brand-primary/40 transition-all duration-500 group overflow-hidden h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="relative z-10 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                    </div>
                                    <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900">AI-Enhanced Training &amp; Adaptability</h3>
                                </div>
                                <ul className="relative z-10 flex flex-col gap-3.5">
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Allows real-time Q&amp;A updates and dynamic response modification.</span></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Automatically generates response variations for enriched chatbot knowledge.</span></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Provides native multi-language translation and understanding via Google AI.</span></li>
                                </ul>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Category: Human Handoff full-width */}
                    <SectionHeader title="Agent Collaboration" />
                    <RevealOnScroll>
                        <div className="relative rounded-[28px] border border-brand-secondary/50 bg-white/60 backdrop-blur-md p-7 sm:p-10 flex flex-col md:flex-row gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.12)] hover:border-brand-primary/40 transition-all duration-500 group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="relative z-10 flex flex-col gap-4 md:w-1/2">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900">Human-in-the-Loop Handoff</h3>
                                </div>
                                <ul className="flex flex-col gap-3.5">
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Operates autonomously to handle tier-1 support queries.</span></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Supports seamless conversation transfer to human agents with full context preservation.</span></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Triggers customizable routing alerts to specific teams or agents.</span></li>
                                </ul>
                            </div>
                            <div className="relative z-10 md:w-1/2 flex flex-wrap gap-3 content-start items-start pt-2">
                                {[{ label: "Bot Handles Routine", color: "bg-green-50 border-green-200 text-green-700" }, { label: "Escalates When Needed", color: "bg-amber-50 border-amber-200 text-amber-700" }, { label: "Agent Notified Instantly", color: "bg-blue-50 border-blue-200 text-blue-700" }, { label: "Seamless Continuity", color: "bg-purple-50 border-purple-200 text-purple-700" }].map(item => (<span key={item.label} className={`text-[12px] font-semibold px-4 py-2 rounded-full border ${item.color}`}>{item.label}</span>))}
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Category: Analytics + Effortless */}
                    <SectionHeader title="Insights & Usability" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <RevealOnScroll>
                            <div className="relative rounded-[28px] border border-brand-secondary/50 bg-white/60 backdrop-blur-md p-7 sm:p-8 flex flex-col gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.12)] hover:border-brand-primary/40 transition-all duration-500 group overflow-hidden h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="relative z-10 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
                                    </div>
                                    <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900">Analytics That Drive Success</h3>
                                </div>
                                <p className="relative z-10 text-[13px] text-gray-500 italic -mt-2">Comprehensive Conversation Analytics.</p>
                                <ul className="relative z-10 flex flex-col gap-3.5">
                                    {[{ label: "Workflow Automation", desc: "Automatically processes repetitive inquiries and categorizes tickets." }, { label: "High Deflection Rate", desc: "Capable of autonomously resolving up to 30% of standard requests." }, { label: "Always-On Availability", desc: "Functions 24/7 without downtime or concurrency limits." }, { label: "Sub-Second Response Times", desc: "Delivers answers instantaneously to users." }].map(item => (<li key={item.label} className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><div><span className="text-[14px] font-semibold text-gray-800">{item.label}: </span><span className="text-[14px] text-gray-600">{item.desc}</span></div></li>))}
                                </ul>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="relative rounded-[28px] border border-brand-secondary/50 bg-white/60 backdrop-blur-md p-7 sm:p-8 flex flex-col gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.12)] hover:border-brand-primary/40 transition-all duration-500 group overflow-hidden h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="relative z-10 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900">Effortless and User-Friendly</h3>
                                </div>
                                <p className="relative z-10 text-[14px] text-gray-600 leading-relaxed">No-Code Configuration: Train the underlying OpenAI model directly from web URLs or Dialogflow configurations.</p>
                                <ul className="relative z-10 flex flex-col gap-3">
                                    {["Video tutorials", "Step-by-step guides", "Help articles"].map(item => (<li key={item} className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">{item}</span></li>))}
                                </ul>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Category: Lead Conversion accent card */}
                    <SectionHeader title="Conversion Strategies" />
                    <RevealOnScroll>
                        <div className="relative rounded-[28px] border border-brand-primary/30 bg-gradient-to-br from-brand-primary/5 via-white/60 to-brand-secondary/10 backdrop-blur-md p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-[0_8px_30px_rgb(124,58,237,0.08)] hover:shadow-[0_20px_50px_rgb(124,58,237,0.18)] hover:border-brand-primary/50 transition-all duration-500 group overflow-hidden mb-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-secondary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="relative z-10 flex flex-col gap-4 md:w-1/2">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/15 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                    </div>
                                    <h3 className="text-[18px] sm:text-[22px] font-bold text-gray-900">Automated Lead Capture</h3>
                                </div>
                                <ul className="flex flex-col gap-3.5">
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Triggers proactive messages based on user behavior and intent.</span></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Automatically collects and qualifies lead data through conversational forms.</span></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Syncs captured lead data directly to external CRMs and marketing platforms.</span></li>
                                </ul>
                            </div>
                            <div className="relative z-10 md:w-1/2 flex flex-col items-center md:items-end gap-4">
                                <div className="flex flex-col gap-3 w-full max-w-[260px]">
                                    <div className="flex items-center justify-between bg-white/80 border border-brand-secondary/50 rounded-2xl px-5 py-3.5 shadow-sm"><span className="text-[13px] font-medium text-gray-600">Lead Capture</span><span className="text-[15px] font-bold text-green-600">Automatic</span></div>
                                    <div className="flex items-center justify-between bg-white/80 border border-brand-secondary/50 rounded-2xl px-5 py-3.5 shadow-sm"><span className="text-[13px] font-medium text-gray-600">Response Time</span><span className="text-[15px] font-bold text-brand-primary">Instant</span></div>
                                    <div className="flex items-center justify-between bg-white/80 border border-brand-secondary/50 rounded-2xl px-5 py-3.5 shadow-sm"><span className="text-[13px] font-medium text-gray-600">Availability</span><span className="text-[15px] font-bold text-purple-600">24 / 7</span></div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Section 3: CTA Section */}
                <RevealOnScroll>
                    <div className="relative overflow-hidden flex flex-col items-center justify-center mx-auto max-w-[1024px] w-[90%] lg:w-[85%] mt-16 sm:mt-24 md:mt-[120px] mb-20 px-6 py-12 sm:p-16 border border-brand-secondary/50 rounded-[32px] bg-white/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.15)] hover:border-brand-primary/40 transition-all duration-500 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <div className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[350px] sm:w-[460px] pointer-events-none z-0 select-none opacity-40 mix-blend-multiply">
                            <img src="/hero-bg.png" alt="CTA Background Shape" className="w-full h-auto object-contain" />
                        </div>
                        <div className="absolute -bottom-24 -left-24 sm:-bottom-32 sm:-left-32 w-[350px] sm:w-[460px] pointer-events-none z-0 select-none opacity-30 mix-blend-multiply rotate-180">
                            <img src="/hero-bg.png" alt="CTA Background Shape" className="w-full h-auto object-contain" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Experience the Power of <span className="italic text-brand-primary">AI</span> with chatquartz</h2>
                            <p className="text-[14px] text-gray-600 max-w-3xl px-4 text-center leading-relaxed mb-8">Trusted AI, powered by OpenAI and Google&apos;s Dialogflow — smart, scalable conversations that simplify support and marketing.</p>
                            <Link href="/demo" prefetch={false} className="group/btn flex items-center justify-center px-10 sm:px-12 py-4 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-white text-lg font-semibold shadow-md hover:shadow-xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out cursor-pointer">
                                <span>Start for free</span>
                                <span className="inline-block transition-transform duration-200 ease-out group-hover/btn:translate-x-1.5 ml-2.5">→</span>
                            </Link>
                            <div className="flex items-center justify-center gap-6 mt-4">
                                <span className="flex items-center gap-1.5 text-[13px] text-gray-500">No credit card required</span>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Section 4: Footer */}
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

export default FeaturesPage;