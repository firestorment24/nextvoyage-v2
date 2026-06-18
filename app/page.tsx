import React from 'react';  
import Navigation from '@/components/Navigation';

export default function HomePage() {  
  return (  
    <main className="min-h-screen bg-black text-white selection:bg-white/20">  
      {/*   
        ULTIMATE GHOST BOX KILLER   
        This style block forces all generic containers to be transparent.  
      */}  
      <style>{`  
        * { background-color: transparent !important; border-color: rgba(255,255,255,0.1) !important; }  
        html, body, main { background-color: #000 !important; }  
        .bg-white, .bg-slate-50, .bg-gray-50, .bg-stone-50 { background-color: transparent !important; }  
        section, div, article, nav, footer { background-color: transparent !important; }  
      `}</style>

      <Navigation />

      {/* 1. HERO SECTION: Chablé Villa */}  
      <section className="relative h-screen flex items-center justify-center overflow-hidden">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="https://images.squarespace-cdn.com/content/v1/645163158f36c53531b2682e/1683130397558-8W9W9W9W9W9W9W9W9W9W/Chable-Yucatan-Villa-Presidential-1.jpg"   
            alt="Chablé Villa"   
            className="w-full h-full object-cover opacity-60"  
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />  
        </div>  
          
        <div className="relative z-10 text-center px-6">  
          <h1 className="text-[8rem] md:text-[12rem] leading-none font-serif tracking-tighter opacity-90">  
            NexVoyage  
          </h1>  
          <p className="mt-4 text-xl tracking-[0.3em] uppercase font-light">  
            Collective  
          </p>  
        </div>  
      </section>

      {/* 2. STRATEGIC ALLIANCES: Property Partners */}  
      <section className="py-32 px-12 border-t border-white/5">  
        <div className="max-w-7xl mx-auto">  
          <h2 className="text-6xl md:text-8xl font-serif mb-20 tracking-tight">Strategic Alliances</h2>  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  
            {[1, 2, 3].map((item) => (  
              <div key={item} className="group cursor-pointer">  
                <div className="aspect-[4/5] overflow-hidden bg-[#0A0A0A] border border-white/10 transition-all duration-700 hover:border-white/30">  
                  <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 bg-zinc-900" />  
                </div>  
                <h3 className="mt-6 text-2xl font-serif tracking-wide italic">Partner Estate {item}</h3>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* 3. GUARDIAN LAYER */}  
      <section className="py-32 px-12">  
        <div className="max-w-5xl mx-auto text-center">  
          <h2 className="text-6xl md:text-8xl font-serif mb-12 tracking-tight">The Guardian Layer</h2>  
          <p className="text-2xl leading-relaxed font-light text-white/70 max-w-3xl mx-auto font-serif italic">  
            &quot;An invisible shield of logistical perfection. We don&apos;t just book travel; we secure the continuity of your lifestyle across every border.&quot;  
          </p>  
        </div>  
      </section>

      {/* 4. THE SANCTUARY COLLECTION */}  
      <section className="py-32 px-12 border-t border-white/5">  
        <div className="max-w-7xl mx-auto">  
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">  
            <h2 className="text-6xl md:text-8xl font-serif tracking-tight">The Sanctuary Collection</h2>  
            <button className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-xs">  
              View All  
            </button>  
          </div>  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
            <div className="h-[400px] md:h-[600px] bg-zinc-950 border border-white/5 flex items-center justify-center italic text-white/20">Sanctuary I</div>  
            <div className="h-[400px] md:h-[600px] bg-zinc-950 border border-white/5 flex items-center justify-center italic text-white/20">Sanctuary II</div>  
          </div>  
        </div>  
      </section>

      <footer className="py-20 text-center border-t border-white/5 opacity-40">  
        <p className="text-xs tracking-[0.5em] uppercase">NexVoyage Collective © 2026</p>  
      </footer>  
    </main>  
  );  
}  
