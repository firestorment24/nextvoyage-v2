import React from 'react';  
import Link from 'next/link';  
import { DESTINATIONS_DATA, Destination } from '@/lib/journal-data';

const getSlug = (name: string) => {  
  return name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');  
};

export default function JournalPage() {  
  return (  
    <main className="min-h-screen bg-[#050505] text-[#E5E5E5] selection:bg-zinc-800 selection:text-white relative">  
      {/* Heavy-Duty Style Override */}  
      <style dangerouslySetInnerHTML={{ __html: `  
        /* Kill all global backgrounds on this page */  
        html, body, #__next, main {   
          background-color: #050505 !important;   
          background-image: none !important;   
        }  
          
        /* Specifically target headings and common containers */  
        h1, h2, h3, h4, h5, h6, span, div, section, header, footer {   
          background-color: transparent !important;   
          background-image: none !important;  
          box-shadow: none !important;  
        }

        /* Force override for anything tagged with parchment */  
        [class*="parchment"], .bg-white, .bg-parchment {   
          background: #050505 !important;   
          background-image: none !important;   
        }

        /* Ensure text remains visible against the dark void */  
        h1, h2, h3 { color: #E5E5E5 !important; }  
      ` }} />

      {/* Header */}  
      <header className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-zinc-900/50 z-10">  
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">  
          <div>  
            <p className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase mb-4">  
              Volume 01 // The Master Ledger  
            </p>  
            <h1 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none italic m-0">  
              The Journal  
            </h1>  
          </div>  
          <div className="max-w-xs">  
            <p className="text-sm text-zinc-400 leading-relaxed font-light italic">  
              "Tactical intelligence and seasonal reports from the NexVoyage Collective."  
            </p>  
          </div>  
        </div>  
      </header>

      {/* Magazine Grid */}  
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto py-24 z-10">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">  
          {(DESTINATIONS_DATA as Destination[]).map((item) => (  
            <Link   
              key={item.id}   
              href={`/journal/${getSlug(item.location)}`}  
              className="group block space-y-6"  
            >  
              {/* Image Container */}  
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">  
                <img   
                  src={item.heroImage}   
                  alt={item.location}  
                  className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000"  
                />  
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />  
                  
                {/* Meta Overlay */}  
                <div className="absolute top-4 right-4 mix-blend-difference">  
                  <p className="font-mono text-[9px] tracking-widest uppercase text-white/70">  
                    {item.coordinates}  
                  </p>  
                </div>  
              </div>

              {/* Text Content */}  
              <div className="space-y-4">  
                <div className="space-y-1">  
                  <h2 className="text-2xl font-serif group-hover:italic transition-all duration-300 m-0">  
                    {item.location}  
                  </h2>  
                  <p className="font-mono text-[9px] tracking-[0.2em] text-zinc-500 uppercase">  
                    Field Report No. {item.id}  
                  </p>  
                </div>  
                  
                <p className="text-sm text-zinc-400 leading-relaxed font-light line-clamp-3">  
                  {item.summary}  
                </p>

                {/* Footer Meta */}  
                <div className="pt-4 border-t border-zinc-900 flex justify-between items-center text-[9px] font-mono tracking-widest uppercase text-zinc-600">  
                  <span>Sanctuary // {item.sanctuary}</span>  
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">View Archive —&gt;</span>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Footer Navigation */}  
      <footer className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900/50 flex justify-between items-center text-[10px] font-mono tracking-[0.3em] text-zinc-500 uppercase z-10">  
        <div>End of Ledger // Page 01 of 27</div>  
        <Link href="/invitation" className="hover:text-white transition-colors underline decoration-zinc-800 underline-offset-8">  
          Request Access  
        </Link>  
      </footer>  
    </main>  
  );  
}  
