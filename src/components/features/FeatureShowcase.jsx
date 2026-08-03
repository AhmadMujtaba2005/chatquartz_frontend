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

export default function FeatureShowcase() {
  const [active, setActive] = useState(0);
  const Icon = features[active].icon;

  return (
    <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] max-w-[750px] mx-auto w-[98%] mt-10 mb-12 border border-gray-200/80 bg-white">

      {/* ── Left sidebar ── */}
      <div className="md:w-[240px] md:shrink-0 bg-gray-50/50 px-2 py-4 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-center gap-2">
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
                className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#2B64FD] rounded-r-full"
              />
            )}
            <div className="flex items-center justify-between mb-1">
              <span className={`text-[11px] font-bold tracking-widest ${active === i ? "text-[#2B64FD]" : "text-gray-400"}`}>
                {f.tag}
              </span>
              <span className={`text-[13px] font-mono font-bold ${active === i ? "text-[#2B64FD]/50" : "text-gray-300"}`}>
                0{i + 1}
              </span>
            </div>
            <p className={`text-[16px] font-bold leading-snug ${active === i ? "text-gray-900" : "text-gray-500"}`}>
              {f.label}
            </p>
          </button>
        ))}
      </div>

      {/* ── Right detail panel ──
          Key insight: give this panel an explicit min-h so it always has space.
          The motion.div is NOT absolutely positioned — instead we use a fixed
          min-h container so the outer box never shrinks between tabs. */}
      <div className="flex-1 bg-gradient-to-br from-[#F4F7FF] to-white text-gray-900 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#2B64FD] rounded-full blur-[200px] opacity-10 pointer-events-none" />

        {/* Spacer that locks the panel height — content sits on top of it */}
        <div className="invisible select-none pointer-events-none px-12 py-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-2xl shrink-0 w-[46px] h-[46px]" />
            <h3 className="text-[24px] font-bold leading-tight">Automations &amp; Triggers</h3>
          </div>
          <p className="text-[15px] leading-relaxed mb-4 max-w-2xl">
            Personalize every customer journey automatically.
          </p>
          <ul className="space-y-2.5">
            <li className="flex items-start gap-3 text-[15px]"><span className="h-5 w-5 shrink-0" /><span>13+ condition types for full customization</span></li>
            <li className="flex items-start gap-3 text-[15px]"><span className="h-5 w-5 shrink-0" /><span>Auto-schedule email &amp; SMS campaigns</span></li>
            <li className="flex items-start gap-3 text-[15px]"><span className="h-5 w-5 shrink-0" /><span>Trigger responses based on user behavior</span></li>
          </ul>
        </div>

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
              <div className="p-2.5 bg-white rounded-2xl shadow-sm border border-[#2B64FD]/10 shrink-0">
                <Icon className="h-6 w-6 text-[#2B64FD]" />
              </div>
              <h3 className="text-[24px] font-bold tracking-tight text-gray-900 leading-tight">
                {features[active].headline}
              </h3>
            </div>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4 max-w-2xl">
              {features[active].description}
            </p>
            <ul className="space-y-2.5">
              {features[active].points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-gray-700">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-[#2B64FD]/10 shrink-0 mt-0.5 border border-[#2B64FD]/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2B64FD]" />
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
}
