import { Building2, DoorOpen, Coffee, Car, Lock, Video, Wifi, Mail } from 'lucide-react';

export default function Amenities() {
  return (
    <section id="amenities" className="py-10 lg:py-12 bg-lt-cream text-lt-onyx border-t border-lt-line">
      <div className="lt-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 lg:mb-8">
          <div className="max-w-xl">
            <div className="lt-eyebrow">What&apos;s Included</div>
            <h2 className="lt-title">
              EVERYTHING <span className="text-lt-onyx/40">YOU NEED.</span>
            </h2>
          </div>
          <p className="lt-lead md:text-right text-base">
            A complete amenity set so the property handles the operational overhead — and your team handles the work.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 auto-rows-[150px] md:auto-rows-[160px] lg:auto-rows-[178px]">
          
          {/* 1. Conference Rooms (Large Image) */}
          <div className="col-span-2 md:row-span-2 relative group overflow-hidden bg-lt-onyx flex flex-col justify-end p-5 lg:p-7">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
              alt="Conference Room" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="relative z-10 text-lt-white">
              <Building2 size={28} className="mb-3 text-lt-cream" strokeWidth={1.5} />
              <h3 className="font-title text-xl lg:text-2xl font-bold mb-1.5 tracking-tight">Conference Rooms</h3>
              <p className="text-white/80 font-light max-w-sm text-[13px] lg:text-sm leading-relaxed">Multiple sizes, A/V equipped, bookable in real time.</p>
            </div>
          </div>

          {/* 2. Private Offices (Tall Image) */}
          <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden bg-lt-auburn flex flex-col justify-end p-5 lg:p-6">
            <img 
              src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80" 
              alt="Private Office" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="relative z-10 text-lt-white">
              <DoorOpen size={26} className="mb-3 text-lt-cream" strokeWidth={1.5} />
              <h3 className="font-title text-xl lg:text-2xl font-bold mb-2 leading-tight tracking-tight">Private Offices</h3>
              <p className="text-white/80 font-light text-[13px] lg:text-sm leading-relaxed">Furnished, lockable, and ready for individuals or teams.</p>
            </div>
          </div>

          {/* 3. Stocked Kitchen */}
          <div className="md:col-span-1 md:row-span-1 bg-lt-white border border-lt-line p-5 lg:p-6 flex flex-col justify-center group hover:border-lt-auburn transition-colors">
            <Coffee size={24} className="mb-3 text-lt-auburn group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="font-title text-lg lg:text-xl font-bold mb-2 text-lt-onyx tracking-tight">Stocked Kitchen</h3>
            <p className="text-lt-onyx/70 font-light text-[13px] leading-relaxed">Coffee, tea, filtered water, and a modern break area.</p>
          </div>

          {/* 4. Business WiFi */}
          <div className="md:col-span-1 md:row-span-1 bg-lt-auburn text-lt-white p-5 lg:p-6 flex flex-col justify-center group">
            <Wifi size={24} className="mb-3 text-lt-cream group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="font-title text-lg lg:text-xl font-bold mb-2 tracking-tight">Business WiFi</h3>
            <p className="text-white/80 font-light text-[13px] leading-relaxed">Fast, secure, business-class internet on every floor.</p>
          </div>

          {/* 5. On-Site Parking (Wide Image) */}
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-lt-onyx flex flex-col justify-center p-5 lg:p-6">
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
          <div className="md:col-span-1 md:row-span-1 bg-lt-onyx text-lt-white p-5 lg:p-6 flex flex-col justify-center group">
            <div className="flex gap-3 mb-4 text-lt-cream">
              <Video size={26} strokeWidth={1.5} />
              <Lock size={26} strokeWidth={1.5} />
            </div>
            <h3 className="font-title text-lg lg:text-xl font-bold mb-2 tracking-tight">24/7 Security</h3>
            <p className="text-white/80 font-light text-[13px] leading-relaxed">Gated property with monitored cameras and alarms.</p>
          </div>

          {/* 7. Business Address */}
          <div className="md:col-span-1 md:row-span-1 bg-lt-white border border-lt-line p-5 lg:p-6 flex flex-col justify-center group hover:border-lt-auburn transition-colors">
            <Mail size={24} className="mb-3 text-lt-auburn group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="font-title text-lg lg:text-xl font-bold mb-2 text-lt-onyx tracking-tight">Business Address</h3>
            <p className="text-lt-onyx/70 font-light text-[13px] leading-relaxed">Use Walnut Park as your professional mailing address.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
