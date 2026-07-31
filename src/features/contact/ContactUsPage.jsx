"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";

const ContactUsPage = () => {
    return (
        <div>
            <SmoothScroll>
                <div className="w-full bg-gradient-to-b from-[#AAC8FD] to-[#FFFFFF]">
                    <Navbar />
                    <div className="mt-16 sm:mt-24">
                        <p className="text-[20px] text-center text-black mb-2 mt-[190px]">Contact Us</p>
                        <h1 className="text-[48px] font-bold leading-tight mb-6 text-center tracking-tight">We’d Love to Hear from You!</h1>
                        <div>
                            <p className="text-[14px] text-gray-600 max-w-3xl px-6 mx-auto text-center leading-relaxed mb-100">Whether you have a question, need support, or just want to say hello, we’re here for you. Have a specific request? Use the form below, and we’ll get back to you as soon as possible.</p>
                        </div>
                    </div>
                </div>

                <RevealOnScroll>
                    <div className="mt-16 mb-24 max-w-[800px] mx-auto px-4 sm:px-6 w-full">
                        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 sm:p-10 border border-gray-100">
                            <form action="" method="post" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 ml-1">Name</label>
                                        <input type="text" id="name" name="name" required className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2B64FD]/20 focus:border-[#2B64FD] transition-all duration-200 outline-none text-gray-900" placeholder="Name" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="company" className="text-sm font-semibold text-gray-700 mb-2 ml-1">Company Name</label>
                                        <input type="text" id="company" name="company" required className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2B64FD]/20 focus:border-[#2B64FD] transition-all duration-200 outline-none text-gray-900" placeholder="Company Name" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="title" className="text-sm font-semibold text-gray-700 mb-2 ml-1">Title</label>
                                    <input type="text" id="title" name="title" required className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2B64FD]/20 focus:border-[#2B64FD] transition-all duration-200 outline-none text-gray-900" placeholder="Title" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col">
                                        <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 ml-1">Email</label>
                                        <input type="email" id="email" name="email" required className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2B64FD]/20 focus:border-[#2B64FD] transition-all duration-200 outline-none text-gray-900" placeholder="Email" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 ml-1">Phone Number</label>
                                        <input type="tel" id="phone" name="phone" required className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2B64FD]/20 focus:border-[#2B64FD] transition-all duration-200 outline-none text-gray-900" placeholder="+92 300-0000000" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2 ml-1">Message</label>
                                    <textarea id="message" name="message" required rows="5" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2B64FD]/20 focus:border-[#2B64FD] transition-all duration-200 outline-none text-gray-900 resize-y min-h-[120px]" placeholder="How can we help you?"></textarea>
                                </div>
                                <div className="pt-2">
                                    <button type="submit" className="w-full sm:w-auto px-10 py-4 bg-[#2B64FD] hover:bg-[#1E56F0] text-white font-semibold rounded-full shadow-md hover:shadow-xl hover:shadow-[#2B64FD]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center mx-auto">
                                        Send Message
                                    </button>
                                </div>
                            </form>
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

export default ContactUsPage;
