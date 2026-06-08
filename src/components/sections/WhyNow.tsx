"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

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

export function WhyNow() {
  return (
    <section className="py-24 bg-section-bg overflow-hidden" id="why">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* LEFT: The Story */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-widest mb-6"
              >
                <Sparkles size={14} />
                Why Now
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-6 leading-[1.1] tracking-tight"
              >
                Why this didn't exist before • <span className="text-primary block mt-2">and why it does now.</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg prose-slate text-text-muted max-w-none space-y-6"
            >
              <p className="leading-relaxed font-medium">
                For two decades, software for Indian institutions meant clunky ERPs sold by a salesman in a Maruti van. AI was a research project • expensive, slow, and locked inside Silicon Valley.
              </p>
              <p className="leading-relaxed font-medium">
                That changed in 2024. The cost of running a GPT-class model collapsed by an order of magnitude. What used to cost ₹50 a query now costs paise. Suddenly, an AI that drafts 600 personal progress reports overnight is not just possible • it's affordable for a school in Madurai.
              </p>
              <p className="leading-relaxed font-medium">
                AspireEdu is the first AI operating system built specifically for Indian institutions. Tier-2 and Tier-3 cities. ₹-pricing. WhatsApp-first communication. Indian fee cycles. Indian exam patterns. <strong className="text-secondary">Not a translated American product.</strong>
              </p>
            </motion.div>
          </div>

          {/* RIGHT: Founder Quotes */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {founders.map((founder, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2 }}
                className={`relative p-8 rounded-[32px] flex flex-col gap-6 overflow-hidden group ${
                  founder.dark 
                  ? "bg-secondary text-white shadow-xl shadow-secondary/10" 
                  : "bg-white text-secondary border border-border-custom shadow-sm"
                }`}
              >
                {/* Decorative elements */}
                <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] rounded-full pointer-events-none ${founder.dark ? "bg-primary/20" : "bg-primary/5"}`} />
                
                <div className="relative z-10 flex gap-4">
                  <Quote 
                    size={32} 
                    className={`shrink-0 ${founder.dark ? "text-primary/40" : "text-primary/20"}`} 
                  />
                  <p className="text-xl md:text-2xl font-bold leading-tight italic">
                    "{founder.quote}"
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-4 mt-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm ${founder.dark ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                    {founder.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-base">{founder.name}</div>
                    <div className={`text-xs ${founder.dark ? "text-slate-400" : "text-text-muted"}`}>
                      {founder.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
