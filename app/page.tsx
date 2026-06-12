import React from 'react';  
import Navigation from '@/components/Navigation';

export default function Home() {  
return (  
<main className="min-h-screen bg-black text-stone-300 selection:bg-[#D4AF37]/20 font-sans selection:text-white">  
  {/* Unified Brass & Shadow Navigation */}  
  <Navigation />  
    
  {/* HERO SECTION: THE ENTRY */}  
  <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">  
    {/* Cinematic Background with Shadow Gradients */}  
    <div className="absolute inset-0 z-0">  
      <img   
        src="https://images.unsplash.com/photo-1600607687940-4e524cb35a36?q=80&w=2000&auto=format&fit=crop"   
        alt="Modern Arrival"   
        className="w-full h-full object-cover opacity-50 grayscale brightness-[0.5]"  
      />  
      {/* Heavy Shadow Overlays */}  
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />  
      <div className="absolute inset-0 bg-black/20" />  
    </div>

    <div className="relative z-10 space-y-10 max-w-6xl">  
      <div className="space-y-6">  
        <span className="text-[#D4AF37] uppercase tracking-[0.7em] text-[10px] md:text-xs block font-medium opacity-80">  
          Arrival & Overview  
        </span>  
        <h1 className="text-6xl md:text-[9vw] font-serif text-white italic tracking-tighter leading-[0.8] drop-shadow-2xl">  
          Inaccessible <br />  
          <span className="text-[#D4AF37] font-serif">by Design.</span>  
        </h1>  
      </div>  
        
      <p className="text-xl md:text-2xl text-stone-400 font-serif italic max-w-2xl mx-auto leading-relaxed">  
        "The ultimate luxury isn't access. It is the ability to be inaccessible."  
      </p>

      <div className="pt-14">  
        <a href="/inquiry" className="group relative inline-block px-14 py-6 bg-[#D4AF37] text-black text-[11px] uppercase tracking-[0.5em] transition-all duration-700 hover:bg-white hover:scale-105 font-bold">  
          Secure Your Perspective  
        </a>  
      </div>  
    </div>  
      
    {/* Brass Scroll Indicator */}  
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-40">  
       <div className="flex flex-col items-center gap-4">  
         <span className="text-[9px] uppercase tracking-[0.4em] font-sans text-[#D4AF37]">Enter</span>  
         <div className="w-px h-16 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>  
       </div>  
    </div>  
  </section>

  {/* THE ELITE LEDGER: BRASS ACCENTS */}  
  <section className="max-w-7xl mx-auto px-6 py-56">  
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">  
      <div className="space-y-14">  
        <div className="space-y-4">  
          <span className="text-[#D4AF37]/50 uppercase tracking-[0.5em] text-[10px] font-sans font-semibold">The Manifest</span>  
          <h2 className="text-5xl md:text-8xl font-serif text-white italic leading-[0.9]">The Elite Ledger</h2>  
        </div>  
        <p className="text-stone-400 text-2xl leading-relaxed font-serif italic border-l border-[#D4AF37]/20 pl-12 py-2">  
          A private registry of the world’s most secluded estates and silent vessels. Curated for those who value the return on stillness.  
        </p>  
        <div className="pt-6">  
           <a href="/archive" className="group text-[#D4AF37] text-xs uppercase tracking-[0.3em] inline-flex items-center gap-8 hover:text-white transition-all font-sans font-bold">  
             Review the Dossiers  
             <span className="h-px w-16 bg-[#D4AF37]/30 group-hover:w-24 transition-all duration-700 group-hover:bg-[#D4AF37]"></span>  
           </a>  
        </div>  
      </div>  
        
      {/* Visual Shadow Component */}  
      <div className="relative group">  
        <div className="aspect-[4/5] bg-[#111] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-[1500ms] ease-out shadow-[0_0_50px_rgba(0,0,0,0.5)]">  
           <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200" className="object-cover w-full h-full opacity-60 group-hover:opacity-90 transition-all duration-[2000ms]" alt="Elite Registry" />  
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />  
        </div>  
        <div className="absolute -bottom-12 -left-12 aspect-square w-72 bg-black border border-[#D4AF37]/10 p-10 hidden xl:flex flex-col justify-between shadow-2xl z-20 transition-transform group-hover:-translate-y-4 duration-1000">  
           <span className="text-[#D4AF37]/40 font-mono text-[10px] tracking-tighter">REF: LDR-VXV-001</span>  
           <div className="space-y-3">  
             <p className="text-sm italic text-white font-serif tracking-wide">Holding: Private Atoll</p>  
             <div className="h-px w-full bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />  
             <p className="text-[9px] uppercase tracking-widest text-[#D4AF37]/60 font-sans">Availability: Restricted</p>  
           </div>  
        </div>  
      </div>  
    </div>  
  </section>

  {/* THE SILENT ROI: THE MANDATE */}  
  <section className="bg-gradient-to-b from-black to-[#050505] py-64 px-6 border-y border-[#D4AF37]/5">  
    <div className="max-w-4xl mx-auto text-center space-y-24">  
      <div className="space-y-6">  
        <h3 className="text-[#D4AF37]/40 uppercase tracking-[0.7em] text-[10px] font-sans font-bold">The Mandate</h3>  
        <h2 className="text-6xl md:text-[8vw] font-serif text-white italic leading-none">  
          The Silent ROI  
        </h2>  
      </div>  
      <p className="text-stone-300 text-2xl md:text-5xl font-serif italic leading-[1.3] font-light px-4">  
        "The invisible mechanics of a journey that moves without a sound."  
      </p>  
      <div className="pt-10">  
         <a href="/perspective" className="inline-block px-16 py-7 border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-700 font-bold">  
           Our Perspective  
         </a>  
      </div>  
    </div>  
  </section>

  {/* FOOTER: SHADOW */}  
  <footer className="py-24 border-t border-[#D4AF37]/10 px-6 bg-black">  
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">  
      <div className="space-y-10">  
        <h4 className="text-white font-serif italic text-4xl">NexVoyage Collective</h4>  
        <p className="text-[11px] uppercase tracking-[0.6em] text-neutral-700 leading-loose">  
          Established MMXXVI <br />   
          Exclusive Website Engine  
        </p>  
      </div>  
        
      <div className="space-y-10">  
        <span className="text-[#D4AF37]/40 text-[10px] uppercase tracking-[0.5em] font-sans font-bold">Registry Status</span>  
        <div className="space-y-6">  
          <div className="flex items-center gap-4">  
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37]"></div>  
            <span className="text-[11px] uppercase tracking-[0.4em] text-white">Active Consultation</span>  
          </div>  
          <p className="text-sm text-stone-500 italic font-serif leading-relaxed">Inquiries are currently being processed for the Q3 fiscal cycle.</p>  
        </div>  
      </div>

      <div className="space-y-10 lg:text-right">  
        <span className="text-[#D4AF37]/40 text-[10px] uppercase tracking-[0.5em] font-sans font-bold">Correspondence</span>  
        <div className="space-y-6">  
          <a href="mailto:daryl.clark@fora.travel" className="block text-white hover:text-[#D4AF37] transition-colors border-b border-white/10 hover:border-[#D4AF37] pb-2 text-base font-sans tracking-wide">  
            daryl.clark@fora.travel  
          </a>  
          <div className="flex gap-10 lg:justify-end text-[11px] uppercase tracking-[0.4em] text-neutral-600 font-sans font-bold">  
            <a href="#" className="hover:text-white transition-colors">IG</a>  
            <a href="#" className="hover:text-white transition-colors">LI</a>  
          </div>  
        </div>  
      </div>  
    </div>  
      
    <div className="max-w-7xl mx-auto mt-40 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-20 font-sans">  
       <span className="text-[10px] uppercase tracking-[0.6em] text-white">NexVoyage Collective MMXXVI</span>  
       <span className="text-[10px] font-mono tracking-[0.2em] italic uppercase text-[#D4AF37]">Access Level: Executive</span>  
    </div>  
  </footer>  
</main>  
);  
}  
