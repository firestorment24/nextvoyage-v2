'use client'

import Hero from '@/components/Hero'  
import { SANCTUARY_DATA } from '@/lib/data/sanctuaries'  
import Link from 'next/link'  
import Image from 'next/image'

export default function Home() {  
  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-white">  
      {/* Hero Section with the new high-end asset */}  
      <Hero   
        title="The Art of Escape"  
        subtitle="Curated sanctuaries for the high-net-worth traveler."  
        ctaText="Explore Sanctuaries"  
        ctaHref="/sanctuaries"  
        heroImage="https://cdn.marblism.com/2kiplm3ni1A.webp"  
      />

      {/* Philosophy Section */}  
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">  
        <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-widest uppercase">The Collective</h2>  
        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">  
          We believe travel should be more than a destination. It should be a transformation.   
          NexVoyage Collective bridges the gap between the known and the extraordinary.  
        </p>  
      </section>

      {/* Featured Archetypes Grid */}  
      <section className="pb-24 px-6 md:px-12 max-w-7xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {Object.values(SANCTUARY_DATA).slice(0, 6).map((sanctuary) => (  
            <Link   
              key={sanctuary.id}   
              href={`/sanctuaries/${sanctuary.id}`}  
              className="group block relative overflow-hidden aspect-[4/5] bg-neutral-900"  
            >  
              <Image  
                src={sanctuary.heroImage || sanctuary.image}  
                alt={sanctuary.name}  
                fill  
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"  
              />  
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />  
              <div className="absolute bottom-0 left-0 p-8">  
                <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">{sanctuary.location}</p>  
                <h3 className="text-2xl font-light tracking-tight">{sanctuary.name}</h3>  
                <p className="text-sm text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">  
                  {sanctuary.tagline}  
                </p>  
              </div>  
            </Link>  
          ))}  
        </div>

        <div className="mt-16 text-center">  
          <Link   
            href="/sanctuaries"   
            className="inline-block border border-white/20 px-10 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors"  
          >  
            View All Archetypes  
          </Link>  
        </div>  
      </section>  
    </main>  
  )  
}  
