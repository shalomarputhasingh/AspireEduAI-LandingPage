"use client";

import { motion } from "framer-motion";

const logos = [
  "Institution Alpha",
  "Beta School",
  "Gamma College",
  "Delta Academy",
  "Epsilon Institute",
  "Zeta Learning",
  "Eta Prep",
  "Theta University",
];

export function SocialProof() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-bold uppercase tracking-[0.2em] text-text-muted mb-8"
        >
          Trusted by forward-thinking educational institutions
        </motion.p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex gap-20 animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="text-2xl font-black text-slate-200 hover:text-primary transition-colors cursor-default select-none flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-100" />
              {logo}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
