"use client";

import { useState } from "react";

const faqData = [
    {
        question: "What is chatquartz, and how does it work?",
        answer: "chatquartz is an AI-powered chat system that integrates with multiple platforms to provide automated, intelligent customer support and communication solutions.",
    },
    {
        question: "Does chatquartz require coding knowledge to set up?",
        answer: "No, chatquartz is designed for easy setup without the need for coding expertise, making it accessible to all users.",
    },
    {
        question: "What platforms does chatquartz integrate with?",
        answer: "chatquartz integrates with platforms like Mailchimp, HubSpot, WooCommerce, social media channels, and popular email marketing tools.",
    },
    {
        question: "Can chatquartz handle multiple languages?",
        answer: "Yes, chatquartz supports automatic translation in 19 languages, making it suitable for global audiences.",
    },
    {
        question: "How secure is chatquartz?",
        answer: "chatquartz prioritizes privacy and data security, with features like compliance with visitor privacy policies and encrypted data handling.",
    },
    {
        question: "Is there a limit to the number of queries chatquartz can handle?",
        answer: "No, chatquartz is designed to scale effortlessly and can handle unlimited customer queries simultaneously.",
    },
    {
        question: "Can I customize the chat widget to match my brand?",
        answer: "Yes, chatquartz allows you to fully customize chatbox designs and widgets to align with your brand identity.",
    },
    {
        question: "Does chatquartz offer analytics for customer interactions?",
        answer: "Yes, chatquartz includes tools to monitor and analyze user interactions, helping you refine responses and improve customer engagement.",
    },
    {
        question: "What kind of support does chatquartz provide for setup and troubleshooting?",
        answer: "chatquartz offers comprehensive documentation, tutorials, and dedicated support to assist with setup and any troubleshooting needs.",
    },
    {
        question: "Is chatquartz a one-time purchase or a subscription-based service?",
        answer: "chatquartz offers flexible pricing options, including one-time purchases for lifetime access without recurring monthly fees.",
    },
];

const HomePageFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const midPoint = Math.ceil(faqData.length / 2);
    const leftColumn = faqData.slice(0, midPoint);
    const rightColumn = faqData.slice(midPoint);

    const renderFAQCard = (item, actualIndex) => {
        const isOpen = openIndex === actualIndex;
        return (
            <div
                key={actualIndex}
                className={`bg-white border transition-all duration-200 rounded-xl overflow-hidden hover:shadow-md ${isOpen ? "border-brand-primary ring-1 ring-brand-primary/20 shadow-md" : "border-gray-200/80 shadow-sm"}`}
            >
                <button
                    onClick={() => toggleFAQ(actualIndex)}
                    className="w-full flex items-center justify-between px-5 py-4 sm:px-6 text-left transition-all duration-200 group focus:outline-none cursor-pointer"
                >
                    <span className="text-base sm:text-[14px] font-bold leading-snug pr-4">
                        {item.question}
                    </span>
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold transition-all duration-200 select-none ${isOpen ? "bg-brand-primary text-white" : "bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white"}`}>
                        {isOpen ? "−" : "+"}
                    </span>
                </button>

                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-60 opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="px-5 py-4 sm:px-6 text-sm sm:text-[13px] leading-relaxed text-gray-600 bg-[#F6F9FE]/70">
                        {item.answer}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="w-[95%] max-w-[1200px] mx-auto mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
                <div className="space-y-4">
                    {leftColumn.map((item, index) => renderFAQCard(item, index))}
                </div>
                <div className="space-y-4">
                    {rightColumn.map((item, index) => renderFAQCard(item, index + midPoint))}
                </div>
            </div>
        </div>
    );
};

export default HomePageFAQ;
