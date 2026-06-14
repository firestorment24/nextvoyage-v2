export interface Sanctuary {  
  id: string;  
  name: string;  
  loc: string;  
  atmosphere: string;  
  description: string;  
  heroImage: string;  
  price: string;  
  highlights: string[];  
  tag: string;  
  propertyCount: number;  
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
  specs: string;  
}

export const SANCTUARIES_DATA: Sanctuary[] = [  
  {  
    id: "metropolitan",  
    name: "The Metropolitan",  
    loc: "Global Hubs",  
    tag: "NEON NOIR",  
    atmosphere: "Vertical silence above the grid.",  
    description: "A collection of high-altitude refuges in the world's most demanding zip codes. Designed for those who require composure amidst the chaos of the city.",  
    heroImage: "/images/metropolitan-hero.jpg",  
    price: "From $2,800",  
    highlights: ["Subterranean Wellness", "Paramount Privacy", "Structural Composure"],  
    propertyCount: 4  
  },  
  {  
    id: "arid-modern",  
    name: "Arid Modern",  
    loc: "High Deserts",  
    tag: "ISOLATIONIST",  
    atmosphere: "Basalt, sand, and geometry.",  
    description: "Architectural statements carved into the world's most desolate landscapes. These are not just hotels, but stone monuments to solitude.",  
    heroImage: "/images/arid-hero.jpg",  
    price: "From $3,500",  
    highlights: ["Lunar Landscapes", "Monolithic Design", "Zero Light Pollution"],  
    propertyCount: 4  
  },  
  {  
    id: "deep-blue",  
    name: "Deep Blue",  
    loc: "Remote Archipelagos",  
    tag: "QUIET LUXURY",  
    atmosphere: "Horizontal infinity.",  
    description: "Maritime sanctuaries where the horizon is the only boundary. Timber and glass structures that yield entirely to the surrounding tide.",  
    heroImage: "/images/deep-blue-hero.jpg",  
    price: "From $4,200",  
    highlights: ["Marine Preservation", "Private Moorings", "Elemental Living"],  
    propertyCount: 5  
  },  
  {  
    id: "mountain-modern",  
    name: "Mountain Modern",  
    loc: "Alpine Summits",  
    tag: "BRUTALIST",  
    atmosphere: "Granite and glass defiance.",  
    description: "High-altitude fortresses built to withstand the elements while providing a vantage point of total clarity. Pine and stone interiors.",  
    heroImage: "/images/mountain-hero.jpg",  
    price: "From $2,500",  
    highlights: ["Heli-Access", "Thermal Springs", "Glacial Clarity"],  
    propertyCount: 3  
  },  
  {  
    id: "southern-gothic",  
    name: "Southern Gothic",  
    loc: "Savannah & Delta",  
    tag: "CULTURAL",  
    atmosphere: "Oak, moss, and memory.",  
    description: "Historic estates reimagined with a contemporary edge. A study in the weight of time, texture, and storied atmospheres.",  
    heroImage: "/images/southern-hero.jpg",  
    price: "From $1,200",  
    highlights: ["Heritage Preservation", "Artisan Craft", "Slow Narrative"],  
    propertyCount: 3  
  }  
];

