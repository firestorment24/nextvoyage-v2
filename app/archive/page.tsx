"use client";

import { SANCTUARIES } from "@/lib/data/sanctuaries";  
import Link from "next/link";

export default function ArchivePage() {  
  return (  
    // Added pt-24 to push the content below the fixed header  
    <main className="min-h-screen bg-[#000000] text-[#D4AF37] selection:bg-[#D4AF37] selection:text-black pt-24 font-sans">  
        
      {/* Editorial Header */}  
      <header className="p-8 border-b border-[#D4AF37]/10">  
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">  
          <div className="space-y-2">  
            {/* Swapped to serif for the elite headline feel */}  
            <h1 className="text-6xl md:text-7xl font-serif font-light tracking-tighter leading-none italic">  
              The Archive  
            </h1>  
            <p className="text-[10px] tracking-[0.5em] opacity-40 font-sans uppercase">  
              Private_Collection // Sanctuary_Vault  
            </p>  
          </div>  
          <div className="text-right max-w-xs">  
            <p className="text-[11px] leading-relaxed opacity-60 uppercase tracking-[0.2em] font-sans">  
              A high-density registry of the world's most elusive sanctuaries.   
              Refined for the next generation of global nomads.  
            </p>  
          </div>  
        </div>  
      </header>

      {/* Grid Ledger */}  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-[#D4AF37]/10 border-b border-[#D4AF37]/10">  
        {SANCTUARIES.map((item) => (  
          <Link   
            key={item.id}   
            href={`/archive/${item.id}`}  
            className="group relative bg-black aspect-[4/5] overflow-hidden flex flex-col p-8 transition-all hover:bg-[#0a0a0a]"  
          >  
            {/* Background Image Logic */}  
            <div className="absolute inset-0 opacity-30 group-hover:opacity-100 transition-opacity duration-1000">  
              <img   
                src={item.heroImage}   
                alt={item.name}   
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"  
              />  
              {/* Dark overlay for text legibility */}  
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />  
            </div>  
              
            <div className="relative z-10 h-full flex flex-col justify-between">  
              <div className="flex justify-between items-start">  
                <span className="text-[9px] tracking-[0.3em] opacity-50 font-sans">REF_{item.id}</span>  
                <span className="text-[9px] tracking-[0.2em] px-3 py-1 border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors font-sans uppercase">  
                  {item.tag}  
                </span>  
              </div>  
                
              <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">  
                <p className="text-[10px] tracking-[0.3em] opacity-50 font-sans uppercase">{item.loc}</p>  
                <h2 className="text-3xl font-serif font-light tracking-tight group-hover:text-white transition-colors leading-none italic">  
                  {item.name}  
                </h2>  
              </div>  
            </div>  
          </Link>  
        ))}  
      </div>

      <footer className="p-20 text-center opacity-20">  
        <p className="text-[9px] tracking-[1em] font-sans">END_OF_LEDGER</p>  
      </footer>  
    </main>  
  );  
}  
