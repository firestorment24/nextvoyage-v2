// data/properties.ts

export interface Property {  
  id: string;  
  name: string;  
  sanctuaryId: string;  
  location: string;  
  image: string;  
  tagline: string;  
  startingPrice: string;  
  amenities: string[];  
}

export const PROPERTY_DATA: Property[] = [  
  {  
    id: 'aman-le-melezin',  
    name: 'Aman Le Mélézin',  
    sanctuaryId: 'alpine',  
    location: 'Courchevel, France',  
    image: 'https://images.unsplash.com/photo-1551882547-ff43c63fedfe',  
    tagline: 'Ski-in, ski-out elegance in the heart of Les Trois Vallées.',  
    startingPrice: '$2,800',  
    amenities: ['Private Butler', 'Hammam', 'Ski Concierge']  
  },  
  {  
    id: 'singita-lebombo',  
    name: 'Singita Lebombo Lodge',  
    sanctuaryId: 'safari',  
    location: 'Kruger National Park, South Africa',  
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',  
    tagline: 'A glass-walled sanctuary suspended over the N’wanetsi River.',  
    startingPrice: '$3,500',  
    amenities: ['Private Game Drive', 'Wine Boutique', 'Stargazing Deck']  
  },  
  {  
    id: 'aman-new-york',  
    name: 'Aman New York',  
    sanctuaryId: 'metropolitan',  
    location: 'Manhattan, USA',  
    image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d',  
    tagline: 'An architectural icon reborn as a peaceful urban retreat.',  
    startingPrice: '$3,200',  
    amenities: ['Garden Terrace', 'Jazz Club', 'Holistic Spa']  
  },  
  {  
    id: 'amanpuri',  
    name: 'Amanpuri',  
    sanctuaryId: 'island',  
    location: 'Phuket, Thailand',  
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',  
    tagline: 'The original sanctuary on a private peninsula.',  
    startingPrice: '$1,900',  
    amenities: ['Private Beach', 'Eco-Discovery Club', 'Holistic Wellness']  
  },  
  {  
    id: 'amangiri',  
    name: 'Amangiri',  
    sanctuaryId: 'desert',  
    location: 'Canyon Point, Utah',  
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',  
    tagline: 'Luminous canyons and starkly beautiful desert soul.',  
    startingPrice: '$4,100',  
    amenities: ['Canyon Pavilions', 'Floatation Therapy', 'Private Aviation Access']  
  }  
];

// Compatibility export to fix the build errors  
export const properties = PROPERTY_DATA; 
