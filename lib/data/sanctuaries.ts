// lib/data/sanctuaries.ts

export interface Sanctuary {  
  id: string;  
  name: string;  
  loc: string;  
  tag: string;  
  heroImage: string;  
  atmosphere: string;  
  highlights: string[];  
  atmosphericTags: string[];  
  specs: {  
    label: string;  
    value: string;  
  }[];  
}
 
export const SANCTUARIES: Sanctuary[] = [  
  {  
    id: "azure-heights",  
    name: "Azure Heights",  
    loc: "Amalfi Coast, Italy",  
    tag: "The blue hour, perfected.",  
    heroImage: "https://cdn.marblism.com/toFNfe5Nnov.webp",  
    atmosphere: "A gravity-defying brutalist villa 400m above the Tyrrhenian. The air carries rosemary and sea salt; the silence is absolute.",  
    highlights: ["Private Funicular Access", "Volcanic Stone Infinity Pool", "1982 Sassicaia Cellar"],  
    atmosphericTags: ["BRUTALIST", "COASTAL NOIR", "VERTICAL"],  
    specs: [  
      { label: "Privacy Grade", value: "Class A (No Line of Sight)" },  
      { label: "Access", value: "Private Helipad / Funicular" },  
      { label: "Vetting", value: "NexVoyage Triple-Cert" }  
    ]  
  },  
  {  
    id: "velvet-pines",  
    name: "Velvet Pines",  
    loc: "Zermatt, Switzerland",  
    tag: "The pinnacle of alpine silence.",  
    heroImage: "https://cdn.marblism.com/mRxfQ0N2_io.webp",  
    atmosphere: "A high-altitude refuge wrapped in charred timber and velvet. Deep isolation with a direct view of the Matterhorn's north face.",  
    highlights: ["Oxygen-Enriched Suites", "Sub-Zero Recovery Spa", "Monastic Design Aesthetic"],  
    atmosphericTags: ["NEON NOIR", "ALPINE", "MINIMALIST"],  
    specs: [  
      { label: "Isolation", value: "Level 9 (Deep Alpine)" },  
      { label: "Design", value: "Wabi-Sabi Industrial" },  
      { label: "Service", value: "Invisible Staffing" }  
    ]  
  },  
  {  
    id: "obsidian-sands",  
    name: "Obsidian Sands",  
    loc: "Santorini, Greece",  
    tag: "Volcanic luxury on the edge.",  
    heroImage: "https://cdn.marblism.com/mRxfQ0N2_io.webp",  
    atmosphere: "Carved into the caldera, this sanctuary uses volcanic basalt to create a temperature-stable subterranean paradise.",  
    highlights: ["In-Cave Cinema", "Black Sand Private Beach", "Geothermal Plunge Pools"],  
    atmosphericTags: ["SOUTHERN GOTHIC", "VOLCANIC", "DARK LUXE"],  
    specs: [  
      { label: "Structure", value: "Subterranean Basalt" },  
      { label: "Privacy", value: "Caldera Edge (Absolute)" },  
      { label: "Security", value: "Biometric Access" }  
    ]  
  },  
  {  
    id: "gilded-dunes",  
    name: "Gilded Dunes",  
    loc: "Dubai, UAE",  
    tag: "Desert royalty redefined.",  
    heroImage: "https://cdn.marblism.com/vaBnm6isJ-C.webp",  
    atmosphere: "A fortress of gold and glass in the deep desert. Advanced sand-filtration and climate control create a perpetual 22°C oasis.",  
    highlights: ["Private Runway (G650)", "HEPA-H14 Environment", "Stargazing Observatory"],  
    atmosphericTags: ["NEON NOIR", "DESERT", "CYBERPUNK"],  
    specs: [  
      { label: "Climate", value: "Internal Micro-Biosphere" },  
      { label: "Arrival", value: "Private G650 Runway" },  
      { label: "Staffing", value: "3:1 Ratio" }  
    ]  
  },  
  {  
    id: "jade-canopy",  
    name: "Jade Canopy",  
    loc: "Ubud, Bali",  
    tag: "A dialogue with the jungle.",  
    heroImage: "https://cdn.marblism.com/vEIkjdyc8FE.webp",  
    atmosphere: "Zero-impact modular architecture suspended in the Ubud rainforest. Bio-mimicry at its most luxurious.",  
    highlights: ["Volcanic Feed Onsen", "Zero Heat-Signature", "Foliage Screening"],  
    atmosphericTags: ["ORGANIC", "MYSTICAL", "TROPICAL NOIR"],  
    specs: [  
      { label: "Impact", value: "Zero-Footprint Modular" },  
      { label: "Wellness", value: "Private Volcanic Onsen" },  
      { label: "Acoustics", value: "Active Noise Cancellation" }  
    ]  
  },  
  // ... and the remaining 14 properties mapping to the same structure  
];  
