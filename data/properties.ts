export type Property = {  
  id: string;  
  sanctuarySlug: string;   
  name: string;  
  location: string;  
  image: string;  
  priceLevel: "$$$$" | "$$$$$";  
  exclusiveOffer: string;  
  highlight: string;  
  amenities: string[];  
};

export const PROPERTIES_DATA: Property[] = [  
  // THE ISLAND  
  {  
    id: "amanpuri-phuket",  
    sanctuarySlug: "the-island",  
    name: "Amanpuri",  
    location: "Phuket, Thailand",  
    image: "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "Complimentary 4th night + Private Beach Dinner",  
    highlight: "The original Aman. Unmatched privacy on the Andaman coast.",  
    amenities: ["Private Pavilion", "Holistic Wellness Center", "Black Tiled Pool"]  
  },  
  // THE FLOATING  
  {  
    id: "evrima-yacht",  
    sanctuarySlug: "the-floating",  
    name: "Evrima | Ritz-Carlton Yacht Collection",  
    location: "Mediterranean / Caribbean",  
    image: "https://images.unsplash.com/photo-1544433330-9d8ba2182062?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "$500 Onboard Credit + Suite Upgrade",  
    highlight: "A superyacht experience with the service of the Ritz-Carlton.",  
    amenities: ["All-Suite Terrace", "Michelin-Inspired Dining", "Personal Concierge"]  
  },  
  // THE METROPOLITAN  
  {  
    id: "aman-new-york",  
    sanctuarySlug: "the-metropolitan",  
    name: "Aman New York",  
    location: "Fifth Avenue, NYC",  
    image: "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "Priority Spa Access + Guaranteed Late Checkout",  
    highlight: "A serene sanctuary in the Crown Building, high above Manhattan.",  
    amenities: ["Garden Terrace", "Subterranean Jazz Club", "Double-Height Atriums"]  
  },  
  // THE FORTRESS  
  {  
    id: "amangiri-utah",  
    sanctuarySlug: "the-fortress",  
    name: "Amangiri",  
    location: "Canyon Point, Utah",  
    image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "Private Guided Hike + Stargazing Experience",  
    highlight: "Blends into the rock. The ultimate desert isolation.",  
    amenities: ["Floating Hot Tub", "Navajo-Inspired Spa", "Via Ferrata Access"]  
  },  
  // THE SAFARI  
  {  
    id: "singita-ebony",  
    sanctuarySlug: "the-safari",  
    name: "Singita Ebony Lodge",  
    location: "Sabi Sand, South Africa",  
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "Private Photographic Safari Jeep + Wine Cellar Tasting",  
    highlight: "The pioneer of luxury safari. A canvas of wild elegance.",  
    amenities: ["Private Plunge Pools", "Game Drives", "Riverside Dining"]  
  },  
  // THE ALPINE  
  {  
    id: "badrutts-palace",  
    sanctuarySlug: "the-alpine",  
    name: "Badrutt's Palace",  
    location: "St. Moritz, Switzerland",  
    image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "Daily Ski Pass + Rolls-Royce Station Transfers",  
    highlight: "The crown jewel of the Alps. Where heritage meets the snow.",  
    amenities: ["Indoor Infinity Pool", "Private Butler", "Nightclub Access"]  
  },  
  // THE OASIS  
  {  
    id: "al-maha-dubai",  
    sanctuarySlug: "the-oasis",  
    name: "Al Maha Desert Resort",  
    location: "Dubai, UAE",  
    image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "Desert Sundowners + Guided Falconry Session",  
    highlight: "A lush palm oasis nestled deep within the rolling dunes.",  
    amenities: ["Bedouin-Style Suites", "Private Infinity Pools", "Gazelle Sightings"]  
  },  
  // THE CINEMATIC  
  {  
    id: "hotel-du-cap",  
    sanctuarySlug: "the-cinematic",  
    name: "Hotel du Cap-Eden-Roc",  
    location: "Antibes, France",  
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "VIP Beach Cabana + Vintage Riva Boat Tour",  
    highlight: "The playground of legends. Pure French Riviera glamour.",  
    amenities: ["Iconic Saltwater Pool", "Private Pontoon", "Dior Spa"]  
  },  
  // THE STADIUM  
  {  
    id: "hotel-de-paris",  
    sanctuarySlug: "the-stadium",  
    name: "Hotel de Paris Monte-Carlo",  
    location: "Monaco",  
    image: "https://images.unsplash.com/photo-1559121225-4c9620ca6e8d?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "Grand Prix Balcony Access + Casino Privé Entry",  
    highlight: "Front row at the Casino Square and the world's most famous race track.",  
    amenities: ["Michelin 3-Star Dining", "Diamond Suites", "Underground Wine Cellar"]  
  }  
];  
