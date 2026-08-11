import React from 'react';    
import Link from 'next/link';    
import Image from 'next/image';

const curations = [    
  {    
    num: "01",    
    title: "Hotels & Private Sanctuaries",    
    subtitle: "Unlisted Estates & Flagship Properties",    
    desc: "Curated access to the world’s most private villas, historic châteaux, and five-star luxury hotels with preferential rates and VIP status."    
  },    
  {    
    num: "02",    
    title: "Private Aviation",    
    subtitle: "Seamless Global Air Mobility",    
    desc: "Bespoke jet charters, helicopter transfers, and tarmac-side coordination managed with absolute discretion."    
  },    
  {    
    num: "03",    
    title: "Yacht Charters & Cruises",    
    subtitle: "Floating Sanctuaries & Expedition Vessels",    
    desc: "Superyacht charters across polar, galapagos, and Mediterranean waters, alongside ultra-luxury ocean and river itineraries."    
  },    
  {    
    num: "04",    
    title: "Safaris & Wilderness Expeditions",    
    subtitle: "Untouched Frontiers",    
    desc: "Private-guide safaris across Sabi Sand, Serengeti, and high-alpine mountain retreats with expert wildlife trackers."    
  },    
  {    
    num: "05",    
    title: "Corporate Travel & Executive Offsites",    
    subtitle: "Discreet Leadership Logistics",    
    desc: "Full-spectrum travel architecture for executive teams, private boards, and high-profile delegations."    
  },    
  {    
    num: "06",    
    title: "Destination Weddings & Celebrations",    
    subtitle: "Milestone Estates & Buyouts",    
    desc: "Exclusive-use castle, island, and vineyard buyouts orchestrated for private celebrations of distinction."    
  },    
  {    
    num: "07",    
    title: "Luxury Rail Journeys",    
    subtitle: "Timeless Continental Transit",    
    desc: "Reserved suites aboard iconic heritage trains crossing Europe, Asia, and the Americas."    
  },    
  {    
    num: "08",    
    title: "Polar & Remote Expeditions",    
    subtitle: "Edge-of-the-World Exploration",    
    desc: "Ice-class luxury voyages and remote wilderness heli-skiing backed by elite safety and rescue protocols."    
  }    
];

export default function ServicesPage() {    
  return (    
    <main className="min-h-screen bg-[#0A0A0A] text-white font-serif selection:bg-[#D4AF37] selection:text-black">

      {/* Hero Section */}    
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">    
        <Image    
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80"    
          alt="Advisory Services"    
          fill    
          className="object-cover opacity-45"    
          priority    
          quality={100}    
        />    
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0A0A0A]" />    
        <div className="relative z-10 text-center px-6 max-w-4xl mt-12">    
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-sans">    
            Private Travel Office    
          </span>    
          <h1 className="text-[#D4AF37] text-4xl md:text-6xl font-light tracking-tight mt-4 mb-6">    
            Advisory Services    
          </h1>    
          <p className="text-white/70 text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto font-sans">    
            Comprehensive travel architecture and elite curation tailored for high-net-worth individuals and private family offices.    
          </p>    
        </div>    
      </section>

      {/* The Retained Advantage Comparison */}    
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/10">    
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">    
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">    
            The Retained Advantage    
          </span>    
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">    
            Open Networks vs. Boutique Advisory    
          </h2>    
          <p className="text-white/50 text-sm md:text-base font-sans font-light">    
            Why discerning travelers choose a boutique travel advisory with capped rosters over a standard open-network agency.    
          </p>    
        </div>

        <div className="grid md:grid-cols-2 gap-12">    
          {/* Open Consortium Model */}    
          <div className="border border-white/10 p-8 md:p-10 space-y-6 bg-white/[0.01]">    
            <div>    
              <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-sans">    
                Standard Open-Roster Agency    
              </span>    
              <h3 className="text-xl md:text-2xl font-light text-white/70 mt-2">    
                Open Consortium Model    
              </h3>    
            </div>    
            <ul className="space-y-4 font-sans font-light text-sm text-white/50">    
              <li className="flex items-start gap-3">    
                <span className="text-red-400/80 mt-0.5">✕</span>    
                <span><strong>High Client Volume:</strong> Advisors handle hundreds of travelers simultaneously, resulting in slower response times and standard booking support.</span>    
              </li>    
              <li className="flex items-start gap-3">    
                <span className="text-red-400/80 mt-0.5">✕</span>    
                <span><strong>Standard Consortium Rates:</strong> Reliance on public consortium rates and standard booking portals without private inventory access.</span>    
              </li>    
              <li className="flex items-start gap-3">    
                <span className="text-red-400/80 mt-0.5">✕</span>    
                <span><strong>Transactional Focus:</strong> Primarily acts as a hotel booking desk rather than managing your complete global travel portfolio.</span>    
              </li>    
              <li className="flex items-start gap-3">    
                <span className="text-red-400/80 mt-0.5">✕</span>    
                <span><strong>Standard Protocols:</strong> General travel agency booking procedures with standard privacy measures.</span>    
              </li>    
            </ul>    
          </div>

          {/* The NexVoyage Standard */}    
          <div className="border border-[#D4AF37]/30 p-8 md:p-10 space-y-6 bg-white/[0.03] relative">    
            <div className="absolute top-0 right-0 bg-[#D4AF37] text-black text-[9px] uppercase tracking-[0.3em] px-4 py-1 font-sans font-semibold">    
              The Standard    
            </div>    
            <div>    
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">    
                Boutique Travel Advisory    
              </span>    
              <h3 className="text-xl md:text-2xl font-light text-white mt-2">    
                NexVoyage Collective    
              </h3>    
            </div>    
            <ul className="space-y-4 font-sans font-light text-sm text-white/80">    
              <li className="flex items-start gap-3">    
                <span className="text-[#D4AF37] mt-0.5">✓</span>    
                <span><strong>Capped Client Roster:</strong> We intentionally limit our active clientele to ensure dedicated advisor bandwidth and personal attention for every trip.</span>    
              </li>    
              <li className="flex items-start gap-3">    
                <span className="text-[#D4AF37] mt-0.5">✓</span>    
                <span><strong>Unlisted Estate Access:</strong> Direct relationships with property owners allowing access to private villas and off-market sanctuaries.</span>    
              </li>    
              <li className="flex items-start gap-3">    
                <span className="text-[#D4AF37] mt-0.5">✓</span>    
                <span><strong>Holistic Itinerary Design:</strong> Complete travel architecture—coordinating private aviation, ground logistics, and exclusive stays seamlessly.</span>    
              </li>    
              <li className="flex items-start gap-3">    
                <span className="text-[#D4AF37] mt-0.5">✓</span>    
                <span><strong>Discretion &amp; Privacy:</strong> Absolute confidentiality and white-glove stewardship tailored to your personal preferences.</span>    
              </li>    
            </ul>    
          </div>    
        </div>    
      </section>

      {/* Engagement & Pricing Model Section */}    
      <section className="py-24 px-6 max-w-6xl mx-auto border-b border-white/10">    
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">    
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">    
            Economics &amp; Engagement    
          </span>    
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">    
            The Advisory Model    
          </h2>    
          <p className="text-white/50 text-sm md:text-base font-sans font-light">    
            Tailored for high-net-worth clients who value time-saving precision and uncompromised execution over transactional booking.    
          </p>    
        </div>

        <div className="grid md:grid-cols-3 gap-8">    
          {/* Card 1 */}    
          <div className="border border-white/10 p-8 space-y-4 bg-white/[0.01]">    
            <span className="text-white/20 text-xs font-mono">01 / MODEL</span>    
            <h3 className="text-xl font-light text-white">Bespoke Curation</h3>    
            <p className="text-white/60 text-sm font-sans font-light leading-relaxed">    
              Tailored itinerary design and estate acquisition built upon transparent advisory agreements, ensuring complete alignment between our curation and your objectives.    
            </p>    
          </div>

          {/* Card 2 */}    
          <div className="border border-white/10 p-8 space-y-4 bg-white/[0.01]">    
            <span className="text-white/20 text-xs font-mono">02 / MODEL</span>    
            <h3 className="text-xl font-light text-white">The Sanctuary Tier</h3>    
            <p className="text-white/60 text-sm font-sans font-light leading-relaxed">    
              Rather than charging traditional monthly retainers, our pricing is absorbed into zero-friction execution. Clients invest in premium logistics, private transport, and curated access where value is delivered end-to-end.    
            </p>    
          </div>

          {/* Card 3 */}    
          <div className="border border-white/10 p-8 space-y-4 bg-white/[0.01]">    
            <span className="text-white/20 text-xs font-mono">03 / MODEL</span>    
            <h3 className="text-xl font-light text-white">Corporate Retainers</h3>    
            <p className="text-white/60 text-sm font-sans font-light leading-relaxed">    
              For corporate clients, event manifests, executive team retreats, and recurring summit support, we structure custom project-based pricing or flat-rate execution fees to manage room blocks, driver manifests, and zero-friction travel policies.    
            </p>    
          </div>    
        </div>    
      </section>

      {/* What We Curate */}    
      <section className="py-24 px-6 max-w-7xl mx-auto">    
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">    
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">    
            Scope of Curation    
          </span>    
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">    
            What We Curate    
          </h2>    
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">    
          {curations.map((c, i) => (    
            <div key={i} className="border-t border-white/10 pt-6 space-y-3">    
              <span className="text-[#D4AF37] text-xs font-mono">{c.num}</span>    
              <h3 className="text-white text-lg font-light tracking-tight">{c.title}</h3>    
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest opacity-70 font-sans">{c.subtitle}</p>    
              <p className="text-white/50 text-xs leading-relaxed font-sans font-light">{c.desc}</p>    
            </div>    
          ))}    
        </div>    
      </section>

      {/* CTA */}    
      <section className="py-24 border-t border-white/10 text-center px-6 bg-[#0E0E0E]">    
        <div className="max-w-xl mx-auto space-y-6">    
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">    
            Begin Consultation    
          </span>    
          <h2 className="text-3xl md:text-4xl font-light text-white">    
            Establish Your Advisory Mandate    
          </h2>    
          <p className="text-white/50 text-sm leading-relaxed font-sans font-light">    
            Engage with our private advisory team to establish your travel portfolio or discuss an upcoming itinerary.    
          </p>    
          <div className="pt-4">    
            <Link    
              href="https://cal.com/nexvoyagecollective/discovery-call"    
              className="inline-block border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-[0.3em] px-8 py-4 hover:bg-[#D4AF37] hover:text-black transition-all duration-500 font-sans"    
            >    
              Schedule a Discovery Call    
            </Link>    
          </div>    
        </div>    
      </section>

    </main>    
  );    
}  

