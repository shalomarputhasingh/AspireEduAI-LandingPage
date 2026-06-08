"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  FilePieChart, 
  CreditCard, 
  UserPlus, 
  BookOpen, 
  Sparkles 
} from "lucide-react";

const modules = [
  {
    icon: <Users size={24} />,
    title: "Smart Attendance",
    description: "Mark a class in 90 seconds. Auto-flags students below 75% and notifies parents instantly.",
    color: "bg-blue-500",
  },
  {
    icon: <FilePieChart size={24} />,
    title: "AI Student Reports",
    description: "Personal progress reports for every student in minutes, not weekends. Data-driven insights for growth.",
    color: "bg-purple-500",
  },
  {
    icon: <CreditCard size={24} />,
    title: "Fees & Finance",
    description: "One dashboard for every fee, every reminder, every receipt. Automated collection and reporting.",
    color: "bg-green-500",
  },
  {
    icon: <UserPlus size={24} />,
    title: "Faculty Management",
    description: "Onboard a teacher in one upload. Manage attendance, payroll, and performance seamlessly.",
    color: "bg-amber-500",
  },
  {
    icon: <BookOpen size={24} />,
    title: "AI Question Papers",
    description: "Bloom's-taxonomy-balanced question papers from a syllabus snippet. Save hours of prep time.",
    color: "bg-red-500",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Multilingual AI Assistant",
    description: "Ask questions and get instant insights in English, Hindi, Tamil, and more. Your data, in your language.",
    color: "bg-primary",
  },
];

export function Solution() {
  return (
    <section className="py-24 bg-section-bg" id="modules">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-secondary mb-4"
          >
            One Platform. Six AI-Augmented Modules.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            Each one replaces a tool • or three • you're paying for today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[32px] border border-border-custom shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${module.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-current/20`}>
                {module.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {module.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {module.description}
              </p>
              
              <motion.div 
                className="mt-6 flex items-center gap-2 text-primary font-bold text-sm cursor-pointer"
                whileHover={{ x: 5 }}
              >
                Learn More <span>→</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
