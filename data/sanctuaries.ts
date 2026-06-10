export interface Bucket {  
  title: string  
  content: string  
}

export interface Sanctuary {  
  id: string  
  name: string  
  loc: string  
  tag: string  
  img: string // Index grid image  
  heroImage: string // Dossier hero image  
  philosophy: string  
  roi: string  
  atmosphere: string  
  highlights: string[]  
  buckets: Bucket[]  
}

export const SANCTUARY_DATA: Record<string, Sanctuary> = {  
  metropolitan: {  
    id: 'metropolitan',  
    name: 'The Metropolitan',  
    loc: 'Tokyo / London / NYC',  
    tag: 'Efficiency',  
    img: 'https://cdn.marblism.com/3BFJ7S6zJp2.webp',  
    heroImage: 'https://cdn.marblism.com/3BFJ7S6zJp2.webp',  
    philosophy: 'High-altitude sovereignty in the world\'s most compressed environments.',  
    roi: 'Temporal Arbitrage — Reclaiming 4 hours of daily transit for high-stakes decision making.',  
    atmosphere: 'Glass, steel, and absolute silence above the canopy of the city.',  
    highlights: ['Helipad access', 'Signal-proof suites', '24/7 Precision concierge'],  
    buckets: [  
      { title: 'The Layout', content: 'Minimalist glass towers with 360-degree views and soundproofed skins.' },  
      { title: 'The Service', content: 'Invisible staff, predictive logistics, and zero-latency requests.' }  
    ]  
  },  
  safari: {  
    id: 'safari',  
    name: 'The Safari',  
    loc: 'Serengeti / Botswana',  
    tag: 'Restoration',  
    img: 'https://cdn.marblism.com/dL-ayC7zbHv.webp',  
    heroImage: 'https://cdn.marblism.com/dL-ayC7zbHv.webp',  
    philosophy: 'Primal connection met with five-star precision logistics.',  
    roi: 'Biological Reset — Cortisol reduction through deep immersion in the rhythmic wild.',  
    atmosphere: 'Earth-toned silks, open-air vistas, and the raw sound of the savannah.',  
    highlights: ['Private conservancy access', 'Starlink bush-office', 'Elite trackers'],  
    buckets: [  
      { title: 'The Wild', content: 'Unfettered access to the Big Five without the interference of tourism.' },  
      { title: 'The Lodge', content: 'Low-impact, high-luxury architecture that disappears into the horizon.' }  
    ]  
  },  
  fortress: {  
    id: 'fortress',  
    name: 'The Fortress',  
    loc: 'Switzerland / Utah',  
    tag: 'Security',  
    img: 'https://cdn.marblism.com/bArft50Ls2h.webp',  
    heroImage: 'https://cdn.marblism.com/bArft50Ls2h.webp',  
    philosophy: 'Absolute privacy through architectural and digital sovereignty.',  
    roi: 'Security Equity — The peace of mind that comes from an impenetrable perimeter.',  
    atmosphere: 'Brutalist luxury; thick stone, digital blackout zones, and subterranean amenities.',  
    highlights: ['Bio-access control', 'Off-grid infrastructure', 'Secure transfer links'],  
    buckets: [  
      { title: 'Privacy', content: 'No-fly zones and physical barriers that ensure zero unauthorized visibility.' },  
      { title: 'The Build', content: 'Architectural marvels carved directly into the landscape for total concealment.' }  
    ]  
  },  
  stadium: {  
    id: 'stadium',  
    name: 'The Stadium',  
    loc: 'Global Event Hubs',  
    tag: 'Access',  
    img: 'https://cdn.marblism.com/DO6EekfUdUH.webp',  
    heroImage: 'https://cdn.marblism.com/DO6EekfUdUH.webp',  
    philosophy: 'Being at the center of the world without being seen by it.',  
    roi: 'Proximity Leverage — The ability to navigate global stages with private-exit efficiency.',  
    atmosphere: 'High-energy elegance; soundproofed glass and "backstage-to-bed" logistics.',  
    highlights: ['VIP Skybox integration', 'Private tunnel access', 'Secure event manifests'],  
    buckets: [  
      { title: 'Presence', content: 'Immediate access to high-stakes events with zero public exposure.' },  
      { title: 'Logistics', content: 'Coordinated security and transport that moves with the speed of the event.' }  
    ]  
  },  
  cinematic: {  
    id: 'cinematic',  
    name: 'The Cinematic',  
    loc: 'Hollywood / Cannes',  
    tag: 'Culture',  
    img: 'https://cdn.marblism.com/2SNlSLcCStk.webp',  
    heroImage: 'https://cdn.marblism.com/2SNlSLcCStk.webp',  
    philosophy: 'Life as a masterpiece; environments designed for aesthetic immersion.',  
    roi: 'Creative Yield — Curated spaces that catalyze high-output creative vision.',  
    atmosphere: 'Dramatic lighting, archival textures, and spaces that feel like a curated film set.',  
    highlights: ['Private screening rooms', 'Gallery-grade security', 'In-house ateliers'],  
    buckets: [  
      { title: 'Aesthetics', content: 'Every angle, light, and texture is calibrated for visual perfection.' },  
      { title: 'Privacy', content: 'Walled gardens and internal courtyards that block the outside world.' }  
    ]  
  },  
  alpine: {  
    id: 'alpine',  
    name: 'The Alpine',  
    loc: 'Courchevel / Aspen',  
    tag: 'Isolation',  
    img: 'https://cdn.marblism.com/-Fc3ivP0UkL.webp',  
    heroImage: 'https://cdn.marblism.com/-Fc3ivP0UkL.webp',  
    philosophy: 'Horizontal solitude at vertical extremes.',  
    roi: 'Clarity of Height — The removal of noise to allow for strategic foresight.',  
    atmosphere: 'Warm wood, firelight, and the blue-hour glow of snow-capped peaks.',  
    highlights: ['Ski-in/Ski-out helipad', 'Deep-tissue recovery spa', 'Private chef & cellar'],  
    buckets: [  
      { title: 'The Peaks', content: 'Isolation above the cloud line with five-star connectivity.' },  
      { title: 'Comfort', content: 'High-thermal efficiency architecture that keeps the wild cold at bay.' }  
    ]  
  },  
  floating: {  
    id: 'floating',  
    name: 'The Floating',  
    loc: 'Mediterranean / Amalfi',  
    tag: 'Autonomy',  
    img: 'https://cdn.marblism.com/WD30H7eapVS.webp',  
    heroImage: 'https://cdn.marblism.com/WD30H7eapVS.webp',  
    philosophy: 'Mobile sovereignty in international waters.',  
    roi: 'Boundary Liquidity — The ability to move your sanctuary as geopolitical needs shift.',  
    atmosphere: 'Sleek black hulls, glowing brass deck lights, and the sound of deep water.',  
    highlights: ['Starlink maritime suite', 'Tender & Helo access', 'Autonomous range'],  
    buckets: [  
      { title: 'The Vessel', content: 'Custom-built superyachts designed for long-term residency.' },  
      { title: 'Freedom', content: 'Waking up in a new port without ever leaving your home.' }  
    ]  
  },  
  island: {  
    id: 'island',  
    name: 'The Island',  
    loc: 'TCI / South Pacific',  
    tag: 'Privacy',  
    img: 'https://cdn.marblism.com/bi3JJpS6XGG.webp',  
    heroImage: 'https://cdn.marblism.com/bi3JJpS6XGG.webp',  
    philosophy: 'The ultimate moat: thousands of miles of ocean.',  
    roi: 'Geographic Moat — Absolute control over who enters your psychological space.',  
    atmosphere: 'White sand, dark palms, and the emerald glow of private lagoons.',  
    highlights: ['Private airstrip', 'Coral-reef security', 'Desalination sovereignty'],  
    buckets: [  
      { title: 'Exclusivity', content: 'Land that is yours alone, with no neighboring visibility.' },  
      { title: 'Self-Reliance', content: 'State-of-the-art power and water systems for off-grid luxury.' }  
    ]  
  },  
  oasis: {  
    id: 'oasis',  
    name: 'The Oasis',  
    loc: 'Morocco / Oman',  
    tag: 'Sanctuary',  
    img: 'https://cdn.marblism.com/65PUW-6BJDb.webp',  
    heroImage: 'https://cdn.marblism.com/65PUW-6BJDb.webp',  
    philosophy: 'Hidden lushness in the heart of the arid desert.',  
    roi: 'Resource Reset — The psychological power of water and green in the void.',  
    atmosphere: 'Walled courtyards, flickering lanterns, and reflection pools.',  
    highlights: ['Temperature-controlled gardens', 'Traditional hammam', 'Deep-desert silence'],  
    buckets: [  
      { title: 'The Wall', content: 'Thick riad walls that create a private microclimate.' },  
      { title: 'Serenity', content: 'The sound of trickling water in an otherwise silent landscape.' }  
    ]  
  }  
}

export const sanctuaries = Object.values(SANCTUARY_DATA)  
