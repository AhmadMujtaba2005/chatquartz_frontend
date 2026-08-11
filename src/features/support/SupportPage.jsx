import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";
import PageBackground from "@/components/PageBackground";
import GlobalCTA from "@/components/ui/GlobalCTA";
import { Feature1Mockup, Feature2Mockup, Feature3Mockup, Feature4Mockup } from "@/components/mockups/SupportMockups";

const SupportPage = () => {
    return (
        <div>
            <SmoothScroll>
                <Navbar />
                {/* Section 1: Hero Section */}
                <div className="relative w-full bg-gradient-to-b from-[#0F0A1F] via-[#1E0B4A] to-[#5B21B6] min-h-screen flex flex-col justify-center items-center pt-[64px] sm:pt-[88px] md:pt-[112px] pb-[64px] sm:pb-[88px] md:pb-[112px] overflow-x-hidden">
                    <PageBackground variant="support" />
                    <RevealOnScroll className="relative z-10 flex flex-col items-center w-full px-4">
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-center text-purple-200 mb-3">Support</p>
                        <h1 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] mb-6 text-center tracking-tight text-white">
                            Elevate Your <span className="font-bold text-brand-primary italic">Support</span> With Advanced Tools
                        </h1>
                        <div className="max-w-3xl mx-auto px-6">
                            <p className="text-[15px] sm:text-[16px] text-purple-200 text-center leading-relaxed">
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
                                <h2 className="text-[20px] sm:text-[24px] font-bold tracking-tight text-gray-900 leading-tight mb-3">Manage Every Conversation in One Place</h2>
                                <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">Bring customer conversations together across channels, with searchable history, real-time status, and complete conversation context.</p>
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
                                <h2 className="text-[20px] sm:text-[24px] font-bold tracking-tight text-gray-900 leading-tight mb-3">Give Customers Instant Answers</h2>
                                <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">Connect your knowledge base to help customers find accurate answers without waiting for an agent.</p>
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
                                <h2 className="text-[20px] sm:text-[24px] font-bold tracking-tight text-gray-900 leading-tight mb-3">Reply Faster With Powerful Messaging Tools</h2>
                                <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">Templates, emojis, attachments, and reusable responses help your team resolve conversations faster.</p>
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
                                <h2 className="text-[20px] sm:text-[24px] font-bold tracking-tight text-gray-900 leading-tight mb-3">Keep Your Support Team Organized</h2>
                                <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">Easily manage your agents, assign roles, and monitor team activity to keep your support operations running smoothly.</p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.15)] hover:-translate-y-2 p-8 md:p-12 transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden flex flex-col items-center gap-8 md:gap-12 w-full mb-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="text-center relative z-10 w-full max-w-3xl mx-auto">
                                <h3 className="text-[22px] sm:text-[28px] font-bold mb-4 text-gray-900">Route Every Conversation to the Right Agent</h3>
                                <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                                    Automatically assign conversations based on skills, availability, language, and customer needs — so every issue reaches the right person faster.
                                </p>
                            </div>

                            <div className="relative w-full max-w-[800px] mx-auto py-8">
                                {/* Desktop Connecting Line */}
                                <div className="hidden md:block absolute top-[60px] left-8 right-8 h-[2px] bg-gradient-to-r from-brand-primary/20 via-brand-primary/40 to-brand-primary/20 -translate-y-1/2 z-0"></div>
                                {/* Mobile Connecting Line */}
                                <div className="block md:hidden absolute left-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-brand-primary/20 via-brand-primary/40 to-brand-primary/20 -translate-x-1/2 z-0"></div>

                                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0">

                                    {/* Node 1 */}
                                    <div className="flex flex-col items-center gap-3 group/node w-24">
                                        <div className="w-14 h-14 rounded-2xl bg-white border-2 border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center justify-center text-gray-500 group-hover/node:border-brand-primary/50 group-hover/node:text-brand-primary group-hover/node:shadow-[0_8px_20px_rgba(124,58,237,0.15)] transition-all duration-300 transform group-hover/node:-translate-y-1">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                        </div>
                                        <span className="text-[12px] font-bold text-gray-700 text-center">Incoming</span>
                                    </div>

                                    {/* Node 2 */}
                                    <div className="flex flex-col items-center gap-3 group/node w-24">
                                        <div className="w-14 h-14 rounded-2xl bg-white border-2 border-brand-primary/20 shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center justify-center text-brand-primary group-hover/node:border-brand-primary group-hover/node:text-brand-primary group-hover/node:shadow-[0_8px_20px_rgba(124,58,237,0.2)] transition-all duration-300 transform group-hover/node:-translate-y-1">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                        </div>
                                        <span className="text-[12px] font-bold text-gray-700 text-center">AI Match</span>
                                    </div>

                                    {/* Node 3 */}
                                    <div className="flex flex-col items-center gap-3 group/node w-24">
                                        <div className="w-14 h-14 rounded-2xl bg-white border-2 border-brand-primary/30 shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center justify-center text-brand-primary group-hover/node:border-brand-primary group-hover/node:text-brand-primary group-hover/node:shadow-[0_8px_20px_rgba(124,58,237,0.2)] transition-all duration-300 transform group-hover/node:-translate-y-1">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                                        </div>
                                        <span className="text-[12px] font-bold text-gray-700 text-center leading-tight">Human<br />Takeover</span>
                                    </div>

                                    {/* Node 4 */}
                                    <div className="flex flex-col items-center gap-3 group/node w-24">
                                        <div className="w-14 h-14 rounded-2xl bg-white border-2 border-brand-primary/40 shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center justify-center text-brand-primary group-hover/node:border-brand-primary group-hover/node:text-brand-primary group-hover/node:shadow-[0_8px_20px_rgba(124,58,237,0.2)] transition-all duration-300 transform group-hover/node:-translate-y-1">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                        </div>
                                        <span className="text-[12px] font-bold text-gray-700 text-center leading-tight">Agent<br />Assigned</span>
                                    </div>

                                    {/* Node 5 */}
                                    <div className="flex flex-col items-center gap-3 group/node w-24">
                                        <div className="w-14 h-14 rounded-2xl bg-brand-primary border-2 border-brand-primary shadow-[0_4px_12px_rgba(124,58,237,0.3)] flex items-center justify-center text-white group-hover/node:shadow-[0_8px_20px_rgba(124,58,237,0.4)] transition-all duration-300 transform group-hover/node:-translate-y-1">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-[12px] font-bold text-gray-900 text-center">Resolution</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <RevealOnScroll>
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.15)] hover:-translate-y-2 p-6 flex flex-col items-center text-center transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="w-full h-36 bg-[#FAF5FF] rounded-xl mb-5 flex items-center justify-center overflow-hidden">
                                    <div className="flex items-center justify-center gap-2 sm:gap-3">

                                        {/* Messenger */}
                                        <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer flex-shrink-0 p-[7px] sm:p-2">
                                            <Image src="/icons/messenger.svg" alt="Messenger" width={28} height={28} className="w-full h-full object-contain" />
                                        </div>

                                        {/* WhatsApp */}
                                        <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer flex-shrink-0 p-1.5 sm:p-[7px]">
                                            <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={28} height={28} className="w-full h-full object-contain" />
                                        </div>

                                        {/* Chat Bubbles */}
                                        <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer flex-shrink-0 p-[5px] sm:p-1.5">
                                            <Image src="/icons/chat.svg" alt="Chat" width={28} height={28} className="w-full h-full object-contain" />
                                        </div>

                                        {/* Gmail */}
                                        <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer flex-shrink-0 p-2 sm:p-2.5">
                                            <Image src="/icons/gmail.svg" alt="Gmail" width={28} height={28} className="w-full h-full object-contain" />
                                        </div>

                                        {/* Slack */}
                                        <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer flex-shrink-0 p-2 sm:p-2.5">
                                            <Image src="/icons/slack.svg" alt="Slack" width={28} height={28} className="w-full h-full object-contain" />
                                        </div>

                                    </div>
                                </div>
                                <h3 className="relative z-10 text-[18px] font-bold text-gray-900 mt-auto mb-2">Omni-Channel Connectivity</h3>
                                <p className="relative z-10 text-[14px] text-gray-600 leading-relaxed text-center">Manage conversations from every major channel in one workspace.</p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.15)] hover:-translate-y-2 p-6 flex flex-col items-center text-center transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="w-full h-36 bg-[#FAF5FF] rounded-xl mb-5 flex items-center justify-center overflow-hidden">
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
                                <h3 className="relative z-10 text-[18px] font-bold text-gray-900 mt-auto mb-2">Smart Reply with DialogFlow</h3>
                                <p className="relative z-10 text-[14px] text-gray-600 leading-relaxed text-center">Help agents respond faster with AI-powered suggested responses.</p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.15)] hover:-translate-y-2 p-6 flex flex-col items-center text-center transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="w-full h-36 bg-[#FAF5FF] rounded-xl mb-5 flex items-center justify-center overflow-hidden px-4">
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
                                            <span className="text-[10px] font-bold text-[#7C3AED]">こんにちは</span>
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
                                <h3 className="relative z-10 text-[18px] font-bold text-gray-900 mt-auto mb-2">Multilingual Support</h3>
                                <p className="relative z-10 text-[14px] text-gray-600 leading-relaxed text-center">Support customers across languages without expanding your team.</p>
                            </div>
                        </RevealOnScroll>
                    </div>


                </div>
                {/* Section 3: CTA Section */}
                <GlobalCTA
                    title={<>Experience the Power of <span className="italic text-brand-primary">Support</span> with chatquartz</>}
                    buttonText="Get Started"
                    buttonLink="/contactus"
                    containerClassName="mt-16 sm:mt-24 md:mt-[120px] mb-20 px-5 py-12 sm:p-16"
                    bgImageClassName="w-[250px] sm:w-[350px] md:w-[480px]"
                    description={null}
                    bottomText={null}
                />
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

export default SupportPage;
