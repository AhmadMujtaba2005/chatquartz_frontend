import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";

const NotFound = () => {
    return (
        <div>
            <SmoothScroll>
                <Navbar />
                <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-brand-secondary to-[#FFFFFF] pt-[112px] px-6 text-center">
                    <h1 className="text-8xl sm:text-9xl font-bold text-brand-primary mb-4">404</h1>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">Page not found</h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
                        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
                    </p>
                    <Link 
                        href="/"
                        className="px-8 py-3.5 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Return to Home
                    </Link>
                </div>
                <div className="w-full bg-[#FFFFFF]">
                    <div className="max-w-[1440px] mx-auto">
                        <Footer />
                    </div>
                </div>
            </SmoothScroll>
        </div>
    );
};

export default NotFound;
