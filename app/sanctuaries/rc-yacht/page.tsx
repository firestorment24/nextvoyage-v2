'use client'

import React from 'react'

export default function RCYachtPage() {  
return (  
  <div className="min-h-screen bg-black text-zinc-100 font-light selection:bg-[#B5A642]">  
    {/* Fixed Navigation Overlay */}  
    <nav className="fixed w-full p-8 flex justify-between items-center z-50 mix-blend-difference">  
      <div className="text-[10px] tracking-[0.4em] uppercase font-medium">NexVoyage / RC Yacht</div>  
      <a href="/reserve" className="text-[10px] tracking-[0.4em] uppercase border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-all">  
        Reserve  
      </a>  
    </nav>

    {/* Hero Section */}  
    <section className="h-screen relative overflow-hidden">  
      <img   
        src="https://cdn.marblism.com/bezdT4Fs3Bm.webp"   
        alt="RC Yacht Collection"   
        className="w-full h-full object-cover opacity-70"  
      />  
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />  
      <div className="absolute bottom-20 left-10 max-w-4xl">  
        <span className="text-[#B5A642] text-[10px] tracking-[0.6em] uppercase block mb-4">Global Itineraries</span>  
        <h1 className="text-6xl md:text-[10rem] font-extralight tracking-tighter italic leading-[0.8]">  
          RC Yacht <br/> Collection  
        </h1>  
      </div>  
    </section>

    {/* Content Section 01: The Sovereign Sea */}  
    <section className="py-40 px-10 grid grid-cols-1 md:grid-cols-12 gap-20 items-center">  
      <div className="md:col-span-5 md:col-start-2">  
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#B5A642] mb-10">01 / The Sovereign Sea</h2>  
        <p className="text-2xl md:text-3xl font-extralight leading-tight mb-8">  
          A bespoke yachting experience where the world’s most iconic ports are merely a backdrop to your own private enclave.  
        </p>  
        <p className="text-zinc-400 text-sm leading-relaxed max-w-md font-light">  
          The Ritz-Carlton Yacht Collection combines the legendary service of the brand with the freedom of the yachting lifestyle. With nearly as many staff as guests, the level of personalization is unparalleled in the luxury cruise sector.  
        </p>  
      </div>  
      <div className="md:col-span-5 aspect-[4/5] bg-zinc-900 overflow-hidden relative">  
          <div className="absolute inset-0 flex items-center justify-center text-[10px] tracking-widest opacity-20 uppercase">  
              [ Deck & Suite Gallery ]  
          </div>  
      </div>  
    </section>

    {/* Content Section 02: Elite Access */}  
    <section className="py-40 px-10 border-t border-zinc-900">  
      <div className="max-w-6xl mx-auto text-center space-y-16">  
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#B5A642]">02 / The Protocol</h2>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">  
          <div className="space-y-4">  
              <h3 className="text-lg font-light tracking-wide italic">All-Suite Living</h3>  
              <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-widest">Every room is a private terrace suite, ensuring the horizon is always within reach.</p>  
          </div>  
          <div className="space-y-4">  
              <h3 className="text-lg font-light tracking-wide italic">Shore Collection</h3>  
              <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-widest">Curated, small-group excursions designed for those who have seen it all.</p>  
          </div>  
          <div className="space-y-4">  
              <h3 className="text-lg font-light tracking-wide italic">The Marina</h3>  
              <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-widest">Direct access to the ocean from the back of the yacht for private swimming and watersports.</p>  
          </div>  
        </div>  
      </div>  
    </section>

    {/* CTA Section */}  
    <section className="py-60 px-10 text-center bg-zinc-100 text-black">  
      <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter mb-10">Chart Your Course</h2>  
      <p className="text-[10px] uppercase tracking-[0.5em] mb-12 opacity-60">Reserved for the NexVoyage Collective</p>  
      <a href="/reserve" className="inline-block border border-black px-12 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all">  
        Inquire Now  
      </a>  
    </section>

    <footer className="p-10 text-[9px] uppercase tracking-[0.4em] opacity-30 flex justify-between">  
      <div>NexVoyage Collective // Global</div>  
      <div>EST. 2026</div>  
    </footer>  
  </div>  
)  
}  
