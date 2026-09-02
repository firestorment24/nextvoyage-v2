import Link from 'next/link';

export const metadata = {  
  title: 'The Event Ledger — NexVoyage Collective',  
  description:  
    "Curated access to the season's most significant gatherings — from the gridiron to the stage.",  
};

type EventCategory =  
  | 'automotive'  
  | 'maritime'  
  | 'culinary'  
  | 'music'  
  | 'sporting'  
  | 'leadership'  
  | 'hbcus'  
  | 'expedition'  
  | 'wellness'  
  | 'fashion'  
  | 'film'  
  | 'lifestyle'  
  | 'religious'  
  | 'seasonal';

interface ScheduleItem {  
  date: string;  
  location: string;  
}

interface EventItem {  
  date: string;  
  title: string;  
  location: string;  
  subtitle?: string;  
  description?: string;  
  category: EventCategory;  
  featured?: boolean;  
  schedule?: ScheduleItem[];  
}

const CTA_URL = 'https://cal.com/nexvoyagecollective/discovery-call';

const ALL_EVENTS: EventItem[] = [  
  // AUTOMOTIVE & PRESTIGE MOTORING  
  {  
    category: 'automotive',  
    date: 'August 15, 2027',  
    title: "Pebble Beach Concours d'Elegance 2027",  
    location: 'Pebble Beach, California',  
    subtitle: 'Premier Vintage Automotive Showcase',  
    description:  
      'A landmark collector event paired with Post Ranch Inn or The Lodge at Pebble Beach, private movement, concours access, and a Big Sur extension.',  
  },  
  {  
    category: 'automotive',  
    date: 'January 29–30, 2027',  
    title: 'The I.C.E. St. Moritz 2027',  
    location: 'St. Moritz, Switzerland',  
    subtitle: 'International Concours of Elegance',  
    description:  
      "An automotive showcase on the frozen lake, paired with Badrutt's Palace or The Chedi Andermatt.",  
  },  
  {  
    category: 'automotive',  
    date: 'February 3–7, 2027',  
    title: 'Rétromobile 2027',  
    location: 'Paris Expo, Paris, France',  
    subtitle: 'Historic Vehicle Showcase',  
    description:  
      "A Paris collector itinerary centered on historic automobiles, private dining, and the city's design and luxury corridors. Sanctuary pairing: Ritz Paris or Le Bristol.",  
  },  
  {  
    category: 'automotive',  
    date: 'July 15–18, 2027',  
    title: 'Goodwood Festival of Speed',  
    location: 'West Sussex, United Kingdom',  
    subtitle: 'British Motorsport & Prestige Motoring',  
    description:  
      'A landmark summer gathering for collectors, motorsport principals, founders, and families moving through the British social calendar.',  
  },  
  {  
    category: 'automotive',  
    date: 'September 2027',  
    title: 'Chantilly Arts & Elegance Richard Mille',  
    location: 'Château de Chantilly, France',  
    subtitle: 'Automotive Design & French Heritage',  
    description:  
      'A refined concours setting for collectors, luxury-watch clients, art patrons, founders, and design-led families.',  
  },

  // MARITIME & SAILING  
  {  
    category: 'maritime',  
    date: 'July 10–18, 2027',  
    title: "Louis Vuitton 38th America's Cup Match",  
    location: 'Naples, Italy',  
    subtitle: 'Superyacht Program & VIP Race Viewing',  
    description:  
      'Official superyacht programming and VIP viewing in the Bay of Naples. Sanctuary pairing: Villa La Massa or Capri Palace.',  
  },  
  {  
    category: 'maritime',  
    date: 'March 17–21, 2027',  
    title: 'St. Barths Bucket Regatta 2027',  
    location: 'St. Barthélemy',  
    subtitle: 'Superyacht Sailing Showcase',  
    description:  
      'The premier superyacht sailing week, paired with Cheval Blanc St-Barth Isle de France, private movement, and island hospitality.',  
  },  
  {  
    category: 'maritime',  
    date: 'August 1–7, 2027',  
    title: 'Cowes Week Bicentenary',  
    location: 'Isle of Wight, United Kingdom',  
    subtitle: 'British Sailing Heritage',  
    description:  
      'A bicentenary sailing week with race viewing, villa hospitality, regatta-side dining, and a London or Scottish extension.',  
  },

  // CULINARY, ART & DESIGN  
  {  
    category: 'culinary',  
    date: 'October 15–18, 2026',  
    title: 'New York City Wine & Food Festival',  
    location: 'NYC Seaport, New York',  
    subtitle: 'Culinary Culture & Private Dining',  
    description:  
      'A New York long weekend shaped around chef access, premium festival programming, private dining, and a possible Hamptons extension.',  
  },  
  {  
    category: 'culinary',  
    date: 'October 21–25, 2026',  
    title: 'Bahamas Culinary & Arts Festival at Baha Mar',  
    location: 'Nassau, Bahamas',  
    subtitle: 'Caribbean Culinary & Cultural Escape',  
    description:  
      'Festival access, art-led programming, private dining, island transfers, and an optional Harbour Island finish.',  
  },  
  {  
    category: 'culinary',  
    date: 'March 13–18, 2027',  
    title: 'TEFAF Maastricht',  
    location: 'Maastricht, Netherlands',  
    subtitle: 'Art Collectors & Design Patrons',  
    description:  
      'A collector-focused journey with gallery and museum access, discreet transfers, private dining, and a Dutch-Belgian design route.',  
  },  
  {  
    category: 'culinary',  
    date: 'May 8–November 21, 2027',  
    title: 'Venice Architecture Biennale',  
    location: 'Venice, Italy',  
    subtitle: 'Architecture, Design & Italian Craft',  
    description:  
      'A six-month global design and architectural exhibition. Sanctuary pairing: Aman Venice or The Gritti Palace.',  
  },  
  {  
    category: 'culinary',  
    date: 'May 14–18, 2027',  
    title: 'TEFAF New York 2027',  
    location: 'Park Avenue Armory, New York',  
    subtitle: 'Fine Art & Antiques Fair',  
    description:  
      'A collector-focused New York itinerary with private gallery access, discreet transfers, and The Whitby Hotel or a refined Goring NYC corridor.',  
  },  
  {  
    category: 'culinary',  
    date: 'October 23–25, 2026',  
    title: 'Art Basel Paris 2026',  
    location: 'Grand Palais, Paris, France',  
    subtitle: 'European Contemporary Art',  
    description:  
      "The premier European contemporary art gathering, paired with Hôtel de Crillon, private gallery access, and a considered Paris cultural route.",  
  },

  // MUSIC, FESTIVALS & CULTURAL RESIDENCIES  
  {  
    category: 'music',  
    date: 'September 18–20, 2026',  
    title: 'Caribbean Music Awards: Elite Weekend Experience',  
    location: 'Port of Spain, Trinidad & Tobago',  
    subtitle: 'Caribbean Music & Culture',  
    description:  
      "The Caribbean's biggest night, held for the first time in the islands. A three-day Elite Weekend built around the NAPA ceremony — 250+ nominees across 40+ categories — with a welcome reception, steelpan concert, and official after-party. Sanctuary pairing: Hyatt Regency Trinidad or Magdalena Grand Tobago, with island recovery to follow.",  
  },  
  {  
    category: 'music',  
    date: 'September 3 / 6 / 11, 2026',  
    title: 'Tamar Braxton: City Winery Circuit',  
    location: 'Nashville, Pittsburgh, Boston',  
    subtitle: 'Intimate R&B & Soul',  
    description:  
      "An intimate three-city run of R&B and soul in the signature City Winery room, paired with the cities' best tables and a considered stay. Dates and venue availability are confirmed on request.",  
  },  
  {  
    category: 'music',  
    date: 'Fall 2026 — Date TBC',  
    title: 'Global Citizen Festival',  
    location: 'Central Park, New York',  
    subtitle: 'Cause-Driven Cultural Weekend',  
    description:  
      'A cause-driven festival weekend in Central Park featuring Ms. Lauryn Hill, Wyclef Jean, and Lenny Kravitz — paired with a refined Manhattan base and private movement. Date and lineup remain subject to confirmation.',  
  },  
  {  
    category: 'music',  
    date: 'Fall: Nov 13–15, 2026 | Spring: May 15–17, 2027',  
    title: 'Cancun Jazz Festival',  
    location: 'Dreams Jade Resort & Spa, Puerto Morelos, Mexico',  
    subtitle: '12th Annual Destination Smooth-Jazz',  
    description:  
      'Featuring Spyro Gyra, Eric Darius, Michael Lington, Paul Taylor, Regina Belle, and Peter White.',  
  },  
  {  
    category: 'music',  
    date: '2026',  
    title: 'Lion Heart Music Fest 2026',  
    location: 'New Jersey',  
    subtitle: 'Community & Reggae Gathering',  
    description:  
      'An open-air gathering celebrating roots reggae culture and community connection.',  
  },  
  {  
    category: 'music',  
    date: '2026 / 2027',  
    title: 'Afro Plus Fest',  
    location: 'Global / Destination TBA',  
    subtitle: 'African Diaspora Cultural Festival',  
    description:  
      'Celebrating African music, fashion, cuisine, and global diaspora community programming.',  
  },  
  {  
    category: 'music',  
    date: '2027',  
    title: 'AfroNation 2027',  
    location: 'Global Beach Destination',  
    subtitle: "Afrobeats' Global Festival",  
    description:  
      'A premier festival experience uniting Afrobeats artists across exclusive beach destinations.',  
  },  
  {  
    category: 'music',  
    date: '2027',  
    title: 'Soul Camp 2027',  
    location: 'Destination TBA',  
    subtitle: 'Outdoor Wellness & Music Campout',  
    description:  
      'A restorative gathering combining live acoustic music, nature, and expert wellness programming.',  
  },  
  {  
    category: 'music',  
    date: 'September 19, 2026',  
    title: "Remo Fest '26",  
    location: 'Blanco, Texas Hill Country',  
    subtitle: 'Texas Reggae & Wine',  
    description:  
      'A grassroots reggae festival pairing Caribbean rhythms with Texas wine and ranch-country hospitality.',  
  },  
  {  
    category: 'music',  
    date: 'September 24–27, 2026',  
    title: 'C3LLAR Jackson Hole',  
    location: 'Jackson Hole, Wyoming',  
    subtitle: 'Ultra-Luxury Wine Exploration',  
    description:  
      'An alpine wine experience pairing rare vintages with high-altitude wilderness.',  
  },  
  {  
    category: 'music',  
    date: 'October 10, 2026',  
    title: 'Reggae Fest Miami',  
    location: 'Miami, Florida',  
    subtitle: 'South Florida Sound & Sun',  
    description: 'A vibrant coastal reggae celebration in tropical Miami.',  
  },  
  {  
    category: 'music',  
    date: 'October 23, 2026',  
    title: 'Montgomery Comedy Festival',  
    location: 'Montgomery, Alabama',  
    subtitle: 'Sheryl Underwood & Lavell Crawford',  
    description: 'An evening of premier stand-up comedy and entertainment.',  
  },  
  {  
    category: 'music',  
    date: 'January 15–18, 2027',  
    title: '30A Songwriters Festival',  
    location: 'Rosemary Beach, Florida',  
    subtitle: 'Coastal Acoustic Masterclass',  
    description: 'Intimate performances across 30A luxury venues.',  
  },  
  {  
    category: 'music',  
    date: 'April 9–11, 2027',  
    title: 'Soundwave Weekend',  
    location: 'Miramar Beach, Florida',  
    subtitle: 'Emerald Coast Music Retreat',  
    description:  
      'A beachside music weekend pairing live performance, coastal dining, and a slower 30A rhythm.',  
  },  
  {  
    category: 'music',  
    date: 'May 14–16, 2027',  
    title: 'Legends of Rock Expo',  
    location: 'Las Vegas, Nevada',  
    subtitle: 'Classic Rock Icons',  
    description:  
      'Exclusive memorabilia, performances, and collector exhibitions.',  
  },  
  {  
    category: 'music',  
    date: 'September 5–6, 2026',  
    title: 'Pacific Soul Jazz Festival',  
    location: 'UCSD Epstein Family Amphitheater, La Jolla, California',  
    subtitle: 'West Coast Jazz & Soul Weekend',  
    description:  
      'Featuring Robert Glasper, Kenny Lattimore, Mindi Abair, Karen Briggs, and others.',  
  },  
  {  
    category: 'music',  
    date: 'September 13, 2026',  
    title: 'AfroFuture Presents Champion Sound',  
    location: 'The Rooftop at Pier 17, New York',  
    subtitle: 'Afrobeats & Global Sound',  
    description:  
      'Featuring DBN Gogo, DJ Obi, Victony, Bnxn, and more.',  
  },  
  {  
    category: 'music',  
    date: 'October 29–November 9, 2026',  
    title: 'Foo Foo Festival',  
    location: 'Pensacola, Florida',  
    subtitle: 'Arts, Music & Gulf Coast Culture',  
    description:  
      'A flexible arts-and-coast itinerary combining festival programming, private transfers, dining, and regional discovery.',  
  },  
  {  
    category: 'music',  
    date: 'June 23–27, 2027',  
    title: 'Glastonbury Festival 2027',  
    location: 'Somerset, United Kingdom',  
    subtitle: 'Music, Culture & British Summer',  
    description:  
      'A carefully managed festival file pairing luxury glamping, helicopter transfers from London, Ham Yard Hotel, protected movement, and a quiet post-festival reset.',  
  },  
  {  
    category: 'music',  
    date: 'April 9–11 & April 16–18, 2027',  
    title: 'Coachella Valley Music & Arts Festival 2027',  
    location: 'Indio, California',  
    subtitle: 'Desert Music & Contemporary Culture',  
    description:  
      'A private desert festival file with estate buyouts, premium access, protected movement, and Two Bunch Palms or Parker Palm Springs as recovery bases.',  
  },

  // CONCERT TOURS  
  {  
    category: 'music',  
    date: 'Sept 12–Oct 28, 2026',  
    title: 'Chief Keef Live 2026',  
    location: '19 major US cities including Chicago, New York, Los Angeles, and Austin',  
    subtitle: 'National Headlining Run',  
    description:  
      'A 19-date arena and amphitheater tour from the pioneer of Chicago drill.',  
  },  
  {  
    category: 'music',  
    date: '2026 East Coast Run',  
    title: 'Fetty Wap Nostalgia Tour',  
    location: 'Atlantic City, Brooklyn, Charlotte, and Virginia Beach',  
    subtitle: 'Nostalgia Tour',  
    description:  
      'A 2010s hip-hop nostalgia tour featuring VIP meet-and-greet packages.',  
  },  
  {  
    category: 'music',  
    date: 'December 1–15, 2026',  
    title: 'FORMIDABLE! AZNAVOUR',  
    location: '12 North American cities',  
    subtitle: '100th Anniversary Tribute',  
    description:  
      "Starring Jules Grison in a 90-minute journey through Charles Aznavour's legendary songbook.",  
  },  
  {  
    category: 'music',  
    date: 'Aug 15–Oct 11, 2026',  
    title: 'TLC / Salt-N-Pepa / En Vogue',  
    location: 'Atlanta, Las Vegas, and Los Angeles',  
    subtitle: "IT'S ICONIC Tour",  
    description:  
      'Legendary female hip-hop and R&B powerhouses on one stage.',  
  },  
  {  
    category: 'music',  
    date: 'June–December 11, 2026',  
    title: 'Chris Brown & Usher',  
    location: 'Atlanta, New Orleans, and Miami',  
    subtitle: 'Stadium & Arena Spectacular',  
    description:  
      'Unmatched choreography and multi-platinum hits.',  
  },  
  {  
    category: 'music',  
    date: 'Sept 4–5 & Oct 23–24, 2026',  
    title: 'JAŸ-Z: 30th Anniversary',  
    location: 'London and Los Angeles',  
    subtitle: 'Exclusive Retrospective',  
    description:  
      'Intimate career-spanning performances for discerning collectors.',  
  },  
  {  
    category: 'music',  
    date: 'Oct 2026–Jan 2027',  
    title: 'Tyla: A*POP World Tour',  
    location: 'Europe, North America, and Africa',  
    subtitle: 'Global Pop Phenomenon',  
    description:  
      'A global tour from one of African pop music’s defining new voices.',  
  },  
  {  
    category: 'music',  
    date: 'Oct 24–Dec 19, 2026',  
    title: 'JODECI: Forever My Lady',  
    location: 'Pittsburgh, Washington, D.C., New Orleans, and Miami',  
    subtitle: 'Ultimate R&B Slow Jam Tour',  
    description:  
      'VIP access and private box options for legendary R&B.',  
  },  
  {  
    category: 'music',  
    date: 'Sept–Oct 2026',  
    title: 'Young Thug: New Generation',  
    location: 'Atlanta, Dallas, and European dates',  
    subtitle: 'Hip-Hop Innovator Live',  
    description: 'A high-energy cultural milestone tour.',  
  },  
  {  
    category: 'music',  
    date: '2026 Season',  
    title: 'Anthony Hamilton: Soul on Tour',  
    location: 'Various US markets',  
    subtitle: 'Grammy-Winning Soul',  
    description:  
      'Raw, emotive R&B performances in intimate acoustic venues.',  
  },  
  {  
    category: 'music',  
    date: 'Aug–Oct 2026',  
    title: 'CeCe Winans: Come Worship!',  
    location: 'Chicago and European dates',  
    subtitle: 'Gospel Icon Live',  
    description:  
      'An uplifting spiritual evening with supreme vocal majesty.',  
  },  
  {  
    category: 'music',  
    date: 'Aug 20–Sept 10, 2026',  
    title: 'Lil Wayne',  
    location: 'Jones Beach, Knoxville, and select dates',  
    subtitle: 'Rap Monument Live',  
    description:  
      'A legendary catalog performed live in premium amphitheater settings.',  
  },  
  {  
    category: 'music',  
    date: 'July 31–Nov 14, 2026',  
    title: "Sangin' Diva / Diva Life Tour",  
    location: 'New York, DMV, Philadelphia, Atlanta, and Las Vegas',  
    subtitle: 'Vocal Powerhouse Showcase',  
    description:  
      'Celebrating the greatest female voices in soul and R&B.',  
  },  
  {  
    category: 'music',  
    date: 'Aug 19–Sept 18, 2026',  
    title: 'Buddy Guy — 90 Tour',  
    location:  
      'Nashville, Atlanta, Florida, New Orleans, Texas, Los Angeles, San Diego, Denver, Tulsa, and additional markets',  
    subtitle: 'Blues Legacy Tour',  
    description:  
      "A multi-city celebration of Buddy Guy's ninth decade and enduring influence on modern blues.",  
  },  
  {  
    category: 'music',  
    date: '2026–2027 National Tour',  
    title: 'Dance Theatre of Harlem',  
    location:  
      'Chautauqua, New York; the Bronx; Washington, D.C.; Chicago; Seattle; Los Angeles; Detroit; and New York',  
    subtitle: 'American Ballet & Cultural Heritage',  
    description:  
      "A national touring season from one of America's most distinguished ballet companies.",  
  },  
  {  
    category: 'music',  
    date: 'Sept 25–Oct 11, 2026',  
    title: 'Love Flamenco World Tour',  
    location: 'United States dates',  
    subtitle: 'Flamenco, Music & Dance',  
    description: 'U.S. dates sponsored by Air Europa.',  
  },  
  {  
    category: 'music',  
    date: '2026 Tour Series',  
    title: 'Kim Scott',  
    location:  
      'Norfolk Waterfront Jazz Festival, Gulf Coast Jazz Festival, Jazz in the Park, and Florida Smooth Jazz Weekend',  
    subtitle: 'Smooth Jazz Tour Series',  
    description:  
      'A 2026 series of festival appearances across waterfront, park, and destination jazz settings.',  
  },  
  {  
    category: 'music',  
    date: 'Jan 15–16 & Jan 22–23, 2027',  
    title: 'Eagles — Live in Concert at Sphere',  
    location: 'Sphere, Las Vegas',  
    subtitle: 'Las Vegas Residency',  
    description:  
      'Four January 2027 performances paired with high-end weekend suites and Four Seasons Las Vegas.',  
  },

  // SPORTING & EQUESTRIAN  
  {  
    category: 'sporting',  
    date: 'March 8–14, 2027',  
    title: 'The Players Championship',  
    location: 'TPC Sawgrass, Ponte Vedra Beach, Florida',  
    subtitle: 'Golf’s Fifth Major',  
    description:  
      "Golf's fifth major on the Stadium Course. A home-state Florida play with practice-round access, hospitality curation, and recovery at Ponte Vedra Inn & Club, One Ocean Resort & Spa, or Sawgrass Marriott.",  
  },  
  {  
    category: 'sporting',  
    date: '2027 — Dates TBC',  
    title: 'International Tennis Hall of Fame',  
    location: 'Newport, Rhode Island',  
    subtitle: 'Grass-Court Tennis & Induction Celebration',  
    description:  
      "The Cerity Partners Hall of Fame Open grass-court stop and the Induction Celebration on the historic Horseshoe Court. Sanctuary pairing: Hammetts Hotel, with Newport's Gilded Age mansions and harbor cruising around it.",  
  },  
  {  
    category: 'sporting',  
    date: 'April 8–11, 2027',  
    title: 'The Masters Tournament 2027',  
    location: 'Augusta, Georgia',  
    subtitle: 'Augusta National Spring Showcase',  
    description:  
      'A private Augusta experience with estate accommodations, private chef concierge support, tournament hospitality, and seamless local movement.',  
  },  
  {  
    category: 'sporting',  
    date: 'May 1, 2027',  
    title: '153rd Kentucky Derby',  
    location: 'Louisville, Kentucky',  
    subtitle: 'Millionaires Row Hospitality',  
    description:  
      'A Derby week experience shaped around hospitality, private country-house buyouts, bourbon, dining, and refined movement.',  
  },  
  {  
    category: 'sporting',  
    date: 'July 11–18, 2027',  
    title: 'The 155th Open Championship at St Andrews',  
    location: 'St Andrews, Scotland',  
    subtitle: 'Golf, Heritage & Estate Living',  
    description:  
      'Road Hole hospitality, private dining, chauffeured movement, and Gleneagles or historic St Andrews residences.',  
  },  
  {  
    category: 'sporting',  
    date: 'September 13–19, 2027',  
    title: 'Ryder Cup 2027',  
    location: 'Adare Manor, County Limerick, Ireland',  
    subtitle: 'Elite Golf Hospitality',  
    description:  
      'A premium golf itinerary anchored by Adare Manor estate hospitality, private transfers, and an Ireland extension.',  
  },  
  {  
    category: 'sporting',  
    date: 'Summer 2027',  
    title: 'Formula 1 British Grand Prix',  
    location: 'Silverstone, United Kingdom',  
    subtitle: 'Motorsport & British Hospitality',  
    description:  
      'A British motorsport circuit combining London, Silverstone hospitality, private transfers, and a countryside reset.',  
  },  
  {  
    category: 'sporting',  
    date: 'April 16–18, 2027',  
    title: 'Saudi Arabian Grand Prix',  
    location: 'Jeddah, Saudi Arabia',  
    subtitle: 'Red Sea Motorsport Weekend',  
    description:  
      'Race hospitality, private transfers, contemporary dining, heritage programming, and an optional desert extension.',  
  },  
  {  
    category: 'sporting',  
    date: '2027 Tournament Window',  
    title: 'Rugby World Cup 2027',  
    location: 'Australia',  
    subtitle: 'Multi-City Sporting Portfolio',  
    description:  
      'A multi-city tournament portfolio pairing match sequencing with private movement, wine-country recovery, and Australian wilderness extensions.',  
  },  
  {  
    category: 'sporting',  
    date: 'June 2027',  
    title: 'Royal Ascot',  
    location: 'Berkshire, United Kingdom',  
    subtitle: 'British Equestrian Social Calendar',  
    description:  
      'A full Ascot week with private transport, hospitality, wardrobe planning, race-day hosting, and a country-house extension.',  
  },  
  {  
    category: 'sporting',  
    date: 'Late June / Early July 2027',  
    title: 'Wimbledon Championships 2027',  
    location: 'All England Club, London',  
    subtitle: 'Royal Box & Private Hospitality',  
    description:  
      'A London tennis itinerary with private hospitality curation, The Goring or Ham Yard Hotel, and a tailored city extension.',  
  },

  // GLOBAL LEADERSHIP & SUMMITS  
  {  
    category: 'leadership',  
    date: 'September 22–24, 2026',  
    title: 'ProcureCon Europe',  
    location: 'Cologne, Germany',  
    subtitle: 'European Procurement Leadership',  
    description:  
      "WBR's procurement summit for CPOs and sourcing leaders, paired with Excelsior Hotel Ernst and a refined Rhine-city stay.",  
  },  
  {  
    category: 'leadership',  
    date: 'September 28–30, 2026',  
    title: 'ProcureCon East',  
    location: 'Boston, Massachusetts',  
    subtitle: 'Sourcing & Procurement Leadership',  
    description:  
      'A Boston sourcing-and-procurement program with recovery at Four Seasons Boston, The Newbury, or Raffles Boston.',  
  },  
  {  
    category: 'leadership',  
    date: 'September 30–October 2, 2026',  
    title: 'Yardstick Innovation Institute',  
    location: 'Ojai Valley Inn, California',  
    subtitle: 'Executive Performance Retreat',  
    description:  
      'An immersive executive retreat on human and tech-driven performance — for senior executives, founders, and creators. On-site luxury at Ojai Valley Inn, with a Santa Barbara extension.',  
  },  
  {  
    category: 'leadership',  
    date: 'October 2–4, 2026',  
    title: 'AASCP Fall Scientific Session',  
    location: 'Hyatt Regency Miami, Florida',  
    subtitle: 'Regenerative Medicine Summit',  
    description:  
      'Practitioners and longevity researchers exploring stem cell therapies and healthspan optimization.',  
  },  
  {  
    category: 'leadership',  
    date: 'October 5–6, 2026',  
    title: 'ProcureCon MRO',  
    location: 'Atlanta, Georgia',  
    subtitle: 'Maintenance, Repair & Operations Procurement',  
    description:  
      'The maintenance, repair, and operations procurement conference, paired with The Whitley, St. Regis Atlanta, or Waldorf Astoria Buckhead.',  
  },  
  {  
    category: 'leadership',  
    date: 'October 8–10, 2026',  
    title: 'Wisdom in the Age of AI',  
    location: 'Calvin University, Grand Rapids, Michigan',  
    subtitle: 'Cross-Disciplinary Ethics & Innovation',  
    description:  
      'Examining artificial intelligence across education, business, healthcare, and the arts.',  
  },  
  {  
    category: 'leadership',  
    date: 'October 8–9, 2026',  
    title: 'Mental Health America Conference',  
    location: 'Capital Hilton, Washington, D.C.',  
    subtitle: 'National Advocacy & Behavioral Health',  
    description:  
      "Leading clinicians, advocates, and wellness pioneers convening in the nation's capital.",  
  },  
  {  
    category: 'leadership',  
    date: 'October 9–10, 2026',  
    title: 'Caribbean AI Summit',  
    location: 'San Juan, Puerto Rico',  
    subtitle: 'Artificial Intelligence & Innovation',  
    description:  
      "The Caribbean's largest AI conference — three tracks, 32 speakers, and an Inner Circle VIP tier. A San Juan business-and-recovery program.",  
  },  
  {  
    category: 'leadership',  
    date: 'October 12–13, 2026',  
    title: 'Startup Mountain Summit',  
    location: 'Johnson City, Tennessee',  
    subtitle: 'Appalachian Founder Retreat',  
    description:  
      'Early-stage founders, a pitch competition, and high-adventure networking in the Blue Ridge foothills.',  
  },  
  {  
    category: 'leadership',  
    date: 'October 12–14, 2026',  
    title: 'Summit Napa Valley',  
    location: 'Napa Valley, California',  
    subtitle: 'Exclusive CEO & Founder Gathering',  
    description:  
      'Private networking and estate tastings for visionary leadership.',  
  },  
  {  
    category: 'leadership',  
    date: 'October 12–15, 2026',  
    title: 'The Battery Show North America',  
    location: 'Huntington Place, Detroit, Michigan',  
    subtitle: 'Advanced Battery & EV Technology',  
    description:  
      'The advanced battery and EV technology show at Huntington Place. Detroit recovery: The Godfrey, Detroit Foundation Hotel, or Shinola Hotel.',  
  },  
  {  
    category: 'leadership',  
    date: 'October 13, 2026',  
    title: 'CX Circle NYC',  
    location: 'The Glasshouse, New York',  
    subtitle: 'Digital Experience Leadership',  
    description:  
      "Contentsquare's flagship digital-experience summit for product and customer-experience leaders, paired with Baccarat, The Mark, or Crosby Street Hotel.",  
  },  
  {  
    category: 'leadership',  
    date: 'October 15–18, 2026',  
    title: 'Black Travel Summit',  
    location: 'Milwaukee, Wisconsin',  
    subtitle: 'Travel Industry & Diaspora Culture',  
    description:  
      'The global platform fusing Afro-diasporic culture, industry innovation, and community impact. Milwaukee recovery: The Pfister, Saint Kate, or Kimpton Journeyman.',  
  },  
  {  
    category: 'leadership',  
    date: 'October 20, 2026',  
    title: 'CX Circle Stockholm',  
    location: 'Fotografiska Museum, Stockholm',  
    subtitle: 'Nordic Digital Experience Leadership',  
    description:  
      'Nordic digital-experience leadership at Fotografiska, paired with Ett Hem or Grand Hôtel Stockholm.',  
  },  
  {  
    category: 'leadership',  
    date: 'November 2–5, 2026',  
    title: 'AIBC World Rome',  
    location: 'Fiera Roma, Rome',  
    subtitle: 'AI, Blockchain & Fintech Summit',  
    description:  
      "SiGMA's AI, blockchain, and fintech summit for founders, VCs, and policy leaders. Rome recovery: Hotel de Russie, Rome Cavalieri, or Bulgari Hotel Roma.",  
  },  
  {  
    category: 'leadership',  
    date: 'November 9–11, 2026',  
    title: 'ProcureCon Marketing',  
    location: 'Phoenix, Arizona',  
    subtitle: 'Marketing Procurement Leadership',  
    description:  
      'Marketing procurement leadership at Wildhorse Pass, paired with Four Seasons Scottsdale, The Phoenician, or Sanctuary Camelback Mountain.',  
  },  
  {  
    category: 'leadership',  
    date: 'November 9–12, 2026',  
    title: 'Web Summit',  
    location: 'Parque das Nações, Lisbon, Portugal',  
    subtitle: 'Global Technology Summit',  
    description:  
      'The global tech summit with Centre Stage, Policy, Venture, and Energy summits under one roof. Lisbon’s design-led hotels and riverside dining as the base.',  
  },  
  {  
    category: 'leadership',  
    date: 'November 19, 2026',  
    title: 'CX Circle South Europe',  
    location: 'Le Cavallerizze, Milan',  
    subtitle: 'Southern European Digital Experience',  
    description:  
      'Southern Europe’s digital-experience leaders, paired with Four Seasons Milano or Armani Hotel Milano.',  
  },  
  {  
    category: 'leadership',  
    date: 'December 16–17, 2026',  
    title: 'America Business Forum Miami',  
    location: 'Kaseya Center, Miami, Florida',  
    subtitle: 'The Biggest Stage on Earth',  
    description:  
      'A gathering of global icons, heads of state, and business leaders. Premium tiers and hospitality structures require confirmation.',  
  },  
  {  
    category: 'leadership',  
    date: 'January 18–22, 2027',  
    title: 'World Economic Forum — Davos',  
    location: 'Davos, Switzerland',  
    subtitle: 'Global Leadership & Strategic Dialogue',  
    description:  
      'C-suite and family-office bilateral networking paired with The Omnia Zermatt or private Davos chalets.',  
  },  
  {  
    category: 'leadership',  
    date: 'February 21–24, 2027',  
    title: 'RILA LINK',  
    location: 'Gaylord Palms, Kissimmee, Florida',  
    subtitle: 'Retail Supply-Chain Leadership',  
    description:  
      "The retail supply-chain conference for retail operations and supply-chain leadership, paired with Orlando's luxury corridor.",  
  },  
  {  
    category: 'leadership',  
    date: 'March 2027 — Dates TBC',  
    title: 'AIBC Eurasia',  
    location: 'Dubai, UAE',  
    subtitle: 'AI, Blockchain & Fintech',  
    description:  
      "SiGMA's expanded Middle East commitment with a Ras Al Khaimah day. Dubai recovery: Burj Al Arab, Four Seasons Dubai, or Atlantis The Royal.",  
  },  
  {  
    category: 'leadership',  
    date: 'May 2–5, 2027',  
    title: 'Milken Institute Global Conference 2027',  
    location: 'Beverly Hills, California',  
    subtitle: 'Global Finance, Policy & Leadership',  
    description:  
      'A high-performance leadership file for finance, policy, and business principals, paired with Hotel Bel-Air or The Beverly Hills Hotel.',  
  },  
  {  
    category: 'leadership',  
    date: 'September 20–22, 2027',  
    title: 'GSX 2027',  
    location: 'Orlando, Florida',  
    subtitle: 'Global Security Exchange',  
    description:  
      'The Global Security Exchange for CISOs and enterprise security leadership, paired with Four Seasons Orlando, Ritz-Carlton Grande Lakes, or Waldorf Astoria Orlando.',  
  },  
  {  
    category: 'leadership',  
    date: 'September 22–24, 2027',  
    title: 'Groceryshop 2027',  
    location: 'Mandalay Bay, Las Vegas, Nevada',  
    subtitle: 'Consumer, Retail & Innovation Summit',  
    description:  
      'A high-performance work file built around a quiet base, meeting-ready movement, hospitality, and protected recovery time.',  
  },

  // HBCU CLASSICS & HOMECOMINGS  
  {  
    category: 'hbcus',  
    date: 'September 6–November 28, 2026',  
    title: '2026 HBCU Classics Series',  
    location: 'Nine-event national schedule',  
    subtitle: 'Football, Culture & Homecoming Tradition',  
    description:  
      'A curated season connecting storied rivalries, alumni communities, and destination weekends across the United States.',  
    featured: true,  
    schedule: [  
      {  
        date: 'Sept 6, 2026',  
        location:  
          'Orange Blossom Classic — Hard Rock Stadium, Miami Gardens, Florida',  
      },  
      {  
        date: 'Sept 12, 2026',  
        location: 'Aggie-Eagle Classic — Durham, North Carolina',  
      },  
      {  
        date: 'Sept 12, 2026',  
        location: 'Southern Heritage Classic — Memphis, Tennessee',  
      },  
      {  
        date: 'Sept 26, 2026',  
        location: 'State Fair Classic — Dallas, Texas',  
      },  
      {  
        date: 'Oct 3, 2026',  
        location: 'Battle of the Real HU — Washington, D.C.',  
      },  
      {  
        date: 'Oct 31, 2026',  
        location: 'Magic City Classic — Birmingham, Alabama',  
      },  
      {  
        date: 'Nov 21, 2026',  
        location: 'Florida Classic — Orlando, Florida',  
      },  
      {  
        date: 'Nov 28, 2026',  
        location:  
          'Bayou Classic — Caesars Superdome, New Orleans, Louisiana',  
      },  
    ],  
  },

  // EXPEDITION & PINNACLE TRAVEL  
  {  
    category: 'expedition',  
    date: 'December 2026–January 2027 Season',  
    title: 'Antarctic Fly-In Expeditions',  
    location: 'Queen Maud Land, Antarctica',  
    subtitle: 'Polar Expedition & Finite Travel',  
    description:  
      'Ultra-high-net-worth private-jet interior camps and a once-in-a-lifetime polar file centered on White Desert’s Whichaway Camp.',  
  },  
  {  
    category: 'expedition',  
    date: 'July 8–19, 2027',  
    title: 'Selar Solar-Sailing Svalbard Expedition',  
    location: 'Svalbard, Norway',  
    subtitle: 'High Arctic Exploration',  
    description:  
      'Carbon-neutral small-vessel polar exploration with Amos Nachoum, paired with an Oslo luxury base and solar expedition vessel.',  
  },  
  {  
    category: 'expedition',  
    date: '2027 Seasons',  
    title: 'Solar-Sailing Arctic Expeditions',  
    location: 'Svalbard and Norway',  
    subtitle: 'High Arctic Exploration',  
    description:  
      'An Arctic corridor combining Norway, a solar-sailing expedition, Iceland recovery, private guides, and an optional Greenland extension.',  
  },  
  {  
    category: 'expedition',  
    date: 'Summer 2027',  
    title: 'HX Expeditions: Total Solar Eclipse & High Arctic',  
    location: 'Greenland',  
    subtitle: 'Rare Natural Phenomenon',  
    description:  
      'A scientific and restorative expedition combining eclipse positioning, private photography support, Greenland immersion, and Iceland recovery.',  
  },

  // WELLNESS  
  {  
    category: 'wellness',  
    date: 'Ongoing / 2027 Seasons',  
    title: 'Chiva-Som Longevity Immersion',  
    location: 'Hua Hin, Thailand',  
    subtitle: 'Data-Driven Medical Wellness',  
    description:  
      'A restorative longevity program at Chiva-Som combining structured wellness, medical insight, and protected recovery time.',  
  },  
  {  
    category: 'wellness',  
    date: 'October 2026 / 2027 Dates',  
    title: 'Kamalaya x Grand Resort Bad Ragaz Pop-Up',  
    location: 'Bad Ragaz, Switzerland',  
    subtitle: 'Holistic Vitality & Alpine Mineral Wellness',  
    description:  
      'A limited wellness collaboration pairing Kamalaya’s holistic approach with the alpine mineral setting of Grand Resort Bad Ragaz.',  
  },

  // FASHION & DESIGN  
  {  
    category: 'fashion',  
    date: 'November 10–12, 2026',  
    title: 'Adobe MAX',  
    location: 'Miami Beach Convention Center, Florida',  
    subtitle: 'Creative Technology & Design',  
    description:  
      "Adobe's flagship creativity conference, leading into Art Basel Miami Beach season. Miami Beach recovery: Faena, EDITION, or the Design District corridor.",  
  },  
  {  
    category: 'fashion',  
    date: 'September 28–October 6, 2027',  
    title: 'Paris Fashion Week — SS27',  
    location: 'Paris, France',  
    subtitle: 'Haute Couture & Atelier Access',  
    description:  
      'A fashion-week itinerary shaped around atelier appointments, front-row salon access, private dining, and a refined Paris base at Ritz Paris or Hôtel Plaza Athénée.',  
  },  
  {  
    category: 'fashion',  
    date: 'May 3, 2027',  
    title: 'The Met Gala 2027',  
    location: 'The Metropolitan Museum of Art, New York',  
    subtitle: 'Fashion’s Defining Social Evening',  
    description:  
      'A New York fashion and culture file surrounding the Met Gala, with private styling, dining, discreet city movement, and The Whitby or Warren Street Hotel.',  
  },

  // FILM & ENTERTAINMENT  
  {  
    category: 'film',  
    date: 'January 10, 2027',  
    title: 'Golden Globe Awards 2027',  
    location: 'Los Angeles, California',  
    subtitle: 'Hollywood Awards Season',  
    description:  
      'An awards-season itinerary paired with Sunset Tower Hotel or Hotel Bel-Air, private dining, and protected Los Angeles movement.',  
  },  
  {  
    category: 'film',  
    date: 'January 21–31, 2027',  
    title: 'Sundance Film Festival 2027',  
    location: 'Boulder, Colorado',  
    subtitle: 'Independent Cinema & Creative Leadership',  
    description:  
      'An independent cinema program paired with Mountain West luxury boutique lodges, private movement, and a restorative winter extension.',  
  },

  // LIFESTYLE & HOLIDAY  
  {  
    category: 'lifestyle',  
    date: 'February 23–26, 2027',  
    title: 'Forbes Travel Guide Luxury Summit 2027',  
    location: 'Monaco',  
    subtitle: 'Global Hospitality Leadership',  
    description:  
      'A luxury hospitality leadership gathering paired with Hôtel de Paris Monte-Carlo and a carefully managed Côte d’Azur itinerary.',  
  },  
  {  
    category: 'lifestyle',  
    date: 'December 31, 2026–January 1, 2027',  
    title: "St. Barths New Year's Eve Superyacht Fleet",  
    location: 'St. Barthélemy',  
    subtitle: 'Caribbean Social Milestone',  
    description:  
      'A discreet New Year’s Eve experience centered on superyacht culture, island dining, and Eden Rock St Barths.',  
  },  
  {  
    category: 'lifestyle',  
    date: 'Nov 11–December 30, 2026',  
    title: 'Mannheim Steamroller Christmas',  
    location: '80+ US cities including Atlanta, West Palm Beach, Detroit, and Denver',  
    subtitle: 'Longest-Running Holiday Tour in History',  
    description:  
      'Iconic classical-rock holiday arrangements celebrating more than 35 years of seasonal magic.',  
  },  
  {  
    category: 'lifestyle',  
    date: 'Nov 7, 2026–Jan 5, 2027',  
    title: 'Disney Jollywood Nights',  
    location: 'Orlando, Florida',  
    subtitle: 'Glitz, Glamour & Holiday Magic',  
    description:  
      'An after-hours holiday celebration with curated entertainment and gourmet dining.',  
  },  
  {  
    category: 'lifestyle',  
    date: 'Nov 20–Dec 31, 2026',  
    title: "Hardy's Holiday Village",  
    location: 'Nemacolin, Pennsylvania',  
    subtitle: 'Mid-Atlantic Winter Wonderland',  
    description:  
      'Immersive holiday luxury set within the private Nemacolin estate.',  
  },  
  {  
    category: 'lifestyle',  
    date: '2026–2027 Season',  
    title: 'MARVIN: The Marvin Gaye Musical',  
    location: 'Various theatrical markets',  
    subtitle: 'World Premiere Stage Event',  
    description:  
      'Celebrating the life and enduring legacy of an American soul legend.',  
  },

  // RELIGIOUS & FAMILY TRAVEL  
  {  
    category: 'religious',  
    date: 'January 11–25, 2027',  
    title: 'Royal Caribbean Yeshiva Week 2027',  
    location: 'Nine sailings across the Caribbean',  
    subtitle: 'Kosher Family Cruising',  
    description:  
      'Kosher cruising for Yeshiva Week with supervised Glatt Kosher dining at Solarium Bistro across nine sailings aboard Wonder, Odyssey, Oasis, Ovation, and Symphony of the Seas. Booking and sailing-specific details verified on request.',  
  },

  // SEASONAL & CULTURAL  
  {  
    category: 'seasonal',  
    date: 'Late March–Early April 2027',  
    title: 'Japan Cherry Blossom Season (Sakura)',  
    location: 'Tokyo–Kyoto corridor',  
    subtitle: 'Seasonal Cultural Journey',  
    description:  
      'The Golden Route at peak bloom, with Six Senses Kyoto, Capella Kyoto, or Park Hyatt Tokyo as sanctuary bases, private guides, and a Kanazawa “little Kyoto” extension.',  
  },  
];

