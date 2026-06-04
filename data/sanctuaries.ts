export type Sanctuary = {  
  slug: string;  
  name: string;  
  location: string;  
  tagline: string;  
  description: string;  
  heroImage: string;  
  atmosphere: string[];  
  highlights: string[];  
  propertyCount: number; // For the "Property Buckets" logic  
};

export const SANCTUARIES_DATA: Sanctuary[] = [  
  {  
    slug: "the-metropolitan",  
    name: "The Metropolitan",  
    location: "Global Urban Centers",  
    tagline: "The pulse of the city, refined.",  
    description: "A collection of sky-high retreats and historic urban landmarks. Designed for the traveler who finds peace in the energy of the world's greatest capitals.",  
    heroImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200",  
    atmosphere: ["Sophisticated", "Electric", "Architectural"],  
    highlights: ["Priority Rooftop Access", "Private Chauffeured Transfers", "Butler Service"],  
    propertyCount: 12  
  },  
  {  
    slug: "the-fortress",  
    name: "The Fortress",  
    location: "Secluded Highlands",  
    tagline: "Impenetrable peace.",  
    description: "Built into cliffsides and hidden in valley folds. These are safe havens where privacy is the ultimate luxury and the outside world ceases to exist.",  
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",  
    atmosphere: ["Monastic", "Secure", "Panoramic"],  
    highlights: ["Thermal Spas", "Off-Grid Privacy", "Helicopter Landing Pads"],  
    propertyCount: 5  
  },  
  {  
    slug: "the-floating",  
    name: "The Floating",  
    location: "Private Archipelagos",  
    tagline: "Boundless horizons, zero anchors.",  
    description: "Over-water villas and ultra-luxury yachts that move with the tide. For those who believe the best view is one that never stays the same.",  
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",  
    atmosphere: ["Fluid", "Serene", "Expansive"],  
    highlights: ["Direct Ocean Access", "Marine Conservation Tours", "Private Chefs"],  
    propertyCount: 8  
  },  
  {  
    slug: "the-oasis",  
    name: "The Oasis",  
    location: "Desert Expanses",  
    tagline: "Gold sands and emerald waters.",  
    description: "Luxury camps and desert estates where the silence is profound and the stars are brighter than anywhere else on Earth.",  
    heroImage: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80&w=1200",  
    atmosphere: ["Timeless", "Warm", "Mystical"],  
    highlights: ["Stargazing Observatories", "Camel Expeditions", "Infinity Pools"],  
    propertyCount: 4  
  },  
  {  
    slug: "the-safari",  
    name: "The Safari",  
    location: "Savannah & Wildlands",  
    tagline: "Untamed luxury.",  
    description: "Authentic connection to the wild without sacrificing a single comfort. Witness the rhythm of nature from your own private deck.",  
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",  
    atmosphere: ["Raw", "Authentic", "Vibrant"],  
    highlights: ["Expert Guided Tracks", "Open-Air Suites", "Conservation First"],  
    propertyCount: 15  
  },  
  {  
    slug: "the-alpine",  
    name: "The Alpine",  
    location: "Glacial Peaks",  
    tagline: "Peak performance, peak relaxation.",  
    description: "Ski-in/ski-out chalets and glass-walled lodges where the snow is pristine and the fires are always roaring.",  
    heroImage: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=1200",  
    atmosphere: ["Cozy", "Crisp", "Adventurous"],  
    highlights: ["Private Ski Instructors", "Après-Ski Lounges", "Heated Balconies"],  
    propertyCount: 9  
  },  
  {  
    slug: "the-island",  
    name: "The Island",  
    location: "Tropical Hideaways",  
    tagline: "Your own private paradise.",  
    description: "White sands and turquoise waters. These island retreats are for those who want to disappear into the sun and sea.",  
    heroImage: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&q=80&w=1200",  
    atmosphere: ["Tropical", "Lazy", "Lush"],  
    highlights: ["Private Beaches", "Coral Reef Diving", "Overwater Dining"],  
    propertyCount: 20  
  },  
  {  
    slug: "the-cinematic",  
    name: "The Cinematic",  
    location: "Iconic Film Settings",  
    tagline: "Live the story.",  
    description: "Properties that have served as backdrops for cinema's greatest moments. Experience the glamour of the silver screen in person.",  
    heroImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",  
    atmosphere: ["Glamorous", "Dramatic", "Nostalgic"],  
    highlights: ["Private Screening Rooms", "Historical Tours", "Iconic Views"],  
    propertyCount: 6  
  },  
  {  
    slug: "the-stadium",  
    name: "The Stadium",  
    location: "Sports & Event Hubs",  
    tagline: "Front row at the world's stage.",  
    description: "Ultra-luxe accommodation situated within or overlooking the world's most prestigious sporting venues and event centers.",  
    heroImage: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1200",  
    atmosphere: ["Energetic", "Exclusive", "Modern"],  
    highlights: ["VIP Event Access", "Luxury Suites", "In-Room Stadium Views"],  
    propertyCount: 3  
  }  
];  
