import type { Metadata } from 'next';  
import Link from 'next/link';  
import CelebrationInquiry from '@/components/CelebrationInquiry';

export const metadata: Metadata = {  
title: 'Celebrating Her | The Celebration Collection',  
description:  
'Luxury milestone travel for women, friendships, families, sororities, and professional circles marking the moments that matter.',  
keywords: [  
'luxury milestone travel',  
'women’s celebration travel',  
'luxury group journeys',  
'sorority travel',  
'multigenerational women’s travel',  
'executive women’s retreats',  
],  
alternates: {  
canonical: 'https://nexvoyagecollective.com/celebrating-her',  
},  
openGraph: {  
title: 'Celebrating Her | The Celebration Collection',  
description:  
  'Milestone journeys designed around the women, friendships, and moments worth traveling for.',  
url: 'https://nexvoyagecollective.com/celebrating-her',  
type: 'website',  
},  
};

const CTA_URL = 'https://cal.com/nexvoyagecollective/discovery-call';

const heroImage =  
'https://images.unsplash.com/photo-1536735382886-6b592aee0f2d?auto=format&fit=crop&w=2400&q=90';

const collectionCategories = [  
{  
number: '01',  
title: 'Milestone',  
subtitle: 'Birthdays that deserve a destination.',  
body:  
  'Designed for significant birthdays and personal milestones that call for more than dinner and a card.',  
},  
{  
number: '02',  
title: 'The Next Chapter',  
subtitle: 'Freedom, with a point of view.',  
body:  
  'Retirement, empty nest, reinvention, and the rare pleasure of deciding what comes next.',  
},  
{  
number: '03',  
title: 'Sisterhood',  
subtitle: 'Time together, intentionally kept.',  
body:  
  'Luxury experiences for sisters, cousins, and lifelong friends reconnecting with intention.',  
},  
{  
number: '04',  
title: 'Legacy',  
subtitle: 'The memories that travel forward.',  
body:  
  'Mother-daughter and multigenerational journeys centered on heritage, memory, and meaningful time together.',  
},  
{  
number: '05',  
title: 'The Divine Nine',  
subtitle: 'Sisterhood with cultural care.',  
body:  
  'Elevated reunions, chapter anniversaries, line anniversaries, and sorority journeys shaped with respect and understanding.',  
},  
{  
number: '06',  
title: 'Women Who Lead',  
subtitle: 'Restoration for the people shaping what comes next.',  
body:  
  'Luxury retreats for executives, entrepreneurs, and professional organizations requiring both restoration and strategic space.',  
},  
];

const journeys = [  
{  
number: '01',  
title: 'Fifty & Unapologetic',  
location: 'Mendoza, Argentina',  
description:  
  'Vineyard estates, Andean landscapes, private tastings, spa time, and a chef-led birthday dinner.',  
image:  
  'https://images.unsplash.com/photo-1687976520525-8293102be3fd?auto=format&fit=crop&w=1600&q=85',  
alt: 'Vineyard rows with mountains in the background',  
},  
{  
number: '02',  
title: 'The Next Chapter',  
location: 'Madeira, Portugal',  
description:  
  'Ocean views, gardens, restorative wellness, private island experiences, and long-table dining.',  
image:  
  'https://images.unsplash.com/photo-1683554824285-fd10843e764b?auto=format&fit=crop&w=1600&q=85',  
alt: 'Madeira coastline with green cliffs and Atlantic ocean',  
},  
{  
number: '03',  
title: 'Sisterhood, Reimagined',  
location: 'Puglia & Matera, Italy',  
description:  
  'Masserias, private cooking, regional artisans, photography, and intimate cultural experiences.',  
image:  
  'https://images.unsplash.com/photo-1753641390035-0a949ca6d913?auto=format&fit=crop&w=1600&q=85',  
alt: 'Traditional trulli houses in Puglia, Italy',  
},  
{  
number: '04',  
title: 'Legacy in the Sacred Valley',  
location: 'Peru',  
description:  
  'A mother-daughter or multigenerational journey shaped around heritage, ritual, textiles, and meaningful time together.',  
image:  
  'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1600&q=85',  
alt: 'Mountain landscape in the Sacred Valley of Peru',  
},  
{  
number: '05',  
title: 'Sisterhood and Legacy',  
location: 'Accra & Cape Coast, Ghana',  
description:  
  'History, culture, music, design, and connection across Ghana’s Atlantic coast.',  
image: 'https://cdn.marblism.com/mzXMGVHhdtA.png',  
alt: 'Women celebrating together at an outdoor gathering in Ghana',  
},  
{  
number: '06',  
title: 'The Executive Reset',  
location: 'SHA Wellness Mexico',  
description:  
  'A restorative retreat focused on longevity, sleep, movement, wellness, and private strategic space.',  
image:  
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',  
alt: 'Quiet wellness interior with natural light',  
},  
{  
number: '07',  
title: 'The Adriatic Circle',  
location: 'Montenegro, Croatia & Slovenia',  
description:  
  'Private villas or small-yacht travel, coastal dining, design, and discreet service.',  
image:  
  'https://images.unsplash.com/photo-1755507093082-b38c11286f38?auto=format&fit=crop&w=1600&q=85',  
alt: 'Yachts anchored in the Bay of Kotor, Montenegro',  
},  
{  
number: '08',  
title: 'A Sixtieth Worth Crossing an Ocean For',  
location: 'Sri Lanka',  
description:  
  'Tea country, wildlife, heritage hotels, a private celebration dinner, and restorative stays.',  
image:  
  'https://images.unsplash.com/photo-1559038297-5b37efcd59d4?auto=format&fit=crop&w=1600&q=85',  
alt: 'Woman walking a path through a tea plantation in Nuwara Eliya, Sri Lanka',  
},  
{  
number: '09',  
title: 'The Celebration Voyage',  
location: 'Explora Journeys',  
description:  
  'A milestone sailing for approximately 8–30 women, with private dining, wellness, curated shore experiences, and one signature celebration evening.',  
image: 'https://cdn.marblism.com/5OEF5lrLWhG.webp',  
alt: 'Explora Journeys ships sailing together at sunset',  
},  
{  
number: '10',  
title: 'The Desert Chapter',  
location: 'Abu Dhabi & the UAE',  
description:  
  'Art, architecture, private desert dining, spa rituals, and a distinctive setting for a new chapter or executive retreat.',  
image:  
  'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=85',  
alt: 'Desert landscape beneath a warm evening sky',  
},  
];

