"use client";

import React from 'react';  
import { useParams, notFound } from 'next/navigation';  
import { Cormorant_Garamond, Inter } from 'next/font/google';  
import { DESTINATIONS_DATA } from '@/lib/journal-data';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500'] });  
const inter = Inter({ subsets: ['latin'], weight: ['300', '400'] });

export default function JournalDetailPage() {  
  const params = useParams();  
  const slug = params.slug as string;  
  const data = DESTINATIONS_DATA[slug];

  if (!data) return notFound();

  return (  
    <main className={`min-h-screen bg-[#050505] text-[#E5E5E5] ${inter.className}`}>  
      {/* Hero Section */}  
      <section className="h-[70vh] relative flex items-end p-8 md:p-24 border-b border-[#D4AF37]/10 overflow-hidden">  
        <div className="max-w-4xl z-10">  
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.5em] mb-6 italic">The Journal // Destination Guide</p>  
          <h1 className={`${cormorant.className} text-6xl md:text-9xl font-light italic leading-none`}>  
            {data.title}  
          </h1>  
        </div>  
        {/* Shadow Background */}  
        <div className="absolute inset-0 bg-[#050505]/40 z-0" />  
      </section>

      {/* Editorial Content */}  
      <article className="max-w-3xl mx-auto py-24 px-8 space-y-16">  
        <div className="space-y-6">  
          <p className={`${cormorant.className} text-3xl md:text-4xl text-white/90 leading-relaxed italic`}>  
            {data.quote}  
          </p>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">  
          <div className="space-y-4">  
            <h4 className="text-[10px] uppercase tracking-widest text-[#D4AF37]">The Sanctuary Archive</h4>  
            <p className="text-sm text-white/70 leading-relaxed font-light">  
              {data.archive}  
            </p>  
          </div>  
          <div className="space-y-4">  
            <h4 className="text-[10px] uppercase tracking-widest text-[#D4AF37]">The Orchestration</h4>  
            <p className="text-sm text-white/70 leading-relaxed font-light">  
              {data.orchestration}  
            </p>  
          </div>  
        </div>

        {/* CTA */}  
        <div className="pt-24 text-center border-t border-white/5">  
          <button onClick={() => window.location.href = '/invitation'} className="group inline-block">  
             <div className="text-[10px] text-white/30 uppercase tracking-[0.4em] mb-4">Request Vetting</div>  
             <div className={`${cormorant.className} text-[#D4AF37] text-3xl italic group-hover:text-white transition-all`}>  
               Orchestrate {data.title}  
             </div>  
             <div className="h-[1px] w-12 bg-[#D4AF37]/30 mx-auto mt-4 group-hover:w-full transition-all duration-700" />  
          </button>  
        </div>  
      </article>

      {/* Navigation Footer */}  
      <footer className="p-8 border-t border-white/5 opacity-30 text-[9px] uppercase tracking-widest flex justify-between">  
        <span>NexVoyage Collective // 2026</span>  
        <span>ID: {slug.toUpperCase()}-X01</span>  
      </footer>  
    </main>  
  );  
}  
