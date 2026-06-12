import React from 'react';  
import Link from 'next/link';

// Simple Inline SVGs for the build  
const Icons = {  
  ArrowRight: () => (  
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>  
  ),  
  Globe: () => (  
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>  
  )  
};

export default function TheLobby() {  
  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-white selection:text-black flex flex-col">  
        
      {/* Cinematic Hero Section */}  
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6">  
        {/* Subtle Background Texture/Overlay */}  
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none" />  
          
        <div className="space-y-8 max-w-4xl animate-in fade-in duration-1000">  
          <p className="text-[10px] uppercase tracking-[0.6em] text-white/40 mb-4">  
            NexVoyage Collective // Private travel intelligence  
          </p>  
            
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-white leading-[0.9]">  
            The ROI of <span className="italic font-serif">Reset.</span>  
          </h1>  
            
          <p className="text-sm md:text-lg text-white/50 max-w-xl mx-auto font-light leading-relaxed tracking-wide">  
            We eliminate the friction of world travel for the modern executive.   
            High-touch logistics. Absolute discretion. Unrivaled access.  
          </p>

          <div className="pt-8">  
            <Link   
              href="/manifest"   
              className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black text-xs uppercase tracking-[0.3em] hover:bg-transparent hover:text-white border border-white transition-all duration-500 group"  
            >  
              Access The Manifest  
              <span className="group-hover:translate-x-2 transition-transform duration-300">  
                <Icons.ArrowRight />  
              </span>  
            </Link>  
          </div>  
        </div>

        {/* Floating Status Ticker */}  
        <div className="absolute bottom-12 left-0 right-0 px-8 flex justify-between items-end border-t border-white/5 pt-8 max-w-7xl mx-auto w-full">  
          <div className="space-y-1">  
            <p className="text-[9px] uppercase tracking-widest text-white/20">Active Assets</p>  
            <div className="flex gap-4 text-[10px] tracking-widest text-white/40 font-mono">  
              <span>SV-01 // MALDIVES [ACTIVE]</span>  
              <span>SV-02 // NEW YORK [ACTIVE]</span>  
              <span>SV-03 // TUSCANY [ACTIVE]</span>  
            </div>  
          </div>  
            
          <div className="hidden md:flex items-center gap-2 text-[9px] uppercase tracking-[0.4em] text-white/20">  
            <Icons.Globe /> Global Operations // 24.7.365  
          </div>  
        </div>  
      </section>

      {/* Philosophy Preview / The Mandate */}  
      <section className="py-32 px-8 border-t border-white/10 bg-[#0c0c0c]">  
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">  
          <div className="space-y-6">  
            <h2 className="text-3xl font-light tracking-tight text-white">  
              The Mandate  
            </h2>  
            <p className="text-white/40 leading-relaxed text-sm max-w-md">  
              Our philosophy is simple: Travel should be a multiplier, not a drain. We provide the "Guardian Layer" that secures your time and energy, allowing for true recovery.  
            </p>  
            <Link href="/mandate" className="inline-block text-[10px] uppercase tracking-widest text-white/60 hover:text-white border-b border-white/10 pb-1">  
              Read Our Philosophy  
            </Link>  
          </div>  
            
          <div className="grid grid-cols-2 gap-4">  
            <div className="h-64 bg-white/5 border border-white/10 flex items-center justify-center">  
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">Seclusion</p>  
            </div>  
            <div className="h-64 bg-white/5 border border-white/10 flex items-center justify-center">  
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">Security</p>  
            </div>  
          </div>  
        </div>  
      </section>

    </main>  
  );  
}  
