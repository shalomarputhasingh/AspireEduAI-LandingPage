"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { School, GraduationCap, BookOpen, Check, ArrowRight } from "lucide-react";

const types = [
  {
    id: "schools",
    label: "Schools",
    icon: <School size={20} />,
    title: "Nurture Young Minds with Smart Automation",
    description: "Manage K-12 requirements from daily attendance to complex parent communication cycles.",
    features: ["Automated Parent WhatsApp Updates", "Custom Grade Sheets & CBSE/ICSE Reports", "Library & Transport Management", "AI-Powered Question Bank Builder"],
    stats: [
      { label: "Attendance Tracking", value: "Automated" },
      { label: "Admin Time Saved", value: "40%" }
    ]
  },
  {
    id: "colleges",
    label: "Colleges",
    icon: <GraduationCap size={20} />,
    title: "Streamline Higher Education Workflows",
    description: "Handle large student bodies, diverse departments, and complex fee structures with ease.",
    features: ["Department-wise Analytics", "University Compliance Reporting", "Placement Tracking & Resume Parsing", "Scholarship & Grant Management"],
    stats: [
      { label: "Fee Follow-ups", value: "Zero-Touch" },
      { label: "Reporting Speed", value: "10x Faster" }
    ]
  },
  {
    id: "institutes",
    label: "Training Institutes",
    icon: <BookOpen size={20} />,
    title: "Scale Your Coaching & Skills Centers",
    description: "Focused tools for admissions, course tracking, and student performance monitoring.",
    features: ["Inquiry & Lead Management", "Batch & Schedule Automation", "Online Assessment Engine", "Student Performance Heatmaps"],
    stats: [
      { label: "Lead Tracking", value: "Centralized" },
      { label: "Staff Productivity", value: "2x" }
    ]
  },
];

export function InstitutionTypes() {
  const [activeTab, setActiveTab] = useState(types[0].id);

  const activeContent = types.find((t) => t.id === activeTab)!;

  return (
    <section className="py-24 bg-section-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-secondary mb-6"
          >
            Built For Every Type Of Institution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            A modular operating system that adapts to your specific educational workflow.
          </motion.p>
        </div>

        {/* Tabs - Spiced Up */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-2 rounded-3xl border border-border-custom flex flex-wrap justify-center gap-2 shadow-xl shadow-primary/5">
            {types.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`relative px-8 py-4 rounded-2xl text-base font-black transition-all flex items-center gap-3 ${
                  activeTab === type.id ? "text-primary" : "text-text-muted hover:text-secondary hover:bg-slate-50"
                }`}
              >
                {activeTab === type.id && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-primary/10 rounded-2xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{type.icon}</span>
                <span className="relative z-10">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content - Spiced Up */}
        <div className="bg-white rounded-[48px] border border-border-custom p-8 md:p-20 shadow-[0_40px_100px_rgba(15,23,42,0.05)] relative overflow-hidden group">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-[-12deg] translate-x-20" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            >
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-white rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-8"
                >
                  <Check size={12} />
                  Tailored Solution
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-black text-secondary mb-8 leading-tight">{activeContent.title}</h3>
                <p className="text-xl text-text-muted mb-10 leading-relaxed">{activeContent.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {activeContent.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3 group/feat"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 group-hover/feat:bg-green-500 transition-colors">
                        <Check size={14} className="text-green-600 group-hover/feat:text-white transition-colors" />
                      </div>
                      <span className="font-bold text-secondary text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-8 py-8 border-t border-border-custom">
                  {activeContent.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-3xl font-black text-primary">{stat.value}</div>
                      <div className="text-xs font-black text-text-muted uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Interactive Visual */}
              <div className="relative aspect-square lg:aspect-auto h-full min-h-[400px] flex items-center justify-center">
                 {/* Main Animated Card */}
                 <motion.div 
                   layoutId="visualCard"
                   className="relative z-10 w-full max-w-[450px] bg-white rounded-3xl shadow-[0_50px_100px_rgba(37,99,235,0.15)] border border-slate-100 p-8 flex flex-col gap-6"
                 >
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                             {activeContent.icon}
                          </div>
                          <div>
                             <div className="h-3 w-24 bg-slate-100 rounded-full" />
                             <div className="h-2 w-16 bg-slate-50 rounded-full mt-1" />
                          </div>
                       </div>
                       <div className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black rounded-full">ACTIVE</div>
                    </div>

                    <div className="space-y-4">
                       {[0.9, 0.7, 0.8].map((w, idx) => (
                         <div key={idx} className="h-3 bg-slate-50 rounded-full relative overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${w * 100}%` }}
                              transition={{ duration: 1.5, delay: 0.5 + idx * 0.2 }}
                              className="absolute inset-0 bg-primary/20"
                            />
                         </div>
                       ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                       <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-2">
                          <div className="h-2 w-12 bg-slate-200 rounded-full" />
                          <div className="h-6 w-16 bg-white rounded-lg shadow-sm" />
                       </div>
                       <div className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-2">
                          <div className="h-2 w-12 bg-slate-200 rounded-full" />
                          <div className="h-6 w-16 bg-white rounded-lg shadow-sm" />
                       </div>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 w-full py-4 bg-primary text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 group/btn"
                    >
                      Explore {activeContent.label} OS
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                 </motion.div>

                 {/* Decorative floating elements */}
                 <motion.div 
                   animate={{ y: [0, -20, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-10 right-10 w-20 h-20 bg-accent/20 rounded-3xl -rotate-12 blur-xl"
                 />
                 <motion.div 
                   animate={{ y: [0, 20, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute bottom-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
                 />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
