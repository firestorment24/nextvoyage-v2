// lib/data/sanctuaries.ts  
export interface Sanctuary {  
  id: string  
  name: string  
  loc: string // Using 'loc' to match the new editorial style  
  tag: string // Using 'tag' for the tagline  
  atmosphere: string  
  highlights: string[]  
  heroImage: string  
  propertyCount: number  
}

export const SANCTUARIES_DATA: Sanctuary[] = [  
  {  
    id: 'azure-heights',  
    name: 'Azure Heights',  
    loc: 'French Riviera',  
    tag: 'Vertical Serenity',  
    atmosphere: 'A limestone fortress perched above the Mediterranean, defined by saltwater breezes and silent, sun-drenched corridors.',  
    highlights: [  
      'Private cliffside access via funicular',  
      'Minimalist glass-bottom infinity pool',  
      'Subterranean wine cellar carved into coastal rock'  
    ],  
    heroImage: 'https://cdn.marblism.com/WuyrXpnAwo...',  
    propertyCount: 12  
  },  
  // ... rest of the sanctuaries  
]  
