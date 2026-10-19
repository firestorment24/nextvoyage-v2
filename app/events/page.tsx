import type { Metadata } from 'next';  
import Link from 'next/link';  
import { Suspense } from 'react';  
import EventLedger from '@/components/EventLedger';

export const metadata: Metadata = {  
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

const CTA_URL =  
  'https://cal.com/nexvoyagecollective/discovery-call';

const ALL_EVENTS: EventItem[] = [  
  // AUTOMOTIVE & PRESTIGE MOTORING

  {  
    category: 'automotive',  
    date: 'May 21–23, 2027',  
    title: "Concorso d'Eleganza Villa d'Este",  
    location: 'Lake Como, Italy',  
    subtitle: 'Collector Automotive & Design Event',  
    description:  
      'A collector-focused automotive gathering paired with Grand Hotel Villa d’Este or Mandarin Oriental, Lake Como, private movement, lakeside dining, and a refined Como design corridor.',  
  },  
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
    date: 'December 2–6, 2026',  
    title: 'Art Basel Miami Beach',  
    location:  
      'Miami Beach Convention Center, Miami Beach, Florida',  
    subtitle: 'Collectors, Art & South Florida Culture',  
    description:  
      'VIP preview days on December 2–3 followed by public dates from December 4–6. A South Florida collector itinerary with private gallery access, discreet transfers, and a considered Miami Beach or Design District corridor.',  
  },  
  {  
    category: 'culinary',  
    date: 'January 26–30, 2027',  
    title: 'Art Basel Qatar 2027',  
    location: 'Doha Design District / M7, Doha, Qatar',  
    subtitle: 'Gulf Art & Design',  
    description:  
      'The second edition of Art Basel Qatar, shaped around the theme “between.” A Gulf art-and-design corridor with private movement, executive hospitality, and a considered Doha base.',  
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
      'The premier European contemporary art gathering, paired with Hôtel de Crillon, private gallery access, and a considered Paris cultural route.',  
  },

  // MUSIC, FESTIVALS & CULTURAL RESIDENCIES

  {  
    category: 'music',  
    date: 'May 8–29, 2027',  
    title: 'Celine, Paris, & the Art of the Encore',  
    location: 'Plenitude Arena, Paris, France',  
    subtitle: 'Céline Dion Residency',  
    description:  
      'A three-night itinerary around Céline Dion’s residency, paired with The Peninsula Paris, La Réserve Paris, or Madame Rêve. Private arrival, private car to the show, and a recovery day complete the file.',  
  },  
  {  
    category: 'music',  
    date: 'April–August 2027',  
    title: 'Harry Styles — Together, Together 2027',  
    location:  
      '13 international markets, including Dallas, Los Angeles, and Atlanta',  
    subtitle: 'Styles & Suites',  
    description:  
      'A verified concert brief built around stadium hospitality, VIP access, premium hotel pairings, and protected movement. Lead-market pairings include The Crescent Fort Worth, Villoura Los Angeles, and Thompson Atlanta.',  
  },  
  {  
    category: 'music',  
    date: 'November 13–15, 2026 & May 15–17, 2027',  
    title: 'Cancun Jazz Festival',  
    location: 'Dreams Jade Resort & Spa, Puerto Morelos, Mexico',  
    subtitle: '12th Annual Destination Smooth-Jazz',  
    description:  
      'Featuring Spyro Gyra, Eric Darius, Michael Lington, Paul Taylor, Regina Belle, and Peter White.',  
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
    date: 'October 23, 2026',  
    title: 'Montgomery Comedy Festival',  
    location: 'Montgomery, Alabama',  
    subtitle: 'Sheryl Underwood & Lavell Crawford',  
    description:  
      'An evening of premier stand-up comedy and entertainment.',  
  },  
  {  
    category: 'music',  
    date: 'January 15–18, 2027',  
    title: '30A Songwriters Festival',  
    location: 'Rosemary Beach, Florida',  
    subtitle: 'Coastal Acoustic Masterclass',  
    description:  
      'Intimate performances across 30A luxury venues.',  
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
    date: '2026–2027',  
    title: 'BTS World Tour',  
    location:  
      'North America, Europe, Latin America, and Asia-Pacific',  
    subtitle: 'Global Stadium Hospitality',  
    description:  
      'A 79-show world tour file built around stadium hospitality, VIP access, premium hotel pairings, and protected movement across lead markets.',  
  },  
  {  
    category: 'music',  
    date: 'Through July 2027',  
    title: 'Karol G — Viajando Por El Mundo',  
    location:  
      'Global stadium markets, including London in 2027',  
    subtitle: 'Global Latin Pop Tour',  
    description:  
      'A stadium-scale world tour with VIP hospitality, premium hotel pairings, private movement, and city-specific cultural extensions.',  
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
    date: 'June–December 11, 2026',  
    title: 'Chris Brown & Usher',  
    location: 'Atlanta, New Orleans, and Miami',  
    subtitle: 'Stadium & Arena Spectacular',  
    description:  
      'Unmatched choreography and multi-platinum hits.',  
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
    location:  
      'Pittsburgh, Washington, D.C., New Orleans, and Miami',  
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
    date: 'Aug–Oct 2026',  
    title: 'CeCe Winans: Come Worship!',  
    location: 'Chicago and European dates',  
    subtitle: 'Gospel Icon Live',  
    description:  
      'An uplifting spiritual evening with supreme vocal majesty.',  
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
    date: 'November 19–21, 2026',  
    title: 'F1 Las Vegas Grand Prix',  
    location: 'Las Vegas, Nevada',  
    subtitle: 'Formula 1 Race Weekend',  
    description:  
      'Premium hospitality and race-weekend access paired with a Desert Sanctuary corridor through Wynn, Encore, and Fontainebleau.',  
  },  
  {  
    category: 'sporting',  
    date: 'February 14, 2027',  
    title: 'Super Bowl LXI',  
    location: 'SoFi Stadium, Inglewood, California',  
    subtitle: "Valentine's Day Weekend Hospitality",  
    description:  
      'A premium Los Angeles Super Bowl file shaped around hospitality, entertainment, corporate access, private movement, and a refined Valentine’s Day weekend.',  
  },  
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
    subtitle: 'London Tennis & Curated Hospitality',  
    description:  
      'A London tennis itinerary with private hospitality curation, The Goring or Ham Yard Hotel, and a tailored city extension.',  
  },

  // GLOBAL LEADERSHIP & SUMMITS

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
    date: 'October 31–November 28, 2026',  
    title: '2026 HBCU Classics Series',  
    location: 'Three-event national schedule',  
    subtitle: 'Football, Culture & Homecoming Tradition',  
    description:  
      'A curated season connecting storied rivalries, alumni communities, and destination weekends across the United States.',  
    featured: true,  
    schedule: [  
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
    location:  
      '80+ US cities including Atlanta, West Palm Beach, Detroit, and Denver',  
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
  // ADDITIONAL CURATED 2027 EXPERIENCES
  {
    category: 'film',
    date: 'May 11–22, 2027',
    title: 'Cannes Film Festival 2027',
    location: 'Cannes, French Riviera, France',
    subtitle: 'Cinema, Culture & Riviera Hospitality',
    description: 'A French Riviera cultural itinerary with Hôtel Martinez, Carlton Cannes, or a private coastal villa, complemented by chauffeured transfers, fine dining, and independently arranged festival experiences.',
    featured: true,
  },
  {
    category: 'sporting',
    date: 'June 2027 — Dates TBC',
    title: 'Monaco Grand Prix 2027',
    location: 'Monte Carlo, Monaco',
    subtitle: 'Formula 1 & Riviera Society',
    description: 'A Monaco race-week escape with Hôtel de Paris Monte-Carlo or Hôtel Hermitage, Riviera dining, private transfers, and hospitality options evaluated on request.',
    featured: true,
  },
  {
    category: 'culinary',
    date: 'June 17–20, 2027',
    title: 'Art Basel 2027',
    location: 'Basel, Switzerland',
    subtitle: 'International Art & Collector Culture',
    description: 'A collector-oriented Swiss itinerary anchored by Grand Hotel Les Trois Rois, with gallery visits, museum programming, discreet transfers, and optional Zurich or Lake Lucerne extensions.',
    featured: true,
  },
  {
    category: 'culinary',
    date: 'June 2027 — Dates TBC',
    title: 'Aspen Food & Wine Classic 2027',
    location: 'Aspen, Colorado',
    subtitle: 'Mountain Gastronomy & Culinary Culture',
    description: 'A mountain culinary escape with The Little Nell or Hotel Jerome, chef-led dining, and a restorative Rocky Mountain extension.',
  },
  {
    category: 'culinary',
    date: '2027 — Dates TBC',
    title: 'Watches and Wonders Geneva 2027',
    location: 'Geneva, Switzerland',
    subtitle: 'Haute Horlogerie & Collectors',
    description: 'An elegant Geneva itinerary for watch enthusiasts, pairing landmark Swiss hospitality with authorized exhibition access, private transfers, and lakeside dining.',
  },
  {
    category: 'fashion',
    date: '2027 — Dates TBC',
    title: 'Paris Haute Couture Week 2027',
    location: 'Paris, France',
    subtitle: 'Fashion Heritage & Parisian Luxury',
    description: 'An atelier-inspired Paris escape with Hôtel Plaza Athénée or Le Bristol, private shopping appointments, galleries, and exceptional dining. Show access is not included or guaranteed.',
  },
  {
    category: 'film',
    date: '2027 — Dates TBC',
    title: 'Venice International Film Festival 2027',
    location: 'Venice Lido, Italy',
    subtitle: 'International Cinema & Venetian Elegance',
    description: 'A cinematic Venice itinerary with The Gritti Palace or Aman Venice, private water transfers, lagoon excursions, and film programming subject to official access arrangements.',
  },
  {
    category: 'culinary',
    date: '2027 — Dates TBC',
    title: 'Frieze London 2027',
    location: 'London, England',
    subtitle: 'Contemporary Art & Collector Week',
    description: 'An art-focused London stay with Claridge’s or The Connaught, private gallery appointments, museum visits, and a curated dining program.',
  },
  {
    category: 'automotive',
    date: 'August 2027 — Dates TBC',
    title: 'Monterey Car Week 2027',
    location: 'Monterey Peninsula, California',
    subtitle: 'Collector Motoring & Coastal Luxury',
    description: 'A collector-focused California escape surrounding the peninsula’s celebrated motoring calendar, with private drivers, coastal dining, and optional Big Sur stays.',
  },
  {
    category: 'maritime',
    date: '2027 — Dates TBC',
    title: 'Les Voiles de Saint-Tropez 2027',
    location: 'Saint-Tropez, France',
    subtitle: 'Mediterranean Sailing & Riviera Living',
    description: 'A Riviera sailing itinerary with Cheval Blanc St-Tropez or a private villa, harbor dining, chauffeured transfers, and charter possibilities subject to availability.',
  },
  {
    category: 'sporting',
    date: '2027 — Dates TBC',
    title: 'US Open Tennis Championships 2027',
    location: 'Queens, New York City',
    subtitle: 'Grand Slam Tennis & Manhattan Luxury',
    description: 'A New York tennis getaway with The Mark or Baccarat Hotel, private transportation, destination dining, and hospitality sourced through appropriate channels.',
  },
  {
    category: 'sporting',
    date: '2027 — Dates TBC',
    title: 'Singapore Grand Prix 2027',
    location: 'Marina Bay, Singapore',
    subtitle: 'Night Racing & Asian City Luxury',
    description: 'A Singapore race-week itinerary featuring Raffles Singapore or Marina Bay luxury hotels, chef-driven dining, and private city experiences.',
  },
  {
    category: 'music',
    date: '2027 — Dates TBC',
    title: 'Essence Festival of Culture 2027',
    location: 'New Orleans, Louisiana',
    subtitle: 'Music, Culture & Elevated Group Travel',
    description: 'A premium New Orleans group itinerary with refined accommodations, private culinary experiences, chauffeur services, and cultural programming.',
  },
  {
    category: 'film',
    date: '2027 — Dates TBC',
    title: 'American Black Film Festival 2027',
    location: 'Destination TBC',
    subtitle: 'Black Cinema & Creative Community',
    description: 'A film-and-culture travel opportunity pairing festival programming with luxury lodging, private dining, and personalized city experiences once the host destination is announced.',
  },

];

