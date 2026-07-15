import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { SITE_URL, bookingSpaces, siteConfig } from '@/lib/site';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Creates a Stripe Checkout Session for a room reservation and returns the
 * hosted-checkout URL. The card details are entered on Stripe's own page —
 * they never touch this site (PCI-safe).
 *
 * Requires STRIPE_SECRET_KEY in the environment. See .env.example.
 */
export async function POST(req: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json(
      { error: 'Payments are not configured yet. Please contact us to complete your reservation.' },
      { status: 501 },
    );
  }

  let body: {
    spaceId?: string;
    duration?: number;
    name?: string;
    email?: string;
    phone?: string;
    date?: string;
    time?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const space = bookingSpaces.find((s) => s.id === body.spaceId);
  const duration = Math.max(1, Math.min(8, Math.round(Number(body.duration) || 1)));

  if (!space) {
    return NextResponse.json({ error: 'Please choose a valid space.' }, { status: 400 });
  }
  if (!body.email) {
    return NextResponse.json({ error: 'An email address is required.' }, { status: 400 });
  }

  const stripe = new Stripe(secret);
  const origin = req.headers.get('origin') || SITE_URL;
  const when = [body.date, body.time].filter(Boolean).join(' ');

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: body.email,
      line_items: [
        {
          quantity: duration,
          price_data: {
            currency: 'usd',
            unit_amount: space.hourly * 100, // cents, per hour
            product_data: {
              name: `${space.label} — ${siteConfig.name}`,
              description: when
                ? `Reservation on ${when} · ${duration} hour${duration > 1 ? 's' : ''}`
                : `${duration} hour${duration > 1 ? 's' : ''}`,
            },
          },
        },
      ],
      metadata: {
        space: space.label,
        duration: String(duration),
        date: body.date || '',
        time: body.time || '',
        name: body.name || '',
        phone: body.phone || '',
      },
      success_url: `${origin}/?booking=success`,
      cancel_url: `${origin}/?booking=cancelled#book`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json(
      { error: 'We could not start checkout. Please try again or contact us.' },
      { status: 502 },
    );
  }
}
