export interface Bucket {  
  id: string  
  name: string  
  description: string  
  count: number // <-- This must be here for the build to pass  
  imageUrl?: string  
}

export interface Sanctuary {  
  id: string  
  slug: string  
  name: string  
  loc: string  
  tag: string  
  img: string  
  heroImage: string  
  philosophy: string  
  roi: string  
  atmosphere: string  
  highlights: string[]  
  buckets: Bucket[]  
}

export const SANCTUARY_DATA: Record<string, Sanctuary> = {  
  stadium: {  
    id: 'stadium',  
    slug: 'stadium',  
    name: 'The Stadium',  
    loc: 'Urban Core',  
    tag: 'Athletic Luxury',  
    img: 'https://cdn.marblism.com/DO6EekfUdUH.webp',  
    heroImage: 'https://cdn.marblism.com/DO6EekfUdUH.webp',  
    philosophy: 'Performance-driven reset for the high-achiever.',  
    roi: 'Physical peak performance',  
    atmosphere: 'High-energy, precision, recovery-focused',  
    highlights: ['Olympic recovery suite', 'Private athletic coaching', 'Bio-hacking lab'],  
    buckets: [  
      { id: 'recovery', name: 'Recovery Suites', count: 12, description: 'Elite physical restoration' },  
      { id: 'performance', name: 'Performance Labs', count: 8, description: 'Precision training grounds' }  
    ]  
  },  
  // ... apply similar count fields to all other sanctuaries  
}

export const sanctuaries = Object.values(SANCTUARY_DATA) 