const CATEGORY_SECTIONS: {  
  category: EventCategory;  
  title: string;  
  icon: string;  
}[] = [  
  {  
    category: 'automotive',  
    title: 'Automotive & Prestige Motoring',  
    icon: '◈',  
  },  
  {  
    category: 'maritime',  
    title: 'Maritime & Sailing Milestones',  
    icon: '⌁',  
  },  
  {  
    category: 'culinary',  
    title: 'Culinary, Art & Design',  
    icon: '✧',  
  },  
  {  
    category: 'music',  
    title: 'Music, Festivals & Cultural Residencies',  
    icon: '♫',  
  },  
  {  
    category: 'sporting',  
    title: 'Sporting & Equestrian Traditions',  
    icon: '♞',  
  },  
  {  
    category: 'leadership',  
    title: 'Global Leadership & Summits',  
    icon: '❖',  
  },  
  {  
    category: 'hbcus',  
    title: 'HBCU Classics & Homecomings',  
    icon: '✦',  
  },  
  {  
    category: 'expedition',  
    title: 'Expedition & Pinnacle Travel',  
    icon: '✧',  
  },  
  {  
    category: 'wellness',  
    title: 'Wellness & Restorative Retreats',  
    icon: '◌',  
  },  
  {  
    category: 'fashion',  
    title: 'Fashion & Design',  
    icon: '◇',  
  },  
  {  
    category: 'film',  
    title: 'Film & Entertainment',  
    icon: '◎',  
  },  
  {  
    category: 'lifestyle',  
    title: 'Lifestyle & Holiday',  
    icon: '❄',  
  },  
  {  
    category: 'religious',  
    title: 'Religious & Family Travel',  
    icon: '✦',  
  },  
  {  
    category: 'seasonal',  
    title: 'Seasonal & Cultural',  
    icon: '✿',  
  },  
];

