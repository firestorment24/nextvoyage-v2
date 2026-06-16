// app/journal/page.tsx  
'use client'

import React from 'react'  
import Link from 'next/link'  
import Navigation from '@/components/Navigation'  
import Footer from '@/components/Footer'  
import { DESTINATIONS_DATA } from '@/lib/journal-data'

export default function JournalPage() {  
  // Synchronized slug generator to match the detail page logic  
  const getSlug = (name: string) => {  
    return name  
      .toLowerCase()  
      .replace(/\s+/g, '-')  
      .replace(/[()]/g, '')  
      .replace(/-+/g, '-')  
  }

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-[#FCFAF7] selection:bg-[#C5A059] selection:text-[#0A0A0A] font-sans">  
      {/*   
        NUCLEAR CSS OVERRIDE   
        This kills the global parchment background on headers and ensures the   
        Brass & Shadow theme is enforced regardless of global CSS rules.  
      */}  
      <style jsx global>{`  
        h1, h2, h3, h4, h5, h6, p, span, a {  
          background-color: transparent !important;  
          background: transparent !important;  
        }  
        body {  
          background-color: #0A0A0A !important;  
        }  
        ::selection {  
          background: #C5A059 !important;  
          color: #0A0A0A !important;  
        }  
      `}</style>

      <Navigation />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">  
        {/* Header Section */}  
        <header className="mb-20 border-b border-[#C5A059]/20 pb-12">  
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">  
            <div>  
              <p className="text-[#C5A059] font-mono text-xs tracking-[0.3em] uppercase mb-4">  
                Volume 01 // The Master Ledger  
              </p>  
              <h1 className="text-5xl md:text-7xl font-serif text-[#FCFAF7] tracking-tight">  
                The Journal  
              </h1>  
            </div>  
            <div className="max-w-md">  
              <p className="text-[#C5A059]/80 font-serif italic text-lg leading-relaxed">  
                "The world is a ledger of experiences; we simply help you curate the entries."  
              </p>  
            </div>  
          </div>  
        </header>

        {/* Destination Grid */}  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">  
          {DESTINATIONS_DATA.map((item) => (  
            <Link   
              key={item.location}  
              href={`/journal/${getSlug(item.location)}`}  
              className="group block"  
            >  
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-[#1A1A1A]">  
                <img  
                  src={item.imageUrl}  
                  alt={item.location}  
                  className="object-cover w-full h-full transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-80 group-hover:opacity-100"  
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />  
                  
                {/* Coordinates Overlay */}  
                <div className="absolute bottom-4 left-4">  
                  <p className="text-[#C5A059] font-mono text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">  
                    {item.coordinates || 'COORDINATES CLASSIFIED'}  
                  </p>  
                </div>  
              </div>

              <div className="space-y-3">  
                <h2 className="text-2xl font-serif text-[#FCFAF7] group-hover:text-[#C5A059] transition-colors duration-300">  
                  {item.location}  
                </h2>  
                <p className="text-[#C5A059] font-mono text-[10px] tracking-[0.2em] uppercase">  
                  {item.orchestration}  
                </p>  
                <p className="text-[#FCFAF7]/60 font-sans text-sm leading-relaxed line-clamp-3">  
                  {item.summary}  
                </p>  
                <div className="pt-4 flex items-center gap-2 text-[#C5A059] font-mono text-[10px] tracking-widest uppercase border-t border-[#C5A059]/10 mt-4">  
                  <span>Read Narrative</span>  
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>

        {/* Footer Navigation */}  
        <footer className="mt-32 pt-12 border-t border-[#C5A059]/20 flex justify-between items-center">  
          <p className="text-[#C5A059]/40 font-mono text-[10px] tracking-widest uppercase">  
            End of Ledger // Page 01 of 01  
          </p>  
          <Link   
            href="/invitation"   
            className="text-[#C5A059] font-mono text-[10px] tracking-widest uppercase hover:text-[#FCFAF7] transition-colors"  
          >  
            Request Access —&gt;  
          </Link>  
        </footer>  
      </div>

      <Footer />  
    </main>  
  )  
}  
