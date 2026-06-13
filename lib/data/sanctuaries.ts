export interface Sanctuary {  
  id: string;  
  name: string;  
  loc: string;  
  description: string;  
  heroImage: string;  
  price: string;  
  features: string[];  
  tag: string;  
  propertyCount: number;  
}

export interface Property {  
  id: string;  
  serial: string; // Synchronized for build stability  
  name: string;  
  sanctuaryId: string; // Synchronized for build stability  
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
    description: 'High-altitude strongholds where frozen peaks meet absolute warmth. The pinnacle of winter security.',  
    heroImage: 'https://images.unsplash.com/photo-1517044493812-f24ef5a1458c?q=80&w=2500&auto=format&fit=crop',  
    price: 'FROM $4,200',  
    features: ['Private Helipads', 'Oxygen-Rich Suites', '24/7 Ski Valet'],  
    tag: 'ELEVATED',  
    propertyCount: 3  
  },  
  {  
    id: 'the-metropolitan',  
    name: 'The Metropolitan',  
    loc: 'New York | Tokyo | London',  
    description: 'Urban monoliths rising above the chaos. Strategic hubs for the global architect.',  
    heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2500&auto=format&fit=crop',  
    price: 'FROM $2,800',  
    features: ['Soundproof Dossier Rooms', 'Executive Transport', 'Private Dining'],  
    tag: 'STRATEGIC',  
    propertyCount: 4  
  },  
  {  
    id: 'the-island',  
    name: 'The Island',  
    loc: 'Maldives | Fiji | Seychelles',  
    description: 'Secluded bastions surrounded by deep blue. The ultimate perimeter for those who value invisibility.',  
    heroImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2500&auto=format&fit=crop',  
    price: 'FROM $5,500',  
    features: ['Sub-Surface Access', 'Bio-Metric Security', 'Marine Escort'],  
    tag: 'ISOLATED',  
    propertyCount: 3  
  },  
  {  
    id: 'the-safari',  
    name: 'The Safari',  
    loc: 'Botswana | Kenya | South Africa',  
    description: 'Unfiltered wildness meets tactical luxury. Where the predator and the architect observe in silence.',  
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2500&auto=format&fit=crop',  
    price: 'FROM $3,900',  
    features: ['Bush-Pilot Logistics', 'Night-Vision Safaris', 'Mobile Command Units'],  
    tag: 'UNFILTERED',  
    propertyCount: 3  
  },  
  {  
    id: 'the-fortress',  
    name: 'The Fortress',  
    loc: 'Morocco | Rajasthan | Oman',  
    description: 'Ancient walls reinforced for the modern age. Historic grandeur with impenetrable standards.',  
    heroImage: 'https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=2500&auto=format&fit=crop',  
    price: 'FROM $2,500',  
    features: ['Secret Passageways', 'Terraced Watchtowers', 'Traditional Cleansing'],  
    tag: 'HISTORIC',  
    propertyCount: 3  
  },  
  {  
    id: 'the-coastal',  
    name: 'The Coastal',  
    loc: 'Amalfi | Riviera | Big Sur',  
    description: 'Cliffside outposts overlooking vast horizons. The edge of the world, monitored and mastered.',  
    heroImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2500&auto=format&fit=crop',  
    price: 'FROM $3,200',  
    features: ['Yacht Mooring', 'Deep-Water Extraction', 'Panoramic Vigilance'],  
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
    description: 'A fortress of oak and stone situated directly on the Bellecôte Piste. Provides tactical access to Les Trois Vallées with an intelligence-first approach to winter luxury.',  
    specs: [  
      { label: 'Access', value: 'Ski-in/Ski-out' },  
      { label: 'Security', value: 'High-Altitude Patrol' },  
      { label: 'Vault', value: 'Private Ski Cellar' }  
    ]  
  },  
  {  
    id: 'the-alpinina',  
    serial: 'NV-LDR-002',  
    name: 'The Alpina Gstaad',  
    sanctuaryId: 'the-alpine',  
    location: 'Gstaad, Switzerland',  
    image: 'https://images.unsplash.com/photo-1517044493812-f24ef5a1458c?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Swiss Neutrality Base',  
    description: 'A masterpiece of Swiss craftsmanship and discretion. Built into the hillside, it offers subterranean access and 360-degree mountain vigilance.',  
    specs: [  
      { label: 'Perimeter', value: '5-Acre Private Estate' },  
      { label: 'Intelligence', value: 'Six Senses Spa' },  
      { label: 'Comms', value: 'Encrypted Fiber' }  
    ]  
  },  
  {  
    id: 'st-regis-aspen',  
    serial: 'NV-LDR-003',  
    name: 'St. Regis Aspen',  
    sanctuaryId: 'the-alpine',  
    location: 'Aspen, USA',  
    image: 'https://images.unsplash.com/photo-1482867996988-29ec3aee81a1?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Red Mountain Outpost',  
    description: 'The standard for Western mountain intelligence. Gilded-age elegance reinforced with modern logistical support for the elite traveler.',  
    specs: [  
      { label: 'Transport', value: 'Private Shuttle Fleet' },  
      { label: 'Logistics', value: 'Butler Service 24/7' },  
      { label: 'Climate', value: 'Oxygen Enriched' }  
    ]  
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
    description: 'A vertical sanctuary in the iconic Crown Building. Offers soundproofed luxury and a 25,000sq ft wellness center for strategic recovery.',  
    specs: [  
      { label: 'Exclusion', value: 'Members Only Club' },  
      { label: 'Perimeter', value: 'Soundproofed Glazing' },  
      { label: 'Recovery', value: 'Cryotherapy Chambers' }  
    ]  
  },  
  {  
    id: 'the-lanesborough',  
    serial: 'NV-LDR-005',  
    name: 'The Lanesborough',  
    sanctuaryId: 'the-metropolitan',  
    location: 'London, UK',  
    image: 'https://images.unsplash.com/photo-1520633195248-55a2d1c39291?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Hyde Park Watchtower',  
    description: 'Regency splendor at the most strategic crossroads of London. Unmatched discretion in the heart of Knightsbridge.',  
    specs: [  
      { label: 'Protocol', value: 'Royal Household Standards' },  
      { label: 'Support', value: 'Dedicated Butler' },  
      { label: 'Fleet', value: 'Chauffeur Driven' }  
    ]  
  },  
  {  
    id: 'aman-tokyo',  
    serial: 'NV-LDR-006',  
    name: 'Aman Tokyo',  
    sanctuaryId: 'the-metropolitan',  
    location: 'Tokyo, Japan',  
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Imperial Hub',  
    description: 'High-altitude serenity above the Otemachi Forest. A fortress of basalt and paper, harmonizing tradition with absolute corporate security.',  
    specs: [  
      { label: 'View', value: 'Imperial Palace Vigil' },  
      { label: 'Facility', value: 'Deep Soaking Tubs' },  
      { label: 'Network', value: 'Otemachi Hub Access' }  
    ]  
  },  
  {  
    id: 'bulgari-paris',  
    serial: 'NV-LDR-007',  
    name: 'Bulgari Paris',  
    sanctuaryId: 'the-metropolitan',  
    location: 'Paris, France',  
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Triangle d\'Or Command',  
    description: 'Italian design meets Haussmann heritage. A low-profile, high-impact base for Parisian operations.',  
    specs: [  
      { label: 'Design', value: 'Bulletproof Aesthetic' },  
      { label: 'Wellness', value: 'Hydrotherapy' },  
      { label: 'Privacy', value: 'Restricted Floor Access' }  
    ]  
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
    description: 'Fully self-sufficient private island. 15 overwater residences designed for total autonomy and marine-grade security.',  
    specs: [  
      { label: 'Power', value: '100% Solar Autonomous' },  
      { label: 'Perimeter', value: 'Deep-Ocean Moat' },  
      { label: 'Catering', value: 'Unrestricted Dining' }  
    ]  
  },  
  {  
    id: 'laucala-island',  
    serial: 'NV-LDR-009',  
    name: 'Laucala Island',  
    sanctuaryId: 'the-island',  
    location: 'Fiji',  
    image: 'https://images.unsplash.com/photo-1506929113675-b55f949b6532?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'South Pacific Retreat',  
    description: 'A private archipelago offering 25 villas. Strategic isolation with a private airfield for untraceable arrivals.',  
    specs: [  
      { label: 'Arrival', value: 'Private Airfield (ICAO)' },  
      { label: 'Logistics', value: 'Submarine Fleet' },  
      { label: 'Terrain', value: 'Tropical Rainforest' }  
    ]  
  },  
  {  
    id: 'north-island',  
    serial: 'NV-LDR-010',  
    name: 'North Island',  
    sanctuaryId: 'the-island',  
    location: 'Seychelles',  
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Granite Stronghold',  
    description: 'A conservation-led sanctuary. High-granite peaks provide natural surveillance points over the Indian Ocean.',  
    specs: [  
      { label: 'Defense', value: 'Natural Granite Barriers' },  
      { label: 'Exclusion', value: 'No Unauthorized Vessels' },  
      { label: 'Sustenance', value: 'Local Garden Supply' }  
    ]  
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
    description: 'Glass-walled eagle\'s nests suspended over the Nwanetsi River. Tactical observation of the wild in supreme comfort.',  
    specs: [  
      { label: 'Vigilance', value: 'River Monitoring' },  
      { label: 'Intel', value: 'Expert Trackers' },  
      { label: 'Perimeter', value: '33,000 Private Acres' }  
    ]  
  },  
  {  
    id: 'mombo-camp',  
    serial: 'NV-LDR-012',  
    name: 'Mombo Camp',  
    sanctuaryId: 'the-safari',  
    location: 'Okavango Delta, Botswana',  
    image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'The Delta Hub',  
    description: 'Located in the Chief\'s Island concession. The highest density of wildlife for the architect who values raw observation.',  
    specs: [  
      { label: 'Extraction', value: 'Bush Plane Ready' },  
      { label: 'Security', value: 'Rhino Protection Squads' },  
      { label: 'Atmosphere', value: 'Untamed Luxury' }  
    ]  
  },  
  {  
    id: 'angama-mara',  
    serial: 'NV-LDR-013',  
    name: 'Angama Mara',  
    sanctuaryId: 'the-safari',  
    location: 'Maasai Mara, Kenya',  
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Oloololo Escarpment',  
    description: 'Perched on the edge of the Great Rift Valley. Offers total field-of-vision across the Mara Triangle.',  
    specs: [  
      { label: 'Sightlines', value: '360° Valley Views' },  
      { label: 'Culture', value: 'Maasai Guard Detail' },  
      { label: 'Transport', value: 'Custom 4x4 Fleet' }  
    ]  
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
    description: 'Rose-hued pisé walls inspired by the old city. A palatial sanctuary where water and silence are the ultimate luxuries.',  
    specs: [  
      { label: 'Privacy', value: 'Walled Pavilions' },  
      { label: 'Water', value: 'Central Basin Reserve' },  
      { label: 'Aura', value: 'Ancient Seclusion' }  
    ]  
  },  
  {  
    id: 'sujan-rajmahal',  
    serial: 'NV-LDR-015',  
    name: 'Suján Rajmahal Palace',  
    sanctuaryId: 'the-fortress',  
    location: 'Jaipur, India',  
    image: 'https://images.unsplash.com/photo-1524492707947-28a0df2894b7?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Royal Headquarters',  
    description: 'A living palace in the Pink City. The height of Rajasthani hospitality and historic perimeter defense.',  
    specs: [  
      { label: 'Heritage', value: 'Royal Family Detail' },  
      { label: 'Service', value: 'Imperial Standards' },  
      { label: 'Setting', value: 'Private Gardens' }  
    ]  
  },  
  {  
    id: 'six-senses-zighy',  
    serial: 'NV-LDR-016',  
    name: 'Six Senses Zighy Bay',  
    sanctuaryId: 'the-fortress',  
    location: 'Musandam, Oman',  
    image: 'https://images.unsplash.com/photo-1540944030791-ad838971484a?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Hajar Mountain Base',  
    description: 'Village-style enclave nestled between rugged mountains and a private beach. Arrival via paraglide available for high-speed insertion.',  
    specs: [  
      { label: 'Infiltration', value: 'Paraglide Arrival' },  
      { label: 'Beach', value: 'Private Sandy Cove' },  
      { label: 'Architecture', value: 'Indigenous Stone' }  
    ]  
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
    description: 'The bastion of the French Riviera. A playground for the world\'s power brokers with strict exclusion zones.',  
    specs: [  
      { label: 'Secrecy', value: 'Established Discretion' },  
      { label: 'Arrival', value: 'Private Speedboat' },  
      { label: 'Icon', value: 'Grand Allée Access' }  
    ]  
  },  
  {  
    id: 'post-ranch-inn',  
    serial: 'NV-LDR-018',  
    name: 'Post Ranch Inn',  
    sanctuaryId: 'the-coastal',  
    location: 'Big Sur, USA',  
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Pacific Cliffhanger',  
    description: 'Sustainable luxury atop the cliffs of Big Sur. No televisions, no alarm clocks—only the intelligence of the horizon.',  
    specs: [  
      { label: 'Stealth', value: 'Invisible Architecture' },  
      { label: 'Exclusion', value: 'No Digital Intrusion' },  
      { label: 'Perimeter', value: '1,200ft Ocean Drop' }  
    ]  
  },  
  {  
    id: 'belmond-hotel-caruso',  
    serial: 'NV-LDR-019',  
    name: 'Belmond Hotel Caruso',  
    sanctuaryId: 'the-coastal',  
    location: 'Ravello, Italy',  
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2000&auto=format&fit=crop',  
    highlight: 'Amalfi Watchtower',  
    description: 'An 11th-century palace set on the highest point above the Amalfi Coast. Infinity views that serve as natural surveillance.',  
    specs: [  
      { label: 'Vista', value: 'Infinite Horizon' },  
      { label: 'History', value: 'Medieval Perimeter' },  
      { label: 'Garden', value: 'Terraced Lemon Groves' }  
    ]  
  }  
];  