export default function EventsPage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] px-6 pb-24 pt-32 text-white selection:bg-[#C5A059]/30 md:px-12">  
      <div className="mx-auto max-w-6xl space-y-16">  
        <header className="mx-auto max-w-3xl space-y-4 border-b border-white/10 pb-12 text-center">  
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5A059]">  
            Sanctuary Culture  
          </p>

          <h1 className="text-4xl font-light tracking-tight text-white md:text-6xl">  
            The Event Ledger  
          </h1>

          <p className="text-sm leading-relaxed text-white/60 md:text-base">  
            Curated access to the season&apos;s most significant gatherings —  
            from collector culture and sailing milestones to the stage,  
            summits, sporting traditions, and rare expeditions.  
          </p>

          <p className="pt-3 text-xs leading-relaxed text-white/40">  
            Dates, venues, hospitality structures, and availability are  
            planning references and are confirmed before any client-facing  
            proposal is released.  
          </p>  
        </header>

        <div className="space-y-20">  
          {CATEGORY_SECTIONS.map((section) => (  
            <EventSection  
              key={section.category}  
              title={section.title}  
              icon={section.icon}  
              category={section.category}  
            />  
          ))}  
        </div>

        <section className="space-y-6 border-t border-white/10 pt-16 text-center">  
          <h2 className="text-2xl font-light text-white">Secure Your Access</h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60">  
            Every event is paired with the right base, movement, access  
            architecture, and recovery time.  
          </p>

          <Link  
            href={CTA_URL}  
            target="_blank"  
            rel="noopener noreferrer"  
            className="inline-block bg-[#C5A059] px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-black transition-colors hover:bg-[#d4af37]"  
          >  
            Schedule a Discovery Call  
          </Link>  
        </section>  
      </div>  
    </main>  
  );  
}