Eva
1:41 PM
I'll pull the current services page source so I can give you the exact clean update.


Daryl Clark
1:41 PM
Preferred-Partner & Commission Disclosures on /services: As discussed, publishing the 12% markup and exact partner overrides (Rosewood 15%, Virtuoso 10%) is operational plumbing that distracts from the advisory value. Removing it cleans up credibility and positioning instantly.


Eva
1:38 PM
Here's the full updated app/founder/page.tsx with the "built on decades" wording and all prior changes (serif typography, headshot alignment, one-line name):

import Link from 'next/link'  
import Navigation from '@/components/Navigation'

export const metadata = {  
title: 'Meet Daryl Clark | NexVoyage Collective',  
description:  
  'Meet Daryl Clark, Founder & Principal of NexVoyage Collective—a private travel office for clients who demand discretion, depth, and uncommon access.',  
}

const headshotUrl = 'https://cdn.marblism.com/_XUs99xWdak.jpeg'

const disciplines = [  
{  
  number: '01',  
  title: 'Private Security Routing',  
  description:  
    'Tactical logistics and discreet threat mitigation for high-profile journeys across sensitive or remote geographies.',  
},  
{  
  number: '02',  
  title: 'Off-Market Estate Sourcing',  
  description:  
    'Direct access to sequestered private islands, unlisted historic palazzos, and wilderness reserves beyond public inventory.',  
},  
{  
  number: '03',  
  title: 'Family Office Stewardship',  
  description:  
    'Holistic, multi-generational travel infrastructure designed to align seamlessly with existing family office governance.',  
},  
]

const affiliations = [  
{ name: 'FORA TRAVEL', role: 'Flagship Partner' },  
{ name: 'VIRTUOSO', role: 'Preferred Network' },  
{ name: 'AMAN', role: 'Preferred Partner' },  
{ name: 'FOUR SEASONS', role: 'Preferred Partner' },  
{ name: 'BELMOND', role: 'Preferred Partner' },  
{ name: 'ROSEWOOD', role: 'Preferred Partner' },  
{ name: 'MANDARIN ORIENTAL', role: 'Preferred Partner' },  
{ name: 'PENINSULA', role: 'Preferred Partner' },  
]

