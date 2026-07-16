import { Building2, DoorOpen, Coffee, Sparkles, Car, Lock, Video, Wifi, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Variant = 'image' | 'card' | 'dark' | 'auburn';

interface Amenity {
  title: string;
  desc: string;
  icon: LucideIcon;
  variant: Variant;
  img?: string;
  span: string;
}

const amenities: Amenity[] = [
  {
    title: 'Conference Rooms',
    desc: 'Multiple sizes, A/V equipped, bookable in real time.',
    icon: Building2,
    variant: 'image',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    span: 'md:col-span-2 lg:row-span-2',
  },
  {
    title: 'Private Offices',
    desc: 'Furnished, lockable, and ready for individuals or teams.',
    icon: DoorOpen,
    variant: 'image',
    img: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80',
    span: 'lg:row-span-2',
  },
  {
    title: 'Stocked Kitchen',
    desc: 'Coffee, tea, filtered water, and a clean, modern break area.',
    icon: Coffee,
    variant: 'card',
    span: '',
  },
  {
    title: 'Modern Restrooms',
    desc: 'Clean, well-maintained facilities throughout the building.',
    icon: Sparkles,
    variant: 'card',
    span: '',
  },
  {
    title: 'On-Site Parking',
    desc: 'Ample parking for tenants and visiting clients.',
    icon: Car,
    variant: 'image',
    img: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80',
    span: 'md:col-span-2',
  },
  {
    title: 'Gated Property',
    desc: 'Controlled-access entry. Your space stays your space.',
    icon: Lock,
    variant: 'card',
    span: '',
  },
  {
    title: 'Cameras & Alarms',
    desc: '24/7 monitored security throughout the property.',
    icon: Video,
    variant: 'dark',
    span: '',
  },
  {
    title: 'Business WiFi',
    desc: 'Fast, secure, business-class internet on every floor.',
    icon: Wifi,
    variant: 'auburn',
    span: 'md:col-span-2',
  },
  {
    title: 'Business Address',
    desc: 'Use Walnut Park Crossing as your professional mailing address.',
    icon: Mail,
    variant: 'card',
    span: 'md:col-span-2',
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-12 lg:py-16 bg-lt-onyx text-lt-white border-t border-lt-onyx-deep">
      <div className="lt-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 lg:mb-10">
          <div className="max-w-xl">
            <div className="lt-eyebrow">What&apos;s Included</div>
            <h2 className="lt-title text-lt-white">What this means for your day-to-day.</h2>
          </div>
          <p className="lt-lead md:text-right text-base text-lt-white/70">
            A complete amenity set so the property handles the operational overhead — and your team handles the work.
          </p>
        </div>

        {/* Bento grid — 9 amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 md:auto-rows-[minmax(170px,auto)] lg:auto-rows-[185px] grid-flow-row-dense">
          {amenities.map(({ title, desc, icon: Icon, variant, img, span }) => {
            if (variant === 'image') {
              return (
                <div
                  key={title}
                  className={`group relative overflow-hidden bg-lt-onyx flex flex-col justify-end p-5 lg:p-7 min-h-[200px] md:min-h-0 ${span}`}
                >
                  {img && (
                    <img
                      src={img}
                      alt={title}
                      className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="relative z-10 text-lt-white">
                    <Icon size={26} className="mb-3 text-lt-cream" strokeWidth={1.5} />
                    <h3 className="font-title text-xl lg:text-2xl font-bold mb-1.5 tracking-tight">{title}</h3>
                    <p className="text-white/80 font-light text-[13px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              );
            }

            if (variant === 'auburn') {
              return (
                <div key={title} className={`bg-lt-auburn text-lt-white p-5 lg:p-6 flex flex-col justify-center ${span}`}>
                  <Icon size={24} className="mb-3 text-lt-cream" strokeWidth={1.5} />
                  <h3 className="font-title text-lg lg:text-xl font-bold mb-1 tracking-tight">{title}</h3>
                  <p className="text-white/85 font-light text-[13px] leading-relaxed">{desc}</p>
                </div>
              );
            }

            // 'card' and 'dark' both render as a hairline-bordered dark tile
            return (
              <div
                key={title}
                className={`group bg-lt-onyx-deep border border-lt-white/10 p-5 lg:p-6 flex flex-col justify-center transition-colors hover:border-lt-auburn ${span}`}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center border-l-2 border-lt-auburn bg-lt-auburn/20 text-lt-auburn">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="font-title text-lg font-bold text-lt-white mb-1 tracking-tight">{title}</h3>
                <p className="text-[13px] text-lt-white/60 leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
