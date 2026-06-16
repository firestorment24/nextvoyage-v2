// lib/data/sanctuaries.ts

export interface Sanctuary {  
  id: string;  
  name: string;  
  description: string;  
  image: string;  
}

export interface Property {  
  id: string;  
  serial: string;   
  name: string;  
  location: string;  
  image: string;  
  hook: string;  
  description: string; // Required for "Narrative" section  
  sanctuaryId: string;  
  verified: boolean;  
  amenities: string[]; // Required for "EliteAmenities" component  
  invitation: string;  // Required for "The Invitation" section  
}

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
    description: 'A vertical sanctuary where serene minimalist design meets the vibrant energy of Manhattan. It is a place of peace in the city that never sleeps.',  
    sanctuaryId: 'elite-ledger',  
    verified: true,  
    amenities: ['2,300sqm Spa', 'Garden Terrace', 'Jazz Club', 'Arva & Nama Dining'],  
    invitation: 'Experience the pinnacle of Manhattan serenity. Your garden in the sky awaits.'  
  },  
  {  
    id: 'habitas-alula',  
    serial: '002',  
    name: 'Habitas AlUla',  
    location: 'Ashar Valley, Saudi Arabia',  
    image: 'https://images.unsplash.com/photo-1621359871545-288219464e8e?auto=format&fit=crop&q=80',  
    hook: 'Immersive luxury amidst the ancient canyons.',  
    description: 'An immersive retreat nestled within the ancient canyons of Ashar Valley, designed for cultural discovery and soulful reconnection with nature.',  
    sanctuaryId: 'elite-ledger',  
    verified: true,  
    amenities: ['Thuraya Wellness', 'Tama Dining', 'Outdoor Cinema', 'Art Installations'],  
    invitation: 'Journey into the heart of AlUla. Discover a new rhythm of life amidst the stones.'  
  },  
  {  
    id: '7132-hotel',  
    serial: '003',  
    name: '7132 Hotel',  
    location: 'Vals, Switzerland',  
    image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80',  
    hook: 'A brutalist masterpiece centered around thermal stones.',  
    description: 'A brutalist architectural masterpiece centered around the legendary thermal stones of Vals, offering an unparalleled sensory experience in the Swiss Alps.',  
    sanctuaryId: 'elite-ledger',  
    verified: true,  
    amenities: ['Peter Zumthor Therme', '7132 Silver Gastronomy', 'Helicopter Transfers', 'Valser Quartz Design'],  
    invitation: 'Surrender to the architecture of stone and water. The Alps have never been this intimate.'  
  },  
  {  
    id: 'passalacqua',  
    serial: '004',  
    name: 'Passalacqua',  
    location: 'Lake Como, Italy',  
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80',  
    hook: 'The definitive expression of Lake Como elegance.',  
    description: 'The definitive expression of Lake Como elegance, this historic villa is a place where timeless beauty and modern luxury coalesce.',  
    sanctuaryId: 'elite-ledger',  
    verified: true,  
    amenities: ['Terraced Gardens', 'Private Pier', 'Vintage Speedboat', 'Artisanal Italian Breakfast'],  
    invitation: 'The gates of the villa are open. Lake Como is yours to command.'  
  },  
  {  
    id: 'bulgari-tokyo',  
    serial: '005',  
    name: 'Bulgari Hotel Tokyo',  
    location: 'Tokyo, Japan',  
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80',  
    hook: 'Italian soul meeting Japanese precision above the clouds.',  
    description: 'Italian soul meets Japanese precision in this sky-high sanctuary, offering sweeping views and uncompromising sophistication above the Tokyo skyline.',  
    sanctuaryId: 'elite-ledger',  
    verified: true,  
    amenities: ['Bulgari Spa', 'Il Ristorante - Niko Romito', 'Bulgari Dolci', 'Rooftop Terrace'],  
    invitation: 'Ascend to a new standard of luxury. Tokyo brilliance meets Italian warmth.'  
  },  
  {  
    id: 'capella-ubud',  
    serial: '006',  
    name: 'Capella Ubud',  
    location: 'Bali, Indonesia',  
    image: 'https://capellahotels.com/assets/img/site_images/ubud/ubud-home01.jpg',  
    hook: 'Hyper-personalized luxury hidden in the Balinese jungle.',  
    description: 'A hyper-personalized jungle retreat where luxury tents blend seamlessly with the lush tropical surroundings of Bali\'s spiritual heart.',  
    sanctuaryId: 'elite-ledger',  
    verified: true,  
    amenities: ['Saltwater Plunge Pool', 'The Officers Tent', 'Auriga Wellness', 'Mads Lange Dining'],  
    invitation: 'The jungle whispers your name. Step into a world of tented wonder.'  
  },  
  {  
    id: 'amangiri',  
    serial: '007',  
    name: 'Amangiri',  
    location: 'Utah, USA',  
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&q=80',  
    hook: 'Minimalist architecture carved into the Navajo desert.',  
    description: 'A minimalist architectural marvel carved into the luminous canyons of the Navajo desert, where silence is the greatest luxury.',  
    sanctuaryId: 'elite-ledger',  
    verified: true,  
    amenities: ['Desert Spa', 'Via Ferrata', 'Aman Dining', 'Stargazing Pavilions'],  
    invitation: 'Find your center in the silence of the desert. The canyons are calling.'  
  },  
  {  
    id: 'maybourne-riviera',  
    serial: '008',  
    name: 'The Maybourne Riviera',  
    location: 'Roquebrune-Cap-Martin, France',  
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80',  
    hook: 'A dramatic cliffside retreat above the Mediterranean.',  
    description: 'A dramatic cliffside sanctuary perched high above the Mediterranean, offering avant-garde design and breathtaking vistas of the Côte d\'Azur.',  
    sanctuaryId: 'elite-ledger',  
    verified: true,  
    amenities: ['Infinite Pool', 'Ceto by Mauro Colagreco', 'The Riviera Spa', 'Private Beach Access'],  
    invitation: 'Hover between the sea and the sky. The Riviera has a new viewpoint.'  
  },  
  {  
    id: 'aman-kyoto',  
    serial: '009',  
    name: 'Aman Kyoto',  
    location: 'Kyoto, Japan',  
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80',  
    hook: 'A hidden garden sanctuary at the foot of Mount Hidari Daimonji.',  
    description: 'A hidden garden sanctuary where traditional Japanese aesthetics and modern comfort find perfect harmony amidst ancient forests.',  
    sanctuaryId: 'elite-ledger',  
    verified: true,  
    amenities: ['Onsen Hot Springs', 'The Living Pavilion', 'Taka-An Kaiseki', 'Forest Wellness'],  
    invitation: 'Wander through the moss-covered gardens of time. Kyoto\'s best-kept secret is yours.'  
  },  
  {  
    id: 'six-senses-southern-dunes',  
    serial: '010',  
    name: 'Six Senses Southern Dunes',  
    location: 'The Red Sea, Saudi Arabia',  
    image: 'https://images.unsplash.com/photo-1523438097201-51217c399a55?auto=format&fit=crop&q=80',  
    hook: 'Sustainable luxury amidst rolling dunes and Nabataean heritage.',  
    description: 'A sustainable luxury outpost celebrating Nabataean heritage and desert serenity amidst the rolling dunes of the Red Sea.',  
    sanctuaryId: 'elite-ledger',  
    verified: true,  
    amenities: ['Earth Lab', 'Alchemy Bar', 'Desert Oasis Spa', 'Bariyah Dining'],  
    invitation: 'A new chapter of the Red Sea begins here. Sustainable, soulful, and supreme.'  
  },  
  {  
    id: 'one-and-only-aesthesis',  
    serial: '011',  
    name: 'One&Only Aesthesis',  
    location: 'Athens, Greece',  
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80',  
    hook: 'Mid-century glamour on the Athenian Riviera.',  
    description: 'A revival of mid-century glamour on the Athenian Riviera, where sun-drenched shores meet sophisticated Greek living.',  
    sanctuaryId: 'elite-ledger',  
    verified: true,  
    amenities: ['Chenot Spa', 'Minotaur Bar', 'Ora by Ettore Botrini', 'Private Beach Club'],  
    invitation: 'The Athenian Riviera is reborn. Experience the aesthetic of the Greek sun.'  
  },  
  {  
    id: 'singita-kwitonda',  
    serial: '012',  
    name: 'Singita Kwitonda Lodge',  
    location: 'Volcanoes National Park, Rwanda',  
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80',  
    hook: 'A mindful outpost for gorilla trekking in the Virunga clouds.',  
    description: 'A mindful outpost dedicated to the conservation of Rwanda\'s natural heritage, set right on the edge of Volcanoes National Park.',  
    sanctuaryId: 'elite-ledger',  
    verified: true,  
    amenities: ['Akarabo Nursery', 'Conservation Room', 'Singita Spa', 'Farm-to-Table Dining'],  
    invitation: 'Walk with the giants of the Virunga. A transformative journey into the wild.'  
  }  
];  