export default function FounderPage() {  
return (  
  <div className="min-h-screen bg-[#0A0A0A] font-serif text-white selection:bg-[#C5A059] selection:text-black">  
    <Navigation />

    <main className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-12">  
      <Link  
        href="/"  
        className="mb-16 inline-block text-[10px] uppercase tracking-[0.3em] text-[#C5A059] transition-opacity hover:opacity-70"  
      >  
        ← Return to Sanctuary  
      </Link>

      <section className="mb-32 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">  
        <div className="relative lg:col-span-5 lg:mt-[8.5rem]">  
          <div className="relative aspect-[4/5] overflow-hidden border border-[#C5A059]/20 bg-white/5 shadow-2xl">  
            <img  
              src={headshotUrl}  
              alt="Daryl Clark, Founder and Principal of NexVoyage Collective"  
              className="h-full w-full object-cover"  
              decoding="async"  
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent" />  
          </div>

          <div className="absolute -bottom-6 -right-6 -z-10 hidden h-32 w-32 border border-[#C5A059]/25 sm:block" />

          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-[9px] uppercase tracking-[0.25em] text-white/35">  
            <span>NexVoyage Collective</span>  
            <span>New York · Global</span>  
          </div>  
        </div>

        <div className="lg:col-span-7">  
          <span className="mb-4 block text-[10px] uppercase tracking-[0.4em] text-[#C5A059]">  
            Founder &amp; Principal  
          </span>

          <h1 className="mb-10 whitespace-nowrap text-4xl font-light leading-[0.95] tracking-[-0.06em] md:text-7xl">  
            Daryl Clark  
          </h1>

          <div className="space-y-6 text-lg font-light leading-[1.85] text-white/70">  
            <p>  
              Built on decades of executive leadership and complex logistics,  
              NexVoyage Collective was founded on a singular, uncompromising thesis:{' '}  
              <span className="italic text-white">  
                true luxury isn&apos;t about where you go, but how you arrive.  
              </span>  
            </p>

            <p>  
              Our work transcends traditional concierge service. We operate  
              at the intersection of high-stakes logistics, unlisted estate  
              access, and family office travel stewardship, transforming  
              complex global movements into an effortless, invisible  
              choreography. Whether orchestrating multi-generational journeys  
              across continents, securing access to properties beyond public  
              reach, or managing the precise sequencing of overlapping  
              schedules and unspoken expectations, we solve problems that most  
              concierge services don&apos;t know exist.  
            </p>

            <p>  
              Arrival, for us, means stepping into an experience that has  
              already begun—one where every detail has been anticipated,  
              every complexity dissolved, and every transition engineered to  
              feel natural. It means your family office runs seamlessly  
              across time zones. It means your private retreat is waiting  
              exactly as envisioned. It means the machinery of travel becomes  
              entirely invisible, and you simply belong wherever you are.  
            </p>

            <p>  
              We work with a limited number of clients who demand the  
              uncommon, who understand that discretion and depth of knowledge  
              matter more than volume, and who recognize that the best travel  
              experiences are built on relationships, not transactions.  
            </p>  
          </div>

          <blockquote className="my-12 border-l border-[#C5A059] py-2 pl-6 text-xl italic leading-relaxed text-white/90 md:text-2xl">  
            &ldquo;Discretion is not merely the absence of exposure; it is the  
            presence of absolute sovereign control over your environment.&rdquo;  
          </blockquote>  
        </div>  
      </section>

      <section className="mb-32 border-y border-white/10 py-20">  
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">  
          <div className="md:col-span-4">  
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">  
              The Operating Principle  
            </span>  
          </div>

          <div className="md:col-span-8">  
            <p className="max-w-4xl text-3xl font-light leading-tight tracking-tight text-white/90 md:text-5xl">  
              The finest journeys are not assembled from options. They are  
              constructed from understanding.  
            </p>  
          </div>  
        </div>  
      </section>

      <section className="mb-32">  
        <div className="mb-16 max-w-2xl">  
          <span className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">  
            Core Competencies  
          </span>

          <h2 className="text-3xl font-light tracking-tight md:text-5xl">  
            The Architecture of Sovereign Travel  
          </h2>

          <p className="mt-6 text-base font-light leading-relaxed text-white/55">  
            The visible itinerary is only one layer of the work. The real  
            value lies in the infrastructure beneath it.  
          </p>  
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">  
          {disciplines.map((discipline) => (  
            <article  
              key={discipline.number}  
              className="group border border-white/10 bg-white/[0.02] p-8 transition-colors duration-500 hover:border-[#C5A059]/50"  
            >  
              <div className="mb-16 flex items-start justify-between">  
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">  
                  {discipline.number}  
                </span>

                <span className="text-xs text-white/20 transition-colors group-hover:text-[#C5A059]">  
                  ↗  
                </span>  
              </div>

              <h3 className="mb-5 text-2xl font-light tracking-tight">  
                {discipline.title}  
              </h3>

              <p className="text-sm font-light leading-relaxed text-white/55">  
                {discipline.description}  
              </p>  
            </article>  
          ))}  
        </div>  
      </section>

      <section className="mb-32 border-t border-white/10 pt-20">  
        <div className="mb-16 max-w-2xl">  
          <span className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">  
            Strategic Alliances  
          </span>

          <h2 className="text-3xl font-light tracking-tight md:text-5xl">  
            A Network Built on Trust  
          </h2>

          <p className="mt-6 text-base font-light leading-relaxed text-white/55">  
            Our relationships are carefully maintained over time. They are  
            not simply booking channels; they are the foundation for access,  
            recognition, and precise execution.  
          </p>  
        </div>

        <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-4">  
          {affiliations.map((partner) => (  
            <div  
              key={partner.name}  
              className="flex min-h-32 flex-col justify-between bg-[#0A0A0A] p-6 transition-colors hover:bg-white/[0.04]"  
            >  
              <span className="text-sm font-light tracking-[0.08em] text-white/90">  
                {partner.name}  
              </span>

              <span className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059]">  
                {partner.role}  
              </span>  
            </div>  
          ))}  
        </div>  
      </section>

      <section className="border-t border-white/10 pt-24 text-center">  
        <span className="mb-4 block text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">  
          Begin a Conversation  
        </span>

        <h2 className="mb-8 text-4xl font-light tracking-tight md:text-6xl">  
          Travel requires a point of view.  
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-base font-light leading-relaxed text-white/60">  
          Inquiries regarding private office representation and itinerary  
          orchestration are reviewed personally.  
        </p>

        <a  
          href="https://cal.com/nexvoyagecollective"  
          target="_blank"  
          rel="noopener noreferrer"  
          className="inline-block bg-[#C5A059] px-10 py-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-black transition-colors hover:bg-white"  
        >  
          Schedule Discovery Call  
        </a>  
      </section>  
    </main>  
  </div>  
)  
}  
The "built on decades of executive leadership and complex logistics" phrasing now leads the founder bio and keeps the thesis line intact.


Daryl Clark
1:38 PM
Now lets update the /founder page


Eva
1:36 PM
Here's the full clean app/page.tsx with the "built on decades" wording applied to the founder section:

import React from 'react'  
import Link from 'next/link'  
import Image from 'next/image'  
import TestimonialCarousel from '@/components/TestimonialCarousel'

const partners = [  
{ name: "FORA TRAVEL", label: "Flagship Partner", font: "font-serif tracking-tighter" },  
{ name: "VIRTUOSO", label: "Preferred Network", font: "font-sans tracking-widest uppercase" },  
{ name: "AMAN", label: "Preferred Partner", font: "font-serif tracking-widest" },  
{ name: "FOUR SEASONS", label: "Preferred Partner", font: "font-sans tracking-tight uppercase" },  
{ name: "BELMOND", label: "Bellini Club", font: "font-serif italic tracking-wide" },  
{ name: "ROSEWOOD", label: "Elite Member", font: "font-sans tracking-widest uppercase" },  
{ name: "MANDARIN ORIENTAL", label: "Fan Club", font: "font-serif tracking-normal" },  
{ name: "PENINSULA", label: "PenClub", font: "font-serif tracking-widest uppercase" },  
{ name: "DORCHESTER", label: "Diamond Club", font: "font-serif tracking-tight" },  
{ name: "AUBERGE", label: "Preferred Partner", font: "font-sans tracking-widest uppercase" },  
{ name: "OETKER COLLECTION", label: "Pearl Partner", font: "font-serif tracking-tighter" },  
{ name: "HYATT", label: "Privé", font: "font-sans tracking-widest" },  
]

const featured = [  
{  
name: "Capella Ubud",  
location: "Bali, Indonesia",  
category: "Wild Frontiers",  
slug: "capella-ubud",  
img: "/api/image?url=https%3A%2F%2Fw0ijk7zmvlb7mxph.private.blob.vercel-storage.com%2FProperty%20Images%2FCapella%20Ubud%2Fubud-accommodation-tent-river-exterior.jpg"  
},  
{  
name: "Dunton Hot Springs",  
location: "Colorado, USA",  
category: "Mountain & Forest",  
slug: "dunton-hot-springs",  
img: "/api/image?url=https%3A%2F%2Fw0ijk7zmvlb7mxph.private.blob.vercel-storage.com%2FProperty%20Images%2FDunton_Hot%20Springs%2FDHS%201.jpg"  
},  
{  
name: "Four Seasons Madrid",  
location: "Madrid, Spain",  
category: "Urban Sovereigns",  
slug: "four-seasons-madrid",  
img: "/api/image?url=https%3A%2F%2Fw0ijk7zmvlb7mxph.private.blob.vercel-storage.com%2FProperty%2520Images%2FFour%2520Seasons_Madrid%2FFS-Madrid-1.jpg"  
},  
]

