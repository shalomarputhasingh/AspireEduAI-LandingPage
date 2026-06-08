"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const comparisons = [
  {
    feature: "Data Entry",
    old: "Manual and repetitive across multiple disconnected tools",
    new: "Enter once, AI automatically syncs it everywhere",
  },
  {
    feature: "Report Generation",
    old: "Takes teachers entire weekends to compile manually",
    new: "Personalized, insightful reports generated in seconds",
  },
  {
    feature: "Finding Information",
    old: "Digging through complex menus and messy Excel sheets",
    new: "Ask the AI assistant in plain English and get instant answers",
  },
  {
    feature: "Software Costs",
    old: "Paying for 5 different, clunky SaaS subscriptions",
    new: "One unified, affordable platform that does it all",
  },
];

export function WhyNow() {
  return (
    <section className="py-24 bg-section-bg overflow-hidden" id="why">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-secondary mb-6"
          >
            The Old Way vs. <span className="text-primary">The AI Way</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Why forward-thinking institutions are leaving legacy ERPs behind and upgrading to an intelligent operating system.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop/Tablet Header */}
          <div className="hidden md:grid grid-cols-[1fr_1.5fr_1.5fr] gap-6 items-end mb-6 px-4">
            <div className="text-right font-bold text-slate-400 uppercase tracking-[0.2em] text-xs pb-4">
              The Challenge
            </div>
            <div className="text-center font-black text-secondary text-2xl bg-white py-6 rounded-t-[32px] border-t border-x border-border-custom shadow-[0_-10px_30px_rgba(15,23,42,0.03)]">
              Legacy ERPs
            </div>
            <div className="text-center font-black text-primary text-2xl bg-primary/5 py-6 rounded-t-[32px] border-t border-x border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/50 pointer-events-none" />
              <span className="relative z-10">AspireEdu AI</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {comparisons.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1.5fr] gap-4 md:gap-6 items-stretch"
              >
                {/* Feature Name (Mobile & Desktop) */}
                <div className="flex items-center justify-center md:justify-end md:text-right font-black text-secondary text-lg md:text-xl md:pr-4 pt-6 md:pt-0">
                  {item.feature}
                </div>

                {/* Old Way */}
                <div className="bg-white p-6 md:p-8 rounded-3xl md:rounded-2xl border border-border-custom flex items-start gap-4 opacity-80 hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1 border border-red-100">
                    <X className="text-red-500 w-4 h-4" />
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.old}</p>
                </div>

                {/* New Way */}
                <div className="bg-primary/5 p-6 md:p-8 rounded-3xl md:rounded-2xl border border-primary/20 flex items-start gap-4 shadow-sm relative overflow-hidden group">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-primary/30">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <p className="text-secondary font-bold leading-relaxed">{item.new}</p>
                  
                  {/* Subtle shine on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop/Tablet Footer to close the cards */}
          <div className="hidden md:grid grid-cols-[1fr_1.5fr_1.5fr] gap-6 mt-4 px-4">
             <div />
             <div className="h-6 bg-white rounded-b-[32px] border-b border-x border-border-custom shadow-[0_10px_30px_rgba(15,23,42,0.03)]" />
             <div className="h-6 bg-primary/5 rounded-b-[32px] border-b border-x border-primary/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
