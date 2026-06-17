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
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">  
        <div className="absolute inset-0 z-0">  
          <Image   
            src="https://cdn.marblism.com/qFTkeALRTbV.webp"  
            alt="NexVoyage Sanctuary"  
            fill  
            className="object-cover opacity-50 grayscale-[30%] transition-transform duration-[20s] scale-110 hover:scale-100"  
            priority  
          />  
          {/* Brass & Shadow Gradient Overlay */}  
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]" />  
        </div>

        <div className="relative z-10 text-center px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">  
          <div className="space-y-6">  
            <p className="text-[10px] md:text-xs tracking-[0.8em] text-[#C5A059] font-mono uppercase opacity-90">  
              NexVoyage Collective // Private Intelligence  
            </p>  
            <h1 className="text-6xl md:text-[10vw] font-serif italic text-white leading-[0.85] tracking-tighter">  
              THE ROI <br/> OF RESET  
            </h1>  
            <div className="mt-12 h-[1px] w-32 bg-[#C5A059] mx-auto opacity-40" />  
          </div>  
        </div>

        {/* Scroll Indicator */}  
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">  
          <span className="text-[9px] font-mono tracking-[0.4em] uppercase">Scroll</span>  
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#C5A059] to-transparent" />  
        </div>  
      </section>

      {/* 2. THE COLLECTIVE OFFERINGS */}  
      <section className="py-32 px-8 border-y border-white/5 bg-[#0D0D0D]">  
        <div className="max-w-7xl mx-auto">  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">  
            <div className="space-y-6">  
              <span className="text-[#C5A059] font-mono text-[10px] tracking-[0.4em] uppercase">01 / Sanctuaries</span>  
              <h3 className="text-3xl font-serif italic">The Quiet Reserve</h3>  
              <p className="text-white/50 text-sm leading-relaxed font-light">  
                Access to an off-market ledger of private estates and sanctuaries curated specifically for high-net-worth orchestration.  
              </p>  
            </div>  
            <div className="space-y-6">  
              <span className="text-[#C5A059] font-mono text-[10px] tracking-[0.4em] uppercase">02 / Intelligence</span>  
              <h3 className="text-3xl font-serif italic">Travel Logistics</h3>  
              <p className="text-white/50 text-sm leading-relaxed font-light">  
                Beyond booking. We provide the strategic intelligence required to navigate global travel with absolute frictionlessness.  
              </p>  
            </div>  
            <div className="space-y-6">  
              <span className="text-[#C5A059] font-mono text-[10px] tracking-[0.4em] uppercase">03 / Exclusivity</span>  
              <h3 className="text-3xl font-serif italic">Private Access</h3>  
              <p className="text-white/50 text-sm leading-relaxed font-light">  
                A member-only ecosystem where privacy is the ultimate luxury and every detail is managed with surgical precision.  
              </p>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* 3. FEATURED PROPERTIES (Dossiers) */}  
      <section className="py-32 px-8 max-w-7xl mx-auto">  
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">  
          <div className="space-y-4">  
            <h2 className="text-5xl md:text-7xl font-serif italic text-white leading-none">The Archive</h2>  
            <div className="flex items-center gap-4">  
              <div className="h-[1px] w-12 bg-[#C5A059]" />  
              <p className="text-[10px] text-[#C5A059] font-mono tracking-[0.4em] uppercase">Select Property Dossiers</p>  
            </div>  
          </div>  
          <Link href="/archive" className="group flex items-center gap-4 text-[10px] tracking-[0.3em] font-mono uppercase border-b border-white/10 pb-2 hover:border-[#C5A059] transition-all">  
            Enter Full Ledger  
            <span className="group-hover:translate-x-1 transition-transform">→</span>  
          </Link>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">  
          {featuredProperties.map((prop) => (  
            <Link key={prop.id} href={`/archive/property/${prop.id}`} className="group block">  
              <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-[#111]">  
                <Image   
                  src={prop.image}   
                  alt={prop.name}  
                  fill  
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"  
                />  
                <div className="absolute inset-0 bg-[#0A0A0A]/20 group-hover:bg-transparent transition-colors duration-700" />  
              </div>  
              <div className="flex justify-between items-start">  
                <div className="space-y-1">  
                  <h3 className="text-[#C5A059] font-serif italic text-2xl group-hover:text-white transition-colors">  
                    {prop.name}  
                  </h3>  
                  <p className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase">  
                    {prop.location}  
                  </p>  
                </div>  
                <span className="text-[9px] font-mono text-white/20 border border-white/10 px-2 py-1 rounded-sm uppercase tracking-tighter group-hover:border-[#C5A059]/40 group-hover:text-[#C5A059] transition-all">  
                  Ref: {prop.id}  
                </span>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* 4. CALL TO ACTION / PERSPECTIVE */}  
      <section className="py-40 px-8 text-center bg-gradient-to-b from-transparent to-[#0D0D0D]">  
        <div className="max-w-2xl mx-auto space-y-12">  
          <h2 className="text-4xl md:text-5xl font-serif italic leading-snug">  
            Curated for the selective traveler who values the unreachable.  
          </h2>  
          <Link   
            href="/invitation"  
            className="inline-block bg-[#C5A059] text-[#0A0A0A] px-12 py-5 text-[10px] tracking-[0.4em] font-mono uppercase hover:bg-white transition-colors"  
          >  
            Request Invitation  
          </Link>  
        </div>  
      </section>

      {/* FOOTER */}  
      <footer className="py-20 border-t border-white/5 text-center px-8">  
        <div className="flex flex-col items-center gap-8">  
          <p className="text-[11px] text-[#C5A059] font-serif italic tracking-wider">NexVoyage Collective</p>  
          <p className="text-[9px] text-white/20 tracking-[0.5em] font-mono uppercase max-w-xs leading-loose">  
            Private · By Introduction · Established 2024 <br/> All Rights Reserved  
          </p>  
        </div>  
      </footer>  
    </main>  
  )  
}  
