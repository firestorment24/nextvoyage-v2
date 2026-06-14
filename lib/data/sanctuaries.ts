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
  id: string; // NV-LDR-XXX  
  sanctuaryId: string; // Links to Sanctuary ID  
  name: string;  
  location: string;  
  image: string;  
  highlights: string[];  
  intelligence: string;  
  atmosphere: string;  
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
    sanctuaryId: "brutalist",  
    name: "North Island",  
    location: "Seychelles",  
    image: "https://images.unsplash.com/photo-1506929113614-bb40ff1b61c3",  
    highlights: ["Private Helicopter Landing", "Full Island Seclusion", "Marine Conservation Hub"],  
    intelligence: "Restricted airspace. 11 private villas total. Direct sovereign-level privacy protocols.",  
    atmosphere: "Hyper-exclusive barefoot luxury with zero external visibility."  
  },  
  {  
    id: "NV-LDR-002",  
    sanctuaryId: "altiplano",  
    name: "Amangiri",  
    location: "Utah, USA",  
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7",  
    highlights: ["Concrete Monoliths", "Mesa Views", "Desert Silence"],  
    intelligence: "600-acre protected perimeter. Zero-decibel rating in exterior suites.",  
    atmosphere: "Structural erasure within the Navajo desert landscape."  
  },  
  {  
    id: "NV-LDR-003",  
    sanctuaryId: "brutalist",  
    name: "Post Ranch Inn",  
    location: "Big Sur, USA",  
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",  
    highlights: ["Cliff-Edge Architecture", "Fog-line Elevation", "Pacific Solitude"],  
    intelligence: "High-altitude coastal buffer. Minimal RF interference zone.",  
    atmosphere: "Brutalist structures hovering 1,200 feet above the Pacific."  
  },  
  {  
    id: "NV-LDR-004",  
    sanctuaryId: "nordic",  
    name: "Deplar Farm",  
    location: "Troll Peninsula, Iceland",  
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",  
    highlights: ["Geothermal Pools", "Northern Lights Observation", "Heli-Ski Access"],  
    intelligence: "Isolated peninsula with single-point access control. Independent power grid.",  
    atmosphere: "Thermal warmth encased in a cold, volcanic void."  
  },  
  {  
    id: "NV-LDR-005",  
    sanctuaryId: "highland",  
    name: "Aman Tokyo",  
    location: "Tokyo, Japan",  
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",  
    highlights: ["Sky-high Basalt Lobby", "Urban Zen Scarcity", "Mt. Fuji View"],  
    intelligence: "Otemachi Tower apex. 24/7 private elevator security. Financial district sanctuary.",  
    atmosphere: "Silent, vertical monastery above the chaos of the metropolis."  
  },  
  {  
    id: "NV-LDR-006",  
    sanctuaryId: "cycladic",  
    name: "Soneva Jani",  
    location: "Noonu Atoll, Maldives",  
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",  
    highlights: ["Retractable Roofs", "Water Slides", "Solar-Powered Living"],  
    intelligence: "Private lagoon with 5km of restricted water space. Bio-dynamic security.",  
    atmosphere: "Liquid geometry and the luxury of unhurried time."  
  },  
  {  
    id: "NV-LDR-007",  
    sanctuaryId: "cycladic",  
    name: "Nihi Sumba",  
    location: "Sumba, Indonesia",  
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",  
    highlights: ["Wild Horses", "Surf Solitude", "Indonesian Craftsmanship"],  
    intelligence: "Island-wide local network. Strategic isolation from main flight paths.",  
    atmosphere: "Untamed coastal elegance at the edge of the world."  
  },  
  {  
    id: "NV-LDR-008",  
    sanctuaryId: "highland",  
    name: "Singita Kwitonda Lodge",  
    location: "Volcanoes National Park, Rwanda",  
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",  
    highlights: ["Gorilla Trekking", "Volcanic Views", "Sustainable Luxury"],  
    intelligence: "Border-zone security. High-altitude reforestation ROI. Pristine air quality.",  
    atmosphere: "Dense, verdant, and emotionally resonant mountain refuge."  
  },  
  {  
    id: "NV-LDR-009",  
    sanctuaryId: "gobi",  
    name: "Zannier Hotels Sonop",  
    location: "Namib Desert, Namibia",  
    image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0",  
    highlights: ["Stilted Tents", "Desert Cinema", "Horseback Exploration"],  
    intelligence: "Located in the Karas region. Zero light pollution. Total arid isolation.",  
    atmosphere: "A 1920s British colonial outpost reimagined for the modern nomad."  
  },  
  {  
    id: "NV-LDR-010",  
    sanctuaryId: "highland",  
    name: "Aman Kyoto",  
    location: "Kyoto, Japan",  
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",  
    highlights: ["Secret Forest Garden", "Natural Onsen", "Moss-Covered Stones"],  
    intelligence: "Hidden 80-acre forest within city limits. High-value historical land asset.",  
    atmosphere: "The sound of rain on stone and the depth of Japanese shadow."  
  },  
  {  
    id: "NV-LDR-011",  
    sanctuaryId: "highland",  
    name: "Six Senses Bhutan",  
    location: "Paro/Thimphu/Punakha, Bhutan",  
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",  
    highlights: ["The Lodge in the Sky", "Himalayan Vistas", "Buddhist Serenity"],  
    intelligence: "Multi-point cross-country security. Carbon-negative operations. Spiritual ROI.",  
    atmosphere: "Monastic quietude across five distinct high-altitude valleys."  
  },  
  {  
    id: "NV-LDR-012",  
    sanctuaryId: "gobi",  
    name: "Jack's Camp",  
    location: "Makgadikgadi Pans, Botswana",  
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53",  
    highlights: ["Salt Pan Expeditions", "Kalahari Meerkats", "Vintage Safari Elegance"],  
    intelligence: "Extreme off-grid operational capacity. Seasonal access only. Total void space.",  
    atmosphere: "Surreal, shimmering, and intellectually stimulating desert camp."  
  },  
  {  
    id: "NV-LDR-013",  
    sanctuaryId: "gobi",  
    name: "Shipwreck Lodge",  
    location: "Skeleton Coast, Namibia",  
    image: "https://images.unsplash.com/photo-1547101829-191986423479",  
    highlights: ["Shipwreck-inspired cabins", "Dune Boarding", "Atlantic Ocean Mist"],  
    intelligence: "Strategic location in the Skeleton Coast National Park. Rare terrain ROI.",  
    atmosphere: "The eerie beauty of survival at the desert's terminal edge."  
  },  
  {  
    id: "NV-LDR-014",  
    sanctuaryId: "cycladic",  
    name: "Kisawa Sanctuary",  
    location: "Benguerra Island, Mozambique",  
    image: "https://images.unsplash.com/photo-1533760881669-80db4d7b4c15",  
    highlights: ["3D-printed Structures", "Zero-waste construction", "Indian Ocean Privacy"],  
    intelligence: "Technological innovation leader. Private island marine sanctuary status.",  
    atmosphere: "Futuristic organicism meets the warm African sea."  
  },  
  {  
    id: "NV-LDR-015",  
    sanctuaryId: "cycladic",  
    name: "The Brando",  
    location: "Tetiaroa, French Polynesia",  
    image: "https://images.unsplash.com/photo-1589197331516-4d83637b46ee",  
    highlights: ["Private Atoll", "Eco-Station Access", "South Pacific Solitude"],  
    intelligence: "100% energy independent. Sea Water Air Conditioning (SWAC) tech.",  
    atmosphere: "The ultimate blue-water refuge for the environmentally conscious."  
  },  
  {  
    id: "NV-LDR-016",  
    sanctuaryId: "cycladic",  
    name: "Joali Being",  
    location: "Bodufushi Island, Maldives",  
    image: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992",  
    highlights: ["Sound Therapy", "Biophilic Design", "Immersive Wellness"],  
    intelligence: "Dedicated wellbeing sanctuary. High-spec health security infrastructure.",  
    atmosphere: "Weightless architectural forms in a state of perpetual healing."  
  },  
  {  
    id: "NV-LDR-017",  
    sanctuaryId: "nordic",  
    name: "White Desert",  
    location: "Antarctica",  
    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20",  
    highlights: ["Ice Wave Canyons", "Emperor Penguins", "Whichaway Camp"],  
    intelligence: "The only private jet access to the interior. Extreme logistics management.",  
    atmosphere: "A cosmic, white silence at the planet's final boundary."  
  },  
  {  
    id: "NV-LDR-018",  
    sanctuaryId: "altiplano",  
    name: "Alila Jabal Akhdar",  
    location: "Oman",  
    image: "https://images.unsplash.com/photo-1544161515-41e73027264b",  
    highlights: ["Canyon Views", "Stargazing Deck", "Omani Stone Architecture"],  
    intelligence: "2,000 meters above sea level. Strategic mountain fortress security.",  
    atmosphere: "Rigid, noble, and deeply connected to the limestone peaks."  
  },  
  {  
    id: "NV-LDR-019",  
    sanctuaryId: "highland",  
    name: "Nayara Tented Camp",  
    location: "Arenal Volcano, Costa Rica",  
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",  
    highlights: ["Hot Springs", "Volcano Views", "Sloth Sanctuary"],  
    intelligence: "High-biodiversity reforestation plot. Geothermal water rights.",  
    atmosphere: "Steam rising from the jungle floor into a dark green canopy."  
  }  
];

// Backward compatibility exports  
export const SANCTUARIES = SANCTUARIES_DATA;  
export const sanctuaries = SANCTUARIES_DATA;  
export const properties = PROPERTY_DATA; 
