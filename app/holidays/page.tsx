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

const holidayCollections: HolidayCollection[] = [  
  {  
    key: 'thanksgiving',  
    eyebrow: 'November 26, 2026',  
    title: 'Thanksgiving, Reimagined',  
    description:  
      'A long weekend shaped around family, generous tables, historic settings, and time that does not feel over-programmed.',  
    planningWindow: 'Three to four nights · November 25–29, 2026',  
    image:  
      'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2200&q=85',  
    imageAlt: 'An intimate table prepared for an elegant holiday meal',  
    destinations: [  
      {  
        name: 'Charleston',  
        location: 'South Carolina',  
        label: 'NexVoyage discovered',  
        description:  
          'Historic architecture, extraordinary dining, refined hotels, and a Thanksgiving table that feels rooted rather than staged.',  
        image:  
          'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Historic Southern architecture in Charleston',  
      },  
      {  
        name: 'Savannah',  
        location: 'Georgia',  
        label: 'NexVoyage discovered',  
        description:  
          'Walkable squares, private dining, historic inns, and a slower Southern rhythm for families who want room to breathe.',  
        image:  
          'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Historic city street with mature trees and Southern character',  
      },  
      {  
        name: 'Santa Fe',  
        location: 'New Mexico',  
        label: 'NexVoyage discovered',  
        description:  
          'Adobe architecture, fireside evenings, art, Southwestern cuisine, and high-desert light for a more distinctive family escape.',  
        image:  
          'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Warm desert landscape beneath an expansive sky',  
      },  
      {  
        name: 'Sedona',  
        location: 'Arizona',  
        label: 'NexVoyage discovered',  
        description:  
          'A restorative Thanksgiving built around red-rock scenery, spa time, private guides, and a resort table already thoughtfully handled.',  
        image:  
          'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Red rock landscape and desert scenery',  
      },  
      {  
        name: 'Middleburg',  
        location: 'Virginia',  
        label: 'NexVoyage discovered',  
        description:  
          'Horse country, vineyard estates, private countryside dining, and a composed Thanksgiving for families who prefer quiet to spectacle.',  
        image:  
          'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Rolling countryside beneath a soft evening sky',  
      },  
      {  
        name: 'Williamsburg',  
        location: 'Virginia',  
        label: 'Iconic',  
        description:  
          'History gives the holiday its natural setting, with heritage programming, fireside hospitality, and an easy family rhythm.',  
        image:  
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Historic colonial-style building surrounded by autumn trees',  
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
    image:  
      'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=2200&q=85',  
    imageAlt: 'Warm Christmas lights illuminating a seasonal interior',  
    destinations: [  
      {  
        name: 'Newport',  
        location: 'Rhode Island',  
        label: 'NexVoyage discovered',  
        description:  
          'Gilded Age mansions, harbor air, decorated interiors, and an elegant coastal Christmas without the scale of a major city.',  
        image:  
          'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Historic coastal estate surrounded by winter landscape',  
      },  
      {  
        name: 'Asheville',  
        location: 'North Carolina',  
        label: 'NexVoyage discovered',  
        description:  
          'Christmas at Biltmore, Blue Ridge scenery, fireplaces, and a mountain setting with enough substance for a full seasonal journey.',  
        image:  
          'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Mountain forest with warm autumn and winter tones',  
      },  
      {  
        name: 'Santa Fe',  
        location: 'New Mexico',  
        label: 'NexVoyage discovered',  
        description:  
          'Farolitos, adobe walls, galleries, fireplaces, and Southwestern cuisine create a Christmas that feels intimate and entirely its own.',  
        image:  
          'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Warmly lit historic architecture at dusk',  
      },  
      {  
        name: 'St. Augustine',  
        location: 'Florida',  
        label: 'NexVoyage discovered',  
        description:  
          'Nights of Lights, historic streets, ocean air, and a warmer Christmas for travelers who want atmosphere without the heavy coat.',  
        image:  
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Warm coastal beach with soft evening light',  
      },  
      {  
        name: 'Jackson Hole',  
        location: 'Wyoming',  
        label: 'NexVoyage discovered',  
        description:  
          'Luxury lodges, snow, wildlife, and a stronger sense of place for families seeking a mountain Christmas with real texture.',  
        image:  
          'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Snow-covered mountain range beneath a winter sky',  
      },  
      {  
        name: 'Nantucket',  
        location: 'Massachusetts',  
        label: 'NexVoyage discovered',  
        description:  
          'An intimate island Christmas with coastal walks, decorated inns, excellent dining, and a quiet New England atmosphere.',  
        image:  
          'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Coastal shoreline and calm ocean waters',  
      },  
      {  
        name: 'Leavenworth',  
        location: 'Washington',  
        label: 'Iconic',  
        description:  
          'A Bavarian-style Christmas village surrounded by mountain scenery, lights, seasonal programming, and family tradition.',  
        image:  
          'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Snow-covered mountain village during winter',  
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
    image:  
      'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=2200&q=85',  
    imageAlt: 'Celebratory lights over a city at night',  
    destinations: [  
      {  
        name: 'Napa Valley',  
        location: 'California',  
        label: 'NexVoyage discovered',  
        description:  
          'A counterpoint to the party circuit: vineyard estates, exceptional dining, spa time, and a quietly memorable midnight.',  
        image:  
          'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Vineyard rows beneath golden evening light',  
      },  
      {  
        name: 'Charleston',  
        location: 'South Carolina',  
        label: 'NexVoyage discovered',  
        description:  
          'A historic luxury hotel, tasting-menu dinner, champagne, and a celebration with energy without the crush of Times Square.',  
        image:  
          'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Waterfront city architecture at dusk',  
      },  
      {  
        name: 'Palm Springs',  
        location: 'California',  
        label: 'NexVoyage discovered',  
        description:  
          'Resort pools, architecture, spa treatments, desert light, and sophisticated celebrations for couples or close friends.',  
        image:  
          'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Desert landscape beneath a wide open sky',  
      },  
      {  
        name: 'Scottsdale',  
        location: 'Arizona',  
        label: 'NexVoyage discovered',  
        description:  
          'A resort-led New Year with golf, wellness, desert excursions, strong dining, and no obligation to dress for snow.',  
        image:  
          'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Desert landscape with dramatic mountain surroundings',  
      },  
      {  
        name: 'San Diego',  
        location: 'California',  
        label: 'NexVoyage discovered',  
        description:  
          'Waterfront dining, yacht celebrations, polished hotels, and a mild coastal setting as an alternative to Miami.',  
        image:  
          'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Coastal city and ocean viewed in warm evening light',  
      },  
      {  
        name: 'Santa Fe',  
        location: 'New Mexico',  
        label: 'NexVoyage discovered',  
        description:  
          'Fireplaces, art, spa, Southwestern cuisine, and winter scenery for a four- or five-night New Year with a slower pulse.',  
        image:  
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Desert landscape glowing beneath a late-day sky',  
      },  
      {  
        name: 'Savannah',  
        location: 'Georgia',  
        label: 'NexVoyage discovered',  
        description:  
          'Historic hotels, excellent restaurants, cocktails, riverfront energy, and a romantic celebration with a strong sense of place.',  
        image:  
          'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Historic city architecture framed by trees',  
      },  
      {  
        name: 'Maui',  
        location: 'Hawaii',  
        label: 'Iconic',  
        description:  
          'Turn the holiday into a true vacation: ocean time, resort recovery, private experiences, and a New Year that does not end after midnight.',  
        image:  
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',  
        alt: 'Tropical beach and calm ocean at sunset',  
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
          src="https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=2400&q=90"  
          alt="Warm holiday lights glowing against a dark winter evening"  
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
            Three seasons. Eighteen distinct ways to gather, restore, and  
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
          <HolidaySection key={collection.key} collection={collection} />  
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
