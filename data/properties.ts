export interface Property {  
  id: string  
  name: string  
  location: string  
  image: string  
  gallery: string[]  
  collection: string  
  sanctuaryId: string  
  description: string  
  intel: {  
    positioning: string  
    category: string  
    memberBenefits: string[]  
  }  
}

export const PROPERTY_DATA: Property[] = [  
  {  
    id: 'capella-ubud',  
    name: 'Capella Ubud',  
    location: 'Bali, Indonesia',  
    image: 'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Capella%20Ubud/ubud-accommodation-tent-river-exterior.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Capella%20Ubud/ubud-accommodation-tent-river-exterior.jpg'  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description: 'An intimate tented camp hidden within the lush rainforest of Bali, where luxury canvas suites echo the spirit of 19th-century European exploration amid the sacred Wos River valley.',  
    intel: {  
      positioning: 'Explorer’s Camp in the Sacred Valley',  
      category: 'Wild Frontiers',  
      memberBenefits: ['Private Balinese blessing ritual', 'Campfire storytelling with resident naturalist', 'Guided ridge trek at dawn']  
    }  
  },  
  {  
    id: 'dunton-hot-springs',  
    name: 'Dunton Hot Springs',  
    location: 'Colorado, USA',  
    image: 'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot%20Springs/DHS%201.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot%20Springs/DHS%201.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot%20Springs/DHS%202.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot%20Springs/DHS%203.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot%20Springs/DHS%204.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot%20Springs/DHS%205.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot%20Springs/DHS%207.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot%20Springs/DHS%208.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot%20Springs/DHS%209.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot%20Springs/DHS%2010.jpg'  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description: 'A restored 19th-century mining town turned luxury wilderness retreat in the San Juan Mountains, where rustic log cabins meet natural hot springs and wildflower meadows.',  
    intel: {  
      positioning: 'Ghost Town Reimagined',  
      category: 'Wild Frontiers',  
      memberBenefits: ['Private soak in the historic Town Baths', 'Fly-fishing on the West Fork of the San Juan', 'Horseback riding through alpine meadows']  
    }  
  },  
  {  
    id: 'fawn-bluff-lodge-ontario',  
    name: 'Fawn Bluff Lodge',  
    location: 'Ontario, Canada',  
    image: 'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Fawn%20Bluff%20Lodge_Ontario/Fawn_Bluff_0904_Briceportolano_2025.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Fawn%20Bluff%20Lodge_Ontario/Fawn_Bluff_0904_Briceportolano_2025.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Fawn%20Bluff%20Lodge_Ontario/Fawn_Bluff_1028_Briceportolano_2025.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Fawn%20Bluff%20Lodge_Ontario/Fawn_Bluff_1605_Briceportolano_2025.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Fawn%20Bluff%20Lodge_Ontario/Fawn_Bluff_3303_Briceportolano_2025.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Fawn%20Bluff%20Lodge_Ontario/Fawn_Bluff_9123_Briceportolano_2025.jpg'  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description: 'A secluded Canadian wilderness lodge on the shores of Lake of the Woods, accessible only by floatplane — where boreal forest meets crystalline water in absolute privacy.',  
    intel: {  
      positioning: 'Floatplane-Only Wilderness',  
      category: 'Wild Frontiers',  
      memberBenefits: ['Private floatplane transfer', 'Indigenous-guided canoe expedition', 'Northern lights viewing deck']  
    }  
  },  
  {  
    id: 'flockhill-lodge-canterbury',  
    name: 'Flockhill Lodge',  
    location: 'Canterbury, New Zealand',  
    image: 'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Flockhill%20Lodge_Cantebury_NZ/Flockhill%202.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Flockhill%20Lodge_Cantebury_NZ/Flockhill%202.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Flockhill%20Lodge_Cantebury_NZ/Flockhill%203.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Flockhill%20Lodge_Cantebury_NZ/Flockhill%204.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Flockhill%20Lodge_Cantebury_NZ/Flockhill%205.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Flockhill%20Lodge_Cantebury_NZ/Flockhill%206.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Flockhill%20Lodge_Cantebury_NZ/Flockhill%208.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Flockhill%20Lodge_Cantebury_NZ/sugarloaf-exterior.jpg'  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description: 'A dramatic alpine lodge set against the backdrop of the Southern Alps, where 15,000 acres of high-country sheep station meet uncompromising contemporary luxury.',  
    intel: {  
      positioning: 'Alpine Station Luxury',  
      category: 'Wild Frontiers',  
      memberBenefits: ['Heli-fly fishing on remote rivers', 'Sheep station tour with head shepherd', 'Stargazing from the observatory deck']  
    }  
  },  
  {  
    id: 'habitas-alula',  
    name: 'Habitas AlUla',  
    location: 'AlUla, Saudi Arabia',  
    image: 'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Habitas%20AlUla/Habitas_Al-Ula_2021_01_000005-2.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Habitas%20AlUla/Habitas_Al-Ula_2021_01_000005-2.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Habitas%20AlUla/Habitas_Al-Ula_2021_01_000014-1.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Habitas%20AlUla/Habitas_Al-Ula_2021_01_000201.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Habitas%20AlUla/Habitas_Al-Ula_2021_01_000225-1.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Habitas%20AlUla/Habitas_Al-Ula_2021_01_000237.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Habitas%20AlUla/Habitas_Alula_Low-Res_0210.jpg'  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description: 'A sustainable desert sanctuary woven into the ancient sandstone canyons of AlUla, where minimalist villas sit beneath a canopy of stars in one of the world\'s most extraordinary landscapes.',  
    intel: {  
      positioning: 'Sustainable Desert Sanctuary',  
      category: 'Wild Frontiers',  
      memberBenefits: ['Private guided tour of Hegra (UNESCO)', 'Sunset camel trek through the canyon', 'Sound healing ceremony in the desert']  
    }  
  },  
  {  
    id: 'here-baa-atoll-maldives',  
    name: 'Here Baa Atoll',  
    location: 'Baa Atoll, Maldives',  
    image: 'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Here%20Baa%20Atoll_Maldives/HBA1.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Here%20Baa%20Atoll_Maldives/HBA1.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Here%20Baa%20Atoll_Maldives/HBA2.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Here%20Baa%20Atoll_Maldives/HBA3.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Here%20Baa%20Atoll_Maldives/HBA4.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Here%20Baa%20Atoll_Maldives/HBA5.jpg'  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description: 'An exclusive-use Maldivian island resort in the UNESCO-protected Baa Atoll, where ten overwater and beach residences offer absolute privacy on a pristine coral island.',  
    intel: {  
      positioning: 'UNESCO Private Island',  
      category: 'Wild Frontiers',  
      memberBenefits: ['Private butler and chef', 'Manta ray snorkel safari', 'Underwater bioluminescence night swim']  
    }  
  },  
  {  
    id: 'kilchoan-estate-scotland',  
    name: 'Kilchoan Estate',  
    location: 'Argyll, Scotland',  
    image: 'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan-131-1920x1080.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan%204.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan%205.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan-117-1920x1080.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan-131-1920x1080.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan-29-1920x1080.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan-29-775x520.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan-39-1920x1080.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan-46-1920x1080.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan-77-1920x1080.jpeg'  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description: 'A breathtaking private estate on the remote Ardnamurchan Peninsula, where a historic lodge sits among rugged coastline, ancient woodlands, and some of Scotland\'s most dramatic sea views.',  
    intel: {  
      positioning: 'Highland Private Estate',  
      category: 'Wild Frontiers',  
      memberBenefits: ['Private ghillie-led stalking', 'Whisky tasting in the estate cellar', 'Coastal foraging expedition']  
    }  
  },  
  {  
    id: 'sentouchi-retreat-japan',  
    name: 'Sentouchi Retreat',  
    location: 'Setouchi, Japan',  
    image: 'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sentouchi%20Retreat_Japan/Sentouchi%203.avif',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sentouchi%20Retreat_Japan/Sentouchi%201.avif',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sentouchi%20Retreat_Japan/Sentouchi%202.avif',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sentouchi%20Retreat_Japan/Sentouchi%203.avif',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sentouchi%20Retreat_Japan/Sentouchi%2010.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sentouchi%20Retreat_Japan/Sentouchi%2011.avif'  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description: 'A minimalist wellness retreat on a remote island in Japan\'s Seto Inland Sea, where art, architecture, and nature converge in perfect harmony.',  
    intel: {  
      positioning: 'Minimalist Island Wellness',  
      category: 'Wild Frontiers',  
      memberBenefits: ['Private onsen overlooking the Inland Sea', 'Zen meditation with resident monk', 'Art island hopping curator tour']  
    }  
  },  
  {  
    id: 'four-seasons-madrid',  
    name: 'Four Seasons Madrid',  
    location: 'Madrid, Spain',  
    image: 'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Four%20Seasons_Madrid/FS-Madrid-1.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Four%20Seasons_Madrid/FS-Madrid-1.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Four%20Seasons_Madrid/FS-Madrid-2.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Four%20Seasons_Madrid/FS-Madrid-3.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Four%20Seasons_Madrid/FS-Madrid-5.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Four%20Seasons_Madrid/FS-Madrid-6.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Four%20Seasons_Madrid/FS-Madrid-7.jpg'  
    ],  
    collection: 'Urban Sovereigns',  
    sanctuaryId: 'urban-sovereigns',  
    description: 'A soaring seven-building complex in the heart of the capital, seamlessly connecting the city\'s Golden Triangle of Art with a rooftop pool, the only Michelin-starred Dani Brasserie, and unparalleled views of the Sierra de Guadarrama.',  
    intel: {  
      positioning: 'City Within a City',  
      category: 'Urban Sovereigns',  
      memberBenefits: ['Private art curator tour of Prado', 'Rooftop pool cabana reservation', 'Dani Brasserie chef\'s table access']  
    }  
  },  
  {  
    id: 'one-only-aesthesis',  
    name: 'One&Only Aesthesis',  
    location: 'Athens Riviera, Greece',  
    image: 'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/One%26Only%20Aesthesis_Greece/OOAA.webp',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/One%26Only%20Aesthesis_Greece/OOAA.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/One%26Only%20Aesthesis_Greece/OOAA-2.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/One%26Only%20Aesthesis_Greece/OOAA-3.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/One%26Only%20Aesthesis_Greece/OOAA_RivieraBungalow_Suite_SeaFront_212_Bedroom_5955_FINAL%20(1).webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/One%26Only%20Aesthesis_Greece/OOAA_Two-Bedroom_Topos%20Suites_Seafront.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/One%26Only%20Aesthesis_Greece/One%26Only_Aesthesis_P2_OraRestaurant_View_4861_FINAL%20(4).webp'  
    ],  
    collection: 'Urban Sovereigns',  
    sanctuaryId: 'urban-sovereigns',  
    description: 'One&Only\'s first Greek escape, set on a pristine stretch of the Athens Riviera with private beach access, minimalist architecture inspired by the Cyclades, and a Chenot Spa that redefines coastal wellness.',  
    intel: {  
      positioning: 'Athens Riviera Icon',  
      category: 'Urban Sovereigns',  
      memberBenefits: ['Chenot Spa wellness consultation', 'Private yacht charter to Hydra', 'Acropolis after-hours guided tour']  
    }  
  },  
  {  
    id: 'chable-yucatan',  
    name: 'Chablé Yucatán',  
    location: 'Yucatán, Mexico',  
    image: 'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/Chable-Yucatan-hero-2930x2198-c-center.webp',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/Chable-Yucatan-hero-2930x2198-c-center.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/chable-yucatan-bathroom-1280x0-c-default.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/chable-yucatan-casita-1024x1400-c-default.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/chable-yucatan-casita-2-1280x0-c-default.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/chable-yucatan-exterior-2-1024x1400-c-default.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/chable-yucatan-ixiim-2-1024x1400-c-default.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/chable-yucatan-kiol-2432x0-c-default.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/chable-yucatan-main-house-1280x0-c-default.webp'  
    ],  
    collection: 'Heritage & Estate',  
    sanctuaryId: 'heritage-estate',  
    description: 'A restored 17th-century hacienda in the heart of the Yucatán jungle, where centuries-old Maya craftsmanship meets contemporary Mexican design — each villa has its own private plunge pool and lush tropical garden.',  
    intel: {  
      positioning: '17th-Century Hacienda Reborn',  
      category: 'Heritage & Estate',  
      memberBenefits: ['Maya temazcal ceremony', 'Private cenote plunge', 'Hacienda-to-table cooking class']  
    }  
  },  
  {  
    id: 'la-valise-mazunte',  
    name: 'La Valise Mazunte',  
    location: 'Oaxaca, Mexico',  
    image: 'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/La%20Valise%20Mazunte_Oaxaca/LaValiseMazunte%201.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/La%20Valise%20Mazunte_Oaxaca/LaValiseMazunte%201.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/La%20Valise%20Mazunte_Oaxaca/LaValiseMazunte%202.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/La%20Valise%20Mazunte_Oaxaca/LaValiseMazunte3.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/La%20Valise%20Mazunte_Oaxaca/LaValiseMazunte%204.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/La%20Valise%20Mazunte_Oaxaca/LaValiseMazunte5.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/La%20Valise%20Mazunte_Oaxaca/LaValiseMazunte6.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/La%20Valise%20Mazunte_Oaxaca/LaValiseMazunte7.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/La%20Valise%20Mazunte_Oaxaca/LaValiseMazunte8.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/La%20Valise%20Mazunte_Oaxaca/LaValiseMazunte9.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/La%20Valise%20Mazunte_Oaxaca/LaValiseMazunte10.jpg'  
    ],  
    collection: 'Heritage & Estate',  
    sanctuaryId: 'heritage-estate',  
    description: 'A bohemian-chic boutique retreat perched on the cliffs of Mazunte, where each room has a bed that rolls onto the private terrace — literally sleeping under the stars above the Pacific.',  
    intel: {  
      positioning: 'Clifftop Bohemian Luxury',  
      category: 'Heritage & Estate',  
      memberBenefits: ['Rolling bed stargazing experience', 'Private surf lesson at Punta Cometa', 'Mezcal tasting with local producer']  
    }  
  },  
  {  
    id: 'passalacqua-lake-como',  
    name: 'Passalacqua',  
    location: 'Lake Como, Italy',  
    image: 'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Passalacqua_Lake%20Como_Italy/01-grand-room-al-lago-with-lake-view-ricky-monti.webp',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Passalacqua_Lake%20Como_Italy/01-grand-room-al-lago-with-lake-view-ricky-monti.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Passalacqua_Lake%20Como_Italy/01-room-in-the-villa-with-lake-view-ricky-monti.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Passalacqua_Lake%20Como_Italy/03-grand-room-al-lago-with-lake-view-detail-ricky-monti.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Passalacqua_Lake%20Como_Italy/04-room-in-the-palazz-bedroom-enrico-costantini.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Passalacqua_Lake%20Como_Italy/05-grand-room-in-the-palazz-bedroom-stefan-giftthaler.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Passalacqua_Lake%20Como_Italy/07-grand-room-al-lago-with-lake-view-private-garden-ricky-monti.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Passalacqua_Lake%20Como_Italy/moltrasio-and-passalacqua-by-night.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Passalacqua_Lake%20Como_Italy/passalacqua-room-suites-lake-como-bathroom-109.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Passalacqua_Lake%20Como_Italy/passalacqua-rooms-suites-lake-como_157.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Passalacqua_Lake%20Como_Italy/passalacqua-rooms-suites-lake-como_170.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Passalacqua_Lake%20Como_Italy/ruben23_suiteagnese_01_crop.webp'  
    ],  
    collection: 'Heritage & Estate',  
    sanctuaryId: 'heritage-estate',  
    description: 'An 18th-century estate on the shores of Lake Como, once visited by Napoleon, Bellini, and Churchill — 24 suites across three restored buildings on seven acres of terraced Italian gardens.',  
    intel: {  
      positioning: '18th-Century Lake Como Estate',  
      category: 'Heritage & Estate',  
      memberBenefits: ['Private boat to Bellagio and Varenna', 'Chef\'s garden-to-table dinner', 'Opera night in the Grand Salon']  
    }  
  }  
]

// Also export as `properties` for backward compatibility  
export const properties = PROPERTY_DATA
