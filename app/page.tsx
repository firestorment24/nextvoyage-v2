import React from 'react';  
import Navigation from '@/components/Navigation';

export default function Home() {  
return (  
  <main className="min-h-screen bg-neutral-950 text-stone-200 selection:bg-amber-200/20 font-sans">  
    {/* Global Navigation - Unified Header */}  
    <Navigation />  
      
    {/* HERO SECTION: THE ARRIVAL */}  
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">  
      {/* High-Impact Modern Luxury Hero Image */}  
      <div className="absolute inset-0 z-0">  
        <img   
          src="https://images.unsplash.com/photo-1600607687940-4e524cb35a36?q=80&w=2000&auto=format&fit=crop"   
          alt="Modern Architectural Arrival"   
          className="w-full h-full object-cover opacity-60 grayscale-[20%] brightness-[0.6]"  
        />  
        {/* Sophisticated Vignette and Gradient Overlay */}  
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-neutral-950/70" />  
      </div>

      <div className="relative z-10 space-y-8 max-w-6xl">  
        <div className="space-y-6">  
          <span className="text-amber-200/60 uppercase tracking-[0.6em] text-[10px] md:text-xs block font-medium">  
            Arrival & Overview  
          </span>  
          <h1 className="text-6xl md:text-[8.5vw] font-serif text-white italic tracking-tighter leading-[0.8] drop-shadow-2xl">  
            Inaccessible <br />  
            <span className="text-amber-200/90 font-serif">by Design.</span>  
          </h1>  
        </div>  
          
        <p className="text-lg md:text-2xl text-stone-300 font-serif italic max-w-2xl mx-auto leading-relaxed opacity-90">  
          "The ultimate luxury isn't access. It is the ability to be inaccessible."  
        </p>

        <div className="pt-12 flex flex-col items-center gap-8">  
          <a href="/inquiry" className="group relative inline-block px-12 py-5 bg-white text-black text-[11px] uppercase tracking-[0.5em] transition-all duration-700 hover:bg-amber-200 hover:scale-105 font-sans font-semibold">  
            Secure Your Perspective  
          </a>  
            
          {/* Visual Link to Manifest */}  
          <div className="flex items-center gap-4 opacity-30">  
            <div className="h-px w-12 bg-amber-200"></div>  
            <span className="text-[10px] uppercase tracking-[0.4em] font-sans">The Elite Ledger Registry</span>  
            <div className="h-px w-12 bg-amber-200"></div>  
          </div>  
        </div>  
      </div>  
        
      {/* Editorial Scroll Hint */}  
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30">  
         <div className="flex flex-col items-center gap-3">  
           <span className="text-[9px] uppercase tracking-[0.3em] font-sans text-amber-200/50">Enter</span>  
           <div className="w-px h-12 bg-gradient-to-b from-amber-200 to-transparent"></div>  
         </div>  
      </div>  
    </section>

    {/* THE ELITE LEDGER: THE MANIFEST PREVIEW */}  
    <section className="max-w-7xl mx-auto px-6 py-48">  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">  
        <div className="space-y-12">  
          <div className="space-y-4">  
            <span className="text-amber-200/40 uppercase tracking-[0.5em] text-[10px] font-sans">Node 02: The Manifest</span>  
            <h2 className="text-5xl md:text-8xl font-serif text-white italic leading-[0.9]">The Elite Ledger</h2>  
          </div>  
          <p className="text-stone-400 text-xl leading-relaxed font-serif italic border-l-2 border-amber-200/10 pl-10 py-2">  
            A private registry of the world’s most secluded estates and silent vessels. Curated for those who value the return on stillness.  
          </p>  
          <div className="pt-6">  
             <a href="/archive" className="group text-amber-200/70 text-xs uppercase tracking-widest inline-flex items-center gap-6 hover:text-white transition-all font-sans">  
               Review the Dossiers  
               <span className="h-px w-12 bg-amber-200/20 group-hover:w-20 transition-all duration-700 group-hover:bg-amber-200"></span>  
             </a>  
          </div>  
        </div>  
          
        {/* Editorial Visual Component */}  
        <div className="relative group">  
          <div className="aspect-[4/5] bg-neutral-900 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-[1500ms] ease-out shadow-2xl">  
             <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200" className="object-cover w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2000ms]" alt="Elite Registry" />  
          </div>  
          <div className="absolute -bottom-16 -left-16 aspect-square w-72 bg-neutral-950 border border-neutral-900 p-10 hidden xl:flex flex-col justify-between shadow-2xl z-20 transition-transform group-hover:-translate-y-4 duration-1000">  
             <span className="text-amber-200/30 font-mono text-[10px] tracking-tighter">REF: LDR-VXV-001</span>  
             <div className="space-y-2">  
               <p className="text-xs italic text-stone-200 font-serif">Holding: Private Atoll</p>  
               <p className="text-[9px] uppercase tracking-widest text-neutral-600 font-sans">Availability: By Invitation</p>  
             </div>  
          </div>  
        </div>  
      </div>  
    </section>

    {/* THE SILENT ROI: PHILOSOPHY */}  
    <section className="bg-neutral-900/10 py-56 px-6 border-y border-neutral-900/30">  
      <div className="max-w-4xl mx-auto text-center space-y-20">  
        <div className="space-y-4">  
          <h3 className="text-amber-200/40 uppercase tracking-[0.6em] text-[10px] font-sans font-medium">Node 03: The Mandate</h3>  
          <h2 className="text-6xl md:text-[7vw] font-serif text-white italic leading-none">  
            The Silent ROI  
          </h2>  
        </div>  
        <p className="text-stone-300 text-2xl md:text-4xl font-serif italic leading-[1.4] font-light px-4">  
          "The invisible mechanics of a journey that moves without a sound."  
        </p>  
        <div className="pt-10">  
           <a href="/perspective" className="inline-block px-14 py-6 border border-amber-200/20 text-amber-200/80 text-[10px] uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-700 font-sans font-bold">  
             Our Perspective  
           </a>  
        </div>  
      </div>  
    </section>

    {/* FOOTER: THE LOGOUT */}  
    <footer className="py-24 border-t border-neutral-900 px-6 bg-black">  
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">  
        <div className="space-y-8">  
          <h4 className="text-white font-serif italic text-3xl">NexVoyage Collective</h4>  
          <p className="text-[10px] uppercase tracking-[0.6em] text-neutral-600 leading-loose">  
            Established MMXXVI <br />   
            Digital Concierge for the Discerning  
          </p>  
        </div>  
          
        <div className="space-y-8">  
          <span className="text-amber-200/30 text-[10px] uppercase tracking-[0.5em] font-sans">Registry Status</span>  
          <div className="space-y-4">  
            <div className="flex items-center gap-3">  
              <div className="w-1 h-1 bg-amber-400 rounded-full animate-pulse"></div>  
              <span className="text-[10px] uppercase tracking-widest text-stone-400">Open for Private Consultation</span>  
            </div>  
            <p className="text-xs text-neutral-500 italic font-serif">Response time: ~4 business hours</p>  
          </div>  
        </div>

        <div className="space-y-8 lg:text-right">  
          <span className="text-amber-200/30 text-[10px] uppercase tracking-[0.5em] font-sans">Correspondence</span>  
          <div className="space-y-4">  
            <a href="mailto:daryl.clark@fora.travel" className="block text-stone-300 hover:text-amber-200 transition-colors border-b border-transparent hover:border-amber-200/30 pb-1 text-sm font-sans">  
              daryl.clark@fora.travel  
            </a>  
            <div className="flex gap-6 lg:justify-end text-[10px] uppercase tracking-[0.3em] text-neutral-600 font-sans">  
              <a href="#" className="hover:text-white transition-colors">Instagram</a>  
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>  
            </div>  
          </div>  
        </div>  
      </div>  
        
      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-neutral-900/50 flex flex-col md:flex-row justify-between items-center gap-6 opacity-20 font-sans">  
         <span className="text-[9px] uppercase tracking-[0.5em]">NexVoyage Collective Website Team Engine</span>  
         <span className="text-[9px] font-mono tracking-tighter italic">Lobby.v2.Final_Assembly.2026</span>  
      </div>  
    </footer>  
  </main>  
);  
}  
