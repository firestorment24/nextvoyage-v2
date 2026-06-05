/**  
 * SANCTUARIES DATA - V3 (Synchronized)  
 * Standardized for @/ root alias and cross-component compatibility.  
 */

export interface Sanctuary {  
  id: string;  
  slug: string;  
  name: string;  
  location: string;  
  tagline: string;  
  categoryDescription: string;  
  heroImage: string;  
  atmosphere: string;  
  highlights: string[];  
  propertyCount: number;  
}

export const SANCTUARIES_DATA: Sanctuary[] = [  
  {  
    id: '1',  
    slug: 'the-metropolitan',  
    name: 'The Metropolitan',  
    location: 'Global Hubs',  
    tagline: 'Precision luxury in the city.',  
    categoryDescription: 'High-density elegance in world-class urban centers.',  
    heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80',  
    atmosphere: 'Sophisticated',  
    highlights: ['Penthouse Lounges', 'Private Chauffeurs', 'Michelin Access'],  
    propertyCount: 12  
  },  
  {  
    id: '2',  
    slug: 'the-island',  
    name: 'The Island',  
    location: 'Archipelagos',  
    tagline: 'Untethered isolation.',  
    categoryDescription: 'Remote tropical estates with absolute shoreline privacy.',  
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80',  
    atmosphere: 'Serene',  
    highlights: ['Private Reefs', 'Overwater Villas', 'No-Fly Zones'],  
    propertyCount: 8  
  },  
  {  
    id: '3',  
    slug: 'the-fortress',  
    name: 'The Fortress',  
    location: 'Historical Strongholds',  
    tagline: 'Absolute privacy within ancient walls.',  
    categoryDescription: 'Restored castles and reinforced historical estates.',  
    heroImage: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&q=80',  
    atmosphere: 'Authoritative',  
    highlights: ['Stone Architecture', 'Reinforced Privacy', 'Helipads'],  
    propertyCount: 5  
  },  
  {  
    id: '4',  
    slug: 'the-safari',  
    name: 'The Safari',  
    location: 'Savannas & Jungles',  
    tagline: 'Wilderness, refined.',  
    categoryDescription: 'Elite wildlife encounters without compromising on comfort.',  
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',  
    atmosphere: 'Adventurous',  
    highlights: ['Guided Expeditions', 'Eco-Luxury Tents', 'Private Rangers'],  
    propertyCount: 7  
  },  
  {  
    id: '5',  
    slug: 'the-alpine',  
    name: 'The Alpine',  
    location: 'Mountain Ranges',  
    tagline: 'Above the clouds.',  
    categoryDescription: 'High-altitude retreats for the pursuit of peaks.',  
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80',  
    atmosphere: 'Crisp',  
    highlights: ['Ski-In/Ski-Out', 'Heated Balconies', 'Oxygen Suites'],  
    propertyCount: 10  
  },  
  {  
    id: '6',  
    slug: 'the-oasis',  
    name: 'The Oasis',  
    location: 'Arid Lands',  
    tagline: 'Mirage turned reality.',  
    categoryDescription: 'Hyper-luxury in the most inhospitable environments.',  
    heroImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80',  
    atmosphere: 'Quiet',  
    highlights: ['Dune Views', 'Infinity Pools', 'Stargazing Decks'],  
    propertyCount: 6  
  },  
  {  
    id: '7',  
    slug: 'the-nautical',  
    name: 'The Nautical',  
    location: 'Deep Waters',  
    tagline: 'The ocean is your backyard.',  
    categoryDescription: 'Ultra-luxury floating villas and maritime estates.',  
    heroImage: 'https://images.unsplash.com/photo-1502920338823-20516613398c?auto=format&fit=crop&q=80',  
    atmosphere: 'Fluid',  
    highlights: ['Submersible Suites', 'Private Docks', 'Hydrofoil Transfers'],  
    propertyCount: 4  
  },  
  {  
    id: '8',  
    slug: 'the-celestial',  
    name: 'The Celestial',  
    location: 'Observed Horizons',  
    tagline: 'Touching the stars.',  
    categoryDescription: 'High-altitude and space-adjacent luxury experiences.',  
    heroImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80',  
    atmosphere: 'Ethereal',  
    highlights: ['Glass Domes', 'Star Tracking', 'Zero-G Chambers'],  
    propertyCount: 3  
  },  
  {  
    id: '9',  
    slug: 'the-cinematic',  
    name: 'The Cinematic',  
    location: 'Media Capitals',  
    tagline: 'Life through a lens.',  
    categoryDescription: 'Legendary properties featured in iconic film and media.',  
    heroImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80',  
    atmosphere: 'Glamorous',  
    highlights: ['Private Cinemas', 'Screening Rooms', 'Iconic History'],  
    propertyCount: 9  
  },  
  {  
    id: '10',  
    slug: 'the-stadium',  
    name: 'The Stadium',  
    location: 'Cultural Arenas',  
    tagline: 'At the center of the action.',  
    categoryDescription: 'Luxury suites integrated into world-class sports and event venues.',  
    heroImage: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80',  
    atmosphere: 'Energetic',  
    highlights: ['VVIP Boxes', 'Backstage Access', 'Player Meet-ups'],  
    propertyCount: 11  
  },  
  {  
    id: '11',  
    slug: 'the-arctic',  
    name: 'The Arctic',  
    location: 'Glacial Frontiers',  
    tagline: 'Purity in the frost.',  
    categoryDescription: 'High-comfort polar expeditions and ice-based estates.',  
    heroImage: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80',  
    atmosphere: 'Frozen',  
    highlights: ['Aurora Views', 'Thermal Baths', 'Expedition Vehicles'],  
    propertyCount: 3  
  },  
  {  
    id: '12',  
    slug: 'the-rural',  
    name: 'The Rural',  
    location: 'Country Estates',  
    tagline: 'Elegance in the wild.',  
    categoryDescription: 'Pastoral luxury and agricultural estates.',  
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80',  
    atmosphere: 'Rustic',  
    highlights: ['Vineyard Access', 'Equestrian Centers', 'Farm-to-Table'],  
    propertyCount: 15  
  }  
];

// DOUBLE-LOCK EXPORT  
// This ensures that 'import { sanctuaries }' and 'import { SANCTUARIES_DATA }'  
// both work, preventing "Export not found" build errors.  
export const sanctuaries = SANCTUARIES_DATA;