const approachPoints = [  
'Sanctuaries selected around the people, the occasion, and the rhythm of the journey.',  
'Movement arranged so that no one has to think about the next step.',  
'Experiences chosen for the group rather than the itinerary.',  
'Restoration built into the schedule where it actually matters.',  
'Dining and celebration moments produced, not simply booked.',  
'Photography and personal details captured where requested.',  
'One planning relationship across the entire celebration.',  
'Continuity from the first conversation through the journey home.',  
];

const capabilities = [  
'Private villas and exceptional hotels',  
'Private aviation and premium commercial air',  
'Yachts and private transfers',  
'Destination specialists',  
'Private dining and chef experiences',  
'Wellness and spa programming',  
'Cultural access',  
'Celebration production',  
'Photography',  
'Complex group movements',  
'Pre- and post-journey extensions',  
];

const collectionSchema = {  
'@context': 'https://schema.org',  
'@type': 'CollectionPage',  
name: 'Celebrating Her : The Celebration Collection',  
url: 'https://nexvoyagecollective.com/celebrating-her',  
description:  
'Luxury milestone travel for women, friendships, families, sororities, and professional circles.',  
publisher: {  
'@type': 'Organization',  
name: 'NexVoyage Collective',  
url: 'https://nexvoyagecollective.com',  
},  
};

