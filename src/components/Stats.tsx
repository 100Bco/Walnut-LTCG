import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { number: "25k+", label: "Sq Ft of Premium Space" },
    { number: "24/7", label: "Secured access" },
    { number: "5", label: "Suite types" },
    { number: "100%", label: "Move-in ready" },
    { number: "15 min", label: "To central Austin" },
  ];

  return (
    <section className="bg-lt-auburn border-y border-lt-auburn-dark text-lt-white overflow-hidden py-5">
      <div className="lt-container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-6 items-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-baseline gap-2 justify-center lg:justify-start lg:pl-8 lg:border-l border-lt-white/20 lg:first:border-0 lg:first:pl-0"
            >
              <span className="font-title font-extrabold text-base lg:text-lg text-lt-white leading-none tracking-tight">
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
