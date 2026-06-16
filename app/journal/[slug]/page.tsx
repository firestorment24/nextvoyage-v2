'use client'

import React from 'react'  
import Link from 'next/link'  
import { notFound } from 'next/navigation'  
import { DESTINATIONS_DATA } from '@/lib/journal-data'

export default function JournalDetailPage({ params }: { params: { slug: string } }) {  
  const destination = DESTINATIONS_DATA.find(  
    (d) => d.location.toLowerCase().split(' ').join('-') === params.slug  
  )

  if (!destination) {  
    notFound()  
  }

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-[#FCFAF7] font-serif selection:bg-[#C5A059]/30 pb-20">  
      <style dangerouslySetInnerHTML={{ __html: `  
        h1, h2, h3, h4, p, span, div, section {   
          background-color: transparent !important;   
          background: transparent !important;  
        }  
        body { background-color: #0A0A0A !important; }  
      `}} />

      <div className="relative h-[80vh] w-full overflow-hidden">  
        <img   
          src={destination.heroImage}   
          alt={destination.location}  
          className="w-full h-full object-cover scale-105"  
        />  
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0A0A0A]" />  
          
        <div className="absolute bottom-12 left-8 md:left-16 flex flex-col gap-4 bg-transparent">  
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#C5A059] opacity-80 bg-transparent">  
            {destination.coordinates}  
          </span>  
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter text-[#C5A059] bg-transparent">  
            {destination.location}  
          </h1>  
          <p className="text-xl md:text-2xl font-light italic max-w-2xl text-[#FCFAF7]/90 bg-transparent">  
            {destination.orchestration}  
          </p>  
        </div>  
      </div>

      <div className="max-w-4xl mx-auto px-8 py-20 bg-transparent">  
        <div className="flex flex-col gap-12 bg-transparent">  
          <div className="flex items-center gap-6 bg-transparent">  
            <div className="h-[1px] w-12 bg-[#C5A059]/40" />  
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] bg-transparent">The Intelligence</span>  
          </div>  
            
          <p className="text-2xl md:text-3xl leading-relaxed font-light text-[#FCFAF7]/80 bg-transparent">  
            {destination.summary}  
          </p>  
        </div>  
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-20 border-t border-[#C5A059]/10 flex justify-between items-center bg-transparent">  
        <Link href="/journal" className="text-[10px] tracking-[0.4em] uppercase text-[#C5A059] hover:opacity-50 transition-opacity bg-transparent">  
          ← Return to Ledger  
        </Link>  
        <Link href="/concierge" className="text-[10px] tracking-[0.4em] uppercase text-[#C5A059] hover:opacity-50 transition-opacity bg-transparent">  
          Enquire for Access →  
        </Link>  
      </div>  
    </main>  
  )  
}  
