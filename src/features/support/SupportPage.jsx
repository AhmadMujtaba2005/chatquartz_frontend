import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";
import PageBackground from "@/components/PageBackground";
import { Feature1Mockup, Feature2Mockup, Feature3Mockup, Feature4Mockup } from "@/components/mockups/SupportMockups";

const SupportPage = () => {
    return (
        <div>
            <SmoothScroll>
                <Navbar />
                {/* Section 1: Hero Section */}
                <div className="relative w-full bg-gradient-to-b from-brand-secondary to-[#FFFFFF] min-h-screen flex flex-col justify-center items-center pt-[64px] sm:pt-[88px] md:pt-[112px] pb-[64px] sm:pb-[88px] md:pb-[112px] overflow-x-hidden">
                    <PageBackground variant="support" />
                    <RevealOnScroll className="relative z-10 flex flex-col items-center w-full px-4">
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-center text-gray-800 mb-3">Support</p>
                        <h1 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] mb-6 text-center tracking-tight text-gray-900">
                            Elevate Your <span className="font-bold text-brand-primary italic">Support</span> With Advanced Tools
                        </h1>
                        <div className="max-w-3xl mx-auto px-6">
                            <p className="text-[15px] sm:text-[16px] text-gray-600 text-center leading-relaxed">
                                Give your team the tools they need to resolve issues faster and deliver exceptional customer experiences.
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Section 2: Support Features */}
                <div className="max-w-[1024px] mx-auto w-[90%] lg:w-[85%] mt-16 sm:mt-24 md:mt-[60px] flex flex-col gap-10 md:gap-12 mb-20">

                    {/* Feature 1 */}
                    <RevealOnScroll>
                        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                            <div className="w-full lg:w-[60%] relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] group p-4">
                                <div className="flex items-center justify-center transform scale-[1] sm:scale-110 lg:scale-[1.2] xl:scale-[1.3] origin-center transition-transform duration-700 group-hover:scale-[1.05] sm:group-hover:scale-[1.15] lg:group-hover:scale-[1.25] xl:group-hover:scale-[1.35]">
                                    <Feature1Mockup />
                                </div>
                            </div>
                            <div className="w-full lg:w-[40%] flex flex-col items-start text-left">
                                <h2 className="text-[20px] sm:text-[24px] font-bold tracking-tight text-gray-900 leading-tight mb-3">Unified Conversation Management</h2>
                                <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">Manage every customer query in one place — delete messages, search conversation history, monitor online and typing status.</p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Feature 2 */}
                    <RevealOnScroll>
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
                            <div className="w-full lg:w-[60%] relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] group p-4">
                                <div className="flex items-center justify-center transform scale-[1.2] sm:scale-[1.3] lg:scale-[1.4] xl:scale-[1.6] origin-center transition-transform duration-700 group-hover:scale-[1.25] sm:group-hover:scale-[1.35] lg:group-hover:scale-[1.45] xl:group-hover:scale-[1.65]">
                                    <Feature2Mockup />
                                </div>
                            </div>
                            <div className="w-full lg:w-[40%] flex flex-col items-start text-left">
                                <h2 className="text-[20px] sm:text-[24px] font-bold tracking-tight text-gray-900 leading-tight mb-3">Knowledge Base Integration</h2>
                                <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">A centralized, multilingual help center with searchable, categorized articles — embeddable directly in chat.</p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Feature 3 */}
                    <RevealOnScroll>
                        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                            <div className="w-full lg:w-[60%] relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] group p-4">
                                <div className="flex items-center justify-center transform scale-[1] sm:scale-110 lg:scale-[1.2] xl:scale-[1.3] origin-center transition-transform duration-700 group-hover:scale-[1.05] sm:group-hover:scale-[1.15] lg:group-hover:scale-[1.25] xl:group-hover:scale-[1.35]">
                                    <Feature3Mockup />
                                </div>
                            </div>
                            <div className="w-full lg:w-[40%] flex flex-col items-start text-left">
                                <h2 className="text-[20px] sm:text-[24px] font-bold tracking-tight text-gray-900 leading-tight mb-3">Streamlined Messaging Tools</h2>
                                <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">3000+ emojis, markdown formatting, and voice messages — plus reusable templates for faster replies.</p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Feature 4 */}
                    <RevealOnScroll>
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
                            <div className="w-full lg:w-[60%] relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] group p-4">
                                <div className="flex items-center justify-center transform scale-[1.2] sm:scale-[1.3] lg:scale-[1.4] xl:scale-[1.6] origin-center transition-transform duration-700 group-hover:scale-[1.25] sm:group-hover:scale-[1.35] lg:group-hover:scale-[1.45] xl:group-hover:scale-[1.65]">
                                    <Feature4Mockup />
                                </div>
                            </div>
                            <div className="w-full lg:w-[40%] flex flex-col items-start text-left">
                                <h2 className="text-[20px] sm:text-[24px] font-bold tracking-tight text-gray-900 leading-tight mb-3">Efficient Organization</h2>
                                <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">Auto-assign departments, route messages efficiently, and get notified via email, push, SMS, or desktop.</p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <RevealOnScroll>
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 p-6 flex flex-col items-center text-center transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="w-full h-36 bg-[#F4F7FF] rounded-xl mb-5 flex items-center justify-center overflow-hidden">
                                    <div className="flex items-center justify-center gap-2 sm:gap-3">

                                        {/* Messenger */}
                                        <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer flex-shrink-0 p-[7px] sm:p-2">
                                            <img src="/icons/messenger.svg" alt="Messenger" className="w-full h-full object-contain" />
                                        </div>

                                        {/* WhatsApp */}
                                        <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer flex-shrink-0 p-1.5 sm:p-[7px]">
                                            <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-full h-full object-contain" />
                                        </div>

                                        {/* Chat Bubbles */}
                                        <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer flex-shrink-0 p-[5px] sm:p-1.5">
                                            <img src="/icons/chat.svg" alt="Chat" className="w-full h-full object-contain" />
                                        </div>

                                        {/* Gmail */}
                                        <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer flex-shrink-0 p-2 sm:p-2.5">
                                            <img src="/icons/gmail.svg" alt="Gmail" className="w-full h-full object-contain" />
                                        </div>

                                        {/* Slack */}
                                        <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer flex-shrink-0 p-2 sm:p-2.5">
                                            <img src="/icons/slack.svg" alt="Slack" className="w-full h-full object-contain" />
                                        </div>

                                    </div>
                                </div>
                                <h3 className="relative z-10 text-[18px] font-bold text-gray-900 mt-auto">Omni-Channel Connectivity</h3>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 p-6 flex flex-col items-center text-center transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="w-full h-36 bg-[#F4F7FF] rounded-xl mb-5 flex items-center justify-center overflow-hidden">
                                    {/* Central Dialogflow Icon */}
                                    <svg className="w-[52px] h-[52px] z-10 flex-shrink-0 drop-shadow-[0_8px_16px_rgba(245,124,0,0.4)] hover:scale-105 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* Top Face */}
                                        <path d="M12 2.5 L21 7.5 L12 12.5 L3 7.5 Z" fill="#FFB74D" />
                                        {/* Right Face */}
                                        <path d="M12 12.5 L21 7.5 L21 17.5 L12 22.5 Z" fill="#E65100" />
                                        {/* Left Face with Tail */}
                                        <path d="M12 12.5 L12 22.5 L8 20.28 L8 24 L3 17.5 L3 7.5 Z" fill="#F57C00" />
                                    </svg>
                                </div>
                                <h3 className="relative z-10 text-[18px] font-bold text-gray-900 mt-auto">Smart Reply with DialogFlow</h3>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 p-6 flex flex-col items-center text-center transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="w-full h-36 bg-[#F4F7FF] rounded-xl mb-5 flex items-center justify-center overflow-hidden px-4">
                                    <div className="grid grid-cols-2 gap-3 w-full max-w-[240px]">
                                        {/* Spain */}
                                        <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm border border-gray-100 hover:-translate-y-0.5 transition-transform cursor-pointer">
                                            <div className="w-6 h-6 rounded-full overflow-hidden flex flex-col flex-shrink-0">
                                                <div className="h-[30%] bg-[#AA151B]"></div>
                                                <div className="h-[40%] bg-[#F1BF00]"></div>
                                                <div className="h-[30%] bg-[#AA151B]"></div>
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-700">¡Hola!</span>
                                        </div>
                                        {/* France */}
                                        <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm border border-gray-100 hover:-translate-y-0.5 transition-transform cursor-pointer">
                                            <div className="w-6 h-6 rounded-full overflow-hidden flex flex-shrink-0">
                                                <div className="w-1/3 bg-[#002395]"></div>
                                                <div className="w-1/3 bg-white"></div>
                                                <div className="w-1/3 bg-[#ED2939]"></div>
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-700">Bonjour!</span>
                                        </div>
                                        {/* Japan */}
                                        <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm border border-gray-100 hover:-translate-y-0.5 transition-transform cursor-pointer">
                                            <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-white border border-gray-200 flex-shrink-0">
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#BC002D]"></div>
                                            </div>
                                            <span className="text-[10px] font-bold text-[#2B64FD]">こんにちは</span>
                                        </div>
                                        {/* Germany */}
                                        <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm border border-gray-100 hover:-translate-y-0.5 transition-transform cursor-pointer">
                                            <div className="w-6 h-6 rounded-full overflow-hidden flex flex-col flex-shrink-0">
                                                <div className="h-1/3 bg-black"></div>
                                                <div className="h-1/3 bg-[#DD0000]"></div>
                                                <div className="h-1/3 bg-[#FFCE00]"></div>
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-700">Hallo!</span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="relative z-10 text-[18px] font-bold text-gray-900 mt-auto">Multilingual Support</h3>
                            </div>
                        </RevealOnScroll>
                    </div>

                    <RevealOnScroll>
                        <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 p-8 md:p-12 transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="flex-1 text-center md:text-left relative z-10">
                                <h3 className="text-[22px] sm:text-[28px] font-bold mb-4 text-gray-900">Smart Agent Routing</h3>
                                <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
                                    Collect valuable insights through user reviews and internal agent notes for seamless collaboration. Offer uninterrupted support with custom offline banners and integrated ticketing systems. Optimize response times using real-time queue updates, equitable routing, or user-preferred agent selection. Elevate your customer support experience with features built for satisfaction and success.
                                </p>
                            </div>

                            <div className="flex-1 relative z-10 flex justify-center items-center w-full mt-8 md:mt-0">
                                <div className="relative w-full max-w-[450px] md:max-w-[550px] lg:max-w-[650px] flex items-center justify-center">
                                    {/* Soft ambient glow behind image */}
                                    <div className="absolute inset-0 bg-brand-primary/10 blur-[60px] rounded-full transform group-hover:scale-110 transition-transform duration-700"></div>
                                    <img
                                        src="/images/smart-routing.png"
                                        alt="Smart Agent Routing"
                                        loading="lazy"
                                        className="relative z-10 w-full h-auto object-contain transform group-hover:scale-[1.03] group-hover:-translate-y-2 transition-all duration-500 drop-shadow-[0_20px_40px_rgba(43,100,253,0.15)]"
                                    />
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
                {/* Section 3: CTA Section */}
                <RevealOnScroll>
                    <div className="relative overflow-hidden flex flex-col items-center justify-center mx-auto max-w-[1024px] w-[90%] lg:w-[85%] mt-16 sm:mt-24 md:mt-[120px] mb-20 px-5 py-12 sm:p-16 border border-brand-secondary/50 rounded-[32px] bg-white/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:border-brand-primary/40 transition-all duration-500 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        {/* Background Shapes */}
                        <div className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[250px] sm:w-[350px] md:w-[480px] pointer-events-none z-0 select-none opacity-40 mix-blend-multiply">
                            <img src="/hero-bg.png" alt="CTA Background Shape" loading="lazy" className="w-full h-auto object-contain" />
                        </div>
                        <div className="absolute -bottom-24 -left-24 sm:-bottom-32 sm:-left-32 w-[250px] sm:w-[350px] md:w-[480px] pointer-events-none z-0 select-none opacity-30 mix-blend-multiply rotate-180">
                            <img src="/hero-bg.png" alt="CTA Background Shape" loading="lazy" className="w-full h-auto object-contain" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">Experience the Power of <span className="italic text-brand-primary">Support</span> with chatquartz</h2>
                            <Link href="/contactus" prefetch={false} className="group flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg font-semibold shadow-md hover:shadow-xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out cursor-pointer mt-4">
                                <span>Get Started</span>
                                <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5 ml-2.5">→</span>
                            </Link>
                        </div>
                    </div>
                </RevealOnScroll>
                {/* Section 4: Footer */}
                <RevealOnScroll>
                    <div className="w-full bg-gradient-to-t from-brand-secondary to-[#FFFFFF] mt-24">
                        <div className="max-w-[1440px] mx-auto">
                            <Footer />
                        </div>
                    </div>
                </RevealOnScroll>
            </SmoothScroll>
        </div>
    );
};

export default SupportPage;
