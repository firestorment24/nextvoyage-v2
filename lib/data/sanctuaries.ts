// lib/data/sanctuaries.ts

export interface Sanctuary {  
  id: string;  
  name: string;  
  tag: string;  
  location: string;  
  philosophy: string;  
  roi: string;  
  atmosphere: string;  
  highlights: string[];  
}

export const SANCTUARY_DATA: Record<string, Sanctuary> = {  
  'metropolitan': {  
    id: 'metropolitan',  
    name: 'The Metropolitan Trio',  
    tag: 'Urban Dominance',  
    location: 'London / NYC / Tokyo',  
    philosophy: "Absolute command of the world's primary hubs. Not just an address, but a strategic foothold.",  
    roi: 'High-liquidity prime assets with consistent 12-15% occupancy premiums.',  
    atmosphere: 'Glass, steel, and shadow. High-floor silence amidst urban chaos.',  
    highlights: ['Private rooftop helipads', '24/7 discrete security detail', 'Subterranean private entrances'],  
  },  
  'fortress': {  
    id: 'fortress',  
    name: 'The Fortress',  
    tag: 'Absolute Privacy',  
    location: 'Swiss Alps',  
    philosophy: 'Architecture as a shield. Designed for those who require the world to disappear.',  
    roi: 'Generational wealth preservation; rare land-use permits included.',  
    atmosphere: 'Raw stone, thermal waters, and total acoustic isolation.',  
    highlights: ['EMP-shielded comms room', 'Self-sustaining geothermal power', 'Classified location mapping'],  
  },  
  'stadium': {  
    id: 'stadium',  
    name: 'The Stadium',  
    tag: 'Elite Access',  
    location: 'Global Circuits',  
    philosophy: 'The convergence of sport and sovereignty. Front-row command of the world’s arenas.',  
    roi: 'High-yield event-driven revenue; exclusive multi-year licensing rights.',  
    atmosphere: 'Vibrant, electric, but entirely insulated from the crowd.',  
    highlights: ['Direct-to-box private lifts', 'Acoustic glass dampening', 'Michelin-grade in-suite dining'],  
  },  
  'alpine': {  
    id: 'alpine',  
    name: 'The Alpine Estate',  
    tag: 'High-Altitude Refinement',  
    location: 'Courchevel',  
    philosophy: 'Elevation as a metric of success. Peak luxury at the edge of the habitable world.',  
    roi: 'Scarcity-driven appreciation; limited high-altitude inventory.',  
    atmosphere: 'Oak, cashmere, and firelight against a backdrop of ice.',  
    highlights: ['Ski-in/Ski-out private bay', 'Cryotherapy recovery suite', 'Altitude-adjusted oxygen control'],  
  },  
  'cinematic': {  
    id: 'cinematic',  
    name: 'The Cinematic Archive',  
    tag: 'Visual Legacy',  
    location: 'Amalfi Coast',  
    philosophy: 'Life lived as an editorial. A celebration of aesthetics, history, and light.',  
    roi: 'Brand-value amplification; prime location for high-end production.',  
    atmosphere: 'Terraced gardens, lemon groves, and boundless azure horizons.',  
    highlights: ['Private cliffside funicular', 'Restored 17th-century frescoes', 'Amphibious arrival dock'],  
  },  
  'safari': {  
    id: 'safari',  
    name: 'The Safari Outpost',  
    tag: 'Raw Elegance',  
    location: 'Serengeti',  
    philosophy: 'The ultimate contrast. Primal nature met with industrial-strength luxury.',  
    roi: 'Conservation-backed security; exclusive territorial land rights.',  
    atmosphere: 'Canvas, leather, and the heavy silence of the plains.',  
    highlights: ['Anti-poaching security mesh', 'Off-grid solar redundancy', 'Starlight navigation deck'],  
  },  
  'oasis': {  
    id: 'oasis',  
    name: 'The Desert Oasis',  
    tag: 'Silent Luxury',  
    location: 'Marrakech',  
    philosophy: 'The geometry of solitude. Finding abundance in the heart of the void.',  
    roi: 'Strategic mid-east foothold; high privacy-to-sq-ft ratio.',  
    atmosphere: 'Tadelakt, running water, and deep, cool shadows.',  
    highlights: ['Internal courtyard microclimates', 'Subterranean spa systems', 'Traditional mosaic craftsmanship'],  
  },  
  'floating': {  
    id: 'floating',  
    name: 'The Floating Sanctuary',  
    tag: 'Nautical Sovereignty',  
    location: 'Mediterranean',  
    philosophy: 'Freedom from geography. A moveable feast of privacy and power.',  
    roi: 'Global mobility; high charter-yield capability during peak seasons.',  
    atmosphere: 'Polished teak, salt air, and total maritime silence.',  
    highlights: ['Stabilized landing pads', 'Deep-sea exploration tender', 'Encrypted satellite arrays'],  
  },  
  'island': {  
    id: 'island',  
    name: 'The Island Keep',  
    tag: 'Isolated Majesty',  
    location: 'Seychelles',  
    philosophy: 'The perimeter is the ocean. Complete autonomy over your own ecosystem.',  
    roi: 'The ultimate trophy asset; zero-density development potential.',  
    atmosphere: 'White sand, granite, and absolute territorial control.',  
    highlights: ['Inland private airstrip', 'Custom desalination systems', 'Coral reef monitoring center'],  
  },  
};

export const SANCTUARIES_LIST = Object.values(SANCTUARY_DATA);  
