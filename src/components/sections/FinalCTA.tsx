"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 px-6" id="cta">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-secondary rounded-[48px] overflow-hidden p-8 md:p-20 text-center"
        >
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -left-1/4 w-full h-full bg-primary/20 blur-[120px] rounded-full"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [0, -90, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-accent/10 blur-[100px] rounded-full"
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
            >
              Ready To Replace Multiple Tools With One Platform?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 mb-12 leading-relaxed"
            >
              See how AspireEdu AI can simplify institution management and reduce administrative workload.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
                Request a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
                <Calendar className="w-5 h-5" />
                Schedule a Walkthrough
              </button>
            </motion.div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-accent/30 animate-pulse" />
          <div className="absolute bottom-20 right-20 w-6 h-6 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 right-10 w-2 h-2 rounded-full bg-white/20 animate-pulse" style={{ animationDelay: "2s" }} />
        </motion.div>
      </div>
    </section>
  );
}
