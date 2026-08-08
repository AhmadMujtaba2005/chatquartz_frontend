"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import RevealOnScroll from "@/components/scroll/RevealOnScroll";

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        title: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        const textRegex = /^[a-zA-Z\s]+$/;
        const phoneRegex = /^[\d\s\-\+\(\)]*$/;
        const emailRegex = /\S+@\S+\.\S+/;

        if (!formData.name) newErrors.name = 'Required';
        else if (!textRegex.test(formData.name)) newErrors.name = 'Alphabets only';

        if (!formData.company) newErrors.company = 'Required';
        else if (!textRegex.test(formData.company)) newErrors.company = 'Alphabets only';

        if (!formData.title) newErrors.title = 'Required';
        else if (!textRegex.test(formData.title)) newErrors.title = 'Alphabets only';

        if (!formData.email) newErrors.email = 'Required';
        else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email';

        if (formData.phone && !phoneRegex.test(formData.phone)) newErrors.phone = 'Numbers only';

        if (!formData.message) newErrors.message = 'Required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        console.log("Form submitted", formData);
        setFormData({ name: '', company: '', title: '', email: '', phone: '', message: '' });
    };

    const getInputClass = (fieldName) => {
        const baseClass = "w-full px-5 py-3.5 bg-white/80 border rounded-xl focus:bg-white focus:ring-2 transition-all duration-200 outline-none text-gray-900 placeholder:text-gray-400";
        if (errors[fieldName]) {
            return `${baseClass} border-red-500 focus:border-red-500 focus:ring-red-500/20`;
        }
        return `${baseClass} border-gray-200 focus:border-brand-primary focus:ring-brand-primary/20`;
    };

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
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-medium text-sm mb-8 w-fit shadow-sm">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                                Contact chatquartz
                            </div>
                            
                            <h1 className="text-[52px] sm:text-[64px] lg:text-[76px] leading-[1.05] font-extrabold tracking-tighter text-white mb-6 flex flex-col">
                                <span>Let's elevate</span>
                                <span>your customer</span>
                                <span className="italic text-brand-primary">experience.</span>
                            </h1>
                            
                            <p className="text-[16px] sm:text-[18px] text-purple-200 leading-relaxed mb-12">
                                Have a question about deploying intelligent AI agents or customising chatflows for your business? We're here to help you transform your customer support.
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
                                <div className="relative bg-white/60 backdrop-blur-md rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.15)] p-8 sm:p-10 border border-brand-secondary/50 transition-all duration-500 hover:border-brand-primary/40 group overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                    
                                    <form onSubmit={handleSubmit} noValidate className="relative z-10 space-y-5">
                                        {/* Full Name & Company */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="flex flex-col">
                                                <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-1.5 ml-1">Full Name</label>
                                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={getInputClass('name')} placeholder="John Doe" />
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="company" className="text-sm font-semibold text-gray-700 mb-1.5 ml-1">Company</label>
                                                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={getInputClass('company')} placeholder="Company Inc." />
                                            </div>
                                        </div>

                                        {/* Title & Email */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="flex flex-col">
                                                <label htmlFor="title" className="text-sm font-semibold text-gray-700 mb-1.5 ml-1">Title</label>
                                                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className={getInputClass('title')} placeholder="Product Manager" />
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-1.5 ml-1">Work Email</label>
                                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={getInputClass('email')} placeholder="john@company.com" />
                                            </div>
                                        </div>

                                        {/* Phone Number */}
                                        <div className="flex flex-col">
                                            <label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-1.5 ml-1 flex justify-between items-center">
                                                Phone Number <span className="text-xs font-normal text-gray-400">Optional</span>
                                            </label>
                                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={getInputClass('phone')} placeholder="+1 (972) 729-9747" />
                                        </div>

                                        {/* Message Textarea */}
                                        <div className="flex flex-col">
                                            <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-1.5 ml-1">Message</label>
                                            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className={`${getInputClass('message')} resize-y min-h-[100px]`} placeholder="How can we help you?"></textarea>
                                        </div>
                                        
                                        <div className="pt-2">
                                            <button type="submit" className="w-full sm:w-auto px-8 py-3.5 bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold rounded-full shadow-md hover:shadow-xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                                                Send Request
                                            </button>
                                        </div>
                                        <p className="text-[12px] font-medium tracking-wide text-gray-500 uppercase pt-2 ml-1">WE RESPOND WITHIN ONE BUSINESS DAY</p>
                                    </form>
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

export default ContactUsPage;
