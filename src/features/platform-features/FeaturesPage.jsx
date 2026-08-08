import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";
import PageBackground from "@/components/PageBackground";
import { ChartBarIcon, ChatAlt2Icon, LightningBoltIcon, LightBulbIcon, UsersIcon, ChartPieIcon, EmojiHappyIcon, TrendingUpIcon } from "@/components/ui/Icons";

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
                                        <ChartBarIcon className="w-5 h-5 text-brand-primary" />
                                    </div>
                                    <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900">Elevate Performance with Powerful Tools</h3>
                                </div>
                                <ul className="relative z-10 flex flex-col gap-3.5">
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><div><span className="text-[14px] font-semibold text-gray-800">Real-Time Analytics: </span><span className="text-[14px] text-gray-600">Provides detailed analytics on missing queries, sentiment, and usage patterns.</span></div></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><div><span className="text-[14px] font-semibold text-gray-800">Content Training: </span><span className="text-[14px] text-gray-600">Supports automatic AI training from uploaded documents and website scraping.</span></div></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><div><span className="text-[14px] font-semibold text-gray-800">WooCommerce Integration: </span><span className="text-[14px] text-gray-600">Connects directly with WooCommerce to provide instant product data.</span></div></li>
                                </ul>
                                <div className="mt-auto relative z-10 flex items-center justify-center w-full h-[180px] sm:h-[220px]">
                                    <img src="/images/features-performance.png" alt="Elevate Performance" className="w-full h-full object-contain drop-shadow-2xl scale-[1.15] group-hover:-translate-y-2 group-hover:scale-[1.2] transition-all duration-500 pointer-events-none" />
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="relative rounded-[28px] border border-brand-secondary/50 bg-white/60 backdrop-blur-md p-7 sm:p-8 flex flex-col gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.12)] hover:border-brand-primary/40 transition-all duration-500 group overflow-hidden h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="relative z-10 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                                        <ChatAlt2Icon className="w-5 h-5 text-brand-primary" />
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
                                <div className="mt-auto relative z-10 flex items-center justify-center w-full h-[180px] sm:h-[220px]">
                                    <img src="/images/features-omnichannel.png" alt="Omnichannel Integrations" className="w-full h-full object-contain drop-shadow-2xl scale-[1.25] group-hover:-translate-y-2 group-hover:scale-[1.3] transition-all duration-500 pointer-events-none" />
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
                                <div className="absolute top-6 right-6 z-20">
                                    <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 rounded-full px-3 py-1.5"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse"></span>Live 24 / 7</span>
                                </div>
                                <div className="relative z-10 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                                        <LightningBoltIcon className="w-5 h-5 text-brand-primary" />
                                    </div>
                                    <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900">AI-Powered Conversations</h3>
                                </div>
                                <ul className="relative z-10 flex flex-col gap-3.5">
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Leverages advanced natural language processing to understand complex user intent.</span></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Generates contextual, human-like responses automatically.</span></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Requires zero technical setup or coding knowledge to configure.</span></li>
                                </ul>
                                <div className="mt-auto relative z-10 flex items-center justify-center w-full h-[180px] sm:h-[220px]">
                                    <img src="/images/features-automation.png" alt="AI-Powered Conversations" className="w-full h-full object-contain drop-shadow-2xl scale-[1.25] group-hover:-translate-y-2 group-hover:scale-[1.3] transition-all duration-500 pointer-events-none" />
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="relative rounded-[28px] border border-brand-secondary/50 bg-white/60 backdrop-blur-md p-7 sm:p-8 flex flex-col gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.12)] hover:border-brand-primary/40 transition-all duration-500 group overflow-hidden h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="relative z-10 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                                        <LightBulbIcon className="w-5 h-5 text-brand-primary" />
                                    </div>
                                    <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900">AI-Enhanced Training &amp; Adaptability</h3>
                                </div>
                                <ul className="relative z-10 flex flex-col gap-3.5">
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Allows real-time Q&amp;A updates and dynamic response modification.</span></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Automatically generates response variations for enriched chatbot knowledge.</span></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Provides native multi-language translation and understanding via Google AI.</span></li>
                                </ul>
                                <div className="mt-auto relative z-10 flex items-center justify-center w-full h-[180px] sm:h-[220px]">
                                    <img src="/images/features-training.png" alt="AI-Enhanced Training & Adaptability" className="w-full h-full object-contain drop-shadow-2xl scale-[1.25] group-hover:-translate-y-2 group-hover:scale-[1.3] transition-all duration-500 pointer-events-none" />
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Category: Human Handoff full-width */}
                    <SectionHeader title="Agent Collaboration" />
                    <RevealOnScroll>
                        <div className="relative rounded-[28px] border border-brand-primary/30 bg-gradient-to-br from-brand-primary/5 via-white/60 to-brand-secondary/10 backdrop-blur-md px-8 py-6 sm:px-10 sm:py-8 flex flex-col md:flex-row items-center gap-8 shadow-[0_8px_30px_rgb(124,58,237,0.08)] hover:shadow-[0_20px_50px_rgb(124,58,237,0.18)] hover:border-brand-primary/50 transition-all duration-500 group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-secondary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="relative z-10 flex flex-col gap-4 md:w-1/2">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/15 flex items-center justify-center flex-shrink-0">
                                        <UsersIcon className="w-5 h-5 text-brand-primary" />
                                    </div>
                                    <h3 className="text-[18px] sm:text-[22px] font-bold text-gray-900">Human-in-the-Loop Handoff</h3>
                                </div>
                                <ul className="flex flex-col gap-3.5">
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Operates autonomously to handle tier-1 support queries.</span></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Supports seamless conversation transfer to human agents with full context preservation.</span></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Triggers customizable routing alerts to specific teams or agents.</span></li>
                                </ul>
                            </div>
                            <div className="relative z-10 md:w-1/2 flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-6 pt-6 md:pt-0">
                                <img src="/images/features-handoff.png" alt="Human-in-the-Loop Handoff" className="w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] object-contain drop-shadow-2xl mix-blend-multiply scale-[1.15] group-hover:-translate-y-2 group-hover:scale-[1.2] transition-all duration-500 shrink-0 -ml-8" />
                                <div className="flex flex-col gap-3 w-full max-w-[260px] relative z-10">
                                    <div className="flex items-center justify-between bg-white/80 border border-brand-secondary/50 rounded-2xl px-5 py-3.5 shadow-sm"><span className="text-[13px] font-medium text-gray-600">Routine Queries</span><span className="text-[15px] font-bold text-green-600">Bot Managed</span></div>
                                    <div className="flex items-center justify-between bg-white/80 border border-brand-secondary/50 rounded-2xl px-5 py-3.5 shadow-sm"><span className="text-[13px] font-medium text-gray-600">Complex Issues</span><span className="text-[15px] font-bold text-amber-600">Escalated</span></div>
                                    <div className="flex items-center justify-between bg-white/80 border border-brand-secondary/50 rounded-2xl px-5 py-3.5 shadow-sm"><span className="text-[13px] font-medium text-gray-600">Agent Handover</span><span className="text-[15px] font-bold text-brand-primary">Seamless</span></div>
                                </div>
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
                                        <ChartPieIcon className="w-5 h-5 text-brand-primary" />
                                    </div>
                                    <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900">Analytics That Drive Success</h3>
                                </div>
                                <p className="relative z-10 text-[13px] text-gray-500 italic -mt-2">Comprehensive Conversation Analytics.</p>
                                <ul className="relative z-10 flex flex-col gap-3.5">
                                    {[{ label: "Workflow Automation", desc: "Automatically processes repetitive inquiries and categorizes tickets." }, { label: "High Deflection Rate", desc: "Capable of autonomously resolving up to 30% of standard requests." }, { label: "Always-On Availability", desc: "Functions 24/7 without downtime or concurrency limits." }, { label: "Sub-Second Response Times", desc: "Delivers answers instantaneously to users." }].map(item => (<li key={item.label} className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><div><span className="text-[14px] font-semibold text-gray-800">{item.label}: </span><span className="text-[14px] text-gray-600">{item.desc}</span></div></li>))}
                                </ul>
                                <div className="mt-auto relative z-10 flex items-center justify-center w-full h-[180px] sm:h-[220px]">
                                    <img src="/images/features-analytics.png" alt="Analytics That Drive Success" className="w-full h-full object-contain drop-shadow-2xl scale-[1.15] group-hover:-translate-y-2 group-hover:scale-[1.2] transition-all duration-500 pointer-events-none" />
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="relative rounded-[28px] border border-brand-secondary/50 bg-white/60 backdrop-blur-md p-7 sm:p-8 flex flex-col gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.12)] hover:border-brand-primary/40 transition-all duration-500 group overflow-hidden h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="relative z-10 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                                        <EmojiHappyIcon className="w-5 h-5 text-brand-primary" />
                                    </div>
                                    <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900">Effortless and User-Friendly</h3>
                                </div>
                                <p className="relative z-10 text-[14px] text-gray-600 leading-relaxed">No-Code Configuration: Train the underlying OpenAI model directly from web URLs or Dialogflow configurations.</p>
                                <ul className="relative z-10 flex flex-col gap-3">
                                    {["Step-by-step guides", "Help articles"].map(item => (<li key={item} className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">{item}</span></li>))}
                                </ul>
                                <div className="mt-auto relative z-10 flex items-center justify-center w-full h-[180px] sm:h-[220px]">
                                    <img src="/images/features-effortless.png" alt="Effortless and User-Friendly" className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply scale-[1.45] group-hover:-translate-y-2 group-hover:scale-[1.5] transition-all duration-500 pointer-events-none" />
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Category: Lead Conversion accent card */}
                    <SectionHeader title="Conversion Strategies" />
                    <RevealOnScroll>
                        <div className="relative rounded-[28px] border border-brand-primary/30 bg-gradient-to-br from-brand-primary/5 via-white/60 to-brand-secondary/10 backdrop-blur-md px-8 py-6 sm:px-10 sm:py-8 flex flex-col md:flex-row items-center gap-8 shadow-[0_8px_30px_rgb(124,58,237,0.08)] hover:shadow-[0_20px_50px_rgb(124,58,237,0.18)] hover:border-brand-primary/50 transition-all duration-500 group overflow-hidden mb-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-secondary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="relative z-10 flex flex-col gap-4 md:w-1/2">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/15 flex items-center justify-center flex-shrink-0">
                                        <TrendingUpIcon className="w-5 h-5 text-brand-primary" />
                                    </div>
                                    <h3 className="text-[18px] sm:text-[22px] font-bold text-gray-900">Automated Lead Capture</h3>
                                </div>
                                <ul className="flex flex-col gap-3.5">
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Triggers proactive messages based on user behavior and intent.</span></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Automatically collects and qualifies lead data through conversational forms.</span></li>
                                    <li className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div></div><span className="text-[14px] text-gray-600">Syncs captured lead data directly to external CRMs and marketing platforms.</span></li>
                                </ul>
                            </div>
                            <div className="relative z-10 md:w-1/2 flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-6 pt-6 md:pt-0">
                                <img src="/images/features-lead-capture.png" alt="Automated Lead Capture" className="w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] object-contain drop-shadow-2xl mix-blend-multiply scale-[1.15] group-hover:-translate-y-2 group-hover:scale-[1.2] transition-all duration-500 shrink-0 -ml-8" />
                                <div className="flex flex-col gap-3 w-full max-w-[260px] relative z-10">
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
                    <div className="relative overflow-hidden flex flex-col items-center justify-center mx-auto max-w-[1024px] w-[90%] lg:w-[85%] mt-16 sm:mt-24 md:mt-[120px] mb-20 px-6 py-10 sm:py-12 sm:px-16 border border-brand-secondary/50 rounded-[32px] bg-white/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.15)] hover:border-brand-primary/40 transition-all duration-500 group">
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