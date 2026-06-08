"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const founders = [
  {
    name: "Arunachalam M",
    role: "Founder & CEO, Aspire Code AI",
    quote: "Great teachers are buried under paperwork. We built AspireEdu AI so they can finally teach again.",
    dark: false,
  },
  {
    name: "Vidurga Sabarisha J",
    role: "COO & CTO, Aspire Code AI",
    quote: "We didn't build AspireEdu to add another tab to your browser. We built it to delete the other five.",
    dark: true,
  },
];

export function Founder() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative p-8 md:p-12 rounded-[40px] flex flex-col justify-between overflow-hidden group ${
                founder.dark 
                ? "bg-secondary text-white shadow-2xl shadow-secondary/20" 
                : "bg-section-bg text-secondary border border-border-custom"
              }`}
            >
              {/* Decorative elements */}
              <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] rounded-full pointer-events-none ${founder.dark ? "bg-primary/20" : "bg-primary/10"}`} />
              
              <div className="relative z-10">
                <Quote 
                  size={48} 
                  className={`mb-8 ${founder.dark ? "text-primary/40" : "text-primary/20"}`} 
                />
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.2 }}
                  className="text-2xl md:text-3xl font-medium leading-tight mb-12 italic"
                >
                  "{founder.quote}"
                </motion.p>
              </div>

              <div className="relative z-10 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${founder.dark ? "bg-primary text-white" : "bg-white border border-border-custom text-primary"}`}>
                  {founder.name[0]}
                </div>
                <div>
                  <div className="font-bold text-lg">{founder.name}</div>
                  <div className={`text-sm ${founder.dark ? "text-slate-400" : "text-text-muted"}`}>
                    {founder.role}
                  </div>
                </div>
              </div>

              {/* Founder Avatar Placeholder Animation */}
              <motion.div
                className={`absolute -right-8 -bottom-8 w-48 h-48 rounded-full border opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700 ${founder.dark ? "border-white" : "border-primary"}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
