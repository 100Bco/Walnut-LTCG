import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop"
];

export default function Hero() {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-5rem)] lg:min-h-[85vh] lg:h-[85vh] bg-lt-cream flex flex-col lg:flex-row border-b border-lt-line">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center px-6 py-14 sm:px-8 lg:px-16 xl:px-24 z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl w-full relative z-10"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[2px] bg-lt-auburn block"></span>
            <span className="text-lt-onyx font-bold text-[11px] tracking-[0.3em] uppercase">
              Premium Executive Suites
            </span>
          </div>

          <h1 className="lt-display text-lt-onyx mb-8">
            Built For <br />
            <span className="text-lt-auburn">Excellence.</span>
          </h1>

          <p className="lt-lead mb-10 max-w-md">
            Private executive suites, team offices, and on-demand meeting rooms — secured, staffed, and ready to occupy immediately.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-14">
            <a href="#contact" className="lt-btn-primary group">
              Schedule a Tour
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#book" className="lt-btn-outline">
              Reserve a Space
            </a>
          </div>

          <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-[11px] text-lt-onyx/60 font-semibold tracking-widest uppercase">
            <div className="flex items-center gap-3">
              <MapPin size={14} className="text-lt-auburn" />
              Austin, TX
            </div>
            <div className="flex items-center gap-3">
              <Phone size={14} className="text-lt-auburn" />
              (512) 490-6666
            </div>
            <div className="flex items-center gap-3 col-span-2 mt-2">
              <ShieldCheck size={14} className="text-lt-auburn" />
              Secured 24/7 Access
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Image Split */}
      <div className="w-full lg:w-1/2 relative h-[40vh] lg:h-full overflow-hidden bg-lt-onyx">
        <div className="absolute inset-0 bg-lt-onyx/20 z-10"></div>
        <AnimatePresence mode="popLayout">
          <motion.img 
            key={currentImageIdx}
            src={heroImages[currentImageIdx]} 
            alt="Luxury Commercial Space" 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover origin-center"
          />
        </AnimatePresence>
      </div>
    </section>
  );
}
