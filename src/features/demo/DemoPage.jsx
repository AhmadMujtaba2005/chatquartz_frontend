import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";

const DemoPage = () => {
    return (
        <div>
            <SmoothScroll>
                <Navbar />
                {/* Section 1: Hero Section */}
                <div className="relative w-full bg-gradient-to-b from-brand-secondary to-[#FFFFFF] pb-12 sm:pb-20 pt-[64px] sm:pt-[88px] md:pt-[112px] overflow-x-hidden">
                    <div className="relative z-10">
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-center text-gray-800 mb-3 mt-10 sm:mt-16 md:mt-24 lg:mt-45">
                            Demo
                        </p>
                        <h1 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] mb-6 text-center tracking-tight text-gray-900">
                            Experience <span className="italic text-brand-primary font-bold">chatquartz</span> in Action
                        </h1>
                        <div className="max-w-3xl mx-auto px-6">
                            <p className="text-[15px] sm:text-[16px] text-gray-600 text-center leading-relaxed">
                                Contact us to explore powerful features and experience seamless customer interactions—quick, easy, and hassle-free.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2: Demo Form */}
                <RevealOnScroll>
                    <div className="mt-16 sm:mt-24 md:mt-[120px] mb-20 max-w-[800px] mx-auto px-4 sm:px-6 w-full">
                        <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(43,100,253,0.15)] hover:-translate-y-2 p-6 sm:p-10 border border-brand-secondary/50 transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <form action="" method="post" className="relative z-10 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 ml-1">Name</label>
                                        <input type="text" id="name" name="name" required className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-200 outline-none text-gray-900" placeholder="Name" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="company" className="text-sm font-semibold text-gray-700 mb-2 ml-1">Company Name</label>
                                        <input type="text" id="company" name="company" required className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-200 outline-none text-gray-900" placeholder="Company Name" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="title" className="text-sm font-semibold text-gray-700 mb-2 ml-1">Title</label>
                                    <input type="text" id="title" name="title" required className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-200 outline-none text-gray-900" placeholder="Title" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col">
                                        <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 ml-1">Email</label>
                                        <input type="email" id="email" name="email" required className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-200 outline-none text-gray-900" placeholder="Email" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 ml-1">Phone Number</label>
                                        <input type="tel" id="phone" name="phone" required className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-200 outline-none text-gray-900" placeholder="+92 300-0000000" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2 ml-1">Message</label>
                                    <textarea id="message" name="message" required rows="5" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-200 outline-none text-gray-900 resize-y min-h-[120px]" placeholder="How can we help you?"></textarea>
                                </div>
                                <div className="pt-2">
                                    <button type="submit" className="w-full sm:w-auto px-10 py-4 bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold rounded-full shadow-md hover:shadow-xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center mx-auto">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Section 3: Footer */}
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

export default DemoPage;
