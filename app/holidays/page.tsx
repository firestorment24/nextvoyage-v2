import type { Metadata } from 'next';  
import Link from 'next/link';

export const metadata: Metadata = {  
  title: 'The Holiday Collection | NexVoyage Collective',  
  description:  
    'A considered holiday travel collection for Thanksgiving, Christmas, and New Year’s — from quiet coastal escapes to mountain sanctuaries and destination celebrations.',  
  alternates: {  
    canonical: 'https://nexvoyagecollective.com/holidays',  
  },  
};

type HolidayKey = 'thanksgiving' | 'christmas' | 'new-year';

interface HolidayDestination {  
  name: string;  
  location: string;  
  label: 'Iconic' | 'NexVoyage discovered';  
  description: string;  
  image: string;  
  alt: string;  
}

interface HolidayCollection {  
  key: HolidayKey;  
  eyebrow: string;  
  title: string;  
  description: string;  
  planningWindow: string;  
  image: string;  
  imageAlt: string;  
  destinations: HolidayDestination[];  
}

const CTA_URL = 'https://cal.com/nexvoyagecollective/discovery-call';

const images = {  
  charleston:  
    'https://images.unsplash.com/photo-1684277770294-5564b0ebe291?auto=format&fit=crop&w=1600&q=85',  
  savannah:  
    'https://images.unsplash.com/photo-1721370808855-ed8b99beea87?auto=format&fit=crop&w=1600&q=85',  
  santaFe:  
    'https://images.unsplash.com/photo-1752342646740-d10264e4ea07?auto=format&fit=crop&w=1600&q=85',  
  sedona:  
    'https://images.unsplash.com/photo-1745882094247-ef63654f99c7?auto=format&fit=crop&w=1600&q=85',  
  middleburg:  
    'https://images.unsplash.com/photo-1666908954730-ad4852009970?auto=format&fit=crop&w=1600&q=85',  
  williamsburg:  
    'https://images.unsplash.com/photo-1572466920113-5c75b857c4dd?auto=format&fit=crop&w=1600&q=85',  
  newport:  
    'https://images.unsplash.com/photo-1561723236-753ad66c3561?auto=format&fit=crop&w=1600&q=85',  
  asheville:  
    'https://images.unsplash.com/photo-1671500313906-e82e2e71246c?auto=format&fit=crop&w=1600&q=85',  
  stAugustine:  
    'https://images.unsplash.com/photo-1578364363146-d5745d65a36a?auto=format&fit=crop&w=1600&q=85',  
  jacksonHole:  
    'https://images.unsplash.com/photo-1579497145132-9cecee960a5e?auto=format&fit=crop&w=1600&q=85',  
  nantucket:  
    'https://images.unsplash.com/photo-1758201510495-0a9e28fb0632?auto=format&fit=crop&w=1600&q=85',  
  leavenworth:  
    'https://images.unsplash.com/photo-1664211912374-fe659166092b?auto=format&fit=crop&w=1600&q=85',  
  newYork:  
    'https://images.unsplash.com/photo-1751412153077-cdee4255c7d8?auto=format&fit=crop&w=1600&q=85',  
  napa:  
    'https://images.unsplash.com/photo-1701624019104-d37423bd30bc?auto=format&fit=crop&w=1600&q=85',  
  palmSprings:  
    'https://images.unsplash.com/photo-1623414936204-89e5d9702f48?auto=format&fit=crop&w=1600&q=85',  
  scottsdale:  
    'https://images.unsplash.com/photo-1594619018182-5f6fc29985af?auto=format&fit=crop&w=1600&q=85',  
  sanDiego:  
    'https://images.unsplash.com/photo-1758272470558-816d5e8a1cbf?auto=format&fit=crop&w=1600&q=85',  
  maui:  
    'https://images.unsplash.com/photo-1571955179352-956a4399b679?auto=format&fit=crop&w=1600&q=85',  
  miami:  
    'https://images.unsplash.com/photo-1748380606266-fc4bf7999f35?auto=format&fit=crop&w=1600&q=85',  
};

