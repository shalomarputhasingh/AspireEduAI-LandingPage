"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function CountdownTimer() {
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setIsMounted(true);
    const targetDate = new Date("July 5, 2026 00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer(); // Initial call
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  // Prevent hydration mismatch by not rendering the numbers until mounted on client
  if (!isMounted) {
    return <div className="h-24" />; // Placeholder to prevent layout shift
  }

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="flex items-center gap-3 sm:gap-5 mb-10 justify-center"
    >
      {timeBlocks.map((block, i) => (
        <div key={block.label} className="flex flex-col items-center group">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-border-custom shadow-xl shadow-primary/5 rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-black text-secondary relative overflow-hidden group-hover:border-primary/30 group-hover:shadow-primary/10 transition-all">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 opacity-50" />
            <motion.span
              key={block.value}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="relative z-10 font-mono tracking-tighter"
            >
              {block.value.toString().padStart(2, '0')}
            </motion.span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest mt-3">
            {block.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
