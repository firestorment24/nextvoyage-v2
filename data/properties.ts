export interface Property {  
  id: string  
  name: string  
  location: string  
  description: string  
  image: string  
  collection: string  
  highlight: string  
  exclusiveOffer: string  
}

export const properties: Property[] = [  
  {  
    id: 'aman-new-york',  
    name: 'Aman New York',  
    location: 'Manhattan, New York, USA',  
    description: 'A serene sanctuary carved into the crown of Fifth Avenue. The former Crown Building reimagined — 83 suites wrapped in limestone and Japanese washi paper, suspended above the city that never sleeps.',  
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000',  
    collection: 'Metropolitan Sanctuaries',  
    highlight: 'The three-floor Aman Spa — the largest in New York — featuring a 20m indoor pool, hammam, and Japanese onsen rituals 200 feet above the city.',  
    exclusiveOffer: 'Private after-hours access to the Jazz Club with a personal sake sommelier and a curated vinyl session.'  
  },  
  {  
    id: 'amangiri',  
    name: 'Amangiri',  
    location: 'Canyon Point, Utah, USA',  
    description: 'A concrete monolith fused with the Navajo sandstone. 34 suites sprawled across 900 acres of high desert — silence so deep you hear your own heartbeat.',  
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2000',  
    collection: 'Desert Monoliths',  
    highlight: 'The 25,000-square-foot Aman Spa — yoga pavilion suspended over the desert floor, followed by a plunge into the 25m heated pool carved into the rock.',  
    exclusiveOffer: 'Private helicopter tour of Grand Staircase-Escalante with a geologist guide, ending with a champagne picnic on a butte accessible only by air.'  
  },  
  {  
    id: 'aman-kyoto',  
    name: 'Aman Kyoto',  
    location: 'Kyoto, Japan',  
    description: 'An enchanted forest of moss and maple. 26 pavilions hidden within a secret garden once owned by the textile magnate Nishijin — the only sound is the wind through the cedars.',  
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000',  
    collection: 'Zen Enclaves',  
    highlight: 'The Taka-An fire ritual — a private Shinto purification ceremony by torchlight, followed by a kaiseki dinner in a 200-year-old tea house.',  
    exclusiveOffer: 'Exclusive key to the hidden Kinkaku-ji temple trail — a pre-sunrise meditation walk before the public gates open.'  
  },  
  {  
    id: 'aman-tokyo',  
    name: 'Aman Tokyo',  
    location: 'Tokyo, Japan',  
    description: 'A minimalist Wabi-sabi retreat floating above the Otemachi financial district. 84 rooms suspended between sky and stone, with a 30m lap pool lit by natural light filtering through paper screens.',  
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2000',  
    collection: 'Metropolitan Sanctuaries',  
    highlight: 'The 1,500-square-meter Aman Spa — the largest hotel spa in Tokyo — featuring a basalt stone steam room and a traditional Japanese ofuro bath.',  
    exclusiveOffer: 'Private apprenticeship with a Tokyo sushi master, including a dawn visit to Toyosu market and a 12-course omakase in your suite.'  
  },  
  {  
    id: 'aman-le-melezin',  
    name: 'Aman Le Mélézin',  
    location: 'Courchevel 1850, France',  
    description: 'A timber-and-stone chalet perched on the Bellecôte piste. 31 rooms with ski-in/ski-out access to the Three Valleys — the largest ski domain on Earth.',  
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000',  
    collection: 'Alpine Strongholds',  
    highlight: 'The private ski concierge — your boots warmed, your edges tuned, and a private guide waiting at first lift to take you into off-piste powder stashes.',  
    exclusiveOffer: 'Heli-drop to a secret fondue cabin at 2,500m, accessible only by helicopter or snowmobile, with a personal sommelier and a bottle of Krug Clos du Mesnil.'  
  },  
  {  
    id: 'hotel-du-cap',  
    name: 'Hotel du Cap-Eden-Roc',  
    location: 'Antibes, French Riviera, France',  
    description: 'The crown jewel of the Côte d\'Azur. A Belle Époque palace set on 22 acres of pine forest, with a legendary saltwater pool carved from the granite cliffs.',  
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000',  
    collection: 'Riviera Icons',  
    highlight: 'The Eden-Roc pool — a seawater swimming basin blasted into the limestone cliff, with cabanas where Hemingway and Fitzgerald once held court.',  
    exclusiveOffer: 'The Hemingway Key — a master key to the hidden grotto paths and the original 1870 wine cellar, with a private tasting of pre-WWII Bordeaux.'  
  },  
  {  
    id: 'passalacqua',  
    name: 'Passalacqua',  
    location: 'Lake Como, Italy',  
    description: 'A neoclassical villa on the western shore of Lake Como. 24 rooms in a former silk magnate\'s estate, with terraced gardens cascading down to the water.',  
    image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?q=80&w=2000',  
    collection: 'Lake Aristocrats',  
    highlight: 'The Villa\'s original 18th-century theatre — a private opera salon with gold-leaf frescoes, re-opened exclusively for NexVoyage members.',  
    exclusiveOffer: 'A private dinner on the lake — an antique Riva Aquarama boat moored at sunset, with a chef preparing risotto al salto tableside and a view of Bellagio across the water.'  
  },  
  {  
    id: 'singita-kwitonda',  
    name: 'Singita Kwitonda Lodge',  
    location: 'Volcanoes National Park, Rwanda',  
    description: 'Eight ultra-luxury suites on the edge of the Virunga rainforest. Designed in volcanic stone and local timber, with a front-row seat to the mountain gorillas.',  
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=2000',  
    collection: 'Safari Citadels',  
    highlight: 'The Kwitonda Akarabo — a one-on-one gorilla habituation experience with primatologists, tracking a family group from dawn until they nest.',  
    exclusiveOffer: 'Private conservation dinner in the forest — a multi-course feast served at a table lit by lanterns inside the volcanic crater, surrounded by the sounds of the jungle.'  
  },  
  {  
    id: 'singita-ebony',  
    name: 'Singita Ebony Lodge',  
    location: 'Sabi Sand, South Africa',  
    description: 'The original Singita lodge, set along the Sand River in a private reserve bordering Kruger. Six suites of timber, thatch, and canvas — safari luxury born in 1993.',  
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000',  
    collection: 'Safari Citadels',  
    highlight: 'The Sand River dining deck — dinner under a canopy of ancient leadwood trees, with lanterns and the sound of hippos grumbling from the river.',  
    exclusiveOffer: 'A night in the Ebony Hide — a private photography blind overlooking a floodlit waterhole, with a tracker bringing you Amarula hot chocolate under the Milky Way.'  
  },  
  {  
    id: 'one-only-aesthesis',  
    name: 'One&Only Aesthesis',  
    location: 'Athens Riviera, Greece',  
    description: 'A seaside resort carved into the Glyfada coast. 127 rooms wrapped in white marble and olive groves, with the Aegean Sea as a constant companion.',  
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2000',  
    collection: 'Aegean Havens',  
    highlight: 'The Aesthesis Beach Club — a private cove with a 50m saltwater infinity pool floating at sea level, and cabanas serviced by your personal butler.',  
    exclusiveOffer: 'A private yacht charter to the Temple of Poseidon at Sounion — sunset dinner served on the temple steps, with a classical quartet playing against the wind.'  
  },  
  {  
    id: 'royal-mansour',  
    name: 'Royal Mansour',  
    location: 'Marrakech, Morocco',  
    description: 'A palace within a palace. 53 riads built by King Mohammed VI, each with a private courtyard, fountain, and rooftop terrace — set within three hectares of orange and olive groves.',  
    image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?q=80&w=2000',  
    collection: 'Imperial Palaces',  
    highlight: 'The underground spa — a 2,500-square-meter Moroccan hammam complex with black soap rituals, argan oil massages, and a 25m pool beneath a crystal chandelier.',  
    exclusiveOffer: 'Private access to the Royal Mansour\'s hidden medina — a closed-door shopping experience in the Souk with a personal guide and the keys to artisan ateliers not open to the public.'  
  },  
  {  
    id: 'capella-ubud',  
    name: 'Capella Ubud',  
    location: 'Bali, Indonesia',  
    description: 'A tented camp suspended in the Bali rainforest. 22 single-occupancy luxury tents connected by suspension bridges, with the Wos River roaring below.',  
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2000',  
    collection: 'Jungle Citadels',  
    highlight: 'The Keliki Valley lookout — a private sunrise platform over the rice terraces, with a Balinese blessing ceremony and breakfast served on woven banana leaves.',  
    exclusiveOffer: 'A private night jungle trek with a anthropologist — tracking nocturnal wildlife by lantern, ending at a hidden waterfall for a moonlit swim.'  
  },  
  {  
    id: 'six-senses-dunes',  
    name: 'Six Senses Southern Dunes',  
    location: 'Red Sea, Saudi Arabia',  
    description: 'A desert fortress on the edge of the Red Sea. 76 rooms and villas shaped from ochre earth, blending into the dunes like ancient ruins reborn.',  
    image: 'https://images.unsplash.com/photo-1567134863621-4ab46f27d033?q=80&w=2000',  
    collection: 'Desert Monoliths',  
    highlight: 'The Red Sea observatory — a private astronomy dome with a Zeiss telescope, where a resident astrophysicist guides you through the desert sky.',  
    exclusiveOffer: 'A day of isolation on Shura Island — a private speedboat drops you on an uninhabited sandbar with a chef, a cooler of champagne, and complete solitude.'  
  },  
  {  
    id: 'maybourne-riviera',  
    name: 'The Maybourne Riviera',  
    location: 'Roquebrune-Cap-Martin, France',  
    description: 'A sculptural glass-and-stone cliffhanger between Monaco and Menton. 69 rooms cantilevered over the Mediterranean, with every room commanding a sea view.',  
    image: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?q=80&w=2000',  
    collection: 'Riviera Icons',  
    highlight: 'The rooftop Ceto restaurant by Mauro Colagreco — a three-Michelin-star meal suspended 100 meters above the sea, with the lights of Monaco twinkling across the bay.',  
    exclusiveOffer: 'Private helicopter transfer to the Maybourne\'s secret Cala di Volpe villa in Sardinia for a weekend of secluded coastal exploration.'  
  },  
  {  
    id: '7132-hotel',  
    name: '7132 Hotel',  
    location: 'Vals, Switzerland',  
    description: 'Thermal springs architecture at its most ascetic. A Peter Zumthor masterpiece — 73 rooms built from locally quarried Valser quartzite, rising from the Alpine valley floor.',  
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000',  
    collection: 'Alpine Strongholds',  
    highlight: 'The Vals thermal baths — Zumthor\'s 60-meter-long pool carved from 60,000 slabs of Valser quartzite, with 30°C mineral water flowing from the mountain.',  
    exclusiveOffer: 'A midnight bathing ritual — exclusive after-hours access to the thermal baths with a private sound bath and a glass of Gaja Langhe in the steam room.'  
  },  
  {  
    id: 'habitas-alula',  
    name: 'Habitas AlUla',  
    location: 'Ashar Valley, Saudi Arabia',  
    description: 'A regenerative desert camp in the heart of the Ashar Valley. 100 rooms of canvas, timber, and brass, set within a canyon of ancient rock formations and palm groves.',  
    image: 'https://images.unsplash.com/photo-1549927681-0b673b8243ab?q=80&w=2000',  
    collection: 'Desert Monoliths',  
    highlight: 'The Maraya concert hall — a mirrored cube in the desert where you can arrange a private performance, surrounded by reflective walls that dissolve into the canyon.',  
    exclusiveOffer: 'A private hike through Hegra (Madain Saleh) — Saudi Arabia\'s first UNESCO World Heritage site — with an archaeologist, ending at a Nabatean tomb for a candlelit dinner.'  
  },  
  {  
    id: 'bulgari-tokyo',  
    name: 'Bulgari Hotel Tokyo',  
    location: 'Tokyo, Japan',  
    description: 'Italian glamour meets Japanese precision in the Tokyo Midtown tower. 98 rooms with Bulgari\'s signature Portoro marble bathrooms and panoramic views of Mount Fuji on clear days.',  
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000',  
    collection: 'Metropolitan Sanctuaries',  
    highlight: 'The Bulgari Bar on the 45th floor — a private alcove with a Negroni trolley and floor-to-ceiling glass overlooking the Imperial Palace gardens.',  
    exclusiveOffer: 'Private after-hours shopping at the Ginza flagship — the boutique closes for you, with a personal stylist and a champagne toast in the VIP suite.'  
  },  
  {  
    id: 'north-island',  
    name: 'North Island',  
    location: 'Seychelles',  
    description: 'A private island sanctuary where Aldabra giant tortoises roam freely. 11 villas scattered along powder-white beaches, with restricted airspace guaranteeing absolute privacy.',  
    image: 'https://images.unsplash.com/photo-1548574505-12730427929d?q=80&w=2000',  
    collection: 'Island Outposts',  
    highlight: 'The Legend Lodge — the former castaway residence of Prince William and Kate Middleton, with a private chef, infinity pool, and a personal buggy for island exploration.',  
    exclusiveOffer: 'A castaway experience on a deserted sandbank — your villa team drops you with a picnic hamper, snorkel gear, and a satellite phone, and disappears over the horizon for the day.'  
  }  
]  
