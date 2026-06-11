export interface Bucket {  
  id: string;  
  name: string;  
  image: string;  
  description: string;  
}

export interface Sanctuary {  
  id: string;  
  slug: string;  
  name: string;  
  tag: string;  
  location: string;  
  tagline: string;  
  heroImage: string;  
  image: string;  
  description: string;  
  propertyCount: number;  
  philosophy: string;  
  roi: string;  
  atmosphere: string;  
  highlights: string[];  
  buckets?: Bucket[];  
}

export const SANCTUARY_DATA: Sanctuary[] = [  
  {  
    id: "1",  
    slug: "metropolitan",  
    name: "The Metropolitan",  
    tag: "Urban Sovereignty",  
    location: "Global Tier-1 Hubs",  
    tagline: "The Pulse of the Machine.",  
    heroImage: "/images/sanctuaries/metropolitan-hero.jpg",  
    image: "/images/sanctuaries/metropolitan.jpg",  
    description: "High-floor fortresses in the world's most critical zip codes.",  
    propertyCount: 14,  
    philosophy: "Dominance through proximity and silence.",  
    roi: "Maximum liquidity in the world's most stable markets.",  
    atmosphere: "Steel, glass, and velvet.",  
    highlights: ["Private helipad access", "24/7 specialist security", "Soundproofed boardrooms"],  
  },  
  {  
    id: "2",  
    slug: "alpine",  
    name: "The Alpine",  
    tag: "High-Altitude Refuge",  
    location: "Swiss & French Alps",  
    tagline: "The Peak of Discretion.",  
    heroImage: "/images/sanctuaries/alpine-hero.jpg",  
    image: "/images/sanctuaries/alpine.jpg",  
    description: "Chalets built into the rock, where the air is thin and the privacy is absolute.",  
    propertyCount: 8,  
    philosophy: "Perspective from the summit.",  
    roi: "Generational assets in land-locked luxury zones.",  
    atmosphere: "Firelight and granite.",  
    highlights: ["Ski-in/Ski-out fortresses", "Oxygen-enriched suites", "Deep-cellar storage"],  
  },  
  {  
    id: "3",  
    slug: "island",  
    name: "The Island",  
    tag: "Maritime Autonomy",  
    location: "Remote Archipelagos",  
    tagline: "Sovereignty Surrounded by Blue.",  
    heroImage: "/images/sanctuaries/island-hero.jpg",  
    image: "/images/sanctuaries/island.jpg",  
    description: "Self-sustaining island estates with restricted airspace and private docks.",  
    propertyCount: 6,  
    philosophy: "Total perimeter control.",  
    roi: "Uncorrelated assets with rising scarcity value.",  
    atmosphere: "Salt, teak, and infinity.",  
    highlights: ["Desalination plants", "Submarine docks", "Signal-jamming capability"],  
  },  
  {  
    id: "4",  
    slug: "fortress",  
    name: "The Fortress",  
    tag: "Absolute Security",  
    location: "Undisclosed",  
    tagline: "Where the World Cannot Follow.",  
    heroImage: "/images/sanctuaries/fortress-hero.jpg",  
    image: "/images/sanctuaries/fortress.jpg",  
    description: "Former bunkers and high-security compounds reimagined as ultra-luxury living.",  
    propertyCount: 4,  
    philosophy: "Safety as the ultimate luxury.",  
    roi: "Insurance for the uninsurable.",  
    atmosphere: "Brass, shadow, and heavy doors.",  
    highlights: ["EMP shielding", "Biometric airlocks", "Off-grid power"],  
  },  
  {  
    id: "5",  
    slug: "stadium",  
    name: "The Stadium",  
    tag: "Spectator Supremacy",  
    location: "Sporting Capitals",  
    tagline: "The Arena is Yours.",  
    heroImage: "/images/sanctuaries/stadium-hero.jpg",  
    image: "/images/sanctuaries/stadium.jpg",  
    description: "Residential suites directly overlooking the world's most iconic pitches and tracks.",  
    propertyCount: 5,  
    philosophy: "The best seat is a permanent one.",  
    roi: "High-yield event-driven appreciation.",  
    atmosphere: "Thunderous and exclusive.",  
    highlights: ["Pitch-side balconies", "Private player tunnels", "Acoustic engineering"],  
  },  
  {  
    id: "6",  
    slug: "cinematic",  
    name: "The Cinematic",  
    tag: "Cultural Legacy",  
    location: "Historic Estates",  
    tagline: "Life, Scripted.",  
    heroImage: "/images/sanctuaries/cinematic-hero.jpg",  
    image: "/images/sanctuaries/cinematic.jpg",  
    description: "Properties with historical significance and architectural drama.",  
    propertyCount: 7,  
    philosophy: "Living within the narrative.",  
    roi: "Provenance-based value multipliers.",  
    atmosphere: "Grand, storied, and dramatic.",  
    highlights: ["Private screening rooms", "Art-gallery grade HVAC", "Library vaults"],  
  },  
  {  
    id: "7",  
    slug: "safari",  
    name: "The Safari",  
    tag: "Primal Luxury",  
    location: "Sub-Saharan Reserves",  
    tagline: "The Wild, Refined.",  
    heroImage: "/images/sanctuaries/safari-hero.jpg",  
    image: "/images/sanctuaries/safari.jpg",  
    description: "Tented camps and lodges where the only neighbors are the Big Five.",  
    propertyCount: 9,  
    philosophy: "Connection to the origin.",  
    roi: "Conservation-backed land equity.",  
    atmosphere: "Canvas, leather, and dusk.",  
    highlights: ["Night-vision optics provided", "Private ranger teams", "Star-bed decks"],  
  },  
  {  
    id: "8",  
    slug: "vineyard",  
    name: "The Vineyard",  
    tag: "Terroir Estates",  
    location: "Bordeaux & Napa",  
    tagline: "The Chemistry of Time.",  
    heroImage: "/images/sanctuaries/vineyard-hero.jpg",  
    image: "/images/sanctuaries/vineyard.jpg",  
    description: "Producing estates where the wine is as elite as the architecture.",  
    propertyCount: 11,  
    philosophy: "The luxury of the slow burn.",  
    roi: "Agricultural yield + prime real estate.",  
    atmosphere: "Oak, earth, and sunset.",  
    highlights: ["Master sommelier on-call", "Temperature-controlled cellars", "Harvest participation"],  
  },  
  {  
    id: "9",  
    slug: "desert",  
    name: "The Desert",  
    tag: "Solar Solitude",  
    location: "Middle Eastern Dunes",  
    tagline: "Silence in the Sands.",  
    heroImage: "/images/sanctuaries/desert-hero.jpg",  
    image: "/images/sanctuaries/desert.jpg",  
    description: "Mirage-like estates offering total silence and astronomical clarity.",  
    propertyCount: 3,  
    philosophy: "The power of nothingness.",  
    roi: "Emerging luxury frontier assets.",  
    atmosphere: "Copper, heat, and stars.",  
    highlights: ["Stargazing observatories", "Underground cooling pools", "Sand-shielded tech"],  
  }  
];

// Compatibility exports  
export const SANCTUARIES_DATA = SANCTUARY_DATA;  
export const sanctuaries = SANCTUARY_DATA;
