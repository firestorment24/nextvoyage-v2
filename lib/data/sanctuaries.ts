export interface Sanctuary {  
  id: string;  
  name: string;  
  loc: string;  
  tag: string;  
  heroImage: string;  
  image: string;  
  description: string;  
  philosophy: string;  
  roi: string;  
  atmosphere: string;  
  highlights: string[];  
}

export interface Property {  
  id: string;  
  sanctuaryId: string;  
  serial: string;  
  name: string;  
  location: string;  
  image: string;  
  description: string;  
  highlight: string; // The singular highlight for the detail page header  
  highlights: string[]; // The plural array for the list  
  intelligence: string;  
  atmosphere: string;  
  specs: { // The technical data object  
    [key: string]: string;  
  };  
}

export const SANCTUARIES_DATA: Sanctuary[] = [  
  {  
    id: "altiplano",  
    name: "The Altiplano Core",  
    loc: "High Desert / Utah / Oman",  
    tag: "Monolithic Solitude",  
    heroImage: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7",  
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7",  
    description: "High-altitude refuges where the architecture disappears into the geology.",  
    philosophy: "The erasure of the boundary between structure and stone.",  
    roi: "Absolute privacy through elevation and extreme terrain isolation.",  
    atmosphere: "Silent, arid, and profoundly still.",  
    highlights: ["Subterranean Suites", "Thermal Inertia Design", "Zero-Light Pollution"]  
  },  
  {  
    id: "brutalist",  
    name: "The Brutalist Coast",  
    loc: "Seychelles / Big Sur / Turks & Caicos",  
    tag: "Coastal Brutalism",  
    heroImage: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",  
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",  
    description: "Angular, raw-concrete sanctuaries meeting the violent edge of the ocean.",  
    philosophy: "Strength against the elements; comfort within the fortress.",  
    roi: "High-yield maritime assets with permanent environmental security.",  
    atmosphere: "Salt-sprayed, heavy, and undeniably powerful.",  
    highlights: ["Cantilevered Decks", "Offshore Privacy Buffers", "Hurricane-Grade Shells"]  
  },  
  {  
    id: "nordic",  
    name: "The Nordic Void",  
    loc: "Iceland / Antarctica / Greenland",  
    tag: "Thermal Contrast",  
    heroImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",  
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",  
    description: "Ultra-insulated glass structures in the world's most hostile cold zones.",  
    philosophy: "Total exposure to the view, total protection from the climate.",  
    roi: "Strategic positioning in emerging high-latitude luxury markets.",  
    atmosphere: "Crisp, hyper-modern, and emotionally recalibrating.",  
    highlights: ["Heli-In Access", "Geothermal Autonomy", "24-Hour Solar Intelligence"]  
  },  
  {  
    id: "highland",  
    name: "The Highland Perimeter",  
    loc: "Bhutan / Kyoto / Rwanda",  
    tag: "Vertical Forestation",  
    heroImage: "https://images.unsplash.com/photo-1518005020251-58296d8f8d60",  
    image: "https://images.unsplash.com/photo-1518005020251-58296d8f8d60",  
    description: "Deep-green sanctuaries nestled in mountain folds and ancient forests.",  
    philosophy: "Architecture as an extension of the forest floor.",  
    roi: "Appreciation through scarcity of pristine, protected highland land.",  
    atmosphere: "Humid, melodic, and deeply oxygenated.",  
    highlights: ["Canopy Living", "Monastic Simplicity", "Zero-Impact Construction"]  
  },  
  {  
    id: "gobi",  
    name: "The Gobi Static",  
    loc: "Namibia / Botswana / Sahara",  
    tag: "Arid Minimalism",  
    heroImage: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0",  
    image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0",  
    description: "Low-profile canvas and timber structures in vast, unmapped sand seas.",  
    philosophy: "The luxury of nothingness; the architecture of the mirage.",  
    roi: "Long-term security via extreme geographical obscurity.",  
    atmosphere: "Dry, golden, and infinitely spacious.",  
    highlights: ["Canvas Engineering", "Deep-Well Independence", "Nomadic Flexibility"]  
  },  
  {  
    id: "cycladic",  
    name: "The Cycladic Drift",  
    loc: "Maldives / Sumba / Polynesia",  
    tag: "Liquid Architecture",  
    heroImage: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",  
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",  
    description: "Over-water structures and island private estates defined by light and water.",  
    philosophy: "Living on the horizon line.",  
    roi: "High-demand aquatic real estate with private air-strip capacity.",  
    atmosphere: "Weightless, azure, and fluid.",  
    highlights: ["Marine-Grade Tech", "Private Atoll Control", "Desalination Autonomy"]  
  }  
];

