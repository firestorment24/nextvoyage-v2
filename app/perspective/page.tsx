import React from 'react';

export default function PerspectivePage() {  
  return (  
    <main className="min-h-screen bg-[#000000] text-[#d4af37] selection:bg-[#d4af37] selection:text-[#000000]">  
      {/* Nuclear Style Fix to force theme consistency */}  
      <style dangerouslySetInnerHTML={{ __html: `  
        body { background-color: #000000 !important; }  
        * { border-color: #d4af371a !important; }  
      `}} />

      {/* Hero Section */}  
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center border-b border-[#d4af3733]">  
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">  
          TRAVEL, PERFECTED.  
        </h1>  
        <p className="text-xl md:text-2xl font-extralight max-w-3xl mx-auto opacity-80 leading-relaxed">  
          The NexVoyage Collective is the expert hand behind every journey—removing the friction of luxury so you can focus on the experience.  
        </p>  
      </section>

      {/* The Guardian Layer */}  
      <section className="py-24 px-6 max-w-7xl mx-auto">  
        <h2 className="text-sm tracking-[0.3em] uppercase mb-12 opacity-60">The Guardian Layer</h2>  
        <div className="grid md:grid-cols-3 gap-12">  
          <div className="space-y-4">  
            <h3 className="text-2xl font-light uppercase">24/7 Support</h3>  
            <p className="font-extralight leading-relaxed opacity-70">  
              We provide around-the-clock flight support. If a disruption occurs, we manage the rescheduling before you even land.  
            </p>  
          </div>  
          <div className="space-y-4">  
            <h3 className="text-2xl font-light uppercase">Resort Credits</h3>  
            <p className="font-extralight leading-relaxed opacity-70">  
              Exclusive amenities, room upgrades, and daily breakfast credits at the world's most prestigious properties.  
            </p>  
          </div>  
          <div className="space-y-4">  
            <h3 className="text-2xl font-light uppercase">Private Transfers</h3>  
            <p className="font-extralight leading-relaxed opacity-70">  
              Seamless doorstep-to-doorstep logistics. Coordinated private chauffeurs that meet you at every transition.  
            </p>  
          </div>  
        </div>  
      </section>

      {/* Specialized Services: Aviation & Villas */}  
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-[#d4af371a]">  
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">  
          <div className="space-y-8">  
            <h2 className="text-4xl font-light uppercase">Private Aviation & <br/>Sanctuary Rentals</h2>  
            <p className="font-extralight text-lg leading-relaxed opacity-80">  
              For travelers who demand total privacy and autonomy. We facilitate private charter flights and secure off-market villas, curated through our global network of exclusive property owners.  
            </p>  
            <ul className="space-y-4 font-light text-sm tracking-widest uppercase">  
              <li className="flex items-center gap-4">  
                <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></span>  
                Bespoke Flight Itineraries  
              </li>  
              <li className="flex items-center gap-4">  
                <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></span>  
                Off-Market Villa Access  
              </li>  
              <li className="flex items-center gap-4">  
                <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></span>  
                Complete Discretion  
              </li>  
            </ul>  
          </div>  
          <div className="aspect-[4/5] bg-[#111] border border-[#d4af3733] grayscale hover:grayscale-0 transition-all duration-700 flex items-center justify-center text-[10px] tracking-[0.5em] uppercase opacity-40">  
            [ Placeholder: High-End Jet/Villa Visual ]  
          </div>  
        </div>  
      </section>

      {/* Partnership Network */}  
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">  
        <h2 className="text-sm tracking-[0.3em] uppercase mb-16 opacity-60">The Collective Network</h2>  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 items-center justify-center opacity-70">  
          <div className="text-xl font-bold tracking-tighter italic">FORA</div>  
          <div className="text-xl font-serif tracking-widest">VIRTUOSO</div>  
          <div className="text-xl uppercase font-light">Singita</div>  
          <div className="text-xl uppercase font-light">Regent</div>  
          <div className="text-xl uppercase font-light">Explora</div>  
          <div className="text-xl uppercase font-light">Silversea</div>  
          <div className="text-xl uppercase font-light">Aman</div>  
          <div className="text-xl uppercase font-light">Belmond</div>  
        </div>  
        <p className="mt-20 text-sm font-extralight max-w-2xl mx-auto opacity-50">  
          Our affiliations grant you VIP status and exclusive leverage across the globe's finest cruise lines, safari concessions, and hotel collections.  
        </p>  
      </section>

      {/* CTA */}  
      <section className="py-32 px-6 text-center border-t border-[#d4af3733]">  
        <a href="/contact" className="inline-block border border-[#d4af37] px-12 py-4 text-sm tracking-[0.4em] uppercase hover:bg-[#d4af37] hover:text-[#000000] transition-all duration-300">  
          Begin Your Journey  
        </a>  
      </section>  
    </main>  
  );  
}  
