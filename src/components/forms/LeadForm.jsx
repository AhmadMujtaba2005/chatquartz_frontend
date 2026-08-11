"use client";

import { getInputClassName, useContactForm } from "@/hooks/useContactForm";

export default function LeadForm({ 
    primaryButtonClass = "inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold shadow-md hover:shadow-xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out" 
}) {
    const {
        formData,
        errors,
        isSubmitting,
        submitSuccess,
        submitError,
        handleChange,
        handleSubmit,
        resetSuccess,
    } = useContactForm();

    if (submitSuccess) {
        return (
            <div className="relative z-10 flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                <p className="text-gray-600 mb-8 max-w-sm">
                    Thank you for reaching out. We have received your message and will respond within one business day.
                </p>
                <button 
                    onClick={resetSuccess}
                    className="px-6 py-2.5 bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 font-semibold rounded-full transition-colors"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="relative z-10 space-y-5">
            {submitError && (
                <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-medium">
                    {submitError}
                </div>
            )}

            {/* Honeypot Field */}
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" value={formData._honey} onChange={handleChange} />

            {/* Full Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-1.5 ml-1">Full Name</label>
                    <input type="text" id="name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} className={getInputClassName(errors, 'name')} placeholder="John Doe" disabled={isSubmitting} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="company" className="text-sm font-semibold text-gray-700 mb-1.5 ml-1">Company</label>
                    <input type="text" id="company" name="company" autoComplete="organization" value={formData.company} onChange={handleChange} className={getInputClassName(errors, 'company')} placeholder="Company Inc." disabled={isSubmitting} />
                </div>
            </div>

            {/* Title & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-sm font-semibold text-gray-700 mb-1.5 ml-1">Title</label>
                    <input type="text" id="title" name="title" autoComplete="organization-title" value={formData.title} onChange={handleChange} className={getInputClassName(errors, 'title')} placeholder="Product Manager" disabled={isSubmitting} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-1.5 ml-1">Work Email</label>
                    <input type="email" id="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} className={getInputClassName(errors, 'email')} placeholder="john@company.com" disabled={isSubmitting} />
                </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-1.5 ml-1 flex justify-between items-center">
                    Phone Number <span className="text-xs font-normal text-gray-400">Optional</span>
                </label>
                <input type="tel" id="phone" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} className={getInputClassName(errors, 'phone')} placeholder="+1 (972) 729-9747" disabled={isSubmitting} />
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-1.5 ml-1">Message</label>
                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className={`${getInputClassName(errors, 'message')} resize-y min-h-[100px]`} placeholder="How can we help you?" disabled={isSubmitting}></textarea>
            </div>
            
            <div className="pt-2">
                <button type="submit" disabled={isSubmitting} className={`${primaryButtonClass} w-full sm:w-auto px-8 py-3.5 disabled:bg-brand-primary/50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}>
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </>
                    ) : (
                        "Send Request"
                    )}
                </button>
            </div>
            <p className="text-[12px] font-medium tracking-wide text-gray-500 uppercase pt-2 ml-1">WE RESPOND WITHIN ONE BUSINESS DAY</p>
        </form>
    );
}
