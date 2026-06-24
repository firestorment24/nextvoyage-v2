export interface Property {  
  id: string;  
  name: string;  
  location: string;  
  type: string;  
  image: string;  
  description: string;  
  collection: string;  
  highlight: string;  
  exclusiveOffer: string;  
}

export const properties: Property[] = [  
  // ── THE NEW 6 ──  
  {  
    id: "north-island",  
    name: "North Island",  
    location: "Seychelles",  
    type: "Private Island",  
    image: "https://images.unsplash.com/photo-1578926378067-7b3b5e4a3c1a?auto=format&fit=crop&q=80&w=1600",  
    description: "An exclusive barefoot-luxury private island sanctuary focused on conservation and unparalleled seclusion among the granite boulders of the Seychelles.",  
    collection: "Nomadic Frontier",  
    highlight: "Eleven villas on a pristine island reserve — seclusion redefined.",  
    exclusiveOffer: "Complimentary private seaplane transfer from Mahé and a sunset dhow cruise with champagne upon booking a 7-night stay."  
  },  
  {  
    id: "passalacqua",  
    name: "Passalacqua",  
    location: "Lake Como, Italy",  
    type: "Historic Villa",  
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1600",  
    description: "An 18th-century estate on Lake Como blending historic Italian craftsmanship with contemporary luxury across three distinct residences.",  
    collection: "Vanguard Ten",  
    highlight: "A restored 18th-century villa with 24 uniquely crafted suites on Lake Como.",  
    exclusiveOffer: "Complimentary lakefront dinner for two at the Villa's private jetty, paired with a sommelier-selected Barolo reserve."  
  },  
  {  
    id: "royal-mansour",  
    name: "Royal Mansour",  
    location: "Marrakech, Morocco",  
    type: "Riad Collection",  
    image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?auto=format&fit=crop&q=80&w=1600",  
    description: "A palatial oasis crafted by over 1,500 local artisans, featuring 53 private riads with plunge pools and rooftop terraces.",  
    collection: "Vanguard Ten",  
    highlight: "53 private riads — a city within a city, hidden behind Marrakech's ancient walls.",  
    exclusiveOffer: "Private hammam ceremony and a three-course dinner at La Grande Table Marocaine, hosted by the resort's executive chef."  
  },  
  {  
    id: "one-only-aesthesis",  
    name: "One & Only Aesthesis",  
    location: "Athens Riviera, Greece",  
    type: "Coastal Resort",  
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1600",  
    description: "Mid-century glamour meets modern Mediterranean elegance on the Athenian Riviera with private pools and beachfront villas.",  
    collection: "Vanguard Ten",  
    highlight: "Athenian Riviera glamour reborn — private villas, golden coast, endless blue.",  
    exclusiveOffer: "Complimentary daily spa ritual for two and private yacht transfer to the Isle of Spetses for a beach picnic."  
  },  
  {  
    id: "six-senses-southern-dunes",  
    name: "Six Senses Southern Dunes",  
    location: "Red Sea, Saudi Arabia",  
    type: "Desert Resort",  
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1600",  
    description: "A sustainable desert-meets-sea retreat inspired by Nabataean heritage within the Red Sea Project's vast protected landscape.",  
    collection: "Arctic Dossier",  
    highlight: "Nabataean-inspired desert luxury where dunes meet the Red Sea.",  
    exclusiveOffer: "Guided stargazing experience at the desert observatory with an astro-photographer, plus a private sunset camel trek across the dunes."  
  },  
  {  
    id: "habitas-alula",  
    name: "Habitas AlUla",  
    location: "Ashar Valley, Saudi Arabia",  
    type: "Desert Canyon Retreat",  
    image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1600",  
    description: "Immersive luxury tents integrated into the dramatic sandstone canyons of Ashar Valley beneath the desert stars.",  
    collection: "Nomadic Frontier",  
    highlight: "Among the ancient rock formations of AlUla — immersive desert luxury under the stars.",  
    exclusiveOffer: "Private guided tour of Hegra (Saudi Arabia's first UNESCO World Heritage site) with an archaeologist, followed by a candlelit dinner in a canyon alcove."  
  },

  // ── REMAINING 12 FROM ORIGINAL 18 ──  
  {  
    id: "aman-venice",  
    name: "Aman Venice",  
    location: "Venice, Italy",  
    type: "Grand Palazzo",  
    image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&q=80&w=1600",  
    description: "A 16th-century palazzo overlooking the Grand Canal, blending Renaissance grandeur with Aman's signature serenity.",  
    collection: "Vanguard Ten",  
    highlight: "Renaissance opulence on the Grand Canal — two Michelin-starred restaurants included.",  
    exclusiveOffer: "Private after-hours tour of St. Mark's Basilica and the Doge's Palace, followed by a gondola serenade with prosecco."  
  },  
  {  
    id: "cheval-blanc-paris",  
    name: "Cheval Blanc Paris",  
    location: "Paris, France",  
    type: "Luxury Hotel",  
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1600",  
    description: "LVMH's crown jewel on the Seine — a reimagined Art Deco landmark with Dior spa and three Michelin-starred dining.",  
    collection: "Vanguard Ten",  
    highlight: "LVMH's Parisian masterpiece on the Seine — Art Deco reimagined.",  
    exclusiveOffer: "Complimentary Dior spa journey for two and a private river Seine cruise aboard a restored vintage yacht."  
  },  
  {  
    id: "claridges",  
    name: "Claridge's",  
    location: "London, UK",  
    type: "Heritage Hotel",  
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=1600",  
    description: "The epitome of British elegance in Mayfair, recently reimagined with suites by the world's leading designers.",  
    collection: "Vanguard Ten",  
    highlight: "Mayfair's timeless icon — recently reborn with world-class design.",  
    exclusiveOffer: "Private after-hours tour of the Royal Academy of Arts followed by afternoon tea in the Claridge's Reading Room."  
  },  
  {  
    id: "rosewood-hong-kong",  
    name: "Rosewood Hong Kong",  
    location: "Hong Kong",  
    type: "Skyscraper Hotel",  
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=1600",  
    description: "Waterfront grandeur on the Kowloon skyline with Asia's most expansive luxury residences and Victoria Harbour views.",  
    collection: "Vanguard Ten",  
    highlight: "Kowloon's waterfront statement — sky-high residences overlooking Victoria Harbour.",  
    exclusiveOffer: "Complimentary Asaya holistic wellness consultation and harbour-view dinner at Holt's Inn with a private junk boat transfer."  
  },  
  {  
    id: "one-only-mandarina",  
    name: "One&Only Mandarina",  
    location: "Rivera Nayarit, Mexico",  
    type: "Jungle Resort",  
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1600",  
    description: "A rainforest hideaway on Mexico's Pacific coast where jungle meets ocean in a symphony of private villas and treetop suites.",  
    collection: "Vanguard Ten",  
    highlight: "Jungle-to-ocean sanctuary on Mexico's Rivera Nayarit.",  
    exclusiveOffer: "Private whale-watching excursion with marine biologist and a beachfront tequila-tasting at sunset."  
  },  
  {  
    id: "nihi-sumba",  
    name: "Nihi Sumba",  
    location: "Sumba, Indonesia",  
    type: "Beach Retreat",  
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1600",  
    description: "A remote beach paradise on an untouched Indonesian island, where barefoot luxury meets wild conservation.",  
    collection: "Vanguard Ten",  
    highlight: "The world's most remote luxury beach — Sumba's untouched paradise.",  
    exclusiveOffer: "Complimentary surf guiding at Occy's Left with a local champion and a private waterfall picnic in the Sumba jungle."  
  },  
  {  
    id: "hotel-cipriani",  
    name: "Hotel Cipriani",  
    location: "Venice, Italy",  
    type: "Island Retreat",  
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600",  
    description: "A legendary hideaway on Giudecca Island with the largest private gardens in Venice and iconic sunset views across the lagoon.",  
    collection: "Vanguard Ten",  
    highlight: "Giudecca Island's legendary hideaway — Venetian glamour since 1958.",  
    exclusiveOffer: "Private water-taxi transfer from Marco Polo Airport and a cooking masterclass with the Cip's Club chef."  
  },  
  {  
    id: "the-upper-house",  
    name: "The Upper House",  
    location: "Hong Kong",  
    type: "Boutique Hotel",  
    image: "https://images.unsplash.com/photo-1562007908-17c67e878c88?auto=format&fit=crop&q=80&w=1600",  
    description: "André Fu's minimalist masterpiece perched above Pacific Place — Hong Kong's most coveted address for the discerning traveller.",  
    collection: "Vanguard Ten",  
    highlight: "André Fu's sky-high sanctuary above Hong Kong's Pacific Place.",  
    exclusiveOffer: "Complimentary upgrade to the Entwine Suite and a private art tour of H Queen's galleries with a curator."  
  },  
  {  
    id: "octola-private-wilderness",  
    name: "Octola Private Wilderness",  
    location: "Lapland, Finland",  
    type: "Arctic Lodge",  
    image: "https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?auto=format&fit=crop&q=80&w=1600",  
    description: "A 1,000-hectare private Arctic reserve with a glass-ceiling villa perfect for aurora borealis viewing and complete polar solitude.",  
    collection: "Arctic Dossier",  
    highlight: "1,000 hectares of Arctic solitude — glass ceilings for celestial fire.",  
    exclusiveOffer: "Private Northern Lights wake-up call service and a husky-sledding expedition across the frozen tundra with champagne toast."  
  },  
  {  
    id: "deplar-farm",  
    name: "Deplar Farm",  
    location: "Northern Iceland",  
    type: "Arctic Retreat",  
    image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&q=80&w=1600",  
    description: "A heli-skiing and wellness sanctuary in Iceland's remote north, heli-access included in the all-inclusive Arctic experience.",  
    collection: "Arctic Dossier",  
    highlight: "Iceland's remote heli-skiing sanctuary — geothermal luxury above the Arctic Circle.",  
    exclusiveOffer: "Complimentary helicopter transfer from Akureyri and a private geothermal lagoon dinner under the midnight sun."  
  },  
  {  
    id: "sheldon-chalet",  
    name: "Sheldon Chalet",  
    location: "Denali, Alaska, USA",  
    type: "Glacial Lodge",  
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1600",  
    description: "A private five-bedroom chalet perched on a glacier-runoff nunatak in Denali National Park — reachable only by helicopter.",  
    collection: "Arctic Dossier",  
    highlight: "Five bedrooms on a Denali glacier — the only private lodge in Alaska's crown jewel.",  
    exclusiveOffer: "Heli-glacier landing and guided crevasse walk with a mountaineer, plus a private dog-sledding excursion across Denali's foothills."  
  },  
  {  
    id: "singita-lebombo",  
    name: "Singita Lebombo",  
    location: "Kruger National Park, South Africa",  
    type: "Safari Lodge",  
    image: "https://images.unsplash.com/photo-1547970810-dc1eac02d174?auto=format&fit=crop&q=80&w=1600",  
    description: "A dramatic glass-walled safari lodge perched above the Lebombo Mountains overlooking the vast Kruger wilderness.",  
    collection: "Nomadic Frontier",  
    highlight: "Glass-walled wilderness above the Kruger — safari redefined.",  
    exclusiveOffer: "Private bush dinner on a riverbed with ranger-guided night drive and a champagne sundowner at the Lebombo lookout."  
  },  
  {  
    id: "amangiri",  
    name: "Amangiri",  
    location: "Canyon Point, Utah, USA",  
    type: "Desert Retreat",  
    image: "https://images.unsplash.com/photo-1565022536202-2e1b4e54b8c0?auto=format&fit=crop&q=80&w=1600",  
    description: "A sculptural desert hideaway set against the dramatic red-rock canyons of the Utah-Arizona border — Aman's American masterpiece.",  
    collection: "Nomadic Frontier",  
    highlight: "Aman's American masterpiece — red-rock canyons and endless desert silence.",  
    exclusiveOffer: "Private hot-air balloon ride over Monument Valley with a gourmet desert picnic and a Navajo-guided hiking experience."  
  },  
  {  
    id: "dar-ahlam",  
    name: "Dar Ahlam",  
    location: "Skoura, Morocco",  
    type: "Desert Palace",  
    image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?auto=format&fit=crop&q=80&w=1600",  
    description: "A magical Moroccan palace hidden among the palm groves of Skoura, where every meal is a surprise and every corner tells a story.",  
    collection: "Nomadic Frontier",  
    highlight: "Morocco's most romantic hideaway — no menus, no schedules, pure magic.",  
    exclusiveOffer: "Private dinner in the palm grove with a Berber storytelling performance and a guided excursion to the Kasbah of Amridil."  
  },  
  {  
    id: "aman-tokyo",  
    name: "Aman Tokyo",  
    location: "Tokyo, Japan",  
    type: "Urban Sanctuary",  
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1600",  
    description: "A serene zen retreat occupying the top six floors of the Otemachi Tower — Aman's first urban resort with skyline views of Mount Fuji.",  
    collection: "Vanguard Ten",  
    highlight: "Aman's vertical zen garden — Tokyo from the heavens above Otemachi.",  
    exclusiveOffer: "Private tea ceremony with a master of the Urasenke school and complimentary access to the Aman Tokyo spa's Japanese herbal bath."  
  },  
  {  
    id: "hotel-du-cap-eden-roc",  
    name: "Hotel du Cap-Eden-Roc",  
    location: "Antibes, French Riviera",  
    type: "Riviera Icon",  
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1600",  
    description: "The crown jewel of the French Riviera — a legendary Belle Époque estate where artists, writers, and royalty have summered since 1870.",  
    collection: "Vanguard Ten",  
    highlight: "The French Riviera's eternal icon — since 1870, the address of legends.",  
    exclusiveOffer: "Complimentary cabana at the Eden-Roc pool and a private boat transfer to the Île Sainte-Marguerite for a Provençal picnic."  
  }  
];  
