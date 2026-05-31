"use client";

import React from "react";

export default function Homepage() {  
  return (  
    <main className="bg-black text-white selection:bg-white/20 overflow-x-hidden">  
      {/*   
        INLINE CSS FOR ANIMATIONS   
        Keeping it simple to avoid external dependencies.  
      */}  
      <style jsx global>{`  
        @keyframes fadeInBlur {  
          0% { opacity: 0; filter: blur(10px); transform: translateY(10px); }  
          100% { opacity: 1; filter: blur(0px); transform: translateY(0); }  
        }  
        @keyframes letterSpacingIn {  
          0% { letter-spacing: 0.1em; opacity: 0; }  
          100% { letter-spacing: 0.5em; opacity: 1; }  
        }  
        @keyframes growLine {  
          0% { height: 0; opacity: 0; }  
          100% { height: 80px; opacity: 0.5; }  
        }  
        .animate-fade-blur { animation: fadeInBlur 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }  
        .animate-tracking { animation: letterSpacingIn 2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }  
        .animate-grow-line { animation: growLine 2s 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }  
      `}</style>

      {/* Cinematic Hero */}  
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">  
        {/* Grain Overlay for Texture */}  
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />  
          
        <div className="container mx-auto px-6 z-20 text-center">  
          <p className="animate-tracking uppercase text-[10px] mb-8 text-neutral-500 font-sans tracking-[0.5em] opacity-0">  
            NexVoyage Collective  
          </p>  
            
          <h1 className="animate-fade-blur font-serif text-5xl md:text-8xl leading-tight mb-12 opacity-0" style={{ animationDelay: '0.4s' }}>  
            Curating the <br />  
            <span className="italic">Unreachable.</span>  
          </h1>  
            
          <div className="flex justify-center">  
            <div className="animate-grow-line w-[1px] bg-gradient-to-b from-white/0 via-white to-white/0 opacity-0" />  
          </div>  
        </div>

        {/* Hero Background Image */}  
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30 grayscale scale-105" />  
      </section>

      {/* Narrative Section: The Silent ROI */}  
      <section className="py-32 bg-neutral-950 border-y border-white/5">  
        <div className="container mx-auto px-6 max-w-4xl">  
          <div className="transition-all duration-1000">  
            <h2 className="font-serif text-3xl md:text-5xl mb-16 text-center leading-relaxed">  
              In an era of loud luxury, we prioritize the <span className="italic text-neutral-400">whisper</span>.  
            </h2>  
            <div className="grid md:grid-cols-2 gap-20 items-start">  
              <p className="font-sans text-neutral-400 leading-relaxed text-[11px] uppercase tracking-[0.2em]">  
                Our philosophy is built on the ROI of Reset. We don't just find rooms; we curate sanctuaries where time slows down and privacy is the ultimate currency.  
              </p>  
              <p className="font-serif text-xl text-neutral-300 italic border-l border-white/10 pl-8">  
                “True wealth is the ability to disappear without being missed, and return without being exhausted.”  
              </p>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* The Sanctuaries: Asymmetrical Grid */}  
      <section className="py-40 bg-black">  
        <div className="container mx-auto px-6">  
          <div className="flex justify-between items-end mb-24 border-b border-white/10 pb-8">  
            <h3 className="font-serif text-4xl italic">The Sanctuaries</h3>  
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-neutral-500">Edition 2026/01</p>  
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">  
            {/* Sanctuary 1 */}  
            <div className="md:col-span-7 group cursor-pointer">  
              <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-neutral-900 border border-white/5">  
                <img   
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1500"   
                  alt="Zen Spa Sanctuary"  
                  className="object-cover w-full h-full grayscale opacity-60 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"  
                />  
              </div>  
              <div className="flex justify-between items-start">  
                <div>  
                  <p className="font-sans text-[9px] uppercase tracking-widest text-neutral-500 mb-2">Aman / Kyoto</p>  
                  <h4 className="font-serif text-2xl group-hover:italic transition-all duration-500">The Forest Floor Pavilion</h4>  
                </div>  
                <div className="h-[1px] w-12 bg-white/20 mt-4" />  
              </div>  
            </div>

            {/* Sanctuary 2 */}  
            <div className="md:col-span-4 md:col-start-9 md:pt-32 group cursor-pointer">  
              <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-neutral-900 border border-white/5">  
                <img   
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000"   
                  alt="Minimalist Architecture"  
                  className="object-cover w-full h-full grayscale opacity-60 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"  
                />  
              </div>  
              <div>  
                <p className="font-sans text-[9px] uppercase tracking-widest text-neutral-500 mb-2">Soneva / Jani</p>  
                <h4 className="font-serif text-2xl group-hover:italic transition-all duration-500">Over-Water Obsidian</h4>  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Bottom CTA: The Vetting Standard */}  
      <section className="py-52 bg-neutral-50 text-black text-center relative overflow-hidden">  
        {/* Subtle texture for the white section */}  
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />  
          
        <div className="container mx-auto px-6 relative z-10">  
          <h2 className="font-serif text-5xl md:text-8xl mb-16 leading-none">Entry is not <br /> <span className="italic">guaranteed.</span></h2>  
          <p className="max-w-md mx-auto font-sans text-[10px] uppercase tracking-[0.4em] mb-16 text-neutral-500 leading-loose">  
            Membership is restricted to individuals who align with our vetting standard of discretion and intent.  
          </p>  
          <button className="border border-black px-16 py-5 font-sans text-[10px] uppercase tracking-[0.6em] hover:bg-black hover:text-white transition-all duration-500">  
            Begin the Vetting  
          </button>  
        </div>  
      </section>  
    </main>  
  );  
}  
