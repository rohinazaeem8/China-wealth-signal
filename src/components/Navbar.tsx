import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          <span>Forbidden China Wealth</span>
        </a>

        {/* Zone 2: 4 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a href="#story" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            The Story
          </a>
          <a href="#frequency" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            The Frequency
          </a>
          <a href="#program" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            What's Inside
          </a>
          <a href="#faq" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Questions
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onCtaClick}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            <span>Watch Presentation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
