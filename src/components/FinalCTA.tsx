import { ArrowRight, Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contact" className="lt-section bg-lt-auburn text-lt-white relative overflow-hidden">

      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-lt-white/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] border border-lt-white/10 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="lt-container relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">

          <div className="max-w-4xl">
            <div className="mb-6 inline-block border-b-2 border-lt-white/30 pb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-lt-white">
              Take the next step
            </div>
            <h2 className="lt-display mb-8 text-lt-white">
              WALK THROUGH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">THE SPACE.</span>
            </h2>
            <p className="lt-lead max-w-xl text-lt-white/80">
              Most decisions are made in the first ten minutes of a tour. See how Walnut Park Crossing can elevate your daily operations.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full lg:w-auto shrink-0">
            <a href="#" className="lt-btn-light w-full justify-between lg:w-auto lg:justify-center group">
              Schedule a Tour
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:5124906666" className="lt-btn w-full justify-between border border-lt-white/50 text-lt-white hover:bg-lt-white/10 lg:w-auto lg:justify-center">
              <Phone size={16} />
              (512) 490-6666
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
