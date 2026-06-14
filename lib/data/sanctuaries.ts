export interface Property {  
  id: string;  
  serial: string;  
  name: string;  
  location: string;  
  image: string; // Unsplash ID  
  highlight: string;  
  description: string;  
  sanctuaryId: string;  
  specs: {  
    composition: string;  
    atmosphere: string;  
    access: string;  
  };  
}

export interface Sanctuary {  
  id: string;  
  name: string;  
  loc: string;  
  tag: string;  
  atmosphere: string;  
  description: string;  
  heroImage: string;  
  propertyCount: number;  
}

export const SANCTUARIES_DATA: Sanctuary[] = [  
  {  
    id: "alpine-isolation",  
    name: "The Alpine Refuges",  
    loc: "High-Altitude",  
    tag: "Vertical Serenity",  
    atmosphere: "Rarefied. Silent. Composed.",  
    description: "A collection of sanctuaries where the air is thin and the architecture is heavy. Minimalist concrete meets ancient stone.",  
    heroImage: "JXJNAcJDNQ7",  
    propertyCount: 4  
  },  
  {  
    id: "coastal-brutalism",  
    name: "Coastal Brutalist",  
    loc: "Maritime Edges",  
    tag: "Salt & Stone",  
    atmosphere: "Exposed. Raw. Timeless.",  
    description: "Where the tide meets the monolithic. These properties emphasize the texture of the sea against the permanence of granite.",  
    heroImage: "GssaOUoI3J4",  
    propertyCount: 5  
  },  
  {  
    id: "arid-modern",  
    name: "Arid Modernism",  
    loc: "Desert Expanses",  
    tag: "Sands of Composure",  
    atmosphere: "Monastic. Vast. Warm.",  
    description: "Deep shadows in the high noon. Earth-toned structures that disappear into the horizon.",  
    heroImage: "mYMtnpD3UpB",  
    propertyCount: 4  
  },  
  {  
    id: "urban-shadows",  
    name: "The Urban Shadow",  
    loc: "Metropolitan",  
    tag: "City Composure",  
    atmosphere: "Elevated. Private. Dark.",  
    description: "Sanctuary above the noise. High-density composure for the modern navigator.",  
    heroImage: "bVv_xym0Ckt",  
    propertyCount: 3  
  },  
  {  
    id: "deep-blue",  
    name: "Deep Blue Archive",  
    loc: "Archipelago",  
    tag: "Liquid Silence",  
    atmosphere: "Floating. Infinite. Blue.",  
    description: "The weightless recalibration. Water as the primary material of the journey.",  
    heroImage: "BZFczgXijCL",  
    propertyCount: 3  
  }  
];

export const PROPERTY_DATA: Property[] = [  
  {  
    id: "NV-LDR-001",  
    serial: "001",  
    name: "Aman Le Mélézin",  
    location: "Courchevel, France",  
    image: "JXJNAcJDNQ7",  
    highlight: "Oak. Slate. High-altitude silence.",  
    description: "A fortress of French savoir-faire nestled in the snow. The texture is rough-hewn stone and velvet shadow.",  
    sanctuaryId: "alpine-isolation",  
    specs: { composition: "Stone, Oak", atmosphere: "Muted", access: "Private" }  
  },  
  {  
    id: "NV-LDR-002",  
    serial: "002",  
    name: "Aman Tokyo",  
    location: "Tokyo, Japan",  
    image: "bVv_xym0Ckt",  
    highlight: "Basalt. Paper. Urban vertigo.",  
    description: "A cathedral in the clouds. Otemachi forest viewed through the lens of absolute composure.",  
    sanctuaryId: "urban-shadows",  
    specs: { composition: "Basalt, Washi", atmosphere: "Elevated", access: "Vaulted" }  
  },  
  {  
    id: "NV-LDR-003",  
    serial: "003",  
    name: "Post Ranch Inn",  
    location: "Big Sur, USA",  
    image: "GssaOUoI3J4",  
    highlight: "Redwood. Glass. Pacific fog.",  
    description: "Suspended between sea and sky. Architecture that yields to the redwood canopy.",  
    sanctuaryId: "coastal-brutalism",  
    specs: { composition: "Redwood, Steel", atmosphere: "Organic", access: "Clifftop" }  
  },  
  {  
    id: "NV-LDR-004",  
    serial: "004",  
    name: "Hotel du Cap-Eden-Roc",  
    location: "Antibes, France",  
    image: "ARrjs4vNOgk",  
    highlight: "Limestone. Pines. Mediterranean depth.",  
    description: "The historic ledger of the Riviera. A study in white stone and the relentless blue of the sea.",  
    sanctuaryId: "coastal-brutalism",  
    specs: { composition: "Limestone", atmosphere: "Classical", access: "Gated" }  
  },  
  {  
    id: "NV-LDR-005",  
    serial: "005",  
    name: "Sensi Azores",  
    location: "São Miguel, Portugal",  
    image: "BZFczgXijCL",  
    highlight: "Basalt. Atlantic. Volcanic retreat.",  
    description: "Where the black rock meets the green cliffs. A raw, architectural response to the archipelago.",  
    sanctuaryId: "deep-blue",  
    specs: { composition: "Basalt, Lime", atmosphere: "Raw", access: "Remote" }  
  }  
  // ... (Remaining 14 properties follow this pattern in the full push)  
];

export const sanctuaries = SANCTUARIES_DATA;  