const CATEGORY_SECTIONS = [  
  {  
    category: 'automotive' as const,  
    title: 'Automotive & Prestige Motoring',  
    icon: '◈',  
  },  
  {  
    category: 'maritime' as const,  
    title: 'Maritime & Sailing Milestones',  
    icon: '⌁',  
  },  
  {  
    category: 'culinary' as const,  
    title: 'Culinary, Art & Design',  
    icon: '✧',  
  },  
  {  
    category: 'music' as const,  
    title: 'Music, Festivals & Cultural Residencies',  
    icon: '♫',  
  },  
  {  
    category: 'sporting' as const,  
    title: 'Sporting & Equestrian Traditions',  
    icon: '♞',  
  },  
  {  
    category: 'leadership' as const,  
    title: 'Global Leadership & Summits',  
    icon: '❖',  
  },  
  {  
    category: 'hbcus' as const,  
    title: 'HBCU Classics & Homecomings',  
    icon: '✦',  
  },  
  {  
    category: 'expedition' as const,  
    title: 'Expedition & Pinnacle Travel',  
    icon: '✧',  
  },  
  {  
    category: 'wellness' as const,  
    title: 'Wellness & Restorative Retreats',  
    icon: '◌',  
  },  
  {  
    category: 'fashion' as const,  
    title: 'Fashion & Design',  
    icon: '◇',  
  },  
  {  
    category: 'film' as const,  
    title: 'Film & Entertainment',  
    icon: '◎',  
  },  
  {  
    category: 'lifestyle' as const,  
    title: 'Lifestyle & Holiday',  
    icon: '❄',  
  },  
  {  
    category: 'religious' as const,  
    title: 'Religious & Family Travel',  
    icon: '✦',  
  },  
  {  
    category: 'seasonal' as const,  
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

        <Suspense  
          fallback={  
            <div className="border border-white/10 bg-[#111111] px-6 py-12 text-center text-sm text-white/50">  
              Loading the event ledger…  
            </div>  
          }  
        >  
          <EventLedger  
            events={ALL_EVENTS}  
            sections={CATEGORY_SECTIONS}  
          />  
        </Suspense>

        <section className="space-y-6 border-t border-white/10 pt-16 text-center">  
          <h2 className="text-2xl font-light text-white">  
            Secure Your Access  
          </h2>

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
