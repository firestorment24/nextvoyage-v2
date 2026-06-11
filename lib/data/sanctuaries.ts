export interface Bucket {  
  id: string;  
  name: string;  
  imageUrl: string;  
}

export interface Sanctuary {  
  id: string;  
  slug: string; // This is the key fix  
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

export const SANCTUARY_DATA: Sanctuary[] = [  
  {  
    id: 'the-stadium',  
    slug: 'the-stadium', // Added slug  
    name: 'The Stadium',  
    loc: 'Global Tier-1 Cities',  
    tag: 'The Ultra-Box View',  
    img: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a',  
    heroImage: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a',  
    philosophy: 'High-velocity access meets private sanctuary.',  
    roi: 'Zero-friction attendance at peak global events.',  
    atmosphere: 'Electric, curated, secure.',  
    highlights: ['Private Entrance', 'Climate Controlled Suites', 'Direct Tunnel Access'],  
    buckets: []  
  },  
  // ... Repeat for other sanctuaries, ensuring slug matches id  
];

export const SANCTUARIES_DATA = SANCTUARY_DATA;  
export const sanctuaries = SANCTUARY_DATA; 
