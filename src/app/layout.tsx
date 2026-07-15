import type { Metadata, Viewport } from 'next';
import { Hind } from 'next/font/google';
import { SITE_URL, siteConfig } from '@/lib/site';
import './globals.css';

// LTCG brand typeface (per the official mockup) — used for body and headings.
const hind = Hind({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-hind',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'LT Commercial Group — Executive Suites at Walnut Park, Austin',
    template: '%s | LT Commercial Group',
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'business',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: SITE_URL,
    siteName: siteConfig.name,
    title: 'LT Commercial Group — Executive Suites at Walnut Park, Austin',
    description: siteConfig.description,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'LT Commercial Group — Executive Suites at Walnut Park, Austin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LT Commercial Group — Executive Suites at Walnut Park, Austin',
    description: siteConfig.description,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/ltcg-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#AA2129',
  colorScheme: 'light',
};

// Structured data helps Google and AI crawlers understand the business.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': `${SITE_URL}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  slogan: siteConfig.tagline,
  description: siteConfig.description,
  url: SITE_URL,
  logo: `${SITE_URL}/ltcg-icon.png`,
  image: `${SITE_URL}/og.png`,
  telephone: siteConfig.telephone,
  email: siteConfig.email,
  priceRange: '$$',
  areaServed: { '@type': 'City', name: 'Austin, Texas' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={hind.variable}>
      <body className="min-h-screen bg-lt-white text-lt-onyx font-sans antialiased selection:bg-lt-auburn selection:text-lt-white">
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
