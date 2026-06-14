export interface Sanctuary {  
  id: string;  
  name: string;  
  loc: string;  
  atmosphere: string;  
  description: string;  
  heroImage: string;  
  price: string;  
  highlights: string[];  
  tag: string;  
  propertyCount: number;  
}

export interface Property {  
  id: string;  
  serial: string;  
  name: string;  
  sanctuaryId: string;  
  location: string;  
  image: string;  
  highlight: string;  
  description: string;  
  specs?: { label: string; value: string }[];  
}

export const SANCTUARIES_DATA: Sanctuary[] = [  
  {  
    id: 'the-alpine',  
    name: 'The Alpine',  
    loc: 'Courchevel | Gstaad | Aspen',  
    atmosphere: 'Sub-zero silence. High-altitude strongholds where frozen peaks meet absolute warmth.',  
    description: 'The pinnacle of winter security and high-altitude living.',  
    heroImage: 'https://images.unsplash.com/photo-1517044493812-f24ef5a1458c?q=80&w=2500&auto=format&fit=crop',  
    price: 'FROM $4,200',  
    highlights: ['Private Helipads', 'Oxygen-Rich Suites', '24/7 Ski Valet'],  
    tag: 'ELEVATED',  
    propertyCount: 3  
  },  
  {  
    id: 'the-metropolitan',  
    name: 'The Metropolitan',  
    loc: 'New York | Tokyo | London',  
    atmosphere: 'The heartbeat of the monolith. Strategic hubs for the global architect.',  
    description: 'Urban sanctuaries rising above the city chaos.',  
    heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2500&auto=format&fit=crop',  
    price: 'FROM $2,800',  
    highlights: ['Soundproof Dossier Rooms', 'Executive Transport', 'Private Dining'],  
    tag: 'STRATEGIC',  
    propertyCount: 4  
  },  
  {  
    id: 'the-island',  
    name: 'The Island',  
    loc: 'Maldives | Fiji | Seychelles',  
    atmosphere: 'Infinite perimeters. Secluded bastions surrounded by deep blue and absolute invisibility.',  
    description: 'The ultimate isolated retreats for those who value total privacy.',  
    heroImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2500&auto=format&fit=crop',  
    price: 'FROM $5,500',  
    highlights: ['Sub-Surface Access', 'Bio-Metric Security', 'Marine Escort'],  
    tag: 'ISOLATED',  
    propertyCount: 3  
  },  
  {  
    id: 'the-safari',  
    name: 'The Safari',  
    loc: 'Botswana | Kenya | South Africa',  
    atmosphere: 'Raw vigilance. Where the predator and the architect observe the wild in tactical silence.',  
    description: 'Unfiltered wildness meets bespoke luxury.',  
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2500&auto=format&fit=crop',  
    price: 'FROM $3,900',  
    highlights: ['Bush-Pilot Logistics', 'Night-Vision Safaris', 'Mobile Command Units'],  
    tag: 'UNFILTERED',  
    propertyCount: 3  
  },  
  {  
    id: 'the-fortress',  
    name: 'The Fortress',  
    loc: 'Morocco | Rajasthan | Oman',  
    atmosphere: 'Ancient reinforcement. Historic grandeur met with impenetrable modern standards.',  
    description: 'Reinforced palaces and historic strongholds.',  
    heroImage: 'https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=2500&auto=format&fit=crop',  
    price: 'FROM $2,500',  
    highlights: ['Secret Passageways', 'Terraced Watchtowers', 'Traditional Cleansing'],  
    tag: 'HISTORIC',  
    propertyCount: 3  
  },  
  {  
    id: 'the-coastal',  
    name: 'The Coastal',  
    loc: 'Amalfi | Riviera | Big Sur',  
    atmosphere: 'Horizon mastery. Cliffside outposts overlooking the edge of the monitored world.',  
    description: 'Masterfully positioned coastal sanctuaries.',  
    heroImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2500&auto=format&fit=crop',  
    price: 'FROM $3,200',  
    highlights: ['Yacht Mooring', 'Deep-Water Extraction', 'Panoramic Vigilance'],  
    tag: 'OVERLOOK',  
    propertyCount: 3  
  }  
];

export const PROPERTY_DATA: Property[] = [  
  {  
    id: 'aman-le-melezin',  
    serial: 'NV-LDR-001',  
    name: 'Aman Le Mélézin',  
    sanctuaryId: 'the-alpine',  
    location: 'Courchevel, France',  
    image: 'https://images.unsplash.com/photo-1551882547-ff43c63e1c04?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'French Alps Stronghold',  
    description: 'A fortress of oak and stone situated directly on the Bellecôte Piste.',  
    specs: [  
      { label: 'Access', value: 'Ski-in/Ski-out' },  
      { label: 'Security', value: 'High-Altitude Patrol' },  
      { label: 'Vault', value: 'Private Ski Cellar' }  
    ]  
  },  
  // ... rest of the 19 properties  
];  
