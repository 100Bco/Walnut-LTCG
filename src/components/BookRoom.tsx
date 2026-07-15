'use client';

import { useEffect, useMemo, useState } from 'react';
import { Check, ShieldCheck, Loader2 } from 'lucide-react';
import { bookingSpaces } from '@/lib/site';

const START_TIMES = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM'];

export default function BookRoom() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    spaceId: bookingSpaces[0].id as string,
    date: '',
    time: START_TIMES[0],
    duration: 1,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [message, setMessage] = useState<string | null>(null);
  const [notice, setNotice] = useState<'success' | 'cancelled' | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const b = params.get('booking');
    if (b === 'success' || b === 'cancelled') setNotice(b);
  }, []);

  const space = bookingSpaces.find((s) => s.id === form.spaceId) ?? bookingSpaces[0];
  const total = useMemo(() => space.hourly * form.duration, [space, form.duration]);

  const update = (key: keyof typeof form, value: string | number) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage(null);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.url) {
        window.location.href = data.url as string;
        return;
      }
      setStatus('error');
      setMessage(data.error || 'Something went wrong. Please try again.');
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-lt-cream border border-lt-line rounded-sm text-sm font-medium text-lt-onyx focus:outline-none focus:border-lt-auburn focus:ring-1 focus:ring-lt-auburn transition-all';

  return (
    <section id="book" className="py-16 lg:py-20 bg-lt-onyx text-lt-white relative overflow-hidden border-t border-lt-line">
      <div className="lt-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">

          {/* Left — pitch */}
          <div>
            <div className="lt-eyebrow border-lt-white/30 text-lt-white/90">Real-Time Reservations</div>
            <h2 className="lt-title mb-4 text-lt-white">Need a room — today or next Tuesday?</h2>
            <p className="text-lg text-lt-white/75 font-light leading-relaxed mb-8 max-w-md">
              Reserve a meeting room or day office in real time, pay securely, and you&apos;re set.
              Show up with your laptop and get to work.
            </p>
            <ul className="space-y-3">
              {['Real-time availability', 'Instant confirmation', 'Front-desk reception included'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] text-lt-white/85">
                  <span className="flex h-5 w-5 items-center justify-center bg-lt-auburn/90 shrink-0">
                    <Check size={12} className="text-lt-white" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — reservation form */}
          <div className="bg-lt-white text-lt-onyx p-6 sm:p-8 rounded-sm border-t-4 border-lt-auburn shadow-2xl">
            <h3 className="font-title font-bold text-xl text-lt-onyx mb-1 tracking-tight">Quick Reservation</h3>
            <p className="text-[13px] text-lt-muted mb-6">Pay securely — powered by Stripe.</p>

            {notice === 'success' && (
              <div className="mb-5 rounded-sm border border-lt-auburn/30 bg-lt-auburn/5 px-4 py-3 text-[13px] text-lt-onyx">
                Payment received — your reservation is confirmed. Check your email for details.
              </div>
            )}
            {notice === 'cancelled' && (
              <div className="mb-5 rounded-sm border border-lt-line bg-lt-cream px-4 py-3 text-[13px] text-lt-muted">
                Checkout was cancelled. Your reservation was not charged.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className={inputClass}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className={inputClass}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select
                  value={form.spaceId}
                  onChange={(e) => update('spaceId', e.target.value)}
                  className={`${inputClass} cursor-pointer appearance-none`}
                >
                  {bookingSpaces.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label} — ${s.hourly}/hr
                    </option>
                  ))}
                </select>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => update('date', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select
                  value={form.time}
                  onChange={(e) => update('time', e.target.value)}
                  className={`${inputClass} cursor-pointer appearance-none`}
                >
                  {START_TIMES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <select
                  value={form.duration}
                  onChange={(e) => update('duration', parseInt(e.target.value))}
                  className={`${inputClass} cursor-pointer appearance-none`}
                >
                  {Array.from({ length: 8 }, (_, i) => i + 1).map((h) => (
                    <option key={h} value={h}>{h} hour{h > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between pt-2 pb-1">
                <span className="text-[13px] text-lt-muted uppercase tracking-widest font-semibold">Total</span>
                <span className="font-title font-bold text-2xl text-lt-onyx tracking-tight">${total.toFixed(2)}</span>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="lt-btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  'Reserve & Pay'
                )}
              </button>

              {message && <p className="text-[13px] text-lt-auburn text-center">{message}</p>}

              <p className="flex items-center justify-center gap-1.5 text-[12px] text-lt-muted pt-1">
                <ShieldCheck size={13} className="text-lt-auburn" />
                Card details are handled securely by Stripe.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
