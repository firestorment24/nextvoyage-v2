export interface Bucket {  
  id: string;  
  name: string;  
  count: number; // This fixes the PropertyBuckets.tsx error  
  description: string;  
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

export const SANCTUARY_DATA: Record<string, Sanctuary> = {  
  metropolitan: {  
    id: 'metropolitan',  
    name: 'The Metropolitan',  
    loc: 'Global Hubs',  
    tag: 'Hidden in Plain Sight',  
    img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80',  
    philosophy: 'City hustle meets fortress solitude. High-frequency access with zero-latency privacy.',  
    roi: '3.5x Cognitive Focus Improvement',  
    atmosphere: 'Controlled Kinetic',  
    highlights: ['Discreet Entry', 'Acoustic Isolation', '24/7 Concierge'],  
    buckets: [  
      {   
        id: 'penthouse',   
        name: 'Penthouses',   
        count: 12,   
        description: 'Sky-high seclusion.',   
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80'   
      }  
    ]  
  },  
  fortress: {  
    id: 'fortress',  
    name: 'The Fortress',  
    loc: 'Utah Desert / Scottish Highlands',  
    tag: 'The Ultimate Redoubt',  
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',  
    philosophy: 'Security is the final luxury. A sanctuary designed for absolute continuity and heritage preservation.',  
    roi: '34% Cortisol Suppression',  
    atmosphere: 'Absolute Stillness',  
    highlights: ['EMP Shielding', 'Off-grid Redundancy', 'Ballistic Glass'],  
    buckets: [  
      {   
        id: 'bunker',   
        name: 'Secure Estates',   
        count: 8,   
        description: 'Tactical luxury.',   
        imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80'   
      }  
    ]  
  },  
  stadium: {  
    id: 'stadium',  
    name: 'The Stadium',  
    loc: 'Cultural Arenas',  
    tag: 'Front row, always.',  
    img: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80',  
    philosophy: 'Exclusive residential integration within the world’s most iconic sports and entertainment arenas.',  
    roi: 'Endless Cultural Capital',  
    atmosphere: 'Electric',  
    highlights: ['VVIP Access', 'Player-Level Views', 'Private Event Hosting'],  
    buckets: [  
      {   
        id: 'box',   
        name: 'Arena Suites',   
        count: 14,   
        description: 'Live the game.',   
        imageUrl: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80'   
      }  
    ]  
  }  
  // ... adding island, alpine, cinematic, safari, oasis, and floating similarly with counts  
};

export const sanctuaries = Object.values(SANCTUARY_DATA);  
