import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

const FAQS: FaqItem[] = [
  {
    question: 'What exactly is Forbidden China Wealth?',
    answer:
      'Forbidden China Wealth is a 5-minute digital audio routine based on an acoustic frequency recorded by telecommunications engineer Leo Brandt. It is designed to be played once each morning through headphones to encourage mental calm, dissolve financial anxiety, and promote sharp focus.',
  },
  {
    question: 'How long is the video presentation, and is it free to watch?',
    answer:
      'The presentation is 100% free to view. It takes approximately 12 to 15 minutes to watch and walks through the entire background story, the deep-sea cable discovery, the science of acoustic entrainment, and how ordinary listeners apply the 5-minute habit.',
  },
  {
    question: 'Do I need expensive headphones or audio equipment?',
    answer:
      'Not at all. Any standard pair of earbuds or over-ear headphones connected to your phone, tablet, or computer works perfectly. You only need to listen at a moderate, comfortable volume for 5 minutes each morning.',
  },
  {
    question: 'Is this a physical package or a digital download?',
    answer:
      'It is 100% digital. Immediately after confirming your order on Digistore24, you receive instant member access. You can listen directly in your browser or download the audio tracks and digital bonus guides to any device.',
  },
  {
    question: 'What is the refund policy if I am not satisfied?',
    answer:
      'Every order is backed by an unconditional 60-day 100% money-back guarantee via Digistore24. If you don’t feel a noticeable positive shift in your morning focus and stress levels, you can simply email support for a complete refund without hassle.',
  },
  {
    question: 'How is payment processed and secured?',
    answer:
      'Transactions are handled directly by Digistore24, a globally recognized digital platform using bank-grade 256-bit SSL encryption to ensure your personal and payment details remain completely secure and private.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-neutral-900/40 border-t border-neutral-800/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Common Inquiries Before Watching
          </h2>
          <p className="mt-3 text-sm text-neutral-300">
            Clear, transparent answers to help you prepare before viewing the official presentation.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-800 bg-neutral-900 transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 text-white hover:text-amber-300 font-medium text-sm sm:text-base cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
