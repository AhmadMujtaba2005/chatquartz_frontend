"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const features = [
  {
    title: "Intelligent Automation At Scale",
    description: "Handles unlimited queries autonomously, escalating complex issues to your team when needed.",
    image: "/images/automation.png",
    duration: 4
  },
  {
    title: "Analytics That Drive Success",
    description: "Real-time performance tracking to spot gaps and continuously improve responses.",
    image: "/images/analytics.png",
    duration: 4
  },
  {
    title: "A Multilingual Marvel",
    description: "Auto-translated conversations in 19+ languages — no barriers, no limits.",
    image: "/images/multilingual.png",
    duration: 4
  },
  {
    title: "Your Data, Your Strength",
    description: "Sync your database or documents to turn your content into AI-driven insights.",
    image: "/images/data.png",
    duration: 4
  },
  {
    title: "Effortless Integration Across Platforms",
    description: "Fits seamlessly into WordPress, WooCommerce, CRMs, and email — no hassle.",
    image: "/images/integration.png",
    duration: 4
  }
];

const FutureShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const handleAnimationEnd = (e, index) => {
    if (e.animationName === "fillProgress" && index === activeIndex) {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 md:gap-12 w-[94%] max-w-[1100px] mx-auto mt-8 group/container"
    >

      {/* Left Side: Features List */}
      <div className="flex-1 flex flex-col justify-center gap-6 md:gap-8 px-4 py-6">
        {features.map((feature, idx) => {
          const isActive = activeIndex === idx && isInView;
          return (
            <div
              key={feature.title}
              className="grid grid-cols-[3px_1fr] gap-6 cursor-pointer group"
              onClick={() => setActiveIndex(idx)}
            >
              {/* Progress Bar Column */}
              <div className="relative w-full h-full min-h-[40px] bg-gray-200 rounded-full overflow-hidden">
                {isActive && (
                  <div
                    className="absolute top-0 left-0 w-full bg-brand-primary group-hover/container:[animation-play-state:paused]"
                    style={{
                      animation: `fillProgress ${feature.duration}s linear forwards`
                    }}
                    onAnimationEnd={(e) => handleAnimationEnd(e, idx)}
                  />
                )}
              </div>

              {/* Content Column */}
              <div className="flex flex-col justify-center py-1">
                <h5 className={`text-[17px] sm:text-[18px] md:text-[20px] transition-colors duration-300 ${isActive ? 'text-brand-primary font-bold' : 'text-gray-400 font-medium group-hover:text-gray-600'}`}>
                  {feature.title}
                </h5>
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${isActive ? 'max-h-[120px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Side: Image Panel */}
      <div className="flex-1 relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={features[activeIndex].image}
            alt={features[activeIndex].title}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1.3 }}
            exit={{ opacity: 0, scale: 1.45 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute max-w-full max-h-full object-contain drop-shadow-2xl"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FutureShowcase;
