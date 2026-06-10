// data/sanctuaries.ts

export interface Bucket {  
  name: string;  
  count: number;  
  description: string;  
}

export interface Sanctuary {  
  id: string;  
  name: string;  
  loc: string;  
  tag: string;  
  img: string;  
  heroImage: string; // compatibility  
  philosophy: string;  
  roi: string;  
  atmosphere: string;  
  highlights: string[];  
  buckets: Bucket[];  
}

export const SANCTUARY_DATA: Sanctuary[] = [  
  {  
    id: 'alpine',  
    name: 'The Alpine',  
    loc: 'High Altitude • Europe',  
    tag: 'Clarity through elevation.',  
    img: '/images/sanctuaries/alpine.jpg',  
    heroImage: '/images/sanctuaries/alpine.jpg',  
    philosophy: 'The Alpine sanctuary is designed for those who seek cognitive rest. Above the tree line, the air is thinner, the light is sharper, and the distractions of the lowlands vanish.',  
    roi: 'Deep cognitive rest and physical recalibration through high-altitude exposure.',  
    atmosphere: 'Crisp, silent, and structurally minimalist. Floor-to-ceiling glass meeting raw stone.',  
    highlights: [  
      'Private glacial access',  
      'Altitude-optimized wellness suites',  
      'Stellar observation decks'  
    ],  
    buckets: [  
      { name: 'Chateaus', count: 4, description: 'Exclusive mountain retreats.' },  
      { name: 'Observatories', count: 2, description: 'High-altitude glass sanctuaries.' }  
    ]  
  },  
  {  
    id: 'safari',  
    name: 'The Safari',  
    loc: 'Savannah • Africa',  
    tag: 'Primal connection.',  
    img: '/images/sanctuaries/safari.jpg',  
    heroImage: '/images/sanctuaries/safari.jpg',  
    philosophy: 'A return to the source. The Safari sanctuary prioritizes the rhythm of the natural world, offering a sensory awakening that only the wild can provide.',  
    roi: 'Perspective shift and sensory awakening through immersion in the apex ecosystem.',  
    atmosphere: 'Earth-toned luxury, open-air living, and the constant, grounding hum of the bush.',  
    highlights: [  
      'Apex predator tracking',  
      'Solar-powered luxury outposts',  
      'Conservation-first curation'  
    ],  
    buckets: [  
      { name: 'Lodges', count: 6, description: 'Apex luxury in the heart of the wild.' },  
      { name: 'Mobile Camps', count: 3, description: 'Tracing the great migration.' }  
    ]  
  },  
  {  
    id: 'metropolitan',  
    name: 'The Metropolitan',  
    loc: 'Urban Core • Global',  
    tag: 'The pulse of the now.',  
    img: '/images/sanctuaries/metro.jpg',  
    heroImage: '/images/sanctuaries/metro.jpg',  
    philosophy: 'The Metropolitan is for the strategist who needs to be at the center of the world without being of it. A silent fortress in the world’s most energetic cities.',  
    roi: 'Immediate access to culture and strategic connectivity without compromising privacy.',  
    atmosphere: 'Polished, high-tech, and impenetrable. A sanctuary of glass and steel.',  
    highlights: [  
      'Helipad access',  
      'Secure boardroom suites',  
      'Michelin-starred private dining'  
    ],  
    buckets: [  
      { name: 'Penthouses', count: 8, description: 'Sky-high private estates.' },  
      { name: 'Townhouses', count: 4, description: 'Discreet urban fortresses.' }  
    ]  
  }  
  // ... adding more as we go  
];

export const sanctuaries = SANCTUARY_DATA; // legacy compatibility  
