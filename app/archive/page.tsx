"use client";

import { PROPERTY_DATA } from "@/lib/data/sanctuaries";    
import Link from "next/link";

export default function ArchivePage() {  
  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] pt-24 pb-24 px-6">  
      <div className="max-w-7xl mx-auto">  
        <div className="mb-16 border-l border-white/20 pl-6">  
          <h1 className="text-[10px] uppercase tracking-[0.5em] text-[#666] mb-2 font-sans">  
            The Elite Ledger  
          </h1>  
          <h2 className="text-4xl font-serif italic tracking-tight text-white">  
            Property Archive  
          </h2>  
        </div>  
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {PROPERTY_DATA.map((property) => (  
            <Link   
              key={property.id}   
              href={`/archive/property/${property.id}`}  
              className="group block border border-white/5 bg-white/[0.02] p-4 hover:border-white/20 transition-all duration-500"  
            >  
              <div className="relative aspect-[4/5] overflow-hidden bg-black mb-6">  
                <img   
                  src={property.imageUrl}   
                  alt={property.name}  
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"  
                />  
                <div className="absolute top-4 left-4 bg-black/80 px-2 py-1 border border-white/10">  
                  <p className="text-[9px] uppercase tracking-widest text-white font-sans">  
                    {property.id}  
                  </p>  
                </div>  
              </div>

              <div className="space-y-1">  
                <h3 className="text-xl font-serif text-white tracking-wide">  
                  {property.name}  
                </h3>  
                <p className="text-[10px] uppercase tracking-widest text-[#666] font-sans">  
                  {property.location}  
                </p>  
              </div>

              <div className="mt-4 flex justify-between items-center pt-4 border-t border-white/5">  
                <span className="text-[9px] uppercase tracking-tighter text-[#444]">Status: Verified</span>  
                <span className="text-[10px] text-[#888] font-serif italic italic group-hover:translate-x-1 transition-transform">View Dossier →</span>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </div>  
    </main>  
  );  
}  
