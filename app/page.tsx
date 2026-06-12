import React from 'react';  
import Navigation from '@/components/Navigation';

export default function Home() {  
  return (  
    <main className="min-h-screen bg-black text-neutral-200 selection:bg-amber-200/20 font-light">  
      <Navigation />  
        
      {/* SECTION 1: THE ENTRY */}  
      <section className="h-screen relative flex flex-col justify-end p-8 md:p-20 overflow-hidden">  
        {/* Background Atmosphere */}  
        <div className="absolute inset-0 z-0">  
           {/* Replace this div with a high-res cinematic image later */}  
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />  
          <div className="absolute inset-0 bg-neutral-900/20 grayscale" />   
        </div>

        <div className="relative z-20 space-y-12 max-w-6xl">  
          <div className="space-y-4">  
            <p className="text-amber-200/40 uppercase tracking-[0.5em] text-[10px] md:text-xs">  
              NexVoyage Collective / Arrival  
            </p>  
            <h1 className="text-6xl md:text-[10vw] leading-[0.85] font-serif italic text-white">  
              The Lobby  
            </h1>  
          </div>  
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">  
            <p className="text-xl md:text-2xl text-neutral-400 font-serif leading-relaxed italic border-l border-amber-200/20 pl-8">  
              "The ultimate luxury isn't access. It is the ability to be inaccessible."  
            </p>  
            <div className="flex justify-end">  
               <div className="text-right space-y-2">  
                 <p className="text-[10px] uppercase tracking-widest text-neutral-500">Current Status</p>  
                 <p className="text-amber-200/80 text-sm font-mono tracking-tighter italic">Open for Private Consultation</p>  
               </div>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* SECTION 2: THE ELITE LEDGER (Editorial Layout) */}  
      <section className="bg-neutral-950 py-32 md:py-60 px-8">  
        <div className="max-w-7xl mx-auto">  
          <div className="mb-32">  
            <h2 className="text-amber-200/40 uppercase tracking-[0.4em] text-xs mb-8">Selected Archives</h2>  
            <h3 className="text-5xl md:text-7xl font-serif text-white italic tracking-tighter">The Elite Ledger</h3>  
          </div>

          <div className="space-y-64">  
            {/* Feature 01 */}  
            <div className="flex flex-col md:flex-row gap-20 items-center group">  
              <div className="w-full md:w-3/5 aspect-[16/9] bg-neutral-900 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000">  
                <div className="absolute inset-0 flex items-center justify-center text-neutral-800 text-[10vw] font-serif italic">01</div>  
              </div>  
              <div className="w-full md:w-2/5 space-y-8">  
                <span className="font-mono text-xs text-amber-200/30 tracking-tighter">NV-LDR-001</span>  
                <h4 className="text-4xl font-serif italic text-white">The Silent ROI</h4>  
                <p className="text-neutral-500 leading-relaxed font-light">  
                  An exploration of stillness in the South Pacific. Why the most valuable return on travel is the silence you bring back with you.  
                </p>  
                <button className="border-b border-amber-200/20 pb-2 text-[10px] uppercase tracking-widest text-amber-200/60 hover:text-white hover:border-white transition-all">  
                  Read Perspective  
                </button>  
              </div>  
            </div>

            {/* Feature 02 */}  
            <div className="flex flex-col md:flex-row-reverse gap-20 items-center group">  
              <div className="w-full md:w-3/5 aspect-[16/9] bg-neutral-900 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000">  
                <div className="absolute inset-0 flex items-center justify-center text-neutral-800 text-[10vw] font-serif italic">02</div>  
              </div>  
              <div className="w-full md:w-2/5 space-y-8 text-right md:text-left">  
                <span className="font-mono text-xs text-amber-200/30 tracking-tighter">NV-LDR-002</span>  
                <h4 className="text-4xl font-serif italic text-white">Shadow Logistics</h4>  
                <p className="text-neutral-500 leading-relaxed font-light">  
                  The invisible mechanics of the world's most private journeys. How we move the needle without making a sound.  
                </p>  
                <button className="border-b border-amber-200/20 pb-2 text-[10px] uppercase tracking-widest text-amber-200/60 hover:text-white hover:border-white transition-all">  
                  View Manifest  
                </button>  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* SECTION 3: THE CALL */}  
      <section className="h-screen flex items-center justify-center text-center p-8">  
        <div className="max-w-3xl space-y-12">  
          <h2 className="text-6xl md:text-8xl font-serif italic text-white leading-tight">  
            Ready for your <br />  
            <span className="text-amber-200/20">Private Consultation?</span>  
          </h2>  
          <a   
            href="mailto:daryl.clark@fora.travel"  
            className="inline-block px-12 py-5 border border-amber-200/10 text-amber-200/60 uppercase tracking-[0.4em] text-xs hover:bg-white hover:text-black transition-all duration-500"  
          >  
            Inquire Within  
          </a>  
        </div>  
      </section>

      {/* FOOTER */}  
      <footer className="p-12 border-t border-neutral-900 flex justify-between items-center opacity-30">  
        <span className="text-[10px] uppercase tracking-widest font-mono">NexVoyage Collective MMXXVI</span>  
        <div className="flex gap-8">  
          <span className="text-[10px] uppercase tracking-widest">Instagram</span>  
          <span className="text-[10px] uppercase tracking-widest">LinkedIn</span>  
        </div>  
      </footer>  
    </main>  
  );  
}  
