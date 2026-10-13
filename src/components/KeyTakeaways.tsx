import React from 'react';
import { ArrowRight, Brain, Zap, Coffee, Check } from 'lucide-react';

interface KeyTakeawaysProps {
  onCtaClick: () => void;
}

export const KeyTakeaways: React.FC<KeyTakeawaysProps> = ({ onCtaClick }) => {
  return (
    <section id="frequency" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">
            <span>The Science of Daily Resonance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight text-balance">
            Why 5 Minutes In The Morning Shifts Your Entire Day
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Most people spend their mornings reacting to frantic emails, alarms, and mental worry.
            This protocol replaces chaos with structured acoustic alignment.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Dissolves Scarcity Brain Fog</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Persistent financial anxiety puts the brain in chronic fight-or-flight, narrowing peripheral perception.
                Harmonic sound frequencies stimulate relaxed alpha and theta brain rhythms, dampening background stress loops.
              </p>
            </div>
            <div className="pt-6 border-t border-neutral-800/80 text-xs text-neutral-400 flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-amber-400" />
              <span>Restores cognitive calm & focus</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Seamless 5-Minute Morning Habit</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                No hour-long meditation marathons, no chanting, and no complex manuals.
                Simply pop in regular earphones while having your morning tea or coffee, hit play, and listen for five minutes.
              </p>
            </div>
            <div className="pt-6 border-t border-neutral-800/80 text-xs text-neutral-400 flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-amber-400" />
              <span>Fits any busy daily schedule</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Sharpened Intuition & Awareness</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                When your internal mental chatter quiets down, you notice high-value opportunities, negotiate with grounded confidence,
                and make decisive choices that previously felt overwhelming.
              </p>
            </div>
            <div className="pt-6 border-t border-neutral-800/80 text-xs text-neutral-400 flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-amber-400" />
              <span>Enhanced decision clarity</span>
            </div>
          </div>
        </div>

        {/* Mid-Page Conversion Banner */}
        <div className="text-center">
          <button
            type="button"
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md active:scale-[0.99] cursor-pointer"
          >
            <span>Learn How The Frequency Works in The Video</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="mt-2 text-xs text-neutral-400">
            Free informational presentation · Instant playback · No credit card required to watch
          </p>
        </div>
      </div>
    </section>
  );
};
