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
// ── URBAN SOVEREIGNS ──  
{  
id: "aman-tokyo",  
name: "Aman Tokyo",  
location: "Tokyo, Japan",  
type: "Urban Sanctuary",  
image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1600",  
description: "A serene zen retreat occupying the top six floors of the Otemachi Tower — Aman's first urban resort with skyline views of Mount Fuji and a 30-meter lobby ceiling inspired by a Japanese lantern.",  
collection: "Urban Sovereigns",  
highlight: "Aman's vertical zen garden — Tokyo from the heavens above Otemachi.",  
exclusiveOffer: "Private tea ceremony with a master of the Urasenke school and complimentary access to the Aman Tokyo spa's Japanese herbal bath."  
},  
{  
id: "hoshinoya-tokyo",  
name: "Hoshinoya Tokyo",  
location: "Tokyo, Japan",  
type: "Urban Ryokan",  
image: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&q=80&w=1600",  
description: "A modern reinterpretation of the traditional Japanese ryokan in the heart of the Otemachi financial district, featuring tatami-mat corridors, a rooftop onsen fed by natural hot springs, and a seasonal kaiseki dining experience.",  
collection: "Urban Sovereigns",  
highlight: "A ryokan reimagined — Tokyo's heartbeat meets centuries of Japanese hospitality.",  
exclusiveOffer: "Complimentary upgrade to a Sakura Suite and a private Edo-era walking tour of Nihonbashi with a local historian."  
},  
{  
id: "the-connaught",  
name: "The Connaught",  
location: "London, England",  
type: "Heritage Hotel",  
image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=1600",  
description: "The epitome of British elegance in Mayfair, recently reimagined with suites by the world's leading designers, three Michelin-starred Hélène Darroze at The Connaught, and the Aman Spa — the only Aman Spa outside an Aman resort.",  
collection: "Urban Sovereigns",  
highlight: "Mayfair's timeless icon — recently reborn with world-class design and an Aman Spa.",  
exclusiveOffer: "Private after-hours tour of the Royal Academy of Arts followed by afternoon tea in the Connaught Reading Room with champagne."  
},  
{  
id: "plaza-athenee",  
name: "Hôtel Plaza Athénée",  
location: "Paris, France",  
type: "Grand Dame",  
image: "https://images.unsplash.com/photo-1581252754431-0d5a61bea3b2?auto=format&fit=crop&q=80&w=1600",  
description: "A legendary palace hotel on Avenue Montaigne, the epicenter of Parisian haute couture, with iconic Eiffel Tower views, a Dior Spa, and the celebrated Alain Ducasse restaurant.",  
collection: "Urban Sovereigns",  
highlight: "Haute couture's home on Avenue Montaigne — Eiffel Tower views, Dior Spa, Parisian perfection.",  
exclusiveOffer: "Complimentary Dior spa journey for two and a private couture atelier tour of Avenue Montaigne's flagship houses."  
},  
{  
id: "the-upper-house",  
name: "The Upper House",  
location: "Hong Kong, China",  
type: "Boutique Hotel",  
image: "https://images.unsplash.com/photo-1562007908-17c67e878c88?auto=format&fit=crop&q=80&w=1600",  
description: "André Fu's minimalist masterpiece perched above Pacific Place — Hong Kong's most coveted address for the discerning traveller with sweeping Victoria Harbour views.",  
collection: "Urban Sovereigns",  
highlight: "André Fu's sky-high sanctuary above Hong Kong's Pacific Place.",  
exclusiveOffer: "Complimentary upgrade to the Entwine Suite and a private art tour of H Queen's galleries with a curator."  
},  
{  
id: "mandarin-oriental-bangkok",  
name: "Mandarin Oriental Bangkok",  
location: "Bangkok, Thailand",  
type: "River Icon",  
image: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&q=80&w=1600",  
description: "The original Oriental, overlooking the Chao Phraya River since 1876 — a legend of Thai hospitality with the author's lounge, two Michelin-starred dining, and the legendary Bamboo Bar.",  
collection: "Urban Sovereigns",  
highlight: "The Oriental since 1876 — Bangkok's legendary river icon and the soul of Thai hospitality.",  
exclusiveOffer: "Private long-tail boat dinner cruise along the Chao Phraya with a traditional Thai dance performance."  
},  
{  
id: "capella-singapore",  
name: "Capella Singapore",  
location: "Sentosa Island, Singapore",  
type: "Urban Resort",  
image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&q=80&w=1600",  
description: "A colonial-meets-contemporary sanctuary set within 30 acres of lush rainforest on Sentosa Island, where the 1880s Tanah Merah bungalows meet Norman Foster's modern glass pavilions.",  
collection: "Urban Sovereigns",  
highlight: "Colonial grandeur in the rainforest — Singapore's most exclusive urban escape.",  
exclusiveOffer: "Complimentary afternoon tea at The Knolls and a private guided tour of the UNESCO-listed Botanic Gardens."  
},  
{  
id: "park-hyatt-sydney",  
name: "Park Hyatt Sydney",  
location: "Sydney, Australia",  
type: "Waterfront Icon",  
image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1600",  
description: "Sydney's most prestigious address on the edge of Circular Quay, with uninterrupted views of the Opera House and Harbour Bridge from every room.",  
collection: "Urban Sovereigns",  
highlight: "Circular Quay's crown jewel — Opera House views from your pillow.",  
exclusiveOffer: "Private harbour cruise aboard a luxury yacht with champagne and canapés at sunset."  
},  
{  
id: "marina-bay-sands-sky",  
name: "Marina Bay Sands (Sky Suites)",  
location: "Singapore, Singapore",  
type: "Sky Resort",  
image: "https://images.unsplash.com/photo-1546412414-e1885f02d5c0?auto=format&fit=crop&q=80&w=1600",  
description: "The world's most iconic sky-hotel, featuring the Sky Suites on the top floors of the 55-storey tower, with exclusive butler service and the legendary infinity pool 200 metres above the city.",  
collection: "Urban Sovereigns",  
highlight: "200 metres above Singapore — the world's most iconic infinity pool and skyline.",  
exclusiveOffer: "Complimentary two-treatment spa journey at Banyan Tree Spa and priority access to the SkyPark observation deck."  
},

