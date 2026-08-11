"use client";

const ScrollDownIndicator = () => {
    return (
        <button
            type="button"
            aria-label="Scroll to next section"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-purple-300/80 hover:text-purple-200 transition-colors cursor-pointer animate-bounce z-10"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
            <span className="text-[11px] font-semibold mb-2 tracking-[0.2em] uppercase">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </button>
    );
};

export default ScrollDownIndicator;
