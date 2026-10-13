export interface TrackingParams {
  aff: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  [key: string]: string | undefined;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  location: string;
  role: string;
  quote: string;
  verified: boolean;
}

export type ModalType = 'privacy' | 'terms' | 'disclosure' | 'contact' | null;