const holidayCollections: HolidayCollection[] = [  
  {  
    key: 'thanksgiving',  
    eyebrow: 'November 26, 2026',  
    title: 'Thanksgiving, Reimagined',  
    description:  
      'A long weekend shaped around family, generous tables, historic settings, and time that does not feel over-programmed.',  
    planningWindow: 'Three to four nights · November 25–29, 2026',  
    image: images.charleston,  
    imageAlt:  
      'Tree-lined historic street in Charleston, South Carolina',  
    destinations: [  
      {  
        name: 'Charleston',  
        location: 'South Carolina',  
        label: 'NexVoyage discovered',  
        description:  
          'Historic architecture, extraordinary dining, refined hotels, and a Thanksgiving table that feels rooted rather than staged.',  
        image: images.charleston,  
        alt:  
          'Historic tree-lined cobblestone street in Charleston, South Carolina',  
      },  
      {  
        name: 'Savannah',  
        location: 'Georgia',  
        label: 'NexVoyage discovered',  
        description:  
          'Walkable squares, private dining, historic inns, and a slower Southern rhythm for families who want room to breathe.',  
        image: images.savannah,  
        alt:  
          'Spanish moss hanging from live oak trees in Savannah, Georgia',  
      },  
      {  
        name: 'Santa Fe',  
        location: 'New Mexico',  
        label: 'NexVoyage discovered',  
        description:  
          'Adobe architecture, fireside evenings, art, Southwestern cuisine, and high-desert light for a more distinctive family escape.',  
        image: images.santaFe,  
        alt:  
          'Traditional adobe architecture in Santa Fe, New Mexico',  
      },  
      {  
        name: 'Sedona',  
        location: 'Arizona',  
        label: 'NexVoyage discovered',  
        description:  
          'A restorative Thanksgiving built around red-rock scenery, spa time, private guides, and a resort table already thoughtfully handled.',  
        image: images.sedona,  
        alt:  
          'Red-rock formations and desert landscape in Sedona, Arizona',  
      },  
      {  
        name: 'Middleburg',  
        location: 'Virginia',  
        label: 'NexVoyage discovered',  
        description:  
          'Horse country, vineyard estates, private countryside dining, and a composed Thanksgiving for families who prefer quiet to spectacle.',  
        image: images.middleburg,  
        alt:  
          'Central Virginia countryside and rolling rural landscape near Middleburg',  
      },  
      {  
        name: 'Williamsburg',  
        location: 'Virginia',  
        label: 'Iconic',  
        description:  
          'History gives the holiday its natural setting, with heritage programming, fireside hospitality, and an easy family rhythm.',  
        image: images.williamsburg,  
        alt:  
          'Historic brick architecture at Colonial Williamsburg in Virginia',  
      },  
    ],  
  },  
  {  
    key: 'christmas',  
    eyebrow: 'December 2026',  
    title: 'A Storybook Christmas',  
    description:  
      'A collection of glowing streets, decorated estates, mountain air, old-world traditions, and the kind of atmosphere that makes the season feel genuinely different.',  
    planningWindow: 'Four to seven nights · December 19–27, 2026',  
    image: images.asheville,  
    imageAlt:  
      'Christmas tree and holiday decorations inside the Biltmore Estate library in Asheville',  
    destinations: [  
      {  
        name: 'New York City',  
        location: 'New York',  
        label: 'Iconic',  
        description:  
          'Rockefeller Center, Fifth Avenue, Broadway, private shopping appointments, and the unmistakable energy of the city at its most theatrical.',  
        image: images.newYork,  
        alt:  
          'Christmas tree at Rockefeller Center in New York City',  
      },  
      {  
        name: 'Newport',  
        location: 'Rhode Island',  
        label: 'NexVoyage discovered',  
        description:  
          'Gilded Age mansions, harbor air, decorated interiors, and an elegant coastal Christmas without the scale of a major city.',  
        image: images.newport,  
        alt:  
          'Newport Harbor in Newport, Rhode Island',  
      },  
      {  
        name: 'Asheville',  
        location: 'North Carolina',  
        label: 'NexVoyage discovered',  
        description:  
          'Christmas at Biltmore, Blue Ridge scenery, fireplaces, and a mountain setting with enough substance for a full seasonal journey.',  
        image: images.asheville,  
        alt:  
          'Christmas decorations inside the Biltmore Estate library in Asheville, North Carolina',  
      },  
      {  
        name: 'Santa Fe',  
        location: 'New Mexico',  
        label: 'NexVoyage discovered',  
        description:  
          'Farolitos, adobe walls, galleries, fireplaces, and Southwestern cuisine create a Christmas that feels intimate and entirely its own.',  
        image: images.santaFe,  
        alt:  
          'Adobe architecture beneath a clear blue sky in Santa Fe, New Mexico',  
      },  
      {  
        name: 'St. Augustine',  
        location: 'Florida',  
        label: 'NexVoyage discovered',  
        description:  
          'Nights of Lights, historic streets, ocean air, and a warmer Christmas for travelers who want atmosphere without the heavy coat.',  
        image: images.stAugustine,  
        alt:  
          'Historic Old City street in St. Augustine, Florida',  
      },  
      {  
        name: 'Jackson Hole',  
        location: 'Wyoming',  
        label: 'NexVoyage discovered',  
        description:  
          'Luxury lodges, snow, wildlife, and a stronger sense of place for families seeking a mountain Christmas with real texture.',  
        image: images.jacksonHole,  
        alt:  
          'Snow-covered town and mountains in Jackson Hole, Wyoming',  
      },  
      {  
        name: 'Nantucket',  
        location: 'Massachusetts',  
        label: 'NexVoyage discovered',  
        description:  
          'An intimate island Christmas with coastal walks, decorated inns, excellent dining, and a quiet New England atmosphere.',  
        image: images.nantucket,  
        alt:  
          'Boat and harbor scene in Nantucket, Massachusetts',  
      },  
      {  
        name: 'Leavenworth',  
        location: 'Washington',  
        label: 'Iconic',  
        description:  
          'A Bavarian-style Christmas village surrounded by mountain scenery, lights, seasonal programming, and family tradition.',  
        image: images.leavenworth,  
        alt:  
          'Christmas lights illuminating a building in Leavenworth, Washington',  
      },  
    ],  
  },  
  {  
    key: 'new-year',  
    eyebrow: 'December 31, 2026 – January 1, 2027',  
    title: 'Midnight, Elevated',  
    description:  
      'Not every New Year deserves a crowded square or a louder room. Some are better marked by a private dinner, a spa morning, champagne, and a destination with its own point of view.',  
    planningWindow: 'Four to seven nights · December 27, 2026–January 3, 2027',  
    image: images.miami,  
    imageAlt:  
      'Miami waterfront skyline viewed across Biscayne Bay',  
    destinations: [  
      {  
        name: 'Napa Valley',  
        location: 'California',  
        label: 'NexVoyage discovered',  
        description:  
          'A counterpoint to the party circuit: vineyard estates, exceptional dining, spa time, and a quietly memorable midnight.',  
        image: images.napa,  
        alt:  
          'Napa Valley vineyard landscape with autumn fields and surrounding hills',  
      },  
      {  
        name: 'Charleston',  
        location: 'South Carolina',  
        label: 'NexVoyage discovered',  
        description:  
          'A historic luxury hotel, tasting-menu dinner, champagne, and a celebration with energy without the crush of Times Square.',  
        image: images.charleston,  
        alt:  
          'Historic Charleston street shaded by mature trees',  
      },  
      {  
        name: 'Palm Springs',  
        location: 'California',  
        label: 'NexVoyage discovered',  
        description:  
          'Resort pools, architecture, spa treatments, desert light, and sophisticated celebrations for couples or close friends.',  
        image: images.palmSprings,  
        alt:  
          'Mid-century modern home with palm trees in Palm Springs, California',  
      },  
      {  
        name: 'Scottsdale',  
        location: 'Arizona',  
        label: 'NexVoyage discovered',  
        description:  
          'A resort-led New Year with golf, wellness, desert excursions, strong dining, and no obligation to dress for snow.',  
        image: images.scottsdale,  
        alt:  
          'Camelback Mountain and the Sonoran Desert near Scottsdale, Arizona',  
      },  
      {  
        name: 'San Diego',  
        location: 'California',  
        label: 'NexVoyage discovered',  
        description:  
          'Waterfront dining, yacht celebrations, polished hotels, and a mild coastal setting as an alternative to Miami.',  
        image: images.sanDiego,  
        alt:  
          'San Diego skyline viewed across the harbor in California',  
      },  
      {  
        name: 'Santa Fe',  
        location: 'New Mexico',  
        label: 'NexVoyage discovered',  
        description:  
          'Fireplaces, art, spa, Southwestern cuisine, and winter scenery for a four- or five-night New Year with a slower pulse.',  
        image: images.santaFe,  
        alt:  
          'Traditional adobe architecture in Santa Fe, New Mexico',  
      },  
      {  
        name: 'Savannah',  
        location: 'Georgia',  
        label: 'NexVoyage discovered',  
        description:  
          'Historic hotels, excellent restaurants, cocktails, riverfront energy, and a romantic celebration with a strong sense of place.',  
        image: images.savannah,  
        alt:  
          'Spanish moss and live oak trees in Savannah, Georgia',  
      },  
      {  
        name: 'Maui',  
        location: 'Hawaii',  
        label: 'Iconic',  
        description:  
          'Turn the holiday into a true vacation: ocean time, resort recovery, private experiences, and a New Year that does not end after midnight.',  
        image: images.maui,  
        alt:  
          'Sunset over the Maui coastline in Hawaii',  
      },  
      {  
        name: 'Miami',  
        location: 'Florida',  
        label: 'Iconic',  
        description:  
          'Waterfront hotels, yacht celebrations, private dining, and the energy of a destination that knows how to mark midnight.',  
        image: images.miami,  
        alt:  
          'Miami skyline and Biscayne Bay waterfront in Florida',  
      },  
    ],  
  },  
];

