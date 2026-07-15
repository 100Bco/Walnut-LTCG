import { Building2, DoorOpen, Coffee, Sparkles, Car, Lock, Video, Wifi, Mail } from 'lucide-react';

const amenities = [
  { icon: Building2, title: 'Conference Rooms', desc: 'Multiple sizes, A/V equipped, bookable in real time.' },
  { icon: DoorOpen, title: 'Private Offices', desc: 'Furnished, lockable, and ready for individuals or teams.' },
  { icon: Coffee, title: 'Stocked Kitchen', desc: 'Coffee, tea, filtered water, and a clean, modern break area.' },
  { icon: Sparkles, title: 'Modern Restrooms', desc: 'Clean, well-maintained facilities throughout the building.' },
  { icon: Car, title: 'On-Site Parking', desc: 'Ample parking for tenants and visiting clients.' },
  { icon: Lock, title: 'Gated Property', desc: 'Controlled-access entry. Your space stays your space.' },
  { icon: Video, title: 'Cameras & Alarms', desc: '24/7 monitored security throughout the property.' },
  { icon: Wifi, title: 'Business WiFi', desc: 'Fast, secure, business-class internet on every floor.' },
  { icon: Mail, title: 'Business Address', desc: 'Use Walnut Park Crossing as your professional mailing address.' },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-12 lg:py-16 bg-lt-cream text-lt-onyx border-t border-lt-line">
      <div className="lt-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 lg:mb-10">
          <div className="max-w-xl">
            <div className="lt-eyebrow">What&apos;s Included</div>
            <h2 className="lt-title">What this means for your day-to-day.</h2>
          </div>
          <p className="lt-lead md:text-right text-base">
            A complete amenity set so the property handles the operational overhead — and your team handles the work.
          </p>
        </div>

        {/* Grid — 9 amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {amenities.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-lt-white border border-lt-line p-6 transition-colors hover:border-lt-auburn"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center border-l-2 border-lt-auburn bg-lt-auburn/10 text-lt-auburn">
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="font-title text-lg font-bold text-lt-onyx mb-1.5 tracking-tight">{title}</h3>
              <p className="text-[13px] text-lt-onyx/65 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
