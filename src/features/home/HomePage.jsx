"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import { useState } from "react";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";

const faqData = [
    {
        question: "What is chatquartz, and how does it work?",
        answer: "chatquartz is an AI-powered chat system that integrates with multiple platforms to provide automated, intelligent customer support and communication solutions.",
    },
    {
        question: "Does chatquartz require coding knowledge to set up?",
        answer: "No, chatquartz is designed for easy setup without the need for coding expertise, making it accessible to all users.",
    },
    {
        question: "What platforms does chatquartz integrate with?",
        answer: "chatquartz integrates with platforms like Mailchimp, HubSpot, WooCommerce, social media channels, and popular email marketing tools.",
    },
    {
        question: "Can chatquartz handle multiple languages?",
        answer: "Yes, chatquartz supports automatic translation in 19 languages, making it suitable for global audiences.",
    },
    {
        question: "How secure is chatquartz?",
        answer: "chatquartz prioritizes privacy and data security, with features like compliance with visitor privacy policies and encrypted data handling.",
    },
    {
        question: "Is there a limit to the number of queries chatquartz can handle?",
        answer: "No, chatquartz is designed to scale effortlessly and can handle unlimited customer queries simultaneously.",
    },
    {
        question: "Can I customize the chat widget to match my brand?",
        answer: "Yes, chatquartz allows you to fully customize chatbox designs and widgets to align with your brand identity.",
    },
    {
        question: "Does chatquartz offer analytics for customer interactions?",
        answer: "Yes, chatquartz includes tools to monitor and analyze user interactions, helping you refine responses and improve customer engagement.",
    },
    {
        question: "What kind of support does chatquartz provide for setup and troubleshooting?",
        answer: "chatquartz offers comprehensive documentation, tutorials, and dedicated support to assist with setup and any troubleshooting needs.",
    },
    {
        question: "Is chatquartz a one-time purchase or a subscription-based service?",
        answer: "chatquartz offers flexible pricing options, including one-time purchases for lifetime access without recurring monthly fees.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const midPoint = Math.ceil(faqData.length / 2);
    const leftColumn = faqData.slice(0, midPoint);
    const rightColumn = faqData.slice(midPoint);

    const renderFAQCard = (item, actualIndex) => {
        const isOpen = openIndex === actualIndex;
        return (
            <div
                key={actualIndex}
                className={`bg-white border transition-all duration-200 rounded-xl overflow-hidden hover:shadow-md ${isOpen ? "border-[#2B64FD] ring-1 ring-[#2B64FD]/20 shadow-md" : "border-gray-200/80 shadow-sm"}`}
            >
                <button
                    onClick={() => toggleFAQ(actualIndex)}
                    className="w-full flex items-center justify-between px-5 py-4 sm:px-6 text-left transition-all duration-200 group focus:outline-none cursor-pointer"
                >
                    <span className="text-base sm:text-[14px] font-bold leading-snug pr-4">
                        {item.question}
                    </span>
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold transition-all duration-200 select-none ${isOpen ? "bg-[#2B64FD] text-white" : "bg-[#2B64FD]/10 text-[#2B64FD] group-hover:bg-[#2B64FD] group-hover:text-white"}`}>
                        {isOpen ? "−" : "+"}
                    </span>
                </button>

                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-60 opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="px-5 py-4 sm:px-6 text-sm sm:text-[13px] leading-relaxed text-gray-600 bg-[#F6F9FE]/70">
                        {item.answer}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="w-[95%] max-w-[1200px] mx-auto mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
                <div className="space-y-4">
                    {leftColumn.map((item, index) => renderFAQCard(item, index))}
                </div>
                <div className="space-y-4">
                    {rightColumn.map((item, index) => renderFAQCard(item, index + midPoint))}
                </div>
            </div>
        </div>
    );
};

const HomePage = () => {
    return (
        <div>
            <SmoothScroll>
                {/* Section 1: Hero Section & Navigation */}
                <div className="relative overflow-hidden w-full min-h-screen bg-gradient-to-b from-[#AAC8FD] to-[#FFFFFF] pb-12 sm:pb-20">
                    {/* Hero Background Shape - Right side behind/around headline text */}
                    <div
                        className="absolute top-16 sm:top-20 md:top-16 right-[-30%] sm:right-[-10%] md:right-[-5%] w-[400px] sm:w-[650px] md:w-[850px] lg:w-[1050px] pointer-events-none z-0 select-none opacity-80 sm:opacity-95"
                        style={{
                            WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 15%, black 55%, black 100%)",
                            maskImage: "linear-gradient(to right, transparent 0%, transparent 15%, black 55%, black 100%)"
                        }}
                    >
                        <img src="/hero-bg.png" alt="Hero Background Shape" className="w-full h-auto object-contain mix-blend-multiply" />
                    </div>

                    <div className="relative z-10">
                        <Navbar />
                        <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-tight text-black mt-10 sm:mt-16 md:mt-24 lg:mt-45 mb-6 sm:mb-8 text-center px-4">
                            Skyrocket <br /> Your Growth with <br />
                            <span className="text-[#2B64FD] italic">AI-Powered</span>{" "}
                            <span className="font-bold">Chatbots</span>
                        </h1>
                        <p className="text-[13px] sm:text-[14px] text-gray-600 max-w-3xl px-6 mx-auto text-center leading-relaxed">
                            Boost leads, automate support, and increase revenue with AI-powered chatbots.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center my-8 sm:my-10 gap-4 sm:gap-5 px-6">
                            <Link href="/demo" className="group flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 rounded-full bg-[#2B64FD] hover:bg-[#1E56F0] text-white text-base sm:text-lg font-semibold shadow-md hover:shadow-xl hover:shadow-[#2B64FD]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out cursor-pointer">
                                <span>Try This</span>
                                <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5 ml-2.5">→</span>
                            </Link>
                            <Link href="/contactus" className="flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 rounded-full bg-white/85 hover:bg-white text-gray-700 hover:text-gray-950 border border-gray-200/80 hover:border-gray-300 backdrop-blur-sm text-base sm:text-lg font-semibold shadow-sm hover:shadow-md hover:shadow-gray-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out cursor-pointer">
                                <span>Talk to an Expert</span>
                            </Link>
                        </div>
                    </div>

                </div>
                <RevealOnScroll>
                    {/* Section 2: Features & Benefits Cards (Why ChatQuartz) */}
                    <div className="flex flex-col items-center mt-16 sm:mt-24 md:mt-[120px] px-4">
                        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Your AI Support Partner for Business Growth</h1>
                        <p className="text-[13px] sm:text-[14px] text-gray-600 max-w-3xl px-4 sm:px-6 text-center leading-relaxed">
                            Check out why chatQuartz is the ultimate go-to solution for your business.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-[95%] max-w-[1150px] mx-auto mt-8 sm:mt-10">
                            <div className="flex flex-col h-full p-7 lg:p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer">
                                <img src="/boost.png" alt="boost" className="h-16 w-16 object-contain rounded-lg mb-6 brightness-0" />
                                <h2 className="text-[18px] font-bold tracking-tight text-gray-900 mb-3">Boost Productivity with Smarter Support</h2>
                                <p className="text-[14px] text-gray-600 leading-relaxed mt-auto">Automate repetitive queries so your team only handles what actually needs a human.</p>
                            </div>
                            <div className="flex flex-col h-full p-7 lg:p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer">
                                <img src="/light.png" alt="light" className="h-16 w-16 object-contain rounded-lg mb-6 brightness-0" />
                                <h2 className="text-[18px] font-bold tracking-tight text-gray-900 mb-3">Lighter Workloads for Your Team</h2>
                                <p className="text-[14px] text-gray-600 leading-relaxed mt-auto">chatquartz resolve 30%+ of support requests — no added headcount.</p>
                            </div>
                            <div className="flex flex-col h-full p-7 lg:p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer">
                                <img src="/effortless.png" alt="effortless" className="h-16 w-16 object-contain rounded-lg mb-6 brightness-0" />
                                <h2 className="text-[18px] font-bold tracking-tight text-gray-900 mb-3">Effortless Lead Qualification</h2>
                                <p className="text-[14px] text-gray-600 leading-relaxed mt-auto">Every conversation captures lead details automatically, no forms required.</p>
                            </div>
                            <div className="flex flex-col h-full p-7 lg:p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer">
                                <img src="/24-hours.png" alt="24-hours" className="h-16 w-16 object-contain rounded-lg mb-6 brightness-0" />
                                <h2 className="text-[18px] font-bold tracking-tight text-gray-900 mb-3">24/7 Customer Engagement</h2>
                                <p className="text-[14px] text-gray-600 leading-relaxed mt-auto">Always-on support means no customer waits until business hours.</p>
                            </div>
                            <div className="flex flex-col h-full p-7 lg:p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer">
                                <img src="/faster.png" alt="faster" className="h-16 w-16 object-contain rounded-lg mb-6 brightness-0" />
                                <h2 className="text-[18px] font-bold tracking-tight text-gray-900 mb-3">Solve Problems Faster and Smarter</h2>
                                <p className="text-[14px] text-gray-600 leading-relaxed mt-auto">Faster answers build the trust that turns visitors into buyers.</p>
                            </div>
                            <div className="flex flex-col h-full p-7 lg:p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer">
                                <img src="/conversion.png" alt="conversion" className="h-16 w-16 object-contain rounded-lg mb-6 brightness-0" />
                                <h2 className="text-[18px] font-bold tracking-tight text-gray-900 mb-3">Drive Conversions with Every Interaction</h2>
                                <p className="text-[14px] text-gray-600 leading-relaxed mt-auto">Instant, professional replies that turn visitors into loyal customers!</p>
                            </div>
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
                            <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-4 text-center tracking-tight bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Experience <span className="italic text-[#2B64FD]">chatquartz</span> in Action</h1>
                            <p className="text-[13px] sm:text-[14px] text-gray-600 max-w-3xl px-4 text-center leading-relaxed mb-6 sm:mb-8">See ChatQuartz handle a real conversation — no signup required!</p>
                            <Link href="/demo" className="group flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 rounded-full bg-[#2B64FD] hover:bg-[#1E56F0] text-white text-base sm:text-lg font-semibold shadow-md hover:shadow-xl hover:shadow-[#2B64FD]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out cursor-pointer">
                                <span>Contact Sales</span>
                                <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5 ml-2.5">→</span>
                            </Link>
                        </div>
                    </div>
                </RevealOnScroll>


                <RevealOnScroll>
                    {/* Section 3: Future of Customer Support (Split Details) */}
                    <div className="flex flex-col items-center mt-16 sm:mt-24 md:mt-[120px] px-4">
                        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-8 sm:mb-12 md:mb-16 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Why chatquartz is the Future of Customer Support</h1>
                        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 md:gap-12 w-[94%] max-w-[1100px] mx-auto">

                            <div className="flex-1 flex flex-col justify-between gap-10 sm:gap-16 md:gap-24 lg:gap-32 px-4 sm:px-8 py-6 sm:py-12 md:py-24 lg:py-32">
                                <div className="flex flex-col items-center text-center">
                                    <h5 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold mb-3 text-gray-900">Intelligent Automation At Scale</h5>
                                    <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed max-w-[460px]">Handles unlimited queries autonomously, escalating complex issues to your team when needed.</p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <h5 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold mb-3 text-gray-900">Analytics That Drive Success</h5>
                                    <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed max-w-[460px]">Real-time performance tracking to spot gaps and continuously improve responses.</p>
                                </div>
                            </div>

                            <div className="hidden md:block w-px bg-[#2B64FD] self-stretch my-2"></div>
                            <div className="block md:hidden h-px w-4/5 bg-[#2B64FD] my-4"></div>

                            <div className="flex-1 flex flex-col justify-between gap-10 sm:gap-16 md:gap-24 lg:gap-32 px-4 sm:px-8 py-2">
                                <div className="flex flex-col items-center text-center">
                                    <h5 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold mb-3 text-gray-900">A Multilingual Marvel</h5>
                                    <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed max-w-[460px]">Auto-translated conversations in 19+ languages — no barriers, no limits.</p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <h5 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold mb-3 text-gray-900">Your Data, Your Strength</h5>
                                    <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed max-w-[460px]">Sync your database or documents to turn your content into AI-driven insights.</p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <h5 className="text-[17px] sm:text-[18px] md:text-[20px] font-bold mb-3 text-gray-900">Effortless Integration Across Platforms</h5>
                                    <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed max-w-[460px]">Fits seamlessly into WordPress, WooCommerce, CRMs, and email — no hassle.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
                <RevealOnScroll>
                    {/* Section 4: Effortless Human Takeover Section */}
                    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24 mt-16 sm:mt-24 md:mt-[120px]">
                        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Effortless Human Takeover: Keeping You in Control</h1>
                        <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed text-center px-2">chatquartz ensures seamless AI-human teamwork by alerting agents for unresolved queries, blending AI efficiency with human empathy for exceptional support.</p>
                        {/* <img src="/chatsample.svg" alt="chatsample" className="w-[70%] h-[300px] object-contain mt-10" /> */}
                        <Link href="/features" className="flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 rounded-full bg-white/85 hover:bg-white text-gray-700 hover:text-gray-950 border border-gray-200/80 hover:border-gray-300 text-base sm:text-lg font-semibold shadow-sm hover:shadow-md hover:shadow-gray-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out cursor-pointer mt-7">
                            <span>Learn more</span>
                            <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5 ml-2.5">→</span>
                        </Link>
                    </div>
                </RevealOnScroll>
                <RevealOnScroll>
                    {/* Section 5: Get Started in Minutes (3 Simple Steps) */}
                    <div className="flex flex-col items-center mt-16 sm:mt-24 md:mt-[120px] px-4">
                        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Get started with chatquartz in minutes</h1>
                        <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed text-center px-2">Setting up chatQuartz is quick and hassle-free. Follow these simple steps to integrate the chatbot and start transforming your customer support:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-[95%] max-w-[1150px] mx-auto mt-8 sm:mt-10">
                            <div className="flex flex-col h-full p-6 sm:p-7 lg:p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer">
                                <h1 className="text-[32px] sm:text-[40px] font-extrabold text-white [-webkit-text-stroke:2px_#000000] mb-3">1</h1>
                                <h2 className="text-[16px] sm:text-[18px] font-bold tracking-tight text-gray-900 mb-3">Sync chatquartz with Your Data</h2>
                                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-auto">Automatically sync user details and plugin data, ensuring a smooth and streamlined setup process.</p>
                            </div>
                            <div className="flex flex-col h-full p-6 sm:p-7 lg:p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer">
                                <h1 className="text-[32px] sm:text-[40px] font-extrabold text-white [-webkit-text-stroke:2px_#000000] mb-3">2</h1>
                                <h2 className="text-[16px] sm:text-[18px] font-bold tracking-tight text-gray-900 mb-3">chatquartz Responds Using Your Content</h2>
                                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-auto">AI-driven chatbots handle customer queries with precision, leveraging your existing knowledge base.</p>
                            </div>
                            <div className="flex flex-col h-full p-6 sm:p-7 lg:p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer">
                                <h1 className="text-[32px] sm:text-[40px] font-extrabold text-white [-webkit-text-stroke:2px_#000000] mb-3">3</h1>
                                <h2 className="text-[16px] sm:text-[18px] font-bold tracking-tight text-gray-900 mb-3">Track and Enhance Performance</h2>
                                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-auto">Monitor chatbot interactions and refine responses by adding new insights for continuous improvement.</p>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
                <RevealOnScroll>
                    {/* Section 6: Frequently Asked Questions (FAQ) */}
                    <div className="flex flex-col items-center mt-16 sm:mt-24 md:mt-[120px] px-4">
                        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Frequently Asked Questions</h1>
                        <FAQSection />
                    </div>
                </RevealOnScroll>
                <RevealOnScroll>
                    {/* Section 7: Footer Section */}
                    <div className="w-full bg-gradient-to-t from-[#AAC8FD] to-[#FFFFFF] mt-16 sm:mt-24 md:mt-[120px]">
                        <div className="max-w-[1440px] mx-auto">
                            <Footer />
                        </div>
                    </div>
                </RevealOnScroll>
            </SmoothScroll>
        </div>
    )
}

export default HomePage