// ── ISLAND & COAST ──  
{  
id: "one-only-reethi-rah",  
name: "One&Only Reethi Rah",  
location: "North Malé Atoll, Maldives",  
type: "Island Resort",  
image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=80&w=1600",  
description: "A sprawling Maldivian paradise with 12 pristine beaches, over-water and beach villas, eight restaurants, and a world-renowned spa — set on one of the largest islands in the North Malé Atoll.",  
collection: "Island & Coast",  
highlight: "12 beaches, one island — the Maldives' most expansive luxury playground.",  
exclusiveOffer: "Complimentary sunset dolphin cruise and a private sandbank dinner with personal chef and butler."  
},  
{  
id: "four-seasons-bora-bora",  
name: "Four Seasons Resort Bora Bora",  
location: "Bora Bora, French Polynesia",  
type: "Overwater Icon",  
image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1600",  
description: "The quintessential Bora Bora experience with overwater bungalows suspended above turquoise lagoons, Mount Otemanu as a backdrop, and a Polynesian spa set on its own private motu.",  
collection: "Island & Coast",  
highlight: "Overwater bungalows beneath Mount Otemanu — Bora Bora at its most iconic.",  
exclusiveOffer: "Complimentary overwater bungalow upgrade and a private shark-and-ray snorkelling excursion with a marine biologist."  
},  
{  
id: "cheval-blanc-randheli",  
name: "Cheval Blanc Randheli",  
location: "Noonu Atoll, Maldives",  
type: "Private Island",  
image: "https://images.unsplash.com/photo-1578926378067-7b3b5e4a3c1a?auto=format&fit=crop&q=80&w=1600",  
description: "LVMH's Maldivian masterpiece, crafted by Jean-Louis Deniot, where Indian Ocean villas feature 12-metre pools, a Guerlain spa, and three-Michelin-starred chef dining at Le 1947.",  
collection: "Island & Coast",  
highlight: "LVMH's Maldivian dream — Jean-Louis Deniot design meets Guerlain wellness.",  
exclusiveOffer: "Complimentary 60-minute Guerlain spa treatment per person and a private sunset yacht cruise with champagne."  
},  
{  
id: "the-brando",  
name: "The Brando",  
location: "Tetiaroa, French Polynesia",  
type: "Private Island",  
image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=1600",  
description: "Marlon Brando's visionary eco-luxury retreat on a pristine atoll, accessible only by private plane — 35 villas with private plunge pools, LEED Platinum certification, and the Tetiaroa Society's conservation research.",  
collection: "Island & Coast",  
highlight: "Marlon Brando's eco-luxury vision — a private atoll, yours alone.",  
exclusiveOffer: "Complimentary private plane transfer from Tahiti and a guided eco-tour of the Tetiaroa research station."  
},  
{  
id: "soneva-fushi",  
name: "Soneva Fushi",  
location: "Baa Atoll, Maldives",  
type: "Barefoot Island",  
image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600",  
description: "The original castaway-luxury resort, where Robinson Crusoe meets Michelin-starred dining, an open-air cinema, the world's largest resort spa, and an observatory for stargazing.",  
collection: "Island & Coast",  
highlight: "Castaway luxury redefined — no shoes, no news, pure Maldivian magic.",  
exclusiveOffer: "Complimentary stargazing session at the Soneva Observatory with an astronomer and a private dinner on a sandbank."  
},  
{  
id: "amanyara",  
name: "Amanyara",  
location: "Northwest Point, Turks and Caicos",  
type: "Beach Retreat",  
image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1600",  
description: "Aman's Caribbean outpost on the remote Northwest Point of Providenciales, where minimalist timber pavilions meet powdery white sand and a protected marine reserve.",  
collection: "Island & Coast",  
highlight: "Aman's Caribbean sanctuary — powdery sand, protected reef, pure serenity.",  
exclusiveOffer: "Complimentary private snorkelling excursion to the nearby coral reef and a beachside massage for two."  
},

