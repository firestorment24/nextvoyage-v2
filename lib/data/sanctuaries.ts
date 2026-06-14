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
    description: 'The pinnacle of winter security.',  
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
    description: 'Urban monoliths rising above the chaos.',  
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
    atmosphere: 'Infinite perimeters. Secluded bastions surrounded by deep blue.',  
    description: 'The ultimate isolated retreats.',  
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
    atmosphere: 'Raw vigilance. Where the predator and the architect observe in silence.',  
    description: 'Tactical luxury in the wild.',  
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
    atmosphere: 'Ancient reinforcement. Historic grandeur met with impenetrable standards.',  
    description: 'Reinforced historic palaces.',  
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
    atmosphere: 'Horizon mastery. Cliffside outposts overlooking the edge of the world.',  
    description: 'Masterfully positioned coastal sanctuaries.',  
    heroImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2500&auto=format&fit=crop',  
    price: 'FROM $3,200',  
    highlights: ['Yacht Mooring', 'Deep-Water Extraction', 'Panoramic Vigilance'],  
    tag: 'OVERLOOK',  
    propertyCount: 3  
  }  
];

export const PROPERTY_DATA: Property[] = [  
  // THE ALPINE  
  {  
    id: 'aman-le-melezin',  
    serial: 'NV-LDR-001',  
    name: 'Aman Le Mélézin',  
    sanctuaryId: 'the-alpine',  
    location: 'Courchevel, France',  
    image: 'https://images.unsplash.com/photo-1551882547-ff43c63e1c04?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'French Alps Stronghold',  
    description: 'A fortress of oak and stone situated directly on the Bellecôte Piste.',  
    specs: [{ label: 'Access', value: 'Ski-in/Ski-out' }, { label: 'Security', value: 'High-Altitude Patrol' }]  
  },  
  {  
    id: 'the-alpinina',  
    serial: 'NV-LDR-002',  
    name: 'The Alpina Gstaad',  
    sanctuaryId: 'the-alpine',  
    location: 'Gstaad, Switzerland',  
    image: 'https://images.unsplash.com/photo-1517044493812-f24ef5a1458c?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Swiss Neutrality Base',  
    description: 'A masterpiece of Swiss craftsmanship and discretion.',  
    specs: [{ label: 'Perimeter', value: '5-Acre Estate' }, { label: 'Intelligence', value: 'Six Senses Spa' }]  
  },  
  {  
    id: 'st-regis-aspen',  
    serial: 'NV-LDR-003',  
    name: 'St. Regis Aspen',  
    sanctuaryId: 'the-alpine',  
    location: 'Aspen, USA',  
    image: 'https://images.unsplash.com/photo-1482867996988-29ec3aee81a1?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Red Mountain Outpost',  
    description: 'The standard for Western mountain intelligence.',  
    specs: [{ label: 'Transport', value: 'Private Fleet' }, { label: 'Climate', value: 'Oxygen Enriched' }]  
  },

  // THE METROPOLITAN  
  {  
    id: 'aman-new-york',  
    serial: 'NV-LDR-004',  
    name: 'Aman New York',  
    sanctuaryId: 'the-metropolitan',  
    location: 'New York City, USA',  
    image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Fifth Avenue Sanctum',  
    description: 'A vertical sanctuary in the iconic Crown Building.',  
    specs: [{ label: 'Exclusion', value: 'Members Only' }, { label: 'Recovery', value: 'Cryotherapy' }]  
  },  
  {  
    id: 'the-lanesborough',  
    serial: 'NV-LDR-005',  
    name: 'The Lanesborough',  
    sanctuaryId: 'the-metropolitan',  
    location: 'London, UK',  
    image: 'https://images.unsplash.com/photo-1520633195248-55a2d1c39291?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Hyde Park Watchtower',  
    description: 'Regency splendor at London\'s most strategic crossroads.',  
    specs: [{ label: 'Protocol', value: 'Royal Standards' }, { label: 'Fleet', value: 'Chauffeur Driven' }]  
  },  
  {  
    id: 'aman-tokyo',  
    serial: 'NV-LDR-006',  
    name: 'Aman Tokyo',  
    sanctuaryId: 'the-metropolitan',  
    location: 'Tokyo, Japan',  
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Imperial Hub',  
    description: 'High-altitude serenity above the Otemachi Forest.',  
    specs: [{ label: 'View', value: 'Imperial Palace' }, { label: 'Network', value: 'Otemachi Hub' }]  
  },  
  {  
    id: 'bulgari-paris',  
    serial: 'NV-LDR-007',  
    name: 'Bulgari Paris',  
    sanctuaryId: 'the-metropolitan',  
    location: 'Paris, France',  
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Triangle d\'Or Command',  
    description: 'Italian design meets Parisian heritage.',  
    specs: [{ label: 'Design', value: 'Bulletproof' }, { label: 'Privacy', value: 'Restricted Access' }]  
  },

  // THE ISLAND  
  {  
    id: 'kudadoo-island',  
    serial: 'NV-LDR-008',  
    name: 'Kudadoo Island',  
    sanctuaryId: 'the-island',  
    location: 'Lhaviyani Atoll, Maldives',  
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Solar-Powered Bastion',  
    description: 'Fully self-sufficient private island.',  
    specs: [{ label: 'Power', value: '100% Solar' }, { label: 'Perimeter', value: 'Deep-Ocean Moat' }]  
  },  
  {  
    id: 'laucala-island',  
    serial: 'NV-LDR-009',  
    name: 'Laucala Island',  
    sanctuaryId: 'the-island',  
    location: 'Fiji',  
    image: 'https://images.unsplash.com/photo-1506929113675-b55f949b6532?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'South Pacific Retreat',  
    description: 'A private archipelago for untraceable arrivals.',  
    specs: [{ label: 'Arrival', value: 'Private Airfield' }, { label: 'Logistics', value: 'Submarine Fleet' }]  
  },  
  {  
    id: 'north-island',  
    serial: 'NV-LDR-010',  
    name: 'North Island',  
    sanctuaryId: 'the-island',  
    location: 'Seychelles',  
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Granite Stronghold',  
    description: 'Conservation-led sanctuary with natural surveillance peaks.',  
    specs: [{ label: 'Defense', value: 'Granite Barriers' }, { label: 'Exclusion', value: 'Restricted Waters' }]  
  },

  // THE SAFARI  
  {  
    id: 'singita-lebo-bo',  
    serial: 'NV-LDR-011',  
    name: 'Singita Lebombo',  
    sanctuaryId: 'the-safari',  
    location: 'Kruger Park, South Africa',  
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Lebombo Ridge Vigil',  
    description: 'Glass-walled eagle\'s nests over the Nwanetsi River.',  
    specs: [{ label: 'Vigilance', value: 'River Monitoring' }, { label: 'Intel', value: 'Expert Trackers' }]  
  },  
  {  
    id: 'mombo-camp',  
    serial: 'NV-LDR-012',  
    name: 'Mombo Camp',  
    sanctuaryId: 'the-safari',  
    location: 'Okavango Delta, Botswana',  
    image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'The Delta Hub',  
    description: 'High-density wildlife observation post.',  
    specs: [{ label: 'Extraction', value: 'Bush Plane Ready' }, { label: 'Security', value: 'Anti-Poaching' }]  
  },  
  {  
    id: 'angama-mara',  
    serial: 'NV-LDR-013',  
    name: 'Angama Mara',  
    sanctuaryId: 'the-safari',  
    location: 'Maasai Mara, Kenya',  
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Oloololo Escarpment',  
    description: 'Total field-of-vision across the Mara Triangle.',  
    specs: [{ label: 'Sightlines', value: '360° Views' }, { label: 'Culture', value: 'Maasai Guards' }]  
  },

  // THE FORTRESS  
  {  
    id: 'amanjena',  
    serial: 'NV-LDR-014',  
    name: 'Amanjena',  
    sanctuaryId: 'the-fortress',  
    location: 'Marrakesh, Morocco',  
    image: 'https://images.unsplash.com/photo-1542102543-982463e26456?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Peaceful Gateway',  
    description: 'Rose-hued palatial sanctuary where silence is the ultimate luxury.',  
    specs: [{ label: 'Privacy', value: 'Walled Pavilions' }, { label: 'Aura', value: 'Ancient Seclusion' }]  
  },  
  {  
    id: 'sujan-rajmahal',  
    serial: 'NV-LDR-015',  
    name: 'Suján Rajmahal Palace',  
    sanctuaryId: 'the-fortress',  
    location: 'Jaipur, India',  
    image: 'https://images.unsplash.com/photo-1524492707947-28a0df2894b7?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Royal Headquarters',  
    description: 'Living palace with imperial heritage and defense.',  
    specs: [{ label: 'Heritage', value: 'Royal Family' }, { label: 'Service', value: 'Imperial' }]  
  },  
  {  
    id: 'six-senses-zighy',  
    serial: 'NV-LDR-016',  
    name: 'Six Senses Zighy Bay',  
    sanctuaryId: 'the-fortress',  
    location: 'Musandam, Oman',  
    image: 'https://images.unsplash.com/photo-1540944030791-ad838971484a?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Hajar Mountain Base',  
    description: 'Village-style enclave nestled between mountains and sea.',  
    specs: [{ label: 'Infiltration', value: 'Paraglide Arrival' }, { label: 'Beach', value: 'Private Cove' }]  
  },

  // THE COASTAL  
  {  
    id: 'hotel-du-cap',  
    serial: 'NV-LDR-017',  
    name: 'Hotel du Cap-Eden-Roc',  
    sanctuaryId: 'the-coastal',  
    location: 'Antibes, France',  
    image: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Riviera Sentinel',  
    description: 'The bastion of the French Riviera with strict exclusion zones.',  
    specs: [{ label: 'Secrecy', value: 'High Discretion' }, { label: 'Arrival', value: 'Private Speedboat' }]  
  },  
  {  
    id: 'post-ranch-inn',  
    serial: 'NV-LDR-018',  
    name: 'Post Ranch Inn',  
    sanctuaryId: 'the-coastal',  
    location: 'Big Sur, USA',  
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Pacific Cliffhanger',  
    description: 'Sustainable luxury atop the cliffs with no digital intrusion.',  
    specs: [{ label: 'Stealth', value: 'Invisible Architecture' }, { label: 'Perimeter', value: '1,200ft Drop' }]  
  },  
  {  
    id: 'belmond-hotel-caruso',  
    serial: 'NV-LDR-019',  
    name: 'Belmond Hotel Caruso',  
    sanctuaryId: 'the-coastal',  
    location: 'Ravello, Italy',  
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Amalfi Watchtower',  
    description: 'Highest point palace serving as natural surveillance.',  
    specs: [{ label: 'Vista', value: 'Infinite Horizon' }, { label: 'History', value: '11th Century' }]  
  }  
];  
