export type Property = {  
  id: string;  
  sanctuarySlug: string; // Links it to The Metropolitan, The Floating, etc.  
  name: string;  
  location: string;  
  image: string;  
  priceLevel: "$$$$" | "$$$$$";  
  exclusiveOffer: string;  
  highlight: string;  
  amenities: string[];  
};

export const PROPERTIES_DATA: Property[] = [  
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
  }  
];  
