export interface Sanctuary {  
  id: string  
  name: string  
  loc: string  
  tag: string  
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
    heroImage: 'https://cdn.marblism.com/WuyrXpnAwo/1716386348425/image.webp',  
    propertyCount: 12  
  },  
  {  
    id: 'velvet-pines',  
    name: 'Velvet Pines',  
    loc: 'Swiss Alps',  
    tag: 'High-Altitude Refuge',  
    atmosphere: 'A sanctuary of charred cedar and floor-to-ceiling glass, hidden within a private alpine forest.',  
    highlights: [  
      'Zero-emission geothermal heating',  
      'Enclosed sky-bridge to private slopes',  
      'Himalayan salt meditation chamber'  
    ],  
    heroImage: 'https://cdn.marblism.com/WuyrXpnAwo/1716386348425/image2.webp',  
    propertyCount: 8  
  }  
  // Add more sanctuaries here following the same structure  
]  
