"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export function Logo({ className = "", showText = true }: { className?: string, showText?: boolean }) {
  return (
    <motion.div 
      className={`flex items-center gap-3 md:gap-4 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center shrink-0">
        <Image 
          src="/logo.png" 
          alt="AspireEdu AI Logo" 
          width={56} 
          height={56} 
          className="object-contain"
        />
        <motion.div 
          className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full border-2 md:border-[3px] border-white shadow-md"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </div>
      {showText && (
        <span className="font-black text-xl md:text-2xl tracking-tighter text-secondary whitespace-nowrap">
          AspireEdu<span className="text-primary">AI</span>
        </span>
      )}
    </motion.div>
  );
}
