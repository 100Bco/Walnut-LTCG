import { ArrowRight, Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-lt-auburn text-lt-white relative overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-lt-white/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] border border-lt-white/10 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
          
          <div className="max-w-4xl">
            <div className="text-lt-white font-bold text-[11px] tracking-[0.3em] uppercase mb-8 pb-3 border-b-2 border-lt-white/30 inline-block">
              Take the next step
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-[100px] font-title font-extrabold leading-[0.95] tracking-tight uppercase mb-8 text-lt-white">
              WALK THROUGH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">THE SPACE.</span>
            </h2>
            <p className="text-lg lg:text-xl text-lt-white/80 font-light max-w-xl leading-relaxed">
              Most decisions are made in the first ten minutes of a tour. See how Walnut Park Crossing can elevate your daily operations.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 w-full lg:w-auto shrink-0">
            <a href="#" className="w-full sm:w-auto inline-flex items-center justify-between lg:justify-center bg-lt-white text-lt-auburn px-12 py-5 font-bold tracking-widest text-xs uppercase hover:bg-lt-cream transition-all shadow-2xl group">
              Schedule a Tour
              <ArrowRight size={18} className="ml-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="tel:5124906666" className="w-full sm:w-auto inline-flex items-center justify-between lg:justify-center bg-transparent border border-lt-white/50 text-lt-white px-12 py-5 font-medium tracking-widest text-xs uppercase hover:bg-lt-white/10 transition-colors">
              <Phone size={16} className="mr-4 lg:mr-3" />
              (512) 490-6666
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
