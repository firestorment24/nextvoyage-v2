'use client'

import React from 'react'    
import Link from 'next/link'

export default function HomePage() {    
  const properties = [  
    { id: 'aman-new-york', name: 'Aman New York', loc: 'Manhattan, USA', img: 'https://cdn.marblism.com/WuyrXpnAwo9.webp' },  
    { id: 'habitas-alula', name: 'Habitas AlUla', loc: 'Ashar Valley, Saudi Arabia', img: 'https://cdn.marblism.com/WuyrXpnAwo9.webp' },  
    { id: '7132-hotel', name: '7132 Hotel', loc: 'Vals, Switzerland', img: 'https://cdn.marblism.com/WuyrXpnAwo9.webp' },  
    { id: 'passalacqua', name: 'Passalacqua', loc: 'Lake Como, Italy', img: 'https://cdn.marblism.com/WuyrXpnAwo9.webp' },  
    { id: 'bulgari-tokyo', name: 'Bulgari Hotel', loc: 'Tokyo, Japan', img: 'https://cdn.marblism.com/WuyrXpnAwo9.webp' },  
    { id: 'capella-ubud', name: 'Capella Ubud', loc: 'Bali, Indonesia', img: 'https://cdn.marblism.com/WuyrXpnAwo9.webp' },  
    { id: 'amangiri', name: 'Amangiri', loc: 'Canyon Point, USA', img: 'https://cdn.marblism.com/WuyrXpnAwo9.webp' },  
    { id: 'maybourne-riviera', name: 'The Maybourne Riviera', loc: 'Roquebrune-Cap-Martin, France', img: 'https://cdn.marblism.com/QaCq5-bi5FE.webp' },  
    { id: 'aman-kyoto', name: 'Aman Kyoto', loc: 'Kyoto, Japan', img: 'https://cdn.marblism.com/WuyrXpnAwo9.webp' },  
    { id: 'six-senses-southern-dunes', name: 'Six Senses Southern Dunes', loc: 'Red Sea, Saudi Arabia', img: 'https://cdn.marblism.com/WuyrXpnAwo9.webp' },  
    { id: 'one-only-aesthesis', name: 'One&Only Aesthesis', loc: 'Athens, Greece', img: 'https://cdn.marblism.com/WuyrXpnAwo9.webp' },  
    { id: 'singita-kwitonda', name: 'Singita Kwitonda Lodge', loc: 'Volcanoes National Park, Rwanda', img: 'https://cdn.marblism.com/WuyrXpnAwo9.webp' }  
  ];

  return (    
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">    
          
      {/* Hero Section */}    
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">    
        <div     
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"    
          style={{     
            backgroundImage: `url('https://cdn.marblism.com/qFTkeALRTbV.webp')`,    
            filter: 'brightness(0.45)'    
          }}    
        />    
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]" />

        <div className="relative z-20 text-center px-6 max-w-5xl animate-in fade-in duration-1000">    
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-[0.2em] uppercase text-[#c5a059] mb-6 drop-shadow-2xl">    
            The Art of Discerning Travel    
          </h1>    
          <p className="text-lg md:text-xl font-light tracking-widest text-zinc-300 uppercase max-w-3xl mx-auto">    
            Private sanctuaries and bespoke journeys for the world's most selective travelers.    
          </p>    
        </div>    
      </section>

      {/* Signature Service Bar */}    
      <section className="py-12 border-y border-[#c5a059]/10 bg-[#0d0d0d]">    
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">    
          <div>    
            <span className="text-[#c5a059] block text-xs tracking-[0.3em] uppercase mb-2">Service 01</span>    
            <p className="text-sm tracking-widest font-light text-zinc-400">24/7 GLOBAL CONCIERGE</p>    
          </div>    
          <div className="border-x border-[#c5a059]/10">    
            <span className="text-[#c5a059] block text-xs tracking-[0.3em] uppercase mb-2">Service 02</span>    
            <p className="text-sm tracking-widest font-light text-zinc-400">OFF-MARKET PROPERTIES</p>    
          </div>    
          <div>    
            <span className="text-[#c5a059] block text-xs tracking-[0.3em] uppercase mb-2">Service 03</span>    
            <p className="text-sm tracking-widest font-light text-zinc-400">TAILORED ITINERARIES</p>    
          </div>    
        </div>    
      </section>

      {/* Featured Properties Section */}    
      <section className="py-24 px-6 bg-[#0a0a0a]">    
        <div className="max-w-7xl mx-auto">    
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">    
            <div>    
              <span className="text-[#c5a059] tracking-[0.4em] uppercase text-xs mb-4 block italic">Curated Collection</span>    
              <h2 className="text-4xl font-serif text-white uppercase tracking-tighter">Featured Sanctuaries</h2>    
            </div>    
            <Link href="/sanctuaries" className="text-[#c5a059] text-xs tracking-[0.3em] uppercase border-b border-[#c5a059]/30 pb-1 hover:border-[#c5a059] transition-all">    
              View Entire Ledger    
            </Link>    
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">    
            {properties.map((prop) => (    
              <Link key={prop.id} href={`/sanctuaries/${prop.id}`} className="group block">    
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-6">    
                  <img     
                    src={prop.img}     
                    alt={prop.name}    
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110 opacity-60 group-hover:opacity-100"    
                  />    
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />    
                </div>    
                <h3 className="text-xl font-serif tracking-tight mb-1 text-white">{prop.name}</h3>    
                <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">{prop.loc}</p>    
              </Link>    
            ))}    
          </div>    
        </div>    
      </section>

      {/* Perspective Preview Section */}    
      <section className="py-24 bg-[#0d0d0d] relative">    
        <div className="max-w-4xl mx-auto text-center px-6">    
          <div className="w-px h-24 bg-[#c5a059]/30 mx-auto mb-12" />    
          <span className="text-[#c5a059] tracking-[0.5em] uppercase text-xs mb-6 block">Editorial Perspective</span>    
          <h2 className="text-3xl md:text-5xl font-serif italic mb-8">The ROI of Reset</h2>    
          <p className="text-zinc-400 font-light leading-relaxed mb-12 max-w-2xl mx-auto">    
            Explore our curated insights on high-density travel, quiet luxury, and the intellectual pursuit of the unreachable.    
          </p>    
          <Link href="/perspective" className="inline-block px-12 py-4 border border-[#c5a059]/20 text-[#c5a059] text-xs tracking-[0.3em] uppercase hover:bg-[#c5a059] hover:text-black transition-all">    
            Read the Journal    
          </Link>    
        </div>    
      </section>

    </main>    
  )    
}  
