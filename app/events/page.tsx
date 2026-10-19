import type { Metadata } from 'next';  
import Link from 'next/link';  
import { Suspense } from 'react';  
import EventLedger from '@/components/EventLedger';

export const metadata: Metadata = {  
  title: 'The Event Ledger — NexVoyage Collective',  
  description:  
    "Curated access to the season's most significant gatherings — from the gridiron to the stage.",  
};

type EventCategory =  
  | 'automotive'  
  | 'maritime'  
  | 'culinary'  
  | 'music'  
  | 'sporting'   
  | 'leadership'   
  | 'hbcus'  
  | 'expedition'  
  | 'wellness'  
  | 'fashion'  
  | 'film'  
  | 'lifestyle'  
  | 'religious'  
  | 'seasonal';

interface ScheduleItem {  
  date: string;  
  location: string;  
}

interface EventItem {  
  date: string;  
  title: string;  
  location: string;  
  subtitle?: string;  
  description?: string;  
  category: EventCategory;  
  featured?: boolean;  
  schedule?: ScheduleItem[];  
}

const CTA_URL =  
  'https://cal.com/nexvoyagecollective/discovery-call';

const ALL_EVENTS: EventItem[] = [  
  // AUTOMOTIVE & PRESTIGE MOTORING

  {  
    category: 'automotive',  
    date: 'May 21–23, 2027',  
    title: "Concorso d'Eleganza Villa d'Este",  
    location: 'Lake Como, Italy',  
    subtitle: 'Collector Automotive & Design Event',  
    description:  
      'A collector-focused automotive gathering paired with Grand Hotel Villa d’Este or Mandarin Oriental, Lake Como, private movement, lakeside dining, and a refined Como design corridor.',  
  },  
  {  
    category: 'automotive',  
    date: 'August 15, 2027',  
    title: "Pebble Beach Concours d'Elegance 2027",  
    location: 'Pebble Beach, California',  
    subtitle: 'Premier Vintage Automotive Showcase',  
    description:  
      'A landmark collector event paired with Post Ranch Inn or The Lodge at Pebble Beach, private movement, concours access, and a Big Sur extension.',  
  },  
  {  
    category: 'automotive',  
    date: 'January 29–30, 2027',  
    title: 'The I.C.E. St. Moritz 2027',  
    location: 'St. Moritz, Switzerland',  
    subtitle: 'International Concours of Elegance',  
    description:  
      "An automotive showcase on the frozen lake, paired with Badrutt's Palace or The Chedi Andermatt.",  
  },  
  {  
    category: 'automotive',  
    date: 'February 3–7, 2027',  
    title: 'Rétromobile 2027',  
    location: 'Paris Expo, Paris, France',  
    subtitle: 'Historic Vehicle Showcase',  
    description:  
      "A Paris collector itinerary centered on historic automobiles, private dining, and the city's design and luxury corridors. Sanctuary pairing: Ritz Paris or Le Bristol.",  
  },  
  {  
    category: 'automotive',  
    date: 'July 15–18, 2027',  
    title: 'Goodwood Festival of Speed',  
    location: 'West Sussex, United Kingdom',  
    subtitle: 'British Motorsport & Prestige Motoring',  
    description:  
      'A landmark summer gathering for collectors, motorsport principals, founders, and families moving through the British social calendar.',  
  },  
  {  
    category: 'automotive',
