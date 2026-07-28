import Link from "next/link";

const Footer = () => {
    return (
        <>
            {/* Main Footer Container */}
            <footer className="w-full px-6 py-14 flex flex-col items-center gap-12">

                {/* Top Section: Brand Details & Navigation Columns */}
                <div className="w-full max-w-[1100px] flex flex-col md:flex-row items-start justify-between gap-10 px-4 sm:px-6">

                    {/* Brand Branding & Contact Info Column */}
                    <div className="space-y-3 max-w-xs">
                        <h2 className="text-[20px] font-extrabold tracking-tight text-gray-900">
                            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                                <img src="/logo.svg" alt="Logo" className="h-9 w-auto brightness-0 block" />
                                <span>chatquartz</span>
                            </Link>
                        </h2>
                        <div className="text-sm text-gray-700 space-y-1 font-medium leading-relaxed">
                            <p>+1 (972) 729-9747</p>
                            <p>sales@dataquartz.com</p>
                        </div>
                        <div className="flex items-center gap-3.5 pt-1">
                            <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-200/60 hover:shadow-md hover:scale-105 transition-all duration-200">
                                <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8 object-contain block" />
                            </a>
                            <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-200/60 hover:shadow-md hover:scale-105 transition-all duration-200">
                                <img src="/facebook.svg" alt="Facebook" className="w-8 h-8 object-contain block" />
                            </a>
                            <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-200/60 hover:shadow-md hover:scale-105 transition-all duration-200">
                                <img src="/whatsapp.svg" alt="WhatsApp" className="w-8 h-8 object-contain block" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links (Company & Product Columns) */}
                    <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">

                        {/* Company Column */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wider uppercase">Company</h3>
                            <ul className="space-y-2.5 text-sm text-gray-700 font-medium">
                                <li><Link href="/privacy-policy" className="hover:text-[#2B64FD] transition-colors duration-200">Privacy Policy</Link></li>
                                <li><Link href="#" className="hover:text-[#2B64FD] transition-colors duration-200">Terms of Use</Link></li>
                                <li><Link href="#" className="hover:text-[#2B64FD] transition-colors duration-200">Why chatquartz?</Link></li>
                                <li><Link href="#" className="hover:text-[#2B64FD] transition-colors duration-200">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Product Column */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wider uppercase">Product</h3>
                            <ul className="space-y-2.5 text-sm text-gray-700 font-medium">
                                <li><Link href="/features" className="hover:text-[#2B64FD] transition-colors duration-200">Features</Link></li>
                                <li><Link href="#" className="hover:text-[#2B64FD] transition-colors duration-200">Marketing</Link></li>
                                <li><Link href="#" className="hover:text-[#2B64FD] transition-colors duration-200">Support</Link></li>
                                <li><Link href="#" className="hover:text-[#2B64FD] transition-colors duration-200">Pricing</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright Notice */}
                <div className="w-full max-w-[1100px] px-4 sm:px-6 pt-6 border-t border-gray-400/30 flex items-center justify-center sm:justify-between text-xs sm:text-sm text-gray-600 font-medium text-center sm:text-left">
                    <p>Copyright © 2024, chatquartz is a trademark of dataquartz. Please review Privacy Policy and Terms of Use.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer