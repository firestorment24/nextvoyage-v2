import React from 'react';  
import Link from 'next/link';

export default function HomePage() {  
  return (  
    <div className="min-h-screen bg-[#FCFAF7] text-[#1C1C1C] selection:bg-[#d4af37] selection:text-white overflow-hidden">  
        
      {/* Main Hero Section */}  
      <main className="flex flex-col items-center justify-center min-h-[90vh] px-6">  
          
        {/* Geographic Markers */}  
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">  
          <p className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] text-zinc-400 font-light">  
            London — Tokyo — New York  
          </p>  
        </div>

        {/* Brand Identity */}  
        <div className="text-center relative">  
          <h1 className="text-[14vw] md:text-[12vw] font-light tracking-tighter leading-[0.8] mb-2 opacity-90">  
            NexVoyage  
          </h1>  
          <h2 className="text-[3vw] md:text-[2vw] font-light italic tracking-[0.4em] text-[#d4af37] opacity-80 uppercase ml-[4vw]">  
            Collective  
          </h2>  
            
          {/* Subtle Accent Line */}  
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#d4af37] to-transparent opacity-30 hidden md:block" />  
        </div>

        {/* Manifesto / CTA */}  
        <div className="mt-24 md:mt-32 max-w-xl text-center space-y-12 animate-in fade-in duration-1000 delay-500">  
          <p className="text-sm md:text-base font-light leading-relaxed text-zinc-500 tracking-wide italic">  
            "Private travel architecture for the world’s most discerning individuals.   
            We do not just book travel; we design legacies."  
          </p>  
            
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-8">  
            <Link   
              href="/inquiry"   
              className="text-[11px] uppercase tracking-[0.5em] border-b border-[#1C1C1C] pb-2 hover:text-[#d4af37] hover:border-[#d4af37] transition-all duration-500"  
            >  
              Begin Inquiry  
            </Link>  
            <Link   
              href="/archive"   
              className="text-[11px] uppercase tracking-[0.5em] text-zinc-400 hover:text-[#1C1C1C] transition-all duration-500"  
            >  
              The Archive  
            </Link>  
          </div>  
        </div>  
      </main>

      {/* Persistent Visual Footer (Homepage Specific) */}  
      <div className="fixed bottom-12 left-6 md:left-12 hidden lg:block">  
        <div className="flex flex-col gap-4">  
          <div className="h-px w-8 bg-[#d4af37]" />  
          <p className="text-[8px] uppercase tracking-[0.4em] text-zinc-300 vertical-text origin-left rotate-90 whitespace-nowrap mt-4">  
            Established MMXXVI  
          </p>  
        </div>  
      </div>

      <div className="fixed bottom-12 right-6 md:right-12 text-right">  
        <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 leading-loose">  
          Private Access Only <br />  
          <span className="text-[#d4af37] opacity-60">Status: Operational</span>  
        </p>  
      </div>

    </div>  
  );  
}  
