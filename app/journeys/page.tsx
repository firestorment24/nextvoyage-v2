import React from 'react';  
import Link from 'next/link';  
import Image from 'next/image';  
import { CURATED_JOURNEYS, PRICING_DISCLAIMER } from '@/lib/journeys-data';

export default function JourneysPage() {  
return (  
  <main className="min-h-screen bg-[#0A0A0A] text-white font-serif selection:bg-[#D4AF37] selection:text-black">

    {/* Hero Section */}  
    <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">  
      <Image  
        src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80"  
        alt="Curated Journeys"  
        fill  
        className="object-cover opacity-50"  
        priority  
        quality={100}  
      />  
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#0A0A0A]" />  
      <div className="relative z-10 text-center px-6 max-w-4xl mt-12">  
        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-sans">  
          Signature Itineraries  
        </span>  
        <h1 className="text-[#D4AF37] text-4xl md:text-7xl font-light tracking-tight mt-4 mb-6">  
          Curated Journeys  
        </h1>  
        <p className="text-white/70 text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto font-sans">  
          Inspirational frameworks demonstrating how we architect your global footprint. Every journey is fully personalized around your exact pace, interests, and style.  
        </p>  
      </div>  
    </section>

    {/* Journeys Grid */}  
    <section className="py-24 px-6 max-w-7xl mx-auto">  
      <div className="grid md:grid-cols-2 gap-16">  
        {CURATED_JOURNEYS.map((journey) => (  
          <article key={journey.slug} className="group border border-white/10 bg-white/[0.01] overflow-hidden flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all duration-500">  
            <div>  
              {/* Image Header */}  
              <div className="relative aspect-[16/10] overflow-hidden">  
                <Image  
                  src={journey.heroImage}  
                  alt={journey.title}  
                  fill  
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"  
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />  
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1">  
                  <span className="text-[#D4AF37] text-[9px] uppercase tracking-widest font-sans">  
                    {journey.category}  
                  </span>  
                </div>  
              </div>

              {/* Content */}  
              <div className="p-8 space-y-6">  
                <div className="space-y-2">  
                  <div className="flex justify-between items-baseline">  
                    <span className="text-white/40 text-xs font-mono">{journey.duration}</span>  
                    <span className="text-[#D4AF37] text-xs font-sans tracking-widest uppercase font-semibold">{journey.startingPrice}</span>  
                  </div>  
                  <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">  
                    {journey.title}  
                  </h2>  
                  <p className="text-[#D4AF37] text-xs uppercase tracking-widest opacity-80 font-sans">  
                    {journey.subtitle}  
                  </p>  
                </div>

                <p className="text-white/60 text-sm leading-relaxed font-sans font-light">  
                  {journey.summary}  
                </p>

                {/* Meta details */}  
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-sans">  
                  <div>  
                    <span className="text-white/40 block uppercase tracking-widest text-[9px]">Best Time to Visit</span>  
                    <span className="text-white/80 font-light">{journey.bestTime}</span>  
                  </div>  
                  <div>  
                    <span className="text-white/40 block uppercase tracking-widest text-[9px]">Ideal Length</span>  
                    <span className="text-white/80 font-light">{journey.idealLength}</span>  
                  </div>  
                </div>

                {/* Recommended Hotels preview */}  
                <div className="pt-2">  
                  <span className="text-white/40 block uppercase tracking-widest text-[9px] mb-2 font-sans">Featured Sanctuaries</span>  
                  <div className="flex flex-wrap gap-2">  
                    {journey.hotels.map((h, i) => (  
                      <span key={i} className="text-[11px] bg-white/5 border border-white/10 text-white/70 px-2.5 py-1 font-sans">  
                        {h.name}  
                      </span>  
                    ))}  
                  </div>  
                </div>  
              </div>  
            </div>

            {/* Card Footer CTA */}  
            <div className="p-8 pt-0">  
              <Link  
                href={`/journeys/${journey.slug}`}  
                className="inline-block w-full text-center border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-[0.3em] py-3.5 hover:bg-[#D4AF37] hover:text-black transition-all duration-500 font-sans"  
              >  
                Explore Curated Journey →  
              </Link>  
            </div>  
          </article>  
        ))}  
      </div>  
    </section>

    {/* Pricing Disclaimer Section */}  
    <section className="py-16 px-6 max-w-4xl mx-auto border-t border-white/10 text-center">  
      <div className="bg-white/[0.02] border border-white/10 p-8 rounded-sm space-y-4">  
        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans font-semibold">  
          Investment Guide &amp; Terms  
        </span>  
        <p className="text-white/60 text-xs md:text-sm font-sans font-light leading-relaxed">  
          {PRICING_DISCLAIMER}  
        </p>  
      </div>  
    </section>

    {/* Bottom CTA */}  
    <section className="py-24 border-t border-white/10 text-center px-6 bg-[#0E0E0E]">  
      <div className="max-w-xl mx-auto space-y-6">  
        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">  
          Bespoke Architecture  
        </span>  
        <h2 className="text-3xl md:text-4xl font-light text-white">  
          Begin Crafting Your Journey  
        </h2>  
        <p className="text-white/50 text-sm leading-relaxed font-sans font-light">  
          Every itinerary is thoughtfully customized. Connect with our principals to design your next global experience.  
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
