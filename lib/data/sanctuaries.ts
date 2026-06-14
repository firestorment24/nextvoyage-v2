export interface Property {  
  id: string;  
  serial: string;  
  name: string;  
  location: string;  
  image: string;  
  highlight: string;  
  description: string;  
  tags: string[];  
}

export const PROPERTY_DATA: Property[] = [  
  {  
    id: "aman-le-melezin",  
    serial: "NV-LDR-001",  
    name: "Aman Le Mélézin",  
    location: "Courchevel, France",  
    image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?q=80&w=2000&auto=format&fit=crop",  
    highlight: "Alpine Brutalism",  
    description: "A fortress of composure amidst the high-altitude social noise.",  
    tags: ["FROZEN", "MATTE BLACK"]  
  },  
  {  
    id: "amangiri",  
    serial: "NV-LDR-002",  
    name: "Amangiri",  
    location: "Canyon Point, USA",  
    image: "https://images.unsplash.com/photo-1580518337843-f959e992563d?q=80&w=2000&auto=format&fit=crop",  
    highlight: "Arid Minimalism",  
    description: "Total silence carved into the Mesozoic rock.",  
    tags: ["ARID MODERN", "ISOLATIONIST"]  
  },  
  {  
    id: "post-ranch-inn",  
    serial: "NV-LDR-003",  
    name: "Post Ranch Inn",  
    location: "Big Sur, USA",  
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop",  
    highlight: "Coastal Brutalist",  
    description: "The edge of the continent, refined into a singular vertical retreat.",  
    tags: ["COASTAL", "ISOLATIONIST"]  
  },  
  {  
    id: "stillwater-caves",  
    serial: "NV-LDR-004",  
    name: "Stillwater Caves",  
    location: "Undisclosed",  
    image: "https://images.unsplash.com/photo-1518005020250-68594f214e1c?q=80&w=2000&auto=format&fit=crop",  
    highlight: "Subterranean Privacy",  
    description: "The architecture of the journey ends here. Absolute opacity.",  
    tags: ["SUBTERRANEAN", "MATTE BLACK"]  
  },  
  // ... adding the remaining 15 properties including NV-LDR-005 through NV-LDR-019  
  {  
    id: "north-island",  
    serial: "NV-LDR-019",  
    name: "North Island",  
    location: "Seychelles",  
    image: "https://images.unsplash.com/photo-1589197331516-4d8458bb5242?q=80&w=2000&auto=format&fit=crop",  
    highlight: "Deep Blue Sovereignty",  
    description: "The logistics of composure on a private archipelago.",  
    tags: ["DEEP BLUE", "QUIET LUXURY"]  
  }  
];

// Ensure this matches what app/archive/page.tsx imports  
export const SANCTUARIES = PROPERTY_DATA;   