const perspectiveTeasers = [  
{  
title: "The Logistics of Composure: Private Aviation",  
category: "Aviation",  
slug: "logistics-of-composure-private-aviation",  
img: "https://cdn.marblism.com/ZrRa-ZcHc8S.webp",  
description: "Explore the strategic advantages of private aviation for high-performance travelers, focusing on time sovereignty."  
},  
{  
title: "The Yacht Orchestration: Moving Horizons",  
category: "Maritime",  
slug: "yacht-orchestration-moving-horizons",  
img: "https://cdn.marblism.com/mo51WB0lDjO.webp",  
description: "An intellectual manifesto on the philosophy of luxury yachting and maritime freedom."  
},  
{  
title: "Remote Work Retreats: Productivity in Paradise",  
category: "Productivity",  
slug: "remote-work-retreats-productivity-in-paradise",  
img: "https://cdn.marblism.com/v2-8V4_ZTnh.webp",  
description: "An exploration of ultra-luxury remote work retreats and the 'Officer's Desk' mentality."  
},  
]

const pillars = [  
{ number: "01", title: "Access", subtitle: "The Private Collection", body: "Beyond the reach of public listings lies a sequestered ledger of unlisted estates and off-market retreats, secured through two decades of global leverage." },  
{ number: "02", title: "Intelligence", subtitle: "The Sentinel Standard", body: "We vet for what cannot be seen. From technical security to behavioral vetting, every property and partner is audited to ensure your absolute sanctuary." },  
{ number: "03", title: "The Constant", subtitle: "Seamless Stewardship", body: "A singular, unwavering point of contact for your entire global footprint. We manage the friction of travel so you never have to encounter it." },  
]

export default function HomePage() {  
return (  
<main className="min-h-screen bg-[#0A0A0A] font-serif text-white selection:bg-[#D4AF37] selection:text-black">

{/* Hero */}  
<section className="relative flex h-screen w-full items-center justify-center overflow-hidden">  
<Image  
  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80"  
  alt="NexVoyage Sanctuary"  
  fill  
  className="object-cover opacity-60"  
  priority  
  quality={100}  
/>  
<div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black" />  
<div className="relative z-10 max-w-5xl px-4 text-center">  
  <h1 className="mb-6 font-serif text-5xl tracking-tight text-[#D4AF37] md:text-8xl" style={{ fontWeight: 300 }}>  
    The Art of Discerning Travel  
  </h1>  
  <p className="font-sans text-lg font-light tracking-[0.4em] uppercase text-white/70 md:text-xl">  
    Private Sanctuaries &amp; Bespoke Journeys  
  </p>  
</div>  
</section>

{/* Founder Section */}  
<section className="mx-auto max-w-6xl border-b border-white/10 px-6 py-24">  
<div className="grid items-center gap-16 md:grid-cols-2">  
  <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden md:mx-0">  
    <img  
      src="/api/image?url=https%3A%2F%2Fw0ijk7zmvlb7mxph.private.blob.vercel-storage.com%2FHeadshot%2FDaryl%2520Clark_Headshot.jpeg"  
      alt="Daryl Clark"  
      className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"  
    />  
    <div className="pointer-events-none absolute inset-0 border border-[#D4AF37]/30" />  
  </div>  
  <div className="space-y-6">  
    <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#D4AF37]">  
      Founder &amp; Principal  
    </span>  
    <h2 className="font-serif text-4xl font-light tracking-tight text-white md:text-5xl">  
      Daryl Clark  
    </h2>  
    <div className="h-px w-12 bg-[#D4AF37]/50" />  
    <p className="font-sans text-sm font-light leading-relaxed text-white/70 md:text-base">  
      Built on decades of executive leadership and complex logistics, NexVoyage Collective  
      was created on a singular thesis: true luxury isn&apos;t about where you go, but how you arrive.  
    </p>  
    <p className="font-sans text-sm font-light leading-relaxed text-white/70 md:text-base">  
      Our background spans private security routing, off-market estate sourcing, and family  
      office travel stewardship — translating high-stakes logistics into the invisible  
      choreography that defines a seamless journey.  
    </p>  
    <div className="pt-2">  
      <Link  
        href="/founder"  
        className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-[#D4AF37] transition-opacity hover:opacity-80"  
      >  
        Meet Daryl &amp; View Philosophy →  
      </Link>  
    </div>  
  </div>  
</div>  
</section>

{/* Global Alliance */}  
<section className="mx-auto max-w-6xl px-6 py-24">  
<h2 className="mb-16 text-center font-sans text-xs uppercase tracking-[0.3em] text-white/40">  
  The Global Alliance  
</h2>  
<div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-4">  
  {partners.map((partner, i) => (  
    <div key={i} className="group text-center">  
      <span className={`text-lg text-white block mb-2 ${partner.font} transition-colors duration-500 group-hover:text-[#D4AF37]`}>  
        {partner.name}  
      </span>  
      <span className="font-sans text-[10px] uppercase tracking-widest text-[#D4AF37] opacity-60">  
        {partner.label}  
      </span>  
    </div>  
  ))}  
</div>  
</section>

{/* Sanctuary Collection */}  
<section className="py-24">  
<div className="mx-auto max-w-7xl px-6">  
  <div className="mb-16 flex items-end justify-between">  
    <h2 className="font-serif text-4xl font-light tracking-tight text-[#D4AF37]">The Sanctuary Collection</h2>  
    <Link href="/archive" className="font-sans text-xs uppercase tracking-widest text-white/65 transition-colors hover:text-white border-b border-[#D4AF37] pb-1">  
      View Entire Ledger  
    </Link>  
  </div>  
  <div className="grid gap-12 md:grid-cols-3">  
    {featured.map((item, i) => (  
      <Link key={i} href={`/archive/property/${item.slug}`} className="group cursor-pointer space-y-4">  
        <div className="relative aspect-[4/5] overflow-hidden">  
          <img src={item.img} alt={item.name} className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105" />  
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />  
        </div>  
        <div>  
          <span className="font-sans text-[9px] uppercase tracking-widest text-white/30">{item.category}</span>  
          <h3 className="text-xl font-light tracking-tight text-white">{item.name}</h3>  
          <p className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] opacity-60">{item.location}</p>  
        </div>  
      </Link>  
    ))}  
  </div>  
</div>  
</section>

{/* Perspective Teasers */}  
<section className="border-t border-white/10 py-24">  
<div className="mx-auto max-w-7xl px-6">  
  <div className="mb-16 flex items-end justify-between">  
    <div>  
      <span className="mb-3 block font-sans text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">  
        The Intelligence  
      </span>  
      <h2 className="font-serif text-4xl font-light tracking-tight text-white">Selected Perspectives</h2>  
    </div>  
    <Link href="/perspective" className="font-sans text-xs uppercase tracking-widest text-white/65 transition-colors hover:text-white border-b border-[#D4AF37] pb-1">  
      Explore All Essays  
    </Link>  
  </div>  
  <div className="grid gap-8 md:grid-cols-3">  
    {perspectiveTeasers.map((article) => (  
      <Link  
        key={article.slug}  
        href={`/perspective/${article.slug}`}  
        className="group flex flex-col justify-between border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-[#D4AF37]/50"  
      >  
        <div>  
          <div className="relative mb-6 aspect-[16/9] overflow-hidden border border-white/10">  
            <img  
              src={article.img}  
              alt={article.title}  
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"  
            />  
          </div>  
          <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#D4AF37]">  
            {article.category}  
          </span>  
          <h3 className="mb-3 mt-2 font-serif text-2xl font-light tracking-tight transition-colors group-hover:text-[#D4AF37]">  
            {article.title}  
          </h3>  
          <p className="font-sans text-sm font-light leading-relaxed text-white/55">  
            {article.description}  
          </p>  
        </div>  
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 font-sans text-[10px] uppercase tracking-[0.2em] text-white/40">  
          <span>Read Article</span>  
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#D4AF37]">→</span>  
        </div>  
      </Link>  
    ))}  
  </div>  
</div>  
</section>

{/* Client Perspectives */}  
<TestimonialCarousel />

{/* The Three Pillars */}  
<section className="mx-auto max-w-7xl px-6 py-24">  
<div className="grid grid-cols-1 gap-16 md:grid-cols-3">  
  {pillars.map((p, i) => (  
    <div key={i} className="space-y-5 border-t border-white/10 pt-10">  
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">  
        {p.number} / {p.title}  
      </span>  
      <h3 className="font-sans text-lg font-light tracking-widest uppercase text-white">  
        {p.subtitle}  
      </h3>  
      <p className="font-sans text-sm font-light leading-relaxed text-white/50">  
        {p.body}  
      </p>  
    </div>  
  ))}  
</div>  
</section>

</main>  
)  
}  
One thing I left as-is: the Access pillar still says "secured through two decades of global leverage." Since we're moving away from the two-decades framing, want me to swap that to "decades of global leverage" for consistency?


