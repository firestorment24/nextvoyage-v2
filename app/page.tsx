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
  img: "/api/image?url=https%3A%2F%2Fw0ijk7zmvlb7mxph.private.blob.vercel-storage.com%2FProperty%20Images%2FDunton%20Hot%20Springs%2Fdunton-hot-springs-cabin-exterior.jpg"   
},  
{   
  name: "Bulgari Hotel Tokyo",   
  location: "Tokyo, Japan",   
  category: "Urban Sovereigns",   
  slug: "bulgari-hotel-tokyo",   
  img: "/api/image?url=https%3A%2F%2Fw0ijk7zmvlb7mxph.private.blob.vercel-storage.com%2FProperty%20Images%2FBulgari%20Hotel%20Tokyo%2Fbulgari-tokyo-suite.jpg"   
},  
]

const pillars = [      
{ number: "01", title: "Access", subtitle: "The Private Collection", body: "Beyond the reach of public listings lies a sequestered ledger of unlisted estates and off-market retreats, secured through two decades of global leverage." },      
{ number: "02", title: "Intelligence", subtitle: "The Sentinel Standard", body: "We vet for what cannot be seen. From technical security to behavioral vetting, every property and partner is audited to ensure your absolute sanctuary." },      
{ number: "03", title: "The Constant", subtitle: "Seamless Stewardship", body: "A singular, unwavering point of contact for your entire global footprint. We manage the friction of travel so you never have to encounter it." },      
]

export default function HomePage() {      
return (      
<main className="min-h-screen bg-[#0A0A0A] text-white font-serif selection:bg-[#D4AF37] selection:text-black">

{/* Hero */}      
<section className="relative h-screen w-full flex items-center justify-center overflow-hidden">      
<Image      
src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/f2/d3/31/caption.jpg?w=1400&h=-1&s=1"      
alt="NexVoyage Sanctuary"      
fill      
className="object-cover opacity-60"      
priority      
quality={100}      
/>      
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />      
<div className="relative z-10 text-center px-4 max-w-5xl">      
<h1 className="text-[#D4AF37] text-5xl md:text-8xl mb-6 tracking-tight font-serif" style={{ fontWeight: 300 }}>      
  The Art of Discerning Travel      
</h1>      
<p className="text-white/70 text-lg md:text-xl font-light tracking-[0.4em] uppercase font-sans">      
  Private Sanctuaries &amp; Bespoke Journeys      
</p>      
</div>      
</section>

{/* Founder Section */}      
<section className="py-24 px-6 max-w-6xl mx-auto border-b border-white/10">      
<div className="grid md:grid-cols-2 gap-16 items-center">      
<div className="relative aspect-[3/4] w-full max-w-sm mx-auto md:mx-0 overflow-hidden">      
  <img      
    src="/api/image?url=https%3A%2F%2Fw0ijk7zmvlb7mxph.private.blob.vercel-storage.com%2FHeadshot%2FDaryl%2520Clark_Headshot.jpeg"      
    alt="Daryl Clark"      
    className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"      
  />      
  <div className="absolute inset-0 border border-[#D4AF37]/30 pointer-events-none" />      
</div>      
<div className="space-y-6">      
  <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-sans">      
    Founder &amp; Principal      
  </span>      
  <h2 className="text-white text-4xl md:text-5xl font-serif font-light tracking-tight">      
    Daryl Clark      
  </h2>      
  <div className="w-12 h-px bg-[#D4AF37]/50" />      
  <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans font-light">      
    Two decades navigating the world&apos;s most demanding itineraries — from sub-polar      
    archipelagos to private concessions in the Okavango. NexVoyage Collective was built      
    on a singular thesis: true luxury isn&apos;t about where you go, but how you arrive.      
  </p>      
  <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans font-light">      
    Our background spans private security routing, off-market estate sourcing, and family      
    office travel stewardship — translating high-stakes logistics into the invisible      
    choreography that defines a seamless journey.      
  </p>      
</div>      
</div>      
</section>

{/* Global Alliance */}      
<section className="py-24 px-6 max-w-6xl mx-auto">      
<h2 className="text-white/40 text-xs uppercase tracking-[0.3em] mb-16 text-center font-sans">      
The Global Alliance      
</h2>      
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">      
{partners.map((partner, i) => (      
  <div key={i} className="text-center group">      
    <span className={`text-white text-lg block mb-2 ${partner.font} group-hover:text-[#D4AF37] transition-colors duration-500`}>      
      {partner.name}      
    </span>      
    <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest opacity-60 font-sans">      
      {partner.label}      
    </span>      
  </div>      
))}      
</div>      
</section>

{/* Sanctuary Collection */}      
<section className="py-24">      
<div className="max-w-7xl mx-auto px-6">      
<div className="flex justify-between items-end mb-16">      
  <h2 className="text-[#D4AF37] text-4xl font-serif font-light tracking-tight">The Sanctuary Collection</h2>      
  <Link href="/archive" className="text-white/60 text-xs uppercase tracking-widest border-b border-[#D4AF37] pb-1 hover:text-white transition-colors font-sans">      
    View Entire Ledger      
  </Link>      
</div>      
<div className="grid md:grid-cols-3 gap-12">      
  {featured.map((item, i) => (      
    <Link key={i} href={`/archive/property/${item.slug}`} className="space-y-4 group cursor-pointer">      
      <div className="relative aspect-[4/5] overflow-hidden">      
        <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />      
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />      
      </div>      
      <div>      
        <span className="text-white/30 text-[9px] uppercase tracking-widest font-sans">{item.category}</span>      
        <h3 className="text-white text-xl font-light tracking-tight">{item.name}</h3>      
        <p className="text-[#D4AF37] text-xs uppercase tracking-widest opacity-60 font-sans">{item.location}</p>      
      </div>      
    </Link>      
  ))}      
</div>      
</div>      
</section>

{/* Client Perspectives */}      
<TestimonialCarousel />

{/* The Three Pillars */}      
<section className="py-24 px-6 max-w-7xl mx-auto">      
<div className="grid grid-cols-1 md:grid-cols-3 gap-16">      
{pillars.map((p, i) => (      
  <div key={i} className="space-y-5 border-t border-white/10 pt-10">      
    <span className="text-white/30 text-[10px] font-mono uppercase tracking-[0.2em]">      
      {p.number} / {p.title}      
    </span>      
    <h3 className="text-white text-lg font-light tracking-widest uppercase font-sans">      
      {p.subtitle}      
    </h3>      
    <p className="text-white/50 text-sm leading-relaxed font-light font-sans">      
      {p.body}      
    </p>      
  </div>      
))}      
</div>      
</section>

</main>      
)      
}  
