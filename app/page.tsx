"use client"

import React from 'react'  
import Link from 'next/link'

// Signature Brass: #C5A059  
// Black Void: #000000

export default function HomePage() {  
  // Mock data for the first 3 properties (NV-LDR-019)  
  const featuredProperties = [  
    {  
      id: 'one-and-only-aesthesis',  
      name: 'One&Only Aesthesis',  
      location: 'Athens Riviera, Greece',  
      image: 'https://cdn.marblism.com/grid-1.webp',  
    },  
    {  
      id: 'aman-venice',  
      name: 'Aman Venice',  
      location: 'Venice, Italy',  
      image: 'https://cdn.marblism.com/grid-2.webp',  
    },  
    {  
      id: 'royal-mansour',  
      name: 'Royal Mansour',  
      location: 'Marrakech, Morocco',  
      image: 'https://cdn.marblism.com/grid-3.webp',  
    }  
  ]

  return (  
    <main className="min-h-screen bg-[#000000] text-[#C5A059] selection:bg-[#C5A059]/30 selection:text-white">  
      {/* Global CSS Override to kill any rogue white blocks */}  
      <style jsx global>{`  
        body { background-color: #000000 !important; }  
        .bg-white, .bg-slate-50, .bg-[#FCFAF7] { background-color: transparent !important; }  
        h1, h2, h3, h4, p, span { color: #C5A059 !important; }  
      `}</style>

      {/* Hero Section: The Sovereign Arrival */}  
      <section className="relative h-screen w-full overflow-hidden">  
        <img   
          src="https://cdn.marblism.com/8cCycGyYogj.webp"   
          alt="The Sovereign Arrival"   
          className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale-[40%]"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent" />  
          
        <div className="relative z-10 flex h-full flex-col justify-end px-8 pb-24 md:px-20">  
          <h1 className="max-w-4xl font-serif text-5xl font-light tracking-tighter md:text-8xl">  
            THE SOVEREIGN <br />  
            <span className="italic font-normal">ARRIVAL</span>  
          </h1>  
          <p className="mt-6 max-w-xl font-sans text-sm uppercase tracking-[0.3em] opacity-80">  
            Curated Expeditions for the Global Elite  
          </p>  
        </div>  
      </section>

      {/* Services Overview */}  
      <section className="py-32 px-8 md:px-20 border-t border-[#C5A059]/10">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">  
          <div>  
            <h2 className="font-serif text-4xl font-light italic">The Collective Engine</h2>  
          </div>  
          <div className="space-y-8">  
            <p className="text-lg leading-relaxed font-light">  
              NexVoyage Collective serves as the bespoke architectural engine for travelers who demand more than luxury—they demand legacy.   
              Our team navigates the intersection of editorial discovery and seamless logistics.  
            </p>  
            <div className="pt-8 border-t border-[#C5A059]/20 flex gap-12 text-[10px] uppercase tracking-[0.4em]">  
              <span>Portfolio Management</span>  
              <span>Asset Acquisition</span>  
              <span>Global Concierge</span>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Featured Properties: Staggered Editorial Grid */}  
      <section className="py-32 px-8 md:px-20 bg-[#000000]">  
        <h2 className="mb-20 font-serif text-sm uppercase tracking-[0.5em] text-center">Selected Perspectives</h2>  
          
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">  
          {featuredProperties.map((property, idx) => (  
            <Link   
              key={property.id}  
              href={`/archive/property/${property.id}`}  
              className={`group relative overflow-hidden transition-all duration-700 md:col-span-6   
                ${idx === 1 ? 'md:mt-40 md:col-start-7' : ''}   
                ${idx === 2 ? 'md:-mt-20 md:col-span-4 md:col-start-2' : ''}  
              `}  
            >  
              <div className="aspect-[4/5] overflow-hidden">  
                <img   
                  src={property.image}   
                  alt={property.name}  
                  className="h-full w-full object-cover grayscale-[100%] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"  
                />  
              </div>  
              <div className="mt-6 space-y-1">  
                <h3 className="font-serif text-2xl font-light tracking-tight group-hover:italic">{property.name}</h3>  
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-60">{property.location}</p>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Bottom CTA */}  
      <section className="py-40 text-center border-t border-[#C5A059]/10">  
        <Link   
          href="/archive"   
          className="inline-block border border-[#C5A059] px-12 py-4 text-xs uppercase tracking-[0.5em] transition-all hover:bg-[#C5A059] hover:text-black"  
        >  
          Explore the Archive  
        </Link>  
      </section>  
    </main>  
  )  
}  
