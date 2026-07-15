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
    <section className="bg-lt-white border-b border-lt-line py-14 lg:py-16">
      <div className="lt-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border-l-2 border-lt-auburn pl-5"
            >
              <div className="font-title font-bold text-4xl lg:text-5xl text-lt-auburn leading-none tracking-tight whitespace-nowrap">
                {stat.number}
              </div>
              <div className="mt-3 text-sm text-lt-muted font-medium leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
