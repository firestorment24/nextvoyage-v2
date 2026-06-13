// lib/data/sanctuaries.ts

export interface Property {  
  id: string;  
  serial: string;  
  name: string;  
  location: string;  
  image: string;  
  highlight: string;  
  description: string;  
  specs: string[];  
}

export const PROPERTY_DATA: Property[] = [  
  {  
    id: "aman-new-york",  
    serial: "NV-LDR-001",  
    name: "Aman New York",  
    location: "Manhattan, USA",  
    image: "https://www.aman.com/sites/default/files/2022-08/Aman-New-York-Garden-Terrace_1.jpg",  
    highlight: "The crown jewel of the Billionaire’s Row skyline.",  
    description: "A serene sanctuary in the historic Crown Building, high above the pulse of Midtown Manhattan.",  
    specs: ["Double-height atriums", "Subterranean jazz club", "Garden Terrace"]  
  },  
  {  
    id: "hotel-du-cap-eden-roc",  
    serial: "NV-LDR-002",  
    name: "Hotel du Cap-Eden-Roc",  
    location: "Antibes, France",  
    image: "https://www.oetkercollection.com/media/2182/hotel-du-cap-eden-roc-hero.jpg",  
    highlight: "The definitive home of Riviera glamour.",  
    description: "A legendary Napoleon III-style palace perched on the tip of Cap d'Antibes.",  
    specs: ["Private saltwater pool", "Iconic diving boards", "Centuries-old pine groves"]  
  },  
  {  
    id: "singita-ebony-lodge",  
    serial: "NV-LDR-003",  
    name: "Singita Ebony Lodge",  
    location: "Sabi Sand, South Africa",  
    image: "https://singita.com/wp-content/uploads/2016/11/Singita-Ebony-Lodge-Exterior.jpg",  
    highlight: "The birthplace of modern sustainable luxury.",  
    description: "A bold, eclectic mix of African heritage and refined modern design on the banks of the Sand River.",  
    specs: ["Glass-fronted suites", "Private plunge pools", "Elite Big Five access"]  
  },  
  {  
    id: "amanpuri",  
    serial: "NV-LDR-004",  
    name: "Amanpuri",  
    location: "Phuket, Thailand",  
    image: "https://www.aman.com/sites/default/files/2021-02/Amanpuri_Exterior_1.jpg",  
    highlight: "The original Aman. Unmatched coastal privacy.",  
    description: "A timeless masterpiece of Ayutthaya-inspired architecture set within a coconut grove.",  
    specs: ["Private beach access", "Holistic wellness center", "Black-tiled pool"]  
  },  
  {  
    id: "amangiri",  
    serial: "NV-LDR-005",  
    name: "Amangiri",  
    location: "Utah, USA",  
    image: "https://www.aman.com/sites/default/files/2021-02/Amangiri_Exterior_1.jpg",  
    highlight: "Architecture as a dialogue with the desert.",  
    description: "A concrete fortress blending seamlessly into the luminous canyons of the Colorado Plateau.",  
    specs: ["600-acre sanctuary", "Desert-view spa", "Guided via ferrata"]  
  },  
  {  
    id: "sensi-azores",  
    serial: "NV-LDR-006",  
    name: "Sensi Azores",  
    location: "São Miguel, Azores",  
    image: "https://cdn.prod.website-files.com/64b36dfa6b5e7b810673520b/65b79b7de504bd106897317b_fields.webp",  
    highlight: "Nature and spa at the edge of the Atlantic.",  
    description: "A restored country farmhouse offering an authentic Azorean experience within a protected area.",  
    specs: ["Heated indoor pool", "Turkish bath", "Organic cuisine"]  
  },  
  {  
    id: "amancaya",  
    serial: "NV-LDR-007",  
    name: "Amancaya",  
    location: "Exuma, Bahamas",  
    image: "https://architecturemagazine.co.uk/wp-content/uploads/2026/06/Aman-Residences-Amancaya-%E2%80%93-Pool-Terrace-1-scaled.jpg",  
    highlight: "Aman’s first Bahamian private island hideaway.",  
    description: "A 36-pavilion resort set across two secluded cays in the crystal waters of the Exumas.",  
    specs: ["Private marina", "Pavilion-style living", "LEED-certified design"]  
  },  
  {  
    id: "next-hotel-melbourne",  
    serial: "NV-LDR-008",  
    name: "Next Hotel Melbourne",  
    location: "Melbourne, Australia",  
    image: "https://thecarousel.com/wp-content/uploads/2025/11/Carousel-18.webp",  
    highlight: "Manhattan-inspired sophistication in the CBD.",  
    description: "A design-forward retreat in the 80 Collins precinct, blending modern art and industrial heritage.",  
    specs: ["The Club lounge", "Barrel-aged cocktails", "City-framed views"]  
  },  
  {  
    id: "aman-tokyo",  
    serial: "NV-LDR-009",  
    name: "Aman Tokyo",  
    location: "Tokyo, Japan",  
    image: "https://www.travelandleisure.com/thmb/LD45sIeEe-QFcwP_Pgyy5uCDA-Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-guest-room-view-aman-tokyo-AMANTOKYO0624-3b14aecbd7ca49068acc577583f90693.jpg",  
    highlight: "A sky-high urban ryokan in the Otemachi Tower.",  
    description: "A serene sanctuary featuring washi paper ceilings, hinoki baths, and panoramic Fuji views.",  
    specs: ["30-meter indoor pool", "Traditional onsen", "Private Musashi omakase"]  
  },  
  {  
    id: "aman-venice",  
    serial: "NV-LDR-010",  
    name: "Aman Venice",  
    location: "Venice, Italy",  
    image: "https://www.aman.com/sites/default/files/2023-10/aman_venice_italy_-_exterior.jpg",  
    highlight: "Renaissance opulence on the Grand Canal.",  
    description: "A 16th-century palazzo featuring Tiepolo frescoes, gilded ceilings, and secret gardens.",  
    specs: ["Grand Canal suites", "Private Altana terrace", "Piano Nobile dining"]  
  },  
  {  
    id: "evrima-yacht",  
    serial: "NV-LDR-011",  
    name: "Evrima",  
    location: "The Ritz-Carlton Yacht Collection",  
    image: "https://www.ritzcarltonyachtcollection.com/sites/default/files/2021-10/Evrima_Exterior_Hero.jpg",  
    highlight: "The intimate Ritz-Carlton service, transposed to sea.",  
    description: "A bespoke yacht experience with 149 terrace suites and a signature marina platform.",  
    specs: ["Personal Concierge", "Michelin-inspired dining", "Infinite ocean views"]  
  },  
  {  
    id: "aman-le-melezin",  
    serial: "NV-LDR-012",  
    name: "Aman Le Mélézin",  
    location: "Courchevel, France",  
    image: "https://www.aman.com/sites/default/files/2021-02/Aman-Le-Melezin_Exterior_1.jpg",  
    highlight: "Alpine elegance in the Three Valleys.",  
    description: "An iconic ski-in, ski-out manor on the Bellecôte Piste with a majestic Japanese-inspired spa.",  
    specs: ["Ski Concierge", "Thermal suite", "Private sun terrace"]  
  },  
  {  
    id: "claridges-london",  
    serial: "NV-LDR-013",  
    name: "Claridge's",  
    location: "London, UK",  
    image: "https://media.gettyimages.com/id/803086508/photo/the-claridges-hotel-at-night.jpg?s=170667a&w=0&k=20&c=cgJY1zaCGy9iWzFZRN__16Al9f_TT8FBGFmVrLSq4Lw=",  
    highlight: "The timeless heart of Mayfair.",  
    description: "An Art Deco masterpiece synonymous with discreet luxury and flawless British service.",  
    specs: ["Designer-led suites", "Royal history", "Elite concierge"]  
  },  
  {  
    id: "royal-mansour",  
    serial: "NV-LDR-014",  
    name: "Royal Mansour",  
    location: "Marrakech, Morocco",  
    image: "https://secure.s.forbestravelguide.com/img/properties/royal-mansour-marrakech/royal-mansour-marrakech-Piscine.jpg",  
    highlight: "A royal palace within the Medina walls.",  
    description: "A sanctuary of 53 private riads, built by 1,500 artisans using the finest Moroccan craftsmanship.",  
    specs: ["Private riad butler", "2,500sqm spa", "Grand architectural gardens"]  
  },  
  {  
    id: "post-ranch-inn",  
    serial: "NV-LDR-015",  
    name: "Post Ranch Inn",  
    location: "Big Sur, USA",  
    image: "https://media.gettyimages.com/id/lpi20999_2/photo/silhouette-of-woman-in-infinity-pool-at-post-ranch-inn-big-sur-near-monterey-bay-monterey-bay.jpg?s=170667a&w=0&k=20&c=1fxjki9XXWysT32rR49-rliFm_Hm7g19fFCPhgKGMxY=",  
    highlight: "Cliffside serenity high above the Pacific.",  
    description: "Rustic elegance meets dramatic coastline in this legendary Big Sur hideaway.",  
    specs: ["Cliff-edge infinity pools", "Stargazing deck", "Organic architecture"]  
  },  
  {  
    id: "nihi-sumba",  
    serial: "NV-LDR-016",  
    name: "Nihi Sumba",  
    location: "Sumba, Indonesia",  
    image: "https://nihi.com/sumba/wp-content/uploads/sites/2/2025/09/nihi-sumba.jpg",  
    highlight: "The edge of wildness, perfected.",  
    description: "A philanthropic-led retreat offering world-class surfing, wellness, and island exploration.",  
    specs: ["Spa Safari", "Private surf breaks", "Beachfront horse stables"]  
  },  
  {  
    id: "hotel-caruso",  
    serial: "NV-LDR-017",  
    name: "Belmond Hotel Caruso",  
    location: "Ravello, Italy",  
    image: "https://img.belmond.com/f_auto/t_2580x1299/photos/car/car-ext02.jpg",  
    highlight: "An 11th-century palace above the Amalfi Coast.",  
    description: "A historic sanctuary perched 300 meters above the Tyrrhenian Sea with terraced lemon groves.",  
    specs: ["Iconic infinity pool", "Frescoed salons", "Private boat tours"]  
  },  
  {  
    id: "cheval-blanc-st-barth",  
    serial: "NV-LDR-018",  
    name: "Cheval Blanc St-Barth",  
    location: "St. Barthélemy",  
    image: "https://www.travelandleisure.com/thmb/yLvOSoB3yvXX73Jw9Euhycoo9AM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-pool-beach-cheval-blanc-st-barth-CHEVALSTBARTH1224-27b963d2e55f4fdc8ff75c42f44b839b.jpg",  
    highlight: "The only Palace-distinction hotel in the Caribbean.",  
    description: "Art de Vivre meets Flamands Beach in this ultra-exclusive tropical hideaway.",  
    specs: ["Guerlain spa", "Private island transfers", "Bespoke Alchemists service"]  
  },  
  {  
    id: "north-island",  
    serial: "NV-LDR-019",  
    name: "North Island",  
    location: "Seychelles",  
    image: "http://north-island.com/wp-content/uploads/2025/01/North-Island-North-Spray-in-front-of-East-Beach-1024x683.jpg",  
    highlight: "Barefoot luxury on a private wildlife sanctuary.",  
    description: "Only 11 handcrafted villas set within a pioneering 'Noah’s Ark' conservation program.",  
    specs: ["Private helipad", "Turtle nesting beaches", "All-inclusive bespoke dining"]  
  }  
];  
