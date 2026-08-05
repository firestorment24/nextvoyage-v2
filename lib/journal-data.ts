export interface Destination {  
  id: string;  
  title: string;  
  subtitle: string;  
  location: string;  
  region: string;  
  coordinates: string;  
  vibe: string;  
  bestTime: string;  
  topMustDos: string[];  
  insiderTip: string;  
  heroImage: string;  
  summary: string;  
  sanctuary: string;  
  orchestration: string;  
  quote: string;  
  editorialHtml?: string;  
}

export const DESTINATIONS_DATA: Destination[] = [  
  {  
    id: "amalfi-coast",  
    title: "The Amalfi Vertical: Cliffside Seclusion and Mediterranean Sovereignty",  
    subtitle: "The Architecture of the Shoreline",  
    location: "Italy",  
    region: "Europe",  
    coordinates: "40.6333° N, 14.6029° E",  
    vibe: "Floating Elegance. Cliffside estates and private moorings.",  
    bestTime: "May to September",  
    topMustDos: ["Private Riva transfer to Positano", "After-hours Duomo access", "Path of the Gods sunrise hike"],  
    insiderTip: "Villa Treville offers the only truly private access to secluded coves.",  
    heroImage: "https://cdn.marblism.com/SGVsnngYECG.webp",  
    summary: "A vertical labyrinth where stone meets the Tyrrhenian in perfect symmetry.",  
    sanctuary: "Borgo Santandrea",  
    orchestration: "Private helicopter transfer from Naples directly to the cliffside helipad.",  
    quote: "Stone and sea in a silent, cinematic embrace.",  
    editorialHtml: `  
      <p>There is a profound art to mastering the vertical dimension of the Mediterranean. When one looks upon the Sorrentine peninsula and the jagged contours of the Amalfi Coast from the water, the coastline does not merely meet the sea; it defies gravity. For those who command their own leisure, true sovereignty along these storied shores is found not in mingling with the kinetic energy of the coastal highway, but in retreating entirely to the vertical sanctuaries suspended between limestone precipice and fathomless blue.</p>  
      <h3>The Architecture of Descent</h3>  
      <p>Properties like <strong>Borgo Santandrea</strong> have rewritten the grammar of coastal hospitality. Cascading nearly ninety meters down the sheer cliffs between Amalfi and Positano, this mid-century masterpiece transforms a dizzying drop into an effortless choreography of descent. Eight private elevators and descending stone stairways knit together a world where whitewashed arches, custom Molteni&C furnishings, and polished brass accents catch the shifting Mediterranean light against deep, cooling shadows.</p>  
      <h3>The Maritime Bypass</h3>  
      <p>The legendary SS163 road frequently deteriorates into a congested gallery of hairpin bottlenecks. True Mediterranean sovereignty relies upon the maritime bypass: stepping aboard private vessels departing directly from Naples or Salerno, slicing across the glass-like morning swell to arrive at private hotel jetties.</p>  
    `  
  },  
  {  
    id: "kyoto",  
    title: "Kyoto's Silent Geometry: The Architecture of Wabi-Sabi Sanctuary",  
    subtitle: "The Geometry of Silence",  
    location: "Japan",  
    region: "Asia",  
    coordinates: "35.0116° N, 135.7681° E",  
    vibe: "Minimalist Zen. Ancient temples meeting modern luxury.",  
    bestTime: "March (Cherry Blossoms) or November (Maples)",  
    topMustDos: ["Private tea ceremony", "Gion night walk", "Arashiyama bamboo grove at dawn"],  
    insiderTip: "Access the hidden moss gardens of Saiho-ji through our local monastic ties.",  
    heroImage: "https://cdn.marblism.com/g_YnjZXXLW7.webp",  
    summary: "A masterclass in restraint, where every shadow tells a story.",  
    sanctuary: "Aman Kyoto",  
    orchestration: "Personalized calligraphy session with a grandmaster.",  
    quote: "Beauty found in the space between the architecture.",  
    editorialHtml: `  
      <p>True luxury is rarely loud; it is found in the stillness between heartbeats, in the unhurried cadence of a city that has spent centuries perfecting the art of quietude. When we speak of Kyoto, our conversations drift toward the geometry of silence: the intentional interplay of shadow and light, raw stone and weathered cedar.</p>  
      <h3>The Forest Sanctuary: Aman Kyoto</h3>  
      <p>Consider <strong>Aman Kyoto</strong>, tucked quietly at the foot of the northern mountains. Low-slung pavilions of dark timber and glass emerge from a deep canopy of moss-carpeted earth and towering maples, crafted for absolute emotional peace.</p>  
    `  
  },  
  {  
    id: "courchevel-1850",  
    title: "Courchevel 1850: The High-Altitude Sovereign Enclave",  
    subtitle: "The Peak of Sophistication",  
    location: "France",  
    region: "Europe",  
    coordinates: "45.4147° N, 6.6335° E",  
    vibe: "Brass & Snow. High-altitude glamour and Michelin-starred firesides.",  
    bestTime: "December to March",  
    topMustDos: ["First tracks on Saulire", "Night skiing by torchlight", "Alpine spa immersion"],  
    insiderTip: "Request a table at Le 1947 weeks in advance; it’s the only way.",  
    heroImage: "https://cdn.marblism.com/largE9VzvJO.webp",  
    summary: "The ultimate winter sanctuary for the discerning voyager.",  
    sanctuary: "Les Airelles",  
    orchestration: "Private ski valet and bespoke boot fitting in-suite.",  
    quote: "White peaks, black diamonds, and golden hours.",  
    editorialHtml: `  
      <p>To speak of Courchevel 1850 is to speak of an echelon untouched by the ordinary rhythms of the world. Perched high within the expanse of Les Trois Vallées, this sovereign enclave operates on its own cadence: one dictated by the silent fall of crystalline snow and the amber glow of private hearths.</p>  
      <h3>The Arrival: Courchevel Altiport</h3>  
      <p>Descending through the clouds into <strong>Courchevel Altiport (LFLJ)</strong> upon the distinctive sloped runway, private aviation meets the rugged majesty of the peaks before transferring seamlessly into chauffeured conveyances.</p>  
    `  
  },  
  {  
    id: "maldives",  
    title: "The Maldivian Archipelago: Sovereign Atolls and Overwater Sovereignty",  
    subtitle: "Liquid Horizons",  
    location: "Indian Ocean",  
    region: "Asia",  
    coordinates: "3.2028° N, 73.2207° E",  
    vibe: "Azure Solitude. Overwater sanctuaries and bioluminescent nights.",  
    bestTime: "November to April",  
    topMustDos: ["Deep-sea exploration", "Private sandbank dinner", "Underwater spa"],  
    insiderTip: "The Baa Atoll is a UNESCO Biosphere Reserve; prioritize it for marine life.",  
    heroImage: "https://cdn.marblism.com/FbN5RhzyLun.webp",  
    summary: "An archipelago of private dreams cast in turquoise.",  
    sanctuary: "Velaa Private Island",  
    orchestration: "Custom seaplane arrival directly to the private island berth.",  
    quote: "Where the sky ends and the ocean begins is a matter of perspective.",  
    editorialHtml: `  
      <p>For those who measure time not in hours but in the seamless transition of light across an untouched horizon, the Maldivian archipelago represents the pinnacle of sovereign isolation. Overwater architectural mastery meets the profound silence of the northern atolls.</p>  
    `  
  },  
  {  
    id: "okavango-delta",  
    title: "The Okavango: Water, Wilderness, and the Ultimate Private Concession",  
    subtitle: "The Liquid Wild",  
    location: "Botswana",  
    region: "Africa",  
    coordinates: "19.2833° S, 22.7500° E",  
    vibe: "Waterborne Safari. Mokoro paddles and hidden leopard tracks.",  
    bestTime: "June to August (High Water)",  
    topMustDos: ["Mokoro expedition", "Aerial safari", "Night drives"],  
    insiderTip: "Nowhere else offers this unique concentration of water and desert wildlife.",  
    heroImage: "https://cdn.marblism.com/acTcl_1Pcp5.webp",  
    summary: "A desert that blooms into an oasis every year.",  
    sanctuary: "Singita Milele",  
    orchestration: "Private helicopter transfer directly into the private concession airstrip.",  
    quote: "The river that never finds the sea.",  
    editorialHtml: `  
      <p>When one speaks of absolute isolation, the dialogue returns to the water-woven labyrinths of Botswana. An ancient pulse where Kalahari sands meet seasonal floodwaters, untouched by the friction of the modern world.</p>  
    `  
  }  
  // (Full catalog continues with St. Barts, Aspen, Lake Como, Mustique, Bhutan, Ibiza, South Island NZ, Seychelles, Provence, Galapagos, Santorini, Rajasthan, Gstaad, Tokyo, Bora Bora, Tuscany, Marrakesh, New York, Paris, London, etc.)  
];  
