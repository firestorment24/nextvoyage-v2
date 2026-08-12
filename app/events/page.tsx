import Link from "next/link";

export const metadata = {  
  title: "The Event Ledger — NexVoyage Collective",  
  description:  
    "Curated access to the season's most significant gatherings — from the gridiron to the stage.",  
};

interface EventScheduleItem {  
  date: string;  
  location: string;  
}

interface EventItem {  
  date: string;  
  title: string;  
  location: string;  
  subtitle?: string;  
  description?: string;  
  category: "hbcus" | "festivals" | "concerts" | "summits" | "lifestyle";  
  featured?: boolean;  
  schedule?: EventScheduleItem[];  
}

const ALL_EVENTS: EventItem[] = [  
  // --- HBCU CLASSICS & HOMECOMINGS ---  
  {  
    category: "hbcus",  
    date: "Aug 29 – Nov 28, 2026",  
    title: "2026 HBCU Classics Series",  
    location: "Eight-event national schedule",  
    subtitle: "Football, Culture & Homecoming Tradition",  
    description:  
      "A curated season of HBCU football classics connecting storied rivalries, alumni communities, and destination weekends across the United States.",  
    featured: true,  
    schedule: [  
      {  
        date: "Aug 29, 2026",  
        location: "MEAC/SWAC Challenge — Atlanta, Georgia",  
      },  
      {  
        date: "Sept 6, 2026",  
        location: "Orange Blossom Classic — Miami Gardens, Florida",  
      },  
      {  
        date: "Sept 12, 2026",  
        location: "Aggie-Eagle Classic — Durham, North Carolina",  
      },  
      {  
        date: "Sept 26, 2026",  
        location: "State Fair Classic — Dallas, Texas",  
      },  
      {  
        date: "Oct 3, 2026",  
        location: "Battle of the Real HU — Washington, D.C.",  
      },  
      {  
        date: "Oct 31, 2026",  
        location: "Magic City Classic — Birmingham, Alabama",  
      },  
      {  
        date: "Nov 21, 2026",  
        location: "Florida Classic — Orlando, Florida",  
      },  
      {  
        date: "Nov 28, 2026",  
        location: "Bayou Classic — New Orleans, Louisiana",  
      },  
    ],  
  },

  // --- FESTIVALS & SERIES ---  
  {  
    category: "festivals",  
    date: "Fall: Nov 13–15, 2026 | Spring: May 15–17, 2027",  
    title: "Cancun Jazz Festival",  
    location: "Dreams Jade Resort & Spa, Puerto Morelos, Mexico",  
    subtitle: "12th Annual Destination Smooth-Jazz",  
    description:  
      "Featuring Spyro Gyra, Eric Darius, Michael Lington, Paul Taylor, Regina Belle, and Peter White.",  
  },  
  {  
    category: "festivals",  
    date: "Aug 9, 14, 15, 21, 22 & 23, 2026",  
    title: "Timucua International Guitar Festival",  
    location: "The White House, Orlando, Florida",  
    subtitle: "Intimate Six-Night Guitar Showcase",  
    description:  
      "Classical, flamenco, and guitar masters from six countries in an intimate Orlando salon setting.",  
  },  
  {  
    category: "festivals",  
    date: "2026",  
    title: "Lion Heart Music Fest 2026",  
    location: "New Jersey",  
    subtitle: "Community & Reggae Gathering",  
    description:  
      "Barefoot outdoor gathering celebrating roots reggae culture and community connection.",  
  },  
  {  
    category: "festivals",  
    date: "2026 / 2027",  
    title: "Afro Plus Fest",  
    location: "Global / Destination TBA",  
    subtitle: "African Diaspora Cultural Festival",  
    description:  
      "Celebrating African music, fashion, cuisine, and global diaspora community programming.",  
  },  
  {  
    category: "festivals",  
    date: "2027",  
    title: "AfroNation 2027",  
    location: "Global Beach Destination",  
    subtitle: "World's Biggest Afrobeats Festival",  
    description:  
      "Premier global festival brand uniting top Afrobeats artists across exclusive beach resorts.",  
  },  
  {  
    category: "festivals",  
    date: "2027",  
    title: "Soul Camp 2027",  
    location: "Destination TBA",  
    subtitle: "Outdoor Wellness & Music Campout",  
    description:  
      "Restorative gathering combining live acoustic music, immersive nature, and expert wellness workshops.",  
  },  
  {  
    category: "festivals",  
    date: "September 19, 2026",  
    title: "Remo Fest '26",  
    location: "Blanco, Texas Hill Country",  
    subtitle: "Rugged Texas Reggae & Wine",  
    description:  
      "Grassroots reggae festival pairing Caribbean rhythms with Texas wine and ranch country hospitality.",  
  },  
  {  
    category: "festivals",  
    date: "July 28 – Aug 1, 2026",  
    title: "Qatar Goodwood Festival",  
    location: "United Kingdom",  
    subtitle: "Glorious Goodwood Equestrian Elegance",  
    description:  
      "Premier social and racing highlight of the British summer season.",  
  },  
  {  
    category: "festivals",  
    date: "August 22, 2026",  
    title: "Kaya Fest Toronto",  
    location: "Toronto, Canada",  
    subtitle: "The Marley Family Legacy",  
    description: "Celebrating unity, reggae, and social consciousness.",  
  },  
  {  
    category: "festivals",  
    date: "August 22, 2026",  
    title: "Vermont Reggae Fest",  
    location: "Vermont",  
    subtitle: "Mountain Air & Roots Rhythm",  
    description:  
      "Open-air celebration of reggae and arts in the Green Mountains.",  
  },  
  {  
    category: "festivals",  
    date: "August 2026",  
    title: "Coltrane Jazz Fest",  
    location: "High Point, North Carolina",  
    subtitle: "Legacy of John Coltrane",  
    description:  
      "World-class jazz performances honoring a legendary American icon.",  
  },  
  {  
    category: "festivals",  
    date: "August 22–23, 2026",  
    title: "Freedom 250 Grand Prix",  
    location: "Washington, D.C.",  
    subtitle: "Motorsports & Capital Elegance",  
    description:  
      "High-octane racing celebration in the heart of the capital.",  
  },  
  {  
    category: "festivals",  
    date: "September 24–27, 2026",  
    title: "C3LLAR Jackson Hole",  
    location: "Jackson Hole, Wyoming",  
    subtitle: "Ultra-Luxury Wine Exploration",  
    description:  
      "Exclusive alpine wine summit pairing rare vintages with high-altitude wilderness.",  
  },  
  {  
    category: "festivals",  
    date: "October 10, 2026",  
    title: "Reggae Fest Miami",  
    location: "Miami, Florida",  
    subtitle: "South Florida Sound & Sun",  
    description: "Vibrant coastal reggae celebration in tropical Miami.",  
  },  
  {  
    category: "festivals",  
    date: "October 23, 2026",  
    title: "Montgomery Comedy Festival",  
    location: "Montgomery, Alabama",  
    subtitle: "Sheryl Underwood & Lavell Crawford",  
    description:  
      "An evening of premier stand-up comedy and entertainment.",  
  },  
  {  
    category: "festivals",  
    date: "Jan 15–18, 2027",  
    title: "30A Songwriters Festival",  
    location: "Rosemary Beach, Florida",  
    subtitle: "Coastal Acoustic Masterclass",  
    description: "Intimate performances across 30A luxury venues.",  
  },  
  {  
    category: "festivals",  
    date: "April 9–11, 2027",  
    title: "Soundwave Weekend",  
    location: "Miramar Beach, Florida",  
    subtitle: "Emerald Coast Music Retreat",  
    description:  
      "Weekend musical getaway along pristine white sand beaches.",  
  },  
  {  
    category: "festivals",  
    date: "May 14–16, 2027",  
    title: "Legends of Rock Expo",  
    location: "Las Vegas, Nevada",  
    subtitle: "Classic Rock Icons",  
    description:  
      "Exclusive memorabilia, performances, and collector exhibitions.",  
  },  
  {  
    category: "festivals",  
    date: "Sept 13, 2026",  
    title: "AfroFuture Presents Champion Sound",  
    location: "The Rooftop at Pier 17, New York",  
    subtitle: "Afrobeats & Global Sound",  
    description:  
      "Featuring DBN Gogo, DJ Obi, Victony, Bnxn, and more.",  
  },  
  {  
    category: "festivals",  
    date: "Sept 5–6, 2026",  
    title: "Pacific Soul Jazz Festival",  
    location: "UCSD Epstein Family Amphitheater, La Jolla, California",  
    subtitle: "West Coast Jazz & Soul Weekend",  
    description:  
      "Featuring Robert Glasper, Kenny Lattimore, Mindi Abair, Karen Briggs, and others.",  
  },  
  {  
    category: "festivals",  
    date: "Aug 7–16, 2026",  
    title: "Monterey Car Week",  
    location: "Monterey Peninsula, California",  
    subtitle: "Automotive Heritage & Concours Week",  
    description:  
      "Including The Quail, Pebble Beach Tour d'Elegance, Rolex Monterey Motorsports Reunion, and the 75th Pebble Beach Concours d'Elegance.",  
  },

  // --- CONCERT TOURS ---  
  {  
    category: "concerts",  
    date: "Sept 12 – Oct 28, 2026",  
    title: "Chief Keef Live 2026",  
    location: "19 Major US Cities including Chicago, New York, Los Angeles, and Austin",  
    subtitle: "National Headlining Run",  
    description:  
      "19-date arena and amphitheater tour from the pioneer of Chicago drill.",  
  },  
  {  
    category: "concerts",  
    date: "2026 East Coast Run",  
    title: "Fetty Wap Nostalgia Tour",  
    location: "Atlantic City, Brooklyn, Charlotte, and Virginia Beach",  
    subtitle: "Nostalgia Tour",  
    description:  
      "High-intent 2010s hip-hop nostalgia tour featuring VIP meet-and-greet packages.",  
  },  
  {  
    category: "concerts",  
    date: "December 1–15, 2026",  
    title: "FORMIDABLE! AZNAVOUR",  
    location: "12 North American Cities including New York, Los Angeles, Atlanta, Miami, and Seattle",  
    subtitle: "100th Anniversary Tribute",  
    description:  
      "Starring Jules Grison in a 90-minute emotional journey through Charles Aznavour's legendary songbook.",  
  },  
  {  
    category: "concerts",  
    date: "July – Aug 2026",  
    title: "NE-YO & AKON: Nights Like This",  
    location: "Atlanta, Austin, and Las Vegas",  
    subtitle: "R&B Royalty Arena Run",  
    description:  
      "Timeless vocal anthems paired with VIP hospitality.",  
  },  
  {  
    category: "concerts",  
    date: "Aug 15 – Oct 11, 2026",  
    title: "TLC / Salt-N-Pepa / En Vogue",  
    location: "Atlanta, Las Vegas, and Los Angeles",  
    subtitle: "IT'S ICONIC Tour",  
    description:  
      "Legendary female hip-hop and R&B powerhouses on one stage.",  
  },  
  {  
    category: "concerts",  
    date: "June – Dec 11, 2026",  
    title: "Chris Brown & Usher",  
    location: "Atlanta, New Orleans, and Miami",  
    subtitle: "Stadium & Arena Spectacular",  
    description:  
      "Unmatched choreography and multi-platinum hits.",  
  },  
  {  
    category: "concerts",  
    date: "Sept 4–5 & Oct 23–24, 2026",  
    title: "JAŸ-Z: 30th Anniversary",  
    location: "London & Los Angeles",  
    subtitle: "Exclusive Retrospective",  
    description:  
      "Intimate career-spanning performances for discerning collectors.",  
  },  
  {  
    category: "concerts",  
    date: "Oct 2026 – Jan 2027",  
    title: "Tyla: A*POP World Tour",  
    location: "Europe, North America, and Africa",  
    subtitle: "Global Pop Phenomenon",  
    description:  
      "Grammy-winning sensation bringing the new wave of African pop worldwide.",  
  },  
  {  
    category: "concerts",  
    date: "Oct 24 – Dec 19, 2026",  
    title: "JODECI: Forever My Lady",  
    location: "Pittsburgh, Washington, D.C., New Orleans, and Miami",  
    subtitle: "Ultimate R&B Slow Jam Tour",  
    description:  
      "Direct VIP access and private box options for legendary R&B.",  
  },  
  {  
    category: "concerts",  
    date: "Sept – Oct 2026",  
    title: "Young Thug: New Generation",  
    location: "Atlanta, Dallas, and European dates",  
    subtitle: "Hip-Hop Innovator Live",  
    description: "High-energy cultural milestone tour.",  
  },  
  {  
    category: "concerts",  
    date: "2026 Season",  
    title: "Anthony Hamilton: Soul on Tour",  
    location: "Various US Markets",  
    subtitle: "Grammy-Winning Soul",  
    description:  
      "Raw, emotive R&B performances in intimate acoustic venues.",  
  },  
  {  
    category: "concerts",  
    date: "Aug – Oct 2026",  
    title: "CeCe Winans: Come Worship!",  
    location: "Chicago & European Dates",  
    subtitle: "Gospel Icon Live",  
    description:  
      "Uplifting spiritual evening with supreme vocal majesty.",  
  },  
  {  
    category: "concerts",  
    date: "Aug 20 – Sept 10, 2026",  
    title: "Lil Wayne",  
    location: "Jones Beach, Knoxville & Select Dates",  
    subtitle: "Rap Monument Live",  
    description:  
      "Legendary catalog performed live in premium amphitheater settings.",  
  },  
  {  
    category: "concerts",  
    date: "July 31 – Nov 14, 2026",  
    title: "Sangin' Diva / Diva Life Tour",  
    location: "New York, DMV, Philadelphia, Atlanta, and Las Vegas",  
    subtitle: "Vocal Powerhouse Showcase",  
    description:  
      "Celebrating the greatest female voices in soul and R&B.",  
  },  
  {  
    category: "concerts",  
    date: "Aug 19 – Sept 18, 2026",  
    title: "Buddy Guy — 90 Tour",  
    location:  
      "Multi-city run including Nashville, Atlanta, Florida, New Orleans, Texas, Los Angeles, San Diego, Denver, and Tulsa",  
    subtitle: "Blues Legacy Tour",  
    description:  
      "A multi-city celebration of Buddy Guy's ninth decade and enduring influence on modern blues.",  
  },  
  {  
    category: "concerts",  
    date: "2026–2027 National Tour",  
    title: "Dance Theatre of Harlem",  
    location:  
      "Chautauqua, New York; the Bronx; Washington, D.C.; Chicago; Seattle; Los Angeles; Detroit; and New York",  
    subtitle: "American Ballet & Cultural Heritage",  
    description:  
      "A national touring season from one of America's most distinguished ballet companies.",  
  },  
  {  
    category: "concerts",  
    date: "Sept 25 – Oct 11, 2026",  
    title: "Love Flamenco World Tour",  
    location: "United States dates",  
    subtitle: "Flamenco, Music & Dance",  
    description:  
      "U.S. dates sponsored by Air Europa.",  
  },  
  {  
    category: "concerts",  
    date: "2026 Tour Series",  
    title: "Kim Scott",  
    location:  
      "Norfolk Waterfront Jazz Festival, Gulf Coast Jazz Festival, Jazz in the Park, and Florida Smooth Jazz Weekend",  
    subtitle: "Smooth Jazz Tour Series",  
    description:  
      "A 2026 series of festival appearances across waterfront, park, and destination jazz settings.",  
  },  
  {  
    category: "concerts",  
    date: "Jan 15–16 & Jan 22–23, 2027",  
    title: "Eagles — Live in Concert at Sphere",  
    location: "Sphere, Las Vegas",  
    subtitle: "Las Vegas Residency",  
    description:  
      "Four January 2027 performances at Sphere in Las Vegas.",  
  },

  // --- SUMMITS & CONFERENCES ---  
  {  
    category: "summits",  
    date: "December 16–17, 2026",  
    title: "America Business Forum Miami",  
    location: "Kaseya Center, Miami, Florida",  
    subtitle: '"The Biggest Stage on Earth"',  
    description:  
      "Gathering global icons, heads of state, and titans of industry. Diamond tier includes butler service and private B2B matching.",  
  },  
  {  
    category: "summits",  
    date: "October 12–13, 2026",  
    title: "Startup Mountain Summit",  
    location: "Johnson City, Tennessee",  
    subtitle: "Appalachian Founder Retreat",  
    description:  
      "Early-stage founders, $1M pitch competition, and high-adventure networking in the Blue Ridge foothills.",  
  },  
  {  
    category: "summits",  
    date: "Sept 29 – Oct 1, 2026",  
    title: "AppDirect Thrive",  
    location: "JW Marriott L.A. LIVE, Los Angeles, California",  
    subtitle: "Digital Marketplace & AI Summit",  
    description:  
      "Featuring keynotes from Steven Bartlett and Zack Kass, bringing together executive tech leadership.",  
  },  
  {  
    category: "summits",  
    date: "October 8–10, 2026",  
    title: "Wisdom in the Age of AI",  
    location: "Calvin University, Grand Rapids, Michigan",  
    subtitle: "Cross-Disciplinary Ethics & Innovation",  
    description:  
      "Examining artificial intelligence across education, business, healthcare, and the arts.",  
  },  
  {  
    category: "summits",  
    date: "October 8–9, 2026",  
    title: "Mental Health America Conference",  
    location: "Capital Hilton, Washington, D.C.",  
    subtitle: "National Advocacy & Behavioral Health",  
    description:  
      "Leading clinicians, advocates, and wellness pioneers convening in the nation's capital.",  
  },  
  {  
    category: "summits",  
    date: "October 2–4, 2026",  
    title: "AASCP Fall Scientific Session",  
    location: "Hyatt Regency Miami, Florida",  
    subtitle: "9th Annual Regenerative Medicine Summit",  
    description:  
      "Practitioners and longevity researchers exploring stem cell therapies and healthspan optimization.",  
  },  
  {  
    category: "summits",  
    date: "July 14–17, 2026",  
    title: "ICAST Orlando",  
    location: "Orlando, Florida",  
    subtitle: "Global Sportfishing Trade Summit",  
    description:  
      "Premier gathering for elite angling and marine innovation.",  
  },  
  {  
    category: "summits",  
    date: "Sept 28 – Oct 4, 2026",  
    title: "CultureCon Week NYC & West Vegas",  
    location: "New York, New York & Las Vegas, Nevada",  
    subtitle: "Creators & Innovators Summit",  
    description:  
      "Celebrating Black creatives, entrepreneurs, and digital visionaries.",  
  },  
  {  
    category: "summits",  
    date: "October 12–14, 2026",  
    title: "Summit Napa Valley",  
    location: "Napa Valley, California",  
    subtitle: "Exclusive CEO & Founder Gathering",  
    description:  
      "Private networking and estate tastings for visionary leadership.",  
  },

  // --- LIFESTYLE & HOLIDAY ---  
  {  
    category: "lifestyle",  
    date: "Nov 11 – December 30, 2026",  
    title: "Mannheim Steamroller Christmas",  
    location:  
      "80+ US Cities including Atlanta, West Palm Beach, Detroit, and Denver",  
    subtitle: "Longest-Running Holiday Tour in History",  
    description:  
      "Iconic classical-rock holiday arrangements celebrating 35+ years of seasonal magic.",  
  },  
  {  
    category: "lifestyle",  
    date: "Nov 7, 2026 – Jan 5, 2027",  
    title: "Disney Jollywood Nights",  
    location: "Orlando, Florida",  
    subtitle: "Glitz, Glamour & Holiday Magic",  
    description:  
      "Exclusive after-hours holiday celebration with curated entertainment and gourmet dining.",  
  },  
  {  
    category: "lifestyle",  
    date: "Nov 20 – Dec 31, 2026",  
    title: "Hardy's Holiday Village",  
    location: "Nemacolin, Pennsylvania",  
    subtitle: "Mid-Atlantic Winter Wonderland",  
    description:  
      "Immersive holiday luxury set within the private Nemacolin estate.",  
  },  
  {  
    category: "lifestyle",  
    date: "2026–2027 Season",  
    title: "MARVIN: The Marvin Gaye Musical",  
    location: "Various Theatrical Markets",  
    subtitle: "World Premiere Stage Event",  
    description:  
      "Celebrating the life and enduring legacy of an absolute soul legend.",  
  },  
];

