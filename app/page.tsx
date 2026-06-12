import React from 'react';  
import Navigation from '@/components/Navigation';

export default function Home() {  
return (  
  <main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-amber-200/20">  
    {/* Global Navigation - Now matching all other pages */}  
    <Navigation />  
      
    {/* HERO SECTION */}  
    <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6">  
      {/* Cinematic Hero Image Background */}  
      <div className="absolute inset-0 z-0">  
        <img   
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000"   
          alt="Cinematic luxury landscape"   
          className="w-full h-full object-cover opacity-40 grayscale"  
        />  
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />  
      </div>

      <div className="relative z-10 space-y-8 max-w-5xl">  
        <div className="space-y-4">  
          <span className="text-amber-200/60 uppercase tracking-[0.5em] text-[10px] md:text-xs block animate-pulse">  
            Arrival & Overview  
          </span>  
          <h1 className="text-5xl md:text-8xl font-serif text-white italic tracking-tight leading-none">  
            Architecting Silence  
          </h1>  
        </div>  
          
        <p className="text-lg md:text-2xl text-neutral-400 font-serif italic max-w-2xl mx-auto leading-relaxed">  
          "The ultimate luxury isn't access. It is the ability to be inaccessible."  
        </p>

        <div className="pt-10">  
          <a href="/inquiry" className="inline-block px-10 py-4 border border-amber-200/20 text-amber-200/80 uppercase tracking-[0.4em] text-[10px] hover:bg-white hover:text-black transition-all duration-700">  
            Secure Your Perspective  
          </a>  
        </div>  
      </div>  
    </section>

    {/* THE ELITE LEDGER PREVIEW */}  
    <section className="max-w-7xl mx-auto px-6 py-32 border-t border-neutral-900">  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">  
        <div className="space-y-8">  
          <span className="text-amber-200/40 uppercase tracking-[0.4em] text-xs">The Manifest</span>  
          <h2 className="text-4xl md:text-6xl font-serif text-white italic">The Elite Ledger</h2>  
          <p className="text-neutral-400 text-lg leading-relaxed font-light italic">  
            A private registry of the world’s most secluded estates and silent vessels. Curated for those who value the return on stillness as much as the return on investment.  
          </p>  
          <div className="pt-4">  
             <a href="/archive" className="text-amber-200/60 text-xs uppercase tracking-widest border-b border-amber-200/10 pb-2 hover:text-white hover:border-white transition-all">  
               View the Registry  
             </a>  
          </div>  
        </div>  
          
        {/* Visual representation of the Ledger */}  
        <div className="grid grid-cols-2 gap-4">  
          <div className="aspect-[3/4] bg-neutral-900 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">  
             <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800" className="object-cover w-full h-full opacity-60" alt="Villa" />  
          </div>  
          <div className="aspect-[3/4] bg-neutral-900 mt-12 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">  
             <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800" className="object-cover w-full h-full opacity-60" alt="Resort" />  
          </div>  
        </div>  
      </div>  
    </section>

    {/* THE SILENT ROI (PERSPECTIVE) SECTION */}  
    <section className="bg-neutral-900/30 py-40 px-6">  
      <div className="max-w-4xl mx-auto text-center space-y-12">  
        <h3 className="text-amber-200/40 uppercase tracking-[0.4em] text-xs">The Mandate</h3>  
        <h2 className="text-4xl md:text-7xl font-serif text-white italic leading-tight">  
          The Silent ROI  
        </h2>  
        <p className="text-neutral-400 text-xl md:text-2xl font-serif italic leading-relaxed">  
          In a world of constant noise, we prioritize the invisible mechanics of travel. No loud signatures. No public access. Just seamless, hushed logistics.  
        </p>  
        <div className="pt-8">  
           <a href="/perspective" className="inline-block px-12 py-5 bg-white text-black text-[10px] uppercase tracking-[0.4em] hover:bg-amber-100 transition-colors">  
             Read Our Philosophy  
           </a>  
        </div>  
      </div>  
    </section>

    {/* FOOTER - Matching the rest of the site's hushed aesthetic */}  
    <footer className="py-20 border-t border-neutral-900 px-6 bg-black">  
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">  
        <div className="space-y-4">  
          <h4 className="text-white font-serif italic text-2xl">NexVoyage Collective</h4>  
          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-600">The Website Engine</p>  
        </div>  
          
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">  
          <div className="space-y-4">  
            <span className="text-amber-200/20 text-[10px] uppercase tracking-widest">Connect</span>  
            <ul className="text-xs space-y-2 text-neutral-400">  
              <li><a href="mailto:daryl.clark@fora.travel" className="hover:text-amber-200 transition-colors">daryl.clark@fora.travel</a></li>  
              <li><a href="#" className="hover:text-amber-200 transition-colors">Instagram</a></li>  
              <li><a href="#" className="hover:text-amber-200 transition-colors">LinkedIn</a></li>  
            </ul>  
          </div>  
          <div className="space-y-4">  
            <span className="text-amber-200/20 text-[10px] uppercase tracking-widest">Legal</span>  
            <ul className="text-xs space-y-2 text-neutral-400 font-mono tracking-tighter">  
              <li>MMXXVI | ESTD</li>  
              <li>PRIVACY REGISTERED</li>  
            </ul>  
          </div>  
        </div>  
      </div>  
    </footer>  
  </main>  
);  
}  
