"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { CountdownTimer } from "../ui/CountdownTimer";

const subheadlineItems = [
  "Attendance.",
  "Fees.",
  "Faculty.",
  "Reports.",
  "Question Papers.",
  "AI Assistance.",
];

const trustIndicators = [
  "Built for Indian Institutions",
  "Tenant-Isolated Data",
  "AI-Powered Workflows",
  "No Setup Fee During Beta",
];

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex flex-col justify-center" id="product">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-accent/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Beta Announcement */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium shadow-2xl border border-white/10"
        >
          <Sparkles className="text-accent w-4 h-4 animate-pulse" />
          <span>Beta registration opens · July 5, 2026 · </span>
          <span className="text-accent font-bold">Registration open</span>
        </motion.div>

        <CountdownTimer />

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-8 leading-[1.1] tracking-tight max-w-4xl"
        >
          What If Your Entire Institution Ran From{" "}
          <span className="text-primary relative inline-block">
            One Dashboard?
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-1 left-0 h-2 bg-accent/30 -z-10"
            />
          </span>
        </motion.h1>

        {/* Subheadline Items */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-10 max-w-3xl">
          {subheadlineItems.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-lg md:text-xl font-bold text-text-muted"
            >
              {item}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl leading-relaxed"
        >
          An AI-powered operating system built to simplify institution management, 
          reduce paperwork, and let you focus on what matters: your students.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-5 mb-20 w-full sm:w-auto"
        >
          <a href="#cta" className="inline-block bg-primary text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95 text-center">
            Request a Demo
          </a>
          <a href="#consolidation" className="inline-block bg-white text-secondary border-2 border-border-custom px-12 py-5 rounded-2xl font-black text-xl hover:bg-section-bg hover:border-primary/20 transition-all active:scale-95 text-center">
            See How It Works
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full border-t border-border-custom pt-12"
        >
          {trustIndicators.map((indicator) => (
            <div key={indicator} className="flex items-center justify-center sm:justify-start gap-3 text-base md:text-lg font-bold text-secondary">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="text-primary w-6 h-6" />
              </div>
              <span className="text-left">{indicator}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
