import Link from 'next/link';

export const metadata = {  
  title: 'The Event Ledger — NexVoyage Collective',  
  description: 'Curated access to the season\'s most significant gatherings — from the gridiron to the stage.',  
};

interface EventItem {  
  date: string;  
  title: string;  
  location: string;  
  subtitle?: string;  
  description?: string;  
  category: 'festivals' | 'concerts' | 'summits' | 'lifestyle';  
}

const ALL_EVENTS: EventItem[] = [  
  // --- FESTIVALS & SERIES ---  
  {  
    category: 'festivals',  
    date: 'Fall: Nov 13–15, 2026 | Spring: May 15–17, 2027',  
    title: 'Cancun Jazz Festival',  
    location: 'Dreams Jade Resort & Spa, Puerto Morelos, Mexico',  
    subtitle: '12th Annual Destination Smooth-Jazz',  
    description: 'Featuring Spyro Gyra, Eric Darius, Michael Lington, Paul Taylor, Regina Belle, and Peter White.'  
  },  
  {  
    category: 'festivals',  
    date: 'Aug 9, 14, 15, 21, 22 & 23, 2026',  
    title: 'Timucua International Guitar Festival',  
    location: 'The White House, Orlando, FL',  
    subtitle: 'Intimate Six-Night Guitar Showcase',  
    description: 'Classical, flamenco, and guitar masters from six countries in an intimate Orlando salon setting.'  
  },  
  {  
    category: 'festivals',  
    date: '2026',  
    title: 'Lion Heart Music Fest 2026',  
    location: 'New Jersey',  
    subtitle: 'Community & Reggae Gathering',  
    description: 'Barefoot outdoor gathering celebrating roots reggae culture and community connection.'  
  },  
  {  
    category: 'festivals',  
    date: '2026 / 2027',  
    title: 'Afro Plus Fest',  
    location: 'Global / Destination TBA',  
    subtitle: 'African Diaspora Cultural Festival',  
    description: 'Celebrating African music, fashion, cuisine, and global diaspora community programming.'  
  },  
  {  
    category: 'festivals',  
    date: '2027',  
    title: 'AfroNation 2027',  
    location: 'Global Beach Destination',  
    subtitle: 'World’s Biggest Afrobeats Festival',  
    description: 'Premier global festival brand uniting top Afrobeats artists across exclusive beach resorts.'  
  },  
  {  
    category: 'festivals',  
    date: '2027',  
    title: 'Soul Camp 2027',  
    location: 'Destination TBA',  
    subtitle: 'Outdoor Wellness & Music Campout',  
    description: 'Restorative gathering combining live acoustic music, immersive nature, and expert wellness workshops.'  
  },  
  {  
    category: 'festivals',  
    date: 'September 19, 2026',  
    title: 'Remo Fest ’26',  
    location: 'Blanco, Texas Hill Country',  
    subtitle: 'Rugged Texas Reggae & Wine',  
    description: 'Grassroots reggae festival pairing Caribbean rhythms with Texas wine and ranch country hospitality.'  
  },  
  {  
    category: 'festivals',  
    date: 'July 28 – Aug 1, 2026',  
    title: 'Qatar Goodwood Festival',  
    location: 'United Kingdom',  
    subtitle: 'Glorious Goodwood Equestrian Elegance',  
    description: 'Premier social and racing highlight of the British summer season.'  
  },  
  {  
    category: 'festivals',  
    date: 'August 22, 2026',  
    title: 'Kaya Fest Toronto',  
    location: 'Toronto, Canada',  
    subtitle: 'The Marley Family Legacy',  
    description: 'Celebrating unity, reggae, and social consciousness.'  
  },  
  {  
    category: 'festivals',  
    date: 'August 22, 2026',  
    title: 'Vermont Reggae Fest',  
    location: 'Vermont',  
    subtitle: 'Mountain Air & Roots Rhythm',  
    description: 'Open-air celebration of reggae and arts in the Green Mountains.'  
  },  
  {  
    category: 'festivals',  
    date: 'August 2026',  
    title: 'Coltrane Jazz Fest',  
    location: 'High Point, North Carolina',  
    subtitle: 'Legacy of John Coltrane',  
    description: 'World-class jazz performances honoring a legendary American icon.'  
  },  
  {  
    category: 'festivals',  
    date: 'August 22–23, 2026',  
    title: 'Freedom 250 Grand Prix',  
    location: 'Washington, D.C.',  
    subtitle: 'Motorsports & Capital Elegance',  
    description: 'High-octane racing celebration in the heart of the capital.'  
  },  
  {  
    category: 'festivals',  
    date: 'September 24–27, 2026',  
    title: 'C3LLAR Jackson Hole',  
    location: 'Jackson Hole, Wyoming',  
    subtitle: 'Ultra-Luxury Wine Exploration',  
    description: 'Exclusive alpine wine summit pairing rare vintages with high-altitude wilderness.'  
  },  
  {  
    category: 'festivals',  
    date: 'October 10, 2026',  
    title: 'Reggae Fest Miami',  
    location: 'Miami, Florida',  
    subtitle: 'South Florida Sound & Sun',  
    description: 'Vibrant coastal reggae celebration in tropical Miami.'  
  },  
  {  
    category: 'festivals',  
    date: 'October 23, 2026',  
    title: 'Montgomery Comedy Festival',  
    location: 'Montgomery, Alabama',  
    subtitle: 'Sheryl Underwood & Lavell Crawford',  
    description: 'An evening of premier stand-up comedy and entertainment.'  
  },  
  {  
    category: 'festivals',  
    date: 'Jan 15–18, 2027',  
    title: '30A Songwriters Festival',  
    location: 'Rosemary Beach, Florida',  
    subtitle: 'Coastal Acoustic Masterclass',  
    description: 'Intimate performances across 30A luxury venues.'  
  },  
  {  
    category: 'festivals',  
    date: 'April 9–11, 2027',  
    title: 'Soundwave Weekend',  
    location: 'Miramar Beach, Florida',  
    subtitle: 'Emerald Coast Music Retreat',  
    description: 'Weekend musical getaway along pristine white sand beaches.'  
  },  
  {  
    category: 'festivals',  
    date: 'May 14–16, 2027',  
    title: 'Legends of Rock Expo',  
    location: 'Las Vegas, Nevada',  
    subtitle: 'Classic Rock Icons',  
    description: 'Exclusive memorabilia, performances, and collector exhibitions.'  
  },

  // --- CONCERT TOURS ---  
  {  
    category: 'concerts',  
    date: 'Sept 12 – Oct 28, 2026',  
    title: 'Chief Keef Live 2026',  
    location: '19 Major US Cities (Chicago, NYC, LA, Austin)',  
    subtitle: 'National Headlining Run',  
    description: '19-date arena and amphitheater tour from the pioneer of Chicago drill.'  
  },  
  {  
    category: 'concerts',  
    date: '2026 East Coast Run',  
    location: 'Atlantic City, Brooklyn, Charlotte, Virginia Beach',  
    subtitle: 'Fetty Wap Nostalgia Tour',  
    description: 'High-intent 2010s hip-hop nostalgia tour featuring VIP meet-and-greet packages.'  
  },  
  {  
    category: 'concerts',  
    date: 'December 1–15, 2026',  
    title: 'FORMIDABLE! AZNAVOUR',  
    location: '12 North American Cities (NYC, LA, Atlanta, Miami, Seattle)',  
    subtitle: '100th Anniversary Tribute',  
    description: 'Starring Jules Grison in a 90-minute emotional journey through Charles Aznavour’s legendary songbook.'  
  },  
  {  
    category: 'concerts',  
    date: 'July – Aug 2026',  
    title: 'NE-YO & AKON: Nights Like This',  
    location: 'Atlanta, Austin, Las Vegas',  
    subtitle: 'R&B Royalty Arena Run',  
    description: 'Timeless vocal anthems paired with VIP hospitality.'  
  },  
  {  
    category: 'concerts',  
    date: 'Aug 15 – Oct 11, 2026',  
    title: 'TLC / Salt-N-Pepa / En Vogue',  
    location: 'Atlanta, Las Vegas, Los Angeles',  
    subtitle: 'IT’S ICONIC Tour',  
    description: 'Legendary female hip-hop and R&B powerhouses on one stage.'  
  },  
  {  
    category: 'concerts',  
    date: 'June – Dec 11, 2026',  
    title: 'Chris Brown & Usher',  
    location: 'Atlanta, New Orleans, Miami',  
    subtitle: 'Stadium & Arena Spectacular',  
    description: 'Unmatched choreography and multi-platinum hits.'  
  },  
  {  
    category: 'concerts',  
    date: 'Sept 4–5 & Oct 23–24, 2026',  
    title: 'JAŸ-Z: 30th Anniversary',  
    location: 'London & Los Angeles',  
    subtitle: 'Exclusive Retrospective',  
    description: 'Intimate career-spanning performances for discerning collectors.'  
  },  
  {  
    category: 'concerts',  
    date: 'Oct 2026 – Jan 2027',  
    title: 'Tyla: A*POP World Tour',  
    location: 'Europe, North America, Africa',  
    subtitle: 'Global Pop Phenomenon',  
    description: 'Grammy-winning sensation bringing the new wave of African pop worldwide.'  
  },  
  {  
    category: 'concerts',  
    date: 'Oct 24 – Dec 19, 2026',  
    title: 'JODECI: Forever My Lady',  
    location: 'Pittsburgh, Washington DC, New Orleans, Miami',  
    subtitle: 'Ultimate R&B Slow Jam Tour',  
    description: 'Direct VIP access and private box options for legendary R&B.'  
  },  
  {  
    category: 'concerts',  
    date: 'Sept – Oct 2026',  
    title: 'Young Thug: New Generation',  
    location: 'Atlanta, Dallas, European Dates',  
    subtitle: 'Hip-Hop Innovator Live',  
    description: 'High-energy cultural milestone tour.'  
  },  
  {  
    category: 'concerts',  
    date: '2026 Season',  
    title: 'Anthony Hamilton: Soul on Tour',  
    location: 'Various US Markets',  
    subtitle: 'Grammy-Winning Soul',  
    description: 'Raw, emotive R&B performances in intimate acoustic venues.'  
  },  
  {  
    category: 'concerts',  
    date: 'Aug – Oct 2026',  
    title: 'CeCe Winans: Come Worship!',  
    location: 'Chicago & European Dates',  
    subtitle: 'Gospel Icon Live',  
    description: 'Uplifting spiritual evening with supreme vocal majesty.'  
  },  
  {  
    category: 'concerts',  
    date: 'Aug 20 – Sept 10, 2026',  
    title: 'Lil Wayne',  
    location: 'Jones Beach, Knoxville & Select Dates',  
    subtitle: 'Rap Monument Live',  
    description: 'Legendary catalog performed live in premium amphitheater settings.'  
  },  
  {  
    category: 'concerts',  
    date: 'July 31 – Nov 14, 2026',  
    title: 'Sangin\' Diva / Diva Life Tour',  
    location: 'NYC, DMV, Philly, Atlanta, Vegas',  
    subtitle: 'Vocal Powerhouse Showcase',  
    description: 'Celebrating the greatest female voices in soul and R&B.'  
  },

  // --- SUMMITS & CONFERENCES ---  
  {  
    category: 'summits',  
    date: 'December 16–17, 2026',  
    title: 'America Business Forum Miami',  
    location: 'Kaseya Center, Miami, FL',  
    subtitle: '“The Biggest Stage on Earth”',  
    description: 'Gathering global icons, heads of state, and titans of industry. Diamond tier includes butler service and private B2B matching.'  
  },  
  {  
    category: 'summits',  
    date: 'October 12–13, 2026',  
    title: 'Startup Mountain Summit',  
    location: 'Johnson City, Tennessee',  
    subtitle: 'Appalachian Founder Retreat',  
    description: 'Early-stage founders, $1M pitch competition, and high-adventure networking in the Blue Ridge foothills.'  
  },  
  {  
    category: 'summits',  
    date: 'Sept 29 – Oct 1, 2026',  
    title: 'AppDirect Thrive',  
    location: 'JW Marriott L.A. LIVE, Los Angeles, CA',  
    subtitle: 'Digital Marketplace & AI Summit',  
    description: 'Featuring keynotes from Steven Bartlett and Zack Kass, bringing together executive tech leadership.'  
  },  
  {  
    category: 'summits',  
    date: 'October 8–10, 2026',  
    title: 'Wisdom in the Age of AI',  
    location: 'Calvin University, Grand Rapids, MI',  
    subtitle: 'Cross-Disciplinary Ethics & Innovation',  
    description: 'Examining artificial intelligence across education, business, healthcare, and the arts.'  
  },  
  {  
    category: 'summits',  
    date: 'October 8–9, 2026',  
    title: 'Mental Health America Conference',  
    location: 'Capital Hilton, Washington, D.C.',  
    subtitle: 'National Advocacy & Behavioral Health',  
    description: 'Leading clinicians, advocates, and wellness pioneers convening in the nation’s capital.'  
  },  
  {  
    category: 'summits',  
    date: 'October 2–4, 2026',  
    title: 'AASCP Fall Scientific Session',  
    location: 'Hyatt Regency Miami, FL',  
    subtitle: '9th Annual Regenerative Medicine Summit',  
    description: 'Practitioners and longevity researchers exploring stem cell therapies and healthspan optimization.'  
  },  
  {  
    category: 'summits',  
    date: 'July 14–17, 2026',  
    title: 'ICAST Orlando',  
    location: 'Orlando, Florida',  
    subtitle: 'Global Sportfishing Trade Summit',  
    description: 'Premier gathering for elite angling and marine innovation.'  
  },  
  {  
    category: 'summits',  
    date: 'Sept 28 – Oct 4, 2026',  
    title: 'CultureCon Week NYC & West Vegas',  
    location: 'New York, NY & Las Vegas, NV',  
    subtitle: 'Creators & Innovators Summit',  
    description: 'Celebrating Black creatives, entrepreneurs, and digital visionaries.'  
  },  
  {  
    category: 'summits',  
    date: 'October 12–14, 2026',  
    title: 'Summit Napa Valley',  
    location: 'Napa Valley, California',  
    subtitle: 'Exclusive CEO & Founder Gathering',  
    description: 'Private networking and estate tastings for visionary leadership.'  
  },

  // --- LIFESTYLE & HOLIDAY ---  
  {  
    category: 'lifestyle',  
    date: 'Nov 11 – December 30, 2026',  
    title: 'Mannheim Steamroller Christmas',  
    location: '80+ US Cities (Atlanta, West Palm Beach, Detroit, Denver)',  
    subtitle: 'Longest-Running Holiday Tour in History',  
    description: 'Iconic classical-rock holiday arrangements celebrating 35+ years of seasonal magic.'  
  },  
  {  
    category: 'lifestyle',  
    date: 'Nov 7, 2026 – Jan 5, 2027',  
    title: 'Disney Jollywood Nights',  
    location: 'Orlando, Florida',  
    subtitle: 'Glitz, Glamour & Holiday Magic',  
    description: 'Exclusive after-hours holiday celebration with curated entertainment and gourmet dining.'  
  },  
  {  
    category: 'lifestyle',  
    date: 'Nov 20 – Dec 31, 2026',  
    title: 'Hardy\'s Holiday Village',  
    location: 'Nemacolin, Pennsylvania',  
    subtitle: 'Mid-Atlantic Winter Wonderland',  
    description: 'Immersive holiday luxury set within the private Nemacolin estate.'  
  },  
  {  
    category: 'lifestyle',  
    date: '2026–2027 Season',  
    title: 'MARVIN: The Marvin Gaye Musical',  
    location: 'Various Theatrical Markets',  
    subtitle: 'World Premiere Stage Event',  
    description: 'Celebrating the life and enduring legacy of an absolute soul legend.'  
  }  
];

