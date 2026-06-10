export interface Bucket {  
  id: string;  
  name: string;  
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
    buckets: [{ id: 'penthouse', name: 'Penthouses', description: 'Sky-high seclusion.', imageUrl: '/img/penthouse.jpg' }]  
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
    buckets: [{ id: 'bunker', name: 'Secure Estates', description: 'Tactical luxury.', imageUrl: '/img/bunker.jpg' }]  
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
    buckets: [{ id: 'box', name: 'Arena Suites', description: 'Live the game.', imageUrl: '/img/stadium-suite.jpg' }]  
  },  
  // ... adding island, alpine, cinematic, safari, oasis, and floating similarly  
};

// Exporting as array for the index page .map()  
export const sanctuaries = Object.values(SANCTUARY_DATA);  
