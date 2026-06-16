'use client'

import React from 'react'  
import Link from 'next/link'  
import { useParams } from 'next/navigation'  
import { DESTINATIONS_DATA } from '@/lib/journal-data'

export default function JournalDetailPage() {  
  const params = useParams()  
  const slug = params?.slug as string

  const destination = DESTINATIONS_DATA.find((d) => d.id === slug)

  if (!destination) {  
    return (  
      <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">  
        <div className="text-center">  
          <h1 className="text-[#C5A059] font-serif text-2xl mb-4">Narrative Not Found</h1>  
          <Link href="/journal" className="text-[#C5A059]/60 font-mono text-xs uppercase tracking-widest hover:text-[#C5A059] transition-colors">  
            Return to Ledger  
          </Link>  
        </div>  
      </main>  
    )  
  }

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-[#C5A059] selection:bg-[#C5A059] selection:text-[#0A0A0A]">  
      {/* Hero Section */}  
      <section className="relative h-[80vh] w-full overflow-hidden border-b border-[#C5A059]/10">  
        <img  
          src={destination.heroImage || destination.imageUrl}  
          alt={destination.name}  
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"  
        />  
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]" />  
          
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-24 max-w-7xl mx-auto w-full">  
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-60 mb-6">  
            {destination.coordinates} // {destination.title}  
          </p>  
          <h1 className="text-7xl md:text-9xl font-serif lowercase tracking-tighter leading-[0.8] mb-8">  
            {destination.name}  
          </h1>  
        </div>  
      </section>

      {/* Editorial Content */}  
      <section className="px-6 py-32 max-w-4xl mx-auto">  
        <div className="space-y-24">  
          {/* Summary / Prelude */}  
          <div className="space-y-8">  
            <h2 className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">  
              The Prelude  
            </h2>  
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed opacity-90">  
              {destination.summary}  
            </p>  
          </div>

          {/* Orchestration Details */}  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-[#C5A059]/10 pt-16">  
            <div className="space-y-6">  
              <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">  
                The Sanctuary  
              </h3>  
              <p className="text-sm font-serif leading-relaxed opacity-70">  
                {destination.orchestration?.sanctuary || "Details held in the private ledger."}  
              </p>  
            </div>  
            <div className="space-y-6">  
              <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">  
                The Orchestration  
              </h3>  
              <p className="text-sm font-serif leading-relaxed opacity-70">  
                {destination.orchestration?.experience || "Curated tactical intelligence for the discerning traveler."}  
              </p>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Navigation Footer */}  
      <footer className="px-6 py-24 border-t border-[#C5A059]/10">  
        <div className="max-w-7xl mx-auto flex justify-between items-center">  
          <Link   
            href="/journal"  
            className="group flex items-center gap-4 no-underline"  
          >  
            <span className="h-[1px] w-8 bg-[#C5A059]/30 group-hover:w-16 group-hover:bg-[#C5A059] transition-all duration-700" />  
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-60">  
              Return to Ledger  
            </span>  
          </Link>  
            
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-20 hidden md:block">  
            NexVoyage Collective // Confidential  
          </p>  
        </div>  
      </footer>

      <style>  
        {`  
          body {  
            background-color: #0A0A0A !important;  
          }  
        `}  
      </style>  
    </main>  
  )  
}  
