import React from 'react';
import { X, Shield, FileText, AlertCircle, Mail } from 'lucide-react';
import { ModalType } from '../types';

interface LegalModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-neutral-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {activeModal === 'privacy' && <Shield className="w-5 h-5 text-amber-400" />}
            {activeModal === 'terms' && <FileText className="w-5 h-5 text-amber-400" />}
            {activeModal === 'disclosure' && <AlertCircle className="w-5 h-5 text-amber-400" />}
            {activeModal === 'contact' && <Mail className="w-5 h-5 text-amber-400" />}

            <h3 className="text-base font-bold text-white capitalize">
              {activeModal === 'privacy' && 'Privacy Policy'}
              {activeModal === 'terms' && 'Terms of Service'}
              {activeModal === 'disclosure' && 'FTC & Affiliate Disclosure'}
              {activeModal === 'contact' && 'Contact Support'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-neutral-300 leading-relaxed">
          {activeModal === 'privacy' && (
            <>
              <p>
                <strong>Effective Date:</strong> October 2026.
              </p>
              <p>
                Your privacy is paramount to us. This Privacy Policy outlines how information is gathered, managed, and safeguarded when interacting with this informational landing page.
              </p>
              <h4 className="text-white font-semibold pt-2">1. Information We Do Not Collect</h4>
              <p>
                We do not collect, store, or sell any personal identifying information, phone numbers, or credit card information on this landing page. When you choose to purchase the product, your transaction is securely processed by the vendor’s designated merchant, Digistore24.
              </p>
              <h4 className="text-white font-semibold pt-2">2. Analytics and Advertising Cookies</h4>
              <p>
                We may utilize standard non-identifying analytics tools and Meta (Facebook) advertising pixels to assess campaign performance and deliver relevant educational advertisements. These cookies record technical attributes such as browser type, time spent on page, and referrer parameters.
              </p>
              <h4 className="text-white font-semibold pt-2">3. External Links</h4>
              <p>
                This website includes hyperlinks directing to third-party web domains, specifically the official product presentation at theforbiddenchinawealth.com. We urge you to review the privacy policies of any third-party website you visit.
              </p>
            </>
          )}

          {activeModal === 'terms' && (
            <>
              <p>
                <strong>Terms & Conditions of Use</strong>
              </p>
              <p>
                By viewing and utilizing this bridge landing page, you signify your assent to these terms.
              </p>
              <h4 className="text-white font-semibold pt-2">1. Informational & Bridge Purpose</h4>
              <p>
                This website functions as an independent affiliate promotional review and introductory bridge page for "Forbidden China Wealth." The creators of this page are independent marketing partners and do not own the underlying trademark or proprietary audio engineering files.
              </p>
              <h4 className="text-white font-semibold pt-2">2. Disclaimer of Financial and Medical Advice</h4>
              <p>
                The materials presented on this site and the referenced presentation are for educational, cognitive wellness, and entertainment purposes only. They do not constitute financial, investment, legal, or psychological advice. Individual results vary significantly based on personal effort, dedication, and individual life circumstances.
              </p>
              <h4 className="text-white font-semibold pt-2">3. Product Guarantee</h4>
              <p>
                The official product is sold through Digistore24 and carries a 60-day money-back guarantee subject to Digistore24 terms and conditions.
              </p>
            </>
          )}

          {activeModal === 'disclosure' && (
            <>
              <p>
                <strong>Federal Trade Commission (FTC) & Advertising Disclosure</strong>
              </p>
              <p>
                In compliance with the FTC guidelines and Meta Advertising Policies, please assume that any links leading to products or services on this landing page are affiliate links.
              </p>
              <h4 className="text-white font-semibold pt-2">What Does This Mean?</h4>
              <p>
                If you click on our link (containing affiliate tracking parameter <code className="text-amber-400 bg-neutral-950 px-1 py-0.5 rounded">aff=mubariz0</code>) and subsequently elect to purchase the "Forbidden China Wealth" program on Digistore24, we may receive a commission payment from the vendor.
              </p>
              <h4 className="text-white font-semibold pt-2">No Extra Cost To You</h4>
              <p>
                This commission is paid directly by the product vendor and does not increase your cost in any way. In fact, following our links ensures you receive access to the discounted $39 pricing and all three complimentary bonus guides offered on the official presentation.
              </p>
              <h4 className="text-white font-semibold pt-2">Meta / Facebook Platform Disclaimer</h4>
              <p>
                This site is NOT a part of the Meta / Facebook website or Meta Platforms, Inc. Additionally, this site is NOT endorsed by Meta / Facebook in any way. FACEBOOK is a trademark of Meta Platforms, Inc.
              </p>
            </>
          )}

          {activeModal === 'contact' && (
            <>
              <p>
                <strong>Customer Support & Inquiries</strong>
              </p>
              <p>
                For customer support regarding your order, access credentials, or refund requests, please contact Digistore24 or the official vendor support:
              </p>
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2 text-xs">
                <div>
                  <span className="text-neutral-400">Digistore24 Order Support: </span>
                  <span className="text-amber-400 font-medium">support@digistore24.com</span>
                </div>
                <div>
                  <span className="text-neutral-400">Vendor Inquiries: </span>
                  <span className="text-amber-400 font-medium">contact@theforbiddenchinawealth.com</span>
                </div>
                <div>
                  <span className="text-neutral-400">Affiliate Inquiry Representative: </span>
                  <span className="text-neutral-200">mubariz0 (Digistore24 Partner)</span>
                </div>
              </div>
              <p className="text-xs text-neutral-400">
                Customer support representatives are available Monday through Friday and typically respond within 24 business hours.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950/60 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
