"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Users, 
  CreditCard, 
  GraduationCap, 
  Bell, 
  FileText, 
  TrendingUp,
  Calendar
} from "lucide-react";

const floatingCards = [
  {
    icon: <Users className="text-red-500" size={18} />,
    text: "3 students dropped below 75%",
    delay: 0,
    top: "5%",
    left: "-6%",
  },
  {
    icon: <CreditCard className="text-amber-500" size={18} />,
    text: "37 fee defaulters identified",
    delay: 1,
    bottom: "20%",
    right: "-8%",
  },
  {
    icon: <FileText className="text-blue-500" size={18} />,
    text: "600 reports generated today",
    delay: 2,
    top: "35%",
    right: "-6%",
  },
];

export function HeroVisual() {
  return (
    <section className="py-10 md:py-20 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative bg-white rounded-3xl border border-border-custom shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px] md:aspect-[16/9]"
        >
          {/* Sidebar (Desktop Only) */}
          <div className="hidden md:flex w-64 border-r border-border-custom flex-col bg-slate-50/50 shrink-0">
            <div className="p-6 border-b border-border-custom flex items-center justify-center">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                 <Image src="/logo.png" alt="Logo" width={24} height={24} className="object-contain" />
              </div>
            </div>
            <div className="flex-1 p-4 flex flex-col gap-3">
              {[Users, Calendar, CreditCard, GraduationCap, FileText].map((Icon, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${i === 0 ? "bg-white shadow-sm text-primary font-bold border border-slate-100" : "text-slate-400 hover:bg-slate-100 hover:text-secondary"}`}>
                  <Icon size={20} />
                  <div className={`h-2 rounded-full bg-current opacity-20 hidden md:block ${i === 0 ? "w-24" : "w-16"}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 md:p-8 flex flex-col gap-4 md:gap-6 overflow-hidden relative bg-white">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1.5">
                <div className="h-4 w-24 md:w-32 bg-slate-200 rounded-full animate-pulse" />
                <div className="h-3 w-32 md:w-48 bg-slate-100 rounded-full" />
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition-colors">
                  <Bell size={16} className="text-slate-500" />
                </button>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden p-1 shadow-sm">
                  {/* Using the Brand Logo as the Profile Avatar */}
                  <Image src="/logo.png" alt="Profile" width={32} height={32} className="object-contain" />
                </div>
              </div>
            </div>

            {/* Stats Grid - Horizontal scroll on mobile */}
            <div className="flex md:grid md:grid-cols-3 gap-3 md:gap-4 overflow-x-auto pb-2 md:pb-0 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {[
                { label: "Attendance", value: "94.2%", trend: "+2.1%", color: "text-green-500", bg: "bg-green-50" },
                { label: "Fees Collected", value: "₹18.4L", trend: "88% Target", color: "text-primary", bg: "bg-blue-50" },
                { label: "Student Performance", value: "78%", trend: "+5% Avg", color: "text-accent", bg: "bg-amber-50" },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-4 md:p-5 border border-slate-100 min-w-[150px] md:min-w-0 snap-start flex-1 shrink-0 group hover:border-slate-200 transition-colors">
                  <div className="text-[10px] md:text-xs text-slate-400 font-bold mb-1 uppercase tracking-widest">{stat.label}</div>
                  <div className="text-xl md:text-2xl font-black text-secondary">{stat.value}</div>
                  <div className={`text-[10px] md:text-xs font-bold mt-2 inline-flex px-2 py-0.5 rounded-full ${stat.color} ${stat.bg}`}>{stat.trend}</div>
                </div>
              ))}
            </div>

            {/* Main Visual - Fast Animated Graph */}
            <div className="flex-1 bg-slate-50 rounded-[24px] md:rounded-[32px] border border-slate-100 p-4 md:p-6 flex flex-col gap-4 min-h-[180px] md:min-h-0">
              <div className="flex items-center justify-between">
                <div className="h-4 w-24 md:w-40 bg-slate-200 rounded-full" />
                <div className="flex gap-2">
                  <div className="w-12 md:w-16 h-5 md:h-6 bg-white rounded-lg border border-slate-200" />
                  <div className="w-12 md:w-16 h-5 md:h-6 bg-white rounded-lg border border-slate-200" />
                </div>
              </div>
              <div className="flex-1 relative flex items-end justify-between gap-1 md:gap-2 px-1 md:px-4 pb-2 md:pb-4 mt-4">
                {[30, 50, 40, 70, 60, 90, 55, 85, 65, 80, 50, 95].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end h-full group relative">
                     {/* Fast Graph Animation */}
                     <motion.div
                       initial={{ height: 0 }}
                       whileInView={{ height: `${h}%` }}
                       transition={{ delay: 0.1 + i * 0.03, duration: 0.3, ease: "easeOut" }}
                       className={`w-full rounded-t-sm md:rounded-t-md relative transition-colors ${i === 11 ? "bg-accent shadow-[0_0_10px_rgba(245,158,11,0.3)]" : "bg-primary/20 group-hover:bg-primary/40"}`}
                     >
                       {/* Subtle highlight on hover */}
                       <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-sm md:rounded-t-md" />
                     </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Assistant Notification Overlay */}
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4, type: "spring", bounce: 0.4 }}
              className="absolute bottom-4 left-4 right-4 md:left-auto md:bottom-8 md:right-8 bg-white/90 backdrop-blur-xl p-4 md:p-5 rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.1)] border border-primary/20 flex items-start gap-3 md:gap-4 md:max-w-[320px] z-20"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                <TrendingUp className="text-white" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-[10px] md:text-xs font-black text-primary uppercase tracking-widest">AI Insight</div>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                </div>
                <p className="text-xs md:text-sm text-secondary leading-relaxed font-medium mb-3">
                  Attendance dropped significantly in Class 10-B. Auto-notify parents?
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 md:py-2 bg-primary text-white text-[10px] md:text-xs font-black rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
                    Yes, notify
                  </button>
                  <button className="flex-1 py-1.5 md:py-2 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] md:text-xs font-bold rounded-lg hover:bg-slate-100 transition-colors">
                    Ignore
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Cards (Hidden on mobile to keep it clean) */}
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ 
              y: { repeat: Infinity, duration: 3, delay: card.delay, ease: "easeInOut" },
              opacity: { delay: 0.4 + card.delay * 0.1 },
              scale: { delay: 0.4 + card.delay * 0.1 },
            }}
            className="absolute hidden xl:flex items-center gap-3 bg-white p-3 rounded-2xl shadow-xl border border-border-custom z-20 max-w-[220px]"
            style={{ 
              top: card.top, 
              bottom: card.bottom, 
              left: card.left, 
              right: card.right 
            }}
          >
            <div className="p-2 bg-slate-50 rounded-lg shrink-0 border border-slate-100">{card.icon}</div>
            <p className="text-[11px] font-bold text-secondary leading-tight">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
