export interface Property {  
  id: string;  
  name: string;  
  location: string;  
  image: string;  
  intel: {  
    positioning: string;  
    category: string;  
    memberBenefits: string[];  
  };  
}

export interface Sanctuary {  
  id: string;  
  name: string;  
  loc: string;  
  tag: string;  
  atmosphere: string;  
  highlights: string[];  
  heroImage: string;  
  propertyCount: number;  
}

export const PROPERTY_DATA: Property[] = [  
  // THE ORIGINALS (001-012)  
  {  
    id: "NV-LDR-001",  
    name: "Kilchoan Estate",  
    location: "Knoydart, Scotland",  
    image: "https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=2000",  
    intel: {  
      positioning: "The Last Wilderness of the Highlands. Off-grid industrial luxury.",  
      category: "Frontier Estate",  
      memberBenefits: ["Private ghillie service", "Chartered rib transfers", "Helipad access"]  
    }  
  },  
  {  
    id: "NV-LDR-002",  
    name: "Pongwe Island",  
    location: "Zanzibar, Tanzania",  
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000",  
    intel: {  
      positioning: "Private island isolation. Low-tide reef walks and raw coral aesthetics.",  
      category: "Island Outpost",  
      memberBenefits: ["Private dhow sunset cruise", "In-villa reef spa", "Sandbank picnic"]  
    }  
  },  
  {  
    id: "NV-LDR-003",  
    name: "Azure Heights",  
    location: "Eze, French Riviera",  
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2000",  
    intel: {  
      positioning: "Vertical serenity. Brutalist concrete meets the Mediterranean blue.",  
      category: "Coastal Vault",  
      memberBenefits: ["Cliffside dining access", "Priority yacht mooring", "Private art tour"]  
    }  
  },  
  {  
    id: "NV-LDR-004",  
    name: "Velvet Pines",  
    location: "Zermatt, Switzerland",  
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=2000",  
    intel: {  
      positioning: "High-altitude refuge. Dark timber and shadow-play in the Alps.",  
      category: "Mountain Sanctuary",  
      memberBenefits: ["Ski-in/Ski-out valet", "Private glacier guide", "Alpha-thermal spa access"]  
    }  
  },  
  {  
    id: "NV-LDR-005",  
    name: "Aman Le Mélézin",  
    location: "Courchevel, France",  
    image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?q=80&w=2000",  
    intel: {  
      positioning: "The pinnacle of Courchevel. Slate-toned serenity and alpine precision.",  
      category: "Elite Fortress",  
      memberBenefits: ["First-track access", "Private Aman butler", "Caviar & Champagne lounge"]  
    }  
  },  
  {  
    id: "NV-LDR-006",  
    name: "Post Ranch Inn",  
    location: "Big Sur, California",  
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000",  
    intel: {  
      positioning: "Oceanic edge. Redwood and steel structures suspended over the Pacific.",  
      category: "Pacific Outpost",  
      memberBenefits: ["Private stargazing", "Jaguar test-drive access", "Cliffside pool priority"]  
    }  
  },  
  {  
    id: "NV-LDR-007",  
    name: "Nihi Sumba",  
    location: "Sumba, Indonesia",  
    image: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?q=80&w=2000",  
    intel: {  
      positioning: "Edge of wildness. Raw luxury in the heart of Sumba's ancient culture.",  
      category: "Island Frontier",  
      memberBenefits: ["Private surf lesson", "Chocolate factory tour", "Spa safari"]  
    }  
  },  
  {  
    id: "NV-LDR-008",  
    name: "Southern Ocean Lodge",  
    location: "Kangaroo Island, Australia",  
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000",  
    intel: {  
      positioning: "The Baillie signature. A glass-walled masterpiece on the wild southern coast.",  
      category: "Coastal Refuge",  
      memberBenefits: ["Kangaroo safari", "Open-bar selection", "Sunset cliff cocktails"]  
    }  
  },  
  {  
    id: "NV-LDR-009",  
    name: "Fogo Island Inn",  
    location: "Newfoundland, Canada",  
    image: "https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=2000",  
    intel: {  
      positioning: "Architecture as a bridge. Stilts on the rocky edge of the North Atlantic.",  
      category: "North Atlantic Vault",  
      memberBenefits: ["Community host guide", "In-house cinema access", "Artisan workshop visit"]  
    }  
  },  
  {  
    id: "NV-LDR-010",  
    name: "Amangiri",  
    location: "Canyon Point, Utah",  
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2000",  
    intel: {  
      positioning: "Desert monolith. Concrete and sandstone merging in the slot canyons.",  
      category: "Desert Sanctuary",  
      memberBenefits: ["Private slot canyon hike", "Via Ferrata access", "Navajo cultural session"]  
    }  
  },  
  {  
    id: "NV-LDR-011",  
    name: "Jack's Camp",  
    location: "Makgadikgadi, Botswana",  
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000",  
    intel: {  
      positioning: "1940s explorer style. Persian rugs and museum cabinets in the salt pans.",  
      category: "Savannah Outpost",  
      memberBenefits: ["Meerkat walk", "Quad bike safari", "Bushman cultural walk"]  
    }  
  },  
  {  
    id: "NV-LDR-012",  
    name: "Clayoquot Wilderness Lodge",  
    location: "Vancouver Island, Canada",  
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2000",  
    intel: {  
      positioning: "Relais & Châteaux in the rainforest. Safari-style tents at the edge of the world.",  
      category: "Temperate Frontier",  
      memberBenefits: ["Helicopter adventuring", "Private whale watching", "Gourmet foraged meals"]  
    }  
  },  
  // THE VANGUARD TEN (013-022)  
  {  
    id: "NV-LDR-013",  
    name: "Setouchi Retreat Aonagi",  
    location: "Matsuyama, Japan",  
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2000",  
    intel: {  
      positioning: "Tadao Ando minimalism. High-altitude concrete and water silence.",  
      category: "Architectural Vault",  
      memberBenefits: ["Private gallery tour", "OMAKASE in-suite", "Zen garden access"]  
    }  
  },  
  {  
    id: "NV-LDR-014",  
    name: "Zannier Bendor",  
    location: "Île de Bendor, France",  
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000",  
    intel: {  
      positioning: "Private island reinvention. 1960s Riviera vibe with restorative design.",  
      category: "Island Outpost",  
      memberBenefits: ["Michelin-starred dining priority", "Private beach access", "Iyashi dome session"]  
    }  
  },  
  {  
    id: "NV-LDR-015",  
    name: "Jao Camp",  
    location: "Okavango Delta, Botswana",  
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2000",  
    intel: {  
      positioning: "Solar-powered exclusivity. Private island safari retreat with ultra-luxe villas.",  
      category: "Savannah Vault",  
      memberBenefits: ["Private butler and chef", "Mokoro boat safaris", "Private game vehicle"]  
    }  
  },  
  {  
    id: "NV-LDR-016",  
    name: "Kalesma Mykonos",  
    location: "Aleomandra, Mykonos",  
    image: "https://images.unsplash.com/photo-1601581875309-fad3c43ca39d?q=80&w=2000",  
    intel: {  
      positioning: "Hillside tranquility. Minimal Cycladic design with private infinity pools.",  
      category: "Coastal Sanctuary",  
      memberBenefits: ["Sunset terrace priority", "Private villa host", "Custom island itinerary"]  
    }  
  },  
  {  
    id: "NV-LDR-017",  
    name: "Cheval Blanc Randheli",  
    location: "Noonu Atoll, Maldives",  
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000",  
    intel: {  
      positioning: "LVMH-level precision. Overwater architecture meeting French craft.",  
      category: "Atoll Fortress",  
      memberBenefits: ["The Alchemist service", "Private seaplane lounge", "Guerlain Spa rituals"]  
    }  
  },  
  {  
    id: "NV-LDR-018",  
    name: "Future Found Sanctuary",  
    location: "Cape Town, South Africa",  
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2000",  
    intel: {  
      positioning: "Regenerative luxury at Table Mountain's edge. 7 acres of healing gardens.",  
      category: "Mountain Refuge",  
      memberBenefits: ["Guided mountain hikes", "Sound healing sessions", "Private cold plunge"]  
    }  
  },  
  {  
    id: "NV-LDR-019",  
    name: "PURS Luxury Boutique",  
    location: "Andernach, Germany",  
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000",  
    intel: {  
      positioning: "Axel Vervoordt design. Wabi-Sabi harmony in a historic Rhine town.",  
      category: "Heritage Vault",  
      memberBenefits: ["Michelin dining credit", "Private art tour", "Courtyard breakfast"]  
    }  
  },  
  {  
    id: "NV-LDR-020",  
    name: "The Singapore Edition",  
    location: "Orchard Road, Singapore",  
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000",  
    intel: {  
      positioning: "Conscious urban luxury. Jungle courtyards and suspended rooftop pools.",  
      category: "Urban Sanctuary",  
      memberBenefits: ["Rooftop priority", "Custom cocktail flight", "Spa priority access"]  
    }  
  },  
  {  
    id: "NV-LDR-021",  
    name: "THE KARL LAGERFELD",  
    location: "Macau, China",  
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2000",  
    intel: {  
      positioning: "Rock-chic Chinoiserie. The world's only hotel designed by Karl Lagerfeld.",  
      category: "Design Fortress",  
      memberBenefits: ["The Book Lounge access", "Mesa restaurant priority", "Karl Lagerfeld gift set"]  
    }  
  },  
  {  
    id: "NV-LDR-022",  
    name: "Isla Palenque",  
    location: "Chiriqui Gulf, Panama",  
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000",  
    intel: {  
      positioning: "Luxury Rewilded. An private island sanctuary in a protected biosphere.",  
      category: "Island Frontier",  
      memberBenefits: ["Private naturalist guide", "Island hopping boat", "In-jungle dining"]  
    }  
  },  
  // NORTH AMERICAN FRONTIER (023-029)  
  {  
    id: "NV-LDR-023",  
    name: "The Source Hotel",  
    location: "Denver, Colorado",  
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2000",  
    intel: {  
      positioning: "1870s iron foundry reborn. Brutalist design meets RiNo art district.",  
      category: "Industrial Vault",  
      memberBenefits: ["Market Hall credit", "Rooftop pool access", "Local brewery flight"]  
    }  
  },  
  {  
    id: "NV-LDR-024",  
    name: "Wythe Hotel",  
    location: "Brooklyn, New York",  
    image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=2000",  
    intel: {  
      positioning: "The Brooklyn blueprint. Factory windows and timber ceilings in Williamsburg.",  
      category: "Industrial Outpost",  
      memberBenefits: ["Skyline view priority", "In-room vinyl setup", "Bar Blondeau priority"]  
    }  
  },  
  {  
    id: "NV-LDR-025",  
    name: "Pocketbook Hudson",  
    location: "Hudson, New York",  
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000",  
    intel: {  
      positioning: "Reimagined textile mill. Subversive design with exposed beams and chrome.",  
      category: "Heritage Outpost",  
      memberBenefits: ["Design marketplace access", "Ether club priority", "Private cellar tour"]  
    }  
  },  
  {  
    id: "NV-LDR-026",  
    name: "Dunton Hot Springs",  
    location: "Dolores, Colorado",  
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000",  
    intel: {  
      positioning: "A ghost town revived. Relais & Châteaux comfort in log cabins.",  
      category: "Frontier Sanctuary",  
      memberBenefits: ["Private bathhouse session", "Guided fly fishing", "Saloon priority seating"]  
    }  
  },  
  {  
    id: "NV-LDR-027",  
    name: "One&Only Moonlight Basin",  
    location: "Big Sky, Montana",  
    image: "https://images.unsplash.com/photo-1520110120385-c23837672244?q=80&w=2000",  
    intel: {  
      positioning: "Tom Kundig architecture. Blackened steel framing the peaks of Big Sky.",  
      category: "Mountain Fortress",  
      memberBenefits: ["Private ski concierge", "Slope-side spa ritual", "Outfitters guide access"]  
    }  
  },  
  {  
    id: "NV-LDR-028",  
    name: "Reset Hotel",  
    location: "Joshua Tree, California",  
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2000",  
    intel: {  
      positioning: "Industrial modernism. 180 acres of desert stillness and clean lines.",  
      category: "Desert Vault",  
      memberBenefits: ["Private meditation session", "Star-view terrace", "Bespoke desert kit"]  
    }  
  },  
  {  
    id: "NV-LDR-029",  
    name: "The Virginian Hotel",  
    location: "Medicine Bow, Wyoming",  
    image: "https://images.unsplash.com/photo-1499856133404-f8d2ee30b8b1?q=80&w=2000",  
    intel: {  
      positioning: "Rugged Cowboy Americana. A living museum of industrial frontier luxury.",  
      category: "Heritage Frontier",  
      memberBenefits: ["Private saloon tasting", "Medicine Bow safari", "Museum private tour"]  
    }  
  }  
];

export const SANCTUARIES_DATA: Sanctuary[] = [  
  {  
    id: "azure-heights",  
    name: "Azure Heights",  
    loc: "French Riviera",  
    tag: "Vertical Serenity",  
    atmosphere: "Brutalist concrete meets the Mediterranean blue.",  
    highlights: ["Cliffside dining", "Private yacht mooring"],  
    heroImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2000",  
    propertyCount: 12  
  },  
  {  
    id: "velvet-pines",  
    name: "Velvet Pines",  
    loc: "Swiss Alps",  
    tag: "High-Altitude Refuge",  
    atmosphere: "Dark timber and shadow-play in the heart of Zermatt.",  
    highlights: ["Ski-in/Ski-out", "Alpha-thermal spa"],  
    heroImage: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=2000",  
    propertyCount: 8  
  }  
];

// Compatibility exports  
export const sanctuaries = SANCTUARIES_DATA;  
export const properties = PROPERTY_DATA;  
