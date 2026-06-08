"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does implementation take?",
    answer: "Typically, most institutions are up and running within 48 to 72 hours. Our automated onboarding engine handles the heavy lifting, and our team provides dedicated support during the transition.",
  },
  {
    question: "Can we migrate data from Excel?",
    answer: "Absolutely. We have a robust 'Import from Excel' module that allows you to upload student and faculty data in bulk. Our AI also helps clean and format the data during the process.",
  },
  {
    question: "Is training provided for staff?",
    answer: "Yes, we provide comprehensive training sessions for administrators, office staff, and teachers. We also provide a library of video tutorials and a dedicated support manager for your institution.",
  },
  {
    question: "Is our institution's data secure?",
    answer: "Security is our top priority. We use tenant-isolated data structures, meaning your institution's data is completely separate from others. Everything is encrypted at rest and in transit using bank-grade security protocols.",
  },
  {
    question: "Does AspireEdu work for both schools and colleges?",
    answer: "Yes, the platform is modular and highly configurable. You can toggle specific features and modules based on whether you are managing a K-12 school, a degree college, or a professional training institute.",
  },
  {
    question: "Can parents access reports and updates?",
    answer: "Yes! Parents get access to a dedicated portal (or WhatsApp updates) where they can view attendance, progress reports, fee receipts, and institution announcements in real-time.",
  },
  {
    question: "What happens during onboarding?",
    answer: "Once you sign up, you'll be assigned a success manager. We'll start with a data audit, migrate your existing records, configure your fee cycles, and then conduct training sessions for your team.",
  },
  {
    question: "Do we need technical staff to use AspireEdu?",
    answer: "Not at all. AspireEdu AI is designed to be as simple as using WhatsApp. If you can use a smartphone, you can manage your institution with our platform.",
  },
];

function AccordionItem({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) {
  return (
    <div className={`border-b border-border-custom last:border-0 transition-all ${isOpen ? "bg-slate-50/50" : ""}`}>
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left px-4 group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? "text-primary" : "text-secondary group-hover:text-primary"}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={isOpen ? "text-primary" : "text-text-muted"}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 px-4 text-text-muted leading-relaxed max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-secondary mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted"
          >
            Everything you need to know about AspireEdu AI.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[32px] border border-border-custom overflow-hidden shadow-sm"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
