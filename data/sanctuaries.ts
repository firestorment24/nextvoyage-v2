export interface Bucket {  
  id: string;  
  name: string;  
  count: number;  
  description: string;  
}

export interface Sanctuary {  
  id: string;  
  name: string;  
  loc: string;  
  tag: string;  
  img: string; // For the Index Page  
  heroImage: string; // For the Dossier  
  philosophy: string;  
  roi: string;  
  atmosphere: string;  
  highlights: string[];  
  buckets: Bucket[];  
}

export const SANCTUARY_DATA: Record<string, Sanctuary> = {  
  stadium: {  
    id: 'stadium',  
    name: 'The Stadium',  
    loc: 'Global / Multi-Site',  
    tag: 'Athletic Grandeur',  
    img: 'https://cdn.marblism.com/DO6EekfUdUH.webp',  
    heroImage: 'https://cdn.marblism.com/DO6EekfUdUH.webp',  
    philosophy: 'Performance-driven luxury designed for the elite athlete and spectator alike.',  
    roi: 'High-yield event-based revenue streams.',  
    atmosphere: 'High-octane, disciplined, and expansive.',  
    highlights: ['Olympic-grade facilities', 'Private viewing suites', 'Recovery lounges'],  
    buckets: [  
      { id: 'track-field', name: 'Track & Field', count: 4, description: 'Elite training grounds.' },  
      { id: 'aquatics', name: 'Aquatics', count: 2, description: 'Olympic-standard pools.' }  
    ]  
  },  
  cinematic: {  
    id: 'cinematic',  
    name: 'The Cinematic',  
    loc: 'Hollywood Hills / Global',  
    tag: 'Visual Storytelling',  
    img: 'https://cdn.marblism.com/2SNlSLcCStk.webp',  
    heroImage: 'https://cdn.marblism.com/2SNlSLcCStk.webp',  
    philosophy: 'Living within a frame. Every angle is a masterpiece.',  
    roi: 'Premium media production and location hosting.',  
    atmosphere: 'Dramatic, curated, and timeless.',  
    highlights: ['Private screening rooms', 'Framed horizons', 'Iconic architecture'],  
    buckets: [  
      { id: 'studio-suites', name: 'Studio Suites', count: 6, description: 'Production-ready living spaces.' },  
      { id: 'theaters', name: 'Private Theaters', count: 3, description: 'State-of-the-art screening.' }  
    ]  
  },  
  fortress: {  
    id: 'fortress',  
    name: 'The Fortress',  
    loc: 'Remote Highlands',  
    tag: 'Absolute Privacy',  
    img: 'https://cdn.marblism.com/bArft50Ls2h.webp',  
    heroImage: 'https://cdn.marblism.com/bArft50Ls2h.webp',  
    philosophy: 'Security as the ultimate luxury. An impenetrable sanctuary.',  
    roi: 'Safe-haven asset appreciation.',  
    atmosphere: 'Stoic, secure, and grounded.',  
    highlights: ['Reinforced structures', 'Off-grid capability', 'Deep security integration'],  
    buckets: [  
      { id: 'vaults', name: 'Private Vaults', count: 5, description: 'Secure storage for high-value assets.' },  
      { id: 'safe-rooms', name: 'Safe Rooms', count: 2, description: 'Panic-level security modules.' }  
    ]  
  },  
  safari: {  
    id: 'safari',  
    name: 'The Safari',  
    loc: 'Serengeti / Okavango',  
    tag: 'Primal Elegance',  
    img: 'https://cdn.marblism.com/dL-ayC7zbHv.webp',  
    heroImage: 'https://cdn.marblism.com/dL-ayC7zbHv.webp',  
    philosophy: 'Raw nature met with refined comfort.',  
    roi: 'Eco-tourism and conservation-linked yields.',  
    atmosphere: 'Wild, organic, and breathtaking.',  
    highlights: ['Open-air living', 'Wildlife observation decks', 'Sustainable design'],  
    buckets: [  
      { id: 'lodges', name: 'Main Lodges', count: 8, description: 'Centralized luxury hubs.' },  
      { id: 'tented-camps', name: 'Tented Camps', count: 12, description: 'High-end canvas retreats.' }  
    ]  
  }  
  // ... including Metropolitan Trio and Wilderness Pair data  
};

export const sanctuaries = Object.values(SANCTUARY_DATA);  
