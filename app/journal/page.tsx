'use client'

import React from 'react'  
import Link from 'next/link'  
import { DESTINATIONS_DATA } from '@/lib/journal-data'

export default function JournalPage() {  
  // Synchronized slug generator  
  const getSlug = (loc: string) => loc.toLowerCase().replace(/[\s()]/g, '-').replace(/-+/g, '-')

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-[#C5A059] font-serif selection:bg-[#C5A059]/30">  
      <style dangerouslySetInnerHTML={{ __html: `  
        h1, h2, h3, h4, p, span, div, section { background-color: transparent !important; }  
        body { background-color: #0A0A0A !important; }  
      `}} />

      <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto border-b border-[#C5A059]/20">  
        <div className="flex flex-col gap-4">  
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-60">Volume 01 // The Master Ledger</span>  
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-none">The Journal</h1>  
          <p className="text-lg md:text-xl opacity-80 max-w-2xl italic font-light mt-4">  
            "The world is a ledger of experiences; we simply help you curate the entries."  
          </p>  
        </div>  
      </div>

      <section className="max-w-7xl mx-auto px-8 py-20">  
        <div className="flex flex-col">  
          {DESTINATIONS_DATA.map((item) => (  
            <Link   
              key={item.location}  
              href={`/journal/${getSlug(item.location)}`}  
              className="group border-b border-[#C5A059]/10 py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 transition-all hover:bg-[#C5A059]/5 px-4 -mx-4"  
            >  
              <div className="flex flex-col gap-2 max-w-xl">  
                <span className="text-[10px] tracking-widest opacity-50 uppercase">{item.coordinates}</span>  
                <h2 className="text-3xl md:text-4xl font-light group-hover:translate-x-2 transition-transform duration-500">  
                  {item.location}  
                </h2>  
                <h3 className="text-sm uppercase tracking-[0.2em] opacity-60">{item.orchestration}</h3>  
                <p className="text-sm opacity-40 leading-relaxed line-clamp-2 mt-2">{item.summary}</p>  
              </div>

              <div className="relative w-full md:w-64 h-40 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-[#C5A059]/20">  
                <img src={item.heroImage} alt={item.location} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>  
    </main>  
  )  
}  