const holidaySchema = {  
  '@context': 'https://schema.org',  
  '@type': 'CollectionPage',  
  name: 'The Holiday Collection',  
  url: 'https://nexvoyagecollective.com/holidays',  
  description:  
    'A considered holiday travel collection for Thanksgiving, Christmas, and New Year’s.',  
  publisher: {  
    '@type': 'Organization',  
    name: 'NexVoyage Collective',  
    url: 'https://nexvoyagecollective.com',  
  },  
  hasPart: holidayCollections.map((collection) => ({  
    '@type': 'ItemList',  
    name: collection.title,  
    itemListElement: collection.destinations.map((destination, index) => ({  
      '@type': 'ListItem',  
      position: index + 1,  
      name: `${destination.name}, ${destination.location}`,  
    })),  
  })),  
};

export default function HolidaysPage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D4AF37] selection:text-black">  
      <script  
        type="application/ld+json"  
        dangerouslySetInnerHTML={{  
          __html: JSON.stringify(holidaySchema),  
        }}  
      />

      <section className="relative flex min-h-[78vh] items-center justify-center overflow-hidden">  
        <img  
          src={images.asheville}  
          alt="Christmas tree and holiday decorations inside the Biltmore Estate library"  
          className="absolute inset-0 h-full w-full object-cover opacity-45"  
          fetchPriority="high"  
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/60 to-[#0A0A0A]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-16 text-center">  
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]">  
            Seasonal Journeys  
          </p>

          <h1 className="mt-5 text-5xl font-light tracking-tight text-[#D4AF37] md:text-8xl">  
            The Holiday  
            <span className="block text-white">Collection</span>  
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg">  
            Three seasons. A considered set of ways to gather, restore, and  
            mark the turn of the year.  
          </p>

          <div className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.25em] text-white/50">  
            <a  
              href="#thanksgiving"  
              className="transition-colors hover:text-[#D4AF37]"  
            >  
              Thanksgiving  
            </a>

            <span className="text-[#D4AF37]">•</span>

            <a  
              href="#christmas"  
              className="transition-colors hover:text-[#D4AF37]"  
            >  
              Christmas  
            </a>

            <span className="text-[#D4AF37]">•</span>

            <a  
              href="#new-year"  
              className="transition-colors hover:text-[#D4AF37]"  
            >  
              New Year&apos;s  
            </a>  
          </div>  
        </div>  
      </section>

      <section className="border-y border-white/10 bg-[#111111]">  
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3 md:px-12 md:py-16">  
          <div>  
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">  
              Thanksgiving  
            </p>

            <p className="mt-3 text-sm leading-relaxed text-white/60">  
              Family tables, historic settings, and long-weekend escapes.  
            </p>  
          </div>

          <div>  
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">  
              Christmas  
            </p>

            <p className="mt-3 text-sm leading-relaxed text-white/60">  
              Lights, snow, fireside traditions, and a little more atmosphere.  
            </p>  
          </div>

          <div>  
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">  
              New Year&apos;s  
            </p>

            <p className="mt-3 text-sm leading-relaxed text-white/60">  
              Midnight celebrations, quiet luxury, wellness, and warm weather.  
            </p>  
          </div>  
        </div>  
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:px-12 md:py-32">  
        <p className="text-5xl font-light leading-none text-white/20">“</p>

        <blockquote className="mt-6 text-2xl font-light leading-relaxed text-white/80 md:text-4xl">  
          The best holiday journeys do not simply take you somewhere. They  
          create the atmosphere in which the season is remembered.  
        </blockquote>

        <div className="mx-auto mt-8 h-px w-12 bg-[#D4AF37]/60" />

        <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">  
          NexVoyage Collective  
        </p>  
      </section>

      <div className="space-y-32 pb-24 md:space-y-40">  
        {holidayCollections.map((collection) => (  
          <HolidaySection  
            key={collection.key}  
            collection={collection}  
          />  
        ))}  
      </div>

      <section className="border-t border-white/10 bg-[#0E0E0E] px-6 py-24 text-center md:px-12 md:py-32">  
        <div className="mx-auto max-w-3xl">  
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">  
            Begin the Conversation  
          </p>

          <h2 className="mt-5 text-4xl font-light tracking-tight text-white md:text-6xl">  
            Make the season  
            <span className="block text-[#D4AF37]">entirely your own.</span>  
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">  
            Tell us how you want to gather, where you want to restore, and  
            what the holiday should feel like. We will shape the route around  
            it.  
          </p>

          <Link  
            href={CTA_URL}  
            target="_blank"  
            rel="noopener noreferrer"  
            className="mt-10 inline-block border border-[#D4AF37] px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-black"  
          >  
            Schedule a Discovery Call  
          </Link>  
        </div>  
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center md:px-12">  
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">  
          Dates, properties, experiences, and availability are confirmed  
          before any client-facing proposal is released.  
        </p>  
      </footer>  
    </main>  
  );  
}

