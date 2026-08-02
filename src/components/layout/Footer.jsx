import Link from "next/link";
import { HelpCircle, FileText, Mail, ShieldCheck, Tag, BarChart3, Settings, Star } from "lucide-react";

const footerGroups = [
  {
    title: "Company",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy", icon: ShieldCheck },
      { label: "Terms of Use", href: "/terms-of-use", icon: FileText },
      { label: "Why chatquartz?", href: "/features", icon: Star },
      { label: "Contact Us", href: "/contactus", icon: Mail },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features", icon: Settings },
      { label: "Marketing", href: "/marketing", icon: BarChart3 },
      { label: "Support", href: "/support", icon: HelpCircle },
      { label: "Pricing", href: "/pricing", icon: Tag },
    ],
  },
];

const Footer = () => {
    return (
        <>
            {/* Main Footer Container */}
            <footer className="w-full px-4 sm:px-6 py-10 sm:py-14 flex flex-col items-center gap-8 sm:gap-12">

                {/* Top Section: Brand Details & Navigation Columns */}
                <div className="w-full max-w-[1100px] flex flex-col md:flex-row items-start justify-between gap-8 sm:gap-10 px-2 sm:px-4 md:px-6">

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
                    <div className="flex flex-row sm:flex-row gap-12 md:gap-24">
                        {footerGroups.map((group) => (
                            <div key={group.title}>
                                <h3 className="text-[13px] font-extrabold text-gray-900 mb-6 tracking-[0.15em] uppercase">
                                    {group.title}
                                </h3>
                                <ul className="space-y-4">
                                    {group.links.map(({ label, href, icon: Icon }) => (
                                        <li key={label}>
                                            <Link href={href} className="flex items-center gap-3 text-[15px] text-gray-600 font-medium hover:text-[#2B64FD] transition-all duration-200 group">
                                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 group-hover:border-[#2B64FD]/30 group-hover:bg-[#2B64FD]/5 group-hover:shadow-md transition-all duration-300">
                                                    <Icon className="h-4 w-4 text-gray-400 group-hover:text-[#2B64FD] transition-colors duration-200" />
                                                </span>
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section: Copyright Notice */}
                <div className="w-full max-w-[1100px] px-2 sm:px-4 md:px-6 pt-6 border-t border-gray-400/30 flex items-center justify-center sm:justify-between text-[11px] sm:text-xs md:text-sm text-gray-600 font-medium text-center sm:text-left">
                    <p>Copyright © 2024, chatquartz is a trademark of dataquartz. Please review Privacy Policy and Terms of Use.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer