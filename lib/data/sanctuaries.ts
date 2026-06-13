export interface Property {  
  id: string  
  name: string  
  location: string  
  image: string  
  highlight: string  
  description: string  
}

export const PROPERTY_DATA: Property[] = [  
  {  
    id: 'NV-LDR-001',  
    name: 'Aman Tokyo',  
    location: 'Tokyo, Japan',  
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'Urban Sanctuary',  
    description: 'A monument to modern Japanese design, perched high above the Otemachi Forest.'  
  },  
  {  
    id: 'NV-LDR-002',  
    name: 'Aman Venice',  
    location: 'Venice, Italy',  
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee2887ad8e?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'Grand Canal Palazzo',  
    description: '16th-century heritage meets minimalist luxury on the banks of the Grand Canal.'  
  },  
  {  
    id: 'NV-LDR-003',  
    name: 'Aman New York',  
    location: 'New York, USA',  
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'Fifth Avenue Landmark',  
    description: 'An architectural rebirth of the Crown Building, bringing peace to the heart of Manhattan.'  
  },  
  {  
    id: 'NV-LDR-004',  
    name: 'Singita Boulders Lodge',  
    location: 'Sabi Sand, South Africa',  
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'Riverside Safari Luxe',  
    description: 'Raw, organic luxury inspired by the ancient boulders of the Sand River.'  
  },  
  {  
    id: 'NV-LDR-005',  
    name: 'Singita Lebombo Lodge',  
    location: 'Kruger National Park, South Africa',  
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'Cliffside Design Masterpiece',  
    description: 'Glass-walled suites suspended over the N’wanetsi River, blurring the line between indoors and out.'  
  },  
  {  
    id: 'NV-LDR-006',  
    name: 'Sensi Azores Nature & Spa',  
    location: 'São Miguel, Azores',  
    image: 'https://cdn.prod.website-files.com/64b36dfa6b5e7b810673520b/65b79b7de504bd106897317b_fields.webp',  
    highlight: 'Volcanic Nature Retreat',  
    description: 'A restored farmhouse estate positioned at the edge of the Atlantic, where green meets blue.'  
  },  
  {  
    id: 'NV-LDR-007',  
    name: 'Andronis Luxury Suites',  
    location: 'Oia, Santorini',  
    image: 'https://elitevoyage.com/wp-content/uploads/2022/03/Andronis-Luxury-Suites-Cover-1.jpg',  
    highlight: 'Iconic Caldera Pools',  
    description: 'Carved into the Santorini cliffs, offering the world’s most famous sunset views from private infinity pools.'  
  },  
  {  
    id: 'NV-LDR-008',  
    name: 'Amancaya',  
    location: 'Exumas, Bahamas',  
    image: 'https://www.hotelexplorer.net/storage/information/8i6VKEpBygFJSfgUdsGGNGO7eX5vtkkChtZgCSA8.png',  
    highlight: 'Private Island Sanctuary',  
    description: 'Aman’s vision of Caribbean seclusion, spread across two private cays in the Exumas.'  
  },  
  {  
    id: 'NV-LDR-009',  
    name: 'Next Hotel Melbourne',  
    location: 'Melbourne, Australia',  
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'Industrial-Chic Landmark',  
    description: 'A masterclass in sophisticated urban living within Melbourne’s premier retail and dining precinct.'  
  },  
  {  
    id: 'NV-LDR-010',  
    name: 'Santa Marina Mykonos',  
    location: 'Mykonos, Greece',  
    image: 'https://ik.imgkit.net/3vlqs5axxjf/external/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/148/276/20/lc-jmklc-aerial-view-santa-33376-48650_Classic-Hor_O.jpg?tr=w-1200%2Cfo-auto',  
    highlight: 'Exclusive Peninsula',  
    description: 'Mykonos’ only private beach resort, home to the world-renowned Buddha-Bar Beach.'  
  },  
  {  
    id: 'NV-LDR-011',  
    name: 'The Balmoral',  
    location: 'Edinburgh, Scotland',  
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'Historic Grandeur',  
    description: 'A love letter to Scotland, standing tall as the most prestigious address in Edinburgh since 1902.'  
  },  
  {  
    id: 'NV-LDR-012',  
    name: 'The Charles Hotel',  
    location: 'Munich, Germany',  
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'Modern Bavarian Elegance',  
    description: 'Quiet luxury overlooking the Old Botanical Garden, merging contemporary design with Munich’s history.'  
  },  
  {  
    id: 'NV-LDR-013',  
    name: 'The Chedi Luštica Bay',  
    location: 'Luštica Bay, Montenegro',  
    image: 'https://secure.s.forbestravelguide.com/img/properties/the-chedi-lustica-bay/the-chedi-lustica-bay-entrance.jpg',  
    highlight: 'Adriatic Marina Lifestyle',  
    description: 'Understated elegance on the edge of the Adriatic, where the mountains meet the sea.'  
  },  
  {  
    id: 'NV-LDR-014',  
    name: 'Blancaneaux Lodge',  
    location: 'San Ignacio, Belize',  
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'Coppola Jungle Retreat',  
    description: 'A lush hideaway in the Maya Mountains, blending wild nature with artistic luxury.'  
  },  
  {  
    id: 'NV-LDR-015',  
    name: 'Paradisus Los Cabos',  
    location: 'Los Cabos, Mexico',  
    image: 'https://images.trvl-media.com/lodging/1000000/20000/13800/13775/d394dd7a.jpg?impolicy=resizecrop&rw=598&ra=fit',  
    highlight: 'Oceanfront Sanctuary',  
    description: 'A member of the Leading Hotels of the World, redefining the all-inclusive experience in Baja.'  
  },  
  {  
    id: 'NV-LDR-016',  
    name: 'The Langham Chicago',  
    location: 'Chicago, Illinois',  
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'Mies van der Rohe Masterpiece',  
    description: 'Timeless luxury inside a skyscraper designed by the father of modern architecture.'  
  },  
  {  
    id: 'NV-LDR-017',  
    name: 'Ritz-Carlton Yacht Collection',  
    location: 'Global / Mediterranean',  
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Ritz-Carlton_Evrima.jpg/960px-Ritz-Carlton_Evrima.jpg',  
    highlight: 'Ultra-Luxury at Sea',  
    description: 'The intimacy of a private yacht paired with the legendary service of The Ritz-Carlton.'  
  },  
  {  
    id: 'NV-LDR-018',  
    name: 'Kimpton Cardinal Hotel',  
    location: 'Winston-Salem, NC',  
    image: 'https://images.unsplash.com/photo-1517840901100-8179e982ad91?auto=format&fit=crop&q=80&w=1200',  
    highlight: 'Art Deco Historic Landmark',  
    description: 'Modern Southern charm inside the historic R.J. Reynolds Building, the inspiration for the Empire State Building.'  
  },  
  {  
    id: 'NV-LDR-019',  
    name: 'The Graylyn Estate',  
    location: 'Winston-Salem, NC',  
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200',  
    highlight: '1920s Manor House',  
    description: 'A historic French-inspired estate offering world-class hospitality across 55 sprawling acres.'  
  }  
]  
