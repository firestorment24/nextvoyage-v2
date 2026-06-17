export interface Property {  
  id: string;  
  serial: string;  
  name: string;  
  location: string;  
  niche: string;  
  profile: 'Core Pillar' | 'Atmospheric' | 'Active & Seasonal';  
  image: string;  
  highlight: string;  
  status?: string;  
  legalLink?: boolean;  
}

export const PROPERTY_DATA: Property[] = [  
  {  
    id: 'nv-ldr-001',  
    serial: 'NV-LDR-001',  
    name: 'Aman New York',  
    location: 'Manhattan, NY',  
    niche: 'Executive Sanctuary',  
    profile: 'Core Pillar',  
    image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d',  
    highlight: 'Business to Bliss: The Guardian Layer of Corporate Travel.',  
  },  
  // ... rest of your 19 properties  
];

// COMPATIBILITY EXPORT: This fixes the build errors in /properties pages  
export const properties = PROPERTY_DATA;  
// data/properties.ts expansion

export const PROPERTY_DATA = [  
  // ... existing NV-LDR-001 through 012  
  {  
    id: "NV-LDR-013",  
    name: "Kilchoan Estate",  
    location: "Knoydart, Scotland",  
    image: "https://www.duntondestinations.com/wp-content/uploads/2026/02/Kilchoan-080-1920x1080.jpg",  
    category: "Private Rewilding Estate",  
    highlight: "13,000 acres of Highland Noir at the edge of the world. No roads. No noise. Only the landscape.",  
    exclusiveOffer: "Private Charter Access from Mallaig + Estate Warden Expedition",  
    priceLevel: "Ultra-Private Buyout / Intimate Residency",  
  },  
  {  
    id: "NV-LDR-014",  
    name: "Pongwe Island",  
    location: "Zanzibar",  
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/68/21/8c/the-island-pongwe-lodge.jpg?w=1100&h=-1&s=1",  
    category: "Elementalist Retreat",  
    highlight: "The luxury of disappearing. Six bungalows on a private coral island with zero digital interference.",  
    exclusiveOffer: "Sundowner Dhow Charter + Private Sandbank Dinner",  
    priceLevel: "Secluded Niche / Full Buyout Optional",  
  },  
  {  
    id: "NV-LDR-015",  
    name: "Tinajani",  
    location: "Altiplano, Peru",  
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/55/13/fc/campamento-tinajani-fachada.jpg?w=1400&h=-1&s=1",  
    category: "High-Design Conservation Camp",  
    highlight: "Architectural dialogue at 13,000 feet. Brutalist tents integrated into pre-historic rock formations.",  
    exclusiveOffer: "Ancestral Route Mapping with Native Experts",  
    priceLevel: "Conservation-Led Ultra-Luxury",  
  },  
  {  
    id: "NV-LDR-016",  
    name: "Setouchi Retreat",  
    location: "Matsuyama, Japan",  
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/f0/ec/2a/setouchi-aonagi.jpg?w=1400&h=-1&s=1",  
    category: "Architectural Sanctuary",  
    highlight: "Life inside a Tadao Ando masterpiece. 8-meter floor-to-ceiling glass overlooking the Inland Sea.",  
    exclusiveOffer: "Private Omakase in the Aonagi Suite",  
    priceLevel: "Minimalist Elite / Museum Scale",  
  },  
  {  
    id: "NV-LDR-017",  
    name: "Flockhill Lodge",  
    location: "Canterbury, NZ",  
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/33/02/83/c4/homestead-bedroom.jpg?w=1400&h=-1&s=1",  
    category: "Refined Wilderness Station",  
    highlight: "36,000 acres of high-country seclusion. The ultimate Alpine-Noir playground for the inner circle.",  
    exclusiveOffer: "Helicopter Glacier Picnic + Private Estate Chef",  
    priceLevel: "Estate Buyout / High-Country Elite",  
  },  
  {  
    id: "NV-LDR-018",  
    name: ".Here Baa Atoll",  
    location: "Baa Atoll, Maldives",  
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/45/c1/53/caption.jpg?w=1400&h=-1&s=1",  
    category: "Residence-Only Atoll",  
    highlight: "A tiny collection of high-craft residences. No public spaces. No compromise on privacy.",  
    exclusiveOffer: "Personalised Arrival via Private Sea Plane",  
    priceLevel: "Ultra-Secluded Private Residence",  
  },  
  {  
    id: "NV-LDR-019",  
    name: "Ayan Zalaat",  
    location: "Ulaanbaatar, Mongolia",  
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/47/3f/bc/lost-in-china-terrace.jpg?w=1400&h=-1&s=1",  
    category: "Biosphere Heritage Hotel",  
    highlight: "Contemporary luxury inside a UNESCO Biosphere Reserve. The new frontier of high-design exploration.",  
    exclusiveOffer: "Off-Road Altai Expedition + Private Throat Singing Performance",  
    priceLevel: "Frontier Luxury / Heritage Design",  
  },  
  {  
    id: "NV-LDR-020",  
    name: "Sibbjans",  
    location: "Gotland, Sweden",  
    image: "https://www.sibbjans.se/_next/image?url=https%3A%2F%2Feu-west-2.graphassets.com%2Fcm5mjws2000ab08mm95ka8tap%2Fresize%3Dfit%3Amax%2Cheight%3A1200%2Cwidth%3A1200%2Foutput%3Dformat%3Awebp%2Fcmpqmn9thc6mv08l7luvq01os&w=1920&q=75",  
    category: "Regenerative Farm Estate",  
    highlight: "18th-century limestone architecture meets the Baltic coast. A nature-forward farm-to-table masterclass.",  
    exclusiveOffer: "Private Harvest Dinner + Foraged Gin Masterclass",  
    priceLevel: "Boutique Farm-to-Table / Intimate Residency",  
  },  
  {  
    id: "NV-LDR-021",  
    name: "Stamna Sifnos",  
    location: "Sifnos, Greece",  
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/06/98/d2/caption.jpg?w=1100&h=-1&s=1",  
    category: "Slow Cycladic Retreat",  
    highlight: "20-room sanctuary built for silence. Terracotta, stone, and the antidote to standard Greek tourism.",  
    exclusiveOffer: "Private Sunset Terrace Tasting with Local Vintners",  
    priceLevel: "Intimate Boutique / Quiet Luxury",  
  },  
  {  
    id: "NV-LDR-022",  
    name: "Silversands Beach House",  
    location: "Portici, Grenada",  
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/2a/6b/4c/two-bedroom-suite-king.jpg?w=1400&h=-1&s=1",  
    category: "Inner-Circle Coastal House",  
    highlight: "The intimate evolution of Silversands. Cliffside villas designed for the architectural purist.",  
    exclusiveOffer: "Butler-Served Beachside Private Cinema Experience",  
    priceLevel: "Cliffside Seclusion / High-End Residential",  
  },  
  {  
    id: "NV-LDR-023",  
    name: "Kat Florence Hotel",  
    location: "Elora, Canada",  
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/d8/30/c0/caption.jpg?w=1100&h=-1&s=1",  
    category: "Holistic 4-Suite Sanctuary",  
    highlight: "A limestone gorge masterpiece. The most exclusive four suites in North America.",  
    exclusiveOffer: "Bentley Airport Transfer + Daily Holistic Spa Circuit",  
    priceLevel: "All-Inclusive Elite / Intimate Buyout",  
  },  
  {  
    id: "NV-LDR-024",  
    name: "La Valise Mazunte",  
    location: "Oaxaca, Mexico",  
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/0b/d7/09/villa-pentagonos-bedroom.jpg?w=1400&h=-1&s=1",  
    category: "Brutalist Coastal Hideaway",  
    highlight: "Kalach-designed architecture in a 30-hectare reserve. Where the Pacific meets structural genius.",  
    exclusiveOffer: "Private Marine Safari + Stargazing Observatory Session",  
    priceLevel: "Design-Forward Coastal Luxury",  
  },  
  {  
    id: "NV-LDR-025",  
    name: "Fawn Bluff Lodge",  
    location: "British Columbia, Canada",  
    image: "https://fawnbluff.com/wp-content/uploads/2025/11/Fawn_Bluff_9123_Briceportolano_2025.jpg",  
    category: "Off-Grid Private Lodge",  
    highlight: "Accessible only by floatplane. A private-use kingdom at the edge of the Great Bear Rainforest.",  
    exclusiveOffer: "Grizzly Viewing via Private Heli + Lakefront Buyout",  
    priceLevel: "Ultra-Remote Buyout / Private Expedition",  
  },  
  {  
    id: "NV-LDR-026",  
    name: "Dunton Hot Springs",  
    location: "Dolores, Colorado",  
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/b6/0b/b3/well-house.jpg?w=2000&h=-1&s=1",  
    category: "Frontier-Luxe Ghost Town",  
    highlight: "A high-end 1885 ghost town restoration. Log cabins and private saloons in the San Juan Mountains.",  
    exclusiveOffer: "After-Hours Access to the Geothermal Bathhouse",  
    priceLevel: "Relais & Châteaux Frontier Luxury",  
  },  
  {  
    id: "NV-LDR-027",  
    name: "Chablé Yucatán",  
    location: "Chocholá, Mexico",  
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/11/1e/67/chable-yucatan.jpg?w=1400&h=-1&s=1",  
    category: "Jungle Cenote Sanctuary",  
    highlight: "Heritage meets the cave. A 741-acre estate built around a natural healing cenote.",  
    exclusiveOffer: "Private Tequila Cellar Tasting + Mayan Shaman Ritual",  
    priceLevel: "Award-Winning Heritage Wellness",  
  },  
  {  
    id: "NV-LDR-028",  
    name: "Sttupa Estate",  
    location: "Napa Valley, USA",  
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/a8/3a/8f/robert-frost-suite.jpg?w=1400&h=-1&s=1",  
    category: "Backen-Designed Hillside Estate",  
    highlight: "The most intimate 5 suites in Wine Country. Wood-burning fires and unyielding valley views.",  
    exclusiveOffer: "Curated Michelin-Guest Chef Dinner on Private Terrace",  
    priceLevel: "Hillside Seclusion / Ultra-Intimate",  
  },  
  {  
    id: "NV-LDR-029",  
    name: "Isola Saranac",  
    location: "Adirondacks, USA",  
    image: "https://www.thegrandkey.com/uploads/images/image003.jpg",  
    category: "Private Island Treehouse",  
    highlight: "A 12-acre island accessible only by boat. Gilded Age privacy with a luxury treehouse twist.",  
    exclusiveOffer: "Private Island Buyout + Staffed Lakefront BBQ",  
    priceLevel: "Fully Staffed Private Island",  
  },  
];  
