export interface Sanctuary {  
  id: string;  
  name: string;  
  loc: string;  
  tag: string;  
  atmosphere: string;  
  highlights: string[];  
  heroImage: string;  
  propertyCount: number; // Added to fix the build error  
}

export const SANCTUARIES: Sanctuary[] = [  
  {  
    id: "aman-le-melezin",  
    name: "Aman Le Mélézin",  
    loc: "Courchevel, France",  
    tag: "Alpine Refuge",  
    atmosphere: "A sanctuary of stone and pine, perched in the heart of Les Trois Vallées. A masterclass in high-altitude minimalism.",  
    highlights: ["Ski-in, ski-out access", "Subterranean holistic spa", "Culinarium of Savoyard traditions"],  
    heroImage:   'https://images.unsplash.com/photo-1548777123-e216912df7d8?q=80&w=2000&auto=format&fit=crop',    propertyCount: 31  
  },  
  {  
    id: "singita-lebombo",  
    name: "Singita Lebombo Lodge",  
    loc: "Kruger Park, SA",  
    tag: "The Glass Ark",  
    atmosphere: "Suspended above the N’wanetsi River, Lebombo is a bold architectural statement in the wild, inspired by the nests of weaver birds.",  
    highlights: ["Panoramic glass suites", "Rooftop star-beds", "Renowned private wine boutique"],  
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801",  
    propertyCount: 15  
  },  
  {  
    id: "aman-new-york",  
    name: "Aman New York",  
    loc: "Manhattan, USA",  
    tag: "Vertical Serenity",  
    atmosphere: "The spirit of Aman arrives in Manhattan. A sanctuary of peace in the historic Crown Building, high above the pulse of the city.",  
    highlights: ["Three-story wellness center", "Year-round garden terrace", "Private jazz club architecture"],  
    heroImage: "https://images.unsplash.com/photo-1541336032412-2048a678540d",  
    propertyCount: 83  
  },  
  {  
    id: "amanpuri",  
    name: "Amanpuri",  
    loc: "Phuket, Thailand",  
    tag: "The Ancient Port",  
    atmosphere: "Aman’s first-born. A timeless collection of pavilions and villas scattered through a coconut grove overlooking the Andaman Sea.",  
    highlights: ["Private peninsula access", "Holistic wellness center", "Traditional Thai architecture"],  
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",  
    propertyCount: 40  
  },  
  {  
    id: "amangiri",  
    name: "Amangiri",  
    loc: "Canyon Point, Utah",  
    tag: "The Concrete Mesa",  
    atmosphere: "A brutalist marvel carved into the desert. Where raw concrete meets the ancient red rocks of the Colorado Plateau.",  
    highlights: ["Pool built around a rock", "Pavilion-style living", "Via Ferrata adventures"],  
    heroImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",  
    propertyCount: 34  
  },  
  {  
    id: "azure-heights",  
    name: "Azure Heights",  
    loc: "French Riviera",  
    tag: "Horizon Lock",  
    atmosphere: "A vertical retreat overlooking the Mediterranean. Designed for those who seek the silence of the sea from the safety of the cliffs.",  
    highlights: ["Cliff-edge infinity pools", "Subterranean garage access", "Privacy-first glass walls"],  
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",  
    propertyCount: 12  
  },  
  {  
    id: "velvet-pines",  
    name: "Velvet Pines",  
    loc: "Swiss Alps",  
    tag: "High-Altitude Refuge",  
    atmosphere: "A secluded timber sanctuary tucked deep within the Valais. A celebration of texture and mountain solitude.",  
    highlights: ["Wood-fired sauna rituals", "Private helipad access", "Deep-forest hiking trails"],  
    heroImage: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",  
    propertyCount: 8  
  },  
  {  
    id: "obsidian-sands",  
    name: "Obsidian Sands",  
    loc: "Iceland",  
    tag: "Volcanic Isolation",  
    atmosphere: "A black-concrete fortress on the edge of the world. Witness the aurora from the safety of geothermal luxury.",  
    highlights: ["Geothermal private baths", "Panoramic sky lounges", "Ice-cave expeditions"],  
    heroImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",  
    propertyCount: 6  
  },  
  {  
    id: "gilded-dunes",  
    name: "Gilded Dunes",  
    loc: "Abu Dhabi, UAE",  
    tag: "The Desert Mirror",  
    atmosphere: "Rising from the Empty Quarter, this mirror-clad retreat reflects the shifting sands and the absolute silence of the desert.",  
    highlights: ["Dune-side stargazing", "Traditional Bedouin hospitality", "Falconry experiences"],  
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",  
    propertyCount: 22  
  },  
  {  
    id: "jade-canopy",  
    name: "Jade Canopy",  
    loc: "Costa Rica",  
    tag: "Jungle Bastion",  
    atmosphere: "A treehouse sanctuary that prioritizes the ecosystem. Live within the clouds of the Monteverde Cloud Forest.",  
    highlights: ["Canopy-level suspension bridges", "Rare bird sightings", "Rainwater luxury pools"],  
    heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",  
    propertyCount: 10  
  },  
  {  
    id: "nautilus",  
    name: "The Nautilus",  
    loc: "Baa Atoll, Maldives",  
    tag: "Marine Serenity",  
    atmosphere: "A private island where time stands still. Designed with a circular philosophy to mirror the cycles of the ocean.",  
    highlights: ["Free-form infinity pools", "Private butler service", "Underwater dining pavilion"],  
    heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",  
    propertyCount: 26  
  },  
  {  
    id: "silver-crag",  
    name: "Silver Crag",  
    loc: "Dolomites, Italy",  
    tag: "Granite Sanctuary",  
    atmosphere: "A sharp-edged marvel at 2,000 meters. Minimalist luxury meets the jagged grandeur of the Italian Alps.",  
    highlights: ["Alpine wellness rituals", "Michelin-starred lodge", "Via Ferrata climbing"],  
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",  
    propertyCount: 14  
  },  
  {  
    id: "crimson-savannah",  
    name: "Crimson Savannah",  
    loc: "Masai Mara, Kenya",  
    tag: "The Red Earth",  
    atmosphere: "A camp of unparalleled luxury, where the sunset bleeds into the plains and the wildlife is your only neighbor.",  
    highlights: ["Private safari guides", "Outdoor bush showers", "Great Migration access"],  
    heroImage: "https://images.unsplash.com/photo-1523805009345-7448845a9e53",  
    propertyCount: 18  
  },  
  {  
    id: "marble-port",  
    name: "Marble Port",  
    loc: "Paros, Greece",  
    tag: "Cycladic Geometry",  
    atmosphere: "A white-on-white sanctuary that honors the ancient marble quarries of the island. Pure light and Aegean peace.",  
    highlights: ["Private yacht harbor", "Hidden olive groves", "Stone-carved living spaces"],  
    heroImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077",  
    propertyCount: 11  
  },  
  {  
    id: "neon-citadel",  
    name: "Neon Citadel",  
    loc: "Tokyo, Japan",  
    tag: "High-Altitude Zen",  
    atmosphere: "A sanctuary above the clouds in Shinjuku. Where hyper-modernity meets the silence of a Japanese rock garden.",  
    highlights: ["Deep soaking tubs", "City-view tea ceremonies", "24/7 private concierge"],  
    heroImage: "https://images.unsplash.com/photo-1540959733332-e94e1b38f0d4",  
    propertyCount: 55  
  },  
  {  
    id: "brutalist-coast",  
    name: "Brutalist Coast",  
    loc: "Comporta, Portugal",  
    tag: "The Sand Fortress",  
    atmosphere: "Raw concrete structures set amidst the cork trees and sand dunes of the Alentejo coast. Beauty in simplicity.",  
    highlights: ["Private horse stables", "Endless beach access", "Sustainable architecture"],  
    heroImage: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd",  
    propertyCount: 9  
  },  
  {  
    id: "copper-canyon",  
    name: "Copper Canyon",  
    loc: "Chihuahua, Mexico",  
    tag: "The Ravine Refuge",  
    atmosphere: "A lodge perched on the edge of a canyon four times the size of the Grand Canyon. Deep silence, deep color.",  
    highlights: ["Train-side arrival", "Indigenous Tarahumara trails", "Cliff-side balconies"],  
    heroImage: "https://images.unsplash.com/photo-1444312645910-ffa973656eba",  
    propertyCount: 7  
  },  
  {  
    id: "ivory-peak",  
    name: "Ivory Peak",  
    loc: "Mustang, Nepal",  
    tag: "The Forbidden Kingdom",  
    atmosphere: "A high-altitude retreat in the rain shadow of the Himalayas. Discover the soul of the ancient Mustang region.",  
    highlights: ["Buddhist meditation hall", "High-mountain trekking", "Monastery visits"],  
    heroImage: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",  
    propertyCount: 5  
  },  
  {  
    id: "midnight-manor",  
    name: "Midnight Manor",  
    loc: "Isle of Skye, Scotland",  
    tag: "Misty Isolation",  
    atmosphere: "A dark-stone manor house on the rugged northern coast. Where the peat smoke meets the salt of the Atlantic.",  
    highlights: ["Rare whisky library", "Private boat charters", "Gaelic storytelling nights"],  
    heroImage: "https://images.unsplash.com/photo-1506377295352-e3154d43ea9e",  
    propertyCount: 4  
  }  
];

export const SANCTUARIES_DATA = SANCTUARIES;  
export const sanctuaries = SANCTUARIES; 
