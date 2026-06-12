import React from 'react'    
import Link from 'next/link'    
import { SANCTUARY_DATA } from '@/data/sanctuaries' 

export default function ArchiveGallery() {    
  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] selection:bg-white/10">  
      {/* Header */}  
      <nav className="p-8 flex justify-between items-center mix-blend-difference fixed w-full z-50">  
        <Link href="/" className="text-xs tracking-[0.3em] uppercase font-light">  
          NexVoyage / Collective  
        </Link>  
        <Link href="/inquiry" className="text-xs tracking-[0.3em] uppercase font-light border-b border-white/20 pb-1 hover:border-white transition-colors">  
          Initiate Deep Dive  
        </Link>  
      </nav>

      {/* Hero Section */}  
      <section className="pt-40 pb-20 px-8 max-w-7xl mx-auto">  
        <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter mb-8 opacity-90">  
          The Archive.  
        </h1>  
        <p className="max-w-md text-sm font-light leading-relaxed opacity-50 tracking-wide uppercase">  
          An editorial exhibition of past sanctuaries and strategic acquisitions.   
          Reserved for the legacy of high-net-worth exploration.  
        </p>  
      </section>

      {/* Editorial Exhibition Layout */}  
      <section className="px-8 pb-40 max-w-7xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 gap-x-12">  
          {SANCTUARY_DATA.map((sanctuary, index) => {  
            // Staggered layout logic  
            const isEven = index % 2 === 0;  
            const colSpan = isEven ? "md:col-span-7" : "md:col-span-8 md:col-start-5";  
              
            return (  
              <div key={sanctuary.id} className={`${colSpan} group`}>  
                <Link href={`/sanctuaries/${sanctuary.id}`} className="block overflow-hidden bg-white/5">  
                  <div className="aspect-[16/9] relative overflow-hidden">  
                    <img   
                      src={sanctuary.heroImage}   
                      alt={sanctuary.name}  
                      className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"  
                    />  
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />  
                  </div>  
                </Link>  
                  
                <div className="mt-8 flex justify-between items-start">  
                  <div className="space-y-2">  
                    <h2 className="text-2xl font-light tracking-tight">{sanctuary.name}</h2>  
                    {/* Changed .location to .loc */}  
                    <p className="text-[10px] tracking-[0.2em] uppercase opacity-40">{sanctuary.loc}</p>  
                  </div>  
                  <div className="text-right">  
                    <span className="text-[10px] tracking-[0.2em] uppercase opacity-40 block mb-1">Status</span>  
                    {/* Changed .standard to .tag */}  
                    <p className="text-xs font-light italic">{sanctuary.tag}</p>  
                  </div>  
                </div>  
                  
                <div className="mt-6 border-t border-white/5 pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">  
                  <p className="text-sm font-light leading-relaxed opacity-60 max-w-sm italic">  
                    {/* Fallback to philosophy if tagline is missing in some versions */}  
                    "{sanctuary.philosophy || sanctuary.name}"  
                  </p>  
                </div>  
              </div>  
            );  
          })}  
        </div>  
      </section>

      {/* Footer */}  
      <footer className="p-20 text-center border-t border-white/5">  
        <p className="text-[10px] tracking-[0.5em] uppercase opacity-20">  
          Strictly Confidential — NexVoyage Collective Website Team  
        </p>  
      </footer>  
    </main>  
  )  
}  
