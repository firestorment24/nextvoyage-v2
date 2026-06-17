import React from 'react'  
import Image from 'next/image'  
import Link from 'next/link'  
import { PROPERTY_DATA } from '@/lib/data/sanctuaries'

export default function Home() {  
  // Grab the specific properties for the featured grid  
  const featuredProperties = PROPERTY_DATA.slice(0, 3)

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white">  
        
      {/* RESTORED: Hero Section with ROI OF RESET */}  
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">  
        <div className="absolute inset-0 z-0">  
          <Image   
            src="https://cdn.marblism.com/qFTkeALRTbV.webp"  
            alt="NexVoyage Hero"  
            fill  
            className="object-cover opacity-45 grayscale-[20%] transition-transform duration-[10s] hover:scale-110"  
            priority  
          />  
          {/* Deep Shadow Gradient */}  
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]" />  
        </div>

        <div className="relative z-10 text-center px-4">  
          <p className="text-[10px] md:text-xs tracking-[0.6em] text-[#C5A059] font-mono uppercase mb-6 opacity-80">  
            NexVoyage Collective // Private travel intelligence  
          </p>  
          <h1 className="text-6xl md:text-[9vw] font-serif italic text-white leading-none tracking-tighter">  
            THE ROI OF RESET  
          </h1>  
          <div className="mt-12 h-[1px] w-24 bg-[#C5A059] mx-auto opacity-50" />  
        </div>  
      </section>

      {/* Featured Properties Grid */}  
      <section className="py-32 px-8 max-w-7xl mx-auto">  
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">  
          <div>  
            <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-4">The Archive</h2>  
            <p className="text-sm text-[#C5A059]/70 font-mono tracking-widest uppercase">Select Sanctuary Dossiers</p>  
          </div>  
          <Link href="/archive" className="text-xs tracking-[0.3em] font-mono uppercase border-b border-[#C5A059]/30 pb-2 hover:border-[#C5A059] transition-all">  
            Enter The Full Ledger  
          </Link>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  
          {featuredProperties.map((prop) => (  
            <Link key={prop.id} href={`/archive/property/${prop.id}`} className="group">  
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-[#111]">  
                <Image   
                  src={prop.image}   
                  alt={prop.name}  
                  fill  
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"  
                />  
              </div>  
              <h3 className="text-[#C5A059] font-serif italic text-2xl mb-1">{prop.name}</h3>  
              <p className="text-[10px] font-mono tracking-widest text-white/40 uppercase">{prop.location} // ID: {prop.id}</p>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Footer Branding */}  
      <footer className="py-20 border-t border-white/5 text-center">  
        <p className="text-[9px] text-white/20 tracking-[0.5em] font-mono uppercase">  
          Private · By Introduction · Est. 2024  
        </p>  
      </footer>  
    </main>  
  )  
}  
