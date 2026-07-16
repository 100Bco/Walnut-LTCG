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

        {/* 3-up on mobile, then 2 centered below; all five on one row from lg */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8 lg:gap-x-8">
          {tenants.map((tenant) => (
            <div
              key={tenant.src}
              className="flex justify-center basis-1/4 grow-0 lg:basis-0 lg:grow"
            >
              <img
                src={tenant.src}
                alt={tenant.name}
                className={`${tenant.wide ? 'h-8 lg:h-12' : 'h-11 lg:h-20'} w-auto max-w-full object-contain`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
