import React from 'react';  
import { notFound } from 'next/navigation';  
import Image from 'next/image';  
import Link from 'next/link';  
import { CURATED_JOURNEYS, PRICING_DISCLAIMER } from '@/lib/journeys-data';

interface PageProps {  
params: Promise<{ slug: string }>;  
}

export async function generateStaticParams() {  
return CURATED_JOURNEYS.map((journey) => ({  
  slug: journey.slug,  
}));  
}

export default async function JourneyDetailPage({ params }: PageProps) {  
const resolvedParams = await params;  
const journey = CURATED_JOURNEYS.find((item) => item.slug === resolvedParams.slug);

if (!journey) {  
  notFound();  
}

return (  
<main className="min-h-screen bg-[#0A0A0A] text-white font-serif selection:bg-[#D4AF37] selection:text-black pt-24 pb-32">  
    
  {/* Hero Section */}  
  <div className="relative w-full h-[60vh] min-h-[480px] mb-16 overflow-hidden">  
    <Image  
      src={journey.heroImage}  
      alt={journey.title}  
      fill  
      priority  
      className="object-cover opacity-50"  
    />  
    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/40 to-black/60" />  
    <div className="absolute bottom-12 left-0 w-full px-6 md:px-16 max-w-5xl mx-auto space-y-4">  
      <div className="flex items-center gap-3 text-[#D4AF37] text-xs font-sans tracking-[0.2em] uppercase">  
        <span>{journey.category}</span>  
        <span>//</span>  
        <span>{journey.duration}</span>  
      </div>  
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white font-serif">  
        {journey.title}  
      </h1>  
      <p className="text-[#D4AF37] text-sm md:text-base font-sans tracking-widest uppercase font-semibold">  
        {journey.startingPrice}  
      </p>  
    </div>  
  </div>

  {/* Main Container */}  
  <article className="max-w-4xl mx-auto px-6 md:px-12 space-y-20">

    {/* Overview & Quick Specs */}  
    <div className="space-y-6">  
      <h2 className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">  
        Journey Overview  
      </h2>  
      <p className="text-white/80 text-lg md:text-xl font-sans font-light leading-relaxed">  
        {journey.summary}  
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-sans">  
        <div>  
          <span className="text-white/40 block uppercase tracking-widest text-[9px]">Best Time to Visit</span>  
          <span className="text-white/90 font-light text-sm">{journey.bestTime}</span>  
        </div>  
        <div>  
          <span className="text-white/40 block uppercase tracking-widest text-[9px]">Ideal Trip Length</span>  
          <span className="text-white/90 font-light text-sm">{journey.idealLength}</span>  
        </div>  
        <div>  
          <span className="text-white/40 block uppercase tracking-widest text-[9px]">Target Audience</span>  
          <span className="text-white/90 font-light text-sm">{journey.targetAudience}</span>  
        </div>  
      </div>  
    </div>

    {/* Day-by-Day Highlights (Story-Driven Narrative) */}  
    <div className="space-y-12">  
      <div className="border-b border-white/10 pb-4">  
        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">  
          Day-by-Day Narrative  
        </span>  
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mt-2">  
          The Experience  
        </h2>  
      </div>

      <div className="space-y-12">  
        {journey.highlights.map((h, i) => (  
          <div key={i} className="space-y-3 border-l border-[#D4AF37]/40 pl-6 md:pl-8">  
            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest">  
              {h.day} — {h.title}  
            </span>  
            <p className="text-white/70 text-base md:text-lg font-sans font-light leading-relaxed">  
              {h.narrative}  
            </p>  
          </div>  
        ))}  
      </div>  
    </div>

    {/* Recommended Sanctuaries & Hotels */}  
    <div className="space-y-8 border-t border-white/10 pt-16">  
      <div>  
        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">  
          Accommodations  
        </span>  
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mt-2">  
          Recommended Sanctuaries  
        </h2>  
      </div>

      <div className="grid md:grid-cols-3 gap-6 font-sans">  
        {journey.hotels.map((hotel, i) => (  
          <div key={i} className="border border-white/10 bg-white/[0.01] p-6 space-y-2">  
            <h3 className="text-white font-serif text-lg font-light">{hotel.name}</h3>  
            <p className="text-white/60 text-xs font-light leading-relaxed">{hotel.description}</p>  
          </div>  
        ))}  
      </div>  
    </div>

    {/* Dining Recommendations */}  
    <div className="space-y-6 border-t border-white/10 pt-16 font-sans">  
      <div>  
        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">  
          Gastronomy  
        </span>  
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mt-2 font-serif">  
          Featured Dining  
        </h2>  
      </div>  
      <div className="flex flex-wrap gap-3">  
        {journey.dining.map((d, i) => (  
          <span key={i} className="bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/80 font-light">  
            {d}  
          </span>  
        ))}  
      </div>  
    </div>

    {/* Official Pricing Disclaimer */}  
    <div className="bg-white/[0.02] border border-white/10 p-8 rounded-sm space-y-3 font-sans">  
      <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-semibold">  
        Pricing Guide &amp; Terms  
      </span>  
      <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed">  
        {PRICING_DISCLAIMER}  
      </p>  
    </div>

    {/* Call to Action: Customize This Journey */}  
    <div className="bg-[#0E0E0E] border border-[#D4AF37]/30 p-10 md:p-14 text-center space-y-6">  
      <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">  
        Bespoke Architecture  
      </span>  
      <h2 className="text-3xl font-light text-white">  
        Customize This Journey  
      </h2>  
      <p className="text-white/60 text-sm font-sans font-light max-w-xl mx-auto leading-relaxed">  
        Inspired by this itinerary? Let our advisors tailor the dates, accommodations, and private experiences around your personal travel style.  
      </p>  
      <div className="pt-2">  
        <Link  
          href="https://cal.com/nexvoyagecollective/discovery-call"  
          className="inline-block border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-[0.3em] px-8 py-4 hover:bg-[#D4AF37] hover:text-black transition-all duration-500 font-sans"  
        >  
          Schedule a Discovery Call  
        </Link>  
      </div>  
    </div>

    {/* Back Link */}  
    <div className="pt-4">  
      <Link  
        href="/journeys"  
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] hover:text-white transition-colors font-sans border-b border-[#D4AF37]/40 pb-1"  
      >  
        <span>← Return to Curated Journeys</span>  
      </Link>  
    </div>

  </article>

</main>  
);  
}  
