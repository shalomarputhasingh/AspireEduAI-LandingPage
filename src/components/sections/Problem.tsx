"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock, Database, Wallet } from "lucide-react";

const problems = [
  {
    icon: <Database className="text-primary" />,
    title: '"Attendance is in one register. Marks in another. Fees in Excel."',
    description: "Three sources of truth, and they never agree.",
    color: "bg-blue-50",
  },
  {
    icon: <Clock className="text-accent" />,
    title: '"Parents call when results come on WhatsApp 3 days late."',
    description: "Generic reports create complaints. Personalized reports consume weekends.",
    color: "bg-amber-50",
  },
  {
    icon: <AlertCircle className="text-red-500" />,
    title: '"Faculty re-enter the same student data four times."',
    description: "Nobody entered education to do repetitive data entry.",
    color: "bg-red-50",
  },
  {
    icon: <Wallet className="text-green-500" />,
    title: '"You pay for 5 SaaS tools and still need a clerk to glue them together."',
    description: "Multiple subscriptions. Multiple formats. Multiple headaches.",
    color: "bg-green-50",
  },
];

export function Problem() {
  return (
    <section className="py-24 bg-white" id="problem">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-secondary mb-4"
          >
            Sound Familiar?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            These are the things every institution leader we've spoken to said •
            in those exact words.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-border-custom hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className={`w-12 h-12 rounded-2xl ${problem.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3 leading-relaxed">
                {problem.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
