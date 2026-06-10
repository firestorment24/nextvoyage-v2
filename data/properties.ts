export interface Property {  
id: string;  
sanctuaryId: string;  
name: string;  
location: string;  
heroImage: string;  
priceLevel: string;  
exclusiveOffer: string;  
categoryDescription: string;  
amenities: string[];  
}

export const PROPERTIES_DATA: Property[] = [  
{  
  id: 'st-moritz-chalet',  
  sanctuaryId: 'alpine',  
  name: 'Cresta Estate',  
  location: 'St. Moritz, Switzerland',  
  heroImage: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb',  
  priceLevel: '$$$$',  
  exclusiveOffer: 'Private Heli-Ski Session included',  
  categoryDescription: 'An ultra-private mountain sanctuary with direct glacier access.',  
  amenities: ['Private Spa', 'Butler Service', 'Wine Cellar']  
},  
{  
  id: 'aman-new-york',  
  sanctuaryId: 'metropolitan',  
  name: 'The Crown Penthouse',  
  location: 'Manhattan, NYC',  
  heroImage: 'https://images.unsplash.com/photo-1496564203457-11bb1209f4ff',  
  priceLevel: '$$$$',  
  exclusiveOffer: 'After-hours MOMA access',  
  categoryDescription: 'A sky-high retreat in the heart of the Fifth Avenue pulse.',  
  amenities: ['Terrace Pool', 'Jazz Club Access', 'Holistic Spa']  
},  
{  
  id: 'singita-lebo',  
  sanctuaryId: 'safari',  
  name: 'Lebombo Lodge',  
  location: 'Kruger Park, South Africa',  
  heroImage: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c17',  
  priceLevel: '$$$$',  
  exclusiveOffer: 'Dawn Photography Workshop',  
  categoryDescription: 'Glass-walled suites suspended over the N’wanetsi River.',  
  amenities: ['Guided Safaris', 'Stargazing Deck', 'Infinite Pool']  
}  
];

// Compatibility export  
export const properties = PROPERTIES_DATA; 
