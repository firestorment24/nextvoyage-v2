'use client'

import React from 'react'

export default function MaybournePage() {  
  return (  
    <div className="min-h-screen bg-black text-zinc-100 font-light selection:bg-[#B5A642]">  
      {/* Fixed Navigation Overlay */}  
      <nav className="fixed w-full p-8 flex justify-between items-center z-50 mix-blend-difference">  
        <div className="text-[10px] tracking-[0.4em] uppercase font-medium">NexVoyage / Maybourne</div>  
        <a href="/reserve" className="text-[10px] tracking-[0.4em] uppercase border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-all">  
          Reserve  
        </a>  
      </nav>

      {/* Hero Section */}  
      <section className="h-screen relative overflow-hidden">  
        <img   
          src="https://cdn.marblism.com/QaCq5-bi5FE.webp"   
          alt="The Maybourne Riviera"   
          className="w-full h-full object-cover opacity-80"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />  
        <div className="absolute bottom-20 left-10 max-w-4xl">  
          <span className="text-[#B5A642] text-[10px] tracking-[0.6em] uppercase block mb-4">Roquebrune-Cap-Martin, France</span>  
          <h1 className="text-6xl md:text-[10rem] font-extralight tracking-tighter italic leading-[0.8]">  
            Maybourne <br/> Riviera  
          </h1>  
        </div>  
      </section>

      {/* Content Section 01: The Vantage */}  
      <section className="py-40 px-10 grid grid-cols-1 md:grid-cols-12 gap-20 items-center">  
        <div className="md:col-span-5 md:col-start-2">  
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#B5A642] mb-10">01 / The Vantage</h2>  
          <p className="text-2xl md:text-3xl font-extralight leading-tight mb-8">  
            Suspended 1,000 feet above the Mediterranean, the Maybourne isn't just a hotel—it's a gravity-defying statement of intent.  
          </p>  
          <p className="text-zinc-400 text-sm leading-relaxed max-w-md font-light">  
            Every room offers an unobstructed horizon. Here, the French Riviera is stripped of its noise, leaving only the sound of the sea and the absolute privacy required by the Collective's elite members.  
          </p>  
        </div>  
        <div className="md:col-span-5 aspect-square bg-zinc-900 overflow-hidden">  
            <div className="w-full h-full flex items-center justify-center text-[10px] tracking-widest opacity-20 uppercase">  
                [ Interior Gallery ]  
            </div>  
        </div>  
      </section>

      {/* Content Section 02: The Experience */}  
      <section className="py-40 px-10 border-t border-zinc-900">  
        <div className="max-w-6xl mx-auto text-center space-y-16">  
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#B5A642]">02 / The Protocol</h2>  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">  
            <div className="space-y-4">  
                <h3 className="text-lg font-light tracking-wide italic">Arrival</h3>  
                <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-widest">Private heliport access from Nice or Monaco for seamless transition.</p>  
            </div>  
            <div className="space-y-4">  
                <h3 className="text-lg font-light tracking-wide italic">Gastronomy</h3>  
                <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-widest">Mauro Colagreco's Ceto, where the menu is dictated by the depth of the ocean.</p>  
            </div>  
            <div className="space-y-4">  
                <h3 className="text-lg font-light tracking-wide italic">Discretion</h3>  
                <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-widest">Enclave-style layout ensuring zero cross-traffic with other guests.</p>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* CTA Section */}  
      <section className="py-60 px-10 text-center bg-zinc-100 text-black">  
        <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter mb-10">Secure the Horizon</h2>  
        <p className="text-[10px] uppercase tracking-[0.5em] mb-12 opacity-60">Availability is restricted to the NexVoyage Collective</p>  
        <a href="/reserve" className="inline-block border border-black px-12 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all">  
          Inquire Now  
        </a>  
      </section>

      <footer className="p-10 text-[9px] uppercase tracking-[0.4em] opacity-30 flex justify-between">  
        <div>NexVoyage Collective // France</div>  
        <div>EST. 2026</div>  
      </footer>  
    </div>  
  )  
}  
