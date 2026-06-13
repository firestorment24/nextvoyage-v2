"use client";

import { SANCTUARIES } from "@/lib/data/sanctuaries";  
import Link from "next/link";

export default function ArchivePage() {  
  return (  
    <main className="min-h-screen bg-[#000000] text-[#D4AF37] font-mono selection:bg-[#D4AF37] selection:text-black">  
      {/* Editorial Header */}  
      <header className="p-8 border-b border-[#D4AF37]/10">  
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">  
          <div className="space-y-2">  
            <h1 className="text-5xl font-light tracking-tighter">THE ARCHIVE</h1>  
            <p className="text-[10px] tracking-[0.4em] opacity-40">PRIVATE_COLLECTION // V2.0</p>  
          </div>  
          <div className="text-right max-w-xs">  
            <p className="text-[10px] leading-relaxed opacity-60 uppercase tracking-widest">  
              A high-density registry of the world's most elusive sanctuaries. Refined for the next generation of global nomads.  
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
            className="group relative bg-black aspect-[4/5] overflow-hidden flex flex-col p-6 transition-all hover:bg-[#0a0a0a]"  
          >  
            <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700">  
              <img   
                src={item.heroImage}   
                alt={item.name}   
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"  
              />  
            </div>  
              
            <div className="relative z-10 h-full flex flex-col justify-between">  
              <div className="flex justify-between items-start">  
                <span className="text-[9px] tracking-widest opacity-50">REF_{item.id}</span>  
                <span className="text-[9px] tracking-widest px-2 py-1 border border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors">  
                  {item.tag.toUpperCase()}  
                </span>  
              </div>  
                
              <div className="space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">  
                <p className="text-[10px] tracking-widest opacity-50">{item.loc.toUpperCase()}</p>  
                <h2 className="text-2xl font-light tracking-tighter leading-none group-hover:text-white transition-colors">  
                  {item.name.toUpperCase()}  
                </h2>  
              </div>  
            </div>  
          </Link>  
        ))}  
      </div>

      <footer className="p-12 text-center opacity-20">  
        <p className="text-[9px] tracking-[0.8em]">END_OF_LEDGER</p>  
      </footer>  
    </main>  
  );  
}  
