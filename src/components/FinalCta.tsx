import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onCtaClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onCtaClick }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden border-t border-neutral-800">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Next Step: Official Video Presentation</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-2xl mx-auto text-balance">
          Discover The 5-Minute Morning Protocol Today
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed">
          Watch Leo Brandt's full briefing on the South China Sea discovery and learn how this daily acoustic routine can quiet financial anxiety.
        </p>

        <div className="pt-4 max-w-md mx-auto space-y-3">
          <button
            type="button"
            onClick={onCtaClick}
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-xl hover:shadow-amber-500/20 active:scale-[0.99] cursor-pointer"
          >
            <span>Watch The Free Presentation Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Guaranteed by Digistore24 · 60-Day Money-Back Policy</span>
          </div>
        </div>
      </div>
    </section>
  );
};
