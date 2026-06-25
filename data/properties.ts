// data/properties.ts  
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
  // ── WILD FRONTIERS ──  
  {  
    id: "capella-ubud",  
    name: "Capella Ubud",  
    location: "Bali, Indonesia",  
    type: "Rainforest Sanctuary",  
    image: "",  
    description: "An intimate tented camp hidden within the lush rainforest of Bali, where luxury canvas suites echo the spirit of 19th-century European exploration amid the sacred Wos River valley.",  
    collection: "Wild Frontiers",  
    highlight: "Explorer's camp reimagined — Bali's sacred river valley, canvas luxury beneath the canopy.",  
    exclusiveOffer: "Private sunrise trek to the nearby rice terraces with a Balinese guide, followed by a traditional purification ritual at a local temple."  
  },  
  {  
    id: "dunton-hot-springs",  
    name: "Dunton Hot Springs",  
    location: "Colorado, USA",  
    type: "Mountain Hideaway",  
    image: "",  
    description: "A restored 19th-century mining town turned luxury wilderness retreat in the San Juan Mountains, where rustic log cabins meet natural hot springs and wildflower meadows.",  
    collection: "Wild Frontiers",  
    highlight: "A ghost town reborn — natural hot springs, wildflower meadows, and Colorado's wildest luxury.",  
    exclusiveOffer: "Private soak in the historic town bathhouse after sunset with a bottle of Champagne and a stargazing blanket."  
  },  
  {  
    id: "fawn-bluff-lodge-ontario",  
    name: "Fawn Bluff Lodge",  
    location: "Ontario, Canada",  
    type: "Wilderness Lodge",  
    image: "",  
    description: "A secluded Canadian wilderness lodge on the shores of Lake of the Woods, accessible only by floatplane — where boreal forest meets crystalline water in absolute privacy.",  
    collection: "Wild Frontiers",  
    highlight: "Floatplane-in only — Ontario's pristine wild, yours alone.",  
    exclusiveOffer: "Private floatplane tour of the surrounding lake archipelago with a gourmet shore lunch prepared by your guide."  
  },  
  {  
    id: "flockhill-lodge-canterbury",  
    name: "Flockhill Lodge",  
    location: "Canterbury, New Zealand",  
    type: "Alpine Estate",  
    image: "",  
    description: "A dramatic alpine lodge set against the backdrop of the Southern Alps, where 15,000 acres of high-country sheep station meet uncompromising contemporary luxury.",  
    collection: "Wild Frontiers",  
    highlight: "15,000 acres of New Zealand's high country — Southern Alps grandeur meets lodge luxury.",  
    exclusiveOffer: "Private helicopter fly-fishing expedition to remote alpine streams with a gourmet riverbank lunch."  
  },  
  {  
    id: "habitas-alula",  
    name: "Habitas AlUla",  
    location: "AlUla, Saudi Arabia",  
    type: "Desert Camp",  
    image: "",  
    description: "A sustainable desert sanctuary woven into the ancient sandstone canyons of AlUla, where minimalist villas sit beneath a canopy of stars in one of the world's most extraordinary landscapes.",  
    collection: "Wild Frontiers",  
    highlight: "Ancient canyons meet sustainable luxury — AlUla's most immersive desert experience.",  
    exclusiveOffer: "Private guided tour of Hegra (Saudi Arabia's first UNESCO World Heritage site) followed by a candlelit dinner in a canyon alcove."  
  },  
  {  
    id: "here-baa-atoll-maldives",  
    name: "Here Baa Atoll",  
    location: "Baa Atoll, Maldives",  
    type: "Private Island",  
    image: "",  
    description: "An exclusive-use Maldivian island resort in the UNESCO-protected Baa Atoll, where ten overwater and beach residences offer absolute privacy on a pristine coral island.",  
    collection: "Wild Frontiers",  
    highlight: "Your own island in a UNESCO atoll — the Maldives' most private escape.",  
    exclusiveOffer: "Complimentary private sunset dolphin cruise and a manta ray snorkelling excursion with a marine biologist."  
  },  
  {  
    id: "kilchoan-estate-scotland",  
    name: "Kilchoan Estate",  
    location: "Argyll, Scotland",  
    type: "Highland Estate",  
    image: "",  
    description: "A breathtaking private estate on the remote Ardnamurchan Peninsula, where a historic lodge sits among rugged coastline, ancient woodlands, and some of Scotland's most dramatic sea views.",  
    collection: "Wild Frontiers",  
    highlight: "Scotland's wildest peninsula — a private Highland estate at the edge of the world.",  
    exclusiveOffer: "Private whisky tasting in the estate's cellar followed by a sunset cruise along the Ardnamurchan coast to spot seals and sea eagles."  
  },  
  {  
    id: "sentouchi-retreat-japan",  
    name: "Sentouchi Retreat",  
    location: "Setouchi, Japan",  
    type: "Island Sanctuary",  
    image: "",  
    description: "A minimalist wellness retreat on a remote island in Japan's Seto Inland Sea, where art, architecture, and nature converge in perfect harmony.",  
    collection: "Wild Frontiers",  
    highlight: "Japan's art island sanctuary — where minimalism meets the Seto Inland Sea.",  
    exclusiveOffer: "Private art tour of the Setouchi Triennale installations on nearby islands, with a traditional kaiseki lunch prepared by a local chef."  
  },

  // ── URBAN SOVEREIGNS ──  
  {  
    id: "four-seasons-madrid",  
    name: "Four Seasons Madrid",  
    location: "Madrid, Spain",  
    type: "Urban Icon",  
    image: "",  
    description: "A soaring seven-building complex in the heart of the capital, seamlessly connecting the city's Golden Triangle of Art with a rooftop pool, the only Michelin-starred Dani Brasserie, and unparalleled views of the Sierra de Guadarrama.",  
    collection: "Urban Sovereigns",  
    highlight: "Madrid's skyline transformed — art, rooftop dining, and the pulse of the city below.",  
    exclusiveOffer: "Private after-hours tour of the Prado Museum with a senior curator and a vermouth tasting at the hotel's rooftop bar."  
  },  
  {  
    id: "one-only-aesthesis",  
    name: "One&Only Aesthesis",  
    location: "Athens Riviera, Greece",  
    type: "Coastal Resort",  
    image: "",  
    description: "One&Only's first Greek escape, set on a pristine stretch of the Athens Riviera with private beach access, minimalist architecture inspired by the Cyclades, and a Chenot Spa that redefines coastal wellness.",  
    collection: "Urban Sovereigns",  
    highlight: "The Athens Riviera reborn — Cycladic minimalism meets One&Only's legendary service.",  
    exclusiveOffer: "Complimentary private yacht transfer to the nearby island of Hydra with a beachside lunch at a hidden cove."  
  },

  // ── HERITAGE & ESTATE ──  
  {  
    id: "chable-yucatan",  
    name: "Chablé Yucatán",  
    location: "Yucatán, Mexico",  
    type: "Hacienda Retreat",  
    image: "",  
    description: "A restored 17th-century hacienda in the heart of the Yucatán jungle, where centuries-old Maya craftsmanship meets contemporary Mexican design — each villa has its own private plunge pool and lush tropical garden.",  
    collection: "Heritage & Estate",  
    highlight: "A 17th-century hacienda reborn — Yucatán's most soulful jungle escape.",  
    exclusiveOffer: "Complimentary private temazcal ceremony with a Maya shaman and a guided tour of the nearby cenotes."  
  },  
  {  
    id: "la-valise-mazunte",  
    name: "La Valise Mazunte",  
    location: "Oaxaca, Mexico",  
    type: "Boutique Retreat",  
    image: "",  
    description: "A bohemian-chic boutique retreat perched on the cliffs of Mazunte, where each room has a bed that rolls onto the private terrace — literally sleeping under the stars above the Pacific.",  
    collection: "Heritage & Estate",  
    highlight: "Sleep under the stars on the Oaxacan coast — La Valise's iconic rolling-bed experience.",  
    exclusiveOffer: "Private sunset mezcal tasting on the cliffside terrace followed by a traditional Oaxacan dinner prepared by a local chef."  
  },  
  {  
    id: "passalacqua-lake-como",  
    name: "Passalacqua",  
    location: "Lake Como, Italy",  
    type: "Historic Villa",  
    image: "",  
    description: "An 18th-century estate on the shores of Lake Como, once visited by Napoleon, Bellini, and Churchill — 24 suites across three restored buildings on seven acres of terraced Italian gardens.",  
    collection: "Heritage & Estate",  
    highlight: "Napoleon's Lake Como escape — 24 suites, seven acres, one timeless Italian legacy.",  
    exclusiveOffer: "Complimentary lakefront dinner at the Villa's private jetty paired with a sommelier-selected Barolo reserve."  
  },  
];  
