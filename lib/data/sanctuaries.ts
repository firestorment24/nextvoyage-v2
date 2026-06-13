export interface Sanctuary {  
  id: string;  
  name: string;  
  loc: string;  
  tag: string;  
  atmosphere: string;  
  highlights: string[];  
  heroImage: string;  
  propertyCount: number;  
}

export interface Property {  
  id: string;  
  serial: string;  
  name: string;  
  location: string;  
  image: string;  
  highlight: string;  
  description: string;  
  specs: Record<string, string>;  
}

export const SANCTUARIES_DATA: Sanctuary[] = [  
  {  
    id: 'aman-le-melezin',  
    name: 'Aman Le Mélézin',  
    loc: 'Courchevel, France',  
    tag: 'Alpine Sanctuary',  
    atmosphere: 'A refined fortress of cedar and stone perched above the snowline.',  
    highlights: ['Ski-in/Ski-out Access', 'Nama Japanese Dining', 'Subterranean Spa'],  
    heroImage: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?q=80&w=2000&auto=format&fit=crop',  
    propertyCount: 12  
  },  
  {  
    id: 'singita-lebombo',  
    name: 'Singita Lebombo Lodge',  
    loc: 'Kruger Park, SA',  
    tag: 'Arid Modernism',  
    atmosphere: 'Glass-walled eyries suspended over the Nwanetsi River.',  
    highlights: ['Cliffside Suspension', 'Private Wine Reserve', 'Unrivaled Biodiversity'],  
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop',  
    propertyCount: 8  
  }  
  // ... more sanctuaries  
];

export const PROPERTY_DATA: Property[] = [  
  {  
    id: 'nv-ldr-001',  
    serial: 'NV-LDR-001',  
    name: 'Aman Le Mélézin',  
    location: 'Courchevel, France',  
    image: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'The definitive standard for alpine seclusion.',  
    description: 'A sanctuary of tranquility in the heart of Les Trois Vallées. This asset represents the pinnacle of vertical serenity, combining traditional Savoyard craftsmanship with Aman’s signature minimalist philosophy.',  
    specs: {  
      Altitude: '1,850m',  
      Configuration: 'South-Facing Suite',  
      Access: 'Direct Piste Access',  
      Security: 'Elite Perimeter Control'  
    }  
  },  
  {  
    id: 'nv-ldr-002',  
    serial: 'NV-LDR-002',  
    name: 'Singita Lebombo Lodge',  
    location: 'Kruger National Park, SA',  
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'An architectural marvel in the wild.',  
    description: 'Suspended above the river like a nest of light, this property redefines the safari experience through the lens of high-modernism and conservation.',  
    specs: {  
      Biome: 'Riverine Bushveld',  
      Structure: 'Steel & Glass Eyrie',  
      Acquisition: 'Private Concession',  
      Vibe: 'Arid Modernism'  
    }  
  },  
  {  
    id: 'nv-ldr-003',  
    serial: 'NV-LDR-003',  
    name: 'Aman New York',  
    location: 'Manhattan, USA',  
    image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'The ultimate metropolitan refuge.',  
    description: 'Located in the historic Crown Building, this sanctuary brings the serenity of the East to the high-velocity energy of Manhattan.',  
    specs: {  
      Sector: 'Midtown Manhattan',  
      Style: 'Neon Noir Minimalist',  
      Atmosphere: 'Urban Zen',  
      Privacy: 'Elevated Sanctuary'  
    }  
  }  
];  
