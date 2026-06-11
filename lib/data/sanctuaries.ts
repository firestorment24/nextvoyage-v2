export interface Sanctuary {  
  id: string  
  slug: string  
  name: string  
  tagline: string // Changed from 'tag' to match the component's expectation  
  location: string  
  heroImage: string  
  image: string  
  description: string  
  propertyCount: number  
  dossiers?: {  
    id: string  
    name: string  
    image: string  
    description: string  
  }[]  
}

export const SANCTUARY_DATA: Sanctuary[] = [  
  {  
    id: '1',  
    slug: 'the-metropolitan',  
    name: 'The Metropolitan',  
    tagline: 'Urban Pulse',  
    location: 'Global Hubs',  
    heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80',  
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80',  
    description: 'High-octane luxury in the heart of the world\'s most vibrant cities.',  
    propertyCount: 12,  
  },  
  {  
    id: '2',  
    slug: 'the-remote',  
    name: 'The Remote',  
    tagline: 'Pure Isolation',  
    location: 'Hidden Frontiers',  
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80',  
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80',  
    description: 'Disconnect completely in landscapes where silence is the ultimate luxury.',  
    propertyCount: 8,  
  },  
  {  
    id: '3',  
    slug: 'the-cultural',  
    name: 'The Cultural',  
    tagline: 'Living History',  
    location: 'Heritage Sites',  
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80',  
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80',  
    description: 'Immersive experiences that connect you to the soul of ancient civilizations.',  
    propertyCount: 15,  
  },  
  {  
    id: '4',  
    slug: 'the-alpine',  
    name: 'The Alpine',  
    tagline: 'High Altitude',  
    location: 'Mountain Peaks',  
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',  
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',  
    description: 'Pristine slopes and cozy chateaus above the clouds.',  
    propertyCount: 10,  
  },  
  {  
    id: '5',  
    slug: 'the-nautical',  
    name: 'The Nautical',  
    tagline: 'Oceanic Drift',  
    location: 'South Pacific & Beyond',  
    heroImage: 'https://cdn.marblism.com/WyQj8qDQ3pQ.webp',  
    image: 'https://cdn.marblism.com/XuGl_zKVV2o.webp',  
    description: 'The world is your oyster when your sanctuary moves with the tides.',  
    propertyCount: 6,  
    dossiers: [  
      {  
        id: '171eaf96-cf33-49e7-8cf2-25f61efca55a',  
        name: 'The Evrima',  
        image: 'https://cdn.marblism.com/XuGl_zKVV2o.webp',  
        description: 'A masterpiece of nautical engineering offering moonlit serenity and unmatched privacy on the open sea.',  
      },  
      {  
        id: '73980306-1943-48fa-87b8-d3990b5646b6',  
        name: 'The Luminara',  
        image: 'https://cdn.marblism.com/WyQj8qDQ3pQ.webp',  
        description: 'Cinematic design meets high-seas adventure. A sanctuary for those who seek the horizon in style.',  
      }  
    ]  
  },  
  {  
    id: '6',  
    slug: 'the-safari',  
    name: 'The Safari',  
    tagline: 'Wild Spirit',  
    location: 'Savannah Plains',  
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',  
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',  
    description: 'Unfiltered encounters with the majestic rhythms of the wild.',  
    propertyCount: 7,  
  },  
  {  
    id: '7',  
    slug: 'the-stadium',  
    name: 'The Stadium',  
    tagline: 'Peak Performance',  
    location: 'Elite Arenas',  
    heroImage: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80',  
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80',  
    description: 'Access to the world\'s most exclusive sporting events and athletic training grounds.',  
    propertyCount: 4,  
  },  
  {  
    id: '8',  
    slug: 'the-cinematic',  
    name: 'The Cinematic',  
    tagline: 'Visual Story',  
    location: 'Iconic Sets',  
    heroImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80',  
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80',  
    description: 'Living within the frame of the world\'s most beautiful film locations.',  
    propertyCount: 5,  
  },  
  {  
    id: '9',  
    slug: 'the-fortress',  
    name: 'The Fortress',  
    tagline: 'Absolute Security',  
    location: 'Strategic Strongholds',  
    heroImage: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80',  
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80',  
    description: 'Maximum privacy and state-of-the-art security for peace of mind anywhere.',  
    propertyCount: 3,  
  },  
]

// Double-lock exports for compatibility  
export const SANCTUARIES_DATA = SANCTUARY_DATA  
export const sanctuaries = SANCTUARY_DATA  
