export interface Bucket {  
  name: string;  
  count: number;  
  description: string;  
  imageUrl?: string;  
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
  {  
    id: 'the-metropolitan',  
    name: 'The Metropolitan',  
    loc: 'London / New York',  
    tag: 'Prestige',  
    img: 'https://cdn.marblism.com/91e1BKoPk7_.webp',  
    heroImage: 'https://cdn.marblism.com/91e1BKoPk7_.webp',  
    philosophy: 'Urban mastery through architectural dominance.',  
    roi: 'Central hub authority and elite connectivity.',  
    atmosphere: 'High-contrast, brass-accented luxury.',  
    highlights: ['Penthouse access', 'Private concierge', 'Helipad'],  
    buckets: [  
      { name: 'Lofts', count: 12, description: 'High-ceiling industrial luxury.' },  
      { name: 'Penthouses', count: 5, description: 'Skyline-dominating residences.' }  
    ]  
  },  
  {  
    id: 'the-floating',  
    name: 'The Floating',  
    loc: 'Mediterranean',  
    tag: 'Freedom',  
    img: 'https://cdn.marblism.com/ZNRkvdQ-EwN.webp',  
    heroImage: 'https://cdn.marblism.com/ZNRkvdQ-EwN.webp',  
    philosophy: 'Sovereignty on the open sea.',  
    roi: 'Mobile privacy and global port access.',  
    atmosphere: 'Shadowed teak and polished chrome.',  
    highlights: ['Private dockage', 'On-board wellness', 'Security detail'],  
    buckets: [  
      { name: 'Suites', count: 8, description: 'Ocean-view master quarters.' },  
      { name: 'Decks', count: 4, description: 'Expansive entertainment spaces.' }  
    ]  
  },  
  {  
    id: 'the-island',  
    name: 'The Island',  
    loc: 'French Polynesia',  
    tag: 'Isolation',  
    img: 'https://cdn.marblism.com/w24tRoxt-SG.webp',  
    heroImage: 'https://cdn.marblism.com/w24tRoxt-SG.webp',  
    philosophy: 'Absolute disconnect from the grid.',  
    roi: 'Geographic scarcity and psychological peace.',  
    atmosphere: 'Tropical minimalism with dark wood accents.',  
    highlights: ['Private beach', 'Seaplane access', 'Lagoon views'],  
    buckets: [  
      { name: 'Villas', count: 6, description: 'Over-water sanctuary living.' },  
      { name: 'Reserves', count: 2, description: 'Protected natural habitats.' }  
    ]  
  },  
  {  
    id: 'the-alpine',  
    name: 'The Alpine',  
    loc: 'Swiss Alps',  
    tag: 'Elevation',  
    img: 'https://cdn.marblism.com/MzZnGiKTRSw.webp',  
    heroImage: 'https://cdn.marblism.com/MzZnGiKTRSw.webp',  
    philosophy: 'Peak performance and vertical privacy.',  
    roi: 'Seasonal scarcity and high-altitude health.',  
    atmosphere: 'Warm fur, slate, and hearth fire.',  
    highlights: ['Ski-in access', 'Wine cellar', 'Thermal spa'],  
    buckets: [  
      { name: 'Chalets', count: 4, description: 'Multi-story mountain estates.' },  
      { name: 'Lodges', count: 9, description: 'Cozy boutique retreats.' }  
    ]  
  },  
  {  
    id: 'the-stadium',  
    name: 'The Stadium',  
    loc: 'Monaco / Silverstone',  
    tag: 'Access',  
    img: 'https://cdn.marblism.com/sZzrSj1PFOx.webp',  
    heroImage: 'https://cdn.marblism.com/sZzrSj1PFOx.webp',  
    philosophy: 'The pulse of performance and elite visibility.',  
    roi: 'Front-row presence and high-density networking.',  
    atmosphere: 'Kinetic energy meets VIP seclusion.',  
    highlights: ['Pitch-side balcony', 'VIP lounge', 'Chauffeur access'],  
    buckets: [  
      { name: 'Suites', count: 15, description: 'Prime event visibility.' },  
      { name: 'Lounges', count: 3, description: 'Exclusive member social clubs.' }  
    ]  
  },  
  {  
    id: 'the-cinematic',  
    name: 'The Cinematic',  
    loc: 'Hollywood Hills',  
    tag: 'Legacy',  
    img: 'https://cdn.marblism.com/V6i5s0wJNaN.webp',  
    heroImage: 'https://cdn.marblism.com/V6i5s0wJNaN.webp',  
    philosophy: 'Living within the frame of history.',  
    roi: 'Cultural significance and media dominance.',  
    atmosphere: 'Mid-century noir with modern shadow-play.',  
    highlights: ['Screening room', 'Infinity pool', 'Canyon views'],  
    buckets: [  
      { name: 'Studios', count: 4, description: 'Creative production hubs.' },  
      { name: 'Estates', count: 2, description: 'Historic celebrity landmarks.' }  
    ]  
  },  
  {  
    id: 'the-fortress',  
    name: 'The Fortress',  
    loc: 'Scottish Highlands',  
    tag: 'Security',  
    img: 'https://cdn.marblism.com/MLCt36XCycu.webp',  
    heroImage: 'https://cdn.marblism.com/MLCt36XCycu.webp',  
    philosophy: 'Impenetrable luxury and historical weight.',  
    roi: 'Intergenerational wealth protection.',  
    atmosphere: 'Granite walls and velvet curtains.',  
    highlights: ['Vault access', 'Signal jamming', 'Armored transport'],  
    buckets: [  
      { name: 'Towers', count: 3, description: 'Defensive vantage points.' },  
      { name: 'Vaults', count: 10, description: 'Climate-controlled asset storage.' }  
    ]  
  },  
  {  
    id: 'the-safari',  
    name: 'The Safari',  
    loc: 'Serengeti',  
    tag: 'Wilderness',  
    img: 'https://cdn.marblism.com/h2nZyKbAv-O.webp',  
    heroImage: 'https://cdn.marblism.com/h2nZyKbAv-O.webp',  
    philosophy: 'Raw nature refined by expert craft.',  
    roi: 'Conservation equity and primal connection.',  
    atmosphere: 'Canvas, leather, and golden hour light.',  
    highlights: ['Game drives', 'Bush dining', 'Starlit sleepouts'],  
    buckets: [  
      { name: 'Camps', count: 7, description: 'Mobile luxury tented camps.' },  
      { name: 'Manors', count: 2, description: 'Permanent colonial estates.' }  
    ]  
  },  
  {  
    id: 'the-oasis',  
    name: 'The Oasis',  
    loc: 'Arabian Desert',  
    tag: 'Mirage',  
    img: 'https://cdn.marblism.com/e5OwMxKOxD4.webp',  
    heroImage: 'https://cdn.marblism.com/e5OwMxKOxD4.webp',  
    philosophy: 'Life thriving where it shouldn’t.',  
    roi: 'Extreme resource management and rare beauty.',  
    atmosphere: 'Sand-dune silence and crystalline water.',  
    highlights: ['Water gardens', 'Dune surfing', 'Observatory'],  
    buckets: [  
      { name: 'Pavilions', count: 5, description: 'Shaded open-air living.' },  
      { name: 'Sancutaries', count: 3, description: 'Hidden desert enclosures.' }  
    ]  
  }  
];

export const sanctuaries = SANCTUARY_DATA; 
