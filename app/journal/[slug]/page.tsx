"use client";

import React, { use } from 'react';  
import Link from 'next/link';  
import { notFound } from 'next/navigation';  
import { DESTINATIONS_DATA } from '@/lib/journal-data';

const getSlug = (name: string) => {  
  return name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');  
};

export default function JournalDetailPage({ params }: { params: Promise<{ slug: string }> }) {  
  const { slug } = use(params);  
    
  // Robust lookup: check both location slug and id  
  const destination = DESTINATIONS_DATA.find(  
    (d) => getSlug(d.location) === slug || d.id === slug  
  );

  if (!destination) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-[#050505] text-[#E5E5E5] selection:bg-zinc-800 selection:text-white relative">  
      {/* Heavy-Duty Style Override to kill white backgrounds */}  
      <style dangerouslySetInnerHTML={{ __html: `  
        html, body, #__next, main {   
          background-color: #050505 !important;   
          background-image: none !important;   
        }  
        h1, h2, h3, h4, h5, h6, span, div, section, header, footer {   
          background-color: transparent !important;   
          background-image: none !important;  
          box-shadow: none !important;  
        }  
        [class*="parchment"], .bg-white, .bg-parchment {   
          background: #050505 !important;   
          background-image: none !important;   
        }  
        h1, h2, h3 { color: #E5E5E5 !important; }  
      ` }} />

      {/* Hero Section */}  
      <section className="relative h-[70vh] w-full overflow-hidden">  
        <div className="absolute inset-0 grayscale-0 hover:grayscale transition-all duration-1000 ease-in-out group">  
          <img   
            src={destination.heroImage}   
            alt={destination.location}  
            className="w-full h-full object-cover scale-105"  
          />  
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />  
        </div>  
          
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-7xl mx-auto">  
          <div className="space-y-4">  
            <p className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase">  
              {destination.coordinates} // Field Report No. {destination.id}  
            </p>  
            <h1 className="text-5xl md:text-8xl font-serif tracking-tighter leading-none italic m-0">  
              {destination.location}  
            </h1>  
          </div>  
        </div>  
      </section>

      {/* Content Section */}  
      <section className="px-6 md:px-12 max-w-4xl mx-auto py-24 space-y-16">  
        <div className="space-y-8">  
          <p className="text-xl md:text-2xl font-serif leading-relaxed italic text-zinc-300">  
            {destination.summary}  
          </p>  
          <div className="h-px w-24 bg-zinc-800" />  
        </div>

        {/* Tactical Intel / Details */}  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-light text-zinc-400 leading-relaxed">  
          <div className="space-y-4">  
            <h3 className="font-mono text-[10px] tracking-[0.2em] text-zinc-600 uppercase">The Sanctuary</h3>  
            <p className="text-sm">{destination.sanctuary}</p>  
          </div>  
          <div className="space-y-4">  
            <h3 className="font-mono text-[10px] tracking-[0.2em] text-zinc-600 uppercase">The Orchestration</h3>  
            <p className="text-sm">{destination.orchestration}</p>  
          </div>  
        </div>  
      </section>

      {/* Back Navigation */}  
      <footer className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900/50 flex justify-between items-center text-[10px] font-mono tracking-[0.3em] text-zinc-500 uppercase">  
        <Link href="/journal" className="hover:text-white transition-colors">  
          &lt;— Back to Ledger  
        </Link>  
        <Link href="/invitation" className="hover:text-white transition-colors">  
          Request Briefing  
        </Link>  
      </footer>  
    </main>  
  );  
}  
