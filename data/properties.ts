export interface Property {  
  id: string;  
  name: string;  
  location: string;  
  image: string;  
  gallery: string[];  
  collection: string;  
  sanctuaryId: string;  
  description: string;  
  intel: {  
    positioning: string;  
    category: string;  
    memberBenefits: string[];  
  };  
}

export const PROPERTY_DATA: Property[] = [  
  // --- Urban Sovereigns ---  
  {  
    id: 'aman-new-york',  
    name: 'Aman New York',  
    location: 'Manhattan, USA',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20New%20York/Aman-New-York--USA---Exterior--F-B--Garden-Terrace-sRGB.webp',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20New%20York/Aman-New-York--USA---Exterior--F-B--Garden-Terrace-sRGB.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20New%20York/Aman-New-York--USA---Accommodation--5th-Avn-Junior-Suite--Bathroom.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20New%20York/Aman-New-York--USA---Accommodation--Corner-Suite--Bedroom.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20New%20York/Aman-New-York--USA---Accommodation--Corner-Suite--Living-Room--evening.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20New%20York/Aman-New-York--USA---Accommodation--Grand-Suite-copy.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20New%20York/Aman-New-York--USA---Accommodation--Three-Bedroom-Home--Full-Floor--Penthouse-PH24.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20New%20York/Aman-New-York--USA---Accommodation--Three-Bedroom-Home-with-Pool_2.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20New%20York/Aman-New-York--USA---F-B--Arva--Garden-Terrace-dining-2.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20New%20York/Aman-New-York--USA---Garden-Terrace--Arva.jpeg',  
    ],  
    collection: 'Urban Sovereigns',  
    sanctuaryId: 'urban-sovereigns',  
    description:  
      'A sanctuary of urban zen in the heart of Manhattan, housed in the historic Crown Building.',  
    intel: {  
      positioning: 'Urban Zen Sanctuary',  
      category: 'Urban Sovereigns',  
      memberBenefits: [  
        'Private access to Jazz Club',  
        'Aman Spa ritual',  
        'Penthouse dining reservation',  
      ],  
    },  
  },  
  {  
    id: 'aman-tokyo',  
    name: 'Aman Tokyo',  
    location: 'Tokyo, Japan',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20Tokyo/Aman_Tokyo_Suite.webp',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20Tokyo/Aman_Tokyo_Suite.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20Tokyo/Aman%20Tokyo%20-%20Arva%20pg.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20Tokyo/Deluxe%20Room%2C%20Aman%20Tokyo%2C%20Japan_5.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20Tokyo/aman_tokyo_aman_suite_bathroom_and_lounge.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20Tokyo/aman_tokyo_aman_suite_bedroom.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20Tokyo/aman_tokyo_aman_suite_lounge.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20Tokyo/aman_tokyo_deluxe_suite_bedroom.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20Tokyo/aman_tokyo_deluxe_suite_view_from_bedroom_view.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Aman%20Tokyo/aman_tokyo_panorama_suite_dining.webp',  
    ],  
    collection: 'Urban Sovereigns',  
    sanctuaryId: 'urban-sovereigns',  
    description:  
      'A modern sanctuary perched atop the Otemachi Tower, blending traditional Japanese minimalism with contemporary luxury.',  
    intel: {  
      positioning: 'Sky-High Minimalism',  
      category: 'Urban Sovereigns',  
      memberBenefits: [  
        'Private tea ceremony',  
        'Exclusive access to The Lounge',  
        'Guided cultural tour of Ginza',  
      ],  
    },  
  },  
  {  
    id: 'bvlgari-tokyo',  
    name: 'BVLGARI Tokyo',  
    location: 'Tokyo, Japan',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/BVLGARI_Tokyo/BH%20Tokyo.jpeg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/BVLGARI_Tokyo/BH%20Tokyo.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/BVLGARI_Tokyo/BH%20Tokyo%204.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/BVLGARI_Tokyo/BH%20Tokyo%205.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/BVLGARI_Tokyo/BH%20Tokyo%206.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/BVLGARI_Tokyo/BH%20Tokyo3.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/BVLGARI_Tokyo/Tokyo%206.jpeg',  
    ],  
    collection: 'Urban Sovereigns',  
    sanctuaryId: 'urban-sovereigns',  
    description:  
      'Italian glamour meets Japanese precision in the heart of Tokyo’s financial district.',  
    intel: {  
      positioning: 'Italian Glamour in Tokyo',  
      category: 'Urban Sovereigns',  
      memberBenefits: [  
        'Private BVLGARI boutique shopping experience',  
        'Rooftop cocktail hour',  
        'Chef-curated omakase dining',  
      ],  
    },  
  },  
  {  
    id: 'the-maybourne-riviera',  
    name: 'The Maybourne Riviera',  
    location: 'French Riviera',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Maybourne%20Riviera_French%20Riviera/MBR-PANORAMIC-SEA-VIEW-STUDIO-01-jpg.avif',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Maybourne%20Riviera_French%20Riviera/MBR-PANORAMIC-SEA-VIEW-STUDIO-01-jpg.avif',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Maybourne%20Riviera_French%20Riviera/MBR-PANORAMIC-SEA-VIEW-STUDIO-02-jpg.avif',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Maybourne%20Riviera_French%20Riviera/MBR-PANORAMIC-SUITE-01-jpg.avif',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Maybourne%20Riviera_French%20Riviera/MBR-PANORAMIC-SUITE-02-jpg.avif',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Maybourne%20Riviera_French%20Riviera/MBR-RIVIERA-RESTAURANT-11-jpg.avif',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Maybourne%20Riviera_French%20Riviera/MBR-SEA-VIEW-DUPLEX-SUITE-01-jpg.avif',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Maybourne%20Riviera_French%20Riviera/MBR-SEA-VIEW-JUNIOR-SUITE-01-jpg.avif',  
    ],  
    collection: 'Urban Sovereigns',  
    sanctuaryId: 'urban-sovereigns',  
    description:  
      'Perched on the rocky peninsula of Roquebrune-Cap-Martin, offering sweeping views of the Mediterranean.',  
    intel: {  
      positioning: 'Clifftop Riviera Chic',  
      category: 'Urban Sovereigns',  
      memberBenefits: [  
        'Private beach club access',  
        'Yacht transfer to Monaco',  
        'Signature Maybourne spa treatment',  
      ],  
    },  
  },  
  {  
    id: '7132-hotel',  
    name: '7132 Hotel',  
    location: 'Vals, Switzerland',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/7132%20Hotel_Vals_Switzerland/7132-1.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/7132%20Hotel_Vals_Switzerland/7132-1.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/7132%20Hotel_Vals_Switzerland/7132-2.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/7132%20Hotel_Vals_Switzerland/7132-3.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/7132%20Hotel_Vals_Switzerland/7132-4.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/7132%20Hotel_Vals_Switzerland/7132-5.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/7132%20Hotel_Vals_Switzerland/7132-6.jpg',  
    ],  
    collection: 'Urban Sovereigns',  
    sanctuaryId: 'urban-sovereigns',  
    description:  
      'An architectural masterpiece in the Swiss Alps, famous for its thermal baths and uncompromising design.',  
    intel: {  
      positioning: 'Alpine Thermal Sanctuary',  
      category: 'Urban Sovereigns',  
      memberBenefits: [  
        'Private night access to thermal baths',  
        'Heli-skiing guide',  
        'Gourmet mountain dining',  
      ],  
    },  
  },  
  {  
    id: 'w-hotel-barcelona',  
    name: 'W Hotel Barcelona',  
    location: 'Barcelona, Spain',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/W%20Hotel%20Barcelona/wh-bcnwh-w-barcelona-22624_Wide-Hor.jpeg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/W%20Hotel%20Barcelona/wh-bcnwh-w-barcelona-22624_Wide-Hor.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/W%20Hotel%20Barcelona/wh-bcnwh-cool-corner-suite---livin-27951_Wide-Hor.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/W%20Hotel%20Barcelona/wh-bcnwh-cozy-room---bed-26162_Wide-Ver.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/W%20Hotel%20Barcelona/wh-bcnwh-onada-terrace-suite---ter-30970_Wide-Hor.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/W%20Hotel%20Barcelona/wh-bcnwh-studio-suite-02--11473-40867_Wide-Hor.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/W%20Hotel%20Barcelona/wh-bcnwh-superior-room---full-view-16595_Wide-Hor.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/W%20Hotel%20Barcelona/wh-bcnwh-twin-guest-room-01--26152-61954_Wide-Hor.jpeg',  
    ],  
    collection: 'Urban Sovereigns',  
    sanctuaryId: 'urban-sovereigns',  
    description:  
      'Iconic sail-shaped luxury on the Barceloneta beach, defining Mediterranean lifestyle.',  
    intel: {  
      positioning: 'Mediterranean Sail Icon',  
      category: 'Urban Sovereigns',  
      memberBenefits: [  
        'Rooftop Eclipse club VIP table',  
        'Private beachfront cabana',  
        'City sunset yacht sail',  
      ],  
    },  
  },  
  {  
    id: 'four-seasons-madrid',  
    name: 'Four Seasons Madrid',  
    location: 'Madrid, Spain',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Four%20Seasons_Madrid/FS-Madrid-1.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Four%20Seasons_Madrid/FS-Madrid-1.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Four%20Seasons_Madrid/FS-Madrid-2.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Four%20Seasons_Madrid/FS-Madrid-3.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Four%20Seasons_Madrid/FS-Madrid-5.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Four%20Seasons_Madrid/FS-Madrid-6.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Four%20Seasons_Madrid/FS-Madrid-7.jpg',  
    ],  
    collection: 'Urban Sovereigns',  
    sanctuaryId: 'urban-sovereigns',  
    description:  
      'A soaring seven-building complex in the heart of the capital, seamlessly connecting the city’s Golden Triangle of Art.',  
    intel: {  
      positioning: 'City Within a City',  
      category: 'Urban Sovereigns',  
      memberBenefits: [  
        'Private art curator tour of Prado',  
        'Rooftop pool cabana reservation',  
        'Dani Brasserie chef’s table access',  
      ],  
    },  
  },  
  {  
    id: 'one-only-aesthesis',  
    name: 'One&Only Aesthesis',  
    location: 'Athens Riviera, Greece',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/One%26Only%20Aesthesis_Greece/OOAA.webp',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/One%26Only%20Aesthesis_Greece/OOAA.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/One%26Only%20Aesthesis_Greece/OOAA-2.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/One%26Only%20Aesthesis_Greece/OOAA-3.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/One%26Only%20Aesthesis_Greece/OOAA_RivieraBungalow_Suite_SeaFront_212_Bedroom_5955_FINAL%20%281%29.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/One%26Only%20Aesthesis_Greece/OOAA_Two-Bedroom_Topos%20Suites_Seafront.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/One%26Only%20Aesthesis_Greece/One%26Only_Aesthesis_P2_OraRestaurant_View_4861_FINAL%20%284%29.webp',  
    ],  
    collection: 'Urban Sovereigns',  
    sanctuaryId: 'urban-sovereigns',  
    description:  
      'One&Only’s first Greek escape, set on a pristine stretch of the Athens Riviera with private beach access.',  
    intel: {  
      positioning: 'Athens Riviera Icon',  
      category: 'Urban Sovereigns',  
      memberBenefits: [  
        'Chenot Spa wellness consultation',  
        'Private yacht charter to Hydra',  
        'Acropolis after-hours guided tour',  
      ],  
    },  
  },  
  {  
    id: 'passalacqua-lake-como',  
    name: 'Passalacqua',  
    location: 'Lake Como, Italy',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Passalacqua_Lake%20Como_Italy/01-grand-room-al-lago-with-lake-view-ricky-monti.webp',  
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
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Passalacqua_Lake%20Como_Italy/ruben23_suiteagnese_01_crop.webp',  
    ],  
    collection: 'Heritage & Estate',  
    sanctuaryId: 'heritage-estate',  
    description:  
      'An 18th-century estate on the shores of Lake Como, once visited by Napoleon, Bellini, and Churchill.',  
    intel: {  
      positioning: '18th-Century Lake Como Estate',  
      category: 'Heritage & Estate',  
      memberBenefits: [  
        'Private boat to Bellagio and Varenna',  
        'Chef’s garden-to-table dinner',  
        'Opera night in the Grand Salon',  
      ],  
    },  
  },

  // --- Island & Coast ---  
  {  
    id: 'amanpulo',  
    name: 'Amanpulo',  
    location: 'Palawan, Philippines',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanpulo_Phillipines/Amanpulo%20Beach%20Pool%20Casita.webp',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanpulo_Phillipines/Amanpulo%20Beach%20Pool%20Casita.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanpulo_Phillipines/Amanpulo%2C%20Philippines%20-%20Accomodation%2C%20Bathroom.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanpulo_Phillipines/Amanpulo--Philippines---Spa---Wellness--Massage-Room--3.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanpulo_Phillipines/Amanpulo-Gallery-23.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanpulo_Phillipines/Amanpulo-Gallery-24.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanpulo_Phillipines/Amanpulo-Gallery-56.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanpulo_Phillipines/Beach%20Casita%2C%20Amanpulo%2C%20Philippines_1.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanpulo_Phillipines/Beach%20Casita%2C%20Amanpulo%2C%20Philippines_2.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanpulo_Phillipines/Beach%20Casita%2C%20Amanpulo%2C%20Philippines_3.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanpulo_Phillipines/Beach%20Casita%2C%20Amanpulo%2C%20Philippines_8.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanpulo_Phillipines/Deluxe%20Hillside%20Casita%2C%20Amanpulo%2C%20Philippines_2.webp',  
    ],  
    collection: 'Island & Coast',  
    sanctuaryId: 'island-coast',  
    description:  
      'A secluded private island resort, ringed by white sand beaches and turquoise coral reefs.',  
    intel: {  
      positioning: 'Private Island Paradise',  
      category: 'Island & Coast',  
      memberBenefits: [  
        'Private sunset cruise',  
        'Guided turtle sanctuary tour',  
        'Beachfront dining under the stars',  
      ],  
    },  
  },  
  {  
    id: 'amanyara',  
    name: 'Amanyara',  
    location: 'Turks & Caicos',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanyara_Turks_Caicos/Aman_Amanyara_Gallery_22.webp',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanyara_Turks_Caicos/Aman_Amanyara_Gallery_22.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanyara_Turks_Caicos/Amanyara_Gallery_18.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanyara_Turks_Caicos/Amanyara_Gallery_20.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanyara_Turks_Caicos/amanyara-turks-caicos-accommodation-tranquility-pavilion.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanyara_Turks_Caicos/amanyara_turks_caicos_-_accommodation_villa_33.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanyara_Turks_Caicos/amanyara_turks_caicos_-_accommodation_villa_33_bedroom.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanyara_Turks_Caicos/amanyara_turks_caicos_-_beach_club_restaurant.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanyara_Turks_Caicos/amanyara_turks_caicos_-_pool_pavilion_3_0.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanyara_Turks_Caicos/amanyara_turks_caicos_-_six-bedroom_amanyara_villa_2_0.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanyara_Turks_Caicos/amanyara_turks_caicos_-_six-bedroom_amanyara_villa_3_0.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanyara_Turks_Caicos/amanyara_turks_caicos_-_six-bedroom_amanyara_villa_4_0.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanyara_Turks_Caicos/amanyara_turks_caicos_-_six-bedroom_amanyara_villa_6_0.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanyara_Turks_Caicos/amanyara_turks_caicos_-_three-bedroom_tranquility_villa_6_1.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amanyara_Turks_Caicos/six-bedroom_amanyara_villa_-_bedroom_1_1.webp',  
    ],  
    collection: 'Island & Coast',  
    sanctuaryId: 'island-coast',  
    description:  
      'A serene coastal sanctuary on the edge of a marine national park, where sleek pavilions blend into turquoise waters.',  
    intel: {  
      positioning: 'Coastal Serenity',  
      category: 'Island & Coast',  
      memberBenefits: [  
        'Private guided snorkeling in the national park',  
        'In-villa chef experience',  
        'Beachside wellness session',  
      ],  
    },  
  },  
  {  
    id: 'pongwe-island',  
    name: 'Pongwe Island Lodge',  
    location: 'Zanzibar, Tanzania',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/%20Pongwe%20Island_Zanzibar/the-island-pongwe-lodge.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/%20Pongwe%20Island_Zanzibar/the-island-pongwe-lodge.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/%20Pongwe%20Island_Zanzibar/the-island-pongwe-lodge%20%281%29.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/%20Pongwe%20Island_Zanzibar/the-island-pongwe-lodge%20%282%29.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/%20Pongwe%20Island_Zanzibar/the-island-pongwe-lodge%20%283%29.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/%20Pongwe%20Island_Zanzibar/the-island-pongwe-lodge%20%284%29.jpg',  
    ],  
    collection: 'Island & Coast',  
    sanctuaryId: 'island-coast',  
    description:  
      'A boutique eco-lodge on its own private island off the coast of Zanzibar.',  
    intel: {  
      positioning: 'Barefoot Island Luxury',  
      category: 'Island & Coast',  
      memberBenefits: [  
        'Private island castaway lunch',  
        'Dhow sailing trip',  
        'Guided coastal reef walk',  
      ],  
    },  
  },  
  {  
    id: 'the-brando',  
    name: 'The Brando',  
    location: 'Tetiaroa, French Polynesia',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Brando/the-brando.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Brando/the-brando.jpg',  
    ],  
    collection: 'Island & Coast',  
    sanctuaryId: 'island-coast',  
    description:  
      'Forbes 5-Star private atoll sanctuary dedicated to pristine luxury and sustainability.',  
    intel: {  
      positioning: 'Pristine Atoll Sanctuary',  
      category: 'Island & Coast',  
      memberBenefits: [  
        'Private plunge pool villas',  
        'Ecostation research tours',  
        'Polynesian wellness rituals',  
      ],  
    },  
  },  
  {  
    id: 'islas-secas',  
    name: 'Islas Secas',  
    location: 'Panama',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Islas%20Secas/islas-secas.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Islas%20Secas/islas-secas.jpg',  
    ],  
    collection: 'Island & Coast',  
    sanctuaryId: 'island-coast',  
    description:  
      'A 14-island private archipelago sanctuary ranked among Central America’s leading retreats.',  
    intel: {  
      positioning: 'Private Archipelago Sanctuary',  
      category: 'Island & Coast',  
      memberBenefits: [  
        'Exclusive 14-island access',  
        'Whale-watching expeditions',  
        'Solar-powered luxury casitas',  
      ],  
    },  
  },  
  {  
    id: 'southern-ocean-lodge',  
    name: 'Southern Ocean Lodge',  
    location: 'Kangaroo Island, Australia',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Southern%20Ocean%20Lodge/southern-ocean-lodge.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Southern%20Ocean%20Lodge/southern-ocean-lodge.jpg',  
    ],  
    collection: 'Island & Coast',  
    sanctuaryId: 'island-coast',  
    description:  
      'Reborn cliffside luxury sanctuary overlooking the dramatic southern ocean wilderness.',  
    intel: {  
      positioning: 'Cliffside Ocean Sanctuary',  
      category: 'Island & Coast',  
      memberBenefits: [  
        'Guided Kangaroo Island excursions',  
        'Clifftop spa sanctuary',  
        'Cellar master wine tastings',  
      ],  
    },  
  },  
  {  
    id: 'pier-sixty-six-resort',  
    name: 'Pier Sixty-Six Resort',  
    location: 'Fort Lauderdale, Florida',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Pier%20Sixty-Six%20Resort/harbour-villa-suite-corner.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Pier%20Sixty-Six%20Resort/harbour-villa-suite-corner.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Pier%20Sixty-Six%20Resort/one-bedroom-two-queen.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Pier%20Sixty-Six%20Resort/presidential-suite-living.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Pier%20Sixty-Six%20Resort/resort-residence-villa%20(1).jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Pier%20Sixty-Six%20Resort/resort-residence-villa.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Pier%20Sixty-Six%20Resort/resort-residences-302.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Pier%20Sixty-Six%20Resort/sotogrande-bar-patio.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Pier%20Sixty-Six%20Resort/standard-guest-room.jpg',  
    ],  
    collection: 'Island & Coast',  
    sanctuaryId: 'island-coast',  
    description:  
      'A waterfront Fort Lauderdale resort centered on marina culture, private residences, and South Florida access.',  
    intel: {  
      positioning: 'South Florida Marina Sanctuary',  
      category: 'Island & Coast',  
      memberBenefits: [  
        'Private yacht charter coordination',  
        'Waterfront dining access',  
        'Dedicated arrival and departure planning',  
      ],  
    },  
  },  
  {  
    id: 'the-lodge-at-kukuiula',  
    name: 'The Lodge at Kukuiula',  
    location: 'Kauai, Hawaii',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Lodge%20at%20Kukuiula/club-cottage-backyard.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Lodge%20at%20Kukuiula/club-cottage-backyard.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Lodge%20at%20Kukuiula/club-villa-master-suite.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Lodge%20at%20Kukuiula/club-villa-patio.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Lodge%20at%20Kukuiula/club-villa-with-private.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Lodge%20at%20Kukuiula/golf-club-house.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Lodge%20at%20Kukuiula/hi-ilani-spa.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Lodge%20at%20Kukuiula/spa-inspired-bathrooms.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Lodge%20at%20Kukuiula/the-lodge-at-kukui-ula%20(1).jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Lodge%20at%20Kukuiula/the-lodge-at-kukui-ula.jpg',  
    ],  
    collection: 'Island & Coast',  
    sanctuaryId: 'island-coast',  
    description:  
      'A private-residence retreat on Kauai’s south shore, combining island privacy, golf, wellness, and ocean access.',  
    intel: {  
      positioning: 'Private Kauai Residence Retreat',  
      category: 'Island & Coast',  
      memberBenefits: [  
        'Private villa and cottage access',  
        'Golf and ocean activity coordination',  
        'Hi’ilani spa programming',  
      ],  
    },  
  },

  // --- Wild Frontiers ---  
  {  
    id: 'singita-kwitonda-lodge',  
    name: 'Singita Kwitonda Lodge',  
    location: 'Volcanoes National Park, Rwanda',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Singrita%20Kwitonda%20Lodge/Kwitonda_Main_Lounge_Area_with_Bar_Deli__white_sofa_and_large_windows_Adriaan_Louw.webp',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Singrita%20Kwitonda%20Lodge/Kwitonda_Main_Lounge_Area_with_Bar_Deli__white_sofa_and_large_windows_Adriaan_Louw.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Singrita%20Kwitonda%20Lodge/Kwitonda_slider_1.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Singrita%20Kwitonda%20Lodge/Kwitonda_slider_2.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Singrita%20Kwitonda%20Lodge/SVNP_LODGE_Kwitonda_Lodge_Conservation_Room_Ross_Couper_2.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Singrita%20Kwitonda%20Lodge/SVNP_ROOM_Kwitonda_Lodge_Bedroom_Ross_Couper_1.webp',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'An eco-sensitive lodge nestled on the edge of Volcanoes National Park, offering intimate gorilla trekking experiences.',  
    intel: {  
      positioning: 'Gorilla Trekking Haven',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Private guided gorilla trekking',  
        'On-site conservation talk',  
        'Locally inspired farm-to-table dining',  
      ],  
    },  
  },  
  {  
    id: 'capella-ubud',  
    name: 'Capella Ubud',  
    location: 'Bali, Indonesia',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Capella%20Ubud/ubud-accommodation-tent-river-exterior.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Capella%20Ubud/ubud-accommodation-tent-river-exterior.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Capella%20Ubud/Capella_Ubud_Accommodation_Rainforest_Tent_Daybed%20%281%29.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Capella%20Ubud/Capella_Ubud_Accommodation_Rainforest_Tent_Daybed.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Capella%20Ubud/Capella_Ubud_One_Bedroom_Keliki_Valley_Tent1.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Capella%20Ubud/Capella_Ubud_TerraceTent-SaltwaterPool.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Capella%20Ubud/ubud-accommodation-River_Tent-Pool-01%20%281%29.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Capella%20Ubud/ubud-accommodation-River_Tent-Pool-01.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Capella%20Ubud/ubud-accommodation-rainforest-tent-saltwaterpool.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'An intimate tented camp hidden within the lush rainforest of Bali.',  
    intel: {  
      positioning: 'Rainforest Tented Camp',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Private Balinese blessing ritual',  
        'Campfire storytelling with resident naturalist',  
        'Guided ridge trek at dawn',  
      ],  
    },  
  },  
  {  
    id: 'amangiri',  
    name: 'Amangiri',  
    location: 'Canyon Point, Utah, USA',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amangiri_Utah/amangiri-aerial-views.webp',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amangiri_Utah/amangiri-aerial-views.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amangiri_Utah/amangiri-views_0.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amangiri_Utah/amangiri_usa_-_accommodation-desert-pool-suite.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amangiri_Utah/amangiri_usa_-_accommodation_camp_sarika_one-bedroom_mesa_pavilion_living_area.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amangiri_Utah/amangiri_usa_-_accommodation_desert_suite_3.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amangiri_Utah/amangiri_usa_-_architecture_resort_pool_overview.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amangiri_Utah/amangiri_usa_-_camp-sarika-accommodation-pavilion_3.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amangiri_Utah/amangiri_usa_-_main_pavilion.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Amangiri_Utah/amangiri_utah_-_main_pool.webp',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'A remote desert sanctuary carved into the sandstone of the American West.',  
    intel: {  
      positioning: 'Desert Sandstone Sanctuary',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Private slot canyon tour',  
        'Stargazing dinner',  
        'Desert yoga session',  
      ],  
    },  
  },  
  {  
    id: 'six-senses-southern-dunes',  
    name: 'Six Senses Southern Dunes',  
    location: 'Saudi Arabia',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Six%20Senses%20Southern%20Dunes_Saudi%20Arabia/000001_2da2e560_z.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Six%20Senses%20Southern%20Dunes_Saudi%20Arabia/000001_2da2e560_z.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Six%20Senses%20Southern%20Dunes_Saudi%20Arabia/000001_55791ca2_z%281%29.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Six%20Senses%20Southern%20Dunes_Saudi%20Arabia/000001_55791ca2_z.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Six%20Senses%20Southern%20Dunes_Saudi%20Arabia/001_00589c01_z%281%29.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Six%20Senses%20Southern%20Dunes_Saudi%20Arabia/001_00589c01_z.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Six%20Senses%20Southern%20Dunes_Saudi%20Arabia/008_c9f75779_z.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Six%20Senses%20Southern%20Dunes_Saudi%20Arabia/009_aa3395e3_z.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Six%20Senses%20Southern%20Dunes_Saudi%20Arabia/011_330ea365_z%281%29.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Six%20Senses%20Southern%20Dunes_Saudi%20Arabia/011_ff098035_z.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'An oasis of calm among the shifting sands of the Red Sea Project.',  
    intel: {  
      positioning: 'Desert Oasis Sanctuary',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Guided desert trek',  
        'Local culture immersion',  
        'Six Senses spa treatment',  
      ],  
    },  
  },  
  {  
    id: 'habitas-alula',  
    name: 'Habitas AlUla',  
    location: 'AlUla, Saudi Arabia',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Habitas%20AlUla/Habitas_Al-Ula_2021_01_000005-2.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Habitas%20AlUla/Habitas_Al-Ula_2021_01_000005-2.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Habitas%20AlUla/Habitas_Al-Ula_2021_01_000014-1.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Habitas%20AlUla/Habitas_Al-Ula_2021_01_000201.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Habitas%20AlUla/Habitas_Al-Ula_2021_01_000225-1.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Habitas%20AlUla/Habitas_Al-Ula_2021_01_000237.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Habitas%20Alula_Low-Res_0210.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'A sustainable desert sanctuary woven into the ancient sandstone canyons of AlUla.',  
    intel: {  
      positioning: 'Sustainable Desert Sanctuary',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Private guided tour of Hegra',  
        'Sunset camel trek through the canyon',  
        'Sound healing ceremony in the desert',  
      ],  
    },  
  },  
  {  
    id: 'dunton-hot-springs',  
    name: 'Dunton Hot Springs',  
    location: 'Colorado, USA',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot_Springs/DHS%201.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot_Springs/DHS%201.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot_Springs/DHS%202.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot_Springs/DHS%203.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot_Springs/DHS%204.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot_Springs/DHS%205.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot_Springs/DHS%207.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot_Springs/DHS%208.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot_Springs/DHS%209.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Dunton_Hot_Springs/DHS%2010.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'A restored 19th-century mining town turned luxury wilderness retreat.',  
    intel: {  
      positioning: 'Ghost Town Reimagined',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Private soak in the historic Town Baths',  
        'Fly-fishing on the West Fork',  
        'Horseback riding',  
      ],  
    },  
  },  
  {  
    id: 'fawn-bluff-lodge-ontario',  
    name: 'Fawn Bluff Lodge',  
    location: 'Ontario, Canada',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Fawn%20Bluff%20Lodge_Ontario/Fawn_Bluff_0904_Briceportolano_2025.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Fawn%20Bluff%20Lodge_Ontario/Fawn_Bluff_0904_Briceportolano_2025.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Fawn%20Bluff%20Lodge_Ontario/Fawn_Bluff_1028_Briceportolano_2025.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Fawn%20Bluff%20Lodge_Ontario/Fawn_Bluff_1605_Briceportolano_2025.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Fawn%20Bluff%20Lodge_Ontario/Fawn_Bluff_3303_Briceportolano_2025.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Fawn%20Bluff%20Lodge_Ontario/Fawn_Bluff_9123_Briceportolano_2025.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'A secluded Canadian wilderness lodge, accessible only by floatplane.',  
    intel: {  
      positioning: 'Floatplane-Only Wilderness',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Private floatplane transfer',  
        'Indigenous-guided canoe expedition',  
        'Northern lights viewing',  
      ],  
    },  
  },  
  {  
    id: 'flockhill-lodge-canterbury',  
    name: 'Flockhill Lodge',  
    location: 'Canterbury, New Zealand',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Flockhill%20Lodge_Cantebury_NZ/Flockhill%202.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Flockhill%20Lodge_Cantebury_NZ/Flockhill%202.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Flockhill%20Lodge_Cantebury_NZ/Flockhill%203.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Flockhill%20Lodge_Cantebury_NZ/Flockhill%204.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Flockhill%20Lodge_Cantebury_NZ/Flockhill%205.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Flockhill%20Lodge_Cantebury_NZ/Flockhill%206.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Flockhill%20Lodge_Cantebury_NZ/Flockhill%208.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Flockhill%20Lodge_Cantebury_NZ/sugarloaf-exterior.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'A dramatic alpine lodge set against the backdrop of the Southern Alps.',  
    intel: {  
      positioning: 'Alpine Station Luxury',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Heli-fly fishing',  
        'Sheep station tour',  
        'Stargazing',  
      ],  
    },  
  },  
  {  
    id: 'tinajani-peru',  
    name: 'Tinajani',  
    location: 'Peru',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Tinajani_Peru/Tinajani%201.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Tinajani_Peru/Tinajani%201.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Tinajani_Peru/Tinjani%202.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Tinajani_Peru/Tinjani%203.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Tinajani_Peru/Tinjani%204.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Tinajani_Peru/Tinjani%205.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Tinajani_Peru/Tinjani%206.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'A remote wilderness retreat set in the high-altitude landscapes of the Andes.',  
    intel: {  
      positioning: 'Andean High-Altitude Retreat',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Private guided Andean trek',  
        'Local textile workshop',  
        'Sunset view over the canyon',  
      ],  
    },  
  },  
  {  
    id: 'sentouchi-retreat-japan',  
    name: 'Sentouchi Retreat',  
    location: 'Setouchi, Japan',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sentouchi%20Retreat_Japan/Sentouchi%203.avif',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sentouchi%20Retreat_Japan/Sentouchi%201.avif',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sentouchi%20Retreat_Japan/Sentouchi%202.avif',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sentouchi%20Retreat_Japan/Sentouchi%203.avif',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sentouchi%20Retreat_Japan/Sentouchi%204.avif',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sentouchi%20Retreat_Japan/Sentouchi%205.avif',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sentouchi%20Retreat_Japan/Sentouchi%206.avif',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sentouchi%20Retreat_Japan/Sentouchi%207.avif',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sentouchi%20Retreat_Japan/Sentouci%209.avif',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sentouchi%20Retreat_Japan/Sentouchi%2010.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sentouchi%20Retreat_Japan/Sentouchi%2011.avif',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'A minimalist wellness retreat on a remote island in Japan’s Seto Inland Sea.',  
    intel: {  
      positioning: 'Minimalist Island Wellness',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Private onsen',  
        'Zen meditation',  
        'Art island hopping',  
      ],  
    },  
  },  
  {  
    id: 'ayan-zalaat-mongolia',  
    name: 'Ayan Zalaat',  
    location: 'Mongolia',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Ayan%20Zalaat_Mongolia/Ayan%20Zalaat%201.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Ayan%20Zalaat_Mongolia/Ayan%20Zalaat%201.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Ayan%20Zalaat_Mongolia/Ayan%20Zalaat%202.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Ayan%20Zalaat_Mongolia/Ayan%20Zalaat%203.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Ayan%20Zalaat_Mongolia/Ayan%20Zalaat%204.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Ayan%20Zalaat_Mongolia/Ayan%20Zalaat%205.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Ayan%20Zalaat_Mongolia/Ayan%20Zalaat%206.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Ayan%20Zalaat_Mongolia/Ayan%20Zalaat%208.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Ayan%20Zalaat_Mongolia/Ayan%20Zalaat%209.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Ayan%20Zalaat_Mongolia/Ayan%20Zalaat%2010.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Ayan%20Zalaat_Mongolia/Ayan%20Zalaat%2011.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Ayan%20Zalaat_Mongolia/Ayan%20Zalaat%2012.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Ayan%20Zalaat_Mongolia/Ayan%20Zalaat%2013.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'A deeply immersive wilderness camp offering a rare connection with the nomadic spirit of the Mongolian steppe.',  
    intel: {  
      positioning: 'Nomadic Steppe Immersion',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Horseback trek across the steppe',  
        'Eagle hunter encounter',  
        'Private campfire dinner',  
      ],  
    },  
  },  
  {  
    id: 'here-baa-atoll-maldives',  
    name: 'Here Baa Atoll',  
    location: 'Baa Atoll, Maldives',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Here%20Baa%20Atoll_Maldives/HBA1.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Here%20Baa%20Atoll_Maldives/HBA1.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Here%20Baa%20Atoll_Maldives/HBA2.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Here%20Baa%20Atoll_Maldives/HBA3.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Here%20Baa%20Atoll_Maldives/HBA4.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Here%20Baa%20Atoll_Maldives/HBA5.jpg',  
    ],  
    collection: 'Island & Coast',  
    sanctuaryId: 'island-coast',  
    description:  
      'An exclusive-use Maldivian island resort in the UNESCO-protected Baa Atoll.',  
    intel: {  
      positioning: 'UNESCO Private Island',  
      category: 'Island & Coast',  
      memberBenefits: [  
        'Private butler and chef',  
        'Manta ray snorkel safari',  
        'Underwater bioluminescence night swim',  
      ],  
    },  
  },  
  {  
    id: 'kilchoan-estate-scotland',  
    name: 'Kilchoan Estate',  
    location: 'Argyll, Scotland',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan-131-1920x1080.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan%204.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan%205.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan-117-1920x1080.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan-131-1920x1080.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan-29-1920x1080.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan-29-775x520.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan-39-1920x1080.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan-46-1920x1080.jpeg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Kichoan%20Estate_Scotland/Kilchoan-77-1920x1080.jpeg',  
    ],  
    collection: 'Heritage & Estate',  
    sanctuaryId: 'heritage-estate',  
    description:  
      'A breathtaking private estate on the remote Ardnamurchan Peninsula.',  
    intel: {  
      positioning: 'Highland Private Estate',  
      category: 'Heritage & Estate',  
      memberBenefits: [  
        'Private ghillie-led stalking',  
        'Whisky tasting in the estate cellar',  
        'Coastal foraging expedition',  
      ],  
    },  
  },  
  {  
    id: 'trinchera-reserve',  
    name: 'Trinchera Reserve',  
    location: 'Colorado, USA',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Trinchera%20Reserve/C88A0342.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Trinchera%20Reserve/C88A0342.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Trinchera%20Reserve/C88A2219.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Trinchera%20Reserve/C88A9075-HDR.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Trinchera%20Reserve/JX6A3004.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'Private high alpine sanctuary spanning pristine Colorado wilderness.',  
    intel: {  
      positioning: 'High Alpine Wilderness',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Private wilderness access',  
        'Guided wildlife tracking',  
        'Custom alpine dining',  
      ],  
    },  
  },  
  {  
    id: 'brush-creek-luxury-ranch',  
    name: 'Brush Creek Luxury Ranch Collection',  
    location: 'Saratoga, Wyoming',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Brush%20Creek%20Luxury%20Ranch/2019_Shot_29_Blacksmith_Deck_Room1_56366_rt.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Brush%20Creek%20Luxury%20Ranch/2019_Shot_29_Blacksmith_Deck_Room1_56366_rt.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Brush%20Creek%20Luxury%20Ranch/2019_Shot_38_Blacksmith_Deck_56617_rt-2.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Brush%20Creek%20Luxury%20Ranch/BCR_Outfitters_LodgeBarView-2-e1680894143582.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Brush%20Creek%20Luxury%20Ranch/Peryam_Living_room_1_Canon.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Brush%20Creek%20Luxury%20Ranch/Spa-Treatment-Room_web.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'A 30,000-acre luxury ranch experience in the American West.',  
    intel: {  
      positioning: 'Private American Ranch',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'All-inclusive ranch activities',  
        'Private fly-fishing beats',  
        'Farm-to-table culinary experiences',  
      ],  
    },  
  },  
  {  
    id: 'alpine-falls-ranch',  
    name: 'Alpine Falls Ranch',  
    location: 'Montana, USA',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Alpine%20Falls%20Ranch/Villa_Bed_5de3e5eb22.webp',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Alpine%20Falls%20Ranch/Villa_Bed_5de3e5eb22.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Alpine%20Falls%20Ranch/Villa_Pink_ac88bc3eea.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Alpine%20Falls%20Ranch/large_stage_coach_sauna_fc9da55c7a.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Alpine%20Falls%20Ranch/medium_Alpine_Falls_Ranch_11_01_2024_1292_2304da90a9.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Alpine%20Falls%20Ranch/medium_Alpine_Falls_Ranch_11_01_2024_841_9f4b06c8e5.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Alpine%20Falls%20Ranch/medium_Stable_View_3_copy_84cf6e346a.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Alpine%20Falls%20Ranch/medium_WEB_Alpine_Falls_Bunk_House_Bedroom1_e50a1327d1.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Alpine%20Falls%20Ranch/missoula2_b997eea676.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'An intimate mountain retreat offering private-ranch seclusion and tailored outdoor access.',  
    intel: {  
      positioning: 'Private Mountain Ranch',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Private estate seclusion',  
        'Tailored outdoor excursions',  
        'Dedicated host service',  
      ],  
    },  
  },  
  {  
    id: 'the-meadows-on-rock-creek',  
    name: 'The Meadows on Rock Creek',  
    location: 'Montana, USA',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Meadows%20on%20Rock%20Creek/TMORC-two-bedroom-gallery-3-min.png',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Meadows%20on%20Rock%20Creek/TMORC-two-bedroom-gallery-3-min.png',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Meadows%20on%20Rock%20Creek/cabin-featured-1-min.png',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Meadows%20on%20Rock%20Creek/cabin-featured-3-min.png',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Meadows%20on%20Rock%20Creek/central-lodge-exterior.png',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Meadows%20on%20Rock%20Creek/montana-lodging-1.png',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Meadows%20on%20Rock%20Creek/montana-lodging.png',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/The%20Meadows%20on%20Rock%20Creek/rock-creek-lodge.png',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'A classic all-inclusive Montana sanctuary designed around private cabins, river access, and deep wilderness quiet.',  
    intel: {  
      positioning: 'Private Montana Wilderness',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Complete estate buyouts available',  
        'Expert equestrian guides',  
        'Riverfront serenity',  
      ],  
    },  
  },  
  {  
    id: 'cataloochee-ranch',  
    name: 'Cataloochee Ranch',  
    location: 'North Carolina, USA',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Cataloochee%20Ranch/alexander.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Cataloochee%20Ranch/alexander.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Cataloochee%20Ranch/delano.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Cataloochee%20Ranch/exterior.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Cataloochee%20Ranch/image2-1.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Cataloochee%20Ranch/kephart.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Cataloochee%20Ranch/palmer.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'A historic high-elevation mountain sanctuary in the Smokies.',  
    intel: {  
      positioning: 'Smoky Mountain Heritage',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Ridge horseback riding',  
        'Historic cabin luxury',  
        'Private campfire gatherings',  
      ],  
    },  
  },  
  {  
    id: 'black-desert-resort',  
    name: 'Black Desert Resort',  
    location: 'Ivins, Utah, USA',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Black%20Desert%20Resort/caption%20(1).jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Black%20Desert%20Resort/caption%20(1).jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Black%20Desert%20Resort/caption%20(2).jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Black%20Desert%20Resort/caption.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Black%20Desert%20Resort/deluxe-double-queen-in.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Black%20Desert%20Resort/deluxe-king-in-resort.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Black%20Desert%20Resort/deluxe-king.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Black%20Desert%20Resort/latitude-patio.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Black%20Desert%20Resort/two-bedroom-suite%20(1).jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Black%20Desert%20Resort/two-bedroom-suite.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Black%20Desert%20Resort/wellness-room-entry.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'A desert resort set among the red-rock landscapes of southern Utah.',  
    intel: {  
      positioning: 'Red-Rock Desert Retreat',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Private desert landscape excursions',  
        'Golf and outdoor activity planning',  
        'Wellness and recovery programming',  
      ],  
    },  
  },  
  {  
    id: 'everline-resort-and-spa',  
    name: 'Everline Resort and Spa',  
    location: 'Olympic Valley, California, USA',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Everline%20Resort%20and%20Spa/508789280_10238572654798570_3800800846905694025_n.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Everline%20Resort%20and%20Spa/508789280_10238572654798570_3800800846905694025_n.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Everline%20Resort%20and%20Spa/family-friendly_hotel_in_olympic_valley.2000x0.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Everline%20Resort%20and%20Spa/guest-room.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Everline%20Resort%20and%20Spa/hotel_near_squaw_valley.2000x0.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Everline%20Resort%20and%20Spa/hotel_near_squaw_valley_ski_resort.2000x0.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Everline%20Resort%20and%20Spa/ice_rink.2000x0.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Everline%20Resort%20and%20Spa/lodging_in_olympic_valley.2000x0.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Everline%20Resort%20and%20Spa/ski_resort_hotel_in_olympic_valley.2000x0.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Everline%20Resort%20and%20Spa/suite%20(1).jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Everline%20Resort%20and%20Spa/suite%20(2).jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Everline%20Resort%20and%20Spa/suite.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'A mountain resort in Olympic Valley offering four-season access to Lake Tahoe’s alpine landscape.',  
    intel: {  
      positioning: 'Sierra Mountain Base',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Private ski and mountain planning',  
        'Lake Tahoe outdoor access',  
        'Dedicated spa and recovery time',  
      ],  
    },  
  },  
  {  
    id: 'sunriver-resort',  
    name: 'Sunriver Resort',  
    location: 'Sunriver, Oregon, USA',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sunriver%20Resort/PSI%20Logo.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sunriver%20Resort/PSI%20Logo.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sunriver%20Resort/sunriver-resort%20(1).jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sunriver%20Resort/sunriver-resort%20(2).jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Sunriver%20Resort/sunriver-resort.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'A Central Oregon resort base surrounded by high-desert landscapes, rivers, forests, and outdoor pursuits.',  
    intel: {  
      positioning: 'High-Desert Outdoor Retreat',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Private outdoor itinerary planning',  
        'Golf and river access',  
        'High-desert recovery time',  
      ],  
    },  
  },

  // --- Heritage & Estate ---  
  {  
    id: 'chable-yucatan',  
    name: 'Chablé Yucatán',  
    location: 'Yucatán, Mexico',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/Chable-Yucatan-hero-2930x2198-c-center.webp',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/Chable-Yucatan-hero-2930x2198-c-center.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/chable-yucatan-bathroom-1280x0-c-default.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/chable-yucatan-casita-1024x1400-c-default.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/chable-yucatan-casita-2-1280x0-c-default.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/chable-yucatan-exterior-2-1024x1400-c-default.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/chable-yucatan-ixiim-2-1024x1400-c-default.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/chable-yucatan-kiol-2432x0-c-default.webp',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Chable%20Yucatan/chable-yucatan-main-house-1280x0-c-default.webp',  
    ],  
    collection: 'Heritage & Estate',  
    sanctuaryId: 'heritage-estate',  
    description:  
      'A restored 17th-century hacienda in the heart of the Yucatán jungle.',  
    intel: {  
      positioning: '17th-Century Hacienda Reborn',  
      category: 'Heritage & Estate',  
      memberBenefits: [  
        'Maya temazcal ceremony',  
        'Private cenote plunge',  
        'Hacienda-to-table cooking class',  
      ],  
    },  
  },  
  {  
    id: 'la-valise-mazunte',  
    name: 'La Valise Mazunte',  
    location: 'Oaxaca, Mexico',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/La%20Valise%20Mazunte_Oaxaca/LaValiseMazunte%201.jpg',  
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
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/La%20Valise%20Mazunte_Oaxaca/LaValiseMazunte10.jpg',  
    ],  
    collection: 'Heritage & Estate',  
    sanctuaryId: 'heritage-estate',  
    description:  
      'A bohemian-chic boutique retreat perched on the cliffs of Mazunte.',  
    intel: {  
      positioning: 'Clifftop Bohemian Luxury',  
      category: 'Heritage & Estate',  
      memberBenefits: [  
        'Rolling bed stargazing experience',  
        'Private surf lesson',  
        'Mezcal tasting',  
      ],  
    },  
  },  
  {  
    id: 'stamna-sifnos',  
    name: 'Stamna Sifnos',  
    location: 'Sifnos, Greece',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Stamna%20Sifnos_Greece/Stamna%201.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Stamna%20Sifnos_Greece/Stamna%201.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Stamna%20Sifnos_Greece/Stamna%202.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Stamna%20Sifnos_Greece/Stamna%203.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Stamna%20Sifnos_Greece/Stamna%204.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Stamna%20Sifnos_Greece/Stamna%205.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Stamna%20Sifnos_Greece/Stamna%207.jpg',  
    ],  
    collection: 'Heritage & Estate',  
    sanctuaryId: 'heritage-estate',  
    description:  
      'A classic Cycladic retreat, perfectly capturing the slow, serene rhythm of island life.',  
    intel: {  
      positioning: 'Cycladic Slow Living',  
      category: 'Heritage & Estate',  
      memberBenefits: [  
        'Private boat trip around Sifnos',  
        'Local pottery workshop',  
        'Authentic Sifnian tasting menu',  
      ],  
    },  
  },  
  {  
    id: 'silver-sands-beach-house',  
    name: 'Silver Sands Beach House',  
    location: 'Grenada',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Silver%20Sands%20Beach%20House_Grenada/SSBH1.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Silver%20Sands%20Beach%20House_Grenada/SSBH1.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Silver%20Sands%20Beach%20House_Grenada/SSBH2.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Silver%20Sands%20Beach%20House_Grenada/SSBH3.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Silver%20Sands%20Beach%20House_Grenada/SSBH6.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Silver%20Sands%20Beach%20House_Grenada/SSBH7.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Silver%20Sands%20Beach%20House_Grenada/SSBH8.jpg',  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Silver%20Sands%20Beach%20House_Grenada/SSBH9.jpg',  
    ],  
    collection: 'Heritage & Estate',  
    sanctuaryId: 'heritage-estate',  
    description:  
      'A sleek, beach-focused escape on the beautiful island of Grenada.',  
    intel: {  
      positioning: 'Sleek Caribbean Beach House',  
      category: 'Heritage & Estate',  
      memberBenefits: [  
        'Private snorkel tour',  
        'Rum tasting',  
        'Beachfront spa treatment',  
      ],  
    },  
  },  
  {  
    id: 'blackberry-mountain',  
    name: 'Blackberry Mountain',  
    location: 'Walland, Tennessee, USA',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Blackberry%20Mountain/blackberry-mountain.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Blackberry%20Mountain/blackberry-mountain.jpg',  
    ],  
    collection: 'Heritage & Estate',  
    sanctuaryId: 'heritage-estate',  
    description:  
      'A Relais & Châteaux wellness sanctuary set in the foothills of the Smokies.',  
    intel: {  
      positioning: 'Relais & Châteaux Wellness',  
      category: 'Heritage & Estate',  
      memberBenefits: [  
        'Private wellness assessment',  
        'Artisan workshop access',  
        'Mountain-view dining',  
      ],  
    },  
  },  
  {  
    id: 'blackberry-farm',  
    name: 'Blackberry Farm',  
    location: 'Walland, Tennessee, USA',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Blackberry%20Farm/blackberry-farm.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Blackberry%20Farm/blackberry-farm.jpg',  
    ],  
    collection: 'Heritage & Estate',  
    sanctuaryId: 'heritage-estate',  
    description:  
      'A renowned sister property celebrated for world-class culinary mastery and pastoral setting.',  
    intel: {  
      positioning: 'Culinary Sanctuary',  
      category: 'Heritage & Estate',  
      memberBenefits: [  
        'Sommelier cellar tastings',  
        'Artisan farm tours',  
        'Priority dining reservations',  
      ],  
    },  
  },  
  {  
    id: 'castello-di-reschio',  
    name: 'Castello di Reschio',  
    location: 'Umbria, Italy',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Castello%20di%20Reschio/reschio.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Castello%20di%20Reschio/reschio.jpg',  
    ],  
    collection: 'Heritage & Estate',  
    sanctuaryId: 'heritage-estate',  
    description:  
      'A thousand-year-old castle estate transformed into an exquisite private Umbrian sanctuary.',  
    intel: {  
      positioning: 'Millennial Castle Estate',  
      category: 'Heritage & Estate',  
      memberBenefits: [  
        'Private equestrian estate access',  
        'Organic olive oil tastings',  
        'Bespoke Italian design villas',  
      ],  
    },  
  },  
  {  
    id: 'castelfalfi',  
    name: 'Castelfalfi',  
    location: 'Tuscany, Italy',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Castelfalfi/castelfalfi.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Castelfalfi/castelfalfi.jpg',  
    ],  
    collection: 'Heritage & Estate',  
    sanctuaryId: 'heritage-estate',  
    description:  
      'A Tuscan estate with rolling vineyards, championship golf, and private villas.',  
    intel: {  
      positioning: 'Tuscan Vineyard Estate',  
      category: 'Heritage & Estate',  
      memberBenefits: [  
        'Championship golf course access',  
        'Private winery tours',  
        'Historic hamlet seclusion',  
      ],  
    },  
  },  
  {  
    id: 'palazzo-di-varignana',  
    name: 'Palazzo di Varignana',  
    location: 'Emilia-Romagna, Italy',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Palazzo%20di%20Varignana/palazzo-varignana.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Palazzo%20di%20Varignana/palazzo-varignana.jpg',  
    ],  
    collection: 'Heritage & Estate',  
    sanctuaryId: 'heritage-estate',  
    description:  
      'A historic resort and spa set in the picturesque hills of Emilia-Romagna.',  
    intel: {  
      positioning: 'Hillside Wellness Resort',  
      category: 'Heritage & Estate',  
      memberBenefits: [  
        'Extensive thermal spa access',  
        'Vast botanical gardens',  
        'Private estate olive harvesting',  
      ],  
    },  
  },  
  {  
    id: 'eitch-borromini',  
    name: 'Eitch Borromini',  
    location: 'Rome, Italy',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Eitch%20Borromini/eitch-borromini.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Eitch%20Borromini/eitch-borromini.jpg',  
    ],  
    collection: 'Urban Sovereigns',  
    sanctuaryId: 'urban-sovereigns',  
    description:  
      'A historic urban sanctuary overlooking Piazza Navona in the heart of Rome.',  
    intel: {  
      positioning: 'Piazza Navona Urban Sanctuary',  
      category: 'Urban Sovereigns',  
      memberBenefits: [  
        'Rooftop terrace overlooking Rome',  
        'Historic architecture and frescoes',  
        'Private art tours',  
      ],  
    },  
  },  
  {  
    id: 'rome-cavalieri',  
    name: 'Rome Cavalieri',  
    location: 'Rome, Italy',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Rome%20Cavalieri/rome-cavalieri.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Rome%20Cavalieri/rome-cavalieri.jpg',  
    ],  
    collection: 'Urban Sovereigns',  
    sanctuaryId: 'urban-sovereigns',  
    description:  
      'A grand hilltop sanctuary featuring museum-quality art collections and destination dining.',  
    intel: {  
      positioning: 'Grand Hilltop Sanctuary',  
      category: 'Urban Sovereigns',  
      memberBenefits: [  
        'Private art museum collection',  
        'La Pergola dining coordination',  
        'Private parkland in Rome',  
      ],  
    },  
  },

  // --- Asia & Indian Ocean ---  
  {  
    id: 'guntu',  
    name: 'Guntu',  
    location: 'Seto Inland Sea, Japan',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Guntu/guntu.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Guntu/guntu.jpg',  
    ],  
    collection: 'Island & Coast',  
    sanctuaryId: 'island-coast',  
    description:  
      'A floating ryokan cruising the serene waters of the Seto Inland Sea.',  
    intel: {  
      positioning: 'Floating Ryokan Sanctuary',  
      category: 'Island & Coast',  
      memberBenefits: [  
        'Inland Sea voyages',  
        'Private hinoki wood onsen',  
        'Sushi counter by master chefs',  
      ],  
    },  
  },  
  {  
    id: 'nihi-sumba',  
    name: 'NIHI Sumba',  
    location: 'Sumba, Indonesia',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/NIHI%20Sumba/nihi-sumba.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/NIHI%20Sumba/nihi-sumba.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'An edge-of-the-world adventure resort with world-class surf and untouched nature.',  
    intel: {  
      positioning: 'Edge of the World Adventure',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Private wave access',  
        'Spa safari experience',  
        'Sumba cultural immersion',  
      ],  
    },  
  },

  // --- South America ---  
  {  
    id: 'awasi-mendoza',  
    name: 'Awasi Mendoza',  
    location: 'Mendoza, Argentina',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Awasi%20Mendoza/awasi-mendoza.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Awasi%20Mendoza/awasi-mendoza.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'A Relais & Châteaux lodge with private villas, dedicated guides, and tailored 4x4 exploration.',  
    intel: {  
      positioning: 'Private Guide & 4x4 Villas',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Private guide and 4x4 per villa',  
        'Custom vineyard explorations',  
        'Sommelier-led wine pairings',  
      ],  
    },  
  },

  // --- Africa ---  
  {  
    id: 'lion-sands-game-reserve',  
    name: 'Lion Sands Game Reserve',  
    location: 'Sabi Sand, South Africa',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Lion%20Sands/lion-sands.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Lion%20Sands/lion-sands.jpg',  
    ],  
    collection: 'Wild Frontiers',  
    sanctuaryId: 'wild-frontiers',  
    description:  
      'A private safari sanctuary offering exceptional Big Five viewing and iconic treehouse sleepouts.',  
    intel: {  
      positioning: 'Private Big Five Safari',  
      category: 'Wild Frontiers',  
      memberBenefits: [  
        'Big Five game drives',  
        'Luxury treehouse sleepouts',  
        'Expert ranger tracking',  
      ],  
    },  
  },

  // --- Australia ---  
  {  
    id: 'southern-ocean-lodge',  
    name: 'Southern Ocean Lodge',  
    location: 'Kangaroo Island, Australia',  
    image:  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Southern%20Ocean%20Lodge/southern-ocean-lodge.jpg',  
    gallery: [  
      'https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Property%20Images/Southern%20Ocean%20Lodge/southern-ocean-lodge.jpg',  
    ],  
    collection: 'Island & Coast',  
    sanctuaryId: 'island-coast',  
    description:  
      'A cliffside luxury sanctuary overlooking the dramatic southern ocean wilderness.',  
    intel: {  
      positioning: 'Cliffside Ocean Sanctuary',  
      category: 'Island & Coast',  
      memberBenefits: [  
        'Guided Kangaroo Island excursions',  
        'Clifftop spa sanctuary',  
        'Cellar master wine tastings',  
      ],  
    },  
  },  
];

export const properties = PROPERTY_DATA;  
