import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Tenants from '@/components/Tenants';
import Suites from '@/components/Suites';
import Amenities from '@/components/Amenities';
import Terms from '@/components/Terms';
import BookRoom from '@/components/BookRoom';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import { faqs } from '@/lib/faqs';

// FAQ structured data — eligible for FAQ rich results in Google Search.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Tenants />
        <Suites />
        <Amenities />
        <Terms />
        <BookRoom />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
