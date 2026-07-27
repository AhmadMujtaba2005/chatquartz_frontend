import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";

const FeaturesPage = () => {
    return (
        <div>
            <SmoothScroll>
                {/* Hero Section & Navigation */}
                <div className="w-full min-h-[60vh] bg-gradient-to-b from-[#AAC8FD] to-[#FFFFFF] pb-20">
                    <Navbar />
                    <div className="mt-16 sm:mt-24">
                        <p className="text-[20px] text-center text-black mb-2 mt-[190px]">
                            Unleash the Power of
                        </p>
                        <h1 className="text-[48px] text-[#2B64FD] font-bold leading-tight mb-6 text-center tracking-tight">
                            <span className="italic">AI-Driven </span> <span className="text-[48px] text-black font-bold">Chatbots</span>
                        </h1>

                        <div className="text-[14px] text-gray-600 max-w-3xl px-6 mx-auto text-center leading-relaxed mb-40">
                            <p>
                                Supercharge your customer interactions with state-of-the-art AI-powered chatbots built using OpenAI and Dialogflow. Designed for speed, precision, and automation, our chatbots deliver unparalleled user satisfaction within minutes of setup.
                            </p>
                        </div>
                    </div>
                </div>
                <RevealOnScroll>
                    <div className="mt-[120px]">
                        <h1 className="text-[40px] leading-tight mb-8 text-center tracking-tight px-6">Transforming Customer Experiences with chatquartz</h1>
                        <img src="/featurepagemobile.png" alt="featurepagemobile" className="w-[280px] sm:w-[320px] h-auto mx-auto block mt-8 mb-20 object-contain drop-shadow-lg" />
                    </div>
                </RevealOnScroll>

                <RevealOnScroll>
                    <div className="flex flex-col items-center justify-center mx-auto max-w-[900px] w-[92%] mt-[120px] px-6 py-12 sm:p-14 border border-gray-200/80 rounded-3xl bg-white shadow-sm hover:shadow transition-all duration-300">
                        <h1 className="text-[40px] leading-tight text-black mb-4 text-center tracking-tight">Why Choose <span className="font-bold text-[#2B64FD] italic">chatquartz</span>!</h1>
                        <p className="text-[14px] text-gray-600 max-w-3xl px-4 text-center leading-relaxed mb-8">Experience AI you can trust, powered by industry leaders like OpenAI and Google’s Dialogflow. chatquartz delivers smart, flexible, and scalable conversations to elevate your customer service and marketing. Ready to simplify interactions & transform your business?</p>
                        <button className="w-[150px] h-[45px] bg-[#2B64FD] border border-[#2B64FD] hover:bg-white hover:text-black rounded-xl flex items-center justify-center text-white font-semibold shadow-sm hover:shadow transition-all duration-200 cursor-pointer">Start for free</button>
                    </div>
                </RevealOnScroll>

                {/* Footer Section with Matching Gradient */}
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