// ── WILD FRONTIERS ──  
{  
id: "singita-sabi-sand",  
name: "Singita Sabi Sand",  
location: "Sabi Sand Reserve, South Africa",  
type: "Safari Lodge",  
image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1600",  
description: "Singita's founding lodge on the banks of the Sand River within a 45,000-acre private wildlife sanctuary — world-renowned for extraordinary leopard sightings and a pioneering conservation legacy.",  
collection: "Wild Frontiers",  
highlight: "Singita's founding legacy on the Sand River — where leopard sightings are legendary.",  
exclusiveOffer: "Private game drive vehicle with dedicated ranger and tracker, plus a bush dinner under the stars."  
},  
{  
id: "singita-castleton",  
name: "Singita Castleton",  
location: "Madikwe Game Reserve, South Africa",  
type: "Private Safari Villa",  
image: "https://images.unsplash.com/photo-1547970810-dc1eac02d174?auto=format&fit=crop&q=80&w=1600",  
description: "A restyled family safari estate in the malaria-free Madikwe Game Reserve, offering exclusive-use privacy with five en-suite bedrooms, a private pool, and dedicated safari vehicle.",  
collection: "Wild Frontiers",  
highlight: "Your own private safari estate in malaria-free Madikwe — five bedrooms, one family, endless wilderness.",  
exclusiveOffer: "Complimentary bushveld spa treatment for two and a night drive with a wildlife photographer."  
},  
{  
id: "eagle-island",  
name: "Eagle Island Lodge",  
location: "Okavango Delta, Botswana",  
type: "Delta Sanctuary",  
image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1600",  
description: "An intimate safari lodge perched on its own island in the Okavango Delta, where each suite features a private plunge pool and indoor-outdoor bathroom, with mokoro expeditions across the floodplains.",  
collection: "Wild Frontiers",  
highlight: "Your own island in the Okavango — water safaris, mokoro trails, delta magic.",  
exclusiveOffer: "Private helicopter scenic flight over the Okavango Delta and a sunset mokoro ride with champagne."  
},  
{  
id: "explora-patagonia",  
name: "Explora Patagonia",  
location: "Torres del Paine, Chile",  
type: "Mountain Retreat",  
image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1600",  
description: "The definitive Patagonian experience, set on the shores of Lake Pehoé within Torres del Paine National Park — all-inclusive guided expeditions on foot, on horseback, and by bike through some of the world's most dramatic landscapes.",  
collection: "Wild Frontiers",  
highlight: "Torres del Paine at your doorstep — Patagonia's most immersive wilderness experience.",  
exclusiveOffer: "Complimentary private guide for a full-day冰川 trekking expedition and a post-trek soak in the hotel's heated outdoor pool."  
},  
{  
id: "amangiri",  
name: "Amangiri",  
location: "Canyon Point, Utah, USA",  
type: "Desert Resort",  
image: "https://images.unsplash.com/photo-1559087316-1fa63b6a7f2b?auto=format&fit=crop&q=80&w=1600",  
description: "A sculptural desert hideaway set against the dramatic red-rock canyons of the Utah-Arizona border, featuring 34 suites, a 25,000 sq ft Aman Spa, and Camp Sarika's tented pavilions under the desert stars.",  
collection: "Wild Frontiers",  
highlight: "Aman's American masterpiece — red-rock canyons and endless desert silence.",  
exclusiveOffer: "Private hot-air balloon ride over Monument Valley with a gourmet desert picnic and Navajo-guided hike."  
},  
{  
id: "nayara-tented-camp",  
name: "Nayara Tented Camp",  
location: "La Fortuna, Costa Rica",  
type: "Jungle Camp",  
image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1600",  
description: "A luxury tented camp hidden within the Costa Rican rainforest, where canvas-and-teak suites face Arenal Volcano, private plunge pools are fed by thermal springs, and howler monkeys provide the morning soundtrack.",  
collection: "Wild Frontiers",  
highlight: "Arenal Volcano views from your plunge pool — Costa Rica's wild heart, in luxury.",  
exclusiveOffer: "Complimentary guided night walk through the rainforest canopy and a private volcanic hot spring soak."  
},  
{  
id: "nekajui-ritz-carlton",  
name: "Nekajui, a Ritz-Carlton Reserve",  
location: "Papagayo Peninsula, Costa Rica",  
type: "Jungle Reserve",  
image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=1600",  
description: "The newest Ritz-Carlton Reserve, woven into the tropical dry forest of Costa Rica's Papagayo Peninsula, offering private plunge pools in every suite and a wellness sanctuary overlooking the Pacific.",  
collection: "Wild Frontiers",  
highlight: "Costa Rica's newest Reserve — rainforest canopy meets Pacific horizon.",  
exclusiveOffer: "Complimentary sunrise yoga on the Pacific-facing deck and a private catamaran sunset cruise."  
},  
{  
id: "the-datai-langkawi",  
name: "The Datai Langkawi",  
location: "Langkawi, Malaysia",  
type: "Rainforest Sanctuary",  
image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&q=80&w=1600",  
description: "A rainforest-meets-Andaman-Sea icon, where suites are hidden within 10-million-year-old jungle, the Datai Bay is one of the world's best beaches, and the resort is home to a dedicated nature centre and resident naturalist.",  
collection: "Wild Frontiers",  
highlight: "10-million-year-old rainforest meets Andaman Sea — Malaysia's most magical hideaway.",  
exclusiveOffer: "Private guided nature walk with the resident naturalist and a sunset cruise on the Datai Bay."  
},  
{  
id: "six-senses-zighy-bay",  
name: "Six Senses Zighy Bay",  
location: "Musandam Peninsula, Oman",  
type: "Mountain Coast Resort",  
image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=1600",  
description: "A dramatic resort wedged between the jagged Hajar Mountains and the turquoise waters of the Strait of Hormuz — arrival by paragliding is optional, the sense of seclusion is guaranteed.",  
collection: "Wild Frontiers",  
highlight: "Between mountain and sea in Oman — arrive by paraglide, leave transformed.",  
exclusiveOffer: "Complimentary paragliding arrival experience and a private dhow cruise along the fjords of Musandam."  
},