export default function EventsPage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] px-6 pb-24 pt-32 text-white selection:bg-[#C5A059]/30 md:px-12">  
      <div className="mx-auto max-w-6xl space-y-16">  
        <div className="mx-auto max-w-3xl space-y-4 border-b border-white/10 pb-12 text-center">  
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5A059]">  
            Sanctuary Culture  
          </p>

          <h1 className="text-4xl font-light tracking-tight text-white md:text-6xl">  
            The Event Ledger  
          </h1>

          <p className="text-sm leading-relaxed text-white/60 md:text-base">  
            Curated access to the season&apos;s most significant gatherings —  
            from the gridiron to the stage, summits to exclusive holiday series.  
          </p>  
        </div>

        <div className="space-y-20">  
          <EventSection  
            title="HBCU Classics & Homecomings"  
            icon="✦"  
            category="hbcus"  
          />

          <EventSection  
            title="Festivals & Series"  
            icon="✦"  
            category="festivals"  
          />

          <EventSection  
            title="Concert Tours"  
            icon="♫"  
            category="concerts"  
          />

          <EventSection  
            title="Summits & Conferences"  
            icon="❖"  
            category="summits"  
          />

          <EventSection  
            title="Lifestyle & Holiday"  
            icon="❄"  
            category="lifestyle"  
          />  
        </div>

        <div className="space-y-6 border-t border-white/10 pt-16 text-center">  
          <h2 className="text-2xl font-light text-white">  
            Secure Your Access  
          </h2>

          <p className="mx-auto max-w-xl text-sm text-white/60">  
            Every event is paired with curated private aviation, estate  
            accommodations, and seamless concierge stewardship.  
          </p>

          <div>  
            <Link  
              href="https://cal.com/nexvoyagecollective/discovery-call"  
              target="_blank"  
              rel="noopener noreferrer"  
              className="inline-block bg-[#C5A059] px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-black transition-colors hover:bg-[#d4af37]"  
            >  
              Schedule a Discovery Call  
            </Link>  
          </div>  
        </div>  
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
  category: EventItem["category"];  
}) {  
  const events = ALL_EVENTS.filter((event) => event.category === category);

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
      className={`flex flex-col justify-between rounded-none border border-white/10 bg-[#111111] p-6 transition-colors hover:border-[#C5A059]/40 ${  
        event.featured ? "md:col-span-2" : ""  
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
