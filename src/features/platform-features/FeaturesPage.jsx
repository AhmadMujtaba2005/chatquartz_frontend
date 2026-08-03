import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";

const FeaturesPage = () => {
    return (
        <div>
            <SmoothScroll>
                {/* Section 1: Hero Section */}
                <div className="w-full min-h-screen bg-gradient-to-b from-[#AAC8FD] to-[#FFFFFF] pb-12 sm:pb-20">
                    <Navbar />
                    <div className="mt-16 sm:mt-24">
                        <p className="text-[20px] text-center text-black mb-2 mt-[190px]">
                            Unleash the Power of
                        </p>
                        <h1 className="text-[48px] text-[#2B64FD] font-bold leading-tight mb-6 text-center tracking-tight">
                            <span className="italic">AI-Driven </span> <span className="text-[48px] text-black">Chatbots</span>
                        </h1>

                        <div className="mx-auto max-w-[600px] mb-40 px-4">
                            <div className="relative rounded-[32px] border border-[#AAC8FD]/50 bg-white/60 backdrop-blur-md p-8 sm:p-10 flex flex-col items-center text-center gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.1)] transition-all duration-500 overflow-hidden group cursor-default">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#AAC8FD]/10 via-transparent to-[#2B64FD]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                                    <span className="text-[14px] font-bold tracking-widest uppercase text-gray-400">Built on</span>
                                    <span className="text-[20px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">OpenAI</span>
                                    <span className="text-gray-300 font-light text-[24px]">×</span>
                                    <span className="text-[20px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">Dialogflow</span>
                                </div>
                                <p className="relative z-10 text-[15px] text-gray-600 max-w-md leading-relaxed">
                                    Enterprise-grade AI infrastructure from the two names powering conversational AI at scale — not a black-box model you have to trust blindly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section 2: Mobile Feature Showcase */}
                <RevealOnScroll>
                    <div className="mt-16 sm:mt-24 md:mt-[120px] mb-20">
                        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Transforming Customer Experiences with chatquartz</h1>
                        <img src="/featurepagemobile.svg" alt="featurepagemobile" className="w-[280px] sm:w-[320px] h-auto mx-auto block mt-8 mb-20 object-contain drop-shadow-lg" />
                    </div>
                </RevealOnScroll>

                {/* Section 3: CTA Section */}
                <RevealOnScroll>
                    <div className="relative overflow-hidden flex flex-col items-center justify-center mx-auto max-w-[900px] w-[92%] mt-16 sm:mt-24 md:mt-[120px] mb-20 px-6 py-12 sm:p-14 border border-gray-200/80 rounded-3xl bg-white shadow-sm hover:shadow transition-all duration-300">
                        <div className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[350px] sm:w-[460px] pointer-events-none z-0 select-none opacity-40 mix-blend-multiply">
                            <img src="/hero-bg.png" alt="CTA Background Shape" className="w-full h-auto object-contain" />
                        </div>
                        <div className="absolute -bottom-24 -left-24 sm:-bottom-32 sm:-left-32 w-[350px] sm:w-[460px] pointer-events-none z-0 select-none opacity-30 mix-blend-multiply rotate-180">
                            <img src="/hero-bg.png" alt="CTA Background Shape" className="w-full h-auto object-contain" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-4 text-center tracking-tight bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Why Choose <span className="text-[#2B64FD] italic">chatquartz</span>!</h1>
                            <p className="text-[14px] text-gray-600 max-w-3xl px-4 text-center leading-relaxed mb-8">Experience AI you can trust, powered by industry leaders like OpenAI and Google’s Dialogflow. chatquartz delivers smart, flexible, and scalable conversations to elevate your customer service and marketing. Ready to simplify interactions & transform your business?</p>
                            <Link href="/demo" className="group flex items-center justify-center px-10 sm:px-12 py-4 rounded-full bg-[#2B64FD] hover:bg-[#1E56F0] text-white text-lg font-semibold shadow-md hover:shadow-xl hover:shadow-[#2B64FD]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out cursor-pointer">
                                <span>Start for free</span>
                                <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5 ml-2.5">→</span>
                            </Link>
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Section 4: Footer */}
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

export default FeaturesPage;