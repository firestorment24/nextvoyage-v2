// lib/data/sanctuaries.ts

export interface Property {  
  id: string;  
  serial: string;  
  name: string;  
  location: string;  
  image: string;  
  highlight: string;  
  description: string;  
  atmosphericTags: string[]; // New metadata layer  
  specs: {  
    label: string;  
    value: string;  
  }[];  
}

export const PROPERTY_DATA: Property[] = [  
  {  
    id: "nv-ldr-001",  
    serial: "01",  
    name: "Aman New York",  
    location: "Manhattan, USA",  
    image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2000&auto=format&fit=crop",  
    highlight: "The Crown Building Sanctuary",  
    description: "A serene architectural masterpiece rising above the pulse of Fifth Avenue.",  
    atmosphericTags: ["BRUTALIST", "NEON NOIR"],  
    specs: [{ label: "Vibe", value: "Executive Sanctuary" }, { label: "Privacy", value: "Level 4" }]  
  },  
  {  
    id: "nv-ldr-002",  
    serial: "02",  
    name: "Amangiri",  
    location: "Canyon Point, Utah",  
    image: "https://images.unsplash.com/photo-1505245208761-ba873552c061?q=80&w=2000&auto=format&fit=crop",  
    highlight: "The High-Desert Monolith",  
    description: "Concrete architecture blending seamlessly into the 600-acre Colorado Plateau.",  
    atmosphericTags: ["MINIMALIST", "MOUNTAIN MODERN"],  
    specs: [{ label: "Vibe", value: "Arid Modern" }, { label: "Privacy", value: "Level 5" }]  
  },  
  {  
    id: "nv-ldr-003",  
    serial: "03",  
    name: "Post Ranch Inn",  
    location: "Big Sur, California",  
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2000&auto=format&fit=crop",  
    highlight: "Cliffside Seclusion",  
    description: "Where the redwoods meet the Pacific at the edge of the world.",  
    atmosphericTags: ["COASTAL BRUTALIST", "ISOLATIONIST"],  
    specs: [{ label: "Vibe", value: "Coastal Ridge" }, { label: "Privacy", value: "Level 5" }]  
  },  
  {  
    id: "nv-ldr-004",  
    serial: "04",  
    name: "Stillwater Caves",  
    location: "Subterranean Region",  
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop",  
    highlight: "The Blackout Suite",  
    description: "Absolute silence and total darkness in a climate-controlled cavern.",  
    atmosphericTags: ["SUBTERRANEAN", "MATTE BLACK"],  
    specs: [{ label: "Vibe", value: "Pure Isolation" }, { label: "Privacy", value: "Level X" }]  
  },  
  {  
    id: "nv-ldr-005",  
    serial: "05",  
    name: "Sensi Azores",  
    location: "São Miguel, Portugal",  
    image: "https://images.unsplash.com/photo-1538964173425-93884d739596?q=80&w=2000&auto=format&fit=crop",  
    highlight: "The Atlantic Perimeter",  
    description: "Volcanic gardens and high-performance recovery on the edge of the Atlantic.",  
    atmosphericTags: ["TORQUE & TRANQUILITY", "DEEP BLUE"],  
    specs: [{ label: "Vibe", value: "Performance Recovery" }, { label: "Privacy", value: "Level 3" }]  
  },  
  {  
    id: "nv-ldr-006",  
    serial: "06",  
    name: "Soneva Jani",  
    location: "Noonu Atoll, Maldives",  
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop",  
    highlight: "The Blue Void",  
    description: "Overwater villas with retractable roofs for celestial observation.",  
    atmosphericTags: ["DEEP BLUE", "QUIET LUXURY"],  
    specs: [{ label: "Vibe", value: "Celestial Marine" }, { label: "Privacy", value: "Level 4" }]  
  },  
  {  
    id: "nv-ldr-007",  
    serial: "07",  
    name: "Singita Lebombo",  
    location: "Kruger Park, South Africa",  
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop",  
    highlight: "The Glass Aerie",  
    description: "Suspended steel and glass structures overlooking the N'wanetsi River.",  
    atmosphericTags: ["ARID MODERN", "ISOLATIONIST"],  
    specs: [{ label: "Vibe", value: "Safari Brutalism" }, { label: "Privacy", value: "Level 5" }]  
  },  
  {  
    id: "nv-ldr-008",  
    serial: "08",  
    name: "Nihi Sumba",  
    location: "Sumba, Indonesia",  
    image: "https://images.unsplash.com/photo-1540206395-6880f94933af?q=80&w=2000&auto=format&fit=crop",  
    highlight: "The Edge of Wildness",  
    description: "Rugged luxury where ancient culture meets the Indian Ocean.",  
    atmosphericTags: ["TROPICAL ISOLATIONIST", "QUIET LUXURY"],  
    specs: [{ label: "Vibe", value: "Rugged Cultural" }, { label: "Privacy", value: "Level 4" }]  
  },  
  {  
    id: "nv-ldr-009",  
    serial: "09",  
    name: "White Desert",  
    location: "Antarctica",  
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop",  
    highlight: "Echo Base Luxury",  
    description: "The ultimate frontier. Living in luxury pods on the frozen continent.",  
    atmosphericTags: ["FROZEN", "ISOLATIONIST"],  
    specs: [{ label: "Vibe", value: "Polar Tactical" }, { label: "Privacy", value: "Level 6" }]  
  },  
  {  
    id: "nv-ldr-010",  
    serial: "10",  
    name: "Aman Tokyo",  
    location: "Otemachi, Japan",  
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2000&auto=format&fit=crop",  
    highlight: "The Vertical Sanctuary",  
    description: "A monumental basalt and washi-paper oasis in the sky.",  
    atmosphericTags: ["ZEN MINIMALISM", "NEON NOIR"],  
    specs: [{ label: "Vibe", value: "Urban Zen" }, { label: "Privacy", value: "Level 4" }]  
  },  
  {  
    id: "nv-ldr-011",  
    serial: "11",  
    name: "Perry Lane",  
    location: "Savannah, USA",  
    image: "https://images.unsplash.com/photo-1541804084-2168caa5bbad?q=80&w=2000&auto=format&fit=crop",  
    highlight: "The High-Art Dossier",  
    description: "Eclectic luxury amidst the moss-draped history of Savannah.",  
    atmosphericTags: ["SOUTHERN GOTHIC", "CULTURAL"],  
    specs: [{ label: "Vibe", value: "Curated Historic" }, { label: "Privacy", value: "Level 3" }]  
  },  
  {  
    id: "nv-ldr-012",  
    serial: "12",  
    name: "The Fortress",  
    location: "Scottish Highlands",  
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop",  
    highlight: "Zero-Signal Zone",  
    description: "A converted granite stronghold designed for total digital blackout.",  
    atmosphericTags: ["MATTE BLACK", "BRUTALIST"],  
    specs: [{ label: "Vibe", value: "Fortified Seclusion" }, { label: "Privacy", value: "Level 6" }]  
  },  
  {  
    id: "nv-ldr-013",  
    serial: "13",  
    name: "Jade Mountain",  
    location: "Soufrière, St. Lucia",  
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=2000&auto=format&fit=crop",  
    highlight: "Structural Organicism",  
    description: "Three-walled sanctuaries open to the Pitons and the Caribbean Sea.",  
    atmosphericTags: ["ORGANIC MODERN", "TROPICAL"],  
    specs: [{ label: "Vibe", value: "Open-Air Modern" }, { label: "Privacy", value: "Level 4" }]  
  },  
  {  
    id: "nv-ldr-014",  
    serial: "14",  
    name: "Fogo Island Inn",  
    location: "Newfoundland, Canada",  
    image: "https://images.unsplash.com/photo-1517009572053-93fb56df76e9?q=80&w=2000&auto=format&fit=crop",  
    highlight: "Edge of the North",  
    description: "A stilts-raised marvel on the wild coast of the North Atlantic.",  
    atmosphericTags: ["ARCHITECTURAL", "FROZEN"],  
    specs: [{ label: "Vibe", value: "North Atlantic Modern" }, { label: "Privacy", value: "Level 5" }]  
  },  
  {  
    id: "nv-ldr-015",  
    serial: "15",  
    name: "Claridge's",  
    location: "Mayfair, London",  
    image: "https://images.unsplash.com/photo-1551882547-ff43c63be5c2?q=80&w=2000&auto=format&fit=crop",  
    highlight: "The Deco Engine",  
    description: "The annex of Buckingham Palace; the height of Mayfair prestige.",  
    atmosphericTags: ["ART DECO", "HISTORIC"],  
    specs: [{ label: "Vibe", value: "Old World Elite" }, { label: "Privacy", value: "Level 4" }]  
  },  
  {  
    id: "nv-ldr-016",  
    serial: "16",  
    name: "Burj Al Arab",  
    location: "Dubai, UAE",  
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2000&auto=format&fit=crop",  
    highlight: "The Gilded Sail",  
    description: "Technological maximalism standing on its own man-made island.",  
    atmosphericTags: ["MAXIMALIST", "NEON NOIR"],  
    specs: [{ label: "Vibe", value: "Hyper-Luxury" }, { label: "Privacy", value: "Level 5" }]  
  },  
  {  
    id: "nv-ldr-017",  
    serial: "17",  
    name: "Rosewood São Paulo",  
    location: "São Paulo, Brazil",  
    image: "https://images.unsplash.com/photo-1496568816309-51d7c7a8e121?q=80&w=2000&auto=format&fit=crop",  
    highlight: "The Vertical Forest",  
    description: "A Jean Nouvel-designed sanctuary bringing the jungle to the concrete city.",  
    atmosphericTags: ["BOTANICAL", "MODERN"],  
    specs: [{ label: "Vibe", value: "Botanical Urban" }, { label: "Privacy", value: "Level 3" }]  
  },  
  {  
    id: "nv-ldr-018",  
    serial: "18",  
    name: "Six Senses Shaharut",  
    location: "Negev Desert, Israel",  
    image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=2000&auto=format&fit=crop",  
    highlight: "Ara Valley Silence",  
    description: "Stone architecture reflecting the biblical landscape of the Arava Valley.",  
    atmosphericTags: ["DESERT MINIMALISM", "ISOLATIONIST"],  
    specs: [{ label: "Vibe", value: "Ancient Modern" }, { label: "Privacy", value: "Level 5" }]  
  },  
  {  
    id: "nv-ldr-019",  
    serial: "19",  
    name: "North Island",  
    location: "Seychelles",  
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop",  
    highlight: "Noah’s Ark luxury",  
    description: "A private island sanctuary dedicated to ecological restoration and total privacy.",  
    atmosphericTags: ["DEEP BLUE", "QUIET LUXURY"],  
    specs: [{ label: "Vibe", value: "Conservation Luxe" }, { label: "Privacy", value: "Level 6" }]  
  }  
];  
