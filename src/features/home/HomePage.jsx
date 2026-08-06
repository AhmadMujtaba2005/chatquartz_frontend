import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";
import FutureShowcase from "@/components/features/FutureShowcase";
import HomePageFAQ from "./HomePageFAQ";
import { HeroNetworkCanvas } from "@/components/PageBackground";


const HomePage = () => {
    return (
        <main>
            <SmoothScroll>
                <Navbar />
                {/* Section 1: Hero Section & Navigation */}
                <div className="relative w-full min-h-screen bg-gradient-to-b from-brand-secondary to-[#FFFFFF] pb-12 sm:pb-20 pt-[64px] sm:pt-[88px] md:pt-[112px] overflow-x-hidden">
                    <HeroNetworkCanvas animated={true} />

                    <div className="relative z-10 flex flex-col items-center">
                        <h1 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] text-gray-900 mt-12 sm:mt-16 md:mt-24 lg:mt-48 mb-6 text-center tracking-tight px-4">
                            Skyrocket <br /> Your Growth with <br />
                            <span className="text-brand-primary italic font-bold">AI-Powered </span>
                            <span className="font-bold">Chatbots</span>
                        </h1>
                        <div className="max-w-3xl mx-auto px-6">
                            <p className="text-[15px] sm:text-[16px] text-gray-600 text-center leading-relaxed">
                                Boost leads, automate support, and increase revenue with AI-powered chatbots.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center items-center my-8 sm:my-10 gap-4 sm:gap-5 px-6">
                            {/* Enhanced Rotating border wrapper for "Try This" */}
                            <div className="relative group flex items-center justify-center w-full sm:w-auto p-[2px] rounded-full overflow-hidden bg-brand-primary shadow-md hover:shadow-xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out">
                                {/* Blurred rotating glow (comet tail) */}
                                <div className="absolute inset-0 flex items-center justify-center blur-[4px] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-[300%] h-[300%] animate-[spin_2.5s_linear_infinite]" style={{ background: "conic-gradient(from 0deg, transparent 20%, rgba(255,255,255,0.8) 45%, #ffffff 50%, transparent 50%, transparent 70%, rgba(255,255,255,0.8) 95%, #ffffff 100%)" }}></div>
                                </div>

                                {/* Sharp rotating core (comet head) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-100">
                                    <div className="w-[300%] h-[300%] animate-[spin_2.5s_linear_infinite]" style={{ background: "conic-gradient(from 0deg, transparent 20%, rgba(255,255,255,0.8) 45%, #ffffff 50%, transparent 50%, transparent 70%, rgba(255,255,255,0.8) 95%, #ffffff 100%)" }}></div>
                                </div>

                                <Link href="/demo" className="relative z-10 flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 rounded-full bg-brand-primary group-hover:bg-brand-primary-hover text-white text-base sm:text-lg font-semibold transition-all duration-300 ease-out cursor-pointer">
                                    <span>Try This</span>
                                    <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5 ml-2.5">→</span>
                                </Link>
                            </div>
                            <Link href="/contactus" className="group flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 rounded-full bg-white/85 hover:bg-white text-gray-700 hover:text-gray-950 border border-gray-200/80 hover:border-gray-300 backdrop-blur-sm text-base sm:text-lg font-semibold shadow-sm hover:shadow-md hover:shadow-gray-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out cursor-pointer">
                                Talk to an Expert
                            </Link>
                        </div>
                    </div>

                </div>
                <RevealOnScroll>
                    {/* Section 2: Features & Benefits Cards (Why ChatQuartz) */}
                    <div className="flex flex-col items-center mt-16 sm:mt-24 md:mt-[120px] px-4">
                        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Your AI Support Partner for Business Growth</h2>
                        <p className="text-[13px] sm:text-[14px] text-gray-600 max-w-3xl px-4 sm:px-6 text-center leading-relaxed">
                            Check out why chatQuartz is the ultimate go-to solution for your business.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-[95%] max-w-[1150px] mx-auto mt-8 sm:mt-10">
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 flex flex-col h-full p-7 lg:p-8 transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img src="/boost.png" alt="boost" className="h-16 w-16 object-contain rounded-lg mb-6 brightness-0" />
                                <h2 className="text-[18px] font-bold tracking-tight text-gray-900 mb-3">Boost Productivity with Smarter Support</h2>
                                <p className="text-[14px] text-gray-600 leading-relaxed mt-auto">Automate repetitive queries so your team only handles what actually needs a human.</p>
                            </div>
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 flex flex-col h-full p-7 lg:p-8 transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img src="/light.png" alt="light" className="h-16 w-16 object-contain rounded-lg mb-6 brightness-0" />
                                <h2 className="text-[18px] font-bold tracking-tight text-gray-900 mb-3">Lighter Workloads for Your Team</h2>
                                <p className="text-[14px] text-gray-600 leading-relaxed mt-auto">chatquartz resolve 30%+ of support requests — no added headcount.</p>
                            </div>
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 flex flex-col h-full p-7 lg:p-8 transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img src="/effortless.png" alt="effortless" className="h-16 w-16 object-contain rounded-lg mb-6 brightness-0" />
                                <h2 className="text-[18px] font-bold tracking-tight text-gray-900 mb-3">Effortless Lead Qualification</h2>
                                <p className="text-[14px] text-gray-600 leading-relaxed mt-auto">Every conversation captures lead details automatically, no forms required.</p>
                            </div>
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 flex flex-col h-full p-7 lg:p-8 transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img src="/24-hours.png" alt="24-hours" className="h-16 w-16 object-contain rounded-lg mb-6 brightness-0" />
                                <h2 className="text-[18px] font-bold tracking-tight text-gray-900 mb-3">24/7 Customer Engagement</h2>
                                <p className="text-[14px] text-gray-600 leading-relaxed mt-auto">Always-on support means no customer waits until business hours.</p>
                            </div>
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 flex flex-col h-full p-7 lg:p-8 transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img src="/faster.png" alt="faster" className="h-16 w-16 object-contain rounded-lg mb-6 brightness-0" />
                                <h2 className="text-[18px] font-bold tracking-tight text-gray-900 mb-3">Solve Problems Faster and Smarter</h2>
                                <p className="text-[14px] text-gray-600 leading-relaxed mt-auto">Faster answers build the trust that turns visitors into buyers.</p>
                            </div>
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 flex flex-col h-full p-7 lg:p-8 transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img src="/conversion.png" alt="conversion" className="h-16 w-16 object-contain rounded-lg mb-6 brightness-0" />
                                <h2 className="text-[18px] font-bold tracking-tight text-gray-900 mb-3">Drive Conversions with Every Interaction</h2>
                                <p className="text-[14px] text-gray-600 leading-relaxed mt-auto">Instant, professional replies that turn visitors into loyal customers!</p>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>


                <RevealOnScroll>
                    {/* Section 3: Mid-Page CTA Section */}
                    <div className="relative overflow-hidden flex flex-col items-center justify-center mx-auto max-w-[900px] w-[92%] mt-16 sm:mt-24 md:mt-[120px] px-5 py-12 sm:p-16 border border-brand-secondary/50 rounded-[32px] bg-white/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:border-brand-primary/40 transition-all duration-500 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <div className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[250px] sm:w-[350px] md:w-[480px] pointer-events-none z-0 select-none opacity-40 mix-blend-multiply">
                            <img src="/hero-bg.png" alt="CTA Background Shape" className="w-full h-auto object-contain" />
                        </div>
                        <div className="absolute -bottom-24 -left-24 sm:-bottom-32 sm:-left-32 w-[250px] sm:w-[350px] md:w-[480px] pointer-events-none z-0 select-none opacity-30 mix-blend-multiply rotate-180">
                            <img src="/hero-bg.png" alt="CTA Background Shape" className="w-full h-auto object-contain" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-4 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Experience <span className="italic text-brand-primary">chatquartz</span> in Action</h2>
                            <p className="text-[13px] sm:text-[14px] text-gray-600 max-w-3xl px-4 text-center leading-relaxed mb-6 sm:mb-8">See ChatQuartz handle a real conversation — no signup required!</p>
                            <Link href="/demo" className="group flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg font-semibold shadow-md hover:shadow-xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out cursor-pointer">
                                <span>Contact Sales</span>
                                <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5 ml-2.5">→</span>
                            </Link>
                        </div>
                    </div>
                </RevealOnScroll>


                <RevealOnScroll>
                    {/* Section 4: Future of Customer Support */}
                    <div className="flex flex-col items-center mt-16 sm:mt-24 md:mt-[120px] px-4">
                        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-8 sm:mb-12 md:mb-16 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Why chatquartz is the Future of Customer Support</h2>
                        <FutureShowcase />
                    </div>
                </RevealOnScroll>
                <RevealOnScroll>
                    {/* Section 5: Effortless Human Takeover */}
                    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24 mt-16 sm:mt-24 md:mt-[120px]">
                        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Effortless Human Takeover: Keeping You in Control</h2>
                        <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed text-center px-2">chatquartz ensures seamless AI-human teamwork by alerting agents for unresolved queries, blending AI efficiency with human empathy for exceptional support.</p>
                        <Link href="/features" className="flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 rounded-full bg-white/85 hover:bg-white text-gray-700 hover:text-gray-950 border border-gray-200/80 hover:border-gray-300 text-base sm:text-lg font-semibold shadow-sm hover:shadow-md hover:shadow-gray-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out cursor-pointer mt-7">
                            <span>Learn more</span>
                            <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5 ml-2.5">→</span>
                        </Link>
                    </div>
                </RevealOnScroll>
                <RevealOnScroll>
                    {/* Section 6: Get Started in Minutes */}
                    <div className="flex flex-col items-center mt-16 sm:mt-24 md:mt-[120px] px-4">
                        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Get started with chatquartz in minutes</h2>
                        <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed text-center px-2">Setting up chatQuartz is quick and hassle-free. Follow these simple steps to integrate the chatbot and start transforming your customer support:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-[95%] max-w-[1150px] mx-auto mt-8 sm:mt-10">
                            <div
                                className="relative flex flex-col h-full p-6 sm:p-7 lg:p-8 rounded-2xl border border-brand-secondary/30 shadow-sm hover:shadow-[0_15px_40px_rgba(43,100,253,0.12)] transition-all duration-500 ease-out cursor-pointer overflow-hidden hover:-translate-y-2 group"
                                style={{
                                    backgroundImage: "url('/images/wave-bg-1.png')",
                                    backgroundSize: "300% 100%",
                                    backgroundPosition: "0% center"
                                }}
                            >
                                <div className="absolute inset-0 bg-white/85 z-0 transition-colors duration-500 group-hover:bg-white/60"></div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <h2 className="text-[32px] sm:text-[40px] font-extrabold text-white [-webkit-text-stroke:2px_#000000] leading-none mb-3">1</h2>
                                    <h2 className="text-[16px] sm:text-[18px] font-bold tracking-tight text-gray-900 mb-3">Sync chatquartz with Your Data</h2>
                                    <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-auto">Automatically sync user details and plugin data, ensuring a smooth and streamlined setup process.</p>
                                </div>
                            </div>

                            <div
                                className="relative flex flex-col h-full p-6 sm:p-7 lg:p-8 rounded-2xl border border-brand-secondary/30 shadow-sm hover:shadow-[0_15px_40px_rgba(43,100,253,0.12)] transition-all duration-500 ease-out cursor-pointer overflow-hidden hover:-translate-y-2 group"
                                style={{
                                    backgroundImage: "url('/images/wave-bg-1.png')",
                                    backgroundSize: "300% 100%",
                                    backgroundPosition: "50% center"
                                }}
                            >
                                <div className="absolute inset-0 bg-white/85 z-0 transition-colors duration-500 group-hover:bg-white/60"></div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <h2 className="text-[32px] sm:text-[40px] font-extrabold text-white [-webkit-text-stroke:2px_#000000] leading-none mb-3">2</h2>
                                    <h2 className="text-[16px] sm:text-[18px] font-bold tracking-tight text-gray-900 mb-3">chatquartz Responds Using Your Content</h2>
                                    <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-auto">AI-driven chatbots handle customer queries with precision, leveraging your existing knowledge base.</p>
                                </div>
                            </div>

                            <div
                                className="relative flex flex-col h-full p-6 sm:p-7 lg:p-8 rounded-2xl border border-brand-secondary/30 shadow-sm hover:shadow-[0_15px_40px_rgba(43,100,253,0.12)] transition-all duration-500 ease-out cursor-pointer overflow-hidden hover:-translate-y-2 group"
                                style={{
                                    backgroundImage: "url('/images/wave-bg-1.png')",
                                    backgroundSize: "300% 100%",
                                    backgroundPosition: "100% center"
                                }}
                            >
                                <div className="absolute inset-0 bg-white/85 z-0 transition-colors duration-500 group-hover:bg-white/60"></div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <h2 className="text-[32px] sm:text-[40px] font-extrabold text-white [-webkit-text-stroke:2px_#000000] leading-none mb-3">3</h2>
                                    <h2 className="text-[16px] sm:text-[18px] font-bold tracking-tight text-gray-900 mb-3">Track and Enhance Performance</h2>
                                    <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-auto">Monitor chatbot interactions and refine responses by adding new insights for continuous improvement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
                <RevealOnScroll>
                    {/* Section 7: Frequently Asked Questions */}
                    <div className="flex flex-col items-center mt-16 sm:mt-24 md:mt-[120px] px-4">
                        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Frequently Asked Questions</h2>
                        <HomePageFAQ />
                    </div>
                </RevealOnScroll>
                <RevealOnScroll>
                    {/* Section 8: Footer */}
                    <div className="w-full bg-gradient-to-t from-brand-secondary to-[#FFFFFF] mt-16 sm:mt-24 md:mt-[120px]">
                        <div className="max-w-[1440px] mx-auto">
                            <Footer />
                        </div>
                    </div>
                </RevealOnScroll>
            </SmoothScroll>
        </main>
    )
}

export default HomePage