export interface Sanctuary {  
  id: string;  
  name: string;  
  tagline: string;  
  location: string;  
  heroImage: string;  
  image: string; // Added for backward compatibility with app/page.tsx  
  philosophy: string;  
  specifications: string[];  
  engagements: string[];  
  propertyCount: number;  
}

export const SANCTUARY_DATA: Sanctuary[] = [  
  {  
    id: "metropolitan",  
    name: "The Metropolitan",  
    tagline: "Precision in the global grid.",  
    location: "Urban Anchors • Global",  
    heroImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80",  
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80",  
    philosophy: "Efficiency meets elegance in the high-stakes urban theater. Strategic connectivity is the primary luxury.",  
    specifications: ["Global Hub Access", "Advanced Logistics", "High-Frequency Connectivity"],  
    engagements: ["Strategic Boardroom Access", "Private Sky-Deck Protocol", "Culinary Extraction"],  
    propertyCount: 8  
  },  
  {  
    id: "remote",  
    name: "The Remote",  
    tagline: "The protocol of absence.",  
    location: "Private Atolls • Deep Ocean",  
    heroImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80",  
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80",  
    philosophy: "The ultimate status is being unreachable. Absolute isolation is the only true sanctuary.",  
    specifications: ["Zero Signal Interference", "Autonomous Resource Management", "Deep Water Anchors"],  
    engagements: ["Horizon Watch", "Sub-Surface Exploration", "Solitude Calibration"],  
    propertyCount: 5  
  },  
  {  
    id: "nautical",  
    name: "The Nautical",  
    tagline: "Boundless navigation. Zero latitude.",  
    location: "South Pacific Drift",  
    heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80",  
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80",  
    philosophy: "Fluidity without boundary. The horizon is the only fixed point in a world of constant motion.",  
    specifications: ["Mobile Asset Status", "Unrestricted Draft", "Atmospheric Control"],  
    engagements: ["Deep Drift Navigation", "Marine Surveillance", "Atoll Rendezvous"],  
    propertyCount: 4  
  },  
  {  
    id: "alpine",  
    name: "The Alpine",  
    tagline: "Clarity at the absolute ceiling.",  
    location: "High Altitudes • Europe/Asia",  
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80",  
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80",  
    philosophy: "Thin air provides the sharpest perspective. Physical elevation mirrors cognitive clarity.",  
    specifications: ["High-Altitude Acclimatization", "Thermal Integrity", "Peak Extraction Points"],  
    engagements: ["Glacial Traverse", "Vertical Reconnaissance", "Celestial Observation"],  
    propertyCount: 4  
  },  
  {  
    id: "safari",  
    name: "The Safari",  
    tagline: "The primal archive. Ancestral surveillance.",  
    location: "Savannah • Africa",  
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80",  
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80",  
    philosophy: "Observing the raw mechanics of life from a position of absolute safety and refined comfort.",  
    specifications: ["Tactical Bush Logistics", "Primal Soundscapes", "Off-Grid Security"],  
    engagements: ["Predatory Tracking", "Night-Vision Surveillance", "Veldt Immersion"],  
    propertyCount: 6  
  },  
  {  
    id: "fortress",  
    name: "The Fortress",  
    tagline: "Brutalist Sanctuary. Unbreachable peace.",  
    location: "Cliffsides • Mediterranean",  
    heroImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80",  
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80",  
    philosophy: "Monolithic architecture built into the earth. Security is the foundation of true relaxation.",  
    specifications: ["Hardened Infrastructure", "Geological Integration", "Autonomous Security Perimeter"],  
    engagements: ["Cliffside Descent", "Sub-Earth Recovery", "Fortified Reflection"],  
    propertyCount: 3  
  },  
  {  
    id: "stadium",  
    name: "The Stadium",  
    tagline: "The Arena Protocol. Primary access.",  
    location: "Cultural Epicenters",  
    heroImage: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80",  
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80",  
    philosophy: "The pulse of collective energy viewed from the apex of privacy. The center of the world's focus.",  
    specifications: ["Direct Suite Access", "Crowd-Bypass Logistics", "High-Fidelity Audio Shields"],  
    engagements: ["Live Transmission Immersion", "Elite Tier Networking", "Post-Event Extraction"],  
    propertyCount: 7  
  },  
  {  
    id: "cinematic",  
    name: "The Cinematic",  
    tagline: "The Still Life. Frames of existence.",  
    location: "Designed Environments",  
    heroImage: "https://images.unsplash.com/photo-1492691523567-6170f0275df1?q=80",  
    image: "https://images.unsplash.com/photo-1492691523567-6170f0275df1?q=80",  
    philosophy: "Life as a series of curated frames. Every angle is intentional; every shadow is designed.",  
    specifications: ["Aesthetic Calibration", "Controlled Lighting Environments", "Symmetry Protocol"],  
    engagements: ["Visual Archiving", "Atmospheric Immersion", "Narrative Deceleration"],  
    propertyCount: 5  
  },  
  {  
    id: "cultural",  
    name: "The Cultural",  
    tagline: "The Cultural Anchor. Deep heritage extraction.",  
    location: "Heritage Sites • Global",  
    heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80",  
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80",  
    philosophy: "Anchoring the present in the weight of the past. Strategic engagement with human history.",  
    specifications: ["Heritage Integration", "Artifact Access", "Legacy Documentation"],  
    engagements: ["Ancient Protocol Retrieval", "Artisan Engagement", "Deep History Immersion"],  
    propertyCount: 9  
  }  
];

export const SANCTUARIES_DATA = SANCTUARY_DATA;  
export const sanctuaries = SANCTUARY_DATA;  
