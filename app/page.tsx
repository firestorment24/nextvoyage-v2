'use client'

import React from 'react'  
import Navigation from '@/components/Navigation'

export default function HomePage() {  
  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-white">  
      {/* Hero Section */}  
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">  
        {/* Hero Image with Brass & Shadow Overlay */}  
        <div   
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"  
          style={{   
            backgroundImage: `url('https://cdn.marblism.com/qFTkeALRTbV.webp')`,  
            filter: 'brightness(0.45)'  
          }}  
        />  
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]" />

        {/* Hero Content */}  
        <div className="relative z-20 text-center px-6 max-w-5xl animate-in fade-in duration-1000">  
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-[0.2em] uppercase text-[#c5a059] mb-6 drop-shadow-2xl">  
            The Art of Discerning Travel  
          </h1>  
          <p className="text-lg md:text-xl font-light tracking-widest text-zinc-300 uppercase max-w-3xl mx-auto">  
            Private sanctuaries and bespoke journeys for the world's most selective travelers.  
          </p>  
        </div>  
      </section>

      {/* Additional sections can be added here */}  
      <section className="py-24 px-6 bg-[#0a0a0a]">  
        <div className="max-w-4xl mx-auto text-center border-t border-[#c5a059]/20 pt-16">  
          <span className="text-[#c5a059] tracking-[0.3em] uppercase text-sm mb-4 block">NexVoyage Collective</span>  
          <h2 className="text-3xl font-serif mb-8 italic">Curating the Unreachable.</h2>  
        </div>  
      </section>  
    </main>  
  )  
}  
