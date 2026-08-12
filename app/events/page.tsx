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
  | 'expedition'  
  | 'lifestyle';

interface ScheduleItem {  
  date: string;  
  location: string;  
}

interface EventItem {  
  category: EventCategory;  
  date: string;  
  title: string;  
  location: string;  
  subtitle?: string;  
  description?: string;  
  featured?: boolean;  
  schedule?: ScheduleItem[];  
}

const ALL_EVENTS: EventItem[] = [  
  // ---------------------------------------------------------------------------  
  // AUTOMOTIVE & PRESTIGE MOTORING  
  // ---------------------------------------------------------------------------  
  {  
    category: 'automotive',  
    date: 'Aug 7–16, 2026',  
    title: 'Monterey Car Week',  
    location: 'Monterey Peninsula, California',  
    subtitle: 'Automotive Heritage & Concours Week',  
    description:  
      "Including The Quail, Pebble Beach Tour d'Elegance, Rolex Monterey Motorsports Reunion, and the 75th Pebble Beach Concours d'Elegance.",  
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
    date: 'February 2027',  
    title: 'The I.C.E. St. Moritz',  
    location: 'St. Moritz, Switzerland',  
    subtitle: 'Alpine Collector Culture',  
    description:  
      'A winter collector week pairing exceptional automobiles with alpine hospitality, private dining, and a restorative Swiss setting.',  
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

  // ---------------------------------------------------------------------------  
  // MARITIME & SAILING MILESTONES  
  // ---------------------------------------------------------------------------  
  {  
    category: 'maritime',  
    date: 'April–July 2027',  
    title: "Louis Vuitton 38th America's Cup",  
    location: 'Naples, Italy',  
    subtitle: 'Sailing, Sport & Mediterranean Hosting',  
    description:  
      'A flexible Naples race-week portfolio combining race access, private sailing, Neapolitan culinary immersion, and a Capri, Amalfi, or Sicily extension.',  
  },  
  {  
    category: 'maritime',  
    date: 'Aug 1–7, 2027',  
    title: 'Cowes Week Bicentenary',  
    location: 'Isle of Wight, United Kingdom',  
    subtitle: 'British Sailing Heritage',  
    description:  
      'A bicentenary sailing week with race viewing, villa hospitality, regatta-side dining, and a London or Scottish extension.',  
  },

  // ---------------------------------------------------------------------------  
  // CULINARY, ART & DESIGN  
  // ---------------------------------------------------------------------------  
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
      'A design immersion with curated pavilion access, private palazzo or villa stays, artisan visits, and a restorative Veneto or Tuscany extension.',  
  },  
  {  
    category: 'culinary',  
    date: 'Fall 2027',  
    title: 'Art Basel Paris',  
    location: 'Paris, France',  
    subtitle: 'Contemporary Art & Private Galleries',  
    description:  
      'A private gallery weekend with timed fair access, curator-led visits, atelier appointments, and a possible Normandy or South of France extension.',  
  },

  // ---------------------------------------------------------------------------  
  // MUSIC, FESTIVALS & CULTURAL RESIDENCIES  
  // ---------------------------------------------------------------------------  
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
    date: 'Aug 14, 15, 21, 22 & 23, 2026',  
    title: 'Timucua International Guitar Festival',  
    location: 'The White House, Orlando, Florida',  
    subtitle: 'Intimate Guitar Showcase',  
    description:  
      'Classical, flamenco, and guitar masters from six countries in an intimate Orlando salon setting.',  
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
    date: 'August 22, 2026',  
    title: 'Kaya Fest Toronto',  
    location: 'Toronto, Canada',  
    subtitle: 'The Marley Family Legacy',  
    description:  
      'Celebrating unity, reggae, and social consciousness.',  
  },  
  {  
    category: 'music',  
    date: 'August 22, 2026',  
    title: 'Vermont Reggae Fest',  
    location: 'Vermont',  
    subtitle: 'Mountain Air & Roots Rhythm',  
    description:  
      'An open-air celebration of reggae and arts in the Green Mountains.',  
  },  
  {  
    category: 'music',  
    date: 'August 2026',  
    title: 'Coltrane Jazz Fest',  
    location: 'High Point, North Carolina',  
    subtitle: 'Legacy of John Coltrane',  
    description:  
      'World-class jazz performances honoring a legendary American icon.',  
  },  
  {  
    category: 'music',  
    date: 'August 22–23, 2026',  
    title: 'Freedom 250 Grand Prix',  
    location: 'Washington, D.C.',  
    subtitle: 'Motorsports & Capital Elegance',  
    description:  
      'A high-octane racing celebration in the heart of the capital.',  
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
    description:  
      'A vibrant coastal reggae celebration in tropical Miami.',  
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
    title: "Joe Bonamassa's Sound Wave Beach Weekend",  
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
    date: 'September 13, 2026',  
    title: 'AfroFuture Presents Champion Sound',  
    location: 'The Rooftop at Pier 17, New York',  
    subtitle: 'Afrobeats & Global Sound',  
    description:  
      'Featuring DBN Gogo, DJ Obi, Victony, Bnxn, and more.',  
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
    date: 'June 23–27, 2027',  
    title: 'Glastonbury Festival 2027',  
    location: 'Somerset, United Kingdom',  
    subtitle: 'Music, Culture & British Summer',  
    description:  
      'A carefully managed festival file pairing private residence support, curated programming, protected movement, and a quiet post-festival reset.',  
  },

  // ---------------------------------------------------------------------------  
  // CONCERT TOURS  
  // ---------------------------------------------------------------------------  
  {  
    category: 'music',  
    date: 'September 12–October 28, 2026',  
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
    date: 'July–August 2026',  
    title: 'NE-YO & AKON: Nights Like This',  
    location: 'Atlanta, Austin, and Las Vegas',  
    subtitle: 'R&B Royalty Arena Run',  
    description:  
      'Timeless vocal anthems paired with VIP hospitality.',  
  },  
  {  
    category: 'music',  
    date: 'August 15–October 11, 2026',  
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
    date: 'September 4–5 & October 23–24, 2026',  
    title: 'JAŸ-Z: 30th Anniversary',  
    location: 'London and Los Angeles',  
    subtitle: 'Exclusive Retrospective',  
    description:  
      'Intimate career-spanning performances for discerning collectors.',  
  },  
  {  
    category: 'music',  
    date: 'October 2026–January 2027',  
    title: 'Tyla: A*POP World Tour',  
    location: 'Europe, North America, and Africa',  
    subtitle: 'Global Pop Phenomenon',  
    description:  
      'A global tour from one of African pop music’s defining new voices.',  
  },  
  {  
    category: 'music',  
    date: 'October 24–December 19, 2026',  
    title: 'JODECI: Forever My Lady',  
    location: 'Pittsburgh, Washington, D.C., New Orleans, and Miami',  
    subtitle: 'Ultimate R&B Slow Jam Tour',  
    description:  
      'VIP access and private box options for legendary R&B.',  
  },  
  {  
    category: 'music',  
    date: 'September–October 2026',  
    title: 'Young Thug: New Generation',  
    location: 'Atlanta, Dallas, and European dates',  
    subtitle: 'Hip-Hop Innovator Live',  
    description:  
      'A high-energy cultural milestone tour.',  
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
    date: 'August–October 2026',  
    title: 'CeCe Winans: Come Worship!',  
    location: 'Chicago and European dates',  
    subtitle: 'Gospel Icon Live',  
    description:  
      'An uplifting spiritual evening with supreme vocal majesty.',  
  },  
  {  
    category: 'music',  
    date: 'August 20–September 10, 2026',  
    title: 'Lil Wayne',  
    location: 'Jones Beach, Knoxville, and select dates',  
    subtitle: 'Rap Monument Live',  
    description:  
      'A legendary catalog performed live in premium amphitheater settings.',  
  },  
  {  
    category: 'music',  
    date: 'July 31–November 14, 2026',  
    title: "Sangin' Diva / Diva Life Tour",  
    location: 'New York, DMV, Philadelphia, Atlanta, and Las Vegas',  
    subtitle: 'Vocal Powerhouse Showcase',  
    description:  
      'Celebrating the greatest female voices in soul and R&B.',  
  },  
  {  
    category: 'music',  
    date: 'August 19–September 18, 2026',  
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
    date: 'September 25–October 11, 2026',  
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
    date: 'January 15–16 & January 22–23, 2027',  
    title: 'Eagles — Live in Concert at Sphere',  
    location: 'Sphere, Las Vegas',  
    subtitle: 'Las Vegas Residency',  
    description:  
      'Four January 2027 performances at Sphere in Las Vegas.',  
  },

  // ---------------------------------------------------------------------------  
  // SPORTING & EQUESTRIAN TRADITIONS  
  // ---------------------------------------------------------------------------  
  {  
    category: 'sporting',  
    date: 'May 1, 2027',  
    title: '153rd Kentucky Derby',  
    location: 'Louisville, Kentucky',  
    subtitle: 'Equestrian Tradition & Derby Week',  
    description:  
      'A Derby week experience shaped around hospitality, private residence strategy, bourbon, dining, and refined movement.',  
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
    date: 'July 2027',  
    title: '155th Open Championship at St Andrews',  
    location: 'St Andrews, Scotland',  
    subtitle: 'Golf, Heritage & Estate Living',  
    description:  
      'A golf-and-estate week with championship viewing, private dining, chauffeured movement, and restorative time.',  
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

  // ---------------------------------------------------------------------------  
  // GLOBAL LEADERSHIP & SUMMITS  
  // ---------------------------------------------------------------------------  
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
    date: 'October 12–13, 2026',  
    title: 'Startup Mountain Summit',  
    location: 'Johnson City, Tennessee',  
    subtitle: 'Appalachian Founder Retreat',  
    description:  
      'Early-stage founders, a pitch competition, and high-adventure networking in the Blue Ridge foothills.',  
  },  
  {  
    category: 'leadership',  
    date: 'September 29–October 1, 2026',  
    title: 'AppDirect Thrive',  
    location: 'JW Marriott L.A. LIVE, Los Angeles, California',  
    subtitle: 'Digital Marketplace & AI Summit',  
    description:  
      'Executive technology leadership focused on digital marketplaces and artificial intelligence.',  
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
    date: 'October 2–4, 2026',  
    title: 'AASCP Fall Scientific Session',  
    location: 'Hyatt Regency Miami, Florida',  
    subtitle: 'Regenerative Medicine Summit',  
    description:  
      'Practitioners and longevity researchers exploring stem cell therapies and healthspan optimization.',  
  },  
  {  
    category: 'leadership',  
    date: 'September 28–October 4, 2026',  
    title: 'CultureCon Week NYC & West Vegas',  
    location: 'New York, New York & Las Vegas, Nevada',  
    subtitle: 'Creators & Innovators Summit',  
    description:  
      'Celebrating Black creatives, entrepreneurs, and digital visionaries.',  
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
    date: 'January 18–22, 2027',  
    title: 'World Economic Forum — Davos',  
    location: 'Davos, Switzerland',  
    subtitle: 'Global Leadership & Strategic Dialogue',  
    description:  
      'A leadership sanctuary pairing efficient movement, a high-function base, private meeting support, wellness, and post-forum decompression.',  
  },  
  {  
    category: 'leadership',  
    date: 'April 5–11, 2027',  
    title: 'Watches and Wonders Geneva',  
    location: 'Geneva, Switzerland',  
    subtitle: 'Luxury Watches & Collector Culture',  
    description:  
      'A collector itinerary with appointment choreography, private dining, watchmaker visits, discreet transfers, and a Swiss Alps extension.',  
  },  
  {  
    category: 'leadership',  
    date: 'January 2027',  
    title: 'Sundance Film Festival',  
    location: 'Park City, Utah',  
    subtitle: 'Film, Culture & Creative Leadership',  
    description:  
      'A film-and-reset week with screening strategy, private residence or suite support, dining, and chauffeured movement.',  
  },  
  {  
    category: 'leadership',  
    date: 'September 22–24, 2027',  
    title: 'Groceryshop 2027',  
    location: 'Las Vegas, Nevada',  
    subtitle: 'Consumer, Retail & Innovation Summit',  
    description:  
      'A high-performance work file built around a quiet base, meeting-ready movement, hospitality, and protected recovery time.',  
  },

  // ---------------------------------------------------------------------------  
  // EXPEDITION & PINNACLE TRAVEL  
  // ---------------------------------------------------------------------------  
  {  
    category: 'expedition',  
    date: 'November 2026–January 2027; 2027–2028 Season',  
    title: 'White Desert Antarctic Fly-In Expeditions',  
    location: 'Queen Maud Land, Antarctica',  
    subtitle: 'Polar Expedition & Finite Travel',  
    description:  
      'A once-in-a-lifetime polar file with private aviation, expedition readiness, gateway time in Australia, and restorative return travel.',  
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

  // ---------------------------------------------------------------------------  
  // HBCU CLASSICS & HOMECOMINGS  
  // ---------------------------------------------------------------------------  
  {  
    category: 'lifestyle',  
    date: 'August 29–November 28, 2026',  
    title: '2026 HBCU Classics Series',  
    location: 'Eight-event national schedule',  
    subtitle: 'Football, Culture & Homecoming Tradition',  
    description:  
      'A curated season connecting storied rivalries, alumni communities, and destination weekends across the United States.',  
    featured: true,  
    schedule: [  
      {  
        date: 'Aug 29, 2026',  
        location: 'MEAC/SWAC Challenge — Atlanta, Georgia',  
      },  
      {  
        date: 'Sept 6, 2026',  
        location: 'Orange Blossom Classic — Miami Gardens, Florida',  
      },  
      {  
        date: 'Sept 12, 2026',  
        location: 'Aggie-Eagle Classic — Durham, North Carolina',  
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
        location: 'Bayou Classic — New Orleans, Louisiana',  
      },  
    ],  
  },

  // ---------------------------------------------------------------------------  
  // LIFESTYLE & HOLIDAY  
  // ---------------------------------------------------------------------------  
  {  
    category: 'lifestyle',  
    date: 'November 11–December 30, 2026',  
    title: 'Mannheim Steamroller Christmas',  
    location:  
      '80+ US cities including Atlanta, West Palm Beach, Detroit, and Denver',  
    subtitle: 'Longest-Running Holiday Tour in History',  
    description:  
      'Iconic classical-rock holiday arrangements celebrating more than 35 years of seasonal magic.',  
  },  
  {  
    category: 'lifestyle',  
    date: 'November 7, 2026–January 5, 2027',  
    title: 'Disney Jollywood Nights',  
    location: 'Orlando, Florida',  
    subtitle: 'Glitz, Glamour & Holiday Magic',  
    description:  
      'An after-hours holiday celebration with curated entertainment and gourmet dining.',  
  },  
  {  
    category: 'lifestyle',  
    date: 'November 20–December 31, 2026',  
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
    category: 'expedition',  
    title: 'Expedition & Pinnacle Travel',  
    icon: '✦',  
  },  
  {  
    category: 'lifestyle',  
    title: 'Lifestyle & Holiday',  
    icon: '❄',  
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
          <h2 className="text-2xl font-light text-white">  
            Secure Your Access  
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60">  
            Every event is paired with the right base, movement, access  
            architecture, and recovery time. Dates, venues, hospitality  
            structures, and availability are confirmed before any client-facing  
            proposal is released.  
          </p>

          <Link  
            href="https://cal.com/nexvoyagecollective/discovery-call"  
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
          <EventCard  
            key={`${event.title}-${index}`}  
            event={event}  
          />  
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
          href="https://cal.com/nexvoyagecollective/discovery-call"  
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
