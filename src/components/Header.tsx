import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-lt-white/95 backdrop-blur-md border-b border-lt-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[76px]">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="flex bg-lt-onyx text-lt-white font-title font-bold p-1 w-10 h-10 items-center justify-center group-hover:bg-lt-auburn transition-colors">
              <span className="text-2xl leading-none">L</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-lt-onyx font-title text-[22px] leading-tight font-semibold tracking-wide group-hover:text-lt-auburn transition-colors">LT COMMERCIAL</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#suites" className="text-lt-onyx hover:text-lt-auburn font-medium text-[13px] tracking-widest uppercase transition-colors">Suites</a>
            <a href="#amenities" className="text-lt-onyx hover:text-lt-auburn font-medium text-[13px] tracking-widest uppercase transition-colors">Amenities</a>
            <a href="#book" className="text-lt-onyx hover:text-lt-auburn font-medium text-[13px] tracking-widest uppercase transition-colors">Reserve</a>
            
            <a href="#contact" className="border border-lt-onyx text-lt-onyx px-6 py-2.5 font-medium text-[13px] tracking-widest uppercase hover:bg-lt-onyx hover:text-lt-white transition-all">
              Schedule a Tour
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-lt-onyx p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-lt-white border-b border-lt-line absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#suites" className="block px-3 py-3 text-lt-onyx font-semibold text-base hover:bg-lt-cream rounded-md" onClick={() => setIsOpen(false)}>Suites</a>
            <a href="#amenities" className="block px-3 py-3 text-lt-onyx font-semibold text-base hover:bg-lt-cream rounded-md" onClick={() => setIsOpen(false)}>Amenities</a>
            <a href="#book" className="block px-3 py-3 text-lt-onyx font-semibold text-base hover:bg-lt-cream rounded-md" onClick={() => setIsOpen(false)}>Reserve a Space</a>
            <a href="#faq" className="block px-3 py-3 text-lt-onyx font-semibold text-base hover:bg-lt-cream rounded-md" onClick={() => setIsOpen(false)}>FAQ</a>
            <div className="pt-4 pb-2">
              <a href="#contact" className="block w-full text-center bg-lt-auburn text-lt-white px-6 py-3 rounded-sm font-semibold tracking-wide" onClick={() => setIsOpen(false)}>
                Schedule a Tour
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
