'use client';

import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { number: "24/7", label: "Secured access for tenants" },
    { number: "5", label: "Suite types, hourly to multi-year" },
    { number: "100%", label: "Move-in ready, fully furnished" },
    { number: "15 min", label: "From central Austin via I-35" },
  ];

  return (
    <section className="bg-lt-auburn border-y border-lt-auburn-dark text-lt-white overflow-hidden py-5">
      <div className="lt-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-6 items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-baseline gap-2 justify-center lg:justify-start lg:pl-8 lg:border-l border-lt-white/20 lg:first:border-0 lg:first:pl-0"
            >
              <span className="font-title font-bold text-base lg:text-lg text-lt-white leading-none tracking-tight whitespace-nowrap">
                {stat.number}
              </span>
              <span className="text-[9px] lg:text-[10px] text-lt-white/80 font-medium tracking-[0.2em] uppercase whitespace-nowrap">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
