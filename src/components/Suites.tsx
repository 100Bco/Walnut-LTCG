'use client';

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Suites() {
  const suites = [
    {
      id: "executive",
      type: "Executive",
      title: "Executive Suite",
      term: "Monthly · Long term",
      desc: "A private, furnished office with 24/7 access and your business address at Walnut.",
      features: [
        "Furnished private office",
        "24/7 secure access",
        "Business mailing address",
        "Conference room credits"
      ],
      price: "$895",
      priceUnit: "/ month",
      cta: "Tour",
      isPopular: true,
      images: [
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1500&auto=format&fit=crop"
      ]
    },
    {
      id: "team",
      type: "Team",
      title: "Team Office",
      term: "Monthly · Yearly",
      desc: "Larger suite for growing teams of 3–10+ with everything needed to operate.",
      features: [
        "Multi-desk private suite",
        "Branded directory listing",
        "Dedicated parking spots",
        "All amenities included"
      ],
      price: "From $2,400",
      priceUnit: "/ mo",
      cta: "Inquire",
      isPopular: false,
      images: [
        "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1500&auto=format&fit=crop"
      ]
    },
    {
      id: "meeting",
      type: "Hourly",
      title: "Meeting Room",
      term: "By the hour · By the day",
      desc: "Conference space for client meetings, interviews, and off-sites. Reserve in real time.",
      features: [
        "Seats up to 12",
        "A/V and display included",
        "Front-desk reception for guests",
        "Complimentary beverages"
      ],
      price: "$45",
      priceUnit: "/ hour",
      cta: "Reserve",
      isPopular: false,
      images: [
        "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1500&auto=format&fit=crop"
      ]
    }
  ];

  const [activeSuiteIdx, setActiveSuiteIdx] = useState(0);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  
  const activeSuite = suites[activeSuiteIdx];

  useEffect(() => {
    setActiveImageIdx(0);
  }, [activeSuiteIdx]);

  const nextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % activeSuite.images.length);
  };
  
  const prevImage = () => {
    setActiveImageIdx((prev) => (prev === 0 ? activeSuite.images.length - 1 : prev - 1));
  };

  return (
    <section id="suites" className="lt-section bg-lt-cream border-t border-lt-line relative text-lt-onyx">
      <div className="lt-container relative z-10">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="lt-eyebrow">Spaces &amp; Suites</div>
          <h2 className="lt-title mb-4">
            Match the space to the work — not the other way around.
          </h2>
          <p className="lt-lead">
            Every suite at Walnut is fully furnished, professionally maintained, and supported by an on-site reception team.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
          
          {/* Active Suite Details (Left) */}
          <div className="w-full lg:w-3/5 group relative bg-lt-auburn text-lt-white overflow-hidden shadow-xl flex flex-col">
            {/* Image Gallery */}
            <div className="relative h-[300px] lg:h-auto lg:flex-1 w-full overflow-hidden bg-lt-auburn min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${activeSuite.id}-${activeImageIdx}`}
                  src={activeSuite.images[activeImageIdx]}
                  alt={activeSuite.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
              </AnimatePresence>
              
              {activeSuite.images.length > 1 && (
                <div className="absolute inset-x-0 bottom-4 flex justify-between items-center px-4 z-20">
                  <div className="flex gap-2">
                    {activeSuite.images.map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => setActiveImageIdx(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${i === activeImageIdx ? 'bg-lt-white' : 'bg-lt-white/30'}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button onClick={prevImage} className="w-10 h-10 flex items-center justify-center bg-lt-onyx/50 hover:bg-lt-onyx text-lt-white backdrop-blur-sm transition-colors border border-lt-white/20">
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextImage} className="w-10 h-10 flex items-center justify-center bg-lt-onyx/50 hover:bg-lt-onyx text-lt-white backdrop-blur-sm transition-colors border border-lt-white/20">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative z-10 w-full p-6 lg:p-8 shrink-0 flex flex-col">
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-title text-3xl lg:text-4xl text-lt-white tracking-tight">{activeSuite.title}</h3>
                  {activeSuite.isPopular && (
                    <div className="bg-lt-onyx text-lt-white px-2 py-1 text-[9px] font-bold tracking-widest uppercase shrink-0">
                      Most Popular
                    </div>
                  )}
                </div>
                
                <div className="text-lt-white/70 text-[10px] tracking-[0.2em] uppercase mb-4 pb-4 border-b border-lt-white/20">
                  {activeSuite.term}
                </div>
                
                <p className="text-base text-lt-white/80 font-light mb-5 leading-relaxed">
                  {activeSuite.desc}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {activeSuite.features.map((feat, i) => (
                    <li key={i} className="text-[12px] text-lt-white/90 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-lt-white/50 shrink-0"></div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-end pt-5 border-t border-lt-white/20">
                <div>
                  <div className="text-[10px] text-lt-white/50 uppercase tracking-widest mb-1">Starting at</div>
                  <div className="font-title text-3xl text-lt-white tracking-tight">
                    {activeSuite.price}<span className="text-[12px] font-sans text-lt-white/60 font-light tracking-normal ml-2">{activeSuite.priceUnit}</span>
                  </div>
                </div>
                <a href="#contact" className="inline-flex items-center justify-center bg-lt-white text-lt-auburn px-6 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-lt-onyx hover:text-lt-white transition-colors group/btn">
                  {activeSuite.cta}
                  <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Suite Selection List (Right) */}
          <div className="w-full lg:w-2/5 flex flex-col gap-3">
            {suites.map((suite, idx) => (
              <button 
                key={suite.id} 
                onClick={() => setActiveSuiteIdx(idx)}
                className={`flex flex-col justify-center text-left p-5 lg:p-6 transition-all duration-300 border flex-1 ${activeSuiteIdx === idx ? 'bg-lt-auburn border-lt-auburn text-lt-white shadow-xl lg:-translate-x-4 relative z-20' : 'bg-lt-white border-transparent text-lt-onyx hover:bg-lt-cream hover:shadow-xl relative z-10'}`}
              >
                <div className="flex w-full justify-between items-center mb-1">
                  <h4 className={`font-title text-xl tracking-tight ${activeSuiteIdx === idx ? 'text-lt-white' : 'text-lt-onyx'}`}>
                    {suite.title}
                  </h4>
                  {activeSuiteIdx === idx && (
                    <ArrowRight size={18} className="text-lt-white" />
                  )}
                </div>
                <div className={`text-[9px] tracking-[0.2em] uppercase mb-2 ${activeSuiteIdx === idx ? 'text-lt-white/60' : 'text-lt-onyx/50'}`}>
                  {suite.term}
                </div>
                <div className={`font-title text-lg tracking-tight ${activeSuiteIdx === idx ? 'text-lt-white' : 'text-lt-onyx/80'}`}>
                  {suite.price}<span className={`text-[11px] font-sans font-light tracking-normal ml-2 ${activeSuiteIdx === idx ? 'text-lt-white/50' : 'text-lt-onyx/50'}`}>{suite.priceUnit}</span>
                </div>
              </button>
            ))}
          </div>

        </div>

        <div className="mt-8 border-l-2 border-lt-auburn bg-lt-cream px-6 py-4 text-sm text-lt-onyx/70">
          Also available:{' '}
          <strong className="font-semibold text-lt-onyx">Day Offices</strong> ·{' '}
          <strong className="font-semibold text-lt-onyx">Virtual Mail Service</strong> ·{' '}
          <strong className="font-semibold text-lt-onyx">Hourly Coworking Desks</strong>
        </div>
      </div>
    </section>
  );
}
