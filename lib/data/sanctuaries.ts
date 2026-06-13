export interface Property {  
  id: string;  
  name: string;  
  location: string;  
  image: string;  
  highlight: string;  
  description: string;  
  specs: Record<string, string>;  
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

export const SANCTUARIES_DATA: Sanctuary[] = [  
  {  
    id: "alpine-stronghold",  
    name: "The Alpine Stronghold",  
    loc: "Courchevel, France",  
    tag: "High Altitude Intelligence",  
    atmosphere: "Vertical dominance meets absolute thermal comfort.",  
    highlights: ["Heated subterranean hangars", "Biological air filtration", "Direct slope access"],  
    heroImage: "https://images.unsplash.com/photo-1517043583-143d1fc34386?auto=format&fit=crop&q=80&w=2000",  
    propertyCount: 4  
  },  
  {  
    id: "coastal-surveillance",  
    name: "Coastal Surveillance",  
    loc: "Amalfi Coast, Italy",  
    tag: "Maritime Security",  
    atmosphere: "Cliffside vantage points with zero-entry water access.",  
    highlights: ["Subsurface tender docks", "Seismic reinforcement", "Panoramic horizon monitoring"],  
    heroImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=2000",  
    propertyCount: 5  
  }  
  // ... (Other sanctuaries can remain as placeholders)  
];

export const PROPERTY_DATA: Property[] = [  
  {  
    id: "NV-LDR-001",  
    name: "Aman Le Mélézin",  
    location: "Courchevel 1850, France",  
    image: "https://www.aman.com/sites/default/files/styles/full_card_portrait/public/2021-03/Aman-Le-Melezin-Exterior-Winter.jpg",  
    highlight: "Vertical Fortress",  
    description: "A fortress of French refinement situated directly on the Bellecôte Piste.",  
    specs: { "Elevation": "1,850m", "Asset Type": "Ski Stronghold", "Access": "Restricted" }  
  },  
  {  
    id: "NV-LDR-002",  
    name: "Villa TreVille",  
    location: "Positano, Italy",  
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1000",  
    highlight: "Cliffside Perimeter",  
    description: "The former estate of Franco Zeffirelli, offering absolute seclusion above the Tyrrhenian.",  
    specs: { "Vantage": "360° Coastal", "Asset Type": "Private Estate", "Security": "Natural Barrier" }  
  },  
  {  
    id: "NV-LDR-003",  
    name: "The Brando",  
    location: "Tetiaroa, French Polynesia",  
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000",  
    highlight: "Atoll Invisibility",  
    description: "An ultra-private eco-sanctuary on a private atoll.",  
    specs: { "Footprint": "Carbon Neutral", "Asset Type": "Remote Island", "Exclusion Zone": "12 Miles" }  
  },  
  {  
    id: "NV-LDR-004",  
    name: "Nihi Sumba",  
    location: "Sumba Island, Indonesia",  
    image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1000",  
    highlight: "Uncharted Terrain",  
    description: "Where raw edge-of-the-world adventure meets absolute luxury.",  
    specs: { "Niche": "Surfing Intelligence", "Asset Type": "Wilderness Outpost", "Status": "Discrete" }  
  },  
  {  
    id: "NV-LDR-005",  
    name: "North Island",  
    location: "Seychelles",  
    image: "https://images.unsplash.com/photo-1589197331516-4d830419337b?auto=format&fit=crop&q=80&w=1000",  
    highlight: "Granite Sentinel",  
    description: "A restoration project turned into the world's most exclusive retreat.",  
    specs: { "Access": "Air/Sea Only", "Asset Type": "Ecological Vault", "Privacy": "Maximum" }  
  },  
  {  
    id: "NV-LDR-006",  
    name: "Singita Boulders Lodge",  
    location: "Sabi Sand, South Africa",  
    image: "https://images.unsplash.com/photo-1493246507139-91e8bef99c17?auto=format&fit=crop&q=80&w=1000",  
    highlight: "Territorial Watch",  
    description: "Built among ancient boulders with a direct view into the wild.",  
    specs: { "Vantage": "Riverside Watch", "Asset Type": "Safari Base", "Perimeter": "Patrolled" }  
  },  
  {  
    id: "NV-LDR-007",  
    name: "Amangiri",  
    location: "Canyon Point, Utah",  
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1000",  
    highlight: "High Desert Camouflage",  
    description: "Blending into 600 acres of Colorado Plateau desert.",  
    specs: { "Design": "Geometric Minimalist", "Asset Type": "Desert Fortress", "Signal": "Dark Zone" }  
  },  
  {  
    id: "NV-LDR-008",  
    name: "Claridge's",  
    location: "London, UK",  
    image: "https://images.unsplash.com/photo-1551882547-ff43c63faf76?auto=format&fit=crop&q=80&w=1000",  
    highlight: "Urban Intelligence",  
    description: "The Mayfair bastion of British elegance and royal protocol.",  
    specs: { "Status": "Diplomatic Standard", "Asset Type": "City Stronghold", "History": "Classified" }  
  },  
  {  
    id: "NV-LDR-009",  
    name: "Hoshinoya Tokyo",  
    location: "Chiyoda-ku, Tokyo",  
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1000",  
    highlight: "Vertical Ryokan",  
    description: "A futuristic tower concealing the soul of ancient Japan.",  
    specs: { "Layering": "Kimonos & Tech", "Asset Type": "Urban Ryokan", "Entry": "Biometric" }  
  },  
  {  
    id: "NV-LDR-010",  
    name: "Cheval Blanc St-Barth",  
    location: "St. Barthélemy",  
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=1000",  
    highlight: "Island Chic Intelligence",  
    description: "The only French 'Palace' hotel in the Caribbean.",  
    specs: { "Access": "Via Private Terminal", "Asset Type": "Coastal Haven", "Atmosphere": "Pink & Shadow" }  
  },  
  {  
    id: "NV-LDR-011",  
    name: "Rosewood Hong Kong",  
    location: "Victoria Dockside, HK",  
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1000",  
    highlight: "Vertical Estate",  
    description: "Redefining the skyline with ultimate residential luxury.",  
    specs: { "Vantage": "Harbor Surveillance", "Asset Type": "Sky Fortress", "Service": "Butler Corps" }  
  },  
  {  
    id: "NV-LDR-012",  
    name: "Royal Mansour",  
    location: "Marrakech, Morocco",  
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=1000",  
    highlight: "Medina Invisibility",  
    description: "A private city within a city, commissioned by the King.",  
    specs: { "Access": "Secret Tunnel Network", "Asset Type": "Royal Riad", "Privacy": "Total" }  
  },  
  {  
    id: "NV-LDR-013",  
    name: "Soneva Fushi",  
    location: "Baa Atoll, Maldives",  
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1000",  
    highlight: "Barefoot Protocol",  
    description: "Intelligent island living where the jungle meets the sea.",  
    specs: { "Niche": "Bio-Luxury", "Asset Type": "Atoll Outpost", "Rules": "No News, No Shoes" }  
  },  
  {  
    id: "NV-LDR-014",  
    name: "Laucala Island",  
    location: "Fiji",  
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=1000",  
    highlight: "Private Air Force",  
    description: "A self-sustaining island paradise with its own fleet.",  
    specs: { "Fleet": "King Air & DeepFlight", "Asset Type": "Island HQ", "Security": "Full Perimeter" }  
  },  
  {  
    id: "NV-LDR-015",  
    name: "Post Ranch Inn",  
    location: "Big Sur, California",  
    image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&q=80&w=1000",  
    highlight: "Clifftop Camouflage",  
    description: "Merging with the rugged coast 1,200 feet above the Pacific.",  
    specs: { "Vantage": "Coastal Surveillance", "Asset Type": "Cliff Dwelling", "Atmosphere": "Ethereal" }  
  },  
  {  
    id: "NV-LDR-016",  
    name: "Fogo Island Inn",  
    location: "Newfoundland, Canada",  
    image: "https://images.unsplash.com/photo-1505242859278-8424c5d14df7?auto=format&fit=crop&q=80&w=1000",  
    highlight: "Edge of Earth",  
    description: "A radical architecture at the edge of the North Atlantic.",  
    specs: { "Asset Type": "Cultural Fortress", "Atmosphere": "Severe Comfort", "Vantage": "Iceberg Monitoring" }  
  },  
  {  
    id: "NV-LDR-017",  
    name: "Aman Tokyo",  
    location: "Otemachi Tower, Tokyo",  
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000",  
    highlight: "Sky Sanctuary",  
    description: "A serene escape floating above the financial district.",  
    specs: { "Elevation": "Levels 33-38", "Asset Type": "Sky Sanctuary", "Entry": "Direct Lift" }  
  },  
  {  
    id: "NV-LDR-018",  
    name: "Eden Rock",  
    location: "St. Barths",  
    image: "https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?auto=format&fit=crop&q=80&w=1000",  
    highlight: "Promontory Command",  
    description: "The historic rock of St. Barths, redefined for the modern elite.",  
    specs: { "Asset Type": "Rocky Outpost", "Vantage": "Bay Command", "Status": "Legendary" }  
  },  
  {  
    id: "NV-LDR-019",  
    name: "Southern Ocean Lodge",  
    location: "Kangaroo Island, Australia",  
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80&w=1000",  
    highlight: "Isolated Splendor",  
    description: "The crown jewel of Australian luxury, reborn on the rugged coast.",  
    specs: { "Status": "Reconstructed", "Asset Type": "Wilderness Fortress", "Privacy": "Isolated" }  
  }  
];  
