export interface Bucket {  
  id: string;  
  name: string;  
  count: number;  
  description: string;  
  imageUrl: string; // Added to resolve build error at line 31  
}

export interface Sanctuary {  
  id: string;  
  name: string;  
  loc: string;  
  tag: string;  
  img: string;  
  heroImage: string;  
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
      {   
        id: 'track-field',   
        name: 'Track & Field',   
        count: 4,   
        description: 'Elite training grounds.',  
        imageUrl: 'https://cdn.marblism.com/65PUW-6BJDb.webp'   
      },  
      {   
        id: 'aquatics',   
        name: 'Aquatics',   
        count: 2,   
        description: 'Olympic-standard pools.',  
        imageUrl: 'https://cdn.marblism.com/WD30H7eapVS.webp'   
      }  
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
      {   
        id: 'studio-suites',   
        name: 'Studio Suites',   
        count: 6,   
        description: 'Production-ready living spaces.',  
        imageUrl: 'https://cdn.marblism.com/bi3JJpS6XGG.webp'   
      },  
      {   
        id: 'theaters',   
        name: 'Private Theaters',   
        count: 3,   
        description: 'State-of-the-art screening.',  
        imageUrl: 'https://cdn.marblism.com/3BFJ7S6zJp2.webp'   
      }  
    ]  
  },  
  fortress: {  
    id: 'fortress',  
    name: 'The Fortress',  
    loc: 'Remote Highlands',  
    tag: 'Absolute Privacy',  
    img: 'https://cdn.marblism.com/bArft50Ls2h.webp',  
    heroImage: 'https://cdn.marblism.com/bArft50Ls2h.webp',  
    philosophy: 'Security as the ultimate luxury.',  
    roi: 'Safe-haven asset appreciation.',  
    atmosphere: 'Stoic, secure, and grounded.',  
    highlights: ['Reinforced structures', 'Off-grid capability'],  
    buckets: [  
      {   
        id: 'vaults',   
        name: 'Private Vaults',   
        count: 5,   
        description: 'Secure storage.',  
        imageUrl: 'https://cdn.marblism.com/-Fc3ivP0UkL.webp'   
      }  
    ]  
  }  
  // ... and so on for Safari and the others  
};

export const sanctuaries = Object.values(SANCTUARY_DATA);  