// ── HERITAGE & ESTATE ──  
{  
id: "passalacqua",  
name: "Passalacqua",  
location: "Lake Como, Italy",  
type: "Historic Villa",  
image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1600",  
description: "An 18th-century estate once visited by Napoleon, Bellini, and Churchill, transformed into a 24-suite retreat across three restored buildings on seven acres of terraced gardens above Lake Como.",  
collection: "Heritage & Estate",  
highlight: "Napoleon's Lake Como escape — 24 suites, seven acres, one timeless legacy.",  
exclusiveOffer: "Complimentary lakefront dinner at the Villa's private jetty paired with a sommelier-selected Barolo reserve."  
},  
{  
id: "cipriani",  
name: "Belmond Hotel Cipriani",  
location: "Venice, Italy",  
type: "Island Icon",  
image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600",  
description: "A legendary hideaway on Giudecca Island with the largest private gardens in Venice, an Olympic-length pool, and iconic sunset views across the lagoon — the Venetian address since 1958.",  
collection: "Heritage & Estate",  
highlight: "Giudecca Island's legendary hideaway — Venetian glamour since 1958.",  
exclusiveOffer: "Private water-taxi transfer from Marco Polo Airport and a cooking masterclass with the Cip's Club chef."  
},  
{  
id: "hotel-du-cap-eden-roc",  
name: "Hôtel du Cap-Eden-Roc",  
location: "Antibes, France",  
type: "Riviera Icon",  
image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1600",  
description: "The crown jewel of the French Riviera — a legendary Belle Époque estate where artists, writers, and royalty have summered since 1870, with the iconic Eden-Roc saltwater pool carved from the cliffs.",  
collection: "Heritage & Estate",  
highlight: "The French Riviera's eternal icon — since 1870, the address of legends.",  
exclusiveOffer: "Complimentary cabana at the Eden-Roc pool and a private boat transfer to Île Sainte-Marguerite for a Provençal picnic."  
},  
{  
id: "the-ritz-paris",  
name: "The Ritz Paris",  
location: "Paris, France",  
type: "Palace Hotel",  
image: "https://images.unsplash.com/photo-1581252754431-0d5a61bea3b2?auto=format&fit=crop&q=80&w=1600",  
description: "The world's most famous hotel, restored to its 19th-century splendour in Place Vendôme — home to the legendary Ritz Bar, L'École Ritz Escoffier cooking school, and the Chanel Spa.",  
collection: "Heritage & Estate",  
highlight: "Place Vendôme's crown — the world's most famous hotel, reborn.",  
exclusiveOffer: "Private cooking class at L'École Ritz Escoffier and a champagne tasting in the Ritz Bar's Hemingway corner."  
},  
{  
id: "oberoi-udaivilas",  
name: "The Oberoi Udaivilas",  
location: "Udaipur, India",  
type: "Palace Retreat",  
image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1600",  
description: "A breathtaking palace hotel on the shores of Lake Pichola, where Rajput architecture meets Mewari craftsmanship, with private pools and courtyards inspired by the former royal hunting lodge.",  
collection: "Heritage & Estate",  
highlight: "Lake Pichola's palace — Rajasthan's royal dream brought to life.",  
exclusiveOffer: "Private sunset boat tour of Lake Pichola with views of the Lake Palace and a traditional Rajasthani dinner in the courtyard."  
},  
{  
id: "gleneagles",  
name: "Gleneagles",  
location: "Auchterarder, Scotland",  
type: "Estate Resort",  
image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1600",  
description: "Scotland's most celebrated sporting estate, featuring three championship golf courses, a world-class shooting school, falconry, equestrian pursuits, and the two-Michelin-starred Restaurant Andrew Fairlie.",  
collection: "Heritage & Estate",  
highlight: "Scotland's greatest sporting estate — golf, grouse, and grandeur in the Perthshire hills.",  
exclusiveOffer: "Complimentary round on the King's Course and a whisky-tasting masterclass in the Gleneagles Whisky Room."  
},  
{  
id: "castello-di-reschio",  
name: "Castello di Reschio",  
location: "Umbria, Italy",  
type: "Castle Estate",  
image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1600",  
description: "A thousand-year-old castle estate in the Umbrian countryside, meticulously restored by the Count and Countess Bolza into 36 one-of-a-kind suites surrounded by 3,000 acres of private forests, vineyards, and olive groves.",  
collection: "Heritage & Estate",  
highlight: "A thousand years of Umbrian history — your own castle in the Italian countryside.",  
exclusiveOffer: "Complimentary cooking class with the estate chef and a guided truffle hunt in the Reschio forests."  
},  
{  
id: "faena-buenos-aires",  
name: "Faena Hotel Buenos Aires",  
location: "Buenos Aires, Argentina",  
type: "Art Deco Icon",  
image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1600",  
description: "Alan Faena's theatrical masterpiece in the historic Puerto Madero district — a converted 1902 brick warehouse transformed into a crimson-soaked Art Deco fantasy with the legendary El Mercado restaurant.",  
collection: "Heritage & Estate",  
highlight: "Alan Faena's Buenos Aires opus — Art Deco theatre meets Argentine passion.",  
exclusiveOffer: "Complimentary tango lesson with a professional dancer and dinner at El Mercado with wine pairing."  
},

