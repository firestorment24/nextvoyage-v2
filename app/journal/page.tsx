'use client';

import React from 'react';  
import Link from 'next/link';  
import { DESTINATIONS_DATA } from '@/lib/journal-data';  
import { MapPin, ArrowRight } from 'lucide-react';

export default function JournalPage() {  
return (  
  <div className="min-h-screen bg-[#050505] text-[#E5E5E5] font-sans selection:bg-[#D4AF37] selection:text-black">  
    <header className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-[#1A1A1A]">  
      <div className="space-y-4">  
        <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold">  
          Volume 01 // The Master Ledger  
        </p>  
        <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter">  
          The Journal  
        </h1>  
        <p className="max-w-2xl text-[#A0A0A0] font-serif italic text-xl leading-relaxed">  
          "A curated collection of global sanctuaries and private orchestrations, documented for the modern voyager."  
        </p>  
      </div>  
    </header>

    <main className="py-20 px-6 max-w-7xl mx-auto">  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A] border border-[#1A1A1A]">  
        {DESTINATIONS_DATA.map((dest) => (  
          <Link   
            key={dest.id}  
            href={`/journal/${dest.id}`}  
            className="group relative bg-[#050505] overflow-hidden aspect-[4/5] flex flex-col justify-end p-8 transition-all duration-700 hover:bg-black z-10"  
          >  
            {/* Background Image */}  
            <div className="absolute inset-0 z-0 pointer-events-none">  
              <img   
                src={dest.heroImage}   
                alt={dest.title}  
                className="w-full h-full object-cover opacity-30 grayscale group-hover:opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"  
              />  
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />  
            </div>

            {/* Fore-ground Content */}  
            <div className="relative z-20 space-y-4 pointer-events-none">  
              <div className="flex items-center gap-2 text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold">  
                <MapPin className="w-3 h-3" />  
                {dest.coordinates}  
              </div>  
                
              <div>  
                <h2 className="text-3xl font-serif font-bold group-hover:text-[#D4AF37] transition-colors duration-500">  
                  {dest.title}  
                </h2>  
                <p className="text-[#A0A0A0] text-xs uppercase tracking-widest mt-1">  
                  {dest.subtitle}  
                </p>  
              </div>

              <p className="text-sm text-[#888] leading-relaxed line-clamp-2 font-serif italic">  
                {dest.summary}  
              </p>

              <div className="pt-4 flex items-center gap-2 text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">  
                Read Narrative <ArrowRight className="w-3 h-3" />  
              </div>  
            </div>  
          </Link>  
        ))}  
      </div>  
    </main>

    <section className="py-32 px-6 text-center border-t border-[#1A1A1A]">  
      <p className="text-[#D4AF37] font-serif italic text-2xl max-w-2xl mx-auto">  
        "The world is a ledger of experiences; we simply help you curate the entries."  
      </p>  
    </section>  
  </div>  
);  
}  
