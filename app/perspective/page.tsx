import React from 'react';

export default function PerspectivePage() {  
return (  
<main className="min-h-screen bg-black text-white selection:bg-[#d4af37] selection:text-black">  
  {/* THE NUCLEAR FIX: FORCING BLACK BG & WHITE TEXT */}  
  <style dangerouslySetInnerHTML={{ __html: `  
    body, html, main { background-color: #000000 !important; color: #ffffff !important; }  
    section, div, p, h1, h2, h3, h4, span, ul, li {   
      background-color: transparent !important;   
      background: transparent !important;  
      color: #ffffff !important;  
    }  
    h1, h2, h3, h4, .text-brass { color: #d4af37 !important; }  
    .bg-white, .bg-[#FCFAF7], .bg-neutral-50, .bg-stone-50 {  
      background-color: transparent !important;  
    }  
    * { border-color: #d4af3733 !important; }  
  `}} />

  {/* Hero Section: Full Color Cinematic */}  
  <section className="relative h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#d4af3733]">  
    <img   
      src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2050&auto=format&fit=crop"   
      className="absolute inset-0 w-full h-full object-cover opacity-70"  
      alt="Luxury Estate Arrival"  
    />  
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>  
    <div className="relative z-10 text-center px-6">  
      <h1 className="text-6xl md:text-9xl font-light tracking-tighter mb-6 text-brass">  
        TRAVEL, PERFECTED.  
      </h1>  
      <p className="text-xl md:text-2xl font-extralight max-w-2xl mx-auto opacity-100 leading-relaxed uppercase tracking-[0.3em]">  
        The Expert Hand Behind the Journey.  
      </p>  
    </div>  
  </section>

  {/* The Value Statement */}  
  <section className="py-32 px-6 max-w-5xl mx-auto text-center">  
    <h2 className="text-sm tracking-[0.5em] uppercase mb-8 opacity-60 text-brass">The NexVoyage Standard</h2>  
    <p className="text-3xl md:text-5xl font-light leading-tight italic mb-8">  
      "True luxury is the absence of friction."  
    </p>  
    <div className="h-px w-24 bg-[#d4af37] mx-auto opacity-60 mb-12"></div>  
    <p className="text-xl font-extralight opacity-90 leading-relaxed max-w-3xl mx-auto">  
      We specialize in the high-stakes logistics of elite travel. From private aviation to off-market sanctuary access, our mission is to ensure your only requirement is presence.  
    </p>  
  </section>

  {/* The Guardian Layer */}  
  <section className="py-24 px-6 max-w-7xl mx-auto border-t border-[#d4af371a]">  
    <h2 className="text-sm tracking-[0.3em] uppercase mb-20 opacity-60 text-brass">The Guardian Layer</h2>  
    <div className="grid md:grid-cols-3 gap-16">  
      <div className="space-y-8">  
        <div className="aspect-[4/5] overflow-hidden border border-[#d4af3733]">  
          <img src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Support" />  
        </div>  
        <h3 className="text-2xl font-light uppercase text-brass">24/7 Support</h3>  
        <p className="font-extralight leading-relaxed opacity-90">  
          Proactive flight support and disruption management. We handle the pivots so you never have to wait on a line.  
        </p>  
      </div>  
      <div className="space-y-8">  
        <div className="aspect-[4/5] overflow-hidden border border-[#d4af3733]">  
          <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Credits" />  
        </div>  
        <h3 className="text-2xl font-light uppercase text-brass">VIP Leverage</h3>  
        <p className="font-extralight leading-relaxed opacity-90">  
          Preferred rates, guaranteed upgrades, and daily credits at the world's most exclusive properties via Fora & Virtuoso.  
        </p>  
      </div>  
      <div className="space-y-8">  
        <div className="aspect-[4/5] overflow-hidden border border-[#d4af3733]">  
          <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Transfers" />  
        </div>  
        <h3 className="text-2xl font-light uppercase text-brass">Elite Logistics</h3>  
        <p className="font-extralight leading-relaxed opacity-90">  
          Coordinated private transfers and doorstep-to-doorstep logistics. Seamless movement across every border.  
        </p>  
      </div>  
    </div>  
  </section>

  {/* Modern Aviation & Villas Section */}  
  <section className="py-32 px-6 bg-[#050505] border-y border-[#d4af371a]">  
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">  
      <div className="space-y-10">  
        <h2 className="text-5xl font-light uppercase text-brass">Private Aviation & <br/>Villa Sanctuaries</h2>  
        <p className="font-extralight text-xl leading-relaxed opacity-100">  
          For clients demanding total autonomy. We manage Global 7500 charter logistics and secure off-market private estates through our global network.  
        </p>  
        <ul className="space-y-6 font-light text-sm tracking-[0.3em] uppercase">  
          <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#d4af37]"></span> Custom Long-Range Routing</li>  
          <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#d4af37]"></span> Off-Market Portfolio Access</li>  
          <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#d4af37]"></span> On-Site Management & Security</li>  
        </ul>  
      </div>  
      <div className="relative">  
        <img   
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1974&auto=format&fit=crop"   
          className="w-full aspect-video object-cover border border-[#d4af3733]"   
          alt="Modern Private Jet"   
        />  
        <div className="absolute -bottom-6 -right-6 w-64 h-64 border-r border-b border-[#d4af3733] pointer-events-none"></div>  
      </div>  
    </div>  
  </section>

  {/* Expanded Partnership Network */}  
  <section className="py-32 px-6 max-w-7xl mx-auto text-center">  
    <h2 className="text-sm tracking-[0.5em] uppercase mb-20 opacity-60 text-brass">The Collective Network</h2>  
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-20 items-center justify-center opacity-90 grayscale hover:grayscale-0 transition-all duration-700">  
      <div className="text-2xl font-bold tracking-tighter italic">FORA</div>  
      <div className="text-xl font-serif tracking-widest uppercase">Virtuoso</div>  
      <div className="text-xl tracking-widest uppercase">Singita</div>  
      <div className="text-xl tracking-widest uppercase">Aman</div>  
      <div className="text-xl tracking-widest uppercase">Six Senses</div>  
      <div className="text-xl tracking-widest uppercase">Belmond</div>  
      <div className="text-xl tracking-widest uppercase font-light">Rosewood</div>  
      <div className="text-xl tracking-widest uppercase font-light">St. Regis</div>  
      <div className="text-xl tracking-widest uppercase font-light">Regent</div>  
      <div className="text-xl tracking-widest uppercase font-light">Silversea</div>  
      <div className="text-xl tracking-widest uppercase font-light">Explora</div>  
      <div className="text-xl tracking-widest uppercase font-light">One&Only</div>  
    </div>  
    <p className="mt-24 text-sm font-extralight max-w-2xl mx-auto opacity-50 tracking-widest">  
      UNMATCHED ACCESS. PREFERRED STATUS. GLOBAL LEVERAGE.  
    </p>  
  </section>

  {/* CTA */}  
  <section className="py-48 px-6 text-center border-t border-[#d4af3733]">  
    <a href="/invitation" className="inline-block border border-[#d4af37] px-20 py-6 text-sm tracking-[0.6em] uppercase hover:bg-[#d4af37] hover:text-black transition-all duration-500 font-light">  
      REQUEST AN INVITATION  
    </a>  
  </section>  
</main>  
);  
}  
