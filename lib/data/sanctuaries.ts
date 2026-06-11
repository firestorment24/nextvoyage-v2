export interface Bucket {  
  id: string;  
  name: string;  
  imageUrl: string;  
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

export const SANCTUARY_DATA: Sanctuary[] = [  
  // ... including the final four archetypes  
  {  
    id: 'the-stadium',  
    name: 'The Stadium',  
    loc: 'Global Tier-1 Cities',  
    tag: 'The Ultra-Box View',  
    img: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a',  
    heroImage: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a',  
    philosophy: 'High-velocity access meets private sanctuary.',  
    roi: 'Zero-friction attendance at peak global events.',  
    atmosphere: 'Electric, curated, secure.',  
    highlights: ['Private Entrance', 'Climate Controlled Suites', 'Direct Tunnel Access'],  
    buckets: [{ id: 's1', name: 'Elite Suite', imageUrl: '...' }]  
  },  
  {  
    id: 'the-fortress',  
    name: 'The Fortress',  
    loc: 'Remote Coastal / Alpine',  
    tag: 'Absolute Privacy',  
    img: 'https://images.unsplash.com/photo-1449156730764-59a993f88839',  
    heroImage: 'https://images.unsplash.com/photo-1449156730764-59a993f88839',  
    philosophy: 'Security as a luxury service.',  
    roi: 'Total peace of mind in high-risk environments.',  
    atmosphere: 'Brutalist, silent, impenetrable.',  
    highlights: ['Bunker-Grade Security', 'Private Airstrip', 'Off-Grid Power'],  
    buckets: [{ id: 'f1', name: 'Secure Perimeter', imageUrl: '...' }]  
  },  
  // Add The Cinematic and The Safari here...  
];

 export const SANCTUARIES_DATA = SANCTUARY_DATA;  
export const sanctuaries = SANCTUARY_DATA;  
