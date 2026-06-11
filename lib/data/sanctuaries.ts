export interface Sanctuary {  
  id: string;  
  slug: string;  
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
  propertyCount: number; // The missing piece  
}

export const SANCTUARY_DATA: Sanctuary[] = [  
  {  
    id: 'the-stadium',  
    slug: 'the-stadium',  
    name: 'The Stadium',  
    loc: 'Global Tier-1 Cities',  
    tag: 'The Ultra-Box View',  
    img: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a',  
    heroImage: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a',  
    philosophy: 'High-velocity access meets private sanctuary.',  
    roi: 'Zero-friction attendance at peak global events.',  
    atmosphere: 'Electric, curated, secure.',  
    highlights: ['Private Entrance', 'Climate Controlled Suites', 'Direct Tunnel Access'],  
    buckets: [],  
    propertyCount: 2 // We have 18 total, roughly 2 per archetype  
  },  
  // ... apply to the others  
];  
