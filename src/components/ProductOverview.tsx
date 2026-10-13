import React from 'react';
import { ArrowRight, ShieldCheck, Download, Gift, CheckCircle2 } from 'lucide-react';

interface ProductOverviewProps {
  onCtaClick: () => void;
}

export const ProductOverview: React.FC<ProductOverviewProps> = ({ onCtaClick }) => {
  return (
    <section id="program" className="py-16 md:py-24 bg-neutral-900/40 border-t border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">
            <span>Product Specifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight text-balance">
            Everything Included In The Digital Program
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            A comprehensive, 100% digital suite designed for immediate download and effortless daily implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          {/* Left Column: Product Mockup Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl">
              <img
                src="/src/assets/images/audio_program_mockup_1791876159391.jpg"
                alt="Forbidden China Wealth digital program mockup on smartphone and headphones"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-neutral-900 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  Instant Digital Access
                </span>
                <span>Compatible with iOS, Android, Mac & PC</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inclusions & Bonuses */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">The Core Program</span>
                <span className="text-xs font-mono text-emerald-400">Master Track</span>
              </div>
              <h3 className="text-xl font-bold text-white">Forbidden China Wealth Audio Track</h3>
              <p className="text-sm text-neutral-300">
                The exact 5-minute mastered recording captured from the 400-foot deep underwater cable in the South China Sea,
                calibrated with 432 Hz harmonic frequencies for daily morning listening.
              </p>
            </div>

            {/* Bonuses */}
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                <Gift className="w-4 h-4" />
                <span>3 Included Digital Bonus Guides ($157 Value)</span>
              </div>

              <div className="space-y-3 divide-y divide-neutral-800/80">
                <div className="pt-2 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Bonus #1: The Wealth Myths You Were Taught</h4>
                    <p className="text-xs text-neutral-400">Uncover the silent financial scripts that subconsciously bottleneck personal income.</p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Bonus #2: The Wealth Blueprint You Were Never Given</h4>
                    <p className="text-xs text-neutral-400">The foundational principles behind scale, asset compounding, and sustainable income.</p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Bonus #3: 3-Day Early Wealth Gameplan</h4>
                    <p className="text-xs text-neutral-400">Practical steps to optimize your mindset routine and register your first early win fast.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 60-Day Guarantee Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-amber-500/30 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <ShieldCheck className="w-9 h-9" />
          </div>
          <div className="space-y-1 text-center sm:text-left flex-1">
            <h4 className="text-lg font-bold text-white">Protected By Digistore24's 60-Day 100% Guarantee</h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              You have a full 60 days to test the Forbidden China Wealth routine in your own life. If you do not feel calmer,
              more focused, and aligned with new opportunities, you can request an instant 100% refund with no hassle.
            </p>
          </div>
          <button
            type="button"
            onClick={onCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
          >
            <span>Proceed to Presentation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
