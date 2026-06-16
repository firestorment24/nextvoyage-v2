'use client'

import React from 'react'  
import Link from 'next/link'  
import { useParams } from 'next/navigation'  
import { DESTINATIONS_DATA } from '@/lib/journal-data'  
import { Cormorant_Garamond, Inter } from 'next/font/google'

const cormorant = Cormorant_Garamond({   
  subsets: ['latin'],   
  weight: ['300', '400', '600'],  
  variable: '--font-cormorant'  
})

const inter = Inter({   
  subsets: ['latin'],  
  variable: '--font-inter'  
})

export default function JournalDetailPage() {  
  const params = useParams()  
  const slug = params?.slug as string  
    
  const destination = DESTINATIONS_DATA.find(d =>   
    d.location.toLowerCase().replace(/\s+/g, '-') === slug  
  )

  if (!destination) {  
    return (  
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-[#C5A059]">  
        <div className="text-center space-y-4">  
          <h1 className="text-2xl font-serif">Entry Not Found</h1>  
          <Link href="/journal" className="text-sm uppercase tracking-widest hover:opacity-70">  
            Return to Hub  
          </Link>  
        </div>  
      </div>  
    )  
  }

  return (  
    <main className={`min-h-screen bg-[#0A0A0A] text-[#E5E5E5] selection:bg-[#C5A059]/30 ${cormorant.variable} ${inter.variable} font-sans`}>  
      {/* Header / Hero */}  
      <section className="relative h-[70vh] w-full overflow-hidden border-b border-[#C5A059]/20">  
        <img   
          src={destination.heroImage || "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80"}   
          alt={destination.location}  
          className="w-full h-full object-cover opacity-60 grayscale-[0.3]"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />  
          
        <div className="absolute bottom-12 left-0 w-full px-6 md:px-12">  
          <div className="max-w-7xl mx-auto space-y-4">  
            <div className="flex items-center space-x-4">  
              <span className="text-[#C5A059] text-xs tracking-[0.3em] uppercase">  
                {destination.coordinates || "Coordinates Classified"}  
              </span>  
              <div className="h-px w-12 bg-[#C5A059]/40" />  
            </div>  
            <h1 className="text-5xl md:text-7xl font-serif text-[#C5A059] leading-tight">  
              {destination.location}  
            </h1>  
          </div>  
        </div>  
      </section>

      {/* Content Ledger */}  
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">  
          {/* Left Column: Summary */}  
          <div className="lg:col-span-7 space-y-12">  
            <div className="space-y-6">  
              <h2 className="text-[#C5A059] text-xs tracking-[0.4em] uppercase">  
                The Brief  
              </h2>  
              <p className="text-xl md:text-2xl font-serif leading-relaxed text-white/90">  
                {destination.summary}  
              </p>  
            </div>  
          </div>

          {/* Right Column: Specs */}  
          <div className="lg:col-span-5 space-y-12 border-l border-[#C5A059]/10 pl-8 md:pl-12">  
            <div className="space-y-8">  
              <div className="space-y-3">  
                <h3 className="text-[#C5A059] text-[10px] tracking-[0.5em] uppercase opacity-50">  
                  The Sanctuary  
                </h3>  
                <p className="text-sm font-serif leading-relaxed opacity-80">  
                  {destination.sanctuary || "Details held in the private ledger."}  
                </p>  
              </div>

              <div className="space-y-3">  
                <h3 className="text-[#C5A059] text-[10px] tracking-[0.5em] uppercase opacity-50">  
                  The Orchestration  
                </h3>  
                <p className="text-sm font-serif leading-relaxed opacity-80">  
                  {destination.orchestration || "Logistics curated upon request."}  
                </p>  
              </div>  
            </div>

            <div className="pt-8">  
              <Link   
                href="/journal"  
                className="group inline-flex items-center space-x-4 text-[#C5A059] text-xs tracking-[0.3em] uppercase"  
              >  
                <span>Return to Hub</span>  
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>  
              </Link>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Footer Branding */}  
      <footer className="py-12 border-t border-[#C5A059]/10 text-center">  
        <div className="text-[#C5A059]/20 font-serif italic text-sm tracking-widest">  
          NexVoyage Collective — Private Ledger  
        </div>  
      </footer>  
    </main>  
  )  
}  
