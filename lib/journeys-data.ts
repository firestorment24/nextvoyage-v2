export interface CuratedJourney {    
slug: string;    
title: string;    
category: string;    
subtitle: string;    
location: string;    
duration: string;    
startingPrice: string;    
heroImage: string;    
summary: string;    
bestTime: string;    
idealLength: string;    
targetAudience: string;    
hotels: { name: string; description: string }[];    
highlights: { day: string; title: string; narrative: string }[];    
dining: string[];    
}

export const CURATED_JOURNEYS: CuratedJourney[] = [    
{    
  slug: "anguilla",    
  title: "Anguilla Beach & Villa Sanctuary",    
  category: "Coastal",    
  subtitle: "The Caribbean's Private Peninsula",    
  location: "Anguilla, Caribbean",    
  duration: "5 Days / 4 Nights",    
  startingPrice: "From $4,995 per person",    
  heroImage: "https://images.unsplash.com/photo-1629060072086-d56e359c6974?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
  summary: "A pristine Caribbean escape featuring pristine shores, secluded cliffside villas, and barefoot elegance.",    
  bestTime: "December to April",    
  idealLength: "5 Days",    
  targetAudience: "Couples, Families, and Milestone Celebrations",    
  hotels: [    
    { name: "Cap Juluca, A Belmond Hotel", description: "Greco-Moorish beachfront romance along Maundays Bay." },    
    { name: "Four Seasons Resort and Residences", description: "Sleek marble architecture and family-friendly cliffside luxury." },    
    { name: "ÀNI Anguilla", description: "Fully-staffed ultra-luxury private peninsula for complete seclusion." }    
  ],    
  highlights: [    
    { day: "Day 1", title: "Arrival in Paradise", narrative: "Arrive in Anguilla and settle into your luxury beachfront retreat. Spend the afternoon swimming along the tranquil white sands of Meads Bay or Rendezvous Bay before a sunset dinner at Pimms." },    
    { day: "Day 2", title: "Coves & Catamarans", narrative: "Charter a private boat to discover hidden coves like Little Bay, accessible only by water, followed by fresh grilled lobster on Scilly Cay." },    
    { day: "Day 3", title: "Reefs & Watersports", narrative: "Snorkel among protected coral gardens near Shoal Bay East before unwinding with beachside cocktails at sunset." }    
  ],    
  dining: ["Pimms at Cap Juluca", "Sunset Lounge at Four Seasons", "Blanchards Restaurant"]    
},    
{    
  slug: "napa-valley",    
  title: "Napa Valley Wine & Estate Journey",    
  category: "Wine & Estate",    
  subtitle: "Vineyards and Hillside Retreats",    
  location: "Napa Valley, California",    
  duration: "3 Days / 2 Nights",    
  startingPrice: "From $3,995 per person",    
  heroImage: "https://images.unsplash.com/photo-1598284443743-a2ff1915f9e3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
  summary: "A European-inspired hillside retreat among world-class vineyards and celebrated culinary icons.",    
  bestTime: "August to October (Harvest Season)",    
  idealLength: "3 Days",    
  targetAudience: "Couples, Wine Connoisseurs, and Food Enthusiasts",    
  hotels: [    
    { name: "Auberge du Soleil", description: "Adults-only terraced hillside retreat overlooking Rutherford vineyards." },    
    { name: "Meadowood Napa Valley", description: "Woodland luxury resort set among old-growth trees." },    
    { name: "Stanly Ranch, Auberge Collection", description: "Single-story cottages spread across working southern vineyards." }    
  ],    
  highlights: [    
    { day: "Day 1", title: "Arrival in the Valley", narrative: "Arrive in Napa and check into your hillside sanctuary. Begin your valley experience with private tastings at premier family-owned vineyards before a celebrated dinner in Yountville." },    
    { day: "Day 2", title: "Hot Air & Grand Cru", narrative: "Start the day with a sunrise hot air balloon ride over the valley vines, followed by private tours and tastings at estate wineries." },    
    { day: "Day 3", title: "Geothermal Serenity", narrative: "Unwind with mineral soaks in Calistoga before browsing the Oxbow Public Market for your final afternoon." }    
  ],    
  dining: ["The French Laundry", "Bouchon Bistro", "Bear at Stanly Ranch"]    
},    
{    
  slug: "florence",    
  title: "Florence Renaissance & Artisan Journey",    
  category: "Cultural",    
  subtitle: "The Masterpieces of Tuscany",    
  location: "Florence, Italy",    
  duration: "4 Days / 3 Nights",    
  startingPrice: "From $4,295 per person",    
  heroImage: "https://images.unsplash.com/photo-1543429258-cc721a300e8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmxvcmVuY2UlMjBpdGFseXxlbnwwfHwwfHx8MA%3D%3D",    
  summary: "An artistic immersion into Renaissance masterpieces, private palazzo stays, and Florentine craftsmanship.",    
  bestTime: "April to June or September to October",    
  idealLength: "4 Days",    
  targetAudience: "Art Lovers, History Enthusiasts, and Couples",    
  hotels: [    
    { name: "Collegio alla Querce, Auberge Resorts Collection", description: "Historic estate blending classical Florentine gardens with refined luxury." },    
    { name: "Portrait Firenze", description: "Lungarno Collection elegance overlooking the Ponte Vecchio." },    
    { name: "Rocco Forte Hotel Savoy", description: "Sophisticated contemporary luxury right on Piazza della Repubblica." }    
  ],    
  highlights: [    
    { day: "Day 1", title: "Arrival on the Arno", narrative: "Arrive in Florence and settle along the river. Cross the Ponte Vecchio to explore artisan leather boutiques and enjoy a traditional barchetto boat ride on the Arno at sunset." },    
    { day: "Day 2", title: "The Uffizi & Accademia", narrative: "Marvel at Michelangelo's David and Botticelli's Birth of Venus with private, skip-the-line gallery access before rooftop dining." },    
    { day: "Day 3", title: "Florentine Craftsmanship", narrative: "Join a private cooking and pasta-making workshop, followed by an evening candlelit speakeasy experience." }    
  ],    
  dining: ["Borgo San Jacopo", "Cantinetta Antinori", "Ristorante Il Profeta"]    
},    
{    
  slug: "montenegro",    
  title: "Montenegro Adriatic & Bay Expedition",    
  category: "Coastal",    
  subtitle: "Fiords, Fortresses, and Luxury Marinas",    
  location: "Montenegro, Adriatic Coast",    
  duration: "5 Days / 4 Nights",    
  startingPrice: "From $4,495 per person",    
  heroImage: "https://images.unsplash.com/photo-1630168322969-e9a92c680345?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
  summary: "A dramatic Adriatic voyage through the Bay of Kotor, medieval walled towns, and ultra-luxury marinas.",    
  bestTime: "May to September",    
  idealLength: "5 Days",    
  targetAudience: "Yachting Enthusiasts, Explorers, and Couples",    
  hotels: [    
    { name: "One&Only Portonovi", description: "Polished marina resort with world-class wellness and private beach." },    
    { name: "Mamula Island by Banyan Tree", description: "Restored 19th-century fortress hotel set on a private island." },    
    { name: "Aman Sveti Stefan", description: "Iconic fortified island village connected by a pink-sand causeway." }    
  ],    
  highlights: [    
    { day: "Day 1", title: "The Bay of Kotor", narrative: "Transfer to the stunning Bay of Kotor, settling into your waterfront sanctuary before a relaxed evening dinner overlooking the moonlit water." },    
    { day: "Day 2", title: "Our Lady of the Rocks", narrative: "Set out on a private boat tour of the bay, visiting ancient islets, hidden sea caves, and historic Perast." },    
    { day: "Day 3", title: "The Serpentine Peaks", narrative: "Drive the breathtaking mountain switchbacks above Kotor into Lovćen National Park for panoramic Adriatic views." }    
  ],    
  dining: ["Restaurant Conte", "Verige65", "NOA Portonovi"]    
},    
{    
  slug: "cambodia",    
  title: "Cambodia Ancient Temples & Jungles",    
  category: "Cultural",    
  subtitle: "Khmer Heritage and Untouched Wilderness",    
  location: "Siem Reap & Cardamom Mountains, Cambodia",    
  duration: "6 Days / 5 Nights",    
  startingPrice: "From $5,995 per person",    
  heroImage: "https://images.unsplash.com/photo-1602604193553-28c132dac0a7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
  summary: "An epic cultural journey through the monumental ruins of Angkor Wat and ultra-luxurious tented jungle camps.",    
  bestTime: "November to March",    
  idealLength: "6 Days",    
  targetAudience: "History Buffs, Adventurers, and Conscious Travelers",    
  hotels: [    
    { name: "Zannier Phum Baitang", description: "Village-style luxury resort set among tranquil rice paddies in Siem Reap." },    
    { name: "Raffles Grand Hotel d'Angkor", description: "Historic 1932 landmark presiding over the city's central park." },    
    { name: "Shinta Mani Wild", description: "Zipline-accessed tented conservation camp in the Cardamom Mountains." }    
  ],    
  highlights: [    
    { day: "Day 1", title: "Gateway to Angkor", narrative: "Arrive in Siem Reap and settle into your tropical sanctuary. Enjoy a relaxed evening tasting refined Khmer cuisine inspired by royal traditions." },    
    { day: "Day 2", title: "Dawn at Angkor Wat", narrative: "Witness sunrise over the iconic temple towers before exploring the ancient stone faces of Bayon and tree-entwined Ta Prohm." },    
    { day: "Day 3", title: "Into the Cardamom Jungle", narrative: "Journey to Shinta Mani Wild, arriving via a dramatic zipline over the forest canopy to your luxury tented camp." }    
  ],    
  dining: ["Cuisine Wat Damnak", "Mahob Khmer", "The Waterfall Restaurant at Shinta Mani"]    
},    
{    
  slug: "sri-lanka",    
  title: "Sri Lanka Wildlife, Tea & Heritage Expedition",    
  category: "Cultural & Adventure",    
  subtitle: "Leopards, Planter Bungalows, and Ancient Citadels",    
  location: "Sri Lanka",    
  duration: "6 Days / 5 Nights",    
  startingPrice: "From $8,495 per person",    
  heroImage: "https://images.unsplash.com/photo-1651264042769-ef84e30f4ac8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
  summary: "A multifaceted expedition across wildlife safaris in Yala, colonial tea country bungalows, and UNESCO citadels.",    
  bestTime: "December to April",    
  idealLength: "6 Days",    
  targetAudience: "Wildlife Enthusiasts, Culturists, and Explorers",    
  hotels: [    
    { name: "Amangalla", description: "17th-century heritage sanctuary within the ramparts of Galle Fort." },    
    { name: "Wild Coast Tented Lodge", description: "Cocoon-style luxury camp on the edge of leopard-dense Yala National Park." },    
    { name: "Ceylon Tea Trails", description: "Restored British planter bungalows set across active highland tea estates." }    
  ],    
  highlights: [    
    { day: "Day 1", title: "The Ramparts of Galle", narrative: "Arrive in the south and explore the cobblestone streets of UNESCO-listed Galle Fort before dining in a restored Dutch mansion." },    
    { day: "Day 2", title: "Leopards of Yala", narrative: "Travel east to Yala National Park for an expert-led afternoon jeep safari in search of leopards, elephants, and sloth bears." },    
    { day: "Day 3", title: "The Hill Country Express", narrative: "Board the legendary Kandy-to-Ella scenic mountain train winding through emerald tea terraces and misty cloud forests." }    
  ],    
  dining: ["Ministry of Crab (Colombo)", "Aqua Forte", "Cafe Nuwara"]    
},    
{    
  slug: "california-coast",    
  title: "California Coast Road Trip",    
  category: "Coastal",    
  subtitle: "San Francisco to San Diego via Big Sur",    
  location: "California, USA",    
  duration: "7 Days / 6 Nights",    
  startingPrice: "From $6,995 per person",    
  heroImage: "https://images.unsplash.com/photo-1671819379655-1e27cbad1590?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJpJTIwc3VyJTIwY2FsaWZvcm5pYXxlbnwwfHwwfHx8MA%3D%3D",    
  summary: "A legendary Pacific Coast highway journey through towering redwoods, dramatic cliffs, and coastal wine valleys.",    
  bestTime: "April to October",    
  idealLength: "7 Days",    
  targetAudience: "Road Trip Connoisseurs, Couples, and Families",    
  hotels: [    
    { name: "Post Ranch Inn", description: "Adults-only eco-luxury clifftop refuge and stilted treehouses in Big Sur." },    
    { name: "The Inn at Mattei's Tavern", description: "Auberge Collection 19th-century stagecoach heritage in Los Olivos." },    
    { name: "San Ysidro Ranch", description: "Ultra-private vine-covered historic cottages nestled in Montecito gardens." }    
  ],    
  highlights: [    
    { day: "Day 1", title: "San Francisco Bay", narrative: "Arrive in San Francisco, cross the Golden Gate Bridge, and celebrate with a Michelin-starred tasting dinner overlooking the bay." },    
    { day: "Day 2", title: "Monterey & Carmel", narrative: "Drive south past coastal redwoods and the breathtaking 17-Mile Drive, arriving in storybook Carmel-by-the-Sea." },    
    { day: "Day 3", title: "The Big Sur Clifftops", narrative: "Navigate the dramatic Bixby Bridge and coastal cliffs of Big Sur, stopping at McWay Falls before settling into Cambria." }    
  ],    
  dining: ["Lazy Bear (San Francisco)", "The Sea Chest Oyster Bar (Cambria)", "Addison (San Diego)"]    
},    
{    
  slug: "new-york-city",    
  title: "New York City Midtown East & Cultural Immersion",    
  category: "Urban",    
  subtitle: "Gilded Age Grandeur and Broadway Nights",    
  location: "New York City, USA",    
  duration: "4 Days / 3 Nights",    
  startingPrice: "From $2,995 per person",    
  heroImage: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1600&q=80",    
  summary: "An iconic Manhattan immersion featuring legendary landmark hotels, private museum viewings, and Broadway curtain calls.",    
  bestTime: "September to December or April to June",    
  idealLength: "4 Days",    
  targetAudience: "Culture Seekers, Families, and Romantics",    
  hotels: [    
    { name: "The St. Regis New York", description: "1904 Beaux-Arts Fifth Avenue landmark featuring legendary butler service." },    
    { name: "Waldorf Astoria New York", description: "Revived Park Avenue Art Deco icon with restored Peacock Alley grandeur." },    
    { name: "The Mark", description: "Unapologetically glamorous Upper East Side design masterpiece." }    
  ],    
  highlights: [    
    { day: "Day 1", title: "Fifth Avenue Arrival", narrative: "Arrive in Manhattan and check into your Midtown sanctuary. Stroll Fifth Avenue and enjoy coastal Italian dining before rooftop cocktails." },    
    { day: "Day 2", title: "MoMA & Broadway", narrative: "Explore masterworks at the Museum of Modern Art, followed by a VIP evening at a premier Broadway production." },    
    { day: "Day 3", title: "Museum Mile & Central Park", narrative: "Wander through the Metropolitan Museum of Art and serene paths of Central Park before contemporary Nordic dining." }    
  ],    
  dining: ["The Modern", "Aquavit", "Ai Fiori"]    
},    
{    
  slug: "japan",    
  title: "Japan: Kyoto Sanctuaries & Tokyo Skyline",    
  category: "Cultural",    
  subtitle: "Zen Gardens, Ryokans, and Metropolitan Minimalist Luxury",    
  location: "Tokyo & Kyoto, Japan",    
  duration: "8 Days / 7 Nights",    
  startingPrice: "From $9,495 per person",    
  heroImage: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1600&q=80",    
  summary: "A profound journey through Japan's architectural contrasts—from the sky-high minimalist calm of Tokyo to the silent bamboo groves and moss temples of Kyoto.",    
  bestTime: "March to May (Cherry Blossom) or October to November (Fall Foliage)",    
  idealLength: "8 Days",    
  targetAudience: "Design Enthusiasts, Connoisseurs of Silence, and Culture Seekers",    
  hotels: [    
    { name: "Aman Tokyo", description: "Sky-high minimalist sanctuary combining traditional ryokan motifs with Otemachi skyline views." },    
    { name: "The Ritz-Carlton, Kyoto", description: "Riverside heritage luxury on the Kamogawa riverfront with pristine Japanese gardens." },    
    { name: "Amanemu", description: "Hot-spring sanctuary overlooking the tranquil waters of Ago Bay in Ise-Shima." }    
  ],    
  highlights: [    
    { day: "Day 1", title: "Arrival Above Tokyo", narrative: "Arrive in Tokyo and ascend to your sky-high retreat. Unwind with an introductory matcha ceremony overlooking the shimmering city lights." },    
    { day: "Day 2", title: "The Silent Geometry of Kyoto", narrative: "Board the bullet train south to Kyoto. Private evening access to a UNESCO temple garden before a kaiseki dinner." },    
    { day: "Day 3", title: "Arashiyama & Bamboo Groves", narrative: "Private morning walk through the bamboo forests before meeting a master swordsmith in his private workshop." }    
  ],    
  dining: ["Narisawa (Tokyo)", "Kichisen (Kyoto)", "Den (Tokyo)"]    
},    
{    
  slug: "maldives",    
  title: "The Maldivian Atoll Sovereignty",    
  category: "Island & Coast",    
  subtitle: "Overwater Pavilions and Untouched Reefs",    
  location: "Baa Atoll, Maldives",    
  duration: "6 Days / 5 Nights",    
  startingPrice: "From $12,495 per person",    
  heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=80",    
  summary: "An ultra-luxury barefoot retreat across pristine coral atolls, featuring secluded overwater villas, private marine biologists, and absolute stillness.",    
  bestTime: "November to April",    
  idealLength: "6 Days",    
  targetAudience: "Honeymooners, Divers, and Seekers of Absolute Privacy",    
  hotels: [    
    { name: "Here Baa Atoll (Maldives)", description: "Secluded island sanctuary with bespoke overwater architecture and marine conservation focus." },    
    { name: "Cheval Blanc Randheli", description: "Jean-Michel Gathy-designed modernist enclave in the Noonu Atoll." },    
    { name: "Soneva Fushi", description: "Pioneering barefoot luxury villa estate nestled in lush jungle foliage." }    
  ],    
  highlights: [    
    { day: "Day 1", title: "Seaplane Arrival", narrative: "Board a private seaplane flight over turquoise atolls, touching down directly at your overwater villa jetty." },    
    { day: "Day 2", title: "Hanifaru Bay Snorkeling", narrative: "Swim alongside manta rays and whale sharks in a protected biosphere reserve with a marine biologist guide." },    
    { day: "Day 3", title: "Sandbank Stargazing", narrative: "Private sunset dhoni cruise to an isolated sandbank for a private candlelit dinner under the Indian Ocean stars." }    
  ],    
  dining: ["Overwater Grill at Cheval Blanc", "Fresh in the Garden (Soneva)", "Undersea Dining"]    
},    
{    
  slug: "botswana",    
  title: "The Okavango Delta Wilderness Expedition",    
  category: "Wild Frontiers",    
  subtitle: "Private Concessions and Waterway Safaris",    
  location: "Okavango Delta, Botswana",    
  duration: "7 Days / 6 Nights",    
  startingPrice: "From $14,995 per person",    
  heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80",    
  summary: "An exclusive wildlife safari across pristine private concessions in the Okavango Delta, combining mokoro boat explorations and big-cat tracking.",    
  bestTime: "May to October (Dry Season)",    
  idealLength: "7 Days",    
  targetAudience: "Wildlife Purists, Photographers, and Adventurers",    
  hotels: [    
    { name: "Mombo Camp", description: "Legendary luxury tented camp perched in prime predator territory within the Moremi Game Reserve." },    
    { name: "Vumbura Plains", description: "Contemporary glass-and-canvas suites raised above water and acacia floodplains." },    
    { name: "Xigera Safari Lodge", description: "Art-curated wilderness sanctuary immersed in the heart of the Delta." }    
  ],    
  highlights: [    
    { day: "Day 1", title: "Into the Delta", narrative: "Arrive via bush plane into the Okavango Delta, touching down at a remote airstrip before a twilight game drive." },    
    { day: "Day 2", title: "Silent Waters", narrative: "Glide through glassy channels in a traditional wooden mokoro, observing elephants and rare birdlife at eye-level." },    
    { day: "Day 3", title: "Big Cat Tracking", narrative: "Track lion prides and leopards across open floodplains with expert trackers in open 4x4 vehicles." }    
  ],    
  dining: ["Bush Dinners under the Acacia Canopy", "Campfire Tasting Menus", "Boma Feasts"]    
},    
{    
  slug: "amalfi-coast",    
  title: "The Amalfi Vertical: Cliffside Seclusion",    
  category: "Coastal",    
  subtitle: "Palazzos, Terraced Lemons, and Private Coves",    
  location: "Amalfi Coast, Italy",    
  duration: "5 Days / 4 Nights",    
  startingPrice: "From $6,995 per person",    
  heroImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=80",    
  summary: "A dramatic Mediterranean coastal journey through vertical cliffside villages, historic palazzos, and hidden swimming coves accessible only by water.",    
  bestTime: "May to June or September to October",    
  idealLength: "5 Days",    
  targetAudience: "Romantics, Coastal Explorers, and Gastronomes",    
  hotels: [    
    { name: "Passalacqua (Lake Como reference / Amalfi Coast equivalent)", description: "Exquisite historic lakeside or cliffside estate embodying timeless Italian aristocracy." },    
    { name: "Le Sirenuse", description: "Iconic Positano red-hued landmark featuring whitewashed rooms and majolica-tiled pools." },    
    { name: "Monastero Santa Rosa", description: "Restored 17th-century cliffside monastery hotel suspended between sea and sky above Conca dei Marini." }    
  ],    
  highlights: [    
    { day: "Day 1", title: "Arrival in Positano", narrative: "Arrive via private transfer along the winding Amalfi corniche, checking into your cliffside balcony suite overlooking the Tyrrhenian Sea." },    
    { day: "Day 2", title: "Capri by Private Riva", narrative: "Charter a private Riva boat to the Faraglioni rocks and secret sea caves of Capri, avoiding crowded tourist ferries entirely." },    
    { day: "Day 3", title: "Terraced Lemon Groves", narrative: "Private walking tour of historic lemon terraces above Amalfi with a master limoncello maker and chef-led lunch." }    
  ],    
  dining: ["La Sponda at Le Sirenuse", "Zass at Il San Pietro", "Ristorante Da Gemma"]    
}  {    
slug: "greece",    
title: "Greece: Cycladic Islands & Aegean Sovereignty",    
category: "Island & Coast",    
subtitle: "Private Coves, Mykonos Nights, and Santorini Caldera Sunsets",    
location: "Mykonos, Santorini & Kéa, Greece",    
duration: "7 Days / 6 Nights",    
startingPrice: "From $8,995 per person",    
heroImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=80",    
summary: "A yacht-backed voyage across the Cyclades—from the chic energy of Mykonos to the quiet caldera at Santorini and the untouched shores of Kéa.",    
bestTime: "May to September",    
idealLength: "7 Days",    
targetAudience: "Couples, Island Hoppers, and Design Enthusiasts",    
hotels: [    
  { name: "One&Only Kéa Island", description: "Uncrowded ultra-luxury waterfront sanctuary on an untouched Cycladic isle." },    
  { name: "Andronis Arcadia", description: "Cliffside minimal suites carved into the Santorini caldera." },    
  { name: "Eleftheria Mykonos", description: "Modern hilltop hideaway steps from the iconic windmills and buzzing harbor." }    
],    
highlights: [    
  { day: "Day 1", title: "Arrival in the Cyclades", narrative: "Arrive at Mykonos and settle into your hilltop sanctuary. Begin with a private sunset dinner overlooking Little Venice." },    
  { day: "Day 2", title: "Santorini by Private Vessel", narrative: "Charter a private vessel for a caldera crossing to Santorini, anchoring beneath the red cliffs of Akrotiri for an afternoon swim." },    
  { day: "Day 3", title: "The Sanctuary of Kéa", narrative: "Transfer by yacht to One&Only Kéa, spending the day across private coves and the island's untouched hiking trails." }    
],    
dining: ["Makris (Mykonos)", "Salto Wine Bar (Mykonos)", "Selene (Santorini)"]    
},  
{    
slug: "patagonia",    
title: "Patagonia: Glaciers, Peaks & Remote Wilderness",    
category: "Wild Frontiers",    
subtitle: "Torres del Paine and the Southern Ice Fields",    
location: "Patagonia, Argentina & Chile",    
duration: "8 Days / 7 Nights",    
startingPrice: "From $13,495 per person",    
heroImage: "https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?w=1600&q=80",    
summary: "An expedition into the raw grandeur of Patagonia—granite towers, glacial lagoons, and private estancias at the end of the world.",    
bestTime: "November to March (Austral Summer)",    
idealLength: "8 Days",    
targetAudience: "Adventurers, Photographers, and Connoisseurs of Wild Landscapes",    
hotels: [    
  { name: "Awasi Patagonia", description: "Twelve architecturally striking villas scattered across a private 15,000-acre reserve." },    
  { name: "Explora Patagonia", description: "Contemporary lodge commanding front-row views of the Torres del Paine massif." },    
  { name: "Casa Philippi", description: "Historic 1910 bohemian mansion in Puerto Varas, gateway to the lake district." }    
],    
highlights: [    
  { day: "Day 1", title: "Arrival at the End of the World", narrative: "Fly into Punta Arenas and transfer to your private Patagonian lodge, greeted by panoramic views of the Paine massif." },    
  { day: "Day 2", title: "The Towers of Dawn", narrative: "Private guided trek toward the base of the granite towers before a restorative thermal bath at the lodge." },    
  { day: "Day 3", title: "Grey Glacier by Boat", narrative: "Cross the milky-blue waters of Lago Grey to witness the towering ice wall of Grey Glacier up close." }    
],    
dining: ["Estancia Fireplace Dinners", "Patagonian Lamb Asado", "Lodge Chef's Tasting Menu"]    
},  
{    
slug: "french-polynesia",    
title: "French Polynesia: Overwater Sovereignty",    
category: "Island & Coast",    
subtitle: "Bora Bora, Moorea & Private Motu Escapes",    
location: "Bora Bora & Moorea, French Polynesia",    
duration: "7 Days / 6 Nights",    
startingPrice: "From $11,995 per person",    
heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=80",    
summary: "An overwater sanctuary across the untouched lagoons of Bora Bora and Moorea, with private motus, coral-garden reefs, and absolute calm.",    
bestTime: "May to October",    
idealLength: "7 Days",    
targetAudience: "Honeymooners, Divers, and Connoisseurs of Seclusion",    
hotels: [    
  { name: "The Brando", description: "The ultimate eco-luxury private atoll escape once owned by Marlon Brando." },    
  { name: "Four Seasons Bora Bora", description: "Overwater bungalows with glass floors and Mount Otemanu views." },    
  { name: "St. Regis Bora Bora", description: "South Pacific grandeur with the largest overwater villas in Polynesia." }    
],    
highlights: [    
  { day: "Day 1", title: "Lagoon Arrival", narrative: "Arrive by private flight to Tahiti, settling into your overwater bungalow on the aquamarine lagoon." },    
  { day: "Day 2", title: "Coral Gardens & Stingrays", narrative: "Private lagoon cruise to feed stingrays, swim over shark-spotted coral heads, and snorkel in protected marine sanctuaries." },    
  { day: "Day 3", title: "Private Motu Picnic", narrative: "Set off to a secluded private motu for a champagne picnro and an afternoon of total island solitude." }    
],    
dining: ["Lagoon Restaurant (St. Regis)", "The Brando Organic Garden Dining", "Te Mahana Sunset Dining"]    
},  
{    
slug: "luxury-rail",    
title: "The Grand Luxury Rail: Alpine Peaks & Heritage Routes",    
category: "Cultural",    
subtitle: "Venice Simplon-Orient-Express and Legendary Sleeper Trains",    
location: "Venice, Paris & the Swiss Alps",    
duration: "6 Days / 5 Nights",    
startingPrice: "From $16,995 per person",    
heroImage: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1600&q=80",    
summary: "A timeless heritage journey aboard the world's most storied trains—gilded carriages, private cabins, and alpine crossings at a poet's pace.",    
bestTime: "March to October",    
idealLength: "6 Days",    
targetAudience: "Romantics, Historians, and Lovers of Slow Luxury",    
hotels: [    
  { name: "The Gritti Palace (Venice)", description: "Peggy Guggenheim's favored Grand Canal palace, resting on La Serenissima's calm waters." },    
  { name: "Ritz Paris", description: "The legendary Place Vendôme landmark of timeless French grandeur." },    
  { name: "Beau-Rivage Palace (Lausanne)", description: "Commanding Belle Époque palace on the shores of Lake Geneva." }    
],    
highlights: [    
  { day: "Day 1", title: "Grand Canal Departure", narrative: "Begin in Venice with an evening at the Gritti Palace before boarding the Venice Simplon-Orient-Express at Santa Lucia station." },    
  { day: "Day 2", title: "Aboard the Orient Express", narrative: "Settle into your private cabin as the gilded train winds through the Dolomites and the Swiss Alps toward Paris." },    
  { day: "Day 3", title: "The Alpine Crossing", narrative: "Disembark in the Swiss lakeside for a scenic rail journey through the GoldenPass route and a mountainous heritage dinner." }    
],    
dining: ["Orient-Express Champagne Car", "Le Grand Véfour (Paris)", "Alpine Pullman Dining"]    
}    
];

export const PRICING_DISCLAIMER = "Starting prices are per person based on double occupancy and are intended as a guide. Airfare is not included and will vary based on your departure city, travel dates, airline availability, and cabin class. Every itinerary is thoughtfully customized, and final pricing will reflect your preferred accommodations, experiences, and travel style.";  
