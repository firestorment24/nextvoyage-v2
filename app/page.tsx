import React from 'react';  
import Navigation from '@/components/Navigation';

export default function Home() {  
return (  
<>  
  <Navigation />  
  <main className="bg-[#0F0F0F] text-[#E5E5E5] overflow-x-hidden">  
    {/* Hero Section */}  
    <section className="relative h-screen w-full flex items-center justify-center px-8 text-center overflow-hidden">  
      {/* Brand Hero Image - Generated for NexVoyage Home */}  
      <div className="absolute inset-0 z-0">  
        <img   
          src="https://cdn.marblism.com/qFTkeALRTbV.webp"   
          alt="NexVoyage Luxury Expedition"   
          className="h-full w-full object-cover brightness-[0.45] transition-transform duration-[12000ms] scale-110 hover:scale-100"  
        />  
        {/* Brass & Shadow Gradient Overlay */}  
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/70 via-transparent to-[#0F0F0F]" />  
      </div>

      <div className="relative z-10 max-w-5xl space-y-12 animate-fade-in">  
        <p className="font-mono text-[10px] uppercase tracking-[0.7em] text-[#B5A48B] opacity-90">  
          NexVoyage Collective  
        </p>  
          
        <h1 className="serif text-6xl md:text-8xl lg:text-[10rem] font-light tracking-tighter leading-[0.85]">  
          Quiet Luxury. <br />  
          <span className="italic text-white/95">Infinite Perspective.</span>  
        </h1>

        <div className="flex flex-col items-center space-y-14">  
          <p className="max-w-xl text-base md:text-lg font-light text-stone-400 leading-relaxed tracking-wide">  
            Bespoke maritime expeditions and terrestrial sanctuaries <br className="hidden md:block" />   
            curated for the world&apos;s most discerning travelers.  
          </p>  
            
          <div className="pt-6">  
            <a   
              href="/inquiry"   
              className="group relative inline-block px-16 py-7 border border-[#B5A48B]/30 hover:border-[#B5A48B] transition-all duration-700"  
            >  
              <span className="relative z-10 text-[10px] uppercase tracking-[0.5em] text-[#B5A48B] group-hover:text-[#0F0F0F] transition-colors duration-500">  
                Secure Your Perspective  
              </span>  
              <div className="absolute inset-0 bg-[#B5A48B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />  
            </a>  
          </div>  
        </div>  
      </div>

      {/* Scroll Down Hint */}  
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-6 opacity-40">  
        <div className="h-16 w-px bg-gradient-to-b from-[#B5A48B] to-transparent animate-pulse" />  
      </div>  
    </section>

    {/* Manifesto Section */}  
    <section className="py-48 px-8 border-t border-white/5 bg-[#0A0A0A]">  
      <div className="max-w-4xl mx-auto text-center space-y-10">  
        <p className="text-2xl md:text-4xl text-stone-500 font-light italic leading-relaxed serif tracking-tight">  
          &ldquo;The ultimate luxury isn&apos;t access. <br className="hidden md:block" />   
          It is the ability to be inaccessible.&rdquo;  
        </p>  
        <div className="h-px w-20 bg-[#B5A48B]/40 mx-auto" />  
      </div>  
    </section>

    {/* Footer Link */}  
    <section className="py-24 px-8 text-center border-t border-white/5">  
      <a href="/archive" className="group text-[10px] uppercase tracking-[0.4em] text-[#444] hover:text-[#B5A48B] transition-all duration-500">  
        Enter the Archive &mdash; Q2 2026  
      </a>  
    </section>  
  </main>  
</>  
);  
}  