Daryl Clark
1:36 PM
Can you give me the full clean code for app/page


Eva
1:35 PM
Great choice — "built on decades..." keeps the gravitas without the exposure. Here are the exact swaps:

Homepage (app/page.tsx) — replace this paragraph:

<p className="font-sans text-sm font-light leading-relaxed text-white/70 md:text-base">  
  Two decades navigating the world&apos;s most demanding itineraries — from sub-polar  
  archipelagos to private concessions in the Okavango. NexVoyage Collective was built  
  on a singular thesis: true luxury isn&apos;t about where you go, but how you arrive.  
</p>  
with:

<p className="font-sans text-sm font-light leading-relaxed text-white/70 md:text-base">  
  Built on decades of executive leadership and complex logistics, NexVoyage Collective  
  was created on a singular thesis: true luxury isn&apos;t about where you go, but how you arrive.  
</p>  
Founder page (app/founder/page.tsx) — replace this paragraph:

<p>  
  For over two decades, I have navigated the world&apos;s most  
  demanding itineraries—from sub-polar archipelagos to private  
  wildlife concessions in the Okavango. NexVoyage Collective was  
  founded on a singular, uncompromising thesis:{' '}  
  <span className="italic text-white">  
    true luxury isn&apos;t about where you go, but how you arrive.  
  </span>  
</p>  
with:

<p>  
  Built on decades of executive leadership and complex logistics,  
  NexVoyage Collective was founded on a singular, uncompromising thesis:{' '}  
  <span className="italic text-white">  
    true luxury isn&apos;t about where you go, but how you arrive.  
  </span>  
</p>  
Want me to also update the homepage's "two decades of global leverage" line (in the Access pillar) to match, or leave that one?


Daryl Clark
1:35 PM
I like the built on decades.....


Eva
1:34 PM
The question is really just: does the two decades specifically describe arranging UHNW/luxury travel, or is it broader (executive leadership, logistics)?

If it's literal luxury-travel tenure — keep it, it's your strongest asset.

If it's broader professional experience, pivot to the safer framing: "Built on decades of executive leadership and complex logistics" — same prestige, zero exposure.

You know the actual answer better than I do. Which is it?


Daryl Clark
1:34 PM
"Two Decades" & Experience Claims: The homepage and founder page reference two decades of itinerary navigation and relationships. If this reflects Daryl's actual background, it's solid; if it feels slightly overstretched, a quick pivot to "built on decades of executive leadership and complex logistics" grounds it without losing the prestige.

Here is the credibility audit based on the live pages:

"Two Decades" & Experience Claims: The homepage and founder page reference two decades of itinerary navigation and relationships. If this reflects Daryl's actual background, it's solid; if it feels slightly overstretched, a quick pivot to "built on decades of executive leadership and complex logistics" grounds it without losing the prestige.
"Zero-Knowledge Routing & Strict NDA Frameworks": On the Mandate page. If we are genuinely operating under NDAs and secure routing for high-net-worth/private security profiles, this is fine. If not, it borders on theatrical and could raise eyebrows for a sophisticated buyer.
Preferred-Partner & Commission Disclosures on /services: As discussed, publishing the 12% markup and exact partner overrides (Rosewood 15%, Virtuoso 10%) is operational plumbing that distracts from the advisory value. Removing it cleans up credibility and positioning instantly.
Selected Engagements: The case studies (Multi-Generational Japan, Alpine Rebook, Amalfi Anniversary) are presented as real records. As long as they accurately reflect real operational capabilities and anonymized past work, they are extremely persuasive.
How would you like to handle these? Do you want to adjust the experience wording or clean up the Services page commission details?


Eva
1:27 PM
I'll start with the credibility audit since it's the highest risk/return. Let me pull the pages carrying the strongest claims.


Daryl Clark
1:26 PM
Yes


Eva
1:26 PM
Strong audit, and I agree with most of it. My read on the priorities, order:

Do first — credibility (highest risk/return). For UHNW, one indefensible claim costs more than ten beautiful pages earn. I'd run a literal check on every experience/testimonial/security/partner claim. If anything's aspirational, we soften it before it costs us a prospect. That includes the "two decades" language — agree, rewrite toward specificity if it overclaims.

Then the three quick conversion wins:

Remove the supplier commission percentages from Services. Keep client-facing fees, drop the hotel-pays-us math. No argument there.
Soften the inquiry flow — "Begin Your Journey / Traveler Profile / Journey Details." Still exclusive, just not a security clearance.
Tone the vocabulary down ~25%. "Sequestred ledger" reads as theater when overused. Seasoning, not the meal.
Then QA the Archive — property/category/location mismatches weaken the whole "curated ledger" premise. That's a data pass, not a redesign.

On positioning overlap: agreed there's a gap between the UHNW language and $3k–$5k journeys. I'd reframe the doorway around expectations, not net worth — "travelers who value exceptional properties and having every detail handled." Captures both the millionaire and the $15k anniversary client.

And yes — after these, we stop redesigning and point the next 6 months at traffic, SEO authority, and conversion.

Want me to start with the credibility audit, or knock out the three conversion fixes first?


Daryl Clark
1:25 PM
Yes. I just re-audited the live NexVoyage Collective website, including the homepage, Journeys, Archive, Mandate, Services, Selected Engagements, and inquiry experience.

My assessment has changed considerably from the earlier review.

Previous assessment: ~8.2/10
Current assessment: 9.0/10 for brand/positioning, ~8.3/10 for conversion and credibility

The site now has a distinct point of view. It no longer resembles a typical independent travel-advisor website. It feels closer to a private travel office / luxury advisory / editorial brand, which is a much stronger competitive position for the clientele you're pursuing. (NexVoyage Collective)

