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
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-start justify-between gap-8 sm:gap-10 px-2 sm:px-4 md:px-6">

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
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2">
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-200/60 hover:shadow-md hover:scale-105 transition-all duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#1877F2">
                                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-200/60 hover:shadow-md hover:scale-105 transition-all duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.891-4.444 9.893-9.892.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                </svg>
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
                                            <Link href={href} prefetch={false} className="flex items-center gap-3 text-[15px] text-gray-600 font-medium hover:text-brand-primary transition-all duration-200 group">
                                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 group-hover:border-brand-primary/30 group-hover:bg-brand-primary/5 group-hover:shadow-md transition-all duration-300">
                                                    <Icon className="h-4 w-4 text-gray-400 group-hover:text-brand-primary transition-colors duration-200" />
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
                <div className="w-full max-w-7xl px-2 sm:px-4 md:px-6 pt-6 border-t border-gray-400/30 flex items-center justify-center sm:justify-between text-[11px] sm:text-xs md:text-sm text-gray-600 font-medium text-center sm:text-left">
                    <p>Copyright © 2024, chatquartz is a trademark of dataquartz. Please review Privacy Policy and Terms of Use.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer