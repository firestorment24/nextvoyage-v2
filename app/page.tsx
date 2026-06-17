"use client"

import React, { useEffect, useState } from 'react'  
import Link from 'next/link'

export default function HomePage() {  
const [mounted, setMounted] = useState(false)

useEffect(() => {  
  setMounted(true)  
}, [])

const properties = [  
  { id: 'one-and-only-aesthesis', name: 'One&Only Aesthesis', loc: 'Athens Riviera', img: 'https://cdn.marblism.com/grid-1.webp' },  
  { id: 'aman-venice', name: 'Aman Venice', loc: 'Venice, Italy', img: 'https://cdn.marblism.com/grid-2.webp' },  
  { id: 'royal-mansour', name: 'Royal Mansour', loc: 'Marrakech, Morocco', img: 'https://cdn.marblism.com/grid-3.webp' },  
]

return (  
  <main className="min-h-screen bg-black text-white selection:bg-[#C5A059]/40 selection:text-white">  
    {/*   
        GLOBAL RESET: WHITE FONTS ON BLACK VOID  
        Forces all typography to white while keeping subtle brass accents on lines.  
    */}  
    <style jsx global>{`  
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400&display=swap');  
        
      body, html {   
        background-color: #000000 !important;   
        margin: 0;   
        padding: 0;  
      }

      h1, h2, h3, h4, p, span, a, label {   
        color: #FFFFFF !important;   
        font-family: inherit;  
      }

      h1, h2, h3, h4 { font-family: 'Cormorant Garamond', serif; }  
      p, span, a, label { font-family: 'Inter', sans-serif; }

      .bg-white, .bg-slate-50, .bg-[#FCFAF7] {   
        background-color: transparent !important;   
        background: none !important;  
      }  
        
      /* Subtle Brass Scrollbar */  
      ::-webkit-scrollbar { width: 4px; }  
      ::-webkit-scrollbar-track { background: #000; }  
      ::-webkit-scrollbar-thumb { background: #C5A059; }  
    `}</style>

    {/* 1. CINEMATIC HERO: THE SOVEREIGN ARRIVAL */}  
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">  
      <div className={`absolute inset-0 transition-transform duration-[20000ms] ease-out ${mounted ? 'scale-110' : 'scale-100'}`}>  
        <img   
          src="https://cdn.marblism.com/8cCycGyYogj.webp"   
          alt="The Sovereign Arrival"   
          className="h-full w-full object-cover opacity-60 grayscale-[20%]"  
        />  
      </div>  
        
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

      <div className="relative z-10 text-center px-4">  
        <span className="text-[10px] uppercase tracking-[0.8em] opacity-80 mb-6 block">Established 2026</span>  
        <h1 className="text-7xl md:text-[10rem] font-light tracking-tighter leading-[0.8] mb-4 text-white">  
          THE SOVEREIGN <br />  
          <span className="italic">ARRIVAL</span>  
        </h1>  
        {/* Brass accent line preserved for the "vibe" */}  
        <div className="mt-12 h-20 w-[1px] bg-[#C5A059]/40 mx-auto" />  
      </div>  
    </section>

    {/* 2. THE EDITORIAL GRID: STAGGERED LAYOUT */}  
    <section className="py-40 px-6 md:px-20 bg-black">  
      <div className="max-w-7xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-y-0">  
          {properties.map((property, idx) => (  
            <div   
              key={property.id}  
              className={`md:col-span-6 flex flex-col ${  
                idx === 1 ? 'md:mt-64 md:col-start-7' :   
                idx === 2 ? 'md:-mt-32 md:col-span-5 md:col-start-2' : ''  
              }`}  
            >  
              <Link href={`/archive/property/${property.id}`} className="group block">  
                <div className="relative aspect-[4/5] overflow-hidden border border-[#C5A059]/10 bg-[#050505]">  
                  <img   
                    src={property.img}   
                    alt={property.name}  
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"  
                  />  
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-700" />  
                </div>  
                <div className="mt-10">  
                  <span className="text-[9px] uppercase tracking-[0.4em] opacity-60">Property // {property.loc}</span>  
                  <h3 className="text-4xl md:text-5xl font-light mt-2 group-hover:italic transition-all text-white">  
                    {property.name}  
                  </h3>  
                </div>  
              </Link>  
            </div>  
          ))}  
        </div>  
      </div>  
    </section>

    {/* 3. THE COLLECTIVE SERVICES OVERVIEW */}  
    <section className="py-40 px-6 border-t border-[#C5A059]/10 bg-[#020202]">  
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">  
        <div>  
          <h2 className="text-3xl md:text-4xl italic font-light text-white">Architecting <br /> Legacy.</h2>  
        </div>  
        <div className="space-y-6">  
          <p className="text-sm leading-relaxed opacity-90 text-white">  
            NexVoyage Collective is the engine for high-net-worth travelers who view discovery as a legacy pursuit. We manage the intersection of editorial curiosity and logistical perfection.  
          </p>  
          <Link   
            href="/archive"   
            className="inline-block text-[10px] uppercase tracking-[0.6em] border-b border-[#C5A059]/40 pb-2 hover:border-white transition-all text-white"  
          >  
            The Full Portfolio  
          </Link>  
        </div>  
      </div>  
    </section>

    {/* 4. FINAL JOURNEY FOOTER */}  
    <section className="py-64 text-center bg-black relative overflow-hidden">  
      <div className="absolute inset-0 opacity-10 pointer-events-none">  
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_#C5A059_0%,_transparent_70%)] opacity-5" />  
      </div>  
      <h2 className="text-[11px] uppercase tracking-[1em] mb-12 opacity-60">Begin the Discovery</h2>  
      <Link   
        href="/archive"  
        className="text-5xl md:text-8xl font-light hover:italic transition-all duration-700 text-white"  
      >  
        THE ARCHIVE  
      </Link>  
    </section>  
  </main>  
)  
}  
