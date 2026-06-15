// lib/data/sanctuaries.ts

export interface Sanctuary {  
  id: string;  
  name: string;  
  description: string;  
  image: string;  
}

export interface Property {  
  id: string;  
  serial: string; // Used for "001" style display  
  name: string;  
  location: string;  
  image: string;  
  hook: string;  
  sanctuaryId: string; // Links property to a specific sanctuary  
  verified: boolean;  
}

// Restoring for legacy route compatibility  
export const SANCTUARIES_DATA: Sanctuary[] = [  
  {  
    id: 'elite-ledger',  
    name: 'The Elite Ledger',  
    description: 'A curated chronicle of the world\'s most exceptional sanctuaries.',  
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80'  
  }  
];

export const PROPERTY_DATA: Property[] = [  
  {  
    id: 'aman-new-york',  
    serial: '001',  
    name: 'Aman New York',  
    location: 'Manhattan, USA',  
    image: 'https://www.aman.com/sites/default/files/2022-08/Correct_Aman%20New%20York_Landscape.jpg',  
    hook: 'A vertical sanctuary in the heart of the Crown Building.',  
    sanctuaryId: 'elite-ledger',  
    verified: true  
  },  
  {  
    id: 'habitas-alula',  
    serial: '002',  
    name: 'Habitas AlUla',  
    location: 'Ashar Valley, Saudi Arabia',  
    image: 'https://images.unsplash.com/photo-1621359871545-288219464e8e?auto=format&fit=crop&q=80',  
    hook: 'Immersive luxury amidst the ancient canyons.',  
    sanctuaryId: 'elite-ledger',  
    verified: true  
  },  
  {  
    id: '7132-hotel',  
    serial: '003',  
    name: '7132 Hotel',  
    location: 'Vals, Switzerland',  
    image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80',  
    hook: 'A brutalist masterpiece centered around thermal stones.',  
    sanctuaryId: 'elite-ledger',  
    verified: true  
  },  
  {  
    id: 'passalacqua',  
    serial: '004',  
    name: 'Passalacqua',  
    location: 'Lake Como, Italy',  
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80',  
    hook: 'The definitive expression of Lake Como elegance.',  
    sanctuaryId: 'elite-ledger',  
    verified: true  
  },  
  {  
    id: 'bulgari-tokyo',  
    serial: '005',  
    name: 'Bulgari Hotel Tokyo',  
    location: 'Tokyo, Japan',  
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80',  
    hook: 'Italian soul meeting Japanese precision above the clouds.',  
    sanctuaryId: 'elite-ledger',  
    verified: true  
  },  
  {  
    id: 'capella-ubud',  
    serial: '006',  
    name: 'Capella Ubud',  
    location: 'Bali, Indonesia',  
    image: 'https://capellahotels.com/assets/img/site_images/ubud/ubud-home01.jpg',  
    hook: 'Hyper-personalized luxury hidden in the Balinese jungle.',  
    sanctuaryId: 'elite-ledger',  
    verified: true  
  },  
  {  
    id: 'amangiri',  
    serial: '007',  
    name: 'Amangiri',  
    location: 'Utah, USA',  
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&q=80',  
    hook: 'Minimalist architecture carved into the Navajo desert.',  
    sanctuaryId: 'elite-ledger',  
    verified: true  
  },  
  {  
    id: 'maybourne-riviera',  
    serial: '008',  
    name: 'The Maybourne Riviera',  
    location: 'Roquebrune-Cap-Martin, France',  
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80',  
    hook: 'A dramatic cliffside retreat above the Mediterranean.',  
    sanctuaryId: 'elite-ledger',  
    verified: true  
  },  
  {  
    id: 'aman-kyoto',  
    serial: '009',  
    name: 'Aman Kyoto',  
    location: 'Kyoto, Japan',  
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80',  
    hook: 'A hidden garden sanctuary at the foot of Mount Hidari Daimonji.',  
    sanctuaryId: 'elite-ledger',  
    verified: true  
  },  
  {  
    id: 'six-senses-southern-dunes',  
    serial: '010',  
    name: 'Six Senses Southern Dunes',  
    location: 'The Red Sea, Saudi Arabia',  
    image: 'https://images.unsplash.com/photo-1523438097201-51217c399a55?auto=format&fit=crop&q=80',  
    hook: 'Sustainable luxury amidst rolling dunes and Nabataean heritage.',  
    sanctuaryId: 'elite-ledger',  
    verified: true  
  },  
  {  
    id: 'one-and-only-aesthesis',  
    serial: '011',  
    name: 'One&Only Aesthesis',  
    location: 'Athens, Greece',  
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80',  
    hook: 'Mid-century glamour on the Athenian Riviera.',  
    sanctuaryId: 'elite-ledger',  
    verified: true  
  },  
  {  
    id: 'singita-kwitonda',  
    serial: '012',  
    name: 'Singita Kwitonda Lodge',  
    location: 'Volcanoes National Park, Rwanda',  
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80',  
    hook: 'A mindful outpost for gorilla trekking in the Virunga clouds.',  
    sanctuaryId: 'elite-ledger',  
    verified: true  
  }  
];  
