export interface Sanctuary {  
  id: string  
  name: string  
  slug: string  
  heroImage: string  
  categoryDescription: string  
  highlights: string[]  
  atmosphere: string[]  
}

export const sanctuaries: Sanctuary[] = [  
  {  
    id: '1',  
    name: 'The Safari',  
    slug: 'the-safari',  
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',  
    categoryDescription: 'High-end expeditions across the Serengeti and beyond.',  
    highlights: ['Private Game Drives', 'Luxury Tents', 'Conservation Access'],  
    atmosphere: ['Wild', 'Exclusive']  
  },  
  {  
    id: '2',  
    name: 'The Alpine',  
    slug: 'the-alpine',  
    heroImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306',  
    categoryDescription: 'Pristine mountain escapes and private chalets.',  
    highlights: ['Ski-in/Ski-out', 'Michelin Dining', 'Private Spas'],  
    atmosphere: ['Crisp', 'Sophisticated']  
  }  
  // ... add your other sanctuaries here  
]  
