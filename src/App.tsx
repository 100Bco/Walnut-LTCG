/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Suites from './components/Suites';
import Amenities from './components/Amenities';
import Terms from './components/Terms';
import BookRoom from './components/BookRoom';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-lt-white text-lt-onyx font-sans selection:bg-lt-auburn selection:text-lt-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Suites />
        <Amenities />
        <Terms />
        <BookRoom />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