export default function CelebratingHerPage() {  
return (  
<main className="min-h-screen bg-[#071421] text-[#F4EFE6] selection:bg-[#D7B56D] selection:text-[#071421]">  
  <script  
    type="application/ld+json"  
    dangerouslySetInnerHTML={{  
      __html: JSON.stringify(collectionSchema),  
    }}  
  />

  <section className="relative flex min-h-[88vh] items-end overflow-hidden">  
    <img  
      src={heroImage}  
      alt="Woman walking through a vineyard with a glass of wine"  
      className="absolute inset-0 h-full w-full object-cover"  
      fetchPriority="high"  
    />

    <div className="absolute inset-0 bg-gradient-to-r from-[#071421]/95 via-[#071421]/55 to-[#071421]/20" />  
    <div className="absolute inset-0 bg-gradient-to-t from-[#071421] via-transparent to-[#071421]/10" />

    <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:px-12 md:pb-28">  
      <div className="max-w-3xl">  
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#D7B56D]">  
          The Celebration Collection  
        </p>

        <h1 className="mt-6 text-6xl font-light leading-[0.95] tracking-tight text-[#F4EFE6] md:text-9xl">  
          Celebrating  
          <span className="block text-[#D7B56D]">Her</span>  
        </h1>

        <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-[#F4EFE6]/80 md:text-2xl">  
          Milestone journeys designed around the women, friendships, and  
          moments worth traveling for.  
        </p>

        <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed text-[#F4EFE6]/60">  
          Birthdays. Retirement. Sisterhood. Sorority milestones.  
          Reunions. Professional retreats. And sometimes, simply because  
          it is time.  
        </p>

        <Link  
          href={CTA_URL}  
          target="_blank"  
          rel="noopener noreferrer"  
          className="mt-10 inline-flex border border-[#D7B56D] px-7 py-4 font-sans text-[10px] uppercase tracking-[0.24em] text-[#D7B56D] transition-colors hover:bg-[#D7B56D] hover:text-[#071421]"  
        >  
          Begin Designing Her Journey →  
        </Link>  
      </div>  
    </div>  
  </section>

  <section className="border-y border-[#F4EFE6]/10 bg-[#0B1C2B]">  
    <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-12 md:py-32">  
      <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#D7B56D]">  
        The Occasion Is the Beginning  
      </p>

      <h2 className="mt-6 text-4xl font-light tracking-tight md:text-6xl">  
        The destination is only  
        <span className="block text-[#D7B56D]">the beginning.</span>  
      </h2>

      <div className="mt-8 space-y-6 font-sans text-sm font-light leading-relaxed text-[#F4EFE6]/65 md:text-base">  
        <p>  
          A Celebration Collection journey is designed around the moment  
          itself : the birthday that deserves more than dinner, the  
          retirement that opens a new chapter, the reunion years in the  
          making, or the gathering that becomes part of family history.  
        </p>

        <p>  
          NexVoyage manages the details with discretion and precision,  
          creating travel that feels personal, seamless, and worthy of  
          the occasion.  
        </p>  
      </div>  
    </div>  
  </section>

  <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">  
    <div className="mb-14 max-w-2xl">  
      <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#D7B56D]">  
        Six Ways to Gather  
      </p>

      <h2 className="mt-5 text-4xl font-light tracking-tight md:text-6xl">  
        Designed around  
        <span className="block text-[#D7B56D]">what matters.</span>  
      </h2>  
    </div>

    <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">  
      {collectionCategories.map((category) => (  
        <article  
          key={category.number}  
          className="border-t border-[#F4EFE6]/15 pt-6"  
        >  
          <p className="font-mono text-[10px] tracking-[0.25em] text-[#D7B56D]">  
            {category.number}  
          </p>

          <h3 className="mt-5 text-2xl font-light">{category.title}</h3>

          <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.18em] text-[#D7B56D]/80">  
            {category.subtitle}  
          </p>

          <p className="mt-5 font-sans text-sm font-light leading-relaxed text-[#F4EFE6]/55">  
            {category.body}  
          </p>  
        </article>  
      ))}  
    </div>  
  </section>

  <section className="border-y border-[#F4EFE6]/10 bg-[#F4EFE6] text-[#071421]">  
    <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-12 md:py-32">  
      <div>  
        <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#8A6A2D]">  
          For the One Who Organizes  
        </p>

        <h2 className="mt-5 text-4xl font-light tracking-tight md:text-6xl">  
          You celebrate.  
          <span className="block text-[#8A6A2D]">We coordinate.</span>  
        </h2>  
      </div>

      <div className="space-y-6 font-sans text-sm leading-relaxed text-[#071421]/70 md:text-base">  
        <p>  
          Bringing everyone together should not mean becoming the  
          group&apos;s travel coordinator. NexVoyage serves as the central  
          planning relationship for the journey : aligning  
          accommodations, transportation, experiences, dining,  
          celebration details, and traveler logistics around one  
          thoughtfully designed itinerary.  
        </p>

        <p className="text-[#071421]">  
          You remain the reason everyone is gathering. We manage the  
          architecture around it.  
        </p>  
      </div>  
    </div>  
  </section>

  <section className="mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-32">  
    <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-start">  
      <div>  
        <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#D7B56D]">  
          The NexVoyage Approach  
        </p>

        <h2 className="mt-5 text-4xl font-light tracking-tight md:text-6xl">  
          The moment deserves  
          <span className="block text-[#D7B56D]">  
            a proper architecture.  
          </span>  
        </h2>  
      </div>

      <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">  
        {approachPoints.map((point, index) => (  
          <div  
            key={point}  
            className="flex gap-4 border-t border-[#F4EFE6]/10 pt-4"  
          >  
            <span className="font-mono text-[10px] text-[#D7B56D]">  
              {String(index + 1).padStart(2, '0')}  
            </span>

            <p className="font-sans text-sm font-light leading-relaxed text-[#F4EFE6]/65">  
              {point}  
            </p>  
          </div>  
        ))}  
      </div>  
    </div>  
  </section>

  <section className="border-y border-[#F4EFE6]/10 bg-[#0B1C2B]">  
    <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">  
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">  
        <div className="max-w-2xl">  
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#D7B56D]">  
            Sample Invitations  
          </p>

          <h2 className="mt-5 text-4xl font-light tracking-tight md:text-6xl">  
            The Signature  
            <span className="block text-[#D7B56D]">  
              Journey Portfolio  
            </span>  
          </h2>  
        </div>

        <p className="max-w-sm font-sans text-sm leading-relaxed text-[#F4EFE6]/50">  
          These are starting points : not packages. The final journey is  
          shaped around the people, the occasion, and the way the moment  
          should feel.  
        </p>  
      </div>

      <div className="grid gap-7 md:grid-cols-2">  
        {journeys.map((journey) => (  
          <article  
            key={journey.number}  
            className="group overflow-hidden border border-[#F4EFE6]/10 bg-[#071421]"  
          >  
            <div className="relative aspect-[16/9] overflow-hidden">  
              <img  
                src={journey.image}  
                alt={journey.alt}  
                loading="lazy"  
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"  
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071421] via-transparent to-transparent" />

              <span className="absolute bottom-5 left-6 font-mono text-[10px] tracking-[0.25em] text-[#D7B56D]">  
                {journey.number}  
              </span>  
            </div>

            <div className="p-7 md:p-8">  
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#D7B56D]">  
                {journey.location}  
              </p>

              <h3 className="mt-3 text-2xl font-light">  
                {journey.title}  
              </h3>

              <p className="mt-5 font-sans text-sm font-light leading-relaxed text-[#F4EFE6]/55">  
                {journey.description}  
              </p>

              <Link  
                href="#inquiry"  
                className="mt-6 inline-flex border-b border-[#D7B56D]/60 pb-1 font-sans text-[10px] uppercase tracking-[0.18em] text-[#D7B56D] transition-colors hover:text-white"  
              >  
                See how this could work for your group →  
              </Link>  
            </div>  
          </article>  
        ))}  
      </div>  
    </div>  
  </section>

  <section className="mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-32">  
    <div className="max-w-3xl">  
      <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#D7B56D]">  
        Capability  
      </p>

      <h2 className="mt-5 text-4xl font-light tracking-tight md:text-6xl">  
        Designed privately.  
        <span className="block text-[#D7B56D]">  
          Executed precisely.  
        </span>  
      </h2>

      <p className="mt-7 font-sans text-sm leading-relaxed text-[#F4EFE6]/60 md:text-base">  
        An engagement can bring together any of the following, depending  
        on what the journey asks for.  
      </p>  
    </div>

    <div className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">  
      {capabilities.map((capability) => (  
        <div  
          key={capability}  
          className="border-t border-[#F4EFE6]/10 pt-4 font-sans text-sm font-light leading-relaxed text-[#F4EFE6]/65"  
        >  
          {capability}  
        </div>  
      ))}  
    </div>  
  </section>

  <section  
    id="inquiry"  
    className="border-y border-[#F4EFE6]/10 bg-[#F4EFE6] text-[#071421]"  
  >  
    <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-12 md:py-32">  
      <div>  
        <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#8A6A2D]">  
          Celebration Inquiry  
        </p>

        <h2 className="mt-5 text-4xl font-light tracking-tight md:text-6xl">  
          Design  
          <span className="block text-[#8A6A2D]">the Moment.</span>  
        </h2>

        <p className="mt-7 max-w-md font-sans text-sm leading-relaxed text-[#071421]/65">  
          Tell us what you are celebrating. We will begin shaping the  
          journey around it.  
        </p>  
      </div>

      <CelebrationInquiry />  
    </div>  
  </section>

  <section className="px-6 py-24 text-center md:px-12 md:py-32">  
    <p className="mx-auto max-w-3xl text-3xl font-light leading-relaxed text-[#F4EFE6]/85 md:text-5xl">  
      Some journeys mark a place.  
      <span className="block text-[#D7B56D]">  
        The most meaningful ones mark a life.  
      </span>  
    </p>

    <Link  
      href={CTA_URL}  
      target="_blank"  
      rel="noopener noreferrer"  
      className="mt-10 inline-flex border border-[#D7B56D] px-7 py-4 font-sans text-[10px] uppercase tracking-[0.24em] text-[#D7B56D] transition-colors hover:bg-[#D7B56D] hover:text-[#071421]"  
    >  
      Begin Designing Her Journey →  
    </Link>  
  </section>  
</main>  
);  
}  
