import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Headphones, Sparkles, CheckCircle2 } from 'lucide-react';
import { AudioPreview } from './AudioPreview';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Anti-Pill, Clean unboxed metadata header */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 font-medium mb-4">
          <span className="text-amber-400 font-semibold tracking-wide uppercase">Official Video Briefing</span>
          <span aria-hidden="true">·</span>
          <span>By Leo Brandt (Ex-Telecom Specialist)</span>
          <span aria-hidden="true">·</span>
          <span>5-Minute Daily Morning Routine</span>
        </div>

        {/* Primary Headline & Subheadline */}
        <div className="max-w-3xl mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.15] text-balance">
            The 5-Minute Morning Audio Protocol Uncovered 400 Feet Beneath The Sea
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl">
            An American telecommunications engineer was sent on a confidential deep-sea contract.
            What he accidentally discovered hidden inside a high-security data line sparked a quiet morning sound ritual
            now used to dissolve financial anxiety and reset mental clarity.
          </p>
        </div>

        {/* Hero 2-Column Split: Visual & Interactive Audio Player */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          {/* Left Column: Hero Image with Measured Scrim */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              <img
                src="/src/assets/images/hero_morning_audio_1791876129458.jpg"
                alt="Woman relaxing with headphones and morning coffee while listening to audio protocol"
                referrerPolicy="no-referrer"
                className="w-full h-[320px] sm:h-[400px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-200">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="font-medium">No meditation experience required</span>
                </div>
                <span className="text-neutral-400">5 minutes · 1 pair of headphones · 1 morning habit</span>
              </div>
            </div>
          </div>

          {/* Right Column: Audio Sample Preview & Quick Value Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <AudioPreview onCtaClick={onCtaClick} />

            <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-5 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Why Cold Audiences Watch This 12-Minute Video
              </h3>
              <ul className="space-y-2.5 text-sm text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>The true story behind the offshore platform in the South China Sea</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>How harmonic soundwaves physically regulate the nervous system</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>How to test the 5-minute audio track for 60 risk-free days</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prominent Primary Call-to-Action Bar */}
        <div className="max-w-2xl mx-auto text-center pt-2">
          <button
            type="button"
            onClick={onCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-lg hover:shadow-amber-500/20 active:scale-[0.99] cursor-pointer"
          >
            <span>Watch The Official Free Video Presentation</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="mt-3 text-xs text-neutral-400">
            Proceeding to Leo Brandt's official presentation at <span className="text-neutral-300">theforbiddenchinawealth.com</span>.
            Instant digital access via Digistore24.
          </p>
        </div>

        {/* 4-Column Proof & Trust Strip */}
        <div className="mt-14 pt-8 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
              <Clock className="w-4 h-4" />
              <span className="font-mono font-bold text-lg text-white tabular-nums">5 Min</span>
            </div>
            <p className="text-xs text-neutral-400">Daily Morning Routine</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
              <Headphones className="w-4 h-4" />
              <span className="font-mono font-bold text-lg text-white tabular-nums">432 Hz</span>
            </div>
            <p className="text-xs text-neutral-400">Resonant Sound Frequencies</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-mono font-bold text-lg text-white tabular-nums">60 Days</span>
            </div>
            <p className="text-xs text-neutral-400">100% Money-Back Guarantee</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="font-mono font-bold text-lg text-white tabular-nums">Instant</span>
            </div>
            <p className="text-xs text-neutral-400">100% Digital Download</p>
          </div>
        </div>
      </div>
    </section>
  );
};
