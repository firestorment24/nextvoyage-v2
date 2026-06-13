"use client";

import { SANCTUARIES_DATA } from "@/lib/data/sanctuaries";    
import Link from "next/link";

export default function ArchivePage() {  
  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] pt-24 pb-12 px-6">  
      <div className="max-w-7xl mx-auto">  
        <h1 className="text-4xl font-light mb-12 tracking-widest uppercase">The Archive</h1>  
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {SANCTUARIES_DATA.map((sanctuary) => (  
            <Link   
              key={sanctuary.id}   
              href={`/archive/${sanctuary.id}`}  
              className="group block border border-white/10 p-6 hover:bg-white/5 transition-all"  
            >  
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#888] mb-4">  
                {sanctuary.tag}  
              </p>  
              <h2 className="text-2xl font-serif mb-2 group-hover:translate-x-2 transition-transform">  
                {sanctuary.name}  
              </h2>  
              <p className="text-sm text-[#666] italic">{sanctuary.loc}</p>  
            </Link>  
          ))}  
        </div>  
      </div>  
    </main>  
  );  
}  
