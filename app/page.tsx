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
name: "Bulgari Hotel Tokyo",  
location: "Tokyo, Japan",  
category: "Urban Sovereigns",  
slug: "bulgari-hotel-tokyo",  
img: "/api/image?url=https%3A%2F%2Fw0ijk7zmvlb7mxph.private.blob.vercel-storage.com%2FProperty%20Images%2FBVLGARI_Tokyo%2FBH%20Tokyo3.jpeg"  
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
