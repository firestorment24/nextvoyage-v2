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
  {  
    id: "north-island-seychelles",  
    sanctuarySlug: "the-island",  
    name: "North Island",  
    location: "Seychelles",  
    image: "https://images.unsplash.com/photo-1506929199175-fb092972955d?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "Private Island Helicopter Transfer + Scuba Certification",  
    highlight: "The world's most exclusive eco-retreat. Only 11 villas exist.",  
    amenities: ["Dedicated Guest Experience Host", "Island Buggy", "Private Chef"]  
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
  {  
    id: "four-seasons-explorer",  
    sanctuarySlug: "the-floating",  
    name: "Four Seasons Explorer",  
    location: "Palau / Maldives",  
    image: "https://images.unsplash.com/photo-1599946347341-6cdcd3a44bb4?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "Unlimited Diving + Seaplane Transfers Included",  
    highlight: "A luxury catamaran cruising the most remote reefs on Earth.",  
    amenities: ["Marine Biologist Onboard", "Sandbank BBQ", "Spa Therapist"]  
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
  {  
    id: "peninsula-paris",  
    sanctuarySlug: "the-metropolitan",  
    name: "The Peninsula Paris",  
    location: "Paris, France",  
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "Rooftop Dinner for Two + Chauffeur in Vintage Rolls-Royce",  
    highlight: "Haussmann-style grandeur steps from the Arc de Triomphe.",  
    amenities: ["L'Oiseau Blanc Dining", "Subterranean Pool", "Bespoke Concierge"]  
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
  {  
    id: "kasbah-tamadot",  
    sanctuarySlug: "the-fortress",  
    name: "Kasbah Tamadot",  
    location: "Atlas Mountains, Morocco",  
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "Mule Trek + Traditional Berber Cooking Class",  
    highlight: "Richard Branson’s mountain retreat with 360-degree peak views.",  
    amenities: ["Infinity Pool", "Luxury Berber Tents", "Hammam"]  
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
  {  
    id: "angama-mara",  
    sanctuarySlug: "the-safari",  
    name: "Angama Mara",  
    location: "Maasai Mara, Kenya",  
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "Maasai-led Walking Safari + Sundowners on the Oloololo Escarpment",  
    highlight: "Suspended mid-air where 'Out of Africa' was filmed.",  
    amenities: ["Fitness Center", "Craft Studio", "Hot Air Balloon Access"]  
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
  {  
    id: "cheval-blanc-courchevel",  
    sanctuarySlug: "the-alpine",  
    name: "Cheval Blanc",  
    location: "Courchevel 1850, France",  
    image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "Guerlain Spa Treatment + Private Ski Concierge",  
    highlight: "The Maison of high-altitude luxury by LVMH.",  
    amenities: ["3-Michelin Star Dining", "Kids' Club", "Art Collection"]  
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
  {  
    id: "qasr-al-sarab",  
    sanctuarySlug: "the-oasis",  
    name: "Qasr Al Sarab",  
    location: "Empty Quarter, Abu Dhabi",  
    image: "https://images.unsplash.com/photo-1528126383447-68ec387f9411?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "Royal Pavilion Upgrade + Night Desert Trek",  
    highlight: "A palace appearing like a mirage in the Liwa Desert.",  
    amenities: ["Library", "Tennis Courts", "Dune Bashing"]  
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
  {  
    id: "villa-d-este",  
    sanctuarySlug: "the-cinematic",  
    name: "Villa d'Este",  
    location: "Lake Como, Italy",  
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "Private Floatplane Tour + Floating Pool Access",  
    highlight: "Renaissance luxury. A living movie set on the water's edge.",  
    amenities: ["Floating Pool", "Formal Gardens", "Vintage Speedboat Rental"]  
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
  },  
  {  
    id: "park-hyatt-tokyo",  
    sanctuarySlug: "the-stadium",  
    name: "Park Hyatt Tokyo",  
    location: "Shinjuku, Tokyo",  
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800",  
    priceLevel: "$$$$$",  
    exclusiveOffer: "Sunset Jazz & Cocktails + Private Tokyo Tour",  
    highlight: "The sky-high setting for 'Lost in Translation'. Elite city views.",  
    amenities: ["Peak Lounge", "Sky Pool", "New York Grill"]  
  }  
];  
