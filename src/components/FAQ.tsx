import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "What's the minimum lease term?",
      a: "There is no minimum. Reserve a meeting room by the hour, take a day office for a week, or sign a multi-year lease for a team suite. Choose what fits your business."
    },
    {
      q: "How is the building secured?",
      a: "The property is gated with controlled access, monitored 24/7 by security cameras, and protected by an alarm system. Tenants on monthly suites also receive 24/7 access credentials."
    },
    {
      q: "How does pricing work?",
      a: "Pricing scales with the floor plan you choose, the suite size, and which services you use — meeting rooms, virtual mail, parking add-ons. Request a custom quote and we'll walk you through the numbers."
    },
    {
      q: "Can I use the address as my business address?",
      a: "Yes. Suite tenants automatically receive a professional Walnut Park Crossing business address. Virtual Mail plans are available for remote businesses that just want the address and mail handling."
    },
    {
      q: "Is parking included?",
      a: "Yes. The property has on-site parking for tenants and their guests. Team office plans include dedicated reserved spots."
    },
    {
      q: "Can I tour the property before committing?",
      a: "We recommend it. Schedule a tour and we'll walk you through available suites, conference rooms, and amenities so you can decide whether Walnut is the right fit."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-20 bg-lt-cream border-t border-lt-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="text-lt-auburn font-bold text-[11px] tracking-[0.3em] uppercase mb-6 pb-3 border-b-2 border-lt-auburn inline-block">Frequently Asked</div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] text-lt-onyx font-title font-extrabold leading-[1.05] tracking-tight uppercase">
                DETAILS & <br />
                <span className="text-lt-onyx/40">ANSWERS.</span>
              </h2>
            </div>
          </div>

          <div className="lg:w-2/3 border-t border-lt-line">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border-b border-lt-line py-8 cursor-pointer group"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <div className="flex justify-between items-start gap-8">
                  <div className="flex gap-6 items-start">
                    <span className="font-title font-bold text-sm text-lt-onyx/40 mt-1">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-title font-bold text-2xl text-lt-onyx tracking-tight group-hover:text-lt-auburn transition-colors">
                      {faq.q}
                    </h3>
                  </div>
                  <div className="text-lt-onyx/50 group-hover:text-lt-auburn transition-colors mt-1">
                    {openIdx === idx ? <Minus size={24} strokeWidth={1.5} /> : <Plus size={24} strokeWidth={1.5} />}
                  </div>
                </div>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${openIdx === idx ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base text-lt-onyx/70 font-light leading-relaxed pl-12 pr-12">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
