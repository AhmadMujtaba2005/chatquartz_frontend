"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";

const PricingPage = () => {
    return (
        <div>
            <SmoothScroll>
                <div className="w-full min-h-[60vh] bg-gradient-to-b from-[#AAC8FD] to-[#FFFFFF] pb-20">
                    <Navbar />
                    <div className="mt-16 sm:mt-24">
                        <p className="text-[20px] text-center text-black mb-2 mt-[190px]">Pricing</p>
                        <h1 className="text-[48px] leading-tight mb-6 text-center tracking-tight">Sample <span className="font-bold text-[#2B64FD] italic">Pricing </span>For Every Business</h1>
                        <div>
                            <p className="text-[14px] text-gray-600 max-w-3xl px-6 mx-auto text-center leading-relaxed mb-100">An affordable messaging platform for support, marketing, and sales — one-time payment, no monthly fees, lifetime access.</p>
                        </div>
                    </div>
                </div>
                <RevealOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto w-[94%] mt-16 sm:mt-24 mb-20">
                        {/* Starter Plan */}
                        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 p-8 flex flex-col transition-all duration-300 hover:border-[#2B64FD]/40">
                            <h2 className="text-[24px] font-bold mb-1 text-gray-900">Starter Plan</h2>
                            <p className="text-[14px] text-gray-600 mb-6">Get started with AI-powered conversations</p>
                            <div className="text-[36px] font-bold text-[#2B64FD] mb-8">$9<span className="text-[18px] text-gray-500 font-medium">/month</span></div>

                            <div className="mb-4 text-[14px] font-semibold text-gray-900">Features:</div>
                            <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-3 mb-12 flex-grow marker:text-[#2B64FD]">
                                <li>1 user seat</li>
                                <li>Live chat with unlimited conversations</li>
                                <li>AI-powered chatbot for FAQs</li>
                                <li>Basic analytics dashboard</li>
                                <li>WordPress & WooCommerce integration</li>
                            </ul>

                            <div className="bg-gray-50/80 -mx-8 -mb-8 p-8 rounded-b-3xl border-t border-gray-100 mt-auto">
                                <div className="text-[15px] font-semibold mb-2 text-gray-900">Best for:</div>
                                <p className="text-[13px] text-gray-600 leading-relaxed">Individuals, startups, and small businesses looking to quickly launch AI chat on their website.</p>
                            </div>
                        </div>

                        {/* Professional Plan */}
                        <div className="bg-white rounded-3xl border-2 border-[#2B64FD] shadow-[0_8px_30px_rgb(43,100,253,0.12)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.18)] hover:-translate-y-1 p-8 flex flex-col transition-all duration-300 relative mt-4 md:mt-0">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2B64FD] text-white px-4 py-1.5 rounded-full text-[12px] font-bold tracking-wide uppercase shadow-sm">Most Popular</div>
                            <h2 className="text-[24px] font-bold mb-1 text-gray-900">Professional Plan</h2>
                            <p className="text-[14px] text-gray-600 mb-6">Scale your conversations and automate growth</p>
                            <div className="text-[36px] font-bold text-[#2B64FD] mb-8">$15<span className="text-[18px] text-gray-500 font-medium">/month</span></div>

                            <div className="mb-4 text-[14px] font-semibold text-gray-900">Features:</div>
                            <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-3 mb-12 flex-grow marker:text-[#2B64FD]">
                                <li>Up to 5 user seats</li>
                                <li>Advanced AI chatbot with NLP (smarter responses & intent detection)</li>
                                <li>Multi-channel support (Facebook, Instagram, WhatsApp)</li>
                                <li>Custom workflows & automation (lead capture, routing, follow-ups)</li>
                                <li>Advanced analytics + sentiment insights</li>
                                <li>CRM Integrations (HubSpot, Mailchimp, etc.)</li>
                                <li>Enhanced customization for chat design & behavior</li>
                            </ul>

                            <div className="bg-blue-50/40 -mx-8 -mb-8 p-8 rounded-b-[22px] border-t border-[#2B64FD]/10 mt-auto">
                                <div className="text-[15px] font-semibold mb-2 text-gray-900">Best for:</div>
                                <p className="text-[13px] text-gray-600 leading-relaxed">Growing businesses that want to automate customer engagement, capture more leads, and manage conversations across channels.</p>
                            </div>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 p-8 flex flex-col transition-all duration-300 hover:border-[#2B64FD]/40">
                            <h2 className="text-[24px] font-bold mb-1 text-gray-900">Enterprise Plan</h2>
                            <p className="text-[14px] text-gray-600 mb-6">Fully customized AI for your business at scale</p>
                            <div className="text-[32px] font-bold text-[#2B64FD] mb-8 mt-1">Custom Pricing</div>

                            <div className="mb-4 text-[14px] font-semibold text-gray-900">Everything in Professional, plus:</div>
                            <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-3 mb-12 flex-grow marker:text-[#2B64FD]">
                                <li>Unlimited user seats</li>
                                <li>Dedicated account manager</li>
                                <li>White-label solution (your brand, your product)</li>
                                <li>Advanced reporting & predictive analytics</li>
                                <li>Full API access for custom integrations</li>
                                <li>Tailored onboarding, training, and priority support</li>
                                <li>Custom AI workflows & enterprise-grade automation</li>
                            </ul>

                            <div className="bg-gray-50/80 -mx-8 -mb-8 p-8 rounded-b-3xl border-t border-gray-100 mt-auto">
                                <div className="text-[15px] font-semibold mb-2 text-gray-900">Best for:</div>
                                <p className="text-[13px] text-gray-600 leading-relaxed">Large teams and enterprises that need full customization, deep integrations, and scalable AI infrastructure.</p>
                            </div>
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

export default PricingPage;
