import React from 'react';
import { ModalType } from '../types';

interface FooterProps {
  onOpenModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-400 py-12 pb-24 md:pb-14 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Top row: Brand & Legal Navigation */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-neutral-800/80">
          <div className="font-bold text-sm text-white">
            Forbidden China Wealth
          </div>

          <div className="flex flex-wrap items-center gap-5 text-neutral-400">
            <button
              type="button"
              onClick={() => onOpenModal('privacy')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-neutral-700">·</span>
            <button
              type="button"
              onClick={() => onOpenModal('terms')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-neutral-700">·</span>
            <button
              type="button"
              onClick={() => onOpenModal('disclosure')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              FTC Disclosure
            </button>
            <span className="text-neutral-700">·</span>
            <button
              type="button"
              onClick={() => onOpenModal('contact')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Contact Support
            </button>
          </div>
        </div>

        {/* Policy & Compliance Disclaimers */}
        <div className="space-y-4 leading-relaxed text-neutral-500">
          <p>
            <strong className="text-neutral-400">FTC Affiliate Compensation Disclosure:</strong> This website is an independent informational review and promotional bridge page. Please be advised that we maintain an affiliate relationship with the vendor and may receive a referral commission if you complete a purchase through links on this page (processed securely via Digistore24). This commission incurs absolutely zero additional cost to you and ensures you receive the special presentation rate.
          </p>

          <p>
            <strong className="text-neutral-400">Meta / Facebook Platform Notice:</strong> This website is NOT part of the Facebook website, Instagram, or Meta Platforms, Inc. Additionally, this website is NOT endorsed by Meta Platforms, Inc. in any manner. FACEBOOK and INSTAGRAM are registered trademarks of Meta Platforms, Inc.
          </p>

          <p>
            <strong className="text-neutral-400">Health & Financial Disclaimer:</strong> The stories, case studies, and insights shared on this page and the linked presentation are illustrative of individual experiences. Individual results will vary based on personal effort, consistency, and circumstances. This product does not guarantee specific monetary gain, career promotions, or medical cures and does not replace professional financial, legal, or medical advice.
          </p>

          <p>
            <strong className="text-neutral-400">Merchant Disclosure:</strong> Digistore24 is the authorized merchant of record for products listed on this page. Digistore24’s role as retailer does not constitute an endorsement, approval, or review of the claims presented.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-neutral-900 text-center text-neutral-600">
          <p>© 2026 Forbidden China Wealth Bridge. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
