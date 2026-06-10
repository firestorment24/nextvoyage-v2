export interface Bucket {  
  id: string  
  name: string  
  imageUrl: string  
}

export interface Sanctuary {  
  id: string  
  name: string  
  loc: string  
  tag: string  
  img: string // Thumbnail  
  heroImage: string // Full Hero  
  philosophy: string  
  roi: string  
  atmosphere: string  
  highlights: string[]  
  buckets: Bucket[]  
}

export const SANCTUARY_DATA: Record<string, Sanctuary> = {  
  stadium: {  
    id: 'stadium',  
    name: 'The Stadium Sanctuary',  
    loc: 'Aspen, Colorado',  
    tag: 'Athletic Luxury',  
    img: 'https://cdn.marblism.com/DO6EekfUdUH.webp',  
    heroImage: 'https://cdn.marblism.com/DO6EekfUdUH.webp',  
    philosophy: 'Performance meets peace.',  
    roi: '4.2%',  
    atmosphere: 'High-altitude precision.',  
    highlights: ['Olympic Pool', 'Private Trailhead'],  
    buckets: [{ id: '1', name: 'Main Lodge', imageUrl: 'https://cdn.marblism.com/DO6EekfUdUH.webp' }]  
  },  
  cinematic: {  
    id: 'cinematic',  
    name: 'The Cinematic Portal',  
    loc: 'Amalfi Coast, Italy',  
    tag: 'Visual Masterpiece',  
    img: 'https://cdn.marblism.com/2SNlSLcCStk.webp',  
    heroImage: 'https://cdn.marblism.com/2SNlSLcCStk.webp',  
    philosophy: 'Life through a lens.',  
    roi: '3.8%',  
    atmosphere: 'Golden hour perpetual.',  
    highlights: ['Infinity Edge', 'Private Cove'],  
    buckets: [{ id: '1', name: 'Director Suite', imageUrl: 'https://cdn.marblism.com/2SNlSLcCStk.webp' }]  
  },  
  fortress: {  
    id: 'fortress',  
    name: 'The Iron Fortress',  
    loc: 'Patagonia, Chile',  
    tag: 'Absolute Privacy',  
    img: 'https://cdn.marblism.com/bArft50Ls2h.webp',  
    heroImage: 'https://cdn.marblism.com/bArft50Ls2h.webp',  
    philosophy: 'Security as a lifestyle.',  
    roi: '5.1%',  
    atmosphere: 'Impenetrable elegance.',  
    highlights: ['Safe Room', 'Helipad'],  
    buckets: [{ id: '1', name: 'Command Center', imageUrl: 'https://cdn.marblism.com/bArft50Ls2h.webp' }]  
  }  
}

export const sanctuaries = Object.values(SANCTUARY_DATA)
