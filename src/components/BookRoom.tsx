import React, { useState } from 'react';
import { Calendar, Clock, CreditCard, CheckCircle2, ChevronLeft, Users, Wifi, ShieldCheck, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BookRoom() {
  const [step, setStep] = useState(0);
  const [space, setSpace] = useState('meeting');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('09:00');
  const [duration, setDuration] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const spacesList = [
    {
      id: 'desk',
      title: 'Desks',
      priceStr: 'starting at $15/day',
      price: 15,
      unit: 'day',
      capacity: '1 Person',
      desc: 'Single day rates for desks and shared spaces set by our partner locations to ensure the best available price.',
      img: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1000&auto=format&fit=crop',
      btn: 'Find a desk'
    },
    {
      id: 'meeting',
      title: 'Meeting Rooms',
      priceStr: 'Starting at $5/hr',
      price: 5,
      unit: 'hour',
      capacity: 'Up to 12',
      desc: 'Hourly and daily rates for meeting rooms, conference rooms, event spaces, training rooms, phone booths and more.',
      img: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1000&auto=format&fit=crop',
      btn: 'Find a meeting room'
    },
    {
      id: 'office',
      title: 'Offices',
      priceStr: 'starting at $50/day',
      price: 50,
      unit: 'day',
      capacity: '1-4 People',
      desc: 'Short- and longer-term private office options with private amenities for full- and partial day use.',
      img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop',
      btn: 'Find an office'
    }
  ];

  const currentSpace = spacesList.find(s => s.id === space) || spacesList[1];
  const subtotal = currentSpace.price * duration;
  const taxes = subtotal * 0.0825; // Texas tax rate approx
  const total = subtotal + taxes;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else if (step === 2) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setStep(3);
      }, 2000);
    }
  };

  const selectSpace = (id: string) => {
    setSpace(id);
    setStep(1);
  };

  return (
    <section id="book" className="lt-section bg-lt-white relative overflow-hidden border-t border-lt-line">
      <div className="lt-container relative z-10">

        {step === 0 && (
          <div>
            <div className="text-center mb-14 max-w-5xl mx-auto">
              <div className="lt-eyebrow">Real-Time Reservations</div>
              <h2 className="lt-title mb-6">
                NO HIDDEN FEES. NO COMMITMENT. <br />
                <span className="text-lt-onyx/40">NO MEMBERSHIPS.</span>
              </h2>
              <p className="lt-lead mx-auto text-center">
                Select your space, choose a date and time, and check out. It’s that simple.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {spacesList.map((s) => (
                <div key={s.id} className="flex flex-col text-center group border border-lt-line p-4 pb-8 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl bg-lt-cream">
                  <div className="aspect-[4/3] mb-8 overflow-hidden bg-lt-line relative">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="font-title font-bold text-3xl text-lt-onyx mb-3 tracking-tight">{s.title}</h3>
                  <p className="text-[14px] text-lt-onyx/70 font-light mb-8 flex-1 px-6 leading-relaxed">{s.desc}</p>
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => selectSpace(s.id)}
                      className="lt-btn-primary mb-4 w-full max-w-[240px]"
                    >
                      {s.btn}
                    </button>
                    <span className="text-lt-onyx/50 font-bold text-[11px] tracking-widest uppercase">{s.priceStr}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step > 0 && (
          <div className="bg-lt-cream shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-lt-line max-w-5xl mx-auto">
            {/* Left Column - Summary */}
            <div className="w-full lg:w-2/5 bg-lt-white border-r border-lt-line p-8 lg:p-10 flex flex-col">
              <div className="flex items-center mb-8">
                <button type="button" onClick={() => setStep(0)} className="mr-4 text-lt-onyx/50 hover:text-lt-auburn transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <h3 className="font-title text-[22px] text-lt-onyx tracking-tight">Booking Summary</h3>
              </div>
              
              <div className="aspect-[4/3] overflow-hidden mb-8 bg-lt-line">
                <img src={currentSpace.img} alt={currentSpace.title} className="w-full h-full object-cover mix-blend-multiply opacity-90" />
              </div>

              <div className="flex-1">
                <h4 className="font-title text-3xl text-lt-onyx mb-2">{currentSpace.title}</h4>
                <p className="text-[14px] text-lt-onyx/70 font-light mb-8">Professional {currentSpace.title.toLowerCase()} configured for immediate use.</p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-center text-[14px] text-lt-onyx/80 font-light">
                    <Users size={16} className="text-lt-onyx/50 mr-4" />
                    Capacity: {currentSpace.capacity}
                  </div>
                  <div className="flex items-center text-[14px] text-lt-onyx/80 font-light">
                    <Monitor size={16} className="text-lt-onyx/50 mr-4" />
                    A/V & Display Included
                  </div>
                  <div className="flex items-center text-[14px] text-lt-onyx/80 font-light">
                    <Wifi size={16} className="text-lt-onyx/50 mr-4" />
                    High-Speed Business WiFi
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-lt-line">
                <div className="flex justify-between text-[14px] text-lt-onyx/70 font-light mb-3">
                  <span>${currentSpace.price} × {duration} {currentSpace.unit}{duration > 1 ? 's' : ''}</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[14px] text-lt-onyx/70 font-light mb-6">
                  <span>Taxes & Fees</span>
                  <span>${taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-title text-lt-onyx">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Right Column - Flow */}
            <div className="w-full lg:w-3/5 p-8 lg:p-12 relative bg-lt-cream">
              <AnimatePresence mode="wait">
                
                {/* STEP 1: Details */}
                {step === 1 && (
                  <motion.form 
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleNext}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-title font-bold text-2xl text-lt-onyx tracking-tight">Select Time</h3>
                      <div className="text-sm font-bold text-lt-muted uppercase tracking-widest">Step 1 of 2</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-lt-onyx uppercase tracking-wider mb-2">Date</label>
                        <div className="relative">
                          <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-lt-muted" />
                          <input 
                            type="date" 
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full pl-12 pr-4 py-3.5 bg-lt-cream border border-lt-line rounded-sm text-sm font-medium focus:outline-none focus:border-lt-auburn focus:ring-1 focus:ring-lt-auburn transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-lt-onyx uppercase tracking-wider mb-2">Start Time</label>
                        <div className="relative">
                          <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-lt-muted" />
                          <select 
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full pl-12 pr-4 py-3.5 bg-lt-cream border border-lt-line rounded-sm text-sm font-medium focus:outline-none focus:border-lt-auburn focus:ring-1 focus:ring-lt-auburn transition-all appearance-none cursor-pointer"
                          >
                            <option value="09:00">09:00 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="13:00">01:00 PM</option>
                            <option value="14:00">02:00 PM</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-lt-onyx uppercase tracking-wider mb-2">Duration ({currentSpace.unit}s)</label>
                      <input 
                        type="range" 
                        min="1" max="8" 
                        value={duration}
                        onChange={(e) => setDuration(parseInt(e.target.value))}
                        className="w-full h-2 bg-lt-line rounded-lg appearance-none cursor-pointer accent-lt-auburn"
                      />
                      <div className="flex justify-between text-xs font-bold text-lt-muted mt-2">
                        <span>1 {currentSpace.unit}</span>
                        <span>8 {currentSpace.unit}s</span>
                      </div>
                    </div>

                    <div className="pt-6">
                      <button type="submit" className="w-full bg-lt-auburn text-lt-white py-4 rounded-sm font-bold tracking-widest uppercase hover:bg-lt-auburn-dark transition-all">
                        Continue to Payment
                      </button>
                    </div>
                  </motion.form>
                )}

                {/* STEP 2: Payment */}
                {step === 2 && (
                  <motion.form 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleNext}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center">
                        <button type="button" onClick={() => setStep(1)} className="mr-4 text-lt-muted hover:text-lt-auburn transition-colors">
                          <ChevronLeft size={24} />
                        </button>
                        <h3 className="font-title font-bold text-2xl text-lt-onyx tracking-tight">Checkout</h3>
                      </div>
                      <div className="text-sm font-bold text-lt-muted uppercase tracking-widest">Step 2 of 2</div>
                    </div>

                    <div className="space-y-4">
                      <label className="block text-sm font-bold text-lt-onyx uppercase tracking-wider">Contact Details</label>
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" required placeholder="First Name" className="w-full px-4 py-3 bg-lt-cream border border-lt-line rounded-sm text-sm font-medium focus:outline-none focus:border-lt-auburn focus:ring-1 focus:ring-lt-auburn transition-all" />
                        <input type="text" required placeholder="Last Name" className="w-full px-4 py-3 bg-lt-cream border border-lt-line rounded-sm text-sm font-medium focus:outline-none focus:border-lt-auburn focus:ring-1 focus:ring-lt-auburn transition-all" />
                      </div>
                      <input type="email" required placeholder="Email Address" className="w-full px-4 py-3 bg-lt-cream border border-lt-line rounded-sm text-sm font-medium focus:outline-none focus:border-lt-auburn focus:ring-1 focus:ring-lt-auburn transition-all" />
                    </div>

                    <div className="space-y-4 pt-4 border-t border-lt-line">
                      <label className="block text-sm font-bold text-lt-onyx uppercase tracking-wider flex items-center justify-between">
                        <span>Payment Method</span>
                        <div className="flex gap-2">
                          <div className="w-8 h-5 bg-lt-line rounded-sm"></div>
                          <div className="w-8 h-5 bg-lt-line rounded-sm"></div>
                        </div>
                      </label>
                      <div className="relative">
                        <CreditCard size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-lt-muted" />
                        <input type="text" required placeholder="Card Number" className="w-full pl-12 pr-4 py-3 bg-lt-cream border border-lt-line rounded-sm text-sm font-medium focus:outline-none focus:border-lt-auburn focus:ring-1 focus:ring-lt-auburn transition-all" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" required placeholder="MM / YY" className="w-full px-4 py-3 bg-lt-cream border border-lt-line rounded-sm text-sm font-medium focus:outline-none focus:border-lt-auburn focus:ring-1 focus:ring-lt-auburn transition-all" />
                        <input type="text" required placeholder="CVC" className="w-full px-4 py-3 bg-lt-cream border border-lt-line rounded-sm text-sm font-medium focus:outline-none focus:border-lt-auburn focus:ring-1 focus:ring-lt-auburn transition-all" />
                      </div>
                    </div>

                    <div className="pt-6">
                      <button 
                        type="submit" 
                        disabled={isProcessing}
                        className="w-full bg-lt-auburn text-lt-white py-4 rounded-sm font-bold tracking-widest uppercase hover:bg-lt-auburn-dark transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                      >
                        {isProcessing ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          `Pay $${total.toFixed(2)}`
                        )}
                      </button>
                      <div className="text-center mt-4 flex items-center justify-center text-xs text-lt-muted font-medium">
                        <ShieldCheck size={14} className="mr-1.5 text-lt-auburn" />
                        Payments are secure and encrypted
                      </div>
                    </div>
                  </motion.form>
                )}

                {/* STEP 3: Success */}
                {step === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-lt-auburn/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} className="text-lt-auburn" />
                    </div>
                    <h3 className="font-title font-bold text-3xl text-lt-onyx tracking-tight mb-4">Booking Confirmed!</h3>
                    <p className="text-lt-muted font-medium mb-8 max-w-sm">
                      Your reservation for the {currentSpace.title} on {date || 'the selected date'} has been confirmed. We've sent the details to your email.
                    </p>
                    <button 
                      onClick={() => { setStep(0); setDate(''); }}
                      className="border-2 border-lt-onyx text-lt-onyx px-8 py-3 rounded-sm font-bold tracking-widest uppercase hover:bg-lt-onyx hover:text-lt-white transition-all"
                    >
                      Return to Spaces
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

