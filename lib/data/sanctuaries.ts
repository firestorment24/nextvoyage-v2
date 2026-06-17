// lib/data/sanctuaries.ts

export interface Property {  
  id: string;  
  name: string;  
  location: string;  
  images: string[];  
  description: string;  
  sanctuaryId?: string; // Critical fix for the Archive filter  
  intel?: {  
    positioning: string;  
    category: string;  
    memberBenefits: string[];  
  };  
}

export interface Sanctuary {  
  id: string;  
  name: string;  
  description: string;  
  image: string;  
}

export const PROPERTY_DATA: Property[] = [  
  // --- THE VANGUARD TEN (Collection: vanguard) ---  
  {  
    id: "aman-venice",  
    sanctuaryId: "vanguard",  
    name: "Aman Venice",  
    location: "Venice, Italy",  
    images: ["https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=2070"],  
    description: "A 16th-century Palazzo on the Grand Canal, where Rococo art meets minimalist Asian elegance.",  
    intel: {  
      positioning: "Ultra-Private Heritage",  
      category: "Historic Palazzo",  
      memberBenefits: ["Private Canal Transfer", "Palazzo Garden Breakfast", "After-hours Church Access"]  
    }  
  },  
  {  
    id: "cheval-blanc-paris",  
    sanctuaryId: "vanguard",  
    name: "Cheval Blanc",  
    location: "Paris, France",  
    images: ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073"],  
    description: "LVMH’s flagship urban sanctuary overlooking the Pont Neuf, redefining modern Parisian luxury.",  
    intel: {  
      positioning: "Couture Hospitality",  
      category: "Palace Hotel",  
      memberBenefits: ["Dior Spa Priority", "Personalized Butler Service", "Rooftop Terrace Access"]  
    }  
  },  
  {  
    id: "passalacqua",  
    sanctuaryId: "vanguard",  
    name: "Passalacqua",  
    location: "Lake Como, Italy",  
    images: ["https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1972"],  
    description: "An 18th-century villa where the art of 'dolce far niente' is practiced with absolute precision.",  
    intel: {  
      positioning: "Vincenzo Bellini’s Muse",  
      category: "Boutique Heritage",  
      memberBenefits: ["Private Boat Excursions", "Chef's Garden Table", "Vintage Car Access"]  
    }  
  },  
  {  
    id: "claridges",  
    sanctuaryId: "vanguard",  
    name: "Claridge's",  
    location: "London, UK",  
    images: ["https://images.unsplash.com/photo-1520173043194-dc3b3a4979e2?q=80&w=2070"],  
    description: "The 'Annex to Buckingham Palace'. Art Deco grandeur in the heart of Mayfair.",  
    intel: {  
      positioning: "Royal Standard",  
      category: "Grand Dame",  
      memberBenefits: ["Suite Upgrade on Arrival", "Mayfair Shopping Concierge", "Traditional Tea Service"]  
    }  
  },  
  {  
    id: "rosewood-hong-kong",  
    sanctuaryId: "vanguard",  
    name: "Rosewood",  
    location: "Kowloon, Hong Kong",  
    images: ["https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=2070"],  
    description: "A vertical estate on the Tsim Sha Tsui waterfront, setting a new bar for Asian urbanism.",  
    intel: {  
      positioning: "Vertical Estate",  
      category: "Modern Icon",  
      memberBenefits: ["Manor Club Access", "Asaya Wellness Credit", "Art Advisory Tour"]  
    }  
  },  
  {  
    id: "one-and-only-mandarina",  
    sanctuaryId: "vanguard",  
    name: "One&Only Mandarina",  
    location: "Riviera Nayarit, Mexico",  
    images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070"],  
    description: "Treehouses and clifftop villas tucked into a pristine coastal rainforest.",  
    intel: {  
      positioning: "Coastal Wild",  
      category: "Eco-Luxury",  
      memberBenefits: ["Jetty Beach Club Access", "Private Naturalist Guide", "Sunset Tequila Tasting"]  
    }  
  },  
  {  
    id: "nihi-sumba",  
    sanctuaryId: "vanguard",  
    name: "Nihi Sumba",  
    location: "Sumba, Indonesia",  
    images: ["https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2138"],  
    description: "The edge of wildness. A resort built on the principles of community and soulful luxury.",  
    intel: {  
      positioning: "Soulful Adventure",  
      category: "Remote Escape",  
      memberBenefits: ["Surf Slot Reservation", "Spa Safari Experience", "Local Village Engagement"]  
    }  
  },  
  {  
    id: "royal-mansour",  
    sanctuaryId: "vanguard",  
    name: "Royal Mansour",  
    location: "Marrakech, Morocco",  
    images: ["https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2070"],  
    description: "A masterpiece of Moroccan craftsmanship, commissioned by the King himself.",  
    intel: {  
      positioning: "Palatial Craft",  
      category: "Royal Riads",  
      memberBenefits: ["Fast Track Airport Service", "Private Riad Host", "Hammam Ritual"]  
    }  
  },  
  {  
    id: "belmond-hotel-cipriani",  
    sanctuaryId: "vanguard",  
    name: "Hotel Cipriani",  
    location: "Venice, Italy",  
    images: ["https://images.unsplash.com/photo-1527261834078-9b37d35a10f2?q=80&w=2070"],  
    description: "Venice’s legendary retreat on Giudecca Island, known for its Olympic-sized pool and timeless glamour.",  
    intel: {  
      positioning: "Cinematic Glamour",  
      category: "Island Resort",  
      memberBenefits: ["Private Launch Service", "Gabbiano Bar Credits", "Lagoon Excursion"]  
    }  
  },  
  {  
    id: "the-upper-house",  
    sanctuaryId: "vanguard",  
    name: "The Upper House",  
    location: "Hong Kong",  
    images: ["https://images.unsplash.com/photo-1449156001931-829f04d22cb7?q=80&w=2070"],  
    description: "André Fu’s masterpiece of calm, perched high above the neon buzz of Hong Kong.",  
    intel: {  
      positioning: "Understated Zen",  
      category: "Design Hotel",  
      memberBenefits: ["Sky Lounge Access", "In-Room Maxibar (House Treats)", "House Car Service"]  
    }  
  },

  // --- ARCTIC DOSSIER (Collection: arctic) ---  
  {  
    id: "octola-lodge",  
    sanctuaryId: "arctic",  
    name: "Octola Private Wilderness",  
    location: "Lapland, Finland",  
    images: ["https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=2070"],  
    description: "The most exclusive private retreat in the Arctic, set within 300 hectares of private forest.",  
    intel: {  
      positioning: "Absolute Seclusion",  
      category: "Private Estate",  
      memberBenefits: ["Private Heli-Transfer", "Personal Wilderness Chef", "Aurora Specialist Guide"]  
    }  
  },  
  {  
    id: "deplar-farm",  
    sanctuaryId: "arctic",  
    name: "Deplar Farm",  
    location: "Troll Peninsula, Iceland",  
    images: ["https://images.unsplash.com/photo-1504829857797-ddff29c27947?q=80&w=2070"],  
    description: "A converted sheep farm transformed into a high-tech adventure hub for heli-skiing and salmon fishing.",  
    intel: {  
      positioning: "Adventure Hub",  
      category: "Lodge",  
      memberBenefits: ["Geothermal Pool Access", "Heli-Ski Base access", "Viking Sauna Ritual"]  
    }  
  },  
  {  
    id: "shelter-alaska",  
    sanctuaryId: "arctic",  
    name: "Sheldon Chalet",  
    location: "Denali, Alaska",  
    images: ["https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=2070"],  
    description: "Perched on a nunatak above the Ruth Glacier, this is the pinnacle of American alpine luxury.",  
    intel: {  
      positioning: "Glacier Bound",  
      category: "Ultra-Remote",  
      memberBenefits: ["Glacier Landing Gear", "Champagne on the Nunatak", "Alpine Survival Course"]  
    }  
  },

  // --- NOMADIC FRONTIER (Collection: nomadic) ---  
  {  
    id: "singita-leombo",  
    sanctuaryId: "nomadic",  
    name: "Singita Lebombo",  
    location: "Kruger, South Africa",  
    images: ["https://images.unsplash.com/photo-1493962853295-0fd703275514?q=80&w=2070"],  
    description: "Glass-walled suites suspended over the N'Wanetsi River, offering a bold take on the safari lodge.",  
    intel: {  
      positioning: "Design-Forward Safari",  
      category: "Game Lodge",  
      memberBenefits: ["Private Game Vehicle", "Wine Gallery Access", "Photographic Studio Use"]  
    }  
  },  
  {  
    id: "amangiri",  
    sanctuaryId: "nomadic",  
    name: "Amangiri",  
    location: "Utah, USA",  
    images: ["https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074"],  
    description: "A concrete marvel that disappears into the slot canyons and mesas of the Navajo Nation.",  
    intel: {  
      positioning: "Desert Brutalism",  
      category: "Destination Resort",  
      memberBenefits: ["Via Ferrata Access", "Navajo Guided Hikes", "Aman Spa Credit"]  
    }  
  },  
  {  
    id: "dar-ahlam",  
    sanctuaryId: "nomadic",  
    name: "Dar Ahlam",  
    location: "Skoura, Morocco",  
    images: ["https://images.unsplash.com/photo-1489493585363-d6943449ef21?q=80&w=2070"],  
    description: "The 'House of Dreams'—a traditional Kasbah where every meal and excursion is a surprise.",  
    intel: {  
      positioning: "Ephemeral Luxury",  
      category: "Kasbah",  
      memberBenefits: ["Nomadic Tent Night", "Private Garden Dining", "No-Menu Culinary Journey"]  
    }  
  },

  // --- ADDITIONAL CURATED RECORDS (Totaling 29) ---  
  {  
    id: "aman-tokyo",  
    sanctuaryId: "vanguard",  
    name: "Aman Tokyo",  
    location: "Otemachi, Japan",  
    images: ["https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094"],  
    description: "A sanctuary in the sky, balancing urban dynamism with the profound calm of Japanese tradition.",  
    intel: { positioning: "Sky-High Zen", category: "Urban Sanctuary", memberBenefits: ["Private Onsen Access", "Sake Sommelier Session"] }  
  },  
  {  
    id: "la-mamounia",  
    sanctuaryId: "vanguard",  
    name: "La Mamounia",  
    location: "Marrakech, Morocco",  
    images: ["https://images.unsplash.com/photo-1549918830-11ec3d405af1?q=80&w=2070"],  
    description: "The storied jewel of Marrakech, where Winston Churchill once found his inspiration.",  
    intel: { positioning: "Orientalist Grandeur", category: "Palace Hotel", memberBenefits: ["Churchill Suite Tour", "Private Garden Access"] }  
  },  
  {  
    id: "post-ranch-inn",  
    sanctuaryId: "nomadic",  
    name: "Post Ranch Inn",  
    location: "Big Sur, USA",  
    images: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070"],  
    description: "Perched 1,200 feet above the Pacific, where the redwoods meet the sea.",  
    intel: { positioning: "Coastal Transcendence", category: "Boutique", memberBenefits: ["Stargazing Tour", "Lexus Test Drive"] }  
  },  
  {  
    id: "southern-ocean-lodge",  
    sanctuaryId: "nomadic",  
    name: "Southern Ocean Lodge",  
    location: "Kangaroo Island, Australia",  
    images: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070"],  
    description: "The rebirth of an Australian icon, cantilevered over the wild Southern Ocean.",  
    intel: { positioning: "Island Edge", category: "Luxury Lodge", memberBenefits: ["Wildlife Safari", "Island Open Bar"] }  
  },  
  {  
    id: "fogo-island-inn",  
    sanctuaryId: "arctic",  
    name: "Fogo Island Inn",  
    location: "Newfoundland, Canada",  
    images: ["https://images.unsplash.com/photo-1445013541983-93ef3c7bb18b?q=80&w=2070"],  
    description: "A stilts-bound masterpiece of social entrepreneurship and modern architecture at the edge of the world.",  
    intel: { positioning: "Community Bound", category: "Iconic Design", memberBenefits: ["Community Host Program", "Iceberg Watching"] }  
  },  
  {  
    id: "amanzoe",  
    sanctuaryId: "vanguard",  
    name: "Amanzoe",  
    location: "Peloponnese, Greece",  
    images: ["https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1972"],  
    description: "A modern Acropolis overlooking the Aegean, where olive groves meet minimalist marble.",  
    intel: { positioning: "Modern Acropolis", category: "Resort", memberBenefits: ["Private Beach Club Access", "Helicopter Transfer"] }  
  },  
  {  
    id: "belmond-cap-juluca",  
    name: "Cap Juluca",  
    location: "Anguilla",  
    images: ["https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2070"],  
    description: "Greco-Moorish architecture on the whitest sands of the Caribbean.",  
    intel: { positioning: "Beachfront Purity", category: "Resort", memberBenefits: ["Private Cabana", "Snorkel Safari"] }  
  },  
  {  
    id: "hotel-du-cap-eden-roc",  
    sanctuaryId: "vanguard",  
    name: "Hotel du Cap-Eden-Roc",  
    location: "Antibes, France",  
    images: ["https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1974"],  
    description: "The playground of the Riviera elite, where history is written by the pool.",  
    intel: { positioning: "Riviera Icon", category: "Grand Hotel", memberBenefits: ["Private Cabana No. 1", "Vintage Riva Boat"] }  
  },  
  {  
    id: "soneva-jani",  
    sanctuaryId: "nomadic",  
    name: "Soneva Jani",  
    location: "Noonu Atoll, Maldives",  
    images: ["https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2070"],  
    description: "Overwater villas with retractable roofs for stargazing and private slides into the lagoon.",  
    intel: { positioning: "Castaway Luxury", category: "Island Resort", memberBenefits: ["Private Observatory Dinner", "Manta Ray Snorkel"] }  
  },  
  {  
    id: "clayoquot-wilderness-lodge",  
    sanctuaryId: "arctic",  
    name: "Clayoquot Wilderness Lodge",  
    location: "Vancouver Island, Canada",  
    images: ["https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070"],  
    description: "Accessible only by seaplane, this is white-tent safari luxury in the heart of the Pacific Northwest.",  
    intel: { positioning: "Coastal Rainforest", category: "Glamping Lodge", memberBenefits: ["Heli-Hiking", "Bear Watching"] }  
  },  
  {  
    id: "the-brando",  
    sanctuaryId: "nomadic",  
    name: "The Brando",  
    location: "Tetiaroa, French Polynesia",  
    images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073"],  
    description: "Marlon Brando's private atoll, now a carbon-neutral paradise for the world's most discerning.",  
    intel: { positioning: "Eco-Atoll", category: "Private Island", memberBenefits: ["Naturalist Tour", "Deep Sea Spa Access"] }  
  },  
  {  
    id: "explora-patagonia",  
    sanctuaryId: "nomadic",  
    name: "Explora Patagonia",  
    location: "Torres del Paine, Chile",  
    images: ["https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2070"],  
    description: "Located in the heart of the national park, providing unparalleled access to the granite towers.",  
    intel: { positioning: "Exploration Base", category: "Adventure Lodge", memberBenefits: ["Private Gaucho Experience", "Daily Guided Treks"] }  
  },  
  {  
    id: "singita-kwitonda",  
    sanctuaryId: "nomadic",  
    name: "Singita Kwitonda Lodge",  
    location: "Volcanoes National Park, Rwanda",  
    images: ["https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071"],  
    description: "A sanctuary on the edge of the gorilla habitat, committed to conservation and volcanic beauty.",  
    intel: { positioning: "Gorilla Sanctuary", category: "Safari Lodge", memberBenefits: ["Private Trekking Gear", "Community Garden Visit"] }  
  }  
];

export const SANCTUARIES_DATA: Sanctuary[] = [  
  {  
    id: "vanguard",  
    name: "The Vanguard Ten",  
    description: "A curated dossier of the world's ten most influential properties. These are the benchmarks of modern luxury, where service, heritage, and design converge.",  
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=2070"  
  },  
  {  
    id: "arctic",  
    name: "The Arctic Dossier",  
    description: "Field reports from the high latitudes. These sanctuaries offer radical isolation and raw natural beauty, from the glaciers of Alaska to the forests of Lapland.",  
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=2070"  
  },  
  {  
    id: "nomadic",  
    name: "The Nomadic Frontier",  
    description: "For those who seek the horizon. A collection of outposts in the world's most remote landscapes, where the frontier meets refined industrial comfort.",  
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074"  
  }  
];

// Alias for legacy collection support  
export const properties = PROPERTY_DATA; 
