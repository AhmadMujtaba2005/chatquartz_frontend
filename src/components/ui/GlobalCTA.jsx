import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RevealOnScroll from '@/components/scroll/RevealOnScroll';

const GlobalCTA = ({ 
    title, 
    description, 
    buttonText = "Start for free", 
    buttonLink = "/demo", 
    bottomText = "No credit card required",
    containerClassName = "mt-16 sm:mt-24 md:mt-[120px] mb-20 px-6 py-10 sm:py-12 sm:px-16",
    bgImageClassName = "w-[350px] sm:w-[460px]"
}) => {
    return (
        <RevealOnScroll>
            <div className={`relative overflow-hidden flex flex-col items-center justify-center mx-auto max-w-[1100px] w-[92%] border border-brand-secondary/50 rounded-[32px] bg-white/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(124,58,237,0.15)] hover:border-brand-primary/40 transition-all duration-500 group ${containerClassName}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className={`absolute -top-24 -right-24 sm:-top-32 sm:-right-32 pointer-events-none z-0 select-none opacity-40 mix-blend-multiply ${bgImageClassName}`}>
                    <Image src="/hero-bg.png" alt="CTA Background Shape" width={500} height={500} className="w-full h-auto object-contain" />
                </div>
                <div className={`absolute -bottom-24 -left-24 sm:-bottom-32 sm:-left-32 pointer-events-none z-0 select-none opacity-30 mix-blend-multiply rotate-180 ${bgImageClassName}`}>
                    <Image src="/hero-bg.png" alt="CTA Background Shape" width={500} height={500} className="w-full h-auto object-contain" />
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-3 text-center bg-gradient-to-r from-gray-600 via-black to-gray-600 bg-clip-text text-transparent">
                        {title}
                    </h2>
                    {description && (
                        <p className="text-[14px] sm:text-[15px] text-gray-600 max-w-3xl px-4 text-center leading-relaxed mb-8">
                            {description}
                        </p>
                    )}
                    <Link href={buttonLink} prefetch={false} className={`group/btn flex items-center justify-center w-full sm:w-auto px-10 sm:px-12 py-4 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg font-semibold shadow-md hover:shadow-xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out cursor-pointer ${!description ? 'mt-4' : ''}`}>
                        <span>{buttonText}</span>
                        <span className="inline-block transition-transform duration-200 ease-out group-hover/btn:translate-x-1.5 ml-2.5">→</span>
                    </Link>
                    {bottomText && (
                        <div className="flex items-center justify-center gap-6 mt-4">
                            <span className="flex items-center gap-1.5 text-[13px] text-gray-500">{bottomText}</span>
                        </div>
                    )}
                </div>
            </div>
        </RevealOnScroll>
    );
};

export default GlobalCTA;
