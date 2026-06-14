// lib/data/sanctuaries.ts

export interface Intelligence {  
  access: string;  
  security: string;  
  atmosphere: string;  
}

export interface Property {  
  id: string;  
  serial: string;  
  name: string;  
  location: string;  
  image: string;  
  highlight: string;  
  description: string;  
  tags: string[];  
  intelligence: Intelligence;  
}

export const PROPERTY_DATA: Property[] = [  
  {  
    id: "aman-new-york",  
    serial: "NV-LDR-001",  
    name: "Aman New York",  
    location: "Manhattan, USA",  
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Gilded Grid",  
    description: "A neon-noir retreat within the Crown Building. Silence at the center of the world's highest frequency.",  
    tags: ["BRUTALIST", "NEON NOIR"],  
    intelligence: {  
      access: "Bespoke elevator access; Private residential entrance.",  
      security: "Triple-layered biometric authentication for the Sky Lobby.",  
      atmosphere: "Hushed gold, dark stone, and absolute composure."  
    }  
  },  
  {  
    id: "amangiri",  
    serial: "NV-LDR-002",  
    name: "Amangiri",  
    location: "Canyon Point, USA",  
    image: "https://images.unsplash.com/photo-1502675135487-e971002a6adb?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Mesa Monolith",  
    description: "Poured concrete blending into 180-million-year-old rock. Minimalist architecture as an extension of the desert.",  
    tags: ["MINIMALIST", "MOUNTAIN MODERN"],  
    intelligence: {  
      access: "Private airstrip (PGA) within 20 minutes.",  
      security: "Natural perimeter surveillance via mesa elevation.",  
      atmosphere: "Arid silence and geometric precision."  
    }  
  },  
  {  
    id: "post-ranch-inn",  
    serial: "NV-LDR-003",  
    name: "Post Ranch Inn",  
    location: "Big Sur, USA",  
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Pacific Edge",  
    description: "Cantilevered structures of reclaimed wood and steel. Where the continent ends and the fog begins.",  
    tags: ["COASTAL BRUTALIST", "ISOLATIONIST"],  
    intelligence: {  
      access: "Highway 1 restricted vehicle protocols.",  
      security: "Cliffside isolation; zero-drone flyover zone.",  
      atmosphere: "Fog-heavy, cedar-scented, and profoundly private."  
    }  
  },  
  {  
    id: "stillwater-caves",  
    serial: "NV-LDR-004",  
    name: "Stillwater Caves",  
    location: "Secret Location",  
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Subterranean Vault",  
    description: "Excavated luxury. A series of interconnected stone chambers hidden beneath the waterline.",  
    tags: ["SUBTERRANEAN", "MATTE BLACK"],  
    intelligence: {  
      access: "Amphibious entry only.",  
      security: "Signal-jammed architecture; concrete shielding.",  
      atmosphere: "The weight of the earth; total sensory deprivation."  
    }  
  },  
  {  
    id: "sensi-azores",  
    serial: "NV-LDR-005",  
    name: "Sensi Azores",  
    location: "São Miguel, Portugal",  
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Volcanic Forge",  
    description: "Basalt walls meet the Atlantic. A study in the tension between fire-formed rock and deep ocean currents.",  
    tags: ["TORQUE & TRANQUILITY", "DEEP BLUE"],  
    intelligence: {  
      access: "Maritime docking via private bay.",  
      security: "Isolated peninsula; single-point land entry.",  
      atmosphere: "Salt-sprayed stone and oceanic gravity."  
    }  
  },  
  {  
    id: "soneva-jani",  
    serial: "NV-LDR-006",  
    name: "Soneva Jani",  
    location: "Noonu Atoll, Maldives",  
    image: "https://images.unsplash.com/photo-1540202404-a2f29016bb5d?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Azure Spiral",  
    description: "Overwater architecture that mirrors the geometry of the stars. Untethered luxury on a private lagoon.",  
    tags: ["DEEP BLUE", "QUIET LUXURY"],  
    intelligence: {  
      access: "Private seaplane fleet (Soneva Sky).",  
      security: "360-degree maritime surveillance; atoll isolation.",  
      atmosphere: "Weightless, fluid, and brilliantly blue."  
    }  
  },  
  {  
    id: "singita-lebombo",  
    serial: "NV-LDR-007",  
    name: "Singita Lebombo",  
    location: "Kruger, South Africa",  
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Arid Eyrie",  
    description: "Glass-walled suites suspended over the N'Wanetsi River. An eagle’s-eye view of the wild interior.",  
    tags: ["ARID MODERN", "ISOLATIONIST"],  
    intelligence: {  
      access: "Private lodge airstrip; 4x4 extraction.",  
      security: "Natural fauna barrier; 33,000-acre private concession.",  
      atmosphere: "Sun-bleached wood and predatory focus."  
    }  
  },  
  {  
    id: "nihi-sumba",  
    serial: "NV-LDR-008",  
    name: "Nihi Sumba",  
    location: "Sumba, Indonesia",  
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Edge of Wildness",  
    description: "Unfiltered access to the Occy’s Left break. A sanctuary where the jungle dissolves into the Indian Ocean.",  
    tags: ["TROPICAL ISOLATIONIST", "QUIET LUXURY"],  
    intelligence: {  
      access: "Sumba island transfer via private turboprop.",  
      security: "Discreet local guardianship; remote island protocol.",  
      atmosphere: "Raw, unscripted, and spiritually grounded."  
    }  
  },  
  {  
    id: "white-desert",  
    serial: "NV-LDR-009",  
    name: "White Desert",  
    location: "Antarctica",  
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Frozen Outpost",  
    description: "Luxury pods at the edge of the world. The ultimate testament to human composure in extreme environments.",  
    tags: ["FROZEN", "ISOLATIONIST"],  
    intelligence: {  
      access: "Gulfstream 550 landing on blue ice runway.",  
      security: "Total environmental isolation; zero human presence within 500 miles.",  
      atmosphere: "Crystalline, silent, and monochromatic."  
    }  
  },  
  {  
    id: "aman-tokyo",  
    serial: "NV-LDR-010",  
    name: "Aman Tokyo",  
    location: "Tokyo, Japan",  
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Otemachi Lantern",  
    description: "A basalt sanctuary suspended above the Imperial Gardens. Tradition distilled into skyscrapers.",  
    tags: ["METROPOLITAN", "ZEN BRUTALISM"],  
    intelligence: {  
      access: "Direct helipad connection; private garage entry.",  
      security: "Kanda-level precision monitoring.",  
      atmosphere: "Washi paper, dark stone, and urban stillness."  
    }  
  },  
  {  
    id: "perry-lane",  
    serial: "NV-LDR-011",  
    name: "Perry Lane",  
    location: "Savannah, USA",  
    image: "https://images.unsplash.com/photo-1549611016-3a70d82b5040?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Southern Shadow",  
    description: "Spanish moss and high-culture secrets. A curated residence within the historic grid.",  
    tags: ["SOUTHERN GOTHIC", "CULTURAL"],  
    intelligence: {  
      access: "Private alleyway valet; residential key protocols.",  
      security: "Understated surveillance via architectural integration.",  
      atmosphere: "Velvet, oak, and intellectual weight."  
    }  
  },  
  {  
    id: "the-fortress",  
    serial: "NV-LDR-012",  
    name: "The Fortress",  
    location: "Koggala, Sri Lanka",  
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Indigo Rampart",  
    description: "Dutch colonial echoes met with modern stone. A bastion of privacy on the southern coast.",  
    tags: ["MATTE BLACK", "BRUTALIST"],  
    intelligence: {  
      access: "Private beach landing; secure perimeter gates.",  
      security: "High-walled courtyard architecture.",  
      atmosphere: "Teak, linen, and defensive tranquility."  
    }  
  },  
  {  
    id: "aman-le-melezin",  
    serial: "NV-LDR-013",  
    name: "Aman Le Mélézin",  
    location: "Courchevel, France",  
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Alpine Keep",  
    description: "Ski-in, ski-out sanctuary on the Bellecôte Piste. French manor elegance meets Japanese restraint.",  
    tags: ["ALPINE", "QUIET LUXURY"],  
    intelligence: {  
      access: "Courchevel Altiport transfer (10 mins).",  
      security: "Secure ski-room vaults; private level access.",  
      atmosphere: "Snow-dampened silence and pine-scented warmth."  
    }  
  },  
  {  
    id: "fogo-island-inn",  
    serial: "NV-LDR-014",  
    name: "Fogo Island Inn",  
    location: "Newfoundland, Canada",  
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The North Atlantic Stilts",  
    description: "A brutalist wooden structure perched on 420-million-year-old rocks. Composure amidst the elements.",  
    tags: ["ARCHITECTURAL", "FROZEN"],  
    intelligence: {  
      access: "Charter flight to Fogo Airstrip; private ferry.",  
      security: "Remote island isolation; natural maritime barrier.",  
      atmosphere: "Hand-crafted, stark, and geographically defiant."  
    }  
  },  
  {  
    id: "cheetah-plains",  
    serial: "NV-LDR-015",  
    name: "Cheetah Plains",  
    location: "Sabi Sands, SA",  
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Carbon Safari",  
    description: "Electric vehicles and zero-noise tracking. The future of wildlife engagement, rendered in steel and glass.",  
    tags: ["TECH-FORWARD", "ARID MODERN"],  
    intelligence: {  
      access: "Arathusa airstrip connection.",  
      security: "Infrared perimeter monitoring; zero-noise footprint.",  
      atmosphere: "Electric, sharp, and intensely focused."  
    }  
  },  
  {  
    id: "hotel-du-cap-eden-roc",  
    serial: "NV-LDR-016",  
    name: "Hotel du Cap-Eden-Roc",  
    location: "Antibes, France",  
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Riviera Omen",  
    description: "White limestone and maritime pines. A legacy of composure preserved since 1870.",  
    tags: ["LEGACY", "DEEP BLUE"],  
    intelligence: {  
      access: "Private yacht tender access; legendary ladder entry.",  
      security: "Institutional-grade privacy protocols for dignitaries.",  
      atmosphere: "Old-world weight and sun-bleached stone."  
    }  
  },  
  {  
    id: "rosewood-sao-paulo",  
    serial: "NV-LDR-017",  
    name: "Rosewood São Paulo",  
    location: "São Paulo, Brazil",  
    image: "https://images.unsplash.com/photo-1445013544690-d30045d04b1f?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Vertical Forest",  
    description: "Jean Nouvel’s masterpiece of terracotta and greenery. A botanical fortress in the heart of the city.",  
    tags: ["BOTANICAL", "MODERN"],  
    intelligence: {  
      access: "Secured underground motor court; private elevators.",  
      security: "Integrated smart-building surveillance.",  
      atmosphere: "Verdant, textured, and vibrantly quiet."  
    }  
  },  
  {  
    id: "six-senses-shaharut",  
    serial: "NV-LDR-018",  
    name: "Six Senses Shaharut",  
    location: "Negev, Israel",  
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Arava Mirage",  
    description: "Sandstone and limestone camouflaged against the Negev. A sanctuary of dust and stars.",  
    tags: ["DESERT MINIMALISM", "ISOLATIONIST"],  
    intelligence: {  
      access: "Private desert transfer from Ramon Airport.",  
      security: "Horizon-line surveillance; natural valley defenses.",  
      atmosphere: "Amber, dry, and celestial."  
    }  
  },  
  {  
    id: "north-island",  
    serial: "NV-LDR-019",  
    name: "North Island",  
    location: "Seychelles",  
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200",  
    highlight: "The Noah’s Ark",  
    description: "Ecological restoration meets absolute seclusion. Only eleven villas, carved from granite and drift-logs.",  
    tags: ["DEEP BLUE", "QUIET LUXURY"],  
    intelligence: {  
      access: "Helicopter transfer from Mahé (20 mins).",  
      security: "Full island sovereignty; restricted maritime zone.",  
      atmosphere: "Ancient, lush, and completely untethered."  
    }  
  }  
];

export const SANCTUARIES = PROPERTY_DATA; // For backward compatibility with the archive grid 
