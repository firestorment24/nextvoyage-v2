'use client'

import Hero from './components/Hero'  
import { SANCTUARY_DATA } from './lib/data/sanctuaries'  
import Link from 'next/link'  
import Image from 'next/image'

export default function HomePage() {  
  // We'll showcase a few archetypes on the home page  
  const featuredSanctuaries = SANCTUARY_DATA.slice(0, 3)

  return (  
    <main className="min-h-screen bg-stone-50">  
      {/* Hero Section */}  
      <Hero   
        title="Beyond the Horizon"  
        subtitle="The New Standard of Travel"  
        heroImage="https://cdn.marblism.com/2kiplm3ni1A.webp"  
        ctaText="Explore The Collection"  
        ctaHref="/sanctuaries"  
      />

      {/* Philosophy Section */}  
      <section className="py-24 px-6 md:px-12 bg-white text-stone-900">  
        <div className="max-w-4xl mx-auto text-center">  
          <p className="text-xl md:text-2xl font-light leading-relaxed tracking-wide">  
            We don’t just book travel. We architect sanctuaries—temporary homes for the global soul,   
            curated with obsessive attention to the quiet luxury of time and privacy.  
          </p>  
        </div>  
      </section>

      {/* Featured Collection Teaser */}  
      <section className="py-24 px-6 md:px-12 border-t border-stone-200">  
        <div className="max-w-7xl mx-auto">  
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">  
            <div>  
              <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">01 / The Collection</span>  
              <h2 className="text-4xl md:text-5xl font-extralight mt-4 text-stone-900 italic">A Curated Atlas</h2>  
            </div>  
            <Link   
              href="/sanctuaries"   
              className="text-stone-900 border-b border-stone-900 pb-1 hover:opacity-60 transition-opacity uppercase tracking-widest text-xs font-medium"  
            >  
              View All Sanctuaries →  
            </Link>  
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  
            {featuredSanctuaries.map((sanctuary) => (  
              <Link key={sanctuary.id} href={`/sanctuaries/${sanctuary.slug}`} className="group block">  
                <div className="aspect-[4/5] relative overflow-hidden bg-stone-200 grayscale group-hover:grayscale-0 transition-all duration-700">  
                  <Image   
                    src={sanctuary.image}   
                    alt={sanctuary.name}  
                    fill  
                    className="object-cover transition-transform duration-700 group-hover:scale-105"  
                  />  
                </div>  
                <div className="mt-6">  
                  <h3 className="text-lg font-light tracking-wide text-stone-900 uppercase">{sanctuary.name}</h3>  
                  <p className="text-sm text-stone-500 mt-2 font-light italic">{sanctuary.tagline}</p>  
                </div>  
              </Link>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* Secondary CTA/Inquiry */}  
      <section className="py-32 px-6 md:px-12 bg-stone-900 text-stone-100 text-center">  
        <div className="max-w-2xl mx-auto">  
          <h2 className="text-3xl font-extralight mb-8 tracking-tight">Ready to transcend?</h2>  
          <Link   
            href="/concierge"   
            className="inline-block px-12 py-4 border border-stone-100 text-stone-100 hover:bg-stone-100 hover:text-stone-900 transition-all duration-300 uppercase tracking-widest text-xs font-medium"  
          >  
            Start The Inquiry Flow  
          </Link>  
        </div>  
      </section>  
    </main>  
  )  
}  
