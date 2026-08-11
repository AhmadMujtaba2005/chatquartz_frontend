import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";
import LeadForm from "@/components/forms/LeadForm";

const formCardClass =
    "relative bg-white/60 backdrop-blur-md rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.15)] p-8 sm:p-10 border border-brand-secondary/50 transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden";

const panelGlowClass =
    "absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none";

const pillBadgeClass =
    "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-medium text-sm shadow-sm";

function PillBadge({ children, className = "" }) {
    return <span className={`${pillBadgeClass} ${className}`.trim()}>{children}</span>;
}

const DemoPage = () => {
    return (
        <div>
            <SmoothScroll>
                <Navbar />
                {/* Main Content Area */}
                <div className="relative w-full bg-gradient-to-b from-[#0F0A1F] via-[#1E0B4A] to-[#5B21B6] min-h-screen pt-[120px] sm:pt-[140px] pb-[80px] overflow-x-hidden">
                    <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                        {/* Left Column */}
                        <div className="w-full lg:w-[45%] flex flex-col justify-start">
                            <RevealOnScroll>
                            <PillBadge className="mb-8 w-fit">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Book a Demo
                            </PillBadge>
                            
                            <h1 className="text-[52px] sm:text-[64px] lg:text-[76px] leading-[1.05] font-extrabold tracking-tighter text-white mb-6 flex flex-col">
                                <span>Experience</span>
                                <span>the power of</span>
                                <span className="italic text-brand-primary">chatquartz.</span>
                            </h1>
                            
                            <p className="text-[16px] sm:text-[18px] text-purple-200 leading-relaxed mb-12">
                                Discover how our intelligent automation and multi-channel deployment can seamlessly integrate into your business. See exactly how our agents handle inquiries 24/7.
                            </p>

                            <div className="flex flex-col w-full max-w-[440px]">
                                {/* Phone Row */}
                                <div className="flex items-center justify-between py-6 group border-t border-white/20">
                                    <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-purple-300 uppercase group-hover:text-brand-primary transition-colors">Phone</span>
                                    <a href="tel:+19727299747" className="text-[15px] sm:text-[16px] font-medium text-white group-hover:text-brand-primary transition-colors">
                                        +1 (972) 729-9747
                                    </a>
                                </div>

                                {/* Email Row */}
                                <div className="flex items-center justify-between py-6 group border-t border-b border-white/20">
                                    <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-purple-300 uppercase group-hover:text-brand-primary transition-colors">Email</span>
                                    <a href="mailto:sales@dataquartz.com" className="text-[15px] sm:text-[16px] font-medium text-white group-hover:text-brand-primary transition-colors">
                                        sales@dataquartz.com
                                    </a>
                                </div>
                            </div>
                            </RevealOnScroll>
                        </div>

                        {/* Right Column (Form Card) */}
                        <div className="w-full lg:w-[55%] relative">
                            <RevealOnScroll>
                                <div className={formCardClass}>
                                    <div className={panelGlowClass}></div>
                                    
                                    <LeadForm />
                                </div>
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>

                {/* Section 3: Footer */}
                <div className="w-full bg-gradient-to-t from-[#0F0A1F] via-[#1E0B4A] to-[#5B21B6]">
                    <div className="max-w-[1440px] mx-auto">
                        <Footer />
                    </div>
                </div>
            </SmoothScroll>
        </div>
    );
};

export default DemoPage;
