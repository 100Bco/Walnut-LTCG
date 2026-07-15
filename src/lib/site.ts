/**
 * Central site configuration.
 *
 * Set NEXT_PUBLIC_SITE_URL to your production domain (e.g.
 * https://www.ltcommercialgroup.com) in the deployment environment so that
 * canonical URLs, the sitemap, robots.txt and Open Graph tags all point at
 * the right place. It falls back to localhost for local development.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'http://localhost:3000';

export const siteConfig = {
  name: 'LT Commercial Group',
  shortName: 'LTCG',
  legalName: 'LT Commercial Group',
  tagline: 'Where Insight Meets Opportunity',
  description:
    'Private executive suites, team offices, and on-demand meeting rooms at Walnut Park Crossing, Austin — secured, staffed, and move-in ready. Flexible terms from hourly to multi-year.',
  url: SITE_URL,
  ogImage: `${SITE_URL}/og.png`,
  locale: 'en_US',
  telephone: '+1-512-490-6666',
  telephoneDisplay: '(512) 490-6666',
  email: 'leasing@ltcommercialgroup.com',
  address: {
    street: '12516 Walnut Park Crossing, Ste. 200',
    city: 'Austin',
    region: 'TX',
    postalCode: '78753',
    country: 'US',
  },
  geo: {
    latitude: 30.3896,
    longitude: -97.6803,
  },
  keywords: [
    'executive suites Austin',
    'office space Austin TX',
    'private office rental',
    'meeting room rental Austin',
    'coworking Austin',
    'team offices',
    'commercial real estate Austin',
    'Walnut Park Crossing',
    'LT Commercial Group',
    'virtual business address Austin',
  ],
} as const;

/**
 * Bookable spaces + hourly rates (USD) used to build the Stripe Checkout
 * session. Adjust rates here; the charged amount is rate × duration (hours).
 */
export const bookingSpaces = [
  { id: 'meeting-room', label: 'Meeting Room', hourly: 45 },
  { id: 'day-office', label: 'Day Office', hourly: 35 },
  { id: 'conference-room', label: 'Conference Room', hourly: 75 },
] as const;

export type BookingSpaceId = (typeof bookingSpaces)[number]['id'];
