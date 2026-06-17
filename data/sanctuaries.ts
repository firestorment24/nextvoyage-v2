export interface Sanctuary {  
id: string;  
name: string;  
loc: string;  
description: string;  
heroImage: string;  
price: string;  
features: string[];  
tag: string; // Added to match page.tsx  
}

export const SANCTUARY_DATA: Sanctuary[] = [  
{  
  id: 'modern-villa',  
  name: 'The Glass Pavilion',  
  loc: 'Ibiza, Spain',  
  description: 'An ultra-luxury modern villa perched on the cliffs, offering panoramic Mediterranean views and seamless indoor-outdoor living.',  
  heroImage: 'https://cdn.marblism.com/yBrJxDpEKzp.webp',  
  price: 'From $4,500 / night',  
  features: ['Infinity Pool', 'Private Chef', 'Helipad Access'],  
  tag: 'Seamless indoor-outdoor living'  
},  
{  
  id: 'alpine-chalet',  
  name: 'Summit Silence',  
  loc: 'Zermatt, Switzerland',  
  description: 'A minimalist luxury alpine chalet with floor-to-ceiling windows facing the Matterhorn.',  
  heroImage: 'https://cdn.marblism.com/uVf8PKIwMQs.webp',  
  price: 'From $6,200 / night',  
  features: ['Ski-in/Ski-out', 'Private Spa', 'Wine Cellar'],  
  tag: 'Minimalist alpine luxury'  
},  
{  
  id: 'desert-masterpiece',  
  name: 'Dune Obsidian',  
  loc: 'Amangiri, Utah',  
  description: 'A modern desert architectural masterpiece that blends into the prehistoric landscape of the American Southwest.',  
  heroImage: 'https://cdn.marblism.com/zFe_tm4uqQ0.webp',  
  price: 'From $3,800 / night',  
  features: ['Stargazing Deck', 'Outdoor Firepit', 'Private Canyon Access'],  
  tag: 'Desert architectural masterpiece'  
},  
{  
  id: 'tuscany-estate',  
  name: 'Villa L’Eredità',  
  loc: 'Tuscany, Italy',  
  description: 'A hidden luxury estate surrounded by rolling vineyards and ancient olive groves.',  
  heroImage: 'https://cdn.marblism.com/iuzX5wHxEPS.webp',  
  price: 'From $2,900 / night',  
  features: ['Vineyard Tours', 'Truffle Hunting', 'Historic Chapel'],  
  tag: 'Surrounded by rolling vineyards'  
},  
{  
  id: 'island-bungalow',  
  name: 'Azure Retreat',  
  loc: 'Maldives',  
  description: 'A private island luxury bungalow situated over crystal clear waters with a private lagoon.',  
  heroImage: 'https://cdn.marblism.com/QF3c0dCz8Qr.webp',  
  price: 'From $5,500 / night',  
  features: ['Underwater Dining', 'Personal Butler', 'Private Reef'],  
  tag: 'Private island sanctuary'  
},  
{  
  id: 'iceland-cabin',  
  name: 'The Mirror House',  
  loc: 'Iceland',  
  description: 'A mirrored luxury cabin that disappears into the Icelandic tundra, perfect for Northern Lights viewing.',  
  heroImage: 'https://cdn.marblism.com/OjNkuZFYKtF.webp',  
  price: 'From $3,200 / night',  
  features: ['Geothermal Hot Tub', 'Aurora Lounge', 'Off-grid Luxury'],  
  tag: 'Disappearing into the tundra'  
},  
{  
  id: 'grecian-estate',  
  name: 'Oia Serenity',  
  loc: 'Santorini, Greece',  
  description: 'A minimalist Grecian estate overlooking the caldera with iconic white-washed architecture.',  
  heroImage: 'https://cdn.marblism.com/3f6Tz0yWYfC.webp',  
  price: 'From $4,100 / night',  
  features: ['Sunset Terrace', 'Private Plunge Pool', 'Yacht Charters'],  
  tag: 'Overlooking the caldera'  
},  
{  
  id: 'brutalist-villa',  
  name: 'Concrete Oasis',  
  loc: 'Tulum, Mexico',  
  description: 'A brutalist concrete luxury villa tucked away in the jungle, emphasizing raw materials and natural light.',  
  heroImage: 'https://cdn.marblism.com/s8lEQX93FP3.webp',  
  price: 'From $2,400 / night',  
  features: ['Jungle Rooftop', 'Private Cenote Access', 'Art Gallery'],  
  tag: 'Emphasizing raw materials'  
}  
];  

