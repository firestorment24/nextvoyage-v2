// lib/data/sanctuaries.ts

export interface Sanctuary {  
  id: string;  
  slug: string;  
  name: string;  
  tag: string;  
  heroImage: string;  
  image: string; // Kept for compatibility  
  description: string;  
  propertyCount: number;  
}

export const SANCTUARIES_DATA: Sanctuary[] = [  
  {  
    id: 'metropolitan',  
    slug: 'metropolitan',  
    name: 'The Metropolitan',  
    tag: 'Urban Sophistication',  
    heroImage: '/images/sanctuaries/metropolitan.jpg',  
    image: '/images/sanctuaries/metropolitan.jpg',  
    description: 'Elite urban retreats in the world\'s most vibrant capitals.',  
    propertyCount: 2  
  },  
  {  
    id: 'alpine',  
    slug: 'alpine',  
    name: 'The Alpine',  
    tag: 'High-Altitude Luxury',  
    heroImage: '/images/sanctuaries/alpine.jpg',  
    image: '/images/sanctuaries/alpine.jpg',  
    description: 'Secluded mountain escapes with world-class amenities.',  
    propertyCount: 2  
  },  
  {  
    id: 'island',  
    slug: 'island',  
    name: 'The Island',  
    tag: 'Pristine Seclusion',  
    heroImage: '/images/sanctuaries/island.jpg',  
    image: '/images/sanctuaries/island.jpg',  
    description: 'Private paradises surrounded by turquoise waters.',  
    propertyCount: 2  
  },  
  {  
    id: 'floating',  
    slug: 'floating',  
    name: 'The Floating',  
    tag: 'Nautical Elegance',  
    heroImage: '/images/sanctuaries/floating.jpg',  
    image: '/images/sanctuaries/floating.jpg',  
    description: 'Ultra-luxury vessels and overwater villas.',  
    propertyCount: 2  
  },  
  {  
    id: 'stadium',  
    slug: 'stadium',  
    name: 'The Stadium',  
    tag: 'Elite Competition',  
    heroImage: '/images/sanctuaries/stadium.jpg',  
    image: '/images/sanctuaries/stadium.jpg',  
    description: 'Prime access to the world\'s greatest sporting arenas.',  
    propertyCount: 2  
  },  
  {  
    id: 'cinematic',  
    slug: 'cinematic',  
    name: 'The Cinematic',  
    tag: 'Grand Scale',  
    heroImage: '/images/sanctuaries/cinematic.jpg',  
    image: '/images/sanctuaries/cinematic.jpg',  
    description: 'Settings that feel like a scene from a masterpiece.',  
    propertyCount: 2  
  },  
  {  
    id: 'fortress',  
    slug: 'fortress',  
    name: 'The Fortress',  
    tag: 'Impenetrable Security',  
    heroImage: '/images/sanctuaries/fortress.jpg',  
    image: '/images/sanctuaries/fortress.jpg',  
    description: 'The ultimate in privacy and tactical protection.',  
    propertyCount: 2  
  },  
  {  
    id: 'safari',  
    slug: 'safari',  
    name: 'The Safari',  
    tag: 'Untamed Elegance',  
    heroImage: '/images/sanctuaries/safari.jpg',  
    image: '/images/sanctuaries/safari.jpg',  
    description: 'Wilderness encounters refined by the NexVoyage standard.',  
    propertyCount: 2  
  },  
  {  
    id: 'oasis',  
    slug: 'oasis',  
    name: 'The Oasis',  
    tag: 'Desert Serenity',  
    heroImage: '/images/sanctuaries/oasis.jpg',  
    image: '/images/sanctuaries/oasis.jpg',  
    description: 'Hidden gems in the heart of the world\'s most beautiful deserts.',  
    propertyCount: 2  
  }  
];

// Compatibility exports  
export const SANCTUARY_DATA = SANCTUARIES_DATA;  
export const sanctuaries = SANCTUARIES_DATA; 
