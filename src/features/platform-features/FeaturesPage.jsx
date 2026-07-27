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
                    <div className="mt-28">
                        <p className="text-[20px] text-center text-black mb-2">
                            Unleash the Power of
                        </p>
                        <h1 className="text-[48px] text-[#2B64FD] font-bold leading-tight mb-6 text-center tracking-tight">
                            <span className="italic">AI-Driven </span> <span className="text-[48px] text-black font-bold">Chatbots</span>
                        </h1>

                        <div className="text-[14px] text-gray-600 max-w-3xl px-6 mx-auto text-center leading-relaxed">
                            <p>
                                Supercharge your customer interactions with state-of-the-art AI-powered chatbots built using OpenAI and Dialogflow. Designed for speed, precision, and automation, our chatbots deliver unparalleled user satisfaction within minutes of setup.
                            </p>
                        </div>
                    </div>
                </div>

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