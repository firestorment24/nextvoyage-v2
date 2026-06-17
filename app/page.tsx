import React from 'react';  
import Link from 'next/link';  
import Navigation from '@/components/Navigation';  
import { SANCTUARIES_DATA } from '@/lib/data/sanctuaries';

export default function HomePage() {  
  // We'll take the first 9 properties for the "Elite Ledger" 3x3 grid  
  const featuredProperties = SANCTUARIES_DATA.slice(0, 9);

  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#D4AF37] selection:text-black">  
      {/* Nuclear CSS Overrides for Brass & Shadow Aesthetic */}  
      <style dangerouslySetInnerHTML={{ __html: `  
        h1 { color: #D4AF37 ! agriculture; font-weight: 300; }  
        h2 { color: #ffffff !important; }  
        .property-card:hover .property-image { filter: grayscale(0%); }  
        .property-image { filter: grayscale(100%); transition: filter 0.6s cubic-bezier(0.4, 0, 0.2, 1); }  
      `}} />

      <Navigation />

      {/* Hero Section */}  
      <section className="pt-32 pb-20 px-6 text-center">  
        <h1 className="text-5xl md:text-7xl mb-6 tracking-tighter uppercase italic">  
          The Elite Ledger  
        </h1>  
        <p className="text-zinc-500 max-w-2xl mx-auto uppercase tracking-widest text-xs">  
          A curated collection of the world's most clandestine sanctuaries.  
        </p>  
      </section>

      {/* 3x3 Elite Ledger Grid */}  
      <section className="max-w-7xl mx-auto px-6 pb-32">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800/30 border border-zinc-800/30">  
          {featuredProperties.map((property) => (  
            <Link   
              key={property.id}   
              href={`/archive/${property.id}`}  
              className="property-card group relative bg-[#0a0a0a] p-8 border border-zinc-800/30 transition-all duration-500 hover:border-[#D4AF37]/50"  
            >  
              <div className="aspect-[4/5] overflow-hidden mb-8 bg-zinc-900">  
                <img   
                  src={property.image}   
                  alt={property.name}  
                  className="property-image w-full h-full object-cover"  
                />  
              </div>  
                
              <div className="flex justify-between items-start mb-2">  
                <span className="text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase">  
                  {property.id}  
                </span>  
                <span className="text-[10px] tracking-[0.2em] text-zinc-600 uppercase">  
                  {property.location}  
                </span>  
              </div>

              <h3 className="text-xl font-light tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">  
                {property.name}  
              </h3>  
                
              <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">  
                <span className="text-[10px] tracking-widest text-zinc-500 uppercase italic">  
                  View Dossier  
                </span>  
                <div className="h-px w-12 bg-[#D4AF37]"></div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Footer */}  
      <footer className="border-t border-zinc-900 py-12 px-6 text-center">  
        <p className="text-zinc-600 text-[10px] tracking-[0.3em] uppercase">  
          NexVoyage Collective © 2026 — All Rights Reserved  
        </p>  
      </footer>  
    </main>  
  );  
}  
