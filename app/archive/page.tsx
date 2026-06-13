"use client";

import { SANCTUARIES_DATA } from "@/lib/data/sanctuaries";    
import Link from "next/link";

export default function ArchivePage() {  
  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] pt-24 pb-24 px-6">  
      <div className="max-w-7xl mx-auto">  
        <div className="mb-16 border-l border-white/20 pl-6">  
          <h1 className="text-[10px] uppercase tracking-[0.5em] text-[#666] mb-2 font-sans">  
            Global Asset Directory  
          </h1>  
          <h2 className="text-4xl font-serif italic tracking-tight text-white">  
            The Archive  
          </h2>  
        </div>  
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">  
          {SANCTUARIES_DATA.map((sanctuary) => (  
            <Link   
              key={sanctuary.id}   
              href={`/archive/${sanctuary.id}`}  
              className="group block"  
            >  
              <div className="relative aspect-[16/10] overflow-hidden bg-white/5 border border-white/10 mb-6">  
                <img   
                  src={sanctuary.heroImage}   
                  alt={sanctuary.name}  
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"  
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />  
                <div className="absolute bottom-4 left-4">  
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/70 font-sans">  
                    Ref: {sanctuary.id}  
                  </p>  
                </div>  
              </div>

              <div className="flex justify-between items-start">  
                <div>  
                  <h3 className="text-2xl font-serif text-white group-hover:text-white/80 transition-colors">  
                    {sanctuary.name}  
                  </h3>  
                  <p className="text-[10px] uppercase tracking-widest text-[#666] mt-1 font-sans">  
                    {sanctuary.loc}  
                  </p>  
                </div>  
                <div className="text-right">  
                  <p className="text-[10px] uppercase tracking-widest text-[#444] font-sans">  
                    Capacity  
                  </p>  
                  <p className="text-xs text-[#888] font-sans italic">  
                    {sanctuary.propertyCount} Units  
                  </p>  
                </div>  
              </div>  
                
              <div className="mt-4 h-px bg-white/5 w-0 group-hover:w-full transition-all duration-500" />  
            </Link>  
          ))}  
        </div>  
      </div>  
    </main>  
  );  
}  
