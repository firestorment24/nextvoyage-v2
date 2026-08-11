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
{ number: "01", title: "Access", subtitle: "The Private Collection", body: "Beyond the reach of public listings lies a curated collection of unlisted estates and off-market retreats, built on relationships developed over decades." },  
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
And here is the clean app/founder/page.tsx with softened vocabulary ("sequestered private islands" → "private islands", blockquote control phrasing toned down):

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
    'Direct access to private islands, unlisted historic palazzos, and wilderness reserves that never appear on public booking sites.',  
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
            presence of complete control over your environment.&rdquo;  
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
            The Craft of Sovereign Travel  
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
