"use client";

import { SiWhatsapp, SiInstagram, SiMessenger, SiTelegram, SiWoocommerce, SiShopify, SiZendesk } from "react-icons/si";
import { FaSlack } from "react-icons/fa";

const IntegrationsMarquee = () => {
    const integrations = [
        { name: "WhatsApp", icon: <SiWhatsapp className="w-8 h-8" />, color: "text-[#25D366]" },
        { name: "Instagram", icon: <SiInstagram className="w-8 h-8" />, color: "text-[#E1306C]" },
        { name: "Messenger", icon: <SiMessenger className="w-8 h-8" />, color: "text-[#0084FF]" },
        { name: "Telegram", icon: <SiTelegram className="w-8 h-8" />, color: "text-[#229ED9]" },
        { name: "WooCommerce", icon: <SiWoocommerce className="w-8 h-8" />, color: "text-[#96588a]" },
        { name: "Shopify", icon: <SiShopify className="w-8 h-8" />, color: "text-[#7AB55C]" },
        { name: "Slack", icon: <FaSlack className="w-8 h-8" />, color: "text-[#4A154B]" },
        { name: "Zendesk", icon: <SiZendesk className="w-8 h-8" />, color: "text-[#03363D]" },
    ];

    // Double the array for seamless infinite scrolling
    const marqueeItems = [...integrations, ...integrations];

    return (
        <div className="w-full py-10 overflow-hidden bg-white/40 backdrop-blur-sm border-y border-gray-100">
            <p className="text-center text-[13px] font-semibold text-gray-400 tracking-wider uppercase mb-8">
                Integrates seamlessly with your favorite tools
            </p>
            <div className="relative w-full flex overflow-hidden group">
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
                
                <div className="flex w-max animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
                    {marqueeItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 px-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                            <div className={item.color}>{item.icon}</div>
                            <span className="text-[18px] font-bold text-gray-700">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
};

export default IntegrationsMarquee;
