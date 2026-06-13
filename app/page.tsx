import React from 'react';  
import Navigation from '@/components/Navigation';

export default function Home() {  
return (  
  <>  
    <Navigation />  
    <main className="bg-[#0F0F0F] text-[#E5E5E5] overflow-x-hidden">  
      {/* Hero Section */}  
      <section className="relative h-screen w-full flex items-center justify-center px-8 text-center overflow-hidden">  
        {/* Hero Background Image - Using the Pelorus Yacht asset from our archive */}  
        <div className="absolute inset-0 z-0">  
          <img   
            src="/assets/archive/3ZzEY41j2NO.webp"   
            alt="NexVoyage Luxury Expedition"   
            className="h-full w-full object-cover brightness-[0.4] transition-transform duration-[10000ms] scale-110 hover:scale-100"  
          />  
          {/* Brass & Shadow Gradient Overlay */}  
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/60 via-[#0F0F0F]/20 to-[#0F0F0F]" />  
        </div>

        <div className="relative z-10 max-w-5xl space-y-10 animate-fade-in">  
          <p className="font-mono text-[10px] uppercase tracking-[0.6em] text-[#B5A48B] opacity-80">  
            NexVoyage Collective  
          </p>  
            
          <h1 className="serif text-5xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[1.1] md:leading-[0.9]">  
            Quiet Luxury. <br />  
            <span className="italic text-white/90">Infinite Perspective.</span>  
          </h1>

          <div className="flex flex-col items-center space-y-12">  
            <p className="max-w-xl text-base md:text-lg font-light text-stone-400 leading-relaxed tracking-wide">  
              Bespoke maritime expeditions and terrestrial sanctuaries <br className="hidden md:block" />   
              curated for the world&apos;s most discerning travelers.  
            </p>  
              
            <div className="pt-4">  
              <a   
                href="/inquiry"   
                className="group relative inline-block px-16 py-6 border border-[#B5A48B]/30 hover:border-[#B5A48B] transition-all duration-700"  
              >  
                <span className="relative z-10 text-[10px] uppercase tracking-[0.5em] text-[#B5A48B] group-hover:text-[#0F0F0F] transition-colors duration-500">  
                  Secure Your Perspective  
                </span>  
                <div className="absolute inset-0 bg-[#B5A48B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />  
              </a>  
            </div>  
          </div>  
        </div>

        {/* Scroll Indicator */}  
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-30">  
          <div className="h-12 w-px bg-gradient-to-b from-[#B5A48B] to-transparent" />  
        </div>  
      </section>

      {/* Philosophy Section */}  
      <section className="py-40 px-8 border-t border-white/5 bg-[#0A0A0A]">  
        <div className="max-w-4xl mx-auto text-center space-y-8">  
          <p className="text-2xl md:text-3xl text-stone-500 font-light italic leading-relaxed serif tracking-tight">  
            &ldquo;The ultimate luxury isn&apos;t access. <br className="hidden md:block" />   
            It is the ability to be inaccessible.&rdquo;  
          </p>  
          <div className="h-px w-16 bg-[#B5A48B]/40 mx-auto" />  
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#444]">  
            Our Manifesto  
          </p>  
        </div>  
      </section>

      {/* Footer Navigation Trigger */}  
      <section className="py-24 px-8 text-center border-t border-white/5">  
        <a href="/archive" className="group text-[10px] uppercase tracking-[0.3em] text-[#555] hover:text-[#B5A48B] transition-all duration-500 flex flex-col items-center space-y-4">  
          <span>Enter the Archive</span>  
          <span className="text-[8px] text-stone-700 group-hover:text-[#B5A48B]/50 transition-colors">Q2 2026 Portfolio</span>  
        </a>  
      </section>  
    </main>  
  </>  
);  
}  