There are, however, several things I would change before pushing harder on marketing—one of them is fairly important.

What has improved substantially
1. The homepage finally tells me what NexVoyage is
"The Art of Discerning Travel" followed by "Private Sanctuaries & Bespoke Journeys" is significantly stronger than generic luxury-travel language. More importantly, the rest of the page reinforces it instead of immediately reverting to "we book hotels, cruises and tours." (NexVoyage Collective)

And this line is excellent brand positioning:

"Not a travel agency — a guardian of time."

It's memorable.

The three concepts underneath—Private Collection, Sentinel Standard, and Seamless Stewardship—also give the company a philosophy rather than merely a service menu. (NexVoyage Collective)

I would keep this direction.

2. Adding you to the homepage was the right decision
This addresses one of my biggest criticisms from the earlier audit.

You now appear as Founder & Principal, with a photograph and founder narrative. (NexVoyage Collective)

That's important because at this level of travel, the advisor is part of the product.

But this section leads directly to one of my biggest concerns, which I'll address below.

3. Journeys is now one of the strongest sections of the website
This is the change I was hoping you'd make.

Your Curated Journeys page now contains actual starting investments, duration, seasonality and featured properties. For example, Anguilla is positioned as 5 days/4 nights starting at $4,995 per person, while Sri Lanka is 6 days/5 nights starting at $8,495. (NexVoyage Collective)

This accomplishes something extremely important:

It allows someone to understand what NexVoyage actually creates.

And I particularly like this:

"Inspirational frameworks demonstrating how we architect your global footprint."

followed by the explanation that every journey is personalized. (NexVoyage Collective)

That solves the problem we discussed previously: these don't look like mass-market vacation packages.

The pricing disclaimer is also good.
You've now clearly explained that starting prices are per person based on double occupancy and that airfare varies based on origin, dates, availability and cabin class. (NexVoyage Collective)

Keep it.

My recommendation now:
Don't add 30 itineraries yet.

I'd rather see 10–15 exceptional journeys than 40 mediocre ones.

You currently have Anguilla, Napa, Florence, Montenegro, Cambodia, Sri Lanka, California Coast and NYC represented. (NexVoyage Collective)

I'd next add perhaps:

Japan
South Africa/Botswana
Maldives
French Polynesia
Amalfi Coast
Greece
Patagonia/Argentina
Luxury rail
Then stop and measure what visitors actually engage with.

4. The Archive is a fantastic idea — but needs refinement
The Archive may actually be your most differentiating concept.

You've built a registry of dozens of unusual properties and categorized them into Wild Frontiers, Urban Sovereigns, Heritage & Estate, and Island & Coast. (NexVoyage Collective)

That feels much more like:

"Here is what we know."

than:

"Here are hotels we can book."

That's exactly what you want.

But I found some categorization/data issues that need cleanup.

For example, the Archive currently identifies Singita Kwitonda Lodge in Rwanda as "Island & Coast" and Here Baa Atoll in the Maldives as "Heritage & Estate." (NexVoyage Collective)

Those inconsistencies weaken the sense that this is a carefully curated ledger.

I'd conduct a full Archive QA:

Property → correct location → correct category → correct description → current operating status → image → partner relationship

With luxury positioning, accuracy itself becomes part of the brand.

5. Selected Engagements is excellent conceptually
This is a major improvement.

Your Selected Engagements page now presents Challenge → Approach → Outcome case studies.

The Japan multigenerational trip, Courchevel emergency rebooking and Amalfi anniversary are exactly the type of content a prospective client needs. (NexVoyage Collective)

This is actually more persuasive than ordinary testimonials because it communicates:

"Here's what happens when something complicated lands on our desk."

That's valuable.

But there is an important caveat.

The biggest issue I see: credibility claims
This is where I would spend your attention before doing more aesthetic work.

There are numerous extraordinarily strong claims throughout the site.

For example, the homepage currently says NexVoyage's background spans private security routing, off-market estate sourcing and family-office travel stewardship. (NexVoyage Collective)

The Mandate says you operate through strict NDA frameworks and coordinate unlisted arrivals "without leaving a digital footprint." It also states that NexVoyage has relationships with property owners, private family offices and estate curators developed over two decades. (NexVoyage Collective)

The homepage similarly references "two decades of global leverage." (NexVoyage Collective)

And Selected Engagements contains very specific client case studies and outcomes. (NexVoyage Collective)

Every one of these claims needs to be literally defensible.

Not aspirational.

Not "brand voice."

Not what NexVoyage intends to become.

Actual.

That includes the testimonials.

If the people and situations are real and anonymized, fantastic.

If any of them are illustrative, composites or AI-generated examples, they should not be represented as actual client experiences.

For an UHNW-focused company, trust is everything.

I would rather see three modest, authentic client reviews than ten extraordinary fictional ones.

I would also reconsider the "two decades" language
This stood out immediately because the homepage says:

"Two decades navigating the world's most demanding itineraries..." (NexVoyage Collective)

If you personally have 20 years of demonstrable luxury travel-management experience, keep it.

If the claim refers to broader professional experience rather than two decades specifically arranging UHNW travel, I'd rewrite it.

Something such as:

"Built on decades of executive leadership, complex logistics and client stewardship, NexVoyage approaches travel with the precision normally reserved for high-stakes operations."

That can still sound premium without creating a potentially misleading impression.

6. I would remove the commission disclosure from Services
This is probably my strongest tactical recommendation.

Your Services page currently tells clients that NexVoyage uses a 12% commission markup, and it even identifies preferred-partner commission percentages such as Rosewood Elite at 15% and Virtuoso/LHW at 10%. (NexVoyage Collective)

I would remove that from the public website.

Not because pricing should be hidden.

Because it's operational compensation information that doesn't help sell your value.

UHNW clients care about:

"What does this relationship cost me?"

They generally don't need:

"What percentage does the hotel pay you?"

I'd instead explain any planning/design fee, trip-management fee, membership/retainer structure or other client-facing charges clearly.

The compensation arrangements between NexVoyage and suppliers can be addressed in your terms/disclosures where appropriate.

7. Some of the language has become too exclusive
This is a subtle issue.

I love the concept.

But occasionally the site moves from luxury into what I would call luxury theater.

Examples include:

"sovereign enclaves"

"global footprint"

"zero-knowledge routing"

"sequestered ledger"

"mission parameters"

"absolute sanctuary"

"Application for Entry"

Individually, these are interesting.

Collectively, there are a lot of them. (NexVoyage Collective)

The best luxury brands often speak surprisingly simply.

Think:

Private. Personal. Precise.

Not every sentence needs to prove exclusivity.

I'd use the distinctive vocabulary as seasoning rather than the entire meal.

I'd aim for roughly:
70% sophisticated plain English

30% NexVoyage language

Right now it feels closer to 40/60.

8. "Application for Entry" may create unnecessary friction
Your inquiry form is beautifully on-brand, but I think you've gone slightly too far here.

The form currently uses:

Application for Entry

The Sovereign Profile

Mission Parameters

Aviation Class

Discretion Notes (NexVoyage Collective)

The concept is cool.

But imagine a wealthy couple wanting a $25,000 anniversary trip.

They shouldn't feel like they're applying for security clearance.

I'd soften this to:

Begin Your Journey
Traveler Profile

Journey Details

Destination

Travel Window

Party Size

Preferred Cabin

Anything We Should Know?

You can remain exclusive without creating psychological friction.

9. The Global Alliance section needs extreme precision
The homepage currently displays:

