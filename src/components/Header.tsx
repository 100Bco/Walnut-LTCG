'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#suites', label: 'Suites' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#book', label: 'Reserve' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-lt-line bg-lt-white/90 backdrop-blur-md">
      <div className="lt-container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo — LT Commercial Group */}
          <a href="#" className="group flex items-center gap-3" aria-label="LT Commercial Group — home">
            <img
              src="/ltcg-icon.png"
              alt="LT Commercial Group"
              className="h-11 w-auto"
              width={125}
              height={173}
            />
            <span className="flex flex-col leading-none">
              <span className="font-title text-[17px] font-extrabold uppercase tracking-tight text-lt-onyx transition-colors group-hover:text-lt-auburn">
                LT Commercial
              </span>
              <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.28em] text-lt-auburn">
                Group
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-widest text-lt-onyx transition-colors hover:text-lt-auburn"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="border border-lt-onyx px-6 py-2.5 text-[13px] font-medium uppercase tracking-widest text-lt-onyx transition-all hover:bg-lt-onyx hover:text-lt-white"
            >
              Schedule a Tour
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="p-2 text-lt-onyx lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute w-full border-b border-lt-line bg-lt-white shadow-xl lg:hidden">
          <div className="lt-container py-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-3 text-base font-semibold text-lt-onyx hover:bg-lt-cream"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="#contact"
                  className="block w-full bg-lt-auburn px-6 py-3 text-center text-sm font-bold uppercase tracking-widest text-lt-white"
                  onClick={() => setIsOpen(false)}
                >
                  Schedule a Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
