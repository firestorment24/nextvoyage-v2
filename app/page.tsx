import React from 'react';  
import Navigation from '@/components/Navigation';

export default function Home() {  
  return (  
    <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-200/20">  
      <Navigation />  
        
      {/* Hero Section: The Arrival */}  
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">  
        {/* Subtle Ambient Background */}  
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-neutral-950 to-black"></div>  
          
        <div className="relative z-10 text-center space-y-6 px-6 max-w-4xl">  
          <h2 className="text-amber-200/60 uppercase tracking-[0.4em] text-xs font-medium animate-fade-in">  
            Arrival & Overview  
          </h2>  
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight text-white italic">  
            The Lobby  
          </h1>  
          <div className="h-px w-24 bg-amber-200/20 mx-auto my-8"></div>  
          <p className="text-neutral-400 max-w-xl mx-auto text-lg leading-relaxed font-light italic">  
            "The ultimate luxury isn't access. It is the ability to be inaccessible."  
          </p>  
        </div>  
          
        {/* Elegant Scroll Indicator */}  
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30">  
          <div className="flex flex-col items-center gap-2">  
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-200/50">Explore</span>  
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">  
              <path d="M7 13l5 5 5-5" />  
            </svg>  
          </div>  
        </div>  
      </section>

      {/* The Elite Ledger - 3x3 Curation Grid */}  
      <section className="max-w-7xl mx-auto px-6 py-32">  
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">  
          <div className="space-y-2">  
            <span className="text-amber-200/50 uppercase tracking-[0.3em] text-xs">Portfolio</span>  
            <h3 className="text-4xl font-serif italic text-white">The Elite Ledger</h3>  
          </div>  
          <p className="text-neutral-500 text-sm max-w-xs font-light leading-relaxed">  
            A curated selection of private vessels and hidden estates currently held within our collective.  
          </p>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">  
          {[...Array(9)].map((_, i) => (  
            <div key={i} className="group relative aspect-[4/5] bg-neutral-950 overflow-hidden transition-colors duration-700 hover:bg-neutral-900">  
              {/* Subtle Texture/Grain Placeholder */}  
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>  
                
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">  
                <span className="text-amber-200/20 text-[10px] font-mono tracking-tighter">  
                  NV-LDR-00{i + 1}  
                </span>  
                  
                <div className="space-y-4">  
                  <h4 className="text-xl text-neutral-300 group-hover:text-white font-serif italic transition-colors duration-500">  
                    {["The Silent Haven", "Latitude Zero", "Echoes of Azure", "The Gilded Anchor", "Verdant Solitude", "Celestial Reach", "Iron & Velvet", "Opal Horizon", "The Midnight Quay"][i]}  
                  </h4>  
                  <div className="h-px w-0 group-hover:w-full bg-amber-200/30 transition-all duration-1000 ease-in-out"></div>  
                  <button className="text-[10px] uppercase tracking-[0.2em] text-amber-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">  
                    View Dossier  
                  </button>  
                </div>  
              </div>

              {/* Hover Overlay */}  
              <div className="absolute inset-0 bg-amber-200/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-in-out"></div>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* Closing Statement */}  
      <section className="py-40 text-center border-t border-neutral-900/50">  
        <div className="max-w-2xl mx-auto px-6 space-y-8">  
          <h3 className="text-amber-200/60 uppercase tracking-[0.3em] text-xs">The Silent ROI</h3>  
          <p className="text-2xl font-serif italic text-neutral-300 leading-relaxed">  
            "We do not just find locations; we secure the peace that allows for true perspective."  
          </p>  
        </div>  
      </section>

      {/* Minimal Footer */}  
      <footer className="py-12 border-t border-neutral-900 px-6">  
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">  
          <p className="text-[10px] uppercase tracking-widest">NexVoyage Collective Website Team</p>  
          <p className="text-[10px] font-mono tracking-tighter">MMXXVI | ESTABLISHED FOR ELITE TRAVELERS</p>  
        </div>  
      </footer>  
    </main>  
  );  
}  
