export interface Bucket {  
  id: string;  
  name: string;  
  description: string;  
  count: number; // The missing piece  
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
  // Example entry showing the new count field  
  'the-stadium': {  
    id: 'the-stadium',  
    name: 'The Stadium',  
    loc: 'Urban Core',  
    tag: 'Metropolitan Trio',  
    img: '/assets/brass-shadow-stadium.jpg',  
    heroImage: '/assets/brass-shadow-stadium-hero.jpg',  
    philosophy: 'High-octane luxury in the heart of the city.',  
    roi: '8.2% Annualized',  
    atmosphere: 'Brass & Shadow',  
    highlights: ['Private Skybox', 'Helipad Access', '24/7 Concierge'],  
    buckets: [  
      {  
        id: 'sky-villas',  
        name: 'Sky Villas',  
        description: 'Penthouses with 360-degree urban views.',  
        count: 12  
      },  
      {  
        id: 'executive-suites',  
        name: 'Executive Suites',  
        description: 'Sleek units for the modern nomad.',  
        count: 24  
      }  
    ]  
  },  
  // ... apply 'count' to all other sanctuaries (The Fortress, The Cinematic, etc.)  
};

export const sanctuaries = Object.values(SANCTUARY_DATA);  
