export interface Property {  
  id: string;  
  sanctuarySlug: string;  
  name: string;  
  location: string;  
  image: string;  
  priceLevel: string;  
  exclusiveOffer: string;  
  highlight: string;  
  description: string;  
  amenities: string[];  
}

export const PROPERTIES_DATA: Property[] = [  
  {  
    id: 'aman-new-york',  
    sanctuarySlug: 'metropolitan',  
    name: 'Aman New York',  
    location: 'Fifth Avenue, NYC',  
    image: 'https://images.unsplash.com/photo-1541333323293-8678fe04625e?q=80&w=2000&auto=format&fit=crop',  
    priceLevel: '$$$$$',  
    exclusiveOffer: 'Priority Spa Access + Guaranteed Late Checkout',  
    highlight: 'A serene sanctuary in the Crown Building, high above Manhattan.',  
    description: 'Transforming the historic Crown Building, Aman New York brings the peace of Aman to the heart of Manhattan. Featuring a three-story spa and subterranean jazz club, it is the city’s most exclusive retreat.',  
    amenities: ['Garden Terrace', 'Subterranean Jazz Club', 'Double-Height Atriums']  
  },  
  {  
    id: 'hotel-du-cap',  
    sanctuarySlug: 'cinematic',  
    name: 'Hotel du Cap-Eden-Roc',  
    location: 'Antibes, France',  
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop',  
    priceLevel: '$$$$$',  
    exclusiveOffer: 'VIP Beach Cabana + Vintage Riva Boat Tour',  
    highlight: 'The playground of legends. Pure French Riviera glamour.',  
    description: 'A masterpiece of the French Riviera, this property has hosted film royalty and legends for over a century. The saltwater pool carved into the rock remains the most iconic swimming spot in the world.',  
    amenities: ['Iconic Saltwater Pool', 'Private Pontoon', 'Dior Spa']  
  },  
  {  
    id: 'singita-ebony',  
    sanctuarySlug: 'safari',  
    name: 'Singita Ebony Lodge',  
    location: 'Sabi Sand, South Africa',  
    image: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c1e?q=80&w=2000&auto=format&fit=crop',  
    priceLevel: '$$$$$',  
    exclusiveOffer: 'Private Photographic Safari Jeep + Wine Cellar Tasting',  
    highlight: 'The pioneer of luxury safari. A canvas of wild elegance.',  
    description: 'Ebony Lodge stands among ancient trees on the banks of the Sand River. It combines the spirit of a traditional tented camp with modern luxury, offering the most intimate big five viewing in Africa.',  
    amenities: ['Private Plunge Pools', 'Game Drives', 'Riverside Dining']  
  },  
  // ... more properties to reach 18  
];

export const properties = PROPERTIES_DATA;  
