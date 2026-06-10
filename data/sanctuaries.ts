// data/sanctuaries.ts

export interface Sanctuary {  
  id: string;  
  name: string;  
  loc: string;  
  tag: string;  
  img: string; // Thumbnail for index  
  heroImage: string; // Full-width hero  
  philosophy: string;  
  roi: string; // Cognitive ROI / Yield  
  atmosphere: string;  
  highlights: string[];  
  buckets: string[]; // For property mapping  
}

export const SANCTUARY_DATA: Record<string, Sanctuary> = {  
  "metropolitan": {  
    id: "metropolitan",  
    name: "The Metropolitan",  
    loc: "Global Power Hubs",  
    tag: "Velocity",  
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000",  
    heroImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "The intersection of legacy and velocity. Designed for those who command the skyline while requiring a silent retreat from the noise of the street.",  
    roi: "22% increase in decision-making clarity through acoustic isolation and biometric sleep optimization.",  
    atmosphere: "Refined, High-Stakes, Silent",  
    highlights: ["Vertical Helipads", "Triple-Pane Acoustic Shielding", "Private Art Vaults"],  
    buckets: ["Penthouses", "Historic Lofts", "Branded Residences"]  
  },  
  "fortress": {  
    id: "fortress",  
    name: "The Fortress",  
    loc: "Utah Desert / Scottish Highlands",  
    tag: "Security",  
    img: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=1000",  
    heroImage: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "Security is the ultimate luxury. Restored strongholds and brutalist hideaways offering a defensive redoubt without sacrificing architectural grandeur.",  
    roi: "Total digital deceleration; 34% cortisol suppression via EMP-shielded quarters and off-grid redundancy.",  
    atmosphere: "Impenetrable, Timeless, Sovereign",  
    highlights: ["Ballistic-Grade Glass", "Subterranean Access", "Private Air-Strip"],  
    buckets: ["Bunkers", "Cliffside Bastions", "Defensive Manors"]  
  },  
  "island": {  
    id: "island",  
    name: "The Island",  
    loc: "Private Archipelagos",  
    tag: "Solitude",  
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000",  
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "Boundless horizons and absolute discretion. Trade digital noise for the rhythm of the tide in an environment of unreachable luxury.",  
    roi: "Peak parasympathetic activation; 0% social noise. A complete neurological reset through unmapped isolation.",  
    atmosphere: "Boundless, Barefoot, Pristine",  
    highlights: ["Marine Sanctuaries", "Seaplane Docks", "Desalinization Autonomy"],  
    buckets: ["Private Atolls", "Remote Estates", "Coastal Reserves"]  
  },  
  "stadium": {  
    id: "stadium",  
    name: "The Stadium",  
    loc: "Cultural Arenas",  
    tag: "Pulse",  
    img: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1000",  
    heroImage: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "Front row, always. Exclusive residential integration within the world's most iconic sports and entertainment pulses.",  
    roi: "Unrivaled cultural equity and immediate access to global spectacles with zero friction or crowds.",  
    atmosphere: "Electric, Exclusive, Kinetic",  
    highlights: ["VVIP Box Integration", "Direct Field Access", "Sound-Proof Residential Wings"],  
    buckets: ["Arena Penthouses", "Circuit Suites", "Cultural Hubs"]  
  },  
  "alpine": {  
    id: "alpine",  
    name: "The Alpine",  
    loc: "High Altitudes",  
    tag: "Clarity",  
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000",  
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "Vertical perspective and elemental purity. High-altitude living designed for literal and metaphorical clarity above the cloud line.",  
    roi: "Hypoxic training benefits and 15% increase in cognitive focus due to total environmental silence.",  
    atmosphere: "Crisp, Elevated, Ethereal",  
    highlights: ["Ski-In/Ski-Out Vaults", "Heated Perimeter Terrazas", "Observatory Decks"],  
    buckets: ["Chalets", "Mountain Observatories", "Peak Estates"]  
  },  
  "cinematic": {  
    id: "cinematic",  
    name: "The Cinematic",  
    loc: "Visual Vistas",  
    tag: "Aesthetic",  
    img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000",  
    heroImage: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "The world as a curated visual legacy. Homes designed as architectural lenses, framing nature as high-definition art.",  
    roi: "Visual dopamine stabilization through Golden Hour optimization and symmetry-based design.",  
    atmosphere: "Still, Curated, Dramatic",  
    highlights: ["Frameless Glass Walls", "Gallery-Grade Lighting", "Infinity Edge Framing"],  
    buckets: ["Modernist Villas", "Glass Houses", "Architectural Icons"]  
  },  
  "safari": {  
    id: "safari",  
    name: "The Safari",  
    loc: "Untamed Frontiers",  
    tag: "Primal",  
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000",  
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "Untamed luxury at the edge of the world. A primal reset where the boundaries between civilization and the wild dissolve.",  
    roi: "Ancestral reconnection; recalibration of circadian rhythms via exposure to natural light and wild cycles.",  
    atmosphere: "Raw, Elegant, Primal",  
    highlights: ["Open-Air Fire Pits", "Tracking Concierge", "Solar-Powered Sovereignty"],  
    buckets: ["Luxury Camps", "Bush Estates", "Conservation Lands"]  
  },  
  "oasis": {  
    id: "oasis",  
    name: "The Oasis",  
    loc: "Deep Deserts",  
    tag: "Recovery",  
    img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1000",  
    heroImage: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "Silence, heat, and miraculous recovery. Resource-managed luxury in extreme environments, proving life thrives where it shouldn't.",  
    roi: "Deep thermal detoxification and zero-light pollution for 100% deep sleep score recovery.",  
    atmosphere: "Arid, Healing, Miraculous",  
    highlights: ["Hidden Infinity Pools", "Sand-Shielded Architecture", "Stargazing Platforms"],  
    buckets: ["Desert Manors", "Arid Retreats", "Wadi Estates"]  
  },  
  "floating": {  
    id: "floating",  
    name: "The Floating",  
    loc: "Open Waters",  
    tag: "Mobility",  
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000",  
    heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "Sovereignty on the open seas. Untethered mobility for those who view the ocean not as a barrier, but as their primary residence.",  
    roi: "Infinite jurisdictional flexibility and the ultimate hedge against land-based volatility.",  
    atmosphere: "Fluid, Sovereign, Modernist",  
    highlights: ["Submersible Decks", "Hydrogen-Power Redundancy", "Biometric Sea-Gates"],  
    buckets: ["Superyachts", "Floating Islands", "Oceanic Residences"]  
  }  
};

export const sanctuaries = Object.values(SANCTUARY_DATA);  
