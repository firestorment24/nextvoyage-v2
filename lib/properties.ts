export interface Property {  
  id: string  
  sanctuarySlug: string  
  name: string  
  location: string  
  image: string  
  priceLevel: string  
  exclusiveOffer: string  
  highlight: string  
  amenities: string[]  
}

export const PROPERTIES_DATA: Property[] = [  
  {  
    id: 'london-sanctuary',  
    sanctuarySlug: 'the-metropolitan',  
    name: 'The London Sanctuary',  
    location: 'Mayfair, London',  
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=2000',  
    priceLevel: '$$$$$',  
    exclusiveOffer: 'Subterranean Spa Access + Private Butler',  
    highlight: 'A redoubt in the heart of Mayfair, optimized for executive recovery.',  
    amenities: ['Bulletproof Glass', 'Private Chauffeur', '24/7 Security'],  
  },  
  {  
    id: 'tokyo-sanctuary',  
    sanctuarySlug: 'the-metropolitan',  
    name: 'The Tokyo Sanctuary',  
    location: 'Otemachi, Tokyo',  
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=2000',  
    priceLevel: '$$$$$',  
    exclusiveOffer: 'Zen Garden Meditation + Private Chef',  
    highlight: 'Minimalist granite and shadow high above the Imperial Palace.',  
    amenities: ['Sleep Optimization Suite', 'Discrete Entry', 'Tea Ceremony Room'],  
  },  
  {  
    id: 'nyc-sanctuary',  
    sanctuarySlug: 'the-metropolitan',  
    name: 'The New York Sanctuary',  
    location: 'Fifth Avenue, NYC',  
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=2000',  
    priceLevel: '$$$$$',  
    exclusiveOffer: 'Helipad Transfer + Rooftop Lounge Access',  
    highlight: 'Total anonymity in the Crown Building, high above Manhattan.',  
    amenities: ['Garden Terrace', 'Jazz Club Access', 'Double-Height Atriums'],  
  },  
  {  
    id: 'alpine-sanctuary',  
    sanctuarySlug: 'the-alpine',  
    name: 'The Alpine Sanctuary',  
    location: 'Courchevel, French Alps',  
    image: 'https://cdn.marblism.com/rTkVlumUYJA.webp',  
    priceLevel: '$$$$$',  
    exclusiveOffer: 'Private Ski-In/Ski-Out + Night Vision Patrols',  
    highlight: 'A glass-encased fortress nestled in the high-altitude silence.',  
    amenities: ['Thermal Wellness Circuit', 'Oxygen-Enriched Suites', 'Snow-Track Security'],  
  },  
  {  
    id: 'safari-sanctuary',  
    sanctuarySlug: 'the-safari',  
    name: 'The Safari Sanctuary',  
    location: 'Serengeti, Tanzania',  
    image: 'https://cdn.marblism.com/kO_s8woNZ9T.webp',  
    priceLevel: '$$$$$',  
    exclusiveOffer: 'Biometric Ranger Escort + Private Bush Flight',  
    highlight: 'Elevated luxury in the wild, protected by elite wildlife units.',  
    amenities: ['Eco-Conscious Fortress', 'Star-Gazing Deck', 'Silent Electric Rovers'],  
  },  
  {  
    id: 'floating-sanctuary',  
    sanctuarySlug: 'the-floating',  
    name: 'The Floating Sanctuary',  
    location: 'International Waters',  
    image: 'https://cdn.marblism.com/iPblXvucCCw.webp',  
    priceLevel: '$$$$$',  
    exclusiveOffer: 'Radar-Stealth Hull + Deep-Sea Exploration',  
    highlight: 'A mobile sovereignty platform featuring a Submerged Salon.',  
    amenities: ['Maritime Autonomy', 'Helipad', 'Anti-Drone Defense'],  
  },  
  {  
    id: 'island-sanctuary',  
    sanctuarySlug: 'the-island',  
    name: 'The Island Sanctuary',  
    location: 'Private Atoll, South Pacific',  
    image: 'https://cdn.marblism.com/82ZuEcFFlGb.webp',  
    priceLevel: '$$$$$',  
    exclusiveOffer: 'Reef Vault Access + No-Fly Zone Security',  
    highlight: 'Total isolation within an acoustic sensor perimeter.',  
    amenities: ['Tidal Infinity Pool', 'Solar Autonomy', 'Underwater Escape Tunnel'],  
  },  
]  
