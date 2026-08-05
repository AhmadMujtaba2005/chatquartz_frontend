"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, MessageSquare, LayoutGrid } from "lucide-react";

const features = [
  {
    label: "Automations",
    tag: "SMART TRIGGERS",
    icon: Zap,
    headline: "Automations & Triggers",
    description: "Personalize every customer journey automatically.",
    points: [
      "13+ condition types for full customization",
      "Auto-schedule email & SMS campaigns",
      "Trigger responses based on user behavior",
    ],
  },
  {
    label: "Marketing Chatbot",
    tag: "CAMPAIGN AUTOMATION",
    icon: MessageSquare,
    headline: "Marketing Chatbot",
    description: "Turn every conversation into a marketing channel.",
    points: [
      "Automate responses across campaigns",
      "Handle inquiries, bookings, and feedback in one flow",
      "Save time while boosting satisfaction",
    ],
  },
  {
    label: "Rich Messages",
    tag: "INTERACTIVE CONTENT",
    icon: LayoutGrid,
    headline: "Rich Messages",
    description: "Make every interaction more engaging.",
    points: ["10+ interactive message types", "Built-in multilingual support"],
  },
];

const FeatureShowcase = () => {
  const [active, setActive] = useState(0);
  const Icon = features[active].icon;

  return (
    <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] max-w-[950px] mx-auto w-[98%] mt-10 mb-12 border border-gray-200/80 bg-white">

      {/* ── Left sidebar ── */}
      <div className="md:w-[280px] md:shrink-0 bg-gray-50/50 px-2 py-4 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-center gap-2">
        {features.map((f, i) => (
          <button
            key={f.label}
            onClick={() => setActive(i)}
            className={`w-full text-left px-3 py-4 rounded-2xl transition-all duration-300 relative group outline-none ${active === i
              ? "bg-white shadow-md border border-gray-100"
              : "hover:bg-gray-100/80 border border-transparent"
              }`}
          >
            {active === i && (
              <motion.div
                layoutId="active-bar"
                className="absolute left-0 top-3 bottom-3 w-1.5 bg-brand-primary rounded-r-full"
              />
            )}
            <div className="flex items-center justify-between mb-1">
              <span className={`text-[12px] font-bold tracking-widest ${active === i ? "text-brand-primary" : "text-gray-400"}`}>
                {f.tag}
              </span>
              <span className={`text-[14px] font-mono font-bold ${active === i ? "text-brand-primary/50" : "text-gray-300"}`}>
                0{i + 1}
              </span>
            </div>
            <p className={`text-[18px] font-bold leading-snug ${active === i ? "text-gray-900" : "text-gray-500"}`}>
              {f.label}
            </p>
          </button>
        ))}
      </div>

      {/* ── Right detail panel ── */}
      <div className="flex-1 bg-gradient-to-br from-[#F4F7FF] to-white text-gray-900 relative overflow-hidden min-h-[320px] sm:min-h-[280px]">
        {/* Ambient glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-primary rounded-full blur-[200px] opacity-10 pointer-events-none" />

        {/* Actual animated content — absolutely fills the panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-0 z-10 flex flex-col justify-center px-12 py-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2.5 bg-white rounded-2xl shadow-sm border border-brand-primary/10 shrink-0">
                <Icon className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="text-[28px] font-bold tracking-tight text-gray-900 leading-tight">
                {features[active].headline}
              </h3>
            </div>
            <p className="text-gray-600 text-[17px] leading-relaxed mb-4 max-w-2xl">
              {features[active].description}
            </p>
            <ul className="space-y-3">
              {features[active].points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[16px] text-gray-700">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-brand-primary/10 shrink-0 mt-0.5 border border-brand-primary/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  </div>
                  <span className="leading-snug">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default FeatureShowcase;
