'use client'

import React from 'react'  
import Link from 'next/link'  
import { notFound } from 'next/navigation'  
import { DESTINATIONS_DATA } from '@/lib/journal-data'

export default function JournalDetailPage({ params }: { params: { slug: string } }) {  
  // Match the logic from the index page  
  const destination = DESTINATIONS_DATA.find(  
    (d) => d.location.toLowerCase().replace(/[\s()]/g, '-').replace(/-+/g, '-') === params.slug  
  )

  if (!destination) notFound()

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-[#FCFAF7] font-serif selection:bg-[#C5A059]/30 pb-20">  
      <style dangerouslySetInnerHTML={{ __html: `  
        h1, h2, h3, h4, p, span, div, section { background-color: transparent !important; }  
        body { background-color: #0A0A0A !important; }  
      `}} />

      <div className="relative h-[70vh] w-full overflow-hidden">  
        <img src={destination.heroImage} alt={destination.location} className="w-full h-full object-cover" />  
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#0A0A0A]" />  
          
        <div className="absolute bottom-12 left-8 md:left-16 flex flex-col gap-4">  
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#C5A059]">{destination.coordinates}</span>  
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter text-[#C5A059]">{destination.location}</h1>  
          <p className="text-xl md:text-2xl font-light italic text-[#FCFAF7]/90">{destination.orchestration}</p>  
        </div>  
      </div>

      <div className="max-w-4xl mx-auto px-8 py-20">  
        <p className="text-2xl md:text-3xl leading-relaxed font-light text-[#FCFAF7]/80">{destination.summary}</p>  
          
        <div className="mt-20 pt-10 border-t border-[#C5A059]/20 flex justify-between">  
          <Link href="/journal" className="text-[10px] tracking-widest uppercase text-[#C5A059] hover:opacity-50">← Ledger</Link>  
          <Link href="/concierge" className="text-[10px] tracking-widest uppercase text-[#C5A059] hover:opacity-50">Enquire →</Link>  
        </div>  
      </div>  
    </main>  
  )  
}  
