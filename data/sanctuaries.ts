export interface Sanctuary {  
  id: string;  
  name: string;  
  location: string;  
  description: string;  
  image: string;  
  price: string;  
  features: string[];  
}

export const SANCTUARY_DATA: Sanctuary[] = [  
  {  
    id: 'modern-villa',  
    name: 'The Glass Pavilion',  
    location: 'Ibiza, Spain',  
    description: 'An ultra-luxury modern villa perched on the cliffs, offering panoramic Mediterranean views and seamless indoor-outdoor living.',  
    image: 'https://cdn.marblism.com/yBrJxDpEKzp.webp',  
    price: 'From $4,500 / night',  
    features: ['Infinity Pool', 'Private Chef', 'Helipad Access']  
  },  
  {  
    id: 'alpine-chalet',  
    name: 'Summit Silence',  
    location: 'Zermatt, Switzerland',  
    description: 'A minimalist luxury alpine chalet with floor-to-ceiling windows facing the Matterhorn.',  
    image: 'https://cdn.marblism.com/uVf8PKIwMQs.webp',  
    price: 'From $6,200 / night',  
    features: ['Ski-in/Ski-out', 'Private Spa', 'Wine Cellar']  
  },  
  {  
    id: 'desert-masterpiece',  
    name: 'Dune Obsidian',  
    location: 'Amangiri, Utah',  
    description: 'A modern desert architectural masterpiece that blends into the prehistoric landscape of the American Southwest.',  
    image: 'https://cdn.marblism.com/zFe_tm4uqQ0.webp',  
    price: 'From $3,800 / night',  
    features: ['Stargazing Deck', 'Outdoor Firepit', 'Private Canyon Access']  
  },  
  {  
    id: 'tuscany-estate',  
    name: 'Villa L’Eredità',  
    location: 'Tuscany, Italy',  
    description: 'A hidden luxury estate surrounded by rolling vineyards and ancient olive groves.',  
    image: 'https://cdn.marblism.com/iuzX5wHxEPS.webp',  
    price: 'From $2,900 / night',  
    features: ['Vineyard Tours', 'Truffle Hunting', 'Historic Chapel']  
  },  
  {  
    id: 'island-bungalow',  
    name: 'Azure Retreat',  
    location: 'Maldives',  
    description: 'A private island luxury bungalow situated over crystal clear waters with a private lagoon.',  
    image: 'https://cdn.marblism.com/QF3c0dCz8Qr.webp',  
    price: 'From $5,500 / night',  
    features: ['Underwater Dining', 'Personal Butler', 'Private Reef']  
  },  
  {  
    id: 'iceland-cabin',  
    name: 'The Mirror House',  
    location: 'Iceland',  
    description: 'A mirrored luxury cabin that disappears into the Icelandic tundra, perfect for Northern Lights viewing.',  
    image: 'https://cdn.marblism.com/OjNkuZFYKtF.webp',  
    price: 'From $3,200 / night',  
    features: ['Geothermal Hot Tub', 'Aurora Lounge', 'Off-grid Luxury']  
  },  
  {  
    id: 'grecian-estate',  
    name: 'Oia Serenity',  
    location: 'Santorini, Greece',  
    description: 'A minimalist Grecian estate overlooking the caldera with iconic white-washed architecture.',  
    image: 'https://cdn.marblism.com/3f6Tz0yWYfC.webp',  
    price: 'From $4,100 / night',  
    features: ['Sunset Terrace', 'Private Plunge Pool', 'Yacht Charters']  
  },  
  {  
    id: 'brutalist-villa',  
    name: 'Concrete Oasis',  
    location: 'Tulum, Mexico',  
    description: 'A brutalist concrete luxury villa tucked away in the jungle, emphasizing raw materials and natural light.',  
    image: 'https://cdn.marblism.com/s8lEQX93FP3.webp',  
    price: 'From $2,400 / night',  
    features: ['Jungle Rooftop', 'Private Cenote Access', 'Art Gallery']  
  }  
];  