FORA TRAVEL Flagship Partner
VIRTUOSO Preferred Network
AMAN Preferred Partner
FOUR SEASONS Preferred Partner
BELMOND Bellini Club
ROSEWOOD Elite Member
MANDARIN ORIENTAL Fan Club
PENINSULA PenClub
DORCHESTER Diamond Club
AUBERGE Preferred Partner
OETKER COLLECTION Pearl Partner
HYATT Privé (NexVoyage Collective)

This is powerful.

But make sure the wording accurately reflects whether NexVoyage itself, you as an advisor, or Fora as the host agency holds each relationship.

That's not a minor distinction.

I'd potentially add:

"Preferred-partner access available through our affiliation with Fora."

Then display the programs.

That preserves the impressive network while being completely transparent.

10. You're getting very close to over-positioning the business
This is probably my biggest strategic observation.

The website now reads as if NexVoyage exclusively serves:

UHNW individuals + family offices + private aviation clients + CEOs + boards + people requiring security details.

But some of the actual Curated Journeys begin at $2,995–$4,995 per person. (NexVoyage Collective)

There is a slight disconnect.

Someone looking at a $10,000–$20,000 luxury vacation may think:

"This company isn't for people like me."

Yet that's probably a very desirable client for you.

I wouldn't abandon the UHNW positioning.

I'd broaden the emotional doorway slightly.

Instead of defining the client primarily by wealth, define them by expectations:

For travelers who value exceptional properties, thoughtful access and having every detail handled.

That includes a millionaire.

But it also includes the successful executive spending $15,000 on an anniversary trip.

My revised scorecard
Area	Earlier	Now
Visual luxury	8.5	9.4
Brand identity	8.0	9.5
Differentiation	7.5	9.6
Storytelling	7.5	9.2
Service clarity	7.5	8.7
Luxury positioning	8.0	9.6
Journeys/inspiration	7.0	9.3
Social proof	6.5	8.5*
Conversion	7.5	8.2
Credibility/trust	8.0	7.8*
SEO/content potential	7.5	9.0
*assuming all testimonials, engagements, experience claims and partner representations are authentic and supportable.

The five things I'd do next
Audit every factual claim. Especially experience, testimonials, client engagements, off-market access, security capabilities and preferred-partner affiliations.
Remove the public supplier commission percentages from Services.
Tone the proprietary luxury vocabulary down about 20–30%.
QA the entire Archive for category/location/property inaccuracies.
Soften the inquiry experience slightly so an affluent prospective client feels welcomed rather than screened.
And then I'd stop redesigning the website for a while.

Seriously.

You've reached the point where continuously tweaking design is likely to produce diminishing returns. The next phase should be traffic, SEO, authority, lead generation and conversion measurement.

The site finally has something worth driving people to.

The next question isn't really "How do we make NexVoyage look more luxurious?"

You've accomplished that.

The question now is:

"How do we get the right 1,000 people to discover NexVoyage—and convert 20–30 of them into clients?"

That's where I would focus the next 6 months.


Eva
1:16 PM
Here is the full updated homepage code (app/page.tsx). In the Sanctuary Collection, Bulgari Hotel Tokyo is swapped for Four Seasons Madrid, and the three Perspective teasers remain as you set them.

import React from 'react'  
import Link from 'next/link'  
import Image from 'next/image'  
import TestimonialCarousel from '@/components/TestimonialCarousel'

const partners = [  
{ name: "FORA TRAVEL", label: "Flagship Partner", font: "font-serif tracking-tighter" },  
{ name: "VIRTUOSO", label: "Preferred Network", font: "font-sans tracking-widest uppercase" },  
{ name: "AMAN", label: "Preferred Partner", font: "font-serif tracking-widest" },  
{ name: "FOUR SEASONS", label: "Preferred Partner", font: "font-sans tracking-tight uppercase" },  
{ name: "BELMOND", label: "Bellini Club", font: "font-serif italic tracking-wide" },  
{ name: "ROSEWOOD", label: "Elite Member", font: "font-sans tracking-widest uppercase" },  
{ name: "MANDARIN ORIENTAL", label: "Fan Club", font: "font-serif tracking-normal" },  
{ name: "PENINSULA", label: "PenClub", font: "font-serif tracking-widest uppercase" },  
{ name: "DORCHESTER", label: "Diamond Club", font: "font-serif tracking-tight" },  
{ name: "AUBERGE", label: "Preferred Partner", font: "font-sans tracking-widest uppercase" },  
{ name: "OETKER COLLECTION", label: "Pearl Partner", font: "font-serif tracking-tighter" },  
{ name: "HYATT", label: "Privé", font: "font-sans tracking-widest" },  
]

const featured = [  
{  
name: "Capella Ubud",  
location: "Bali, Indonesia",  
category: "Wild Frontiers",  
slug: "capella-ubud",  
img: "/api/image?url=https%3A%2F%2Fw0ijk7zmvlb7mxph.private.blob.vercel-storage.com%2FProperty%20Images%2FCapella%20Ubud%2Fubud-accommodation-tent-river-exterior.jpg"  
},  
{  
name: "Dunton Hot Springs",  
location: "Colorado, USA",  
category: "Mountain & Forest",  
slug: "dunton-hot-springs",  
img: "/api/image?url=https%3A%2F%2Fw0ijk7zmvlb7mxph.private.blob.vercel-storage.com%2FProperty%20Images%2FDunton_Hot%20Springs%2FDHS%201.jpg"  
},  
{  
name: "Four Seasons Madrid",  
location: "Madrid, Spain",  
category: "Urban Sovereigns",  
slug: "four-seasons-madrid",  
img: "/api/image?url=https%3A%2F%2Fw0ijk7zmvlb7mxph.private.blob.vercel-storage.com%2FProperty%2520Images%2FFour%2520Seasons_Madrid%2FFS-Madrid-1.jpg"  
},  
]

const perspectiveTeasers = [  
{  
title: "The Logistics of Composure: Private Aviation",  
category: "Aviation",  
slug: "logistics-of-composure-private-aviation",  
img: "https://cdn.marblism.com/ZrRa-ZcHc8S.webp",  
description: "Explore the strategic advantages of private aviation for high-performance travelers, focusing on time sovereignty."  
},  
{  
title: "The Yacht Orchestration: Moving Horizons",  
category: "Maritime",  
slug: "yacht-orchestration-moving-horizons",  
img: "https://cdn.marblism.com/mo51WB0lDjO.webp",  
description: "An intellectual manifesto on the philosophy of luxury yachting and maritime freedom."  
},  
{  
title: "Remote Work Retreats: Productivity in Paradise",  
category: "Productivity",  
slug: "remote-work-retreats-productivity-in-paradise",  
img: "https://cdn.marblism.com/v2-8V4_ZTnh.webp",  
description: "An exploration of ultra-luxury remote work retreats and the 'Officer's Desk' mentality."  
},  
]

const pillars = [  
{ number: "01", title: "Access", subtitle: "The Private Collection", body: "Beyond the reach of public listings lies a sequestered ledger of unlisted estates and off-market retreats, secured through two decades of global leverage." },  
{ number: "02", title: "Intelligence", subtitle: "The Sentinel Standard", body: "We vet for what cannot be seen. From technical security to behavioral vetting, every property and partner is audited to ensure your absolute sanctuary." },  
{ number: "03", title: "The Constant", subtitle: "Seamless Stewardship", body: "A singular, unwavering point of contact for your entire global footprint. We manage the friction of travel so you never have to encounter it." },  
]

