import { Building2, DoorOpen, Coffee, Car, Lock, Video, Wifi, Mail } from 'lucide-react';

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 lg:py-24 bg-lt-cream text-lt-onyx border-t border-lt-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="text-lt-auburn font-bold text-[11px] tracking-[0.3em] uppercase mb-4 pb-2 border-b-2 border-lt-auburn inline-block">What's Included</div>
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] text-lt-onyx font-title font-extrabold leading-[1.02] tracking-tight uppercase mb-6">
            EVERYTHING <br />
            <span className="text-lt-onyx/40">YOU NEED.</span>
          </h2>
          <p className="text-lg text-lt-onyx/80 font-light max-w-2xl leading-relaxed">
            A complete amenity set so the property handles the operational overhead — and your team handles the work.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6 auto-rows-[220px] md:auto-rows-[240px] lg:auto-rows-[280px]">
          
          {/* 1. Conference Rooms (Large Image) */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-lt-onyx flex flex-col justify-end p-6 lg:p-8">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
              alt="Conference Room" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="relative z-10 text-lt-white">
              <Building2 size={32} className="mb-4 text-lt-cream" strokeWidth={1.5} />
              <h3 className="font-title text-2xl lg:text-3xl font-bold mb-2 tracking-tight">Conference Rooms</h3>
              <p className="text-white/80 font-light max-w-sm text-sm lg:text-base leading-relaxed">Multiple sizes, A/V equipped, bookable in real time.</p>
            </div>
          </div>

          {/* 2. Private Offices (Tall Image) */}
          <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden bg-lt-auburn flex flex-col justify-end p-6 lg:p-8">
            <img 
              src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80" 
              alt="Private Office" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="relative z-10 text-lt-white">
              <DoorOpen size={28} className="mb-4 text-lt-cream" strokeWidth={1.5} />
              <h3 className="font-title text-xl lg:text-2xl font-bold mb-2 leading-tight tracking-tight">Private Offices</h3>
              <p className="text-white/80 font-light text-[13px] lg:text-sm leading-relaxed">Furnished, lockable, and ready for individuals or teams.</p>
            </div>
          </div>

          {/* 3. Stocked Kitchen */}
          <div className="md:col-span-1 md:row-span-1 bg-lt-white border border-lt-line p-6 lg:p-8 flex flex-col justify-center group hover:border-lt-auburn transition-colors">
            <Coffee size={26} className="mb-4 text-lt-auburn group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="font-title text-lg lg:text-xl font-bold mb-2 text-lt-onyx tracking-tight">Stocked Kitchen</h3>
            <p className="text-lt-onyx/70 font-light text-[13px] leading-relaxed">Coffee, tea, filtered water, and a modern break area.</p>
          </div>

          {/* 4. Business WiFi */}
          <div className="md:col-span-1 md:row-span-1 bg-lt-auburn text-lt-white p-6 lg:p-8 flex flex-col justify-center group">
            <Wifi size={26} className="mb-4 text-lt-cream group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="font-title text-lg lg:text-xl font-bold mb-2 tracking-tight">Business WiFi</h3>
            <p className="text-white/80 font-light text-[13px] leading-relaxed">Fast, secure, business-class internet on every floor.</p>
          </div>

          {/* 5. On-Site Parking (Wide Image) */}
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-lt-onyx flex flex-col justify-center p-6 lg:p-8">
            <img 
              src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80" 
              alt="Parking" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
            <div className="relative z-10 text-lt-white w-full md:w-2/3">
              <Car size={28} className="mb-3 text-lt-cream" strokeWidth={1.5} />
              <h3 className="font-title text-xl lg:text-2xl font-bold mb-2 tracking-tight">On-Site Parking</h3>
              <p className="text-white/80 font-light text-[13px] lg:text-sm leading-relaxed">Ample parking for tenants and visiting clients.</p>
            </div>
          </div>

          {/* 6. Security & Access */}
          <div className="md:col-span-1 md:row-span-1 bg-lt-onyx text-lt-white p-6 lg:p-8 flex flex-col justify-center group">
            <div className="flex gap-3 mb-4 text-lt-cream">
              <Video size={26} strokeWidth={1.5} />
              <Lock size={26} strokeWidth={1.5} />
            </div>
            <h3 className="font-title text-lg lg:text-xl font-bold mb-2 tracking-tight">24/7 Security</h3>
            <p className="text-white/80 font-light text-[13px] leading-relaxed">Gated property with monitored cameras and alarms.</p>
          </div>

          {/* 7. Business Address */}
          <div className="md:col-span-1 md:row-span-1 bg-lt-white border border-lt-line p-6 lg:p-8 flex flex-col justify-center group hover:border-lt-auburn transition-colors">
            <Mail size={26} className="mb-4 text-lt-auburn group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="font-title text-lg lg:text-xl font-bold mb-2 text-lt-onyx tracking-tight">Business Address</h3>
            <p className="text-lt-onyx/70 font-light text-[13px] leading-relaxed">Use Walnut Park as your professional mailing address.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