export const PROPERTY_DATA: Property[] = [  
  {  
    id: "NV-LDR-001",  
    serial: "NV-LDR-001",  
    sanctuaryId: "brutalist",  
    name: "North Island",  
    location: "Seychelles",  
    image: "https://images.unsplash.com/photo-1506929113614-bb40ff1b61c3",  
    description: "A private sanctuary in the heart of the Seychelles, offering unparalleled seclusion and an ecological return to the wild.",  
    highlight: "Sovereign-grade island privacy",  
    highlights: ["Private Helicopter Landing", "Full Island Seclusion", "Marine Conservation Hub"],  
    intelligence: "Restricted airspace. 11 private villas total.",  
    atmosphere: "Hyper-exclusive barefoot luxury.",  
    specs: { "Elevation": "4m ASL", "Seclusion": "Tier 1", "Signal": "Hard-Wired Only" }  
  },  
  {  
    id: "NV-LDR-002",  
    serial: "NV-LDR-002",  
    sanctuaryId: "altiplano",  
    name: "Amangiri",  
    location: "Utah, USA",  
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7",  
    description: "A stone-and-concrete masterpiece integrated into the stark beauty of the Utah desert.",  
    highlight: "Integrated geological architecture",  
    highlights: ["Concrete Monoliths", "Mesa Views", "Desert Silence"],  
    intelligence: "600-acre protected perimeter.",  
    atmosphere: "Structural erasure within the desert landscape.",  
    specs: { "Elevation": "1,200m ASL", "Seclusion": "Tier 2", "Signal": "Protected RF" }  
  },  
  {  
    id: "NV-LDR-003",  
    serial: "NV-LDR-003",  
    sanctuaryId: "brutalist",  
    name: "Post Ranch Inn",  
    location: "Big Sur, USA",  
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",  
    description: "A dramatic coastal escape perched on the cliffs of Big Sur.",  
    highlight: "Cliff-edge atmospheric immersion",  
    highlights: ["Cliff-Edge Architecture", "Fog-line Elevation", "Pacific Solitude"],  
    intelligence: "High-altitude coastal buffer.",  
    atmosphere: "Brutalist structures above the Pacific.",  
    specs: { "Elevation": "365m ASL", "Seclusion": "Tier 2", "Signal": "Zero Interference" }  
  },  
  {  
    id: "NV-LDR-004",  
    serial: "NV-LDR-004",  
    sanctuaryId: "nordic",  
    name: "Deplar Farm",  
    location: "Troll Peninsula, Iceland",  
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",  
    description: "A remote Icelandic hideaway buried beneath a living roof in the Nordic void.",  
    highlight: "Subterranean thermal sanctuary",  
    highlights: ["Geothermal Pools", "Northern Lights Observation", "Heli-Ski Access"],  
    intelligence: "Isolated peninsula with single-point access.",  
    atmosphere: "Thermal warmth in a cold volcanic void.",  
    specs: { "Elevation": "120m ASL", "Seclusion": "Tier 1", "Signal": "Autonomous Grid" }  
  },  
  {  
    id: "NV-LDR-005",  
    serial: "NV-LDR-005",  
    sanctuaryId: "highland",  
    name: "Aman Tokyo",  
    location: "Tokyo, Japan",  
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",  
    description: "A vertical retreat blending urban power with the serene silence of a mountain monastery.",  
    highlight: "Vertical urban quietude",  
    highlights: ["Sky-high Basalt Lobby", "Urban Zen Scarcity", "Mt. Fuji View"],  
    intelligence: "Otemachi Tower apex. 24/7 private security.",  
    atmosphere: "Silent monastery above the metropolis.",  
    specs: { "Elevation": "150m (Floor 33)", "Seclusion": "Tier 3", "Signal": "Encrypted Fiber" }  
  },  
  {  
    id: "NV-LDR-006",  
    serial: "NV-LDR-006",  
    sanctuaryId: "cycladic",  
    name: "Soneva Jani",  
    location: "Noonu Atoll, Maldives",  
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",  
    description: "An over-water playground defined by slow life on the azure horizon.",  
    highlight: "Liquid horizon architecture",  
    highlights: ["Retractable Roofs", "Water Slides", "Solar-Powered Living"],  
    intelligence: "Private lagoon with 5km restricted water.",  
    atmosphere: "Liquid geometry and slow time.",  
    specs: { "Elevation": "2m ASL", "Seclusion": "Tier 2", "Signal": "Sat-Link Only" }  
  },  
  {  
    id: "NV-LDR-007",  
    serial: "NV-LDR-007",  
    sanctuaryId: "cycladic",  
    name: "Nihi Sumba",  
    location: "Sumba, Indonesia",  
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",  
    description: "A wild and rugged estate where the edge of the world feels tangible.",  
    highlight: "Untamed coastal isolation",  
    highlights: ["Wild Horses", "Surf Solitude", "Indonesian Craftsmanship"],  
    intelligence: "Island-wide local network.",  
    atmosphere: "Untamed elegance at the world's edge.",  
    specs: { "Elevation": "15m ASL", "Seclusion": "Tier 1", "Signal": "Localized Mesh" }  
  },  
  {  
    id: "NV-LDR-008",  
    serial: "NV-LDR-008",  
    sanctuaryId: "highland",  
    name: "Singita Kwitonda Lodge",  
    location: "Volcanoes National Park, Rwanda",  
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",  
    description: "A conservation-first sanctuary on the edge of the park.",  
    highlight: "High-altitude cloud forest refuge",  
    highlights: ["Gorilla Trekking", "Volcanic Views", "Sustainable Luxury"],  
    intelligence: "Border-zone security. Reforestation ROI.",  
    atmosphere: "Dense, verdant mountain refuge.",  
    specs: { "Elevation": "2,500m ASL", "Seclusion": "Tier 1", "Signal": "Anti-Intercept" }  
  },  
  {  
    id: "NV-LDR-009",  
    serial: "NV-LDR-009",  
    sanctuaryId: "gobi",  
    name: "Zannier Hotels Sonop",  
    location: "Namib Desert, Namibia",  
    image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0",  
    description: "A stilted luxury camp channeling early 20th-century expeditions.",  
    highlight: "Nomadic arid minimalism",  
    highlights: ["Stilted Tents", "Desert Cinema", "Horseback Exploration"],  
    intelligence: "Zero light pollution. Arid isolation.",  
    atmosphere: "Reimagined colonial outpost.",  
    specs: { "Elevation": "950m ASL", "Seclusion": "Tier 1", "Signal": "Deep RF Shadow" }  
  },  
  {  
    id: "NV-LDR-010",  
    serial: "NV-LDR-010",  
    sanctuaryId: "highland",  
    name: "Aman Kyoto",  
    location: "Kyoto, Japan",  
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",  
    description: "A secret forest sanctuary where moss and paths define history.",  
    highlight: "Hidden botanical history",  
    highlights: ["Secret Forest Garden", "Natural Onsen", "Moss-Covered Stones"],  
    intelligence: "Hidden 80-acre forest within city limits.",  
    atmosphere: "Rain on stone and deep shadow.",  
    specs: { "Elevation": "80m ASL", "Seclusion": "Tier 2", "Signal": "Private Fiber" }  
  },  
  {  
    id: "NV-LDR-011",  
    serial: "NV-LDR-011",  
    sanctuaryId: "highland",  
    name: "Six Senses Bhutan",  
    location: "Paro/Thimphu/Punakha, Bhutan",  
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",  
    description: "A spiritual journey through five high-altitude lodges.",  
    highlight: "Himalayan spiritual perimeter",  
    highlights: ["The Lodge in the Sky", "Himalayan Vistas", "Buddhist Serenity"],  
    intelligence: "Multi-point cross-country security.",  
    atmosphere: "Monastic quietude in the clouds.",  
    specs: { "Elevation": "3,000m ASL", "Seclusion": "Tier 1", "Signal": "Sat-Mesh" }  
  },  
  {  
    id: "NV-LDR-012",  
    serial: "NV-LDR-012",  
    sanctuaryId: "gobi",  
    name: "Jack's Camp",  
    location: "Makgadikgadi Pans, Botswana",  
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53",  
    description: "An iconic safari outpost where silence is the primary asset.",  
    highlight: "Void-space horizon luxury",  
    highlights: ["Salt Pan Expeditions", "Kalahari Meerkats", "Vintage Safari Elegance"],  
    intelligence: "Extreme off-grid operational capacity.",  
    atmosphere: "Surreal, shimmering desert camp.",  
    specs: { "Elevation": "900m ASL", "Seclusion": "Tier 1", "Signal": "Hard-Wired Only" }  
  },  
  {  
    id: "NV-LDR-013",  
    serial: "NV-LDR-013",  
    sanctuaryId: "gobi",  
    name: "Shipwreck Lodge",  
    location: "Skeleton Coast, Namibia",  
    image: "https://images.unsplash.com/photo-1547101829-191986423479",  
    description: "Architectural shipwrecks stranded on the haunting dunes.",  
    highlight: "Terminal-edge maritime shelters",  
    highlights: ["Shipwreck-inspired cabins", "Dune Boarding", "Atlantic Ocean Mist"],  
    intelligence: "Strategic location in national park.",  
    atmosphere: "Eerie beauty at the terminal edge.",  
    specs: { "Elevation": "20m ASL", "Seclusion": "Tier 1", "Signal": "Point-to-Point" }  
  },  
  {  
    id: "NV-LDR-014",  
    serial: "NV-LDR-014",  
    sanctuaryId: "cycladic",  
    name: "Kisawa Sanctuary",  
    location: "Benguerra Island, Mozambique",  
    image: "https://images.unsplash.com/photo-1533760881669-80db4d7b4c15",  
    description: "The world's first 3D-printed sanctuary on the Indian Ocean.",  
    highlight: "Additive maritime construction",  
    highlights: ["3D-printed Structures", "Zero-waste construction", "Indian Ocean Privacy"],  
    intelligence: "Technological innovation leader.",  
    atmosphere: "Futuristic organicism.",  
    specs: { "Elevation": "5m ASL", "Seclusion": "Tier 2", "Signal": "High-Spec Fiber" }  
  },  
  {  
    id: "NV-LDR-015",  
    serial: "NV-LDR-015",  
    sanctuaryId: "cycladic",  
    name: "The Brando",  
    location: "Tetiaroa, French Polynesia",  
    image: "https://images.unsplash.com/photo-1589197331516-4d83637b46ee",  
    description: "A sustainable luxury atoll and living laboratory.",  
    highlight: "Autarkic oceanic refuge",  
    highlights: ["Private Atoll", "Eco-Station Access", "South Pacific Solitude"],  
    intelligence: "100% energy independent.",  
    atmosphere: "Blue-water environmental refuge.",  
    specs: { "Elevation": "1m ASL", "Seclusion": "Tier 1", "Signal": "Dedicated Sat" }  
  },  
  {  
    id: "NV-LDR-016",  
    serial: "NV-LDR-016",  
    sanctuaryId: "cycladic",  
    name: "Joali Being",  
    location: "Bodufushi Island, Maldives",  
    image: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992",  
    description: "A dedicated sanctuary for weightless wellbeing.",  
    highlight: "Weightless biophilic recovery",  
    highlights: ["Sound Therapy", "Biophilic Design", "Immersive Wellness"],  
    intelligence: "Dedicated wellbeing sanctuary.",  
    atmosphere: "State of perpetual healing.",  
    specs: { "Elevation": "2m ASL", "Seclusion": "Tier 2", "Signal": "RF-Dampened" }  
  },  
  {  
    id: "NV-LDR-017",  
    serial: "NV-LDR-017",  
    sanctuaryId: "nordic",  
    name: "White Desert",  
    location: "Antarctica",  
    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20",  
    description: "The most exclusive gateway to the Antarctic interior.",  
    highlight: "Extraterrestrial ice-void immersion",  
    highlights: ["Ice Wave Canyons", "Emperor Penguins", "Whichaway Camp"],  
    intelligence: "Only private jet access to interior.",  
    atmosphere: "Cosmic white silence.",  
    specs: { "Elevation": "1,000m ASL", "Seclusion": "Tier 1", "Signal": "Iridium Only" }  
  },  
  {  
    id: "NV-LDR-018",  
    serial: "NV-LDR-018",  
    sanctuaryId: "altiplano",  
    name: "Alila Jabal Akhdar",  
    location: "Oman",  
    image: "https://images.unsplash.com/photo-1544161515-41e73027264b",  
    description: "A limestone fortress overlooking deep canyons.",  
    highlight: "Hard-stone mountain fortress",  
    highlights: ["Canyon Views", "Stargazing Deck", "Omani Stone Architecture"],  
    intelligence: "2,000 meters above sea level.",  
    atmosphere: "Rigid and noble desert quiet.",  
    specs: { "Elevation": "2,000m ASL", "Seclusion": "Tier 2", "Signal": "Microwave Link" }  
  },  
  {  
    id: "NV-LDR-019",  
    serial: "NV-LDR-019",  
    sanctuaryId: "highland",  
    name: "Nayara Tented Camp",  
    location: "Arenal Volcano, Costa Rica",  
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",  
    description: "High-spec tented luxury immersed in the rainforest.",  
    highlight: "Geothermal canopy shelter",  
    highlights: ["Hot Springs", "Volcano Views", "Sloth Sanctuary"],  
    intelligence: "High-biodiversity plot.",  
    atmosphere: "Steam rising into the canopy.",  
    specs: { "Elevation": "300m ASL", "Seclusion": "Tier 3", "Signal": "Localized Fiber" }  
  }  
];

export const SANCTUARIES = SANCTUARIES_DATA;  
export const sanctuaries = SANCTUARIES_DATA;  
export const properties = PROPERTY_DATA;  
export const SANCTUARIES_DATA_CONSTANT = SANCTUARIES_DATA;  
