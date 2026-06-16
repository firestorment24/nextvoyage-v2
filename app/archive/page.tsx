import React from 'react';  
import Link from 'next/link';  
import { PROPERTY_DATA } from '@/lib/data/sanctuaries';

export default function ArchivePage() {  
return (  
  <div className="min-h-screen bg-[#1C1C1C] text-[#FCFAF7] selection:bg-[#C5A059] selection:text-[#1C1C1C]">  
    <style>  
      {`  
        /* Local override for global header backgrounds */  
        h1, h2, h3, h4 {  
          background-color: transparent !important;  
          color: #C5A059 !important;  
        }  
          
        body {  
          background-color: #1C1C1C !important;  
        }  
      `}  
    </style>

    <main className="max-w-7xl mx-auto px-6 py-24">  
      <header className="mb-24 border-b border-[#C5A059]/20 pb-16 text-center">  
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6 italic">  
          The Sanctuary Archive  
        </h1>  
        <p className="text-xs uppercase tracking-[0.6em] text-[#C5A059]/80">  
          A Legacy of Exceptional Journeys  
        </p>  
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">  
        {PROPERTY_DATA.map((property) => (  
          <Link   
            key={property.id}   
            href={`/archive/property/${property.id}`}  
            className="group block"  
          >  
            <div className="relative aspect-[4/5] bg-neutral-900 mb-8 overflow-hidden border border-[#C5A059]/10 transition-all duration-700 group-hover:border-[#C5A059]/40">  
              {property.image ? (  
                <img   
                  src={property.image}   
                  alt={property.name}  
                  className="w-full h-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"  
                />  
              ) : (  
                <div className="w-full h-full flex items-center justify-center text-[#C5A059]/20 italic text-sm tracking-widest">  
                  Vaulted Imagery  
                </div>  
              )}  
                
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">  
                <span className="text-[10px] uppercase tracking-[0.4em] border border-[#C5A059]/60 px-4 py-2 bg-[#1C1C1C]/80">  
                  View Dossier  
                </span>  
              </div>  
            </div>

            <div className="space-y-3">  
              <div className="flex justify-between items-end border-b border-[#C5A059]/10 pb-2">  
                <h2 className="text-xl font-light tracking-tight">{property.name}</h2>  
                <span className="text-[9px] uppercase tracking-widest text-[#C5A059]/60 mb-1">  
                  {property.location}  
                </span>  
              </div>  
              <p className="text-xs text-[#FCFAF7]/50 leading-relaxed line-clamp-3 font-light italic">  
                {property.description}  
              </p>  
            </div>  
          </Link>  
        ))}  
      </section>

      <footer className="mt-40 pt-16 border-t border-[#C5A059]/10 flex flex-col md:flex-row justify-between items-center gap-8">  
        <div className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059]/40">  
          NexVoyage Collective &copy; 2026  
        </div>  
        <div className="text-[9px] italic text-[#FCFAF7]/30 max-w-xs text-right">  
          Access to archived sanctuaries is restricted to established members and legacy travelers.  
        </div>  
      </footer>  
    </main>  
  </div>  
);  
}  
