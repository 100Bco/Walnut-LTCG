import { ArrowRight } from 'lucide-react';

export default function Terms() {
  const terms = [
    {
      title: "Hourly",
      label: "Meeting Rooms",
      desc: "Reserve a conference room or day office by the hour. No commitment.",
      highlight: false
    },
    {
      title: "Monthly",
      label: "Most Flexible",
      desc: "Month-to-month executive suites and team offices. Cancel or scale anytime.",
      highlight: true
    },
    {
      title: "Yearly",
      label: "Best Value",
      desc: "Annual lease at a preferred rate. Lock in your space and your pricing.",
      highlight: false
    },
    {
      title: "Long-Term",
      label: "Multi-Year",
      desc: "Custom multi-year terms for established businesses needing stability.",
      highlight: false
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-lt-white border-t border-lt-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-12 lg:mb-16">
          <div className="text-lt-auburn font-bold text-[11px] tracking-[0.3em] uppercase mb-8 pb-3 border-b-2 border-lt-auburn inline-block">Flexible Terms</div>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] text-lt-onyx font-title font-extrabold leading-[1.02] tracking-tight uppercase mb-6">
            PAY FOR THE SPACE YOU USE
          </h2>
          <p className="text-xl text-lt-onyx/80 font-light max-w-2xl leading-relaxed">
            From a single hour to a multi-year lease. Pricing scales with floor plan, suite size, and service usage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-lt-line">
          {terms.map((term, idx) => (
            <div 
              key={idx} 
              className={`p-10 transition-all duration-500 border-r border-b hover:bg-lt-cream group ${term.highlight ? 'border-lt-auburn bg-lt-cream/50 relative' : 'border-lt-line'}`}
            >
              {term.highlight && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-lt-auburn text-lt-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 shadow-sm">
                  MOST FLEXIBLE
                </div>
              )}
              <h4 className="font-title text-[32px] text-lt-onyx mb-1 tracking-tight group-hover:text-lt-auburn transition-colors">{term.title}</h4>
              <div className="text-[10px] text-lt-onyx/50 tracking-[0.2em] uppercase mb-8">{term.label}</div>
              <p className="text-[15px] text-lt-onyx/80 font-light leading-relaxed">{term.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 lg:p-12 bg-lt-cream border border-lt-line flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1 max-w-2xl">
            <h4 className="font-title text-4xl text-lt-onyx mb-3 tracking-tight">Want a Custom Quote?</h4>
            <p className="text-lg text-lt-onyx/70 font-light">Tell us about your team and we'll match you to the right suite at the right price.</p>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center bg-lt-onyx text-lt-white px-10 py-5 text-[11px] font-bold tracking-widest uppercase hover:bg-lt-auburn transition-all shrink-0 w-full md:w-auto shadow-xl group">
            Request Pricing
            <ArrowRight size={16} className="ml-4 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
