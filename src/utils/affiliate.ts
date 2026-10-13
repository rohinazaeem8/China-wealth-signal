/**
 * Utility for handling the Digistore24 affiliate link and tracking parameters
 */

export const DEFAULT_AFFILIATE_ID = 'mubariz0';
export const BASE_VSL_URL = 'https://theforbiddenchinawealth.com/vsl';
export const BASE_TSL_URL = 'https://theforbiddenchinawealth.com/tsl';

/**
 * Builds the outbound affiliate link, preserving any incoming UTMs and query params
 */
export function getAffiliateUrl(affiliateId = DEFAULT_AFFILIATE_ID, target: 'vsl' | 'tsl' = 'vsl'): string {
  if (typeof window === 'undefined') {
    return target === 'vsl'
      ? `${BASE_VSL_URL}#aff=${affiliateId}`
      : `${BASE_TSL_URL}#aff=${affiliateId}`;
  }

  const currentParams = new URLSearchParams(window.location.search);
  const baseUrl = target === 'vsl' ? BASE_VSL_URL : BASE_TSL_URL;

  // If there are search parameters from ads (utm_source, fbclid, etc.), attach them as query parameters
  const queryStr = currentParams.toString();
  const urlWithQuery = queryStr ? `${baseUrl}?${queryStr}` : baseUrl;

  // Digistore24 hash affiliate format as provided: #aff=mubariz0
  return `${urlWithQuery}#aff=${affiliateId}`;
}

/**
 * Parses and returns active URL parameters for debugging and verification
 */
export function getActiveUrlParameters(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params: Record<string, string> = {};
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.forEach((val, key) => {
    params[key] = val;
  });
  return params;
}
