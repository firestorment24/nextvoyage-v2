export interface Bucket {  
  id: string;  
  name: string;  
  count: number; // The fix for the PropertyBuckets build error  
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
    buckets: [{ id: 'm1', name: 'Penthouses', count: 12, description: 'Sky-high seclusion.', imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80' }]  
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
    buckets: [{ id: 'f1', name: 'Secure Estates', count: 8, description: 'Tactical luxury.', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80' }]  
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
    buckets: [{ id: 's1', name: 'Arena Suites', count: 14, description: 'Live the game.', imageUrl: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80' }]  
  },  
  island: {  
    id: 'island',  
    name: 'The Island',  
    loc: 'Private Shores',  
    tag: 'Unreachable Luxury',  
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80',  
    philosophy: 'Barefoot elegance on shores that don’t exist on public maps.',  
    roi: 'Total Neural Decompression',  
    atmosphere: 'Serene / Aquatic',  
    highlights: ['Deep Water Mooring', 'Zero Noise Pollution', 'Autonomous Power'],  
    buckets: [{ id: 'i1', name: 'Private Shores', count: 5, description: 'Unreachable luxury.', imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80' }]  
  },  
  alpine: {  
    id: 'alpine',  
    name: 'The Alpine',  
    loc: 'High Altitudes',  
    tag: 'Peak Performance',  
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',  
    philosophy: 'Clarity found at 10,000 feet. Engineered for longevity and biometric optimization.',  
    roi: 'Biometric Reset',  
    atmosphere: 'Crisp / High-Contrast',  
    highlights: ['Hyperbaric Suites', 'Ski-in/Ski-out Privacy', 'Glacial Water Filtration'],  
    buckets: [{ id: 'a1', name: 'Peak Estates', count: 9, description: 'Peak performance.', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80' }]  
  },  
  cinematic: {  
    id: 'cinematic',  
    name: 'The Cinematic',  
    loc: 'Architectural Icons',  
    tag: 'Living the Narrative',  
    img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80',  
    philosophy: 'Homes that aren’t just buildings, but legendary backdrops for life’s most significant chapters.',  
    roi: 'Legacy Brand Equity',  
    atmosphere: 'Sophisticated / Noir',  
    highlights: ['Heritage Status', 'IMAX Private Screening', 'Curated Art Vaults'],  
    buckets: [{ id: 'c1', name: 'Iconic Villas', count: 7, description: 'Living the narrative.', imageUrl: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80' }]  
  },  
  safari: {  
    id: 'safari',  
    name: 'The Safari',  
    loc: 'Wild Frontiers',  
    tag: 'Raw & Refined',  
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',  
    philosophy: 'Biophilia at its most extreme. Merging high-net-worth comfort with the untamed pulse of the wild.',  
    roi: 'Sensory Re-awakening',  
    atmosphere: 'Elemental / Warm',  
    highlights: ['Anti-Poaching Security', 'Starlight Bedrooms', 'Eco-Integrated Design'],  
    buckets: [{ id: 'sf1', name: 'Wild Estates', count: 6, description: 'Raw and refined.', imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80' }]  
  },  
  oasis: {  
    id: 'oasis',  
    name: 'The Oasis',  
    loc: 'Remote Deserts',  
    tag: 'Miraculous Recovery',  
    img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80',  
    philosophy: 'The luxury of silence, heat, water, and shade in the world’s most extreme environments.',  
    roi: 'Digital Deceleration',  
    atmosphere: 'Minimalist / Thermal',  
    highlights: ['Subterranean Cooling', 'Water Autonomy', 'Zero Light Pollution'],  
    buckets: [{ id: 'o1', name: 'Desert Retreats', count: 11, description: 'Miraculous recovery.', imageUrl: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80' }]  
  },  
  floating: {  
    id: 'floating',  
    name: 'The Floating',  
    loc: 'International Waters',  
    tag: 'Mobile Sovereignty',  
    img: 'https://images.unsplash.com/photo-1567891777981-72391843d159?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1567891777981-72391843d159?auto=format&fit=crop&q=80',  
    philosophy: 'Ultimate autonomy on the high seas. Sovereignty without borders.',  
    roi: 'Geopolitical Agility',  
    atmosphere: 'Horizonless / Fluid',  
    highlights: ['Heli-pad Ready', 'Starlink Continuity', 'Desalination Plant'],  
    buckets: [{ id: 'fl1', name: 'Yacht Residences', count: 4, description: 'Mobile sovereignty.', imageUrl: 'https://images.unsplash.com/photo-1567891777981-72391843d159?auto=format&fit=crop&q=80' }]  
  }  
};

export const sanctuaries = Object.values(SANCTUARY_DATA);