export const PROPERTY_DATA: Property[] = [  
  {  
    id: "aman-new-york",  
    serial: "NV-LDR-001",  
    name: "Aman New York",  
    sanctuaryId: "metropolitan",  
    location: "Manhattan, USA",  
    image: "JXJNAcJDNQ7",  
    highlight: "The Crown Monument",  
    description: "A sanctuary of gold leaf and dark timber suspended above Fifth Avenue. A study in subterranean wellness and vertical composure.",  
    specs: "3-story Spa / Garden Terrace / Subterranean Jazz Club"  
  },  
  {  
    id: "amangiri",  
    serial: "NV-LDR-002",  
    name: "Amangiri",  
    sanctuaryId: "arid-modern",  
    location: "Utah, USA",  
    image: "GssaOUoI3J4",  
    highlight: "The Concrete Mesa",  
    description: "Raw concrete geometry emerging from the Navajo sandstone. A monastic approach to the high desert, centered around a prehistoric pool.",  
    specs: "600 acres / Slot Canyon Access / Monolithic Architecture"  
  },  
  {  
    id: "aman-le-melezin",  
    serial: "NV-LDR-003",  
    name: "Aman Le Mélézin",  
    sanctuaryId: "mountain-modern",  
    location: "Courchevel, France",  
    image: "mYMtnpD3UpB",  
    highlight: "The Alpine Bastion",  
    description: "Traditional Savoie architecture meets minimalist precision. Pine-clad interiors that offer a warm, silent contrast to the glacial peaks.",  
    specs: "Ski-in Access / Thermal Suites / Japanese Bathing Culture"  
  },  
  {  
    id: "stillwater-caves",  
    serial: "NV-LDR-004",  
    name: "Stillwater Caves",  
    sanctuaryId: "arid-modern",  
    location: "Undisclosed, USA",  
    image: "bVv_xym0Ckt",  
    highlight: "Subterranean Seclusion",  
    description: "A private retreat carved directly into volcanic rock. Matte black finishes and absolute silence. The ultimate isolationist retreat.",  
    specs: "Basalt Walls / Thermal Pools / Zero Signal Environment"  
  },  
  {  
    id: "sensi-azores",  
    serial: "NV-LDR-005",  
    name: "Sensi Azores",  
    sanctuaryId: "deep-blue",  
    location: "Azores, Portugal",  
    image: "BZFczgXijCL",  
    highlight: "The Atlantic Edge",  
    description: "Reclaimed farmhouse ruins converted into a minimalist maritime outpost. Positioned on the cliffside where the wind dictates the pace.",  
    specs: "Lava Rock Pools / Organic Estuarine Design / Atlantic Vantage"  
  },  
  {  
    id: "soneva-jani",  
    serial: "NV-LDR-006",  
    name: "Soneva Jani",  
    sanctuaryId: "deep-blue",  
    location: "Noonu Atoll, Maldives",  
    image: "ARrjs4vNOgk",  
    highlight: "The Liquid Horizon",  
    description: "Sustainable timber structures floating over an infinite lagoon. Retractable roofs for celestial observation. The geometry of freedom.",  
    specs: "Private Observatory / Overwater Cinemas / Castaway Privacy"  
  },  
  {  
    id: "singita-lebombo",  
    serial: "NV-LDR-007",  
    name: "Singita Lebombo",  
    sanctuaryId: "arid-modern",  
    location: "Kruger, South Africa",  
    image: "singita-lebombo.jpg",  
    highlight: "The Glass Aerie",  
    description: "Steel and glass structures perched on the basalt cliffs of the N’wanetsi River. An elevated perspective on the wild, defined by transparency.",  
    specs: "33,000 Acres / Riverside Vantage / Minimalist Safari"  
  },  
  {  
    id: "nihi-sumba",  
    serial: "NV-LDR-008",  
    name: "Nihi Sumba",  
    sanctuaryId: "deep-blue",  
    location: "Sumba, Indonesia",  
    image: "nihi-sumba.jpg",  
    highlight: "Tropical Isolation",  
    description: "A study in rugged luxury and raw nature. Built on the edge of the Indian Ocean, where the architecture respects the ancestral spirit of the land.",  
    specs: "Private Surf Break / Equestrian Sanctuary / Tribal Modernism"  
  },  
  {  
    id: "white-desert",  
    serial: "NV-LDR-009",  
    name: "White Desert",  
    sanctuaryId: "arid-modern",  
    location: "Antarctica",  
    image: "white-desert.jpg",  
    highlight: "The Frozen Outpost",  
    description: "Space-age fiberglass pods on the surface of a frozen continent. A temporary sanctuary in the most extreme environment on Earth.",  
    specs: "Echo Base / Zero Waste Logistics / Polar Exploration"  
  },  
  {  
    id: "aman-tokyo",  
    serial: "NV-LDR-010",  
    name: "Aman Tokyo",  
    sanctuaryId: "metropolitan",  
    location: "Tokyo, Japan",  
    image: "aman-tokyo.jpg",  
    highlight: "The Metropolitan Omen",  
    description: "A sanctuary of dark basalt and washi paper suspended above the Otemachi district. A study in vertical silence and city-scale composure.",  
    specs: "Otemachi Tower / 2,500m² Spa / Basalt Baths"  
  },  
  {  
    id: "perry-lane",  
    serial: "NV-LDR-011",  
    name: "Perry Lane",  
    sanctuaryId: "southern-gothic",  
    location: "Savannah, USA",  
    image: "perry-lane.jpg",  
    highlight: "The Curated Estate",  
    description: "Modern Savannah elegance defined by a curated collection of art and artifacts. A bridge between the city’s historic ghost stories and its future.",  
    specs: "Rooftop Conservatory / Artisan Studios / Historic District"  
  },  
  {  
    id: "the-fortress",  
    serial: "NV-LDR-012",  
    name: "The Fortress",  
    sanctuaryId: "mountain-modern",  
    location: "Jabal Akhdar, Oman",  
    image: "alila-jabal.jpg",  
    highlight: "Canyon Resilience",  
    description: "Constructed from local stone to vanish into the mountain range. A brutalist tribute to the Hajar Mountains, 2,000 meters above sea level.",  
    specs: "Canyon-edge Infinity Pool / Stone Architecture / High-Altitude Spa"  
  },  
  {  
    id: "post-ranch-inn",  
    serial: "NV-LDR-013",  
    name: "Post Ranch Inn",  
    sanctuaryId: "deep-blue",  
    location: "Big Sur, USA",  
    image: "post-ranch.jpg",  
    highlight: "The Pacific Ledge",  
    description: "Architectural structures of redwood and glass cantilevered over the Pacific. A retreat designed for introspection at the continent's end.",  
    specs: "No Televisions / Cliffside Soaking Tubs / Redwood Sanctuary"  
  },  
  {  
    id: "fogo-island-inn",  
    serial: "NV-LDR-014",  
    name: "Fogo Island Inn",  
    sanctuaryId: "deep-blue",  
    location: "Newfoundland, Canada",  
    image: "fogo-island.jpg",  
    highlight: "The Edge of the World",  
    description: "An X-shaped monolith on stilts, built on the jagged rocks of the North Atlantic. A bold statement of communal and environmental resilience.",  
    specs: "Handcrafted Textiles / Cinema / Rooftop Wood-Fired Saunas"  
  },  
  {  
    id: "southern-ocean-lodge",  
    serial: "NV-LDR-015",  
    name: "Southern Ocean Lodge",  
    sanctuaryId: "deep-blue",  
    location: "Kangaroo Island, Australia",  
    image: "southern-ocean.jpg",  
    highlight: "The Coastal Trace",  
    description: "A single linear structure that follows the curve of the limestone cliffs. Glass-walled suites that place you directly in the Southern Ocean gale.",  
    specs: "Ecological Restoration / Local Limestone / Wild Vantage"  
  },  
  {  
    id: "aman-sveti-stefan",  
    serial: "NV-LDR-016",  
    name: "Aman Sveti Stefan",  
    sanctuaryId: "deep-blue",  
    location: "Adriatic Coast, Montenegro",  
    image: "sveti-stefan.jpg",  
    highlight: "The Island Fort",  
    description: "A 15th-century fortified village restored to its original stonework glory. A private island where the Adriatic meets medieval silence.",  
    specs: "Historic Citadel / Pink Sand Beaches / Olive Grove Spa"  
  },  
  {  
    id: "rosewood-sao-paulo",  
    serial: "NV-LDR-017",  
    name: "Rosewood São Paulo",  
    sanctuaryId: "metropolitan",  
    location: "São Paulo, Brazil",  
    image: "rosewood-sp.jpg",  
    highlight: "The Vertical Forest",  
    description: "Jean Nouvel’s masterpiece of greenery and wood in the heart of the concrete jungle. A lush, architectural breathing space in the city.",  
    specs: "Matarazzo Tower / 450 Trees / Brazilian Modernism"  
  },  
  {  
    id: "six-senses-shaharut",  
    serial: "NV-LDR-018",  
    name: "Six Senses Shaharut",  
    sanctuaryId: "arid-modern",  
    location: "Negev Desert, Israel",  
    image: "shaharut.jpg",  
    highlight: "Desert Minimalism",  
    description: "Integrated into the Arava Valley landscape using local stone and lime. Architecture that celebrates the silence of the nomadic path.",  
    specs: "Camel Stables / Open-Air Cinema / Desert Immersion"  
  },  
  {  
    id: "north-island",  
    serial: "NV-LDR-019",  
    name: "North Island",  
    sanctuaryId: "deep-blue",  
    location: "Seychelles",  
    image: "north-island.jpg",  
    highlight: "The Private Archipelago",  
    description: "Eleven villas crafted from salvaged timber and island stone. A study in reforestation and absolute maritime isolation.",  
    specs: "Eco-Restoration / Private Tenders / Barefoot Composure"  
  }  
];

export const sanctuaries = SANCTUARIES_DATA;  
