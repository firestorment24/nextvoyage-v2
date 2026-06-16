export interface PerspectivePost {  
  id: string;  
  title: string;  
  subtitle: string;  
  category: 'Protocol' | 'Manifesto' | 'Orchestration';  
  date: string;  
  size: string; // Tailwind grid span classes for Bento layout  
  image: string;  
}

export const PERSPECTIVE_POSTS: PerspectivePost[] = [  
  {  
    id: 'ceo-reset-bcmc',  
    title: "The CEO Reset: BCMC 2026",  
    subtitle: "Orchestrating silence in a noisy world.",  
    category: "Manifesto",  
    date: "JUNE 2026",  
    size: "md:col-span-2 md:row-span-2", // Large Feature  
    image: "/images/perspective/bcmc.jpg"  
  },  
  {  
    id: 'suncoast-jazz',  
    title: "Suncoast Jazz Festival",  
    subtitle: "A protocol for the perfect weekend.",  
    category: "Protocol",  
    date: "MAY 2026",  
    size: "md:col-span-1 md:row-span-1",  
    image: "/images/perspective/jazz.jpg"  
  },  
  {  
    id: 'logistics-of-composure',  
    title: "The Logistics of Composure",  
    subtitle: "Aviation protocols for the high-stakes traveler.",  
    category: "Protocol",  
    date: "MAY 2026",  
    size: "md:col-span-1 md:row-span-1",  
    image: "/images/perspective/aviation.jpg"  
  },  
  {  
    id: 'rosewood-retreats',  
    title: "The Rosewood Retreats",  
    subtitle: "The architecture of sanctuary and refined living.",  
    category: "Orchestration",  
    date: "APRIL 2026",  
    size: "md:col-span-1 md:row-span-2", // Tall Feature  
    image: "/images/perspective/rosewood.jpg"  
  },  
  {  
    id: 'silent-roi',  
    title: "The Silent ROI",  
    subtitle: "Why disconnection is the ultimate asset.",  
    category: "Manifesto",  
    date: "APRIL 2026",  
    size: "md:col-span-1 md:row-span-1",  
    image: "/images/perspective/silent-roi.jpg"  
  },  
  {  
    id: 'gsx-2026-security',  
    title: "GSX 2026: Security & Serenity",  
    subtitle: "Navigating global summits with zero friction.",  
    category: "Protocol",  
    date: "MARCH 2026",  
    size: "md:col-span-2 md:row-span-1", // Wide Feature  
    image: "/images/perspective/gsx.jpg"  
  },  
  {  
    id: 'celestial-stillness',  
    title: "Celestial Stillness",  
    subtitle: "The protocol for high-desert retreats.",  
    category: "Protocol",  
    date: "MARCH 2026",  
    size: "md:col-span-1 md:row-span-1",  
    image: "/images/perspective/desert.jpg"  
  },  
  {  
    id: 'final-horizon-legacy',  
    title: "The Final Horizon",  
    subtitle: "Defining the NexVoyage legacy of travel.",  
    category: "Manifesto",  
    date: "FEBRUARY 2026",  
    size: "md:col-span-1 md:row-span-1",  
    image: "/images/perspective/horizon.jpg"  
  },  
  {  
    id: 'metropolitan-quiet-luxury',  
    title: "Metropolitan Quiet Luxury",  
    subtitle: "Urban sanctuaries that bypass the city noise.",  
    category: "Orchestration",  
    date: "FEBRUARY 2026",  
    size: "md:col-span-1 md:row-span-1",  
    image: "/images/perspective/metro.jpg"  
  },  
  {  
    id: 'architecture-of-calm',  
    title: "Architecture of Calm",  
    subtitle: "The minimalist alpinist perspective.",  
    category: "Orchestration",  
    date: "JANUARY 2026",  
    size: "md:col-span-1 md:row-span-1",  
    image: "/images/perspective/alpine.jpg"  
  },  
  {  
    id: 'nine-sanctuary-pillars',  
    title: "The Nine Sanctuary Pillars",  
    subtitle: "Our protocol for vetting global properties.",  
    category: "Protocol",  
    date: "JANUARY 2026",  
    size: "md:col-span-2 md:row-span-1",  
    image: "/images/perspective/pillars.jpg"  
  },  
  {  
    id: 'cretech-built-world',  
    title: "Built World: CREtech 2026",  
    subtitle: "The orchestration of urban expansion.",  
    category: "Orchestration",  
    date: "DECEMBER 2025",  
    size: "md:col-span-1 md:row-span-1",  
    image: "/images/perspective/cretech.jpg"  
  },  
  {  
    id: 'curated-horizon',  
    title: "The Curated Horizon",  
    subtitle: "Observation of intellectual travel patterns.",  
    category: "Manifesto",  
    date: "DECEMBER 2025",  
    size: "md:col-span-1 md:row-span-1",  
    image: "/images/perspective/observation.jpg"  
  },  
  {  
    id: 'aman-tokyo-series',  
    title: "Sanctuary Series: Aman Tokyo",  
    subtitle: "A protocol for the perfect city reset.",  
    category: "Protocol",  
    date: "NOVEMBER 2025",  
    size: "md:col-span-1 md:row-span-2",  
    image: "/images/perspective/aman-tokyo.jpg"  
  },  
  {  
    id: 'autumn-riviera-protocol',  
    title: "The Autumn Riviera Sanctuary",  
    subtitle: "Bypassing the festival chaos with poise.",  
    category: "Protocol",  
    date: "OCTOBER 2025",  
    size: "md:col-span-1 md:row-span-1",  
    image: "/images/perspective/riviera.jpg"  
  },  
  {  
    id: 'curated-yachting-q2',  
    title: "Curated Yachting: Q2 Portfolio",  
    subtitle: "The provenance of private exploration.",  
    category: "Orchestration",  
    date: "SEPTEMBER 2025",  
    size: "md:col-span-2 md:row-span-1",  
    image: "/images/perspective/yacht.jpg"  
  },  
  {  
    id: 'ibtf-cultural-orchestration',  
    title: "The Graylyn Estate",  
    subtitle: "Orchestrating cultural immersion at IBTF.",  
    category: "Orchestration",  
    date: "AUGUST 2025",  
    size: "md:col-span-1 md:row-span-1",  
    image: "/images/perspective/graylyn.jpg"  
  },  
  {  
    id: 'performance-pulse',  
    title: "Performance Pulse",  
    subtitle: "The cadence of high-stakes travel.",  
    category: "Protocol",  
    date: "AUGUST 2025",  
    size: "md:col-span-1 md:row-span-1",  
    image: "/images/perspective/pulse.jpg"  
  },  
  {  
    id: 'provenance-of-place',  
    title: "The Provenance of Place",  
    subtitle: "Why the story behind the stay matters.",  
    category: "Manifesto",  
    date: "JULY 2025",  
    size: "md:col-span-1 md:row-span-1",  
    image: "/images/perspective/provenance.jpg"  
  },  
  {  
    id: 'safari-zero-friction',  
    title: "Zero-Friction Safari",  
    subtitle: "The protocol for untamed luxury.",  
    category: "Protocol",  
    date: "JULY 2025",  
    size: "md:col-span-1 md:row-span-1",  
    image: "/images/perspective/safari.jpg"  
  }  
];  
