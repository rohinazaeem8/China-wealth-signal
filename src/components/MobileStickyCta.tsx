import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface MobileStickyCtaProps {
  onCtaClick: () => void;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ onCtaClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down 350px
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 shadow-2xl">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="text-xs font-semibold text-white truncate">
            Forbidden China Wealth
          </div>
          <div className="text-[11px] text-amber-400 truncate">
            Official Presentation · 60-Day Guarantee
          </div>
        </div>

        <button
          type="button"
          onClick={onCtaClick}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shrink-0 shadow-sm whitespace-nowrap"
        >
          <span>Watch Free Video</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
