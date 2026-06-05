export interface Property {  
  id: string;  
  slug: string;  
  sanctuarySlug: string;  
  name: string;  
  location: string;  
  heroImage: string;  
  description: string;  
  highlights: string[];  
}

export const properties: Property[] = [  
  {   
    id: '1',  
    slug: 'aman-new-york',  
    sanctuarySlug: 'the-metropolitan',  
    name: 'Aman New York',  
    location: 'Manhattan, USA',  
    heroImage: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2574&auto=format&fit=crop',  
    description: 'A vertical sanctuary in the historic Crown Building, bringing the peace of Aman to the pulse of Manhattan.',  
    highlights: ['Three-story Spa & Wellness Centre', 'Garden Terrace with fire pits', 'Jazz Club and Omakase dining']  
  },  
  {  
    id: '2',  
    slug: 'aman-tokyo',  
    sanctuarySlug: 'the-metropolitan',  
    name: 'Aman Tokyo',  
    location: 'Otemachi, Japan',  
    heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2574&auto=format&fit=crop',  
    description: 'An urban sanctuary at the top of the Otemachi Tower, blending traditional Japanese aesthetic with modern luxury.',  
    highlights: ['Panoramic Imperial Garden views', 'Basalt-lined infinity pool', 'Traditional Engawa-style architecture']  
  },  
  {  
    id: '3',  
    slug: 'bulgari-london',  
    sanctuarySlug: 'the-metropolitan',  
    name: 'Bulgari Hotel London',  
    location: 'Knightsbridge, UK',  
    heroImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2574&auto=format&fit=crop',  
    description: 'Silver-threaded elegance in the heart of Knightsbridge, offering the largest suites in the city.',  
    highlights: ['Private screening room', 'Award-winning 25m pool', 'Edward Sahakian Cigar Lounge']  
  },  
  {  
    id: '4',  
    slug: 'amanpuri',  
    sanctuarySlug: 'the-island',  
    name: 'Amanpuri',  
    location: 'Phuket, Thailand',  
    heroImage: 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?q=80&w=2574&auto=format&fit=crop',  
    description: 'The flagship Aman. A place of peace on a private peninsula overlooking the Andaman Sea.',  
    highlights: ['Holistic Wellness Centre', 'Private white sand beach', 'Black-tiled swimming pool']  
  },  
  {  
    id: '5',  
    slug: 'laucala-island',  
    sanctuarySlug: 'the-island',  
    name: 'Laucala Island',  
    location: 'Fiji',  
    heroImage: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2574&auto=format&fit=crop',  
    description: 'A private island refuge where sustainable luxury meets wild South Pacific beauty.',  
    highlights: ['Submarine excursions', '18-hole championship golf', 'Farm-to-table organic dining']  
  },  
  {  
    id: '6',  
    slug: 'ritz-carlton-evrima',  
    sanctuarySlug: 'the-fleet',  
    name: 'Evrima Yacht',  
    location: 'Mediterranean / Caribbean',  
    heroImage: 'https://images.unsplash.com/photo-1567891745344-7117193233a6?q=80&w=2574&auto=format&fit=crop',  
    description: 'The legendary service of Ritz-Carlton, reimagined for the open sea on a custom-built superyacht.',  
    highlights: ['Direct ocean access platform', 'The Shore Collection excursions', 'Signature Ritz-Carlton Spa']  
  },  
  {  
    id: '7',  
    slug: 'explora-journeys',  
    sanctuarySlug: 'the-fleet',  
    name: 'Explora I',  
    location: 'Global Voyages',  
    heroImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2574&auto=format&fit=crop',  
    description: 'A luxury lifestyle brand redefining the cruise experience with "Ocean State of Mind" philosophy.',  
    highlights: ['Homes at Sea residences', 'Thermal wellness suite', 'Curated destination experiences']  
  },  
  {  
    id: '8',  
    slug: 'amangiri',  
    sanctuarySlug: 'the-desert',  
    name: 'Amangiri',  
    location: 'Canyon Point, USA',  
    heroImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2574&auto=format&fit=crop',  
    description: 'A modernist masterpiece blended into the luminous canyons of the Utah desert.',  
    highlights: ['Via Ferrata climbing', 'Stargazing in total silence', 'Navajo-inspired spa rituals']  
  },  
  {  
    id: '9',  
    slug: 'qasr-al-sarab',  
    sanctuarySlug: 'the-desert',  
    name: 'Qasr Al Sarab',  
    location: 'Abu Dhabi, UAE',  
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2574&auto=format&fit=crop',  
    description: 'A desert fortress rising from the golden dunes of the Empty Quarter.',  
    highlights: ['Camel trekking at sunset', 'Dune dining under the stars', 'Traditional archery']  
  },  
  {  
    id: '10',  
    slug: 'aman-venice',  
    sanctuarySlug: 'the-heritage',  
    name: 'Aman Venice',  
    location: 'Venice, Italy',  
    heroImage: 'https://images.unsplash.com/photo-1514890547357-a9ee2887ad8e?q=80&w=2574&auto=format&fit=crop',  
    description: 'Regal living in a 16th-century palazzo on the Grand Canal, where history meets modern zen.',  
    highlights: ['Tiepolo frescoes', 'Private garden on the canal', 'Altana rooftop terrace']  
  },  
  {  
    id: '11',  
    slug: 'villa-deste',  
    sanctuarySlug: 'the-estate',  
    name: 'Villa d’Este',  
    location: 'Lake Como, Italy',  
    heroImage: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=2574&auto=format&fit=crop',  
    description: 'The crown jewel of Lake Como. A renaissance estate that has hosted royalty for centuries.',  
    highlights: ['The Floating Pool', 'Cardone garden walks', 'Private Riva boat tours']  
  },  
  {  
    id: '12',  
    slug: 'belmond-caruso',  
    sanctuarySlug: 'the-estate',  
    name: 'Belmond Hotel Caruso',  
    location: 'Ravello, Italy',  
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2574&auto=format&fit=crop',  
    description: 'Perched on a cliff 1,000 feet above the Amalfi Coast, a 11th-century palace with the world\'s most famous pool.',  
    highlights: ['Infinity pool above the clouds', 'Ancient frescoed ceilings', 'Lemon grove gardens']  
  },  
  {  
    id: '13',  
    slug: 'singita-lebombo',  
    sanctuarySlug: 'the-safari',  
    name: 'Singita Lebombo',  
    location: 'Kruger Park, SA',  
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2574&auto=format&fit=crop',  
    description: 'Glass-walled suites suspended over the N’wanetsi River, offering a bold take on the safari lodge.',  
    highlights: ['Unrivaled leopard sightings', 'World-class wine cellar', 'Eco-conscious design']  
  },  
  {  
    id: '14',  
    slug: 'angama-mara',  
    sanctuarySlug: 'the-safari',  
    name: 'Angama Mara',  
    location: 'Maasai Mara, Kenya',  
    heroImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2574&auto=format&fit=crop',  
    description: 'Inspired by the Swahili word for "suspended in mid-air," this lodge overlooks the Great Rift Valley.',  
    highlights: ['Hot air balloon safaris', 'Maasai warrior guides', 'Iconic Out of Africa views']  
  },  
  {  
    id: '15',  
    slug: 'aman-le-melezin',  
    sanctuarySlug: 'the-alpine',  
    name: 'Aman Le Mélézin',  
    location: 'Courchevel, France',  
    heroImage: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2574&auto=format&fit=crop',  
    description: 'An Alpine chateau with Japanese soul, located directly on the Bellecôte Piste.',  
    highlights: ['Ski-in / Ski-out access', 'Holistic Aman Spa', 'Sun terrace with slope views']  
  },  
  {  
    id: '16',  
    slug: 'badrutts-palace',  
    sanctuarySlug: 'the-alpine',  
    name: 'Badrutt’s Palace',  
    location: 'St. Moritz, Switzerland',  
    heroImage: 'https://images.unsplash.com/photo-1517044493812-f84ef8cc9ad3?q=80&w=2574&auto=format&fit=crop',  
    description: 'The legendary "living room" of St. Moritz, where Alpine glamour has thrived since 1896.',  
    highlights: ['The King\'s Social Club', 'Ice-skating rink in winter', 'Historic Tower suites']  
  },  
  {  
    id: '17',  
    slug: 'amanzoe',  
    sanctuarySlug: 'the-archipelago',  
    name: 'Amanzoe',  
    location: 'Peloponnese, Greece',  
    heroImage: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=2574&auto=format&fit=crop',  
    description: 'A modern-day Acropolis surrounded by olive groves and the sapphire waters of the Aegean.',  
    highlights: ['Amphitheatre for yoga', 'Private beach club', 'Colonnaded pool pavilions']  
  },  
  {  
    id: '18',  
    slug: 'soneva-jani',  
    sanctuarySlug: 'the-archipelago',  
    name: 'Soneva Jani',  
    location: 'Noonu Atoll, Maldives',  
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2574&auto=format&fit=crop',  
    description: 'Overwater villas with retractable roofs and private slides into the crystalline lagoon.',  
    highlights: ['Stargazing observatory', 'Overwater cinema', 'Private water slides']  
  }  
];  
