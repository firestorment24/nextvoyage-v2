// lib/data/sanctuaries.ts

export interface Sanctuary {  
  id: string;  
  name: string;  
  tag: string;  
  image: string;  
  description: string;  
  propertyCount: number;  
}

export const SANCTUARIES_DATA: Sanctuary[] = [  
  {  
    id: 'metropolitan',  
    name: 'The Metropolitan',  
    tag: 'Urban Sophistication',  
    image: '/images/sanctuaries/metropolitan.jpg',  
    description: 'Elite urban retreats in the world\'s most vibrant capitals.',  
    propertyCount: 2  
  },  
  {  
    id: 'alpine',  
    name: 'The Alpine',  
    tag: 'High-Altitude Luxury',  
    image: '/images/sanctuaries/alpine.jpg',  
    description: 'Secluded mountain escapes with world-class amenities.',  
    propertyCount: 2  
  },  
  {  
    id: 'island',  
    name: 'The Island',  
    tag: 'Pristine Seclusion',  
    image: '/images/sanctuaries/island.jpg',  
    description: 'Private paradises surrounded by turquoise waters.',  
    propertyCount: 2  
  },  
  {  
    id: 'floating',  
    name: 'The Floating',  
    tag: 'Nautical Elegance',  
    image: '/images/sanctuaries/floating.jpg',  
    description: 'Ultra-luxury vessels and overwater villas.',  
    propertyCount: 2  
  },  
  {  
    id: 'stadium',  
    name: 'The Stadium',  
    tag: 'Elite Competition',  
    image: '/images/sanctuaries/stadium.jpg',  
    description: 'Prime access to the world\'s greatest sporting arenas.',  
    propertyCount: 2  
  },  
  {  
    id: 'cinematic',  
    name: 'The Cinematic',  
    tag: 'Grand Scale',  
    image: '/images/sanctuaries/cinematic.jpg',  
    description: 'Settings that feel like a scene from a masterpiece.',  
    propertyCount: 2  
  },  
  {  
    id: 'fortress',  
    name: 'The Fortress',  
    tag: 'Impenetrable Security',  
    image: '/images/sanctuaries/fortress.jpg',  
    description: 'The ultimate in privacy and tactical protection.',  
    propertyCount: 2  
  },  
  {  
    id: 'safari',  
    name: 'The Safari',  
    tag: 'Untamed Elegance',  
    image: '/images/sanctuaries/safari.jpg',  
    description: 'Wilderness encounters refined by the NexVoyage standard.',  
    propertyCount: 2  
  },  
  {  
    id: 'oasis',  
    name: 'The Oasis',  
    tag: 'Desert Serenity',  
    image: '/images/sanctuaries/oasis.jpg',  
    description: 'Hidden gems in the heart of the world\'s most beautiful deserts.',  
    propertyCount: 2  
  }  
];

// Double-lock export to satisfy both singular and plural naming conventions  
export const SANCTUARY_DATA = SANCTUARIES_DATA;  
export const sanctuaries = SANCTUARIES_DATA; 
