"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  ShieldCheck, 
  Repeat, 
  BarChart, 
  Layers, 
  DollarSign 
} from "lucide-react";

const benefits = [
  {
    icon: <Zap className="text-primary" />,
    title: "Reduce Administrative Workload",
    description: "Automate repetitive tasks and free up your staff for higher-value educational work.",
    metric: "40 hrs",
    metricLabel: "Saved / Week",
  },
  {
    icon: <ShieldCheck className="text-primary" />,
    title: "Improve Parent Communication",
    description: "Automated WhatsApp updates and personalized reports keep parents informed and happy.",
    metric: "Instant",
    metricLabel: "Delivery",
  },
  {
    icon: <Repeat className="text-primary" />,
    title: "Eliminate Duplicate Data Entry",
    description: "Enter once, sync everywhere. No more re-typing student names across five different tools.",
    metric: "0",
    metricLabel: "Redundancy",
  },
  {
    icon: <Layers className="text-primary" />,
    title: "Centralize Institution Data",
    description: "A single source of truth for students, faculty, finance, and academic performance.",
    metric: "100%",
    metricLabel: "Visibility",
  },
  {
    icon: <DollarSign className="text-primary" />,
    title: "Reduce Software Costs",
    description: "Replace expensive legacy subscriptions with one affordable, all-in-one AI platform.",
    metric: "60%",
    metricLabel: "Cost Savings",
  },
  {
    icon: <BarChart className="text-primary" />,
    title: "Increase Operational Visibility",
    description: "Real-time analytics help you make data-driven decisions for your institution's growth.",
    metric: "Real-time",
    metricLabel: "Insights",
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-secondary mb-4"
          >
            Spend Less Time Managing. More Time Educating.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            AspireEdu AI streamlines your entire operation, so you can focus on 
            what really matters: student success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4 group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-3 bg-primary/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="text-right">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                    className="text-2xl font-bold text-primary"
                  >
                    {benefit.metric}
                  </motion.div>
                  <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{benefit.metricLabel}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-secondary">{benefit.title}</h3>
              <p className="text-text-muted leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