export default function EventsPage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C5A059]/30 pt-32 pb-24 px-6 md:px-12">  
      <div className="max-w-6xl mx-auto space-y-16">  
          
        {/* Header */}  
        <div className="text-center space-y-4 max-w-3xl mx-auto border-b border-white/10 pb-12">  
          <p className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-medium">Sanctuary Culture</p>  
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white">The Event Ledger</h1>  
          <p className="text-white/60 text-sm md:text-base leading-relaxed">  
            Curated access to the season&apos;s most significant gatherings — from the gridiron to the stage, summits to exclusive holiday series.  
          </p>  
        </div>

        {/* Event Categories */}  
        <div className="space-y-20">  
            
          {/* Festivals & Series */}  
          <section className="space-y-8">  
            <div className="flex items-center gap-4 border-b border-white/10 pb-4">  
              <span className="text-2xl text-[#C5A059]">✦</span>  
              <h2 className="text-2xl font-light tracking-wide text-white">Festivals & Series</h2>  
            </div>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
              {ALL_EVENTS.filter(e => e.category === 'festivals').map((event, idx) => (  
                <EventCard key={idx} event={event} />  
              ))}  
            </div>  
          </section>

          {/* Concert Tours */}  
          <section className="space-y-8">  
            <div className="flex items-center gap-4 border-b border-white/10 pb-4">  
              <span className="text-2xl text-[#C5A059]">♫</span>  
              <h2 className="text-2xl font-light tracking-wide text-white">Concert Tours</h2>  
            </div>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
              {ALL_EVENTS.filter(e => e.category === 'concerts').map((event, idx) => (  
                <EventCard key={idx} event={event} />  
              ))}  
            </div>  
          </section>

          {/* Summits & Conferences */}  
          <section className="space-y-8">  
            <div className="flex items-center gap-4 border-b border-white/10 pb-4">  
              <span className="text-2xl text-[#C5A059]">❖</span>  
              <h2 className="text-2xl font-light tracking-wide text-white">Summits & Conferences</h2>  
            </div>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
              {ALL_EVENTS.filter(e => e.category === 'summits').map((event, idx) => (  
                <EventCard key={idx} event={event} />  
              ))}  
            </div>  
          </section>

          {/* Lifestyle & Holiday */}  
          <section className="space-y-8">  
            <div className="flex items-center gap-4 border-b border-white/10 pb-4">  
              <span className="text-2xl text-[#C5A059]">❄</span>  
              <h2 className="text-2xl font-light tracking-wide text-white">Lifestyle & Holiday</h2>  
            </div>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
              {ALL_EVENTS.filter(e => e.category === 'lifestyle').map((event, idx) => (  
                <EventCard key={idx} event={event} />  
              ))}  
            </div>  
          </section>

        </div>

        {/* Footer CTA */}  
        <div className="text-center pt-16 border-t border-white/10 space-y-6">  
          <h3 className="text-2xl font-light text-white">Secure Your Access</h3>  
          <p className="text-white/60 text-sm max-w-xl mx-auto">  
            Every event is paired with curated private aviation, estate accommodations, and seamless concierge stewardship.  
          </p>  
          <div>  
            <Link  
              href="https://cal.com/nexvoyagecollective/discovery-call"  
              target="_blank"  
              rel="noopener noreferrer"  
              className="inline-block bg-[#C5A059] text-black font-medium text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#d4af37] transition-colors"  
            >  
              Schedule a Discovery Call  
            </Link>  
          </div>  
        </div>

      </div>  
    </main>  
  );  
}

function EventCard({ event }: { event: EventItem }) {  
  return (  
    <div className="bg-[#111111] border border-white/10 p-6 rounded-none flex flex-col justify-between hover:border-[#C5A059]/40 transition-colors">  
      <div className="space-y-3">  
        <div className="flex items-center justify-between text-xs text-[#C5A059] tracking-wider uppercase font-medium">  
          <span>{event.date}</span>  
          {event.subtitle && <span className="text-white/40">{event.subtitle}</span>}  
        </div>  
        <h3 className="text-xl font-normal text-white">{event.title}</h3>  
        <p className="text-white/60 text-xs tracking-wide">{event.location}</p>  
        {event.description && (  
          <p className="text-white/70 text-sm leading-relaxed pt-2 border-t border-white/5">{event.description}</p>  
        )}  
      </div>  
      <div className="pt-6 mt-6 border-t border-white/10">  
        <Link  
          href="https://cal.com/nexvoyagecollective/discovery-call"  
          target="_blank"  
          rel="noopener noreferrer"  
          className="text-xs uppercase tracking-[0.15em] text-[#C5A059] hover:text-white transition-colors flex items-center gap-2"  
        >  
          Inquire About Curated Itinerary →  
        </Link>  
      </div>  
    </div>  
  );  
}  