// ── AMERICAN LEGACY ──  
{  
id: "burj-al-arab",  
name: "Burj Al Arab Jumeirah",  
location: "Dubai, UAE",  
type: "Iconic Landmark",  
image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",  
description: "The world's most iconic hotel, sail-shaped and soaring 321 metres above the Arabian Gulf — every suite is a duplex with floor-to-ceiling windows, private butler service, and a fleet of Rolls-Royces and a helipad.",  
collection: "American Legacy",  
highlight: "The world's most iconic silhouette — Dubai's sail-shaped palace on the Arabian Gulf.",  
exclusiveOffer: "Complimentary private helicopter tour of the Palm Jumeirah and a seven-course dinner at Al Mahara."  
},  
{  
id: "the-lana-dorchester",  
name: "The Lana, Dorchester Collection",  
location: "Dubai, UAE",  
type: "Sky Sanctuary",  
image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1600",  
description: "Dorchester Collection's first Middle Eastern property — a 30-storey architectural statement in Marasi Bay designed by Foster + Partners, featuring the Dior Spa and panoramic views of the Burj Khalifa.",  
collection: "American Legacy",  
highlight: "Foster + Partners meets Dubai — Dorchester Collection's desert stunner.",  
exclusiveOffer: "Complimentary treatment at the Dior Spa and a private dinner at the rooftop restaurant overlooking the Dubai Fountain."  
},  
{  
id: "rosewood-mayakoba",  
name: "Rosewood Mayakoba",  
location: "Riviera Maya, Mexico",  
type: "Lagoon Resort",  
image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1600",  
description: "A Mayan-inspired sanctuary woven through 160 acres of tropical forest, lagoons, and a pristine Caribbean beach — every suite has a private plunge pool and guests arrive by boat to their lagoon-front villa.",  
collection: "American Legacy",  
highlight: "Arrive by boat to your lagoon villa — Riviera Maya's most romantic escape.",  
exclusiveOffer: "Complimentary private cenote tour and a Mayan-inspired spa ritual for two at Sense Spa."  
},  
{  
id: "four-seasons-hualalai",  
name: "Four Seasons Resort Hualalai",  
location: "Kailua-Kona, Hawaii, USA",  
type: "Volcanic Resort",  
image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=1600",  
description: "Hawaii's most celebrated resort, set within a 700-year-old lava flow on the Big Island's Kohala Coast, featuring the legendary King's Pond, an aquarium teeming with tropical fish, and Jack Nicklaus-designed golf.",  
collection: "American Legacy",  
highlight: "700-year-old lava meets Pacific luxury — Hawaii's most celebrated resort.",  
exclusiveOffer: "Complimentary snorkel session at King's Pond and a private Hawaiian cultural tour of the resort's archaeological sites."  
},  
{  
id: "the-breakers",  
name: "The Breakers Palm Beach",  
location: "Palm Beach, Florida, USA",  
type: "Gilded Age Icon",  
image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600",  
description: "A Gilded Age masterpiece on Palm Beach's Billionaires' Row, built by Henry Flagler in 1896 — Italian Renaissance architecture, two championship golf courses, and a 20,000 sq ft indoor-outdoor spa.",  
collection: "American Legacy",  
highlight: "Flagler's Gilded Age masterpiece — Palm Beach luxury since 1896.",  
exclusiveOffer: "Complimentary round on the Ocean Course and a champagne brunch at The Circle restaurant."  
},  
{  
id: "hotel-bel-air",  
name: "Hotel Bel-Air",  
location: "Los Angeles, California, USA",  
type: "Hollywood Hideaway",  
image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1600",  
description: "A secluded 12-acre garden sanctuary in the hills above Beverly Hills — the white swans on the lake, the terracotta hacienda architecture, and the legendary bar have made this Hollywood's most romantic hideaway since 1946.",  
collection: "American Legacy",  
highlight: "Hollywood's most romantic secret — swans, gardens, and star-studded history.",  
exclusiveOffer: "Complimentary in-room private dinner on your terrace and a guided tour of the property's historic gardens with the head gardener."  
},  
{  
id: "the-little-nell",  
name: "The Little Nell",  
location: "Aspen, Colorado, USA",  
type: "Mountain Icon",  
image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&q=80&w=1600",  
description: "Aspen's only ski-in/ski-out hotel at the base of Ajax Mountain — a five-star retreat with an acclaimed wine programme, the legendary Ajax Tavern, and a concierge team that has mastered the art of the perfect powder day.",  
collection: "American Legacy",  
highlight: "Ski-in, ski-out at Ajax Mountain — Aspen's five-star basecamp.",  
exclusiveOffer: "Complimentary ski valet and boot fitting and a private après-ski champagne fondue in the wine cellar."  
},  
{  
id: "acqualina-resort",  
name: "Acqualina Resort & Residences",  
location: "Sunny Isles Beach, Florida, USA",  
type: "Coastal Palace",  
image: "https://images.unsplash.com/photo-1574920161908-3395e5ef3599?auto=format&fit=crop&q=80&w=1600",  
description: "A Mediterranean-inspired palazzo on the shores of Sunny Isles Beach, where every suite faces the Atlantic, the ESPA spa spans three floors, and the service ratio is an almost-unheard-of three staff per guest.",  
collection: "American Legacy",  
highlight: "Miami's Mediterranean palace — three staff per guest, endless Atlantic views.",  
exclusiveOffer: "Complimentary two-treatment spa journey at ESPA Acqualina and a private yacht charter to the nearby islands."  
}  
];  
