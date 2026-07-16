import { tenants } from '@/lib/tenants';

export default function Tenants() {
  if (tenants.length === 0) return null;

  return (
    <section id="tenants" className="bg-lt-white border-b border-lt-line py-12 lg:py-16">
      <div className="lt-container">
        <div className="text-center mb-10">
          <div className="lt-eyebrow">Our Tenants</div>
          <p className="text-base text-lt-onyx/70 font-light">
            Businesses that lease and grow at Walnut Park Crossing.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14 lg:gap-x-16">
          {tenants.map((tenant) => (
            <img
              key={tenant.src}
              src={tenant.src}
              alt={tenant.name}
              className="h-9 lg:h-11 w-auto object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
