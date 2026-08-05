import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";
import PageBackground from "@/components/PageBackground";

const SupportPage = () => {
    return (
        <div>
            <SmoothScroll>
                <Navbar />
                {/* Section 1: Hero Section */}
                <div className="relative w-full bg-gradient-to-b from-brand-secondary to-[#FFFFFF] min-h-screen flex flex-col pt-[64px] sm:pt-[88px] md:pt-[112px] overflow-x-hidden">
                    <PageBackground variant="support" />
                    <div className="relative z-10 flex-grow flex flex-col items-center">
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-center text-gray-800 mb-3 mt-12 sm:mt-16 md:mt-24 lg:mt-48">Support</p>
                        <h1 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] mb-6 text-center tracking-tight text-gray-900">
                            Elevate Your <span className="font-bold text-brand-primary italic">Support</span> With Advanced Tools
                        </h1>
                        <div className="max-w-3xl mx-auto px-6">
                            <p className="text-[15px] sm:text-[16px] text-gray-600 text-center leading-relaxed">
                                Give your team the tools they need to resolve issues faster and deliver exceptional customer experiences.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2: Support Features */}
                <RevealOnScroll>
                    <div className="max-w-[1200px] mx-auto w-[94%] mt-16 sm:mt-24 md:mt-[120px] flex flex-col gap-6 md:gap-8 mb-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 p-8 md:p-10 flex flex-col transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <h3 className="relative z-10 text-[22px] font-bold mb-3 text-gray-900">Unified Conversation Management</h3>
                                <p className="relative z-10 text-[15px] text-gray-600 mb-6 leading-relaxed">Effortlessly manage customer queries in a single location with real-time features:</p>
                                <ul className="relative z-10 space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-brand-primary mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600"><strong className="text-gray-900 font-semibold">Delete Messages:</strong> Edit or remove messages as needed.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-primary mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600"><strong className="text-gray-900 font-semibold">Conversation History:</strong> Search, download and organize past interactions.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-primary mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600"><strong className="text-gray-900 font-semibold">User Status:</strong> Monitor online and typing indicators.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 p-8 md:p-10 flex flex-col transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <h3 className="relative z-10 text-[22px] font-bold mb-3 text-gray-900">Knowledge Base Integration</h3>
                                <p className="relative z-10 text-[15px] text-gray-600 mb-6 leading-relaxed">Build a centralized, multilingual repository for instant assistance:</p>
                                <ul className="relative z-10 space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-brand-primary mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600">Host a dedicated help center or embed the widget in chat.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-primary mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600">Add searchable articles with categorized topics for easy navigation.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 p-8 md:p-10 flex flex-col transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <h3 className="relative z-10 text-[22px] font-bold mb-3 text-gray-900">Streamlined Messaging Tools</h3>
                                <p className="relative z-10 text-[15px] text-gray-600 mb-6 leading-relaxed">Engage customers effectively with customizable communication features:</p>
                                <ul className="relative z-10 space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-brand-primary mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600">Use 3000+ emojis, markdowns, and voice messages.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-primary mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600">Reuse messages and create rich templates.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 p-8 md:p-10 flex flex-col transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <h3 className="relative z-10 text-[22px] font-bold mb-3 text-gray-900">Efficient Organization</h3>
                                <p className="relative z-10 text-[15px] text-gray-600 mb-6 leading-relaxed">Optimize workflows with specialized options:</p>
                                <ul className="relative z-10 space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-brand-primary mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600">Assign departments and route messages efficiently.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-primary mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600">Stay updated with notifications via email, push, SMS or desktop alerts.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 p-8 flex items-center justify-center text-center transition-all duration-500 hover:border-brand-primary/40 min-h-[140px] group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <h3 className="relative z-10 text-[18px] font-bold text-gray-900">Omni-Channel Connectivity</h3>
                            </div>
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 p-8 flex items-center justify-center text-center transition-all duration-500 hover:border-brand-primary/40 min-h-[140px] group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <h3 className="relative z-10 text-[18px] font-bold text-gray-900">Smart Reply with DialogFlow</h3>
                            </div>
                            <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 p-8 flex items-center justify-center text-center transition-all duration-500 hover:border-brand-primary/40 min-h-[140px] group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <h3 className="relative z-10 text-[18px] font-bold text-gray-900">Multilingual Support</h3>
                            </div>
                        </div>

                        <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] border border-brand-secondary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 p-8 md:p-12 flex flex-col transition-all duration-500 hover:border-brand-primary/40 text-center md:text-left group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <h3 className="relative z-10 text-[22px] font-bold mb-3 text-gray-900">Smart Agent Routing</h3>
                            <p className="relative z-10 text-[15px] text-gray-600 leading-relaxed max-w-4xl mx-auto md:mx-0">
                                Collect valuable insights through user reviews and internal agent notes for seamless collaboration. Offer uninterrupted support with custom offline banners and integrated ticketing systems. Optimize response times using real-time queue updates, equitable routing, or user-preferred agent selection. Elevate your customer support experience with features built for satisfaction and success.
                            </p>
                        </div>
                    </div>
                </RevealOnScroll>                {/* Section 3: Footer */}
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
