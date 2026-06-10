// data/sanctuaries.ts

export interface Bucket {  
  name: string;  
  count: number;  
  description: string;  
}

export interface Sanctuary {  
  id: string;  
  slug: string;  
  name: string;  
  tagline: string;  
  heroImage: string; // The missing field  
  atmosphere: string;  
  highlights: string[];  
  buckets?: Bucket[];  
}

export const SANCTUARY_DATA: Sanctuary[] = [  
  {  
    id: 'alpine',  
    slug: 'alpine-sanctuaries',  
    name: 'The Alpine',  
    tagline: 'High-altitude serenity above the clouds.',  
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',  
    atmosphere: 'Crisp mountain air meets the warmth of a roaring hearth. These sanctuaries are defined by timber, stone, and the silence of falling snow.',  
    highlights: ['Ski-in / Ski-out', 'Private Heli-pads', 'Glacier Spas'],  
    buckets: [  
      { name: 'Mountain Chalets', count: 12, description: 'Timber-framed escapes.' },  
      { name: 'Peak Penthouses', count: 5, description: 'Panoramic views.' }  
    ]  
  },  
  {  
    id: 'safari',  
    slug: 'safari-sanctuaries',  
    name: 'The Safari',  
    tagline: 'Wild elegance in the heart of the savannah.',  
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',  
    atmosphere: 'The raw beauty of the plains paired with uncompromising luxury. Wake up to the rhythm of the wild.',  
    highlights: ['Private Game Drives', 'Bush Dining', 'Star-beds'],  
    buckets: [  
      { name: 'Canvas Villas', count: 8, description: 'Luxury under canvas.' },  
      { name: 'River Lodges', count: 4, description: 'Water-side seclusion.' }  
    ]  
  },  
  {  
    id: 'metropolitan',  
    slug: 'metropolitan-sanctuaries',  
    name: 'The Metropolitan',  
    tagline: 'Quiet luxury in the world’s loudest cities.',  
    heroImage: 'https://images.unsplash.com/photo-1541336032412-2048a678540d',  
    atmosphere: 'Rising above the skyline, these sanctuaries offer a soundproofed, minimalist retreat from the urban rush.',  
    highlights: ['Rooftop Gardens', 'Private Jazz Clubs', '24/7 Butler Service'],  
  },  
  {  
    id: 'island',  
    slug: 'island-sanctuaries',  
    name: 'The Island',  
    tagline: 'Infinite horizons and private shores.',  
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',  
    atmosphere: 'Turquoise waters meet white sands. These sanctuaries are accessible only by boat or sea-plane.',  
    highlights: ['Overwater Villas', 'Private Reefs', 'Yacht Charters'],  
  },  
  {  
    id: 'desert',  
    slug: 'desert-sanctuaries',  
    name: 'The Desert',  
    tagline: 'Stark beauty and ancient stillness.',  
    heroImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',  
    atmosphere: 'Minimalist architecture that blends into the dunes. Experience the profound silence of the arid landscape.',  
    highlights: ['Canyon Pavilions', 'Stargazing Decks', 'Ancient Wellness Rituals'],  
  }  
];

// Compatibility exports  
export const sanctuaries = SANCTUARY_DATA;  
