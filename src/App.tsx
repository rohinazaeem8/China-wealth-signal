/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TrackingInspector } from './components/TrackingInspector';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoryBridge } from './components/StoryBridge';
import { KeyTakeaways } from './components/KeyTakeaways';
import { ProductOverview } from './components/ProductOverview';
import { SocialProof } from './components/SocialProof';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileStickyCta } from './components/MobileStickyCta';
import { LegalModals } from './components/LegalModals';
import { getAffiliateUrl, DEFAULT_AFFILIATE_ID } from './utils/affiliate';
import { ModalType } from './types';

export default function App() {
  const [targetFormat, setTargetFormat] = useState<'vsl' | 'tsl'>('vsl');
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleCtaClick = () => {
    const outboundUrl = getAffiliateUrl(DEFAULT_AFFILIATE_ID, targetFormat);
    // For cold traffic landing pages, direct navigation in the same tab is optimal
    // for mobile browsers and avoids aggressive popup blockers.
    window.location.href = outboundUrl;
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-200">
      {/* Top Affiliate Tracking & Parameter Verifier */}
      <TrackingInspector
        affiliateId={DEFAULT_AFFILIATE_ID}
        targetFormat={targetFormat}
        onFormatChange={setTargetFormat}
      />

      {/* Top Navigation */}
      <Navbar onCtaClick={handleCtaClick} />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        <Hero onCtaClick={handleCtaClick} />
        <StoryBridge onCtaClick={handleCtaClick} />
        <KeyTakeaways onCtaClick={handleCtaClick} />
        <ProductOverview onCtaClick={handleCtaClick} />
        <SocialProof />
        <FaqSection />
        <FinalCta onCtaClick={handleCtaClick} />
      </main>

      {/* Footer with Compliance Statements & Legal Links */}
      <Footer onOpenModal={setActiveModal} />

      {/* Mobile Sticky CTA Bar (Strictly < 15% viewport height cap) */}
      <MobileStickyCta onCtaClick={handleCtaClick} />

      {/* Accessible Policy & Terms Modals */}
      <LegalModals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
