'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/lib/faqs';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="lt-section bg-lt-cream border-t border-lt-line">
      <div className="lt-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          <div className="lg:w-1/3">
            <div className="sticky top-28">
              <div className="lt-eyebrow">Frequently Asked</div>
              <h2 className="lt-title">
                Answers to common questions.
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
