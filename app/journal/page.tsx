'use client'

import React from 'react'  
import Link from 'next/link'  
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

export default function JournalPage() {  
return (  
  <main className={`min-h-screen bg-[#050505] text-[#E5E5E5] selection:bg-[#C5A059]/30 ${cormorant.variable} ${inter.variable} font-sans`}>  
    {/* Header Section */}  
    <header className="pt-24 pb-16 px-6 border-b border-[#C5A059]/10">  
      <div className="max-w-7xl mx-auto space-y-4">  
        <div className="flex items-center space-x-4">  
          <span className="text-[#C5A059] text-xs tracking-[0.4em] uppercase">Volume 01 // The Master Ledger</span>  
          <div className="h-px w-12 bg-[#C5A059]/30" />  
        </div>  
        <h1 className="text-6xl md:text-8xl font-serif text-[#C5A059] leading-tight">  
          The Journal  
        </h1>  
        <p className="max-w-xl text-sm font-serif italic opacity-60 leading-relaxed">  
          "To travel is to possess the world, one curated moment at a time. This is our private record of the exceptional."  
        </p>  
      </div>  
    </header>

    {/* Grid Section */}  
    <section className="max-w-7xl mx-auto px-6 py-20">  
      {/* Container is now pure Ink Black with Brass borders */}  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C5A059]/20 border border-[#C5A059]/20">  
        {DESTINATIONS_DATA.map((item) => {  
          const slug = item.location.toLowerCase().replace(/\s+/g, '-')  
            
          return (  
            <Link   
              key={item.id}  
              href={`/journal/${slug}`}  
              className="group relative aspect-[4/5] bg-[#0A0A0A] overflow-hidden flex flex-col justify-end p-8 transition-colors duration-500 hover:bg-[#0D0D0D]"  
            >  
              {/* Background Image - Hover Reveal */}  
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">  
                <img    
                  src={item.heroImage}    
                  alt={item.location}    
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"   
                />    
              </div>

              {/* Gradient Overlay to ensure text readability */}  
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

              <div className="relative z-10 space-y-4">  
                <div className="space-y-1">  
                  <span className="text-[#C5A059] text-[10px] tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">  
                    {item.coordinates}  
                  </span>  
                  <h2 className="text-3xl font-serif text-white group-hover:text-[#C5A059] transition-colors duration-500">  
                    {item.location}  
                  </h2>  
                </div>  
                  
                <p className="text-xs font-serif leading-relaxed opacity-40 group-hover:opacity-70 line-clamp-2 transition-opacity">  
                  {item.summary}  
                </p>

                <div className="pt-4 border-t border-[#C5A059]/10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">  
                  <span className="text-[#C5A059] text-[9px] tracking-[0.4em] uppercase">Read Narrative →</span>  
                </div>  
              </div>  
            </Link>  
          )  
        })}  
      </div>  
    </section>

    {/* Footer Navigation */}  
    <footer className="py-20 px-6 border-t border-[#C5A059]/10">  
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">  
        <div className="text-[10px] tracking-[0.5em] uppercase opacity-30">  
          End of Ledger // Page 01 of 27  
        </div>  
        <Link href="/invitation" className="group flex items-center space-x-6">  
          <span className="text-[#C5A059] text-xs tracking-[0.3em] uppercase">Secure Your Membership</span>  
          <div className="w-12 h-px bg-[#C5A059] group-hover:w-20 transition-all duration-500" />  
        </Link>  
      </div>  
    </footer>  
  </main>  
)  
}  
