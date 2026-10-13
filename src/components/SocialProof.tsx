import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Michael T.',
    location: 'Nevada',
    role: 'Operations Supervisor',
    quote: 'I had been working 60-hour weeks under heavy stress and felt completely stuck. Within a week of making this sound track my 5-minute morning routine, the mental fog lifted. I walked into meetings with steady confidence and was unexpectedly offered a departmental leadership role.',
    verified: true,
  },
  {
    name: 'Linda M.',
    location: 'Colorado',
    role: 'Independent Consultant',
    quote: 'I was skeptical about listening to an audio frequency, but the calm it creates in the morning is undeniable. My shoulder tension melted away, and I stopped procrastinating on difficult client outreach. Two long-stalled contracts signed within 10 days.',
    verified: true,
  },
  {
    name: 'James L.',
    location: 'Ohio',
    role: 'Small Business Owner',
    quote: 'The biggest shift wasn’t just financial; it was my relationship with stress. Instead of waking up with a racing heart calculating bills, I spend 5 minutes with my coffee listening. My focus is laser-sharp and our monthly revenue hit its highest mark all year.',
    verified: true,
  },
];

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">
            <span>Verified Customer Stories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight text-balance">
            Real Experiences From Daily Listeners
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Authentic experiences from individuals who replaced morning worry with 5 minutes of focused resonance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.name}
              className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 text-neutral-600" />
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Clean unboxed metadata with typographic separators */}
              <div className="pt-6 mt-6 border-t border-neutral-800/80">
                <div className="text-sm font-semibold text-white">{item.name}</div>
                <div className="flex items-center gap-2 text-xs text-neutral-400 mt-0.5">
                  <span>{item.role}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400">Verified User</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-neutral-500 max-w-xl mx-auto">
            *Testimonials reflect real user experiences submitted to the creator. Individual results vary depending on daily consistency, mindset, and personal circumstances.
          </p>
        </div>
      </div>
    </section>
  );
};
