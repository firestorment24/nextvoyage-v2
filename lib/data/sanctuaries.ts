export interface Sanctuary {  
  id: string;  
  name: string;  
  tag: string;  
  location: string;  
  atmosphere: string;  
  description: string;  
  heroImage: string;  
  propertyCount: number;  
  highlights: string[];  
}

export interface Property {  
  id: string;  
  serial: string;  
  name: string;  
  sanctuaryId: string;  
  location: string;  
  image: string;  
  highlight: string;  
  description: string;  
  specs: {  
    label: string;  
    value: string;  
  }[];  
}

export const SANCTUARIES_DATA: Sanctuary[] = [  
  {  
    id: 'metropolitan',  
    name: 'The Metropolitan',  
    tag: 'NEON NOIR',  
    location: 'Global Hubs',  
    atmosphere: 'High-density, vertical, and absolute.',  
    description: 'Calculated seclusion within the world\'s most chaotic epicenters.',  
    heroImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000',  
    propertyCount: 3,  
    highlights: ['Vertical Isolation', 'Digital Sovereignty', 'Armored Transport']  
  },  
  {  
    id: 'fortress',  
    name: 'The Fortress',  
    tag: 'MATTE BLACK',  
    location: 'Remote Enclaves',  
    atmosphere: 'Inpenetrable, brutalist, and silent.',  
    description: 'Architecture as defense. Privacy as a physical barrier.',  
    heroImage: 'https://images.unsplash.com/photo-1518005020251-58296b87b7a1?auto=format&fit=crop&q=80&w=2000',  
    propertyCount: 2,  
    highlights: ['Subterranean Vaults', 'Signal Shielding', 'Natural Defensibility']  
  },  
  {  
    id: 'oasis',  
    name: 'The Oasis',  
    tag: 'MINIMALIST',  
    location: 'Arid Lowlands',  
    atmosphere: 'Geometric, warm, and restorative.',  
    description: 'Finding life where it shouldn\'t exist. Luxury in the void.',  
    heroImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2000',  
    propertyCount: 2,  
    highlights: ['Thermal Regulation', 'Silent Water', 'Infinite Horizons']  
  },  
  {  
    id: 'alpine',  
    name: 'The Alpine',  
    tag: 'BRUTALIST',  
    location: 'High Altitudes',  
    atmosphere: 'Frozen, stark, and sharp.',  
    description: 'Commanding views from the edge of the habitable world.',  
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2000',  
    propertyCount: 3,  
    highlights: ['Elevation Logic', 'Thermal Mass', 'Vertical Access']  
  },  
  {  
    id: 'island',  
    name: 'The Island',  
    tag: 'DEEP BLUE',  
    location: 'Private Atolls',  
    atmosphere: 'Infinite, azure, and untraceable.',  
    description: 'Geographic erasure. The ultimate maritime retreat.',  
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000',  
    propertyCount: 6,  
    highlights: ['Maritime Borders', 'Eco-Sovereignty', 'Submerged Access']  
  },  
  {  
    id: 'safari',  
    name: 'The Safari',  
    tag: 'ARID MODERN',  
    location: 'Uncharted Wilds',  
    atmosphere: 'Organic, raw, and visceral.',  
    description: 'Primary contact with the natural order, buffered by design.',  
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2000',  
    propertyCount: 1,  
    highlights: ['Apex Observation', 'Nomadic Logic', 'Organic Integration']  
  },  
  {  
    id: 'cinematic',  
    name: 'The Cinematic',  
    tag: 'MOOD BOARD',  
    location: 'Aesthetic Sites',  
    atmosphere: 'Stylized, evocative, and surreal.',  
    description: 'Environments that blur the line between reality and set design.',  
    heroImage: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=2000',  
    propertyCount: 2,  
    highlights: ['Visual Narrative', 'Dramatic Lighting', 'Curated Geometry']  
  }  
];

