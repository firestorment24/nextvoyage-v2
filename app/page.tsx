import React from 'react'  
import Image from 'next/image'  
import Link from 'next/link'  
import { PROPERTY_DATA } from '@/lib/data/sanctuaries'

export default function Home() {  
  // Use the first 3 properties for the featured section  
  const featuredProperties = PROPERTY_DATA.slice(0, 3)

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C5A059]/30">  
        
      {/* 1. CINEMATIC HERO */}  
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">  
        <div className="absolute inset-0 z-0">  
          <Image   
            src="https://cdn.marblism.com/qFTkeALRTbV.webp"  
            alt="NexVoyage Sanctuary"  
            fill  
            className="object-cover opacity-40 grayscale-[40%] transition-transform duration-[20s] scale-110"  
            priority  
          />  
          {/* Deep Shadow Vignette */}  
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]" />  
        </div>

        <div className="relative z-10 text-center px-6">  
          <div className="space-y-8">  
            <p className="text-[10px] md:text-xs tracking-[0.8em] text-[#C5A059] font-mono uppercase opacity-70">  
              NexVoyage Collective // Private Intelligence  
            </p>  
            <h1 className="text-7xl md:text-[11vw] font-serif italic text-white leading-[0.8] tracking-tighter">  
              THE ROI <br/> OF RESET  
            </h1>  
            <div className="mt-16 h-[1px] w-24 bg-[#C5A059]/40 mx-auto" />  
          </div>  
        </div>  
      </section>

      {/* 2. THE OFFERINGS (Minimalist & Integrated) */}  
      <section className="py-40 px-8 max-w-6xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32">  
          <div className="space-y-4">  
            <h3 className="text-[#C5A059] font-mono text-[9px] tracking-[0.5em] uppercase opacity-50">I. Sanctuaries</h3>  
            <p className="text-3xl md:text-4xl font-serif italic leading-tight">  
              An off-market ledger of private estates curated for absolute seclusion.  
            </p>  
          </div>  
          <div className="space-y-4 md:mt-24">  
            <h3 className="text-[#C5A059] font-mono text-[9px] tracking-[0.5em] uppercase opacity-50">II. Logistics</h3>  
            <p className="text-3xl md:text-4xl font-serif italic leading-tight">  
              Strategic intelligence required to navigate global travel without friction.  
            </p>  
          </div>  
          <div className="space-y-4">  
            <h3 className="text-[#C5A059] font-mono text-[9px] tracking-[0.5em] uppercase opacity-50">III. Access</h3>  
            <p className="text-3xl md:text-4xl font-serif italic leading-tight">  
              A member-only ecosystem where privacy is the ultimate currency.  
            </p>  
          </div>  
          <div className="flex items-center justify-center md:mt-24">  
            <Link href="/invitation" className="group text-[10px] tracking-[0.5em] font-mono uppercase text-[#C5A059] border border-[#C5A059]/30 px-10 py-6 hover:bg-[#C5A059] hover:text-[#0A0A0A] transition-all duration-500">  
              Request Invitation  
            </Link>  
          </div>  
        </div>  
      </section>

      {/* 3. FEATURED PROPERTIES (The Ledger) */}  
      <section className="py-40 px-8 border-t border-white/5">  
        <div className="max-w-7xl mx-auto">  
          <div className="flex justify-between items-end mb-32">  
            <div>  
              <h2 className="text-5xl md:text-8xl font-serif italic text-white tracking-tighter">The Archive</h2>  
              <p className="text-[10px] text-[#C5A059] font-mono tracking-[0.6em] uppercase mt-4">Selected Dossiers</p>  
            </div>  
            <Link href="/archive" className="text-[9px] tracking-[0.4em] font-mono uppercase opacity-40 hover:opacity-100 transition-opacity border-b border-white/10 pb-2">  
              Full Ledger  
            </Link>  
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">  
            {featuredProperties.map((prop) => (  
              <Link key={prop.id} href={`/archive/property/${prop.id}`} className="group block">  
                <div className="relative aspect-[3/4] overflow-hidden mb-10">  
                  <Image   
                    src={prop.image}   
                    alt={prop.name}  
                    fill  
                    className="object-cover grayscale filter brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"  
                  />  
                </div>  
                <div className="space-y-2">  
                  <h3 className="text-[#C5A059] font-serif italic text-3xl group-hover:text-white transition-colors leading-none">  
                    {prop.name}  
                  </h3>  
                  <div className="flex justify-between items-center text-[9px] font-mono tracking-[0.3em] text-white/30 uppercase">  
                    <span>{prop.location}</span>  
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A059]">View Dossier</span>  
                  </div>  
                </div>  
              </Link>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* 4. FOOTER */}  
      <footer className="py-32 text-center">  
        <div className="h-[1px] w-12 bg-[#C5A059]/30 mx-auto mb-12" />  
        <p className="text-[11px] text-[#C5A059] font-serif italic tracking-widest mb-4">NexVoyage Collective</p>  
        <p className="text-[8px] text-white/10 tracking-[0.6em] font-mono uppercase">  
          Private · By Introduction · Est. 2024  
        </p>  
      </footer>  
    </main>  
  )  
}  