export default function HomePage() {  
return (  
<main className="min-h-screen bg-[#0A0A0A] font-serif text-white selection:bg-[#D4AF37] selection:text-black">

{/* Hero */}  
<section className="relative flex h-screen w-full items-center justify-center overflow-hidden">  
  <Image  
    src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80"  
    alt="NexVoyage Sanctuary"  
    fill  
    className="object-cover opacity-60"  
    priority  
    quality={100}  
  />  
  <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black" />  
  <div className="relative z-10 max-w-5xl px-4 text-center">  
    <h1 className="mb-6 font-serif text-5xl tracking-tight text-[#D4AF37] md:text-8xl" style={{ fontWeight: 300 }}>  
      The Art of Discerning Travel  
    </h1>  
    <p className="font-sans text-lg font-light tracking-[0.4em] uppercase text-white/70 md:text-xl">  
      Private Sanctuaries &amp; Bespoke Journeys  
    </p>  
  </div>  
</section>

{/* Founder Section */}  
<section className="mx-auto max-w-6xl border-b border-white/10 px-6 py-24">  
  <div className="grid items-center gap-16 md:grid-cols-2">  
    <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden md:mx-0">  
      <img  
        src="/api/image?url=https%3A%2F%2Fw0ijk7zmvlb7mxph.private.blob.vercel-storage.com%2FHeadshot%2FDaryl%2520Clark_Headshot.jpeg"  
        alt="Daryl Clark"  
        className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"  
      />  
      <div className="pointer-events-none absolute inset-0 border border-[#D4AF37]/30" />  
    </div>  
    <div className="space-y-6">  
      <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#D4AF37]">  
        Founder &amp; Principal  
      </span>  
      <h2 className="font-serif text-4xl font-light tracking-tight text-white md:text-5xl">  
        Daryl Clark  
      </h2>  
      <div className="h-px w-12 bg-[#D4AF37]/50" />  
      <p className="font-sans text-sm font-light leading-relaxed text-white/70 md:text-base">  
        Two decades navigating the world&apos;s most demanding itineraries — from sub-polar  
        archipelagos to private concessions in the Okavango. NexVoyage Collective was built  
        on a singular thesis: true luxury isn&apos;t about where you go, but how you arrive.  
      </p>  
      <p className="font-sans text-sm font-light leading-relaxed text-white/70 md:text-base">  
        Our background spans private security routing, off-market estate sourcing, and family  
        office travel stewardship — translating high-stakes logistics into the invisible  
        choreography that defines a seamless journey.  
      </p>  
      <div className="pt-2">  
        <Link  
          href="/founder"  
          className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-[#D4AF37] transition-opacity hover:opacity-80"  
        >  
          Meet Daryl &amp; View Philosophy →  
        </Link>  
      </div>  
    </div>  
  </div>  
</section>

{/* Global Alliance */}  
<section className="mx-auto max-w-6xl px-6 py-24">  
  <h2 className="mb-16 text-center font-sans text-xs uppercase tracking-[0.3em] text-white/40">  
    The Global Alliance  
  </h2>  
  <div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-4">  
    {partners.map((partner, i) => (  
      <div key={i} className="group text-center">  
        <span className={`text-lg text-white block mb-2 ${partner.font} transition-colors duration-500 group-hover:text-[#D4AF37]`}>  
          {partner.name}  
        </span>  
        <span className="font-sans text-[10px] uppercase tracking-widest text-[#D4AF37] opacity-60">  
          {partner.label}  
        </span>  
      </div>  
    ))}  
  </div>  
</section>

{/* Sanctuary Collection */}  
<section className="py-24">  
  <div className="mx-auto max-w-7xl px-6">  
    <div className="mb-16 flex items-end justify-between">  
      <h2 className="font-serif text-4xl font-light tracking-tight text-[#D4AF37]">The Sanctuary Collection</h2>  
      <Link href="/archive" className="font-sans text-xs uppercase tracking-widest text-white/65 transition-colors hover:text-white border-b border-[#D4AF37] pb-1">  
        View Entire Ledger  
      </Link>  
    </div>  
    <div className="grid gap-12 md:grid-cols-3">  
      {featured.map((item, i) => (  
        <Link key={i} href={`/archive/property/${item.slug}`} className="group cursor-pointer space-y-4">  
          <div className="relative aspect-[4/5] overflow-hidden">  
            <img src={item.img} alt={item.name} className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105" />  
            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />  
          </div>  
          <div>  
            <span className="font-sans text-[9px] uppercase tracking-widest text-white/30">{item.category}</span>  
            <h3 className="text-xl font-light tracking-tight text-white">{item.name}</h3>  
            <p className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] opacity-60">{item.location}</p>  
          </div>  
        </Link>  
      ))}  
    </div>  
  </div>  
</section>

{/* Perspective Teasers */}  
<section className="border-t border-white/10 py-24">  
  <div className="mx-auto max-w-7xl px-6">  
    <div className="mb-16 flex items-end justify-between">  
      <div>  
        <span className="mb-3 block font-sans text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">  
          The Intelligence  
        </span>  
        <h2 className="font-serif text-4xl font-light tracking-tight text-white">Selected Perspectives</h2>  
      </div>  
      <Link href="/perspective" className="font-sans text-xs uppercase tracking-widest text-white/65 transition-colors hover:text-white border-b border-[#D4AF37] pb-1">  
        Explore All Essays  
      </Link>  
    </div>  
    <div className="grid gap-8 md:grid-cols-3">  
      {perspectiveTeasers.map((article) => (  
        <Link  
          key={article.slug}  
          href={`/perspective/${article.slug}`}  
          className="group flex flex-col justify-between border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-[#D4AF37]/50"  
        >  
          <div>  
            <div className="relative mb-6 aspect-[16/9] overflow-hidden border border-white/10">  
              <img  
                src={article.img}  
                alt={article.title}  
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"  
              />  
            </div>  
            <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#D4AF37]">  
              {article.category}  
            </span>  
            <h3 className="mb-3 mt-2 font-serif text-2xl font-light tracking-tight transition-colors group-hover:text-[#D4AF37]">  
              {article.title}  
            </h3>  
            <p className="font-sans text-sm font-light leading-relaxed text-white/55">  
              {article.description}  
            </p>  
          </div>  
          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 font-sans text-[10px] uppercase tracking-[0.2em] text-white/40">  
            <span>Read Article</span>  
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#D4AF37]">→</span>  
          </div>  
        </Link>  
      ))}  
    </div>  
  </div>  
</section>

{/* Client Perspectives */}  
<TestimonialCarousel />

{/* The Three Pillars */}  
<section className="mx-auto max-w-7xl px-6 py-24">  
  <div className="grid grid-cols-1 gap-16 md:grid-cols-3">  
    {pillars.map((p, i) => (  
      <div key={i} className="space-y-5 border-t border-white/10 pt-10">  
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">  
          {p.number} / {p.title}  
        </span>  
        <h3 className="font-sans text-lg font-light tracking-widest uppercase text-white">  
          {p.subtitle}  
        </h3>  
        <p className="font-sans text-sm font-light leading-relaxed text-white/50">  
          {p.body}  
        </p>  
      </div>  
    ))}  
  </div>  
</section>

</main>  
)  
}  

Daryl Clark
1:15 PM
Lets try it one more try. Lets switch out the archive for Bulgari Tokyo for https://nexvoyagecollective.com/archive/property/four-seasons-madrid

Today

Block time on my calendar for
