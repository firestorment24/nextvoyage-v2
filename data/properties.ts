export interface Property {  
  id: string;  
  name: string;  
  location: string;  
  image: string;  
  gallery: string[];  
  collection: "Wild Frontiers" | "Urban Sovereigns" | "Heritage & Estate" | "Island & Coast";  
  sanctuaryId: string;  
  description: string;  
  intel: {  
    positioning: string;  
    category: string;  
    memberBenefits: string[];  
  };  
  exclusiveOffer?: {  
    title: string;  
    description: string;  
  };  
}

export const PROPERTY_DATA: Property[] = [  
  // --- USA SANCTUARY TIER ---  
  {  
    id: "trinchera-reserve",  
    name: "Trinchera Reserve",  
    location: "Colorado (High Alpine)",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Trinchera%20Reserve/trinchera-exterior.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Trinchera%20Reserve/trinchera-exterior.jpg"  
    ],  
    collection: "Wild Frontiers",  
    sanctuaryId: "wild-frontiers",  
    description: "Private high alpine sanctuary spanning pristine Colorado wilderness.",  
    intel: {  
      positioning: "High Alpine Wilderness",  
      category: "Wild Frontiers",  
      memberBenefits: ["Private wilderness access", "Guided wildlife tracking", "Custom alpine dining"]  
    }  
  },  
  {  
    id: "brush-creek-luxury-ranch",  
    name: "Brush Creek Luxury Ranch Collection",  
    location: "Saratoga, WY",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Brush%20Creek%20Luxury%20Ranch%20Collection/brush-creek-ranch.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Brush%20Creek%20Luxury%20Ranch%20Collection/brush-creek-ranch.jpg"  
    ],  
    collection: "Wild Frontiers",  
    sanctuaryId: "wild-frontiers",  
    description: "30,000-acre luxury ranch experience ranked #1 by Condé Nast.",  
    intel: {  
      positioning: "Condé Nast #1 Ranch",  
      category: "Wild Frontiers",  
      memberBenefits: ["All-inclusive ranch activities", "Private fly-fishing beats", "Farm-to-table culinary experiences"]  
    }  
  },  
  {  
    id: "alpine-falls-ranch",  
    name: "Alpine Falls Ranch",  
    location: "Montana",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Alpine%20Falls%20Ranch/alpine-falls-ranch.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Alpine%20Falls%20Ranch/alpine-falls-ranch.jpg"  
    ],  
    collection: "Wild Frontiers",  
    sanctuaryId: "wild-frontiers",  
    description: "Intimate Michelin Two Keys mountain retreat in pristine Montana.",  
    intel: {  
      positioning: "Michelin Two Keys Intimate Retreat",  
      category: "Wild Frontiers",  
      memberBenefits: ["Private estate seclusion", "Tailored outdoor excursions", "Dedicated host service"]  
    }  
  },  
  {  
    id: "the-meadows-on-rock-creek",  
    name: "The Meadows on Rock Creek",  
    location: "Montana",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Meadows%20on%20Rock%20Creek/meadows-rock-creek.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Meadows%20on%20Rock%20Creek/meadows-rock-creek.jpg"  
    ],  
    collection: "Wild Frontiers",  
    sanctuaryId: "wild-frontiers",  
    description: "Classic all-inclusive Montana sanctuary capped at 40 guests.",  
    intel: {  
      positioning: "Capped at 40 Guests",  
      category: "Wild Frontiers",  
      memberBenefits: ["Complete estate buyouts available", "Expert equestrian guides", "Riverfront serenity"]  
    }  
  },  
  {  
    id: "blackberry-mountain",  
    name: "Blackberry Mountain",  
    location: "Walland, TN",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Blackberry%20Mountain/blackberry-mountain.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Blackberry%20Mountain/blackberry-mountain.jpg"  
    ],  
    collection: "Heritage & Estate",  
    sanctuaryId: "heritage-estate",  
    description: "Relais & Châteaux wellness sanctuary featuring 42 exclusive keys.",  
    intel: {  
      positioning: "Relais & Châteaux Wellness",  
      category: "Heritage & Estate",  
      memberBenefits: ["Private wellness assessment", "Artisan workshop access", "Mountain-view dining"]  
    }  
  },  
  {  
    id: "blackberry-farm",  
    name: "Blackberry Farm",  
    location: "Walland, TN",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Blackberry%20Farm/blackberry-farm.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Blackberry%20Farm/blackberry-farm.jpg"  
    ],  
    collection: "Heritage & Estate",  
    sanctuaryId: "heritage-estate",  
    description: "Renowned sister property celebrated for world-class culinary mastery.",  
    intel: {  
      positioning: "Culinary Sanctuary",  
      category: "Heritage & Estate",  
      memberBenefits: ["Sommelier cellar tastings", "Artisan farm tours", "Priority dining reservations"]  
    }  
  },  
  {  
    id: "cataloochee-ranch",  
    name: "Cataloochee Ranch",  
    location: "North Carolina",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Cataloochee%20Ranch/cataloochee-ranch.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Cataloochee%20Ranch/cataloochee-ranch.jpg"  
    ],  
    collection: "Wild Frontiers",  
    sanctuaryId: "wild-frontiers",  
    description: "Historic high-elevation mountain sanctuary in the Smokies.",  
    intel: {  
      positioning: "Smoky Mountain Heritage",  
      category: "Wild Frontiers",  
      memberBenefits: ["Ridge horseback riding", "Historic cabin luxury", "Private campfire gatherings"]  
    }  
  },  
  // --- EUROPE ---  
  {  
    id: "castello-di-reschio",  
    name: "Castello di Reschio",  
    location: "Umbria, Italy",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Castello%20di%20Reschio/reschio.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Castello%20di%20Reschio/reschio.jpg"  
    ],  
    collection: "Heritage & Estate",  
    sanctuaryId: "heritage-estate",  
    description: "1,000-year-old castle estate transformed into an exquisite private Umbrian sanctuary.",  
    intel: {  
      positioning: "Millennial Castle Estate",  
      category: "Heritage & Estate",  
      memberBenefits: ["Private equestrian estate access", "Organic olive oil tastings", "Bespoke Italian design villas"]  
    }  
  },  
  {  
    id: "castelfalfi",  
    name: "Castelfalfi",  
    location: "Tuscany, Italy",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Castelfalfi/castelfalfi.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Castelfalfi/castelfalfi.jpg"  
    ],  
    collection: "Heritage & Estate",  
    sanctuaryId: "heritage-estate",  
    description: "5-star Tuscan estate with rolling vineyards, championship golf, and private villas.",  
    intel: {  
      positioning: "Tuscan Vineyard Estate",  
      category: "Heritage & Estate",  
      memberBenefits: ["Championship golf course access", "Private winery tours", "Historic hamlet seclusion"]  
    }  
  },  
  {  
    id: "palazzo-di-varignana",  
    name: "Palazzo di Varignana",  
    location: "Emilia-Romagna, Italy",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Palazzo%20di%20Varignana/palazzo-varignana.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Palazzo%20di%20Varignana/palazzo-varignana.jpg"  
    ],  
    collection: "Heritage & Estate",  
    sanctuaryId: "heritage-estate",  
    description: "Historic resort and spa set in the picturesque hills of Emilia-Romagna.",  
    intel: {  
      positioning: "Hillside Wellness Resort",  
      category: "Heritage & Estate",  
      memberBenefits: ["Extensive thermal spa access", "Vast botanical gardens", "Private estate olive harvesting"]  
    }  
  },  
  {  
    id: "eitch-borromini",  
    name: "Eitch Borromini",  
    location: "Rome, Italy",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Eitch%20Borromini/eitch-borromini.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Eitch%20Borromini/eitch-borromini.jpg"  
    ],  
    collection: "Urban Sovereigns",  
    sanctuaryId: "urban-sovereigns",  
    description: "Historic urban sanctuary overlooking Piazza Navona in the heart of Rome.",  
    intel: {  
      positioning: "Piazza Navona Urban Sanctuary",  
      category: "Urban Sovereigns",  
      memberBenefits: ["Rooftop terrace overlooking Rome", "Historic architecture and frescoes", "Private art tours"]  
    }  
  },  
  {  
    id: "rome-cavalieri",  
    name: "Rome Cavalieri",  
    location: "Rome, Italy",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Rome%20Cavalieri/rome-cavalieri.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Rome%20Cavalieri/rome-cavalieri.jpg"  
    ],  
    collection: "Urban Sovereigns",  
    sanctuaryId: "urban-sovereigns",  
    description: "Grand hilltop sanctuary featuring museum-quality art collections and 3-star Michelin dining.",  
    intel: {  
      positioning: "Grand Hilltop Sanctuary",  
      category: "Urban Sovereigns",  
      memberBenefits: ["Private art museum collection", "La Pergola Michelin dining", "Private parkland in Rome"]  
    }  
  },  
  // --- ASIA & INDIAN OCEAN ---  
  {  
    id: "guntu",  
    name: "Guntu",  
    location: "Seto Inland Sea, Japan",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Guntu/guntu.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Guntu/guntu.jpg"  
    ],  
    collection: "Island & Coast",  
    sanctuaryId: "island-coast",  
    description: "Floating ryokan cruising the serene waters of the Seto Inland Sea.",  
    intel: {  
      positioning: "Floating Ryokan Sanctuary",  
      category: "Island & Coast",  
      memberBenefits: ["Inland Sea voyages", "Private hinoki wood onsen", "Sushi counter by master chefs"]  
    }  
  },  
  {  
    id: "nihi-sumba",  
    name: "NIHI Sumba",  
    location: "Sumba, Indonesia",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/NIHI%20Sumba/nihi-sumba.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/NIHI%20Sumba/nihi-sumba.jpg"  
    ],  
    collection: "Wild Frontiers",  
    sanctuaryId: "wild-frontiers",  
    description: "Legendary edge-of-the-world adventure resort with world-class surf and untouched nature.",  
    intel: {  
      positioning: "Edge of the World Adventure",  
      category: "Wild Frontiers",  
      memberBenefits: ["Private wave (Occy's Left)", "Spa safari experience", "Sumbanese cultural immersion"]  
    }  
  },  
  // --- CARIBBEAN & CENTRAL AMERICA ---  
  {  
    id: "the-brando",  
    name: "The Brando",  
    location: "Tetiaroa, French Polynesia",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Brando/the-brando.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Brando/the-brando.jpg"  
    ],  
    collection: "Island & Coast",  
    sanctuaryId: "island-coast",  
    description: "Forbes 5-Star private atoll sanctuary dedicated to pristine luxury and sustainability.",  
    intel: {  
      positioning: "Pristine Atoll Sanctuary",  
      category: "Island & Coast",  
      memberBenefits: ["Private plunge pool villas", "Ecostation research tours", "Polynesian wellness rituals"]  
    }  
  },  
  {  
    id: "islas-secas",  
    name: "Islas Secas",  
    location: "Panama",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Islas%20Secas/islas-secas.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Islas%20Secas/islas-secas.jpg"  
    ],  
    collection: "Island & Coast",  
    sanctuaryId: "island-coast",  
    description: "14-island private archipelago sanctuary ranked #1 in Central America.",  
    intel: {  
      positioning: "Private Archipelago Sanctuary",  
      category: "Island & Coast",  
      memberBenefits: ["Exclusive 14-island access", "Whale watching expeditions", "Solar-powered luxury casitas"]  
    }  
  },  
  // --- SOUTH AMERICA ---  
  {  
    id: "awasi-mendoza",  
    name: "Awasi Mendoza",  
    location: "Mendoza, Argentina",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Awasi%20Mendoza/awasi-mendoza.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Awasi%20Mendoza/awasi-mendoza.jpg"  
    ],  
    collection: "Wild Frontiers",  
    sanctuaryId: "wild-frontiers",  
    description: "Relais & Châteaux lodge with 14 private villas, each with a dedicated private guide and 4x4.",  
    intel: {  
      positioning: "Private Guide & 4x4 Villas",  
      category: "Wild Frontiers",  
      memberBenefits: ["Private guide and 4x4 per villa", "Custom vineyard explorations", "Sommelier-led wine pairings"]  
    }  
  },  
  // --- AFRICA ---  
  {  
    id: "lion-sands-game-reserve",  
    name: "Lion Sands Game Reserve",  
    location: "Sabi Sand, South Africa",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Lion%20Sands/lion-sands.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Lion%20Sands/lion-sands.jpg"  
    ],  
    collection: "Wild Frontiers",  
    sanctuaryId: "wild-frontiers",  
    description: "#1 Africa Safari Lodge offering supreme Big Five viewing and iconic treehouse sleepouts.",  
    intel: {  
      positioning: "#1 Africa Safari Lodge",  
      category: "Wild Frontiers",  
      memberBenefits: ["Big Five game drives", "Luxury treehouse sleepouts", "Expert ranger tracking"]  
    }  
  },  
  // --- AUSTRALIA ---  
  {  
    id: "southern-ocean-lodge",  
    name: "Southern Ocean Lodge",  
    location: "Kangaroo Island, Australia",  
    image: "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Southern%20Ocean%20Lodge/southern-ocean-lodge.jpg",  
    gallery: [  
      "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Southern%20Ocean%20Lodge/southern-ocean-lodge.jpg"  
    ],  
    collection: "Island & Coast",  
    sanctuaryId: "island-coast",  
    description: "Reborn cliffside luxury sanctuary overlooking the dramatic southern ocean wilderness.",  
    intel: {  
      positioning: "Cliffside Ocean Sanctuary",  
      category: "Island & Coast",  
      memberBenefits: ["Guided Kangaroo Island excursions", "Clifftop spa sanctuary", "Cellar master wine tastings"]  
    }  
  }  
];

export const properties = PROPERTY_DATA;  
