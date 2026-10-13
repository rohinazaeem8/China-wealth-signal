import React, { useState, useEffect } from 'react';
import { Copy, Check, ExternalLink, Link2, Settings2 } from 'lucide-react';
import { getAffiliateUrl, getActiveUrlParameters } from '../utils/affiliate';

interface TrackingInspectorProps {
  affiliateId: string;
  targetFormat: 'vsl' | 'tsl';
  onFormatChange: (format: 'vsl' | 'tsl') => void;
}

export const TrackingInspector: React.FC<TrackingInspectorProps> = ({
  affiliateId,
  targetFormat,
  onFormatChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeParams, setActiveParams] = useState<Record<string, string>>({});

  useEffect(() => {
    setActiveParams(getActiveUrlParameters());
  }, []);

  const currentUrl = getAffiliateUrl(affiliateId, targetFormat);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-b border-neutral-800 bg-neutral-900/60 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-neutral-400">
          <Link2 className="w-3.5 h-3.5 text-amber-400" />
          <span>Affiliate Tracking:</span>
          <code className="text-amber-400 bg-neutral-950 px-1.5 py-0.5 rounded border border-neutral-800">
            aff={affiliateId}
          </code>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline text-neutral-400">
            Target: {targetFormat.toUpperCase()} ({targetFormat === 'vsl' ? 'Video' : 'Text'})
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <Settings2 className="w-3.5 h-3.5" />
          <span>{isOpen ? 'Hide Tracking Details' : 'Verify Link & UTMs'}</span>
        </button>
      </div>

      {isOpen && (
        <div className="p-4 bg-neutral-950 border-t border-neutral-800 space-y-3">
          <div className="max-w-4xl mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-semibold text-neutral-300">Live Outbound Link:</span>
              <div className="flex items-center gap-2">
                <span className="text-neutral-400">Destination:</span>
                <button
                  type="button"
                  onClick={() => onFormatChange('vsl')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                    targetFormat === 'vsl' ? 'bg-amber-400 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  VSL (Video)
                </button>
                <button
                  type="button"
                  onClick={() => onFormatChange('tsl')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                    targetFormat === 'tsl' ? 'bg-amber-400 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  TSL (Text)
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 bg-neutral-900 rounded-lg border border-neutral-800 overflow-x-auto font-mono text-[11px] text-amber-300">
              <span className="truncate flex-1 select-all">{currentUrl}</span>
              <button
                type="button"
                onClick={copyToClipboard}
                className="p-1.5 text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded transition-colors shrink-0"
                title="Copy Link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <a
                href={currentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded transition-colors shrink-0"
                title="Open in new tab to test"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="text-[11px] text-neutral-400">
              <span className="font-medium text-neutral-300">Captured Incoming Parameters: </span>
              {Object.keys(activeParams).length === 0 ? (
                <span className="text-neutral-500">None detected (standard direct visit). When Facebook Ads append UTMs (e.g. ?utm_source=facebook&fbclid=...), they are automatically preserved and forwarded.</span>
              ) : (
                <div className="flex flex-wrap gap-2 mt-1">
                  {Object.entries(activeParams).map(([key, val]) => (
                    <span key={key} className="bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded text-neutral-300">
                      {key}: <span className="text-amber-400">{val}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
