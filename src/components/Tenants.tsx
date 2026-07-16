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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 items-center">
          {tenants.map((tenant) => (
            <div key={tenant.src} className="flex justify-center">
              <img
                src={tenant.src}
                alt={tenant.name}
                className="h-11 lg:h-14 w-auto max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