function HolidaySection({  
  collection,  
}: {  
  collection: HolidayCollection;  
}) {  
  return (  
    <section id={collection.key} className="scroll-mt-16">  
      <div className="mx-auto max-w-7xl px-6 md:px-12">  
        <div className="relative min-h-[52vh] overflow-hidden border border-white/10">  
          <img  
            src={collection.image}  
            alt={collection.imageAlt}  
            className="absolute inset-0 h-full w-full object-cover"  
            loading="lazy"  
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />  
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/75 via-transparent to-transparent" />

          <div className="relative flex min-h-[52vh] items-end p-8 md:p-14">  
            <div className="max-w-2xl">  
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">  
                {collection.eyebrow}  
              </p>

              <h2 className="mt-5 text-4xl font-light tracking-tight text-white md:text-7xl">  
                {collection.title}  
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">  
                {collection.description}  
              </p>

              <p className="mt-7 text-[10px] uppercase tracking-[0.2em] text-white/45">  
                {collection.planningWindow}  
              </p>  
            </div>  
          </div>  
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">  
          {collection.destinations.map((destination) => (  
            <HolidayCard  
              key={`${collection.key}-${destination.name}`}  
              destination={destination}  
            />  
          ))}  
        </div>  
      </div>  
    </section>  
  );  
}

function HolidayCard({  
  destination,  
}: {  
  destination: HolidayDestination;  
}) {  
  return (  
    <article className="group overflow-hidden border border-white/10 bg-[#111111] transition-colors hover:border-[#D4AF37]/50">  
      <div className="relative aspect-[4/3] overflow-hidden">  
        <img  
          src={destination.image}  
          alt={destination.alt}  
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"  
          loading="lazy"  
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <span className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.2em] text-white/75">  
          {destination.label}  
        </span>  
      </div>

      <div className="space-y-4 p-6">  
        <div>  
          <h3 className="text-2xl font-light text-white">  
            {destination.name}  
          </h3>

          <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">  
            {destination.location}  
          </p>  
        </div>

        <p className="text-sm leading-relaxed text-white/55">  
          {destination.description}  
        </p>

        <Link  
          href={CTA_URL}  
          target="_blank"  
          rel="noopener noreferrer"  
          className="inline-flex border-b border-[#D4AF37]/60 pb-1 text-[10px] uppercase tracking-[0.18em] text-[#D4AF37] transition-colors hover:text-white"  
        >  
          Discuss this destination →  
        </Link>  
      </div>  
    </article>  
  );  
}  