export const PROPERTY_DATA: Property[] = [  
  {  
    id: 'aman-ny',  
    serial: 'NV-LDR-001',  
    name: 'Aman New York',  
    sanctuaryId: 'metropolitan',  
    location: 'Manhattan, USA',  
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'VERTICAL ISOLATION',  
    description: 'An architectural fortress in the center of global commerce.',  
    specs: [{ label: 'Access', value: 'Private Elevator' }, { label: 'Security', value: 'Unrivaled' }]  
  },  
  {  
    id: 'amangiri',  
    serial: 'NV-LDR-002',  
    name: 'Amangiri',  
    sanctuaryId: 'oasis',  
    location: 'Canyon Point, Utah',  
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'DESERT MINIMALISM',  
    description: 'Concrete geometry blending into the stratified rock of the Utah desert.',  
    specs: [{ label: 'Terrain', value: 'High Desert' }, { label: 'Visibility', value: 'Zero' }]  
  },  
  {  
    id: 'post-ranch',  
    serial: 'NV-LDR-003',  
    name: 'Post Ranch Inn',  
    sanctuaryId: 'alpine',  
    location: 'Big Sur, California',  
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'COASTAL BRUTALIST',  
    description: 'Cantilevered architecture suspended over the Pacific abyss.',  
    specs: [{ label: 'Elevation', value: '1,200 FT' }, { label: 'Air', value: 'Marine Layer' }]  
  },  
  {  
    id: 'stillwater-caves',  
    serial: 'NV-LDR-004',  
    name: 'Stillwater Caves',  
    sanctuaryId: 'fortress',  
    location: 'Undisclosed Location',  
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'SUBTERRANEAN VAULT',  
    description: 'The ultimate in depth-based security and silence.',  
    specs: [{ label: 'Depth', value: '200M' }, { label: 'Status', value: 'Classified' }]  
  },  
  {  
    id: 'sensi-azores',  
    serial: 'NV-LDR-005',  
    name: 'Sensi Azores',  
    sanctuaryId: 'island',  
    location: 'São Miguel, Portugal',  
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'VOLCANIC ISOLATION',  
    description: 'Deep Atlantic seclusion within a thermal landscape.',  
    specs: [{ label: 'Water', value: 'Geothermal' }, { label: 'Borders', value: 'Open Sea' }]  
  },  
  {  
    id: 'soneva-jani',  
    serial: 'NV-LDR-006',  
    name: 'Soneva Jani',  
    sanctuaryId: 'island',  
    location: 'Noonu Atoll, Maldives',  
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'AQUATIC SOVEREIGNTY',  
    description: 'Overwater architecture designed for complete maritime erasure.',  
    specs: [{ label: 'Lagoon', value: 'Private' }, { label: 'Access', value: 'Seaplane Only' }]  
  },  
  {  
    id: 'singita-lebombo',  
    serial: 'NV-LDR-007',  
    name: 'Singita Lebombo',  
    sanctuaryId: 'safari',  
    location: 'Kruger National Park, SA',  
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'APEX OBSERVATION',  
    description: 'Glass-walled structures on the edge of the N\'wanetsi River.',  
    specs: [{ label: 'Fauna', value: 'High Density' }, { label: 'Intel', value: 'Thermal Range' }]  
  },  
  {  
    id: 'nihi-sumba',  
    serial: 'NV-LDR-008',  
    name: 'Nihi Sumba',  
    sanctuaryId: 'island',  
    location: 'Sumba, Indonesia',  
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'TROPICAL ISOLATIONIST',  
    description: 'The edge of the wild, where the horizon never ends.',  
    specs: [{ label: 'Beach', value: 'Private' }, { label: 'Vibe', value: 'Raw' }]  
  },  
  {  
    id: 'white-desert',  
    serial: 'NV-LDR-009',  
    name: 'White Desert',  
    sanctuaryId: 'alpine',  
    location: 'Antarctica',  
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'FROZEN SILENCE',  
    description: 'The final frontier of human habitation.',  
    specs: [{ label: 'Temp', value: '-20C' }, { label: 'Horizon', value: 'Infinite' }]  
  },  
  {  
    id: 'perry-lane',  
    serial: 'NV-LDR-011',  
    name: 'Perry Lane',  
    sanctuaryId: 'metropolitan',  
    location: 'Savannah, Georgia',  
    image: 'https://images.unsplash.com/photo-1551882547-ff43c638f614?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'SOUTHERN GOTHIC',  
    description: 'A cultural anchor within the historic grid.',  
    specs: [{ label: 'Context', value: 'Urban' }, { label: 'Culture', value: 'Deep' }]  
  },  
  {  
    id: 'the-fortress-val',  
    serial: 'NV-LDR-012',  
    name: 'The Fortress',  
    sanctuaryId: 'fortress',  
    location: 'Swiss Alps',  
    image: 'https://images.unsplash.com/photo-1518005020251-58296b87b7a1?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'BRUTALIST SUMMIT',  
    description: 'Concrete geometry etched into the granite face.',  
    specs: [{ label: 'Defense', value: 'High' }, { label: 'Access', value: 'Funicular' }]  
  },  
  {  
    id: 'jade-mountain',  
    serial: 'NV-LDR-013',  
    name: 'Jade Mountain',  
    sanctuaryId: 'island',  
    location: 'Soufrière, St. Lucia',  
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'ORGANIC MODERN',  
    description: 'Architecture without walls. Living in the Pitons.',  
    specs: [{ label: 'View', value: 'Pitons' }, { label: 'Space', value: 'Infinite Pool' }]  
  },  
  {  
    id: 'fogo-island',  
    serial: 'NV-LDR-014',  
    name: 'Fogo Island Inn',  
    sanctuaryId: 'island',  
    location: 'Newfoundland, Canada',  
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'ARCTIC MARITIME',  
    description: 'Stark modernity on the edge of the North Atlantic.',  
    specs: [{ label: 'Borders', value: 'Iceberg Alley' }, { label: 'Vibe', value: 'Stark' }]  
  },  
  {  
    id: 'rosewood-sp',  
    serial: 'NV-LDR-017',  
    name: 'Rosewood São Paulo',  
    sanctuaryId: 'metropolitan',  
    location: 'São Paulo, Brazil',  
    image: 'https://images.unsplash.com/photo-1496560230581-ed31f87b5a3e?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'VERTICAL GARDEN',  
    description: 'A botanical tower rising from the concrete jungle.',  
    specs: [{ label: 'Vibe', value: 'Matte' }, { label: 'Tone', value: 'Deep' }]  
  },  
  {  
    id: 'shaharut',  
    serial: 'NV-LDR-018',  
    name: 'Six Senses Shaharut',  
    sanctuaryId: 'oasis',  
    location: 'Negev Desert, Israel',  
    image: 'https://images.unsplash.com/photo-1533038595781-64505312389d?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'DESERT ISOLATION',  
    description: 'Silent stone dwellings integrated into the Arava Valley.',  
    specs: [{ label: 'Starlight', value: 'Absolute' }, { label: 'Air', value: 'Dry' }]  
  },  
  {  
    id: 'north-island',  
    serial: 'NV-LDR-019',  
    name: 'North Island',  
    sanctuaryId: 'island',  
    location: 'Seychelles',  
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'ECOLOGICAL LUXURY',  
    description: 'A private archipelago for the ultimate in sovereign rest.',  
    specs: [{ label: 'Island', value: 'Private' }, { label: 'Access', value: 'Helicopter' }]  
  }  
];

// Added for backward compatibility with components that might use the 'sanctuaries' name  
export const sanctuaries = SANCTUARIES_DATA;  
