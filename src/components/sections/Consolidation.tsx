"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Logo } from "../ui/Logo";
import { 
  FileText, 
  MessageSquare, 
  Database, 
  Clock, 
  CreditCard, 
  Users,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp
} from "lucide-react";

const legacyTools = [
  { icon: <FileText size={28} />, name: "Paper Registers", desc: "Hard to search, easy to lose" },
  { icon: <Database size={28} />, name: "Excel Sheets", desc: "Version control nightmare" },
  { icon: <MessageSquare size={28} />, name: "WhatsApp", desc: "Unprofessional & scattered" },
  { icon: <Clock size={28} />, name: "Manual Hours", desc: "Prone to human error" },
  { icon: <CreditCard size={28} />, name: "Physical Receipts", desc: "Audit trail headache" },
  { icon: <Users size={28} />, name: "Legacy ERP", desc: "Clunky & slow to load" },
];

export function Consolidation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  }).scrollYProgress;

  return (
    <section 
      ref={containerRef}
      className="py-40 bg-white overflow-hidden relative"
      id="consolidation"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-red-100"
          >
            The Administrative Debt
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-secondary mb-8 leading-[1.1] tracking-tighter"
          >
            Your Institution is <span className="text-red-500 underline decoration-red-200 decoration-8 underline-offset-8">Drowning</span> in Tools.
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed"
          >
            Every disconnected tool adds an "Administrative Tax" on your faculty. 
            We replace the chaos with a single, high-performance heartbeat.
          </motion.p>
        </div>

        {/* The Evolution Story: From 6 to 1 */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr] gap-12 md:gap-20 items-center">
          
          {/* LEFT: THE CHAOS (THE "BEFORE") */}
          <div className="space-y-6">
            <h4 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-10">Legacy Fragmentation</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {legacyTools.map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col gap-3 group hover:bg-white hover:border-red-200 transition-all duration-300"
                >
                  <div className="text-slate-400 group-hover:text-red-500 transition-colors">
                    {tool.icon}
                  </div>
                  <div>
                    <div className="font-bold text-secondary text-lg line-through group-hover:text-red-900 transition-colors">{tool.name}</div>
                    <div className="text-xs text-text-muted">{tool.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CENTER: THE TRANSFORMATION (THE "CONSOLIDATOR") */}
          <div className="flex flex-col items-center justify-center relative py-20 lg:py-0">
             <div className="h-[200px] lg:h-[400px] w-px bg-gradient-to-b from-slate-200 via-primary to-primary relative">
                <motion.div 
                   style={{ scaleY: pathLength }}
                   className="absolute inset-0 bg-primary origin-top shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                />
             </div>
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
             >
                <Zap className="text-primary fill-primary opacity-20" size={100} />
             </motion.div>
          </div>

          {/* RIGHT: THE FUTURE (THE "AFTER") */}
          <div className="relative">
             <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full -z-10" />
             <motion.div
               initial={{ opacity: 0, scale: 0.9, x: 50 }}
               whileInView={{ opacity: 1, scale: 1, x: 0 }}
               className="bg-white p-10 md:p-16 rounded-[60px] border-8 border-primary/10 shadow-[0_50px_100px_rgba(15,23,42,0.1)] relative overflow-hidden group"
             >
                <div className="relative z-10 flex flex-col items-center gap-8">
                   <Logo className="scale-[1.5] md:scale-[1.8]" showText={false} />
                   <div className="text-center">
                      <h3 className="text-4xl font-black text-secondary tracking-tighter mb-4">The Unified OS</h3>
                      <p className="text-lg text-text-muted leading-relaxed mb-10">
                         One platform. One source of truth. One interface for your entire institution. 
                         Everything works together, perfectly.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                         {[
                           { label: "Data Integrity", icon: <ShieldCheck className="text-green-500" />, val: "100%" },
                           { label: "Efficiency", icon: <Zap className="text-primary" />, val: "5x Faster" },
                           { label: "Visibility", icon: <TrendingUp className="text-accent" />, val: "Real-time" },
                           { label: "Security", icon: <ShieldCheck className="text-green-500" />, val: "Enterprise" }
                         ].map((item, idx) => (
                           <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                              <div className="shrink-0">{item.icon}</div>
                              <div className="text-left">
                                 <div className="text-xs text-text-muted font-bold uppercase tracking-widest">{item.label}</div>
                                 <div className="text-lg font-black text-secondary">{item.val}</div>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

                {/* Animated Background Mesh for the "Future" Card */}
                <motion.div 
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 blur-[80px] rounded-full -z-10"
                />
             </motion.div>
          </div>
        </div>

        {/* The Impact Summary */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center">
           <div>
              <div className="text-5xl font-black text-secondary mb-2">6 → 1</div>
              <div className="text-sm font-bold text-text-muted uppercase tracking-[0.2em]">Consolidation Ratio</div>
           </div>
           <div className="p-8 bg-primary text-white rounded-[40px] shadow-2xl shadow-primary/20">
              <div className="text-lg font-bold mb-2 italic">"Finally, we can just teach."</div>
              <div className="text-sm opacity-80">— Principal, Modern Academy</div>
           </div>
           <div>
              <div className="text-5xl font-black text-secondary mb-2">0</div>
              <div className="text-sm font-bold text-text-muted uppercase tracking-[0.2em]">Data Redundancy</div>
           </div>
        </div>
      </div>
    </section>
  );
}
