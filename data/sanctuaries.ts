// data/sanctuaries.ts

export interface Bucket {  
  name: string;  
  count: number;  
  description: string;  
}

export interface Sanctuary {  
  id: string;  
  name: string;  
  loc: string;  
  tag: string;  
  img: string;  
  heroImage: string;  
  philosophy: string;  
  roi: string;  
  atmosphere: string;  
  highlights: string[];  
  buckets: Bucket[]; // Upgraded from string[] to Bucket[]  
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
    buckets: [  
      { name: "Penthouses", count: 12, description: "Sky-high residences with panoramic views and private elevator access." },  
      { name: "Historic Lofts", count: 8, description: "Heritage spaces with original architecture and modern luxury finishes." },  
      { name: "Branded Residences", count: 15, description: "Full-service living with 5-star amenities and concierge support." }  
    ]  
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
    buckets: [  
      { name: "Bunkers", count: 4, description: "Deep-ground facilities with 12-month life-support autonomy." },  
      { name: "Cliffside Bastions", count: 6, description: "Perched redoubts with 360-degree surveillance and natural defenses." },  
      { name: "Defensive Manors", count: 3, description: "Historic estates retrofitted with Tier-1 security systems." }  
    ]  
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
    buckets: [  
      { name: "Private Atolls", count: 5, description: "Sovereign landmasses with total shoreline privacy." },  
      { name: "Remote Estates", count: 9, description: "Ultra-low density living on unmapped horizons." },  
      { name: "Coastal Reserves", count: 7, description: "Protected ecological zones with private beach access." }  
    ]  
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
    buckets: [  
      { name: "Arena Penthouses", count: 11, description: "Residences built directly into the stadium architecture." },  
      { name: "Circuit Suites", count: 6, description: "Overlooking the world's premier racing and track events." },  
      { name: "Cultural Hubs", count: 8, description: "Integrated living in major performance art complexes." }  
    ]  
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
    buckets: [  
      { name: "Chalets", count: 14, description: "Hand-crafted timber and stone estates with massive thermal efficiency." },  
      { name: "Mountain Observatories", count: 4, description: "Glass-heavy structures designed for celestial viewing." },  
      { name: "Peak Estates", count: 6, description: "The highest habitable points in the range, accessible via private lift." }  
    ]  
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
    buckets: [  
      { name: "Modernist Villas", count: 10, description: "Clean lines and open plans that frame the landscape." },  
      { name: "Glass Houses", count: 5, description: "Minimalist structures that dissolve the barrier between in and out." },  
      { name: "Architectural Icons", count: 3, description: "Award-winning designs that serve as living sculptures." }  
    ]  
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
    buckets: [  
      { name: "Luxury Camps", count: 18, description: "Canvas-walled suites with hard-floor foundations and full plumbing." },  
      { name: "Bush Estates", count: 6, description: "Permanent stone structures integrated into the savanna floor." },  
      { name: "Conservation Lands", count: 4, description: "Homes that support and overlook protected wildlife corridors." }  
    ]  
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
    buckets: [  
      { name: "Desert Manors", count: 7, description: "Expansive layouts designed for thermal cooling and shade." },  
      { name: "Arid Retreats", count: 9, description: "Focused on recovery, featuring salt rooms and heat-cycles." },  
      { name: "Wadi Estates", count: 4, description: "Built alongside seasonal water-ways for a rare desert lushness." }  
    ]  
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
    buckets: [  
      { name: "Superyachts", count: 12, description: "Giga-class vessels designed for year-round habitation." },  
      { name: "Floating Islands", count: 3, description: "Geostationary luxury platforms with deep-keel stability." },  
      { name: "Oceanic Residences", count: 8, description: "Modular sea-homes for a nomadic elite lifestyle." }  
    ]  
  }  
};

export const sanctuaries = Object.values(SANCTUARY_DATA); 
