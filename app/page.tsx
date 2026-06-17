import Navigation from '@/components/Navigation';  
import Footer from '@/components/Footer';  
import { ArrowRight, Map, Compass, Shield } from 'lucide-react';

export default function HomePage() {  
  return (  
    <main className="min-h-screen bg-black text-white font-sans selection:bg-[#d4af37] selection:text-black">  
      {/* NUCLEAR FIX: Kill all white background ghosts */}  
      <style dangerouslySetInnerHTML={{ __html: `  
        :root { background: black !important; }  
        body { background-color: black !important; }  
        * { background-color: transparent !important; }  
        main, section, div, header, nav, footer { background-color: transparent !important; }  
        .bg-white, .bg-slate-50, .bg-zinc-50, .bg-zinc-100 { background-color: transparent !important; }  
        .text-black { color: #ffffff !important; }  
        h1, h2, h3, h4, p, span, a { background-color: transparent !important; }  
        /* Preserve specific backgrounds */  
        .bg-black { background-color: #000000 !important; }  
        .bg-\\[\\#0a0a0a\\] { background-color: #0a0a0a !important; }  
        .bg-\\[\\#d4af37\\] { background-color: #d4af37 !important; color: black !important; }  
        .group:hover .bg-zinc-900 { background-color: #18181b !important; }  
      `}} />

      <Navigation />

      {/* Hero: The Entry Point */}  
      <section className="relative h-[85vh] flex items-center px-6 md:px-20 overflow-hidden bg-black border-b border-zinc-900">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=2070"   
            alt="Private Aviation"   
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"  
          />  
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />  
        </div>

        <div className="relative z-10 max-w-4xl">  
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 !text-white leading-[0.9]">  
            NexVoyage <br />  
            <span className="text-[#d4af37] italic">Collective.</span>  
          </h1>  
          <p className="text-xl md:text-2xl text-zinc-400 max-w-xl mb-12 font-light leading-relaxed !text-white">  
            Operational leverage for the high-net-worth traveler. We don't just plan trips; we manage your most non-renewable resource: time.  
          </p>  
          <a href="/concierge" className="inline-flex items-center gap-4 group">  
            <span className="text-sm uppercase tracking-[0.3em] font-medium !text-white border-b border-[#d4af37] pb-1">Begin Inquiry</span>  
            <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:border-[#d4af37] transition-all">  
              <ArrowRight className="w-4 h-4 group-hover:text-black transition-colors" />  
            </div>  
          </a>  
        </div>  
      </section>

      {/* The Hub: Three Entry Points */}  
      <section className="py-24 px-6 md:px-20 bg-black">  
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">  
            
          {/* Tile 1: The Archive */}  
          <a href="/archive" className="group relative aspect-[4/5] overflow-hidden border border-zinc-900 flex flex-col justify-end p-8 hover:border-[#d4af37]/50 transition-all">  
            <div className="absolute inset-0 z-0 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700">  
              <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1000" alt="Safari" className="w-full h-full object-cover opacity-40" />  
            </div>  
            <div className="relative z-10">  
              <Map className="w-6 h-6 text-[#d4af37] mb-4" />  
              <h3 className="text-2xl font-light mb-2 !text-white">The Archive</h3>  
              <p className="text-zinc-400 text-sm font-light leading-relaxed !text-white">Detailed field reports from our global scouting operations.</p>  
            </div>  
          </a>

          {/* Tile 2: The Perspective */}  
          <a href="/perspective" className="group relative aspect-[4/5] overflow-hidden border border-zinc-900 flex flex-col justify-end p-8 hover:border-[#d4af37]/50 transition-all">  
            <div className="absolute inset-0 z-0 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700">  
              <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1000" alt="Villa View" className="w-full h-full object-cover opacity-40" />  
            </div>  
            <div className="relative z-10">  
              <Compass className="w-6 h-6 text-[#d4af37] mb-4" />  
              <h3 className="text-2xl font-light mb-2 !text-white">The Perspective</h3>  
              <p className="text-zinc-400 text-sm font-light leading-relaxed !text-white">Our philosophy on luxury, leverage, and the art of travel.</p>  
            </div>  
          </a>

          {/* Tile 3: The Concierge */}  
          <a href="/concierge" className="group relative aspect-[4/5] overflow-hidden border border-zinc-900 flex flex-col justify-end p-8 hover:border-[#d4af37]/50 transition-all">  
            <div className="absolute inset-0 z-0 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700">  
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000" alt="Concierge" className="w-full h-full object-cover opacity-40" />  
            </div>  
            <div className="relative z-10">  
              <Shield className="w-6 h-6 text-[#d4af37] mb-4" />  
              <h3 className="text-2xl font-light mb-2 !text-white">The Concierge</h3>  
              <p className="text-zinc-400 text-sm font-light leading-relaxed !text-white">Direct access to our preferred status and partner network.</p>  
            </div>  
          </a>

        </div>  
      </section>

      {/* Trust Strip */}  
      <section className="py-12 border-y border-zinc-900 bg-[#0a0a0a]">  
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-8 opacity-40 grayscale contrast-125">  
          <span className="text-xs tracking-[0.4em] uppercase font-bold text-zinc-500">Virtuoso Member</span>  
          <span className="text-xs tracking-[0.4em] uppercase font-bold text-zinc-500">Fora Travel Partner</span>  
          <span className="text-xs tracking-[0.4em] uppercase font-bold text-zinc-500">ILTM Global</span>  
          <span className="text-xs tracking-[0.4em] uppercase font-bold text-zinc-500">Rosewood Elite</span>  
          <span className="text-xs tracking-[0.4em] uppercase font-bold text-zinc-500">Aman Preferred</span>  
        </div>  
      </section>

      {/* Grounded Statement */}  
      <section className="py-32 px-6 bg-black text-center">  
        <div className="max-w-2xl mx-auto">  
          <h2 className="text-3xl font-light mb-8 !text-white italic">"Luxury is not a commodity. It is the elimination of friction."</h2>  
          <div className="w-12 h-px bg-[#d4af37] mx-auto mb-8" />  
          <p className="text-zinc-500 font-light tracking-wide !text-white leading-relaxed">  
            NexVoyage is a private travel office. We operate at the intersection of deep hospitality relationships and meticulous logistics. No memberships. No theater. Just service.  
          </p>  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
