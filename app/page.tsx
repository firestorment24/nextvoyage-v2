import React from 'react';  
import Navigation from '@/components/Navigation';

export default function Home() {  
return (  
<main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-amber-200/20">  
  {/* Consistent Site Header */}  
  <Navigation />  
    
  {/* HERO SECTION: THE FIRST IMPRESSION */}  
  <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">  
    {/* High-Impact Modern Luxury Hero Image */}  
    <div className="absolute inset-0 z-0">  
      <img   
        src="https://images.unsplash.com/photo-1600607687940-4e524cb35a36?q=80&w=2000&auto=format&fit=crop"   
        alt="Modern Architectural Masterpiece"   
        className="w-full h-full object-cover opacity-60 grayscale-[20%] brightness-[0.7]"  
      />  
      {/* Sophisticated Vignette and Gradient Overlay */}  
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/60" />  
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />  
    </div>

    <div className="relative z-10 space-y-8 max-w-5xl">  
      <div className="space-y-6">  
        <span className="text-amber-200/60 uppercase tracking-[0.6em] text-[10px] md:text-xs block animate-fade-in font-medium">  
          Arrival & Overview  
        </span>  
        <h1 className="text-6xl md:text-[9vw] font-serif text-white italic tracking-tighter leading-[0.85] drop-shadow-2xl">  
          Inaccessible <br />  
          <span className="text-amber-200/90">by Design.</span>  
        </h1>  
      </div>  
        
      <p className="text-xl md:text-2xl text-neutral-300 font-serif italic max-w-2xl mx-auto leading-relaxed opacity-90">  
        "The ultimate luxury isn't access. It is the ability to be inaccessible."  
      </p>

      <div className="pt-12 flex flex-col items-center gap-6">  
        <a href="/inquiry" className="group relative inline-block px-12 py-5 bg-white text-black text-[11px] uppercase tracking-[0.5em] transition-all duration-500 hover:bg-amber-200">  
          Secure Your Perspective  
          <div className="absolute inset-0 border border-white/20 translate-x-2 translate-y-2 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>  
        </a>  
        <div className="flex items-center gap-4 opacity-30">  
          <div className="h-px w-12 bg-amber-200"></div>  
          <span className="text-[10px] uppercase tracking-[0.3em]">The Elite Ledger Registry</span>  
          <div className="h-px w-12 bg-amber-200"></div>  
        </div>  
      </div>  
    </div>  
      
    {/* Subtle Ambient Scroll Hint */}  
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">  
       <div className="w-px h-16 bg-gradient-to-b from-amber-200 to-transparent"></div>  
    </div>  
  </section>

  {/* THE ELITE LEDGER: THE MANIFEST */}  
  <section className="max-w-7xl mx-auto px-6 py-40">  
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">  
      <div className="space-y-12">  
        <div className="space-y-4">  
          <span className="text-amber-200/40 uppercase tracking-[0.4em] text-[10px]">The Manifest</span>  
          <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-none">The Elite Ledger</h2>  
        </div>  
        <p className="text-neutral-400 text-xl leading-relaxed font-light italic border-l-2 border-amber-200/10 pl-8">  
          A private registry of the world’s most secluded estates and silent vessels. Curated for those who value the return on stillness as much as the return on investment.  
        </p>  
        <div className="pt-4">  
           <a href="/archive" className="group text-amber-200/60 text-xs uppercase tracking-widest inline-flex items-center gap-4 hover:text-white transition-all">  
             Explore the Registry  
             <span className="h-px w-8 bg-amber-200/20 group-hover:w-16 transition-all duration-500"></span>  
           </a>  
        </div>  
      </div>  
        
      {/* Editorial Curation Visual */}  
      <div className="relative">  
        <div className="aspect-[4/5] bg-neutral-900 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">  
           <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200" className="object-cover w-full h-full opacity-70" alt="Private Curation" />  
        </div>  
        <div className="absolute -bottom-12 -left-12 aspect-square w-64 bg-neutral-950 border border-neutral-900 p-8 hidden md:flex flex-col justify-between">  
           <span className="text-amber-200/20 font-mono text-[10px]">LDR-001</span>  
           <p className="text-xs italic text-neutral-500">Currently Holding: Private Atoll, South Pacific</p>  
        </div>  
      </div>  
    </div>  
  </section>

  {/* THE SILENT ROI: PHILOSOPHY */}  
  <section className="bg-neutral-900/20 py-48 px-6 border-y border-neutral-900/50">  
    <div className="max-w-4xl mx-auto text-center space-y-16">  
      <div className="space-y-4">  
        <h3 className="text-amber-200/40 uppercase tracking-[0.5em] text-[10px]">The Mandate</h3>  
        <h2 className="text-5xl md:text-[6vw] font-serif text-white italic leading-tight">  
          The Silent ROI  
        </h2>  
      </div>  
      <p className="text-neutral-400 text-2xl md:text-3xl font-serif italic leading-relaxed font-light">  
        "In an era of relentless visibility, true luxury is the invisible mechanics of a journey that moves without a sound."  
      </p>  
      <div className="pt-8">  
         <a href="/perspective" className="inline-block px-12 py-5 border border-amber-200/20 text-amber-200/80 text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-700">  
           Read Our Philosophy  
         </a>  
      </div>  
    </div>  
  </section>

  {/* FOOTER */}  
  <footer className="py-24 border-t border-neutral-900 px-6 bg-black">  
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">  
      <div className="space-y-6">  
        <h4 className="text-white font-serif italic text-3xl">NexVoyage Collective</h4>  
        <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-600">Established MMXXVI | Fora Travel Partner</p>  
      </div>  
        
      <div className="flex flex-col md:flex-row gap-16 md:gap-32">  
        <div className="space-y-6">  
          <span className="text-amber-200/30 text-[10px] uppercase tracking-[0.4em]">Inquiries</span>  
          <ul className="text-sm space-y-3 text-neutral-400 font-light">  
            <li><a href="mailto:daryl.clark@fora.travel" className="hover:text-amber-200 transition-colors border-b border-transparent hover:border-amber-200/30">daryl.clark@fora.travel</a></li>  
            <li><span className="opacity-40">Private Consultation Only</span></li>  
          </ul>  
        </div>  
        <div className="space-y-6">  
          <span className="text-amber-200/30 text-[10px] uppercase tracking-[0.4em]">Social</span>  
          <ul className="text-sm space-y-3 text-neutral-400 font-light">  
            <li><a href="#" className="hover:text-amber-200 transition-colors">Instagram</a></li>  
            <li><a href="#" className="hover:text-amber-200 transition-colors">LinkedIn</a></li>  
          </ul>  
        </div>  
      </div>  
    </div>  
      
    <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-neutral-900/50 flex justify-between items-center opacity-20">  
       <span className="text-[9px] uppercase tracking-[0.4em]">All Rights Reserved</span>  
       <span className="text-[9px] font-mono">00:00:26:06</span>  
    </div>  
  </footer>  
</main>  
);  
}  
