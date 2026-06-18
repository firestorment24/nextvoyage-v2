import React from 'react';  
import Navigation from '@/components/Navigation';

export default function HomePage() {  
  return (  
    <main className="min-h-screen bg-black text-white selection:bg-white/20 font-serif">  
      {/*   
        CLEAN NUCLEAR FIX   
        Forces the background to black and ensures no white ghosts bleed through.  
      */}  
      <style dangerouslySetInnerHTML={{ __html: `  
        html, body, main { background-color: #000 !important; }  
        section, div, nav, footer { background-color: transparent !important; }  
        * { border-color: rgba(255,255,255,0.1) !important; }  
      ` }} />

      <Navigation />

      {/* 1. HERO SECTION */}  
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="https://images.squarespace-cdn.com/content/v1/645163158f36c53531b2682e/1683130397558-8W9W9W9W9W9W9W9W9W9W/Chable-Yucatan-Villa-Presidential-1.jpg"   
            alt="Chablé Villa"   
            className="w-full h-full object-cover opacity-50"  
          />  
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />  
        </div>  
          
        <div className="relative z-10 text-center px-6">  
          <h1 className="text-7xl md:text-[10rem] leading-none tracking-tighter opacity-90">  
            NexVoyage  
          </h1>  
          <p className="mt-4 text-lg md:text-xl tracking-[0.4em] uppercase font-light font-sans text-white/60">  
            Collective  
          </p>  
        </div>  
      </section>

      {/* 2. STRATEGIC ALLIANCES */}  
      <section className="py-32 px-8 md:px-24 border-t border-white/5">  
        <div className="max-w-7xl mx-auto">  
          <h2 className="text-5xl md:text-7xl mb-16 tracking-tight">Strategic Alliances</h2>  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">  
            <div className="group cursor-pointer">  
              <div className="aspect-[16/9] bg-zinc-900 border border-white/10 mb-6 overflow-hidden">  
                <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 bg-zinc-800" />  
              </div>  
              <h3 className="text-xl italic">Fora Travel & Virtuoso</h3>  
            </div>  
            <div className="group cursor-pointer">  
              <div className="aspect-[16/9] bg-zinc-900 border border-white/10 mb-6 overflow-hidden">  
                <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 bg-zinc-800" />  
              </div>  
              <h3 className="text-xl italic">The Aman Estate Network</h3>  
            </div>  
            <div className="group cursor-pointer">  
              <div className="aspect-[16/9] bg-zinc-900 border border-white/10 mb-6 overflow-hidden">  
                <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 bg-zinc-800" />  
              </div>  
              <h3 className="text-xl italic">Private Aviation Partners</h3>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* 3. THE GUARDIAN LAYER */}  
      <section className="py-40 px-8 md:px-24 bg-zinc-950/30">  
        <div className="max-w-7xl mx-auto">  
          <h2 className="text-5xl md:text-7xl mb-20 tracking-tight text-center">The Guardian Layer</h2>  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">  
            <div>  
              <h4 className="text-2xl mb-6 tracking-wide text-zinc-400">Invisible Advocacy</h4>  
              <p className="text-lg leading-relaxed text-white/60 font-sans font-light">  
                We operate in the shadows of the global luxury machine, negotiating terms and access that simply do not exist for the general public.  
              </p>  
            </div>  
            <div>  
              <h4 className="text-2xl mb-6 tracking-wide text-zinc-400">Status Leverage</h4>  
              <p className="text-lg leading-relaxed text-white/60 font-sans font-light">  
                Utilizing our collective standing to ensure your priority is absolute. From room upgrades to exclusive terminal access, your status is always felt.  
              </p>  
            </div>  
            <div>  
              <h4 className="text-2xl mb-6 tracking-wide text-zinc-400">Tactical Oversight</h4>  
              <p className="text-lg leading-relaxed text-white/60 font-sans font-light">  
                Every movement is monitored; every detail is perfected. We secure the continuity of your lifestyle across every border and time zone.  
              </p>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* 4. THE SANCTUARY COLLECTION */}  
      <section className="py-32 px-8 md:px-24 border-t border-white/5">  
        <div className="max-w-7xl mx-auto">  
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">  
            <h2 className="text-5xl md:text-7xl tracking-tight">The Sanctuary Collection</h2>  
            <button className="px-10 py-4 border border-white/20 hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-[0.3em] text-[10px]">  
              Discover All  
            </button>  
          </div>  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
            <div className="h-[500px] bg-zinc-900/50 border border-white/5 flex flex-col items-center justify-center p-12 text-center">  
              <span className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Edition 01</span>  
              <h3 className="text-3xl italic">The Island Sanctuary</h3>  
            </div>  
            <div className="h-[500px] bg-zinc-900/50 border border-white/5 flex flex-col items-center justify-center p-12 text-center">  
              <span className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Edition 02</span>  
              <h3 className="text-3xl italic">The Mountain Retreat</h3>  
            </div>  
          </div>  
        </div>  
      </section>

      <footer className="py-20 text-center border-t border-white/5 opacity-40">  
        <p className="text-[10px] tracking-[0.6em] uppercase">NexVoyage Collective &copy; 2026</p>  
      </footer>  
    </main>  
  );  
}  
