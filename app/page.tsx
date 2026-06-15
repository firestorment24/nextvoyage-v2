import React from 'react'  
import Link from 'next/link'

export default function HomePage() {  
  const featuredProperties = [  
    { name: 'Amangiri', location: 'Canyon Point, Utah', hook: 'The Monolith in the Mesa', image: 'https://cdn.marblism.com/placeholder-1.webp' },  
    { name: 'The Maybourne Riviera', location: 'France', hook: 'The Edge of the Continent', image: 'https://cdn.marblism.com/placeholder-2.webp' },  
    { name: 'Aman Kyoto', location: 'Kyoto, Japan', hook: 'The Secret Garden of the Shogun', image: 'https://cdn.marblism.com/placeholder-3.webp' },  
    { name: 'Six Senses Southern Dunes', location: 'Saudi Arabia', hook: 'The Red Sea Odyssey', image: 'https://cdn.marblism.com/placeholder-4.webp' },  
    { name: 'One&Only Aesthesis', location: 'Athens, Greece', hook: 'The Athenian Riviera', image: 'https://cdn.marblism.com/placeholder-5.webp' },  
    { name: 'Singita Kwitonda Lodge', location: 'Rwanda', hook: 'The Volcanic Retreat', image: 'https://cdn.marblism.com/placeholder-6.webp' },  
    { name: 'Aman New York', location: 'Manhattan, USA', hook: 'The Crown of the City', image: 'https://cdn.marblism.com/placeholder-7.webp' },  
    { name: 'Habitas AlUla', location: 'Saudi Arabia', hook: 'The Echo of the Ancients', image: 'https://cdn.marblism.com/placeholder-8.webp' },  
    { name: '7132 Hotel', location: 'Vals, Switzerland', hook: 'The Stone Silence', image: 'https://cdn.marblism.com/placeholder-9.webp' },  
    { name: 'Passalacqua', location: 'Lake Como, Italy', hook: 'The Lakefront Legacy', image: 'https://cdn.marblism.com/placeholder-10.webp' },  
    { name: 'Bulgari Hotel Tokyo', location: 'Tokyo, Japan', hook: 'The Sky Ledger', image: 'https://cdn.marblism.com/placeholder-11.webp' },  
    { name: 'Capella Ubud', location: 'Bali, Indonesia', hook: 'The Jungle Expedition', image: 'https://cdn.marblism.com/placeholder-12.webp' },  
  ]

  return (  
    <main className="bg-black text-[#d4af37] min-h-screen font-serif">  
      {/* Hero Section */}  
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">  
        <div   
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-transform duration-1000"  
          style={{ backgroundImage: `url(https://cdn.marblism.com/qFTkeALRTbV.webp)` }}  
        />  
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />  
          
        <div className="relative z-10 text-center px-4 max-w-4xl">  
          <p className="font-sans text-[10px] tracking-[0.6em] uppercase mb-6 opacity-60">Global Collection 2026</p>  
          <h1 className="text-6xl md:text-8xl tracking-tighter leading-tight mb-8">  
            Restoration of <br />  
            <span className="italic">Architectural Silence</span>  
          </h1>  
          <p className="font-sans text-xs tracking-[0.3em] uppercase opacity-80">By Appointment Only</p>  
        </div>  
      </section>

      {/* Signature Service Bar */}  
      <section className="bg-black border-y border-[#d4af37]/10 py-12">  
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">  
          {[  
            { label: 'Concierge', value: '24/7 Global Access' },  
            { label: 'Exclusivity', value: 'Off-Market Properties' },  
            { label: 'Curation', value: 'Tailored Itineraries' }  
          ].map((service) => (  
            <div key={service.label} className="group">  
              <p className="font-sans text-[9px] uppercase tracking-[0.4em] opacity-40 mb-2">{service.label}</p>  
              <p className="text-xl tracking-tight transition-all group-hover:italic">{service.value}</p>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* Featured Properties Grid */}  
      <section className="max-w-7xl mx-auto px-8 py-24">  
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#d4af37]/20 pb-8">  
          <div>  
            <h2 className="text-4xl md:text-5xl mb-4">The Archive</h2>  
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-50">Curated Sanctuaries for the Collective</p>  
          </div>  
          <Link href="/archive" className="font-sans text-[10px] uppercase tracking-[0.2em] border-b border-[#d4af37] pb-1 hover:opacity-70 transition-opacity mt-8 md:mt-0">  
            View All Properties  
          </Link>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">  
          {featuredProperties.map((prop) => (  
            <div key={prop.name} className="group cursor-pointer">  
              <div className="relative aspect-[4/5] mb-8 overflow-hidden bg-[#111]">  
                <img   
                  src={prop.image}   
                  alt={prop.name}  
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"  
                />  
                <div className="absolute inset-0 border border-transparent group-hover:border-[#d4af37]/30 transition-all" />  
              </div>  
              <div className="flex justify-between items-start mb-2">  
                <h3 className="text-2xl tracking-tight">{prop.name}</h3>  
                <span className="font-sans text-[8px] uppercase tracking-[0.2em] opacity-40 pt-2">{prop.location}</span>  
              </div>  
              <p className="font-sans text-[9px] uppercase tracking-[0.3em] opacity-50 group-hover:text-[#d4af37] transition-colors">{prop.hook}</p>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* Perspective Preview */}  
      <section className="bg-[#050505] py-24 border-t border-[#d4af37]/10">  
        <div className="max-w-3xl mx-auto text-center px-8">  
          <p className="font-sans text-[9px] uppercase tracking-[0.6em] opacity-40 mb-8 italic text-[#d4af37]">Perspective</p>  
          <h2 className="text-4xl md:text-6xl tracking-tighter leading-tight mb-12 italic">  
            "True luxury is found in the spaces where no one can find you."  
          </h2>  
          <Link   
            href="/perspective"   
            className="inline-block font-sans text-[10px] uppercase tracking-[0.4em] border border-[#d4af37]/30 px-10 py-5 hover:bg-[#d4af37] hover:text-black transition-all"  
          >  
            Enter The Perspective  
          </Link>  
        </div>  
      </section>  
    </main>  
  )  
}  
