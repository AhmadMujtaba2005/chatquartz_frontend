"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";

const SupportPage = () => {
    return (
        <div>
            <SmoothScroll>
                <div className="w-full min-h-[60vh] bg-gradient-to-b from-[#AAC8FD] to-[#FFFFFF] pb-20">
                    <Navbar />
                    <div className="mt-16 sm:mt-24">
                        <p className="text-[20px] text-center text-black mb-2 mt-[190px]">Support</p>
                        <h1 className="text-[48px] leading-tight mb-6 text-center tracking-tight">Elevate Your <span className="font-bold text-[#2B64FD] italic">Support </span>With Advanced Tools   </h1>
                        <div>
                            <p className="text-[14px] text-gray-600 max-w-3xl px-6 mx-auto text-center leading-relaxed mb-100">Live chat adds a personal touch, driving deeper engagement, more sales, and higher revenue.</p>
                        </div>
                    </div>
                </div>

                <RevealOnScroll>
                    <div className="max-w-[1200px] mx-auto w-[94%] mt-16 sm:mt-24 flex flex-col gap-6 md:gap-8 mb-20">
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 p-8 md:p-10 flex flex-col transition-all duration-300 hover:border-[#2B64FD]/40">
                                <h3 className="text-[22px] font-bold mb-3 text-gray-900">Unified Conversation Management</h3>
                                <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">Effortlessly manage customer queries in a single location with real-time features:</p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-[#2B64FD] mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600"><strong className="text-gray-900 font-semibold">Delete Messages:</strong> Edit or remove messages as needed.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#2B64FD] mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600"><strong className="text-gray-900 font-semibold">Conversation History:</strong> Search, download and organize past interactions.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#2B64FD] mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600"><strong className="text-gray-900 font-semibold">User Status:</strong> Monitor online and typing indicators.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 p-8 md:p-10 flex flex-col transition-all duration-300 hover:border-[#2B64FD]/40">
                                <h3 className="text-[22px] font-bold mb-3 text-gray-900">Knowledge Base Integration</h3>
                                <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">Build a centralized, multilingual repository for instant assistance:</p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-[#2B64FD] mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600">Host a dedicated help center or embed the widget in chat.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#2B64FD] mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600">Add searchable articles with categorized topics for easy navigation.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 p-8 md:p-10 flex flex-col transition-all duration-300 hover:border-[#2B64FD]/40">
                                <h3 className="text-[22px] font-bold mb-3 text-gray-900">Streamlined Messaging Tools</h3>
                                <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">Engage customers effectively with customizable communication features:</p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-[#2B64FD] mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600">Use 3000+ emojis, markdowns, and voice messages.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#2B64FD] mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600">Reuse messages and create rich templates.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 p-8 md:p-10 flex flex-col transition-all duration-300 hover:border-[#2B64FD]/40">
                                <h3 className="text-[22px] font-bold mb-3 text-gray-900">Efficient Organization</h3>
                                <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">Optimize workflows with specialized options:</p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-[#2B64FD] mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600">Assign departments and route messages efficiently.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#2B64FD] mr-3 mt-0.5 font-bold">•</span>
                                        <p className="text-[14px] text-gray-600">Stay updated with notifications via email, push, SMS or desktop alerts.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 p-8 flex items-center justify-center text-center transition-all duration-300 hover:border-[#2B64FD]/40 min-h-[140px]">
                                <h3 className="text-[18px] font-bold text-gray-900">Omni-Channel Connectivity</h3>
                            </div>
                            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 p-8 flex items-center justify-center text-center transition-all duration-300 hover:border-[#2B64FD]/40 min-h-[140px]">
                                <h3 className="text-[18px] font-bold text-gray-900">Smart Reply with DialogFlow</h3>
                            </div>
                            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 p-8 flex items-center justify-center text-center transition-all duration-300 hover:border-[#2B64FD]/40 min-h-[140px]">
                                <h3 className="text-[18px] font-bold text-gray-900">Multilingual Support</h3>
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 p-8 md:p-12 flex flex-col transition-all duration-300 hover:border-[#2B64FD]/40 text-center md:text-left">
                            <h3 className="text-[22px] font-bold mb-3 text-gray-900">Smart Agent Routing</h3>
                            <p className="text-[15px] text-gray-600 leading-relaxed max-w-4xl mx-auto md:mx-0">
                                Collect valuable insights through user reviews and internal agent notes for seamless collaboration. Offer uninterrupted support with custom offline banners and integrated ticketing systems. Optimize response times using real-time queue updates, equitable routing, or user-preferred agent selection. Elevate your customer support experience with features built for satisfaction and success.
                            </p>
                        </div>
                    </div>
                </RevealOnScroll>                <RevealOnScroll>
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

export default SupportPage;