function EventSection({  
  title,  
  icon,  
  category,  
}: {  
  title: string;  
  icon: string;  
  category: EventCategory;  
}) {  
  const events = ALL_EVENTS.filter((event) => event.category === category);

  if (events.length === 0) {  
    return null;  
  }

  return (  
    <section className="space-y-8">  
      <div className="flex items-center gap-4 border-b border-white/10 pb-4">  
        <span className="text-2xl text-[#C5A059]">{icon}</span>

        <h2 className="text-2xl font-light tracking-wide text-white">  
          {title}  
        </h2>  
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">  
        {events.map((event, index) => (  
          <EventCard key={`${event.title}-${index}`} event={event} />  
        ))}  
      </div>  
    </section>  
  );  
}

function EventCard({ event }: { event: EventItem }) {  
  return (  
    <article  
      className={`flex flex-col justify-between border border-white/10 bg-[#111111] p-6 transition-colors hover:border-[#C5A059]/40 ${  
        event.featured ? 'md:col-span-2' : ''  
      }`}  
    >  
      <div className="space-y-3">  
        <div className="flex flex-col justify-between gap-2 text-xs font-medium uppercase tracking-wider text-[#C5A059] md:flex-row md:gap-4">  
          <span>{event.date}</span>

          {event.subtitle && (  
            <span className="text-white/40 md:text-right">  
              {event.subtitle}  
            </span>  
          )}  
        </div>

        <h3 className="text-xl font-normal text-white">{event.title}</h3>

        <p className="text-xs tracking-wide text-white/60">  
          {event.location}  
        </p>

        {event.description && (  
          <p className="border-t border-white/5 pt-2 text-sm leading-relaxed text-white/70">  
            {event.description}  
          </p>  
        )}

        {event.schedule && event.schedule.length > 0 && (  
          <div className="mt-5 border-t border-white/10 pt-5">  
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#C5A059]">  
              Event Schedule  
            </p>

            <div className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">  
              {event.schedule.map((item, index) => (  
                <div  
                  key={`${item.date}-${index}`}  
                  className="border-b border-white/5 pb-3"  
                >  
                  <p className="text-xs font-medium text-white">  
                    {item.date}  
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-white/55">  
                    {item.location}  
                  </p>  
                </div>  
              ))}  
            </div>  
          </div>  
        )}  
      </div>

      <div className="mt-6 border-t border-white/10 pt-6">  
        <Link  
          href={CTA_URL}  
          target="_blank"  
          rel="noopener noreferrer"  
          className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#C5A059] transition-colors hover:text-white"  
        >  
          Inquire About Curated Itinerary →  
        </Link>  
      </div>  
    </article>  
  );  
}  
