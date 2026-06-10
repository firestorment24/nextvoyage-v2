export interface Bucket {  
  name: string;  
  count: number;  
  description: string;  
}

export interface Sanctuary {  
  id: string;  
  name: string;  
  loc: string;  
  img: string;  
  philosophy: string;  
  roi: string;  
  buckets: Bucket[];  
}

export const SANCTUARY_DATA: Sanctuary[] = [  
  {  
    id: 'alpine',  
    name: 'Alpine',  
    loc: 'High Altitude • Europe',  
    img: '/images/sanctuaries/alpine.jpg',  
    philosophy: 'Clarity through elevation.',  
    roi: 'Deep cognitive rest and physical recalibration.',  
    buckets: [  
      { name: 'Ultra-Luxe Chalets', count: 12, description: 'Ski-in/ski-out estates with private spas.' },  
      { name: 'Modernist Retreats', count: 8, description: 'Glass-walled sanctuaries overlooking the peaks.' }  
    ]  
  },  
  {  
    id: 'metropolitan',  
    name: 'Metropolitan',  
    loc: 'Urban Core • Global',  
    img: '/images/sanctuaries/metro.jpg',  
    philosophy: 'The pulse of the now.',  
    roi: 'Immediate access to culture and strategic connectivity.',  
    buckets: [  
      { name: 'Skyscraper Penthouses', count: 15, description: 'Full-floor residences above the clouds.' },  
      { name: 'Historic Townhomes', count: 6, description: 'Restored masonry with private courtyards.' }  
    ]  
  },  
  {  
    id: 'safari',  
    name: 'Wilderness',  
    loc: 'Savannah • Africa',  
    img: '/images/sanctuaries/safari.jpg',  
    philosophy: 'Primal connection.',  
    roi: 'Perspective shift and sensory awakening.',  
    buckets: [  
      { name: 'Luxury Tented Camps', count: 10, description: 'Under-canvas living with zero compromise.' },  
      { name: 'Eco-Lodges', count: 5, description: 'Integrated architecture in the heart of the bush.' }  
    ]  
  }  
];

// Compatibility exports  
export const sanctuaries = SANCTUARY_DATA;  
