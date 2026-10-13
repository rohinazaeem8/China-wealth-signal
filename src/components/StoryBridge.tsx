import React from 'react';
import { ArrowRight, Compass, Waves, Radio, Shield } from 'lucide-react';

interface StoryBridgeProps {
  onCtaClick: () => void;
}

export const StoryBridge: React.FC<StoryBridgeProps> = ({ onCtaClick }) => {
  return (
    <section id="story" className="py-16 md:py-24 bg-neutral-900/40 border-y border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">
            <span>The Discovery Behind The Sound</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight text-balance">
            How A Telecom Diagnostic Scan Turned Into A Worldwide Mindset Movement
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Before it was packaged into an easy 5-minute daily track, this sound frequency was never intended for the public.
          </p>
        </div>

        {/* Narrative Step Cards - Bento Grid Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Compass className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-neutral-400">Phase 01 · The Offshore Contract</div>
            <h3 className="text-lg font-bold text-white">An Unexpected Journey to the South China Sea</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              After spending a decade as a communications specialist in Beijing, engineer Leo Brandt was contracted
              to diagnose a failing data line located on a remote deep-water platform. Accompanied by high-level executives,
              the mission was strictly classified under standard non-disclosure terms.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Waves className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-neutral-400">Phase 02 · 400 Feet Underwater</div>
            <h3 className="text-lg font-bold text-white">A Signal That Wasn't Telecommunications</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Tracing the diagnostic feedback 400 feet down, Leo realized the line was not transmitting phone calls or data packets.
              It was broadcasting an unceasing, mathematically tuned acoustic resonance. His diagnostic equipment recorded
              a pristine test segment directly from the source.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Radio className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-neutral-400">Phase 03 · The Personal Test</div>
            <h3 className="text-lg font-bold text-white">5 Minutes That Quietly Cleared The Noise</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Facing the quiet desperation of unpaid bills and medical stress at home, Leo put on his headphones and listened.
              Instead of frantic panic, a wave of calm focus settled in. His nervous system relaxed, mental fatigue dissolved,
              and he began operating with sharp confidence and renewed opportunity awareness.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Shield className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-neutral-400">Phase 04 · The Public Release</div>
            <h3 className="text-lg font-bold text-white">Secured via Digistore24 With Full Protection</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Today, this exact harmonic track is provided in a convenient 5-minute digital format.
              Delivered instantly to your phone or computer, it includes a full 60-day money-back guarantee, allowing anyone
              to test its calming, focus-enhancing effects in their morning routine with zero risk.
            </p>
          </div>
        </div>

        {/* Story CTA Callout */}
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-neutral-900 to-neutral-900/60 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Curious to Hear the Complete Breakdown?</h4>
            <p className="text-sm text-neutral-300 max-w-xl">
              Leo Brandt recorded a free 12-minute video presentation explaining the exact acoustic mechanics and how to use it every morning.
            </p>
          </div>
          <button
            type="button"
            onClick={onCtaClick}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
          >
            <span>See The Full Story In The Video</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
