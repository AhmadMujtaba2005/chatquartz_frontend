import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";
import PageBackground from "@/components/PageBackground";

const CheckIcon = () => (
    <svg className="w-[18px] h-[18px] text-brand-primary shrink-0 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const PricingPage = () => {
    return (
        <div>
            <SmoothScroll>
                <Navbar />
                {/* Section 1: Hero Section */}
                <div className="relative w-full bg-gradient-to-b from-[#0F0A1F] via-[#1E0B4A] to-[#5B21B6] min-h-screen flex flex-col justify-center items-center pt-[64px] sm:pt-[88px] md:pt-[112px] pb-[64px] sm:pb-[88px] md:pb-[112px] overflow-x-hidden">
                    <PageBackground variant="pricing" />
                    <RevealOnScroll className="relative z-10 flex flex-col items-center w-full px-4">
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-center text-purple-200 mb-3">Pricing</p>
                        <h1 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] mb-6 text-center tracking-tight text-white">
                            Sample <span className="font-bold text-brand-primary italic">Pricing</span> For Every Business
                        </h1>
                        <div className="max-w-3xl mx-auto px-6">
                            <p className="text-[15px] sm:text-[16px] text-purple-200 text-center leading-relaxed">
                                An affordable messaging platform for support, marketing, and sales — one-time payment, no monthly fees, lifetime access.
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
                {/* Section 2: Pricing Cards */}
                <RevealOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto w-[94%] mt-16 sm:mt-24 md:mt-[100px] mb-20">
                        {/* Starter Plan */}
                        <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.15)] hover:-translate-y-2 p-8 flex flex-col transition-all duration-500 hover:border-brand-primary/40 group">
                            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <h2 className="relative z-10 text-[24px] font-bold mb-1 text-gray-900">Starter Plan</h2>
                            <p className="relative z-10 text-[14px] text-gray-600 mb-6">Get started with AI-powered conversations</p>
                            <div className="relative z-10 text-[36px] font-bold text-brand-primary mb-8">$9<span className="text-[18px] text-gray-500 font-medium">/month</span></div>

                            <div className="relative z-10 mb-4 text-[14px] font-semibold text-gray-900">Features:</div>
                            <ul className="relative z-10 text-[14px] text-gray-600 space-y-4 mb-12 flex-grow">
                                <li className="flex items-start"><CheckIcon />1 user seat</li>
                                <li className="flex items-start"><CheckIcon />Live chat with unlimited conversations</li>
                                <li className="flex items-start"><CheckIcon />AI-powered chatbot for FAQs</li>
                                <li className="flex items-start"><CheckIcon />Basic analytics dashboard</li>
                                <li className="flex items-start"><CheckIcon />WordPress & WooCommerce integration</li>
                            </ul>

                            <div className="relative z-10 bg-gray-50/50 backdrop-blur-sm -mx-8 -mb-8 p-8 rounded-b-[32px] border-t border-gray-100 mt-auto">
                                <div className="text-[15px] font-semibold mb-2 text-gray-900">Best for:</div>
                                <p className="text-[13px] text-gray-600 leading-relaxed">Individuals, startups, and small businesses looking to quickly launch AI chat on their website.</p>
                            </div>
                        </div>

                        {/* Professional Plan */}
                        <div className="relative bg-white/70 backdrop-blur-md rounded-[32px] border-2 border-brand-primary/80 shadow-[0_8px_30px_rgb(124,58,237,0.15)] hover:shadow-[0_20px_50px_rgb(124,58,237,0.25)] hover:-translate-y-2 p-8 flex flex-col transition-all duration-500 mt-4 md:mt-0 group">
                            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white px-5 py-1.5 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-md z-20">Most Popular</div>
                            <h2 className="relative z-10 text-[24px] font-bold mb-1 text-gray-900">Professional Plan</h2>
                            <p className="relative z-10 text-[14px] text-gray-600 mb-6">Scale your conversations and automate growth</p>
                            <div className="relative z-10 text-[36px] font-bold text-brand-primary mb-8">$15<span className="text-[18px] text-gray-500 font-medium">/month</span></div>

                            <div className="relative z-10 mb-4 text-[14px] font-semibold text-gray-900">Features:</div>
                            <ul className="relative z-10 text-[14px] text-gray-600 space-y-4 mb-12 flex-grow">
                                <li className="flex items-start"><CheckIcon />Up to 5 user seats</li>
                                <li className="flex items-start"><CheckIcon />Advanced AI chatbot with NLP (smarter responses & intent detection)</li>
                                <li className="flex items-start"><CheckIcon />Multi-channel support (Facebook, Instagram, WhatsApp)</li>
                                <li className="flex items-start"><CheckIcon />Custom workflows & automation (lead capture, routing, follow-ups)</li>
                                <li className="flex items-start"><CheckIcon />Advanced analytics + sentiment insights</li>
                                <li className="flex items-start"><CheckIcon />CRM Integrations (HubSpot, Mailchimp, etc.)</li>
                                <li className="flex items-start"><CheckIcon />Enhanced customization for chat design & behavior</li>
                            </ul>

                            <div className="relative z-10 bg-brand-primary/[0.03] backdrop-blur-sm -mx-8 -mb-8 p-8 rounded-b-[30px] border-t border-brand-primary/20 mt-auto">
                                <div className="text-[15px] font-semibold mb-2 text-brand-primary">Best for:</div>
                                <p className="text-[13px] text-gray-700 leading-relaxed">Growing businesses that want to automate customer engagement, capture more leads, and manage conversations across channels.</p>
                            </div>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.15)] hover:-translate-y-2 p-8 flex flex-col transition-all duration-500 hover:border-brand-primary/40 group">
                            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <h2 className="relative z-10 text-[24px] font-bold mb-1 text-gray-900">Enterprise Plan</h2>
                            <p className="relative z-10 text-[14px] text-gray-600 mb-6">Fully customized AI for your business at scale</p>
                            <div className="relative z-10 text-[32px] font-bold text-brand-primary mb-8 mt-1">Custom Pricing</div>

                            <div className="relative z-10 mb-4 text-[14px] font-semibold text-gray-900">Everything in Professional, plus:</div>
                            <ul className="relative z-10 text-[14px] text-gray-600 space-y-4 mb-12 flex-grow">
                                <li className="flex items-start"><CheckIcon />Unlimited user seats</li>
                                <li className="flex items-start"><CheckIcon />Dedicated account manager</li>
                                <li className="flex items-start"><CheckIcon />White-label solution (your brand, your product)</li>
                                <li className="flex items-start"><CheckIcon />Advanced reporting & predictive analytics</li>
                                <li className="flex items-start"><CheckIcon />Full API access for custom integrations</li>
                                <li className="flex items-start"><CheckIcon />Tailored onboarding, training, and priority support</li>
                                <li className="flex items-start"><CheckIcon />Custom AI workflows & enterprise-grade automation</li>
                            </ul>

                            <div className="relative z-10 bg-gray-50/50 backdrop-blur-sm -mx-8 -mb-8 p-8 rounded-b-[32px] border-t border-gray-100 mt-auto">
                                <div className="text-[15px] font-semibold mb-2 text-gray-900">Best for:</div>
                                <p className="text-[13px] text-gray-600 leading-relaxed">Large teams and enterprises that need full customization, deep integrations, and scalable AI infrastructure.</p>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
                {/* Section 3: Footer */}
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

export default PricingPage;
