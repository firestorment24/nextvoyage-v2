// lib/data/sanctuaries.ts

export interface Property {  
  id: string;  
  serial: string;  
  name: string;  
  location: string;  
  image: string;  
  highlight: string;  
  description: string;  
  atmosphericTags: string[];  
  specs: { label: string; value: string }[];  
}

export const PROPERTY_DATA: Property[] = [  
  {  
    id: "azure-heights",  
    serial: "NV-LDR-001",  
    name: "Azure Heights",  
    location: "Amalfi Coast, Italy",  
    image: "https://cdn.marblism.com/yBrJxDpEKzp.webp",  
    highlight: "Gravity-defying brutalism above the Tyrrhenian.",  
    description: "A dialogue between raw concrete and the deep sapphire of the Mediterranean. Suspended 400m above sea level, the architecture is designed for the 'Blue Hour.' Rosemary and sea salt scents are piped via a geothermal ventilation system. Total acoustic isolation ensures the roar of the ocean is a choice, not a constant.",  
    atmosphericTags: ["BRUTALIST", "COASTAL NOIR", "VERTICAL"],  
    specs: [  
      { label: "Privacy Grade", value: "Class A (No Line of Sight)" },  
      { label: "Access", value: "Private Funicular / Helipad" },  
      { label: "Vetting", value: "NexVoyage Triple-Cert (Acoustics, Privacy, Air)" }  
    ]  
  },  
  {  
    id: "velvet-pines",  
    serial: "NV-LDR-002",  
    name: "Velvet Pines",  
    location: "Zermatt, Switzerland",  
    image: "https://cdn.marblism.com/uVf8PKIwMQs.webp",  
    highlight: "The pinnacle of alpine silence.",  
    description: "A high-altitude refuge carved from granite and black oak. Geothermal heating keeps floors at a constant 22°C while military-grade network encryption protects your digital footprint. Features a private ski-in/ski-out tunnel directly connecting the slopes to the master suite’s dressing room.",  
    atmosphericTags: ["ALPINE NOIR", "HYPER-PRIVATE", "GOTHIC"],  
    specs: [  
      { label: "Oxygen", value: "Sleeping Quarter Enrichment" },  
      { label: "Security", value: "On-site/Off-site Redundancy" },  
      { label: "The Standard", value: "Calibrated for 0.0dB Ambient Noise" }  
    ]  
  },  
  {  
    id: "obsidian-sands",  
    serial: "NV-LDR-003",  
    name: "Obsidian Sands",  
    location: "Santorini, Greece",  
    image: "https://cdn.marblism.com/toFNfe5Nnov.webp",  
    highlight: "Volcanic luxury on the edge.",  
    description: "A subterranean masterwork stripping away Santorini's white-and-blue cliches. Raw volcanic stone and shadow dominate. The black-mirror pool is carved into the caldera rock, reflecting the Aegean in total stillness. Lighting is strictly warm neon noir to accentuate the earth's natural textures.",  
    atmosphericTags: ["VOLCANIC NOIR", "MINIMALIST", "UNDERGROUND"],  
    specs: [  
      { label: "Climate", value: "Meltemi-Shielded Positioning" },  
      { label: "Concierge", value: "After-hours Akrotiri Access" },  
      { label: "Acoustics", value: "Natural Rock Resonance Calibration" }  
    ]  
  },  
  {  
    id: "gilded-dunes",  
    serial: "NV-LDR-004",  
    name: "Gilded Dunes",  
    location: "Dubai, UAE",  
    image: "https://cdn.marblism.com/rN5G7nLp8xq.webp",  
    highlight: "Desert royalty redefined.",  
    description: "A fortress of gold and glass rising from the Empty Quarter. The Gilded Dunes experience is built around total isolation and the 'invisible hand' of service. Sand-filtration systems keep the internal air at a crisp, mountain-air purity despite the desert heat.",  
    atmosphericTags: ["SOUTHERN GOTHIC", "NEON NOIR", "DESERT"],  
    specs: [  
      { label: "Filtration", value: "HEPA-H14 Environmental Control" },  
      { label: "Staffing", value: "3:1 Ratio (Invisible Presence)" },  
      { label: "Arrival", value: "Private Runway (G650 Compatible)" }  
    ]  
  },  
  {  
    id: "jade-canopy",  
    serial: "NV-LDR-005",  
    name: "Jade Canopy",  
    location: "Ubud, Bali",  
    image: "https://cdn.marblism.com/k9S2vM1L0p4.webp",  
    highlight: "A dialogue with the jungle.",  
    description: "High-density flora meets low-density living. Jade Canopy is a modular structure suspended above the Ayung River valley. The architecture uses bio-mimicry to blend with the rainforest, ensuring zero heat-signature and maximum cooling via natural air-channels.",  
    atmosphericTags: ["ORGANIC", "MYSTICAL", "TROPICAL NOIR"],  
    specs: [  
      { label: "Construction", value: "Zero-Impact Modular Steel" },  
      { label: "Privacy", value: "Dense Foliage Screening" },  
      { label: "Wellness", value: "Private Onsen (Volcanic Feed)" }  
    ]  
  },  
  // ... and so on for the remaining 14 properties  
];

export const SANCTUARIES_DATA = [  
  {  
    id: "azure-heights",  
    name: "Azure Heights",  
    loc: "French Riviera",  
    tag: "Vertical Serenity",  
    atmosphere: "Brutalist architecture meeting the Mediterranean cliffside. A study in blue and concrete.",  
    highlights: ["Infinity Cliff Pool", "Private Funicular", "1982 Sassicaia Cellar"],  
    heroImage: "https://cdn.marblism.com/yBrJxDpEKzp.webp",  
    propertyCount: 12  
  },  
  {  
    id: "velvet-pines",  
    name: "Velvet Pines",  
    loc: "Swiss Alps",  
    tag: "High-Altitude Refuge",  
    atmosphere: "Black oak and granite. The scent of burnt cedar and the tactile luxury of heavy cashmere.",  
    highlights: ["Ski-in/Ski-out Tunnel", "Geothermal Floors", "Oxygen-Enriched Suites"],  
    heroImage: "https://cdn.marblism.com/uVf8PKIwMQs.webp",  
    propertyCount: 8  
  }  
];  
