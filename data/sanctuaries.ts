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
  heroImage: string;  
  philosophy: string;  
  roi: string;  
  atmosphere: string;  
  highlights: string[];  
  buckets: Bucket[];  
}

export const SANCTUARY_DATA: Sanctuary[] = [  
  {  
    id: 'metropolitan',  
    name: 'The Metropolitan',  
    loc: 'Urban Core • Global',  
    tag: 'The pulse of the now.',  
    img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80',  
    philosophy: 'A silent fortress in the world’s most energetic cities. For the strategist who needs to be at the center of the world without being of it.',  
    roi: 'Immediate access to culture and strategic connectivity without compromising privacy.',  
    atmosphere: 'Polished, high-tech, and impenetrable. A sanctuary of glass and steel.',  
    highlights: ['Helipad access', 'Secure boardroom suites', 'Michelin-starred private dining'],  
    buckets: [  
      { name: 'Penthouses', count: 8, description: 'Sky-high private estates.' },  
      { name: 'Townhouses', count: 4, description: 'Discreet urban fortresses.' }  
    ]  
  },  
  {  
    id: 'alpine',  
    name: 'The Alpine',  
    loc: 'High Altitude • Europe',  
    tag: 'Clarity through elevation.',  
    img: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80',  
    philosophy: 'Designed for cognitive rest. Above the tree line, the air is thinner, the light is sharper, and the distractions of the lowlands vanish.',  
    roi: 'Deep cognitive rest and physical recalibration through high-altitude exposure.',  
    atmosphere: 'Crisp, silent, and structurally minimalist. Floor-to-ceiling glass meeting raw stone.',  
    highlights: ['Private glacial access', 'Altitude-optimized wellness', 'Stellar observation decks'],  
    buckets: [  
      { name: 'Chateaus', count: 4, description: 'Exclusive mountain retreats.' },  
      { name: 'Observatories', count: 2, description: 'High-altitude glass sanctuaries.' }  
    ]  
  },  
  {  
    id: 'nautical',  
    name: 'The Nautical',  
    loc: 'Open Water • International',  
    tag: 'Boundless blue horizons.',  
    img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80',  
    philosophy: 'Total isolation via the horizon. The Nautical sanctuary is a platform for those who find peace in the rhythm of the tide and the lack of boundaries.',  
    roi: 'A complete break from terrestrial stress and total geographic fluidity.',  
    atmosphere: 'Fluid, teak-lined, and salt-kissed. Modern maritime engineering meeting timeless comfort.',  
    highlights: ['Deep sea exploration', 'Private superyacht berths', 'Hydrotherapy suites'],  
    buckets: [  
      { name: 'Overwater Villas', count: 5, description: 'Permanent anchors in paradise.' },  
      { name: 'Floating Estates', count: 3, description: 'Mobile luxury on the deep blue.' }  
    ]  
  },  
  {  
    id: 'safari',  
    name: 'The Safari',  
    loc: 'Savannah • Africa',  
    tag: 'Primal connection.',  
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',  
    philosophy: 'A return to the source. Prioritizing the rhythm of the natural world, offering a sensory awakening that only the wild can provide.',  
    roi: 'Perspective shift and sensory awakening through immersion in the apex ecosystem.',  
    atmosphere: 'Earth-toned luxury, open-air living, and the constant, grounding hum of the bush.',  
    highlights: ['Apex predator tracking', 'Solar-powered outposts', 'Conservation-first curation'],  
    buckets: [  
      { name: 'Lodges', count: 6, description: 'Apex luxury in the heart of the wild.' },  
      { name: 'Mobile Camps', count: 3, description: 'Tracing the great migration.' }  
    ]  
  },  
  {  
    id: 'oasis',  
    name: 'The Oasis',  
    loc: 'Desert Sands • MENA',  
    tag: 'Stillness in the heat.',  
    img: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80',  
    philosophy: 'Miraculous recovery through silence, heat, and shade. A masterclass in resource-managed luxury in extreme environments.',  
    roi: 'Metabolic reset and radical focus through environmental simplicity.',  
    atmosphere: 'Cool plaster walls, geometric shadows, and the sound of hidden water.',  
    highlights: ['Bedouin stargazing', 'Sand-dune navigation', 'Ancient thermal rituals'],  
    buckets: [  
      { name: 'Deep Deserts', count: 3, description: 'Total isolation in the dunes.' },  
      { name: 'Wadi Retreats', count: 5, description: 'Canyon-floor hidden gems.' }  
    ]  
  },  
  {  
    id: 'fortress',  
    name: 'The Fortress',  
    loc: 'Cliffside • Atlantic',  
    tag: 'Unassailable peace.',  
    img: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80',  
    philosophy: 'Brutalist protection against the elements. The Fortress is where the land meets the sea with uncompromising strength.',  
    roi: 'Maximum security and mental fortification against external pressures.',  
    atmosphere: 'Solid, monolithic, and secure. Thick stone walls and expansive oceanic views.',  
    highlights: ['Storm watching suites', 'Vertical gardens', 'Subterranean wellness'],  
    buckets: [  
      { name: 'Keep Towers', count: 2, description: 'Vertical luxury with 360 views.' },  
      { name: 'Cliff Hangers', count: 4, description: 'Cantilevered over the Atlantic.' }  
    ]  
  },  
  {  
    id: 'stadium',  
    name: 'The Stadium',  
    loc: 'Arena Core • Global',  
    tag: 'At the heart of the game.',  
    img: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80',  
    philosophy: 'The pinnacle of access. Living within the architecture of human achievement and athletic excellence.',  
    roi: 'Unparalleled access to high-stakes energy and cultural spectacles.',  
    atmosphere: 'Vibrant, electric, and exclusive. Private box views and luxury box living.',  
    highlights: ['Pitch-side suites', 'Behind-the-scenes access', 'Elite athlete recovery labs'],  
    buckets: [  
      { name: 'Arena Suites', count: 6, description: 'Overlooking the field of play.' },  
      { name: 'VIP Residences', count: 4, description: 'Integrated stadium living.' }  
    ]  
  },  
  {  
    id: 'cinematic',  
    name: 'The Cinematic',  
    loc: 'Artistic Hubs • West Coast',  
    tag: 'Designed for stillness.',  
    img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80',  
    philosophy: 'Where life imitates art. A sanctuary for the storyteller, built to frame every moment as a masterpiece.',  
    roi: 'Creative inspiration and narrative clarity through aesthetic perfection.',  
    atmosphere: 'Curated, moody, and perfectly lit. Every frame is a deliberate design choice.',  
    highlights: ['Private screening rooms', 'Acoustic-perfect studios', 'Art curation services'],  
    buckets: [  
      { name: 'Director Estates', count: 2, description: 'The peak of aesthetic control.' },  
      { name: 'Writer Retreats', count: 5, description: 'Minimalist creative pods.' }  
    ]  
  },  
  {  
    id: 'island',  
    name: 'The Island',  
    loc: 'Archipelago • Pacific',  
    tag: 'The private kingdom.',  
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80',  
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80',  
    philosophy: 'Sovereignty over the sand. The Island is the ultimate expression of ownership and geographical exclusivity.',  
    roi: 'Radical autonomy and total environmental control.',  
    atmosphere: 'Pristine, breezy, and boundless. White sands meeting turquoise infinity.',  
    highlights: ['Private airstrip', 'Coral reef conservation', 'Custom eco-ecosystems'],  
    buckets: [  
      { name: 'Atolls', count: 2, description: 'Circular private paradises.' },  
      { name: 'Rock Manors', count: 4, description: 'Elevated island living.' }  
    ]  
  }  
];

export const sanctuaries = SANCTUARY_DATA; 
