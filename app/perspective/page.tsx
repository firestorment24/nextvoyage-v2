import React from 'react';

export default function PerspectivePage() {  
return (  
  <main className="min-h-screen bg-black text-[#d4af37] selection:bg-[#d4af37] selection:text-black">  
    {/* THE NUCLEAR FIX */}  
    <style dangerouslySetInnerHTML={{ __html: `  
      body, html, main { background-color: #000000 !important; }  
      section, div, p, h1, h2, h3, h4, span, ul, li {   
        background-color: transparent !important;   
        background: transparent !important;  
      }  
      .bg-white, .bg-[#FCFAF7], .bg-neutral-50, .bg-stone-50 {  
        background-color: transparent !important;  
      }  
      * { border-color: #d4af371a !important; }  
    `}} />

    {/* Hero Section with Background Image */}  
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-[#d4af3733]">  
      <img   
        src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2070&auto=format&fit=crop"   
        className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"  
        alt="Luxury Travel Experience"  
      />  
      <div className="relative z-10 text-center px-6">  
        <h1 className="text-5xl md:text-8xl font-light tracking-tighter mb-6">  
          TRAVEL, PERFECTED.  
        </h1>  
        <p className="text-xl md:text-2xl font-extralight max-w-2xl mx-auto opacity-90 leading-relaxed uppercase tracking-widest">  
          Frictionless Logistics. Elite Access.  
        </p>  
      </div>  
    </section>

    {/* The ROI of Reset - New High Impact Section */}  
    <section className="py-32 px-6 max-w-5xl mx-auto text-center">  
      <h2 className="text-sm tracking-[0.5em] uppercase mb-8 opacity-50">The Value Proposition</h2>  
      <p className="text-3xl md:text-5xl font-light leading-tight italic mb-8">  
        "The ultimate luxury is time—and the peace of mind to enjoy it."  
      </p>  
      <div className="h-px w-24 bg-[#d4af37] mx-auto opacity-40 mb-12"></div>  
      <p className="text-lg font-extralight opacity-70 leading-relaxed max-w-2xl mx-auto">  
        NexVoyage Collective doesn't just plan trips; we protect your time. By managing every nuance of the journey, we ensure that the only thing you have to do is arrive.  
      </p>  
    </section>

    {/* The Guardian Layer with Real Visuals */}  
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-[#d4af371a]">  
      <h2 className="text-sm tracking-[0.3em] uppercase mb-16 opacity-60">The Guardian Layer</h2>  
      <div className="grid md:grid-cols-3 gap-16">  
        <div className="space-y-6">  
          <img src="https://images.unsplash.com/photo-1540339832862-108c33f27845?q=80&w=1974&auto=format&fit=crop" className="w-full aspect-square object-cover opacity-50 grayscale border border-[#d4af371a]" alt="Support" />  
          <h3 className="text-2xl font-light uppercase">24/7 Support</h3>  
          <p className="font-extralight leading-relaxed opacity-70">  
            Disruption management without the hold times. We pivot your logistics in real-time.  
          </p>  
        </div>  
        <div className="space-y-6">  
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" className="w-full aspect-square object-cover opacity-50 grayscale border border-[#d4af371a]" alt="Credits" />  
          <h3 className="text-2xl font-light uppercase">Resort Credits</h3>  
          <p className="font-extralight leading-relaxed opacity-70">  
            Leveraged upgrades and exclusive amenities through our Virtuoso and Fora partnerships.  
          </p>  
        </div>  
        <div className="space-y-6">  
          <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop" className="w-full aspect-square object-cover opacity-50 grayscale border border-[#d4af371a]" alt="Transfers" />  
          <h3 className="text-2xl font-light uppercase">Private Transfers</h3>  
          <p className="font-extralight leading-relaxed opacity-70">  
            Doorstep-to-doorstep coordination. No waiting, no friction, just seamless arrival.  
          </p>  
        </div>  
      </div>  
    </section>

    {/* The Process (1-2-3) - New Section */}  
    <section className="py-32 px-6 bg-[#0a0a0a]">  
      <div className="max-w-7xl mx-auto">  
        <h2 className="text-sm tracking-[0.3em] uppercase mb-20 opacity-60 text-center">The Frictionless Process</h2>  
        <div className="grid md:grid-cols-3 gap-12 text-center">  
          <div className="space-y-4">  
            <div className="text-5xl font-extralight opacity-20">01</div>  
            <h4 className="text-xl font-light uppercase tracking-widest">Discovery</h4>  
            <p className="opacity-50 font-extralight">A deep dive into your preferences, archetypes, and desired outcomes.</p>  
          </div>  
          <div className="space-y-4">  
            <div className="text-5xl font-extralight opacity-20">02</div>  
            <h4 className="text-xl font-light uppercase tracking-widest">Curation</h4>  
            <p className="opacity-50 font-extralight">Our team leverages global partnerships to build your bespoke itinerary.</p>  
          </div>  
          <div className="space-y-4">  
            <div className="text-5xl font-extralight opacity-20">03</div>  
            <h4 className="text-xl font-light uppercase tracking-widest">Departure</h4>  
            <p className="opacity-50 font-extralight">You fly. We monitor. Your "Guardian Layer" is active until you return home.</p>  
          </div>  
        </div>  
      </div>  
    </section>

    {/* Aviation & Villas */}  
    <section className="py-32 px-6 border-y border-[#d4af371a]">  
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">  
        <div className="space-y-8">  
          <h2 className="text-4xl font-light uppercase">Private Aviation & <br/>Sanctuary Rentals</h2>  
          <p className="font-extralight text-lg leading-relaxed opacity-80">  
            For the ultimate in autonomy. We manage private charter logistics and secure off-market villas across the globe.  
          </p>  
          <ul className="space-y-4 font-light text-sm tracking-widest uppercase opacity-70">  
            <li>• Custom Flight Routing</li>  
            <li>• Off-Market Inventory Access</li>  
            <li>• On-Site Concierge Management</li>  
          </ul>  
        </div>  
        <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1974&auto=format&fit=crop" className="w-full aspect-[4/5] object-cover grayscale opacity-60 border border-[#d4af371a]" alt="Jet" />  
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
    </section>

    {/* CTA */}  
    <section className="py-40 px-6 text-center border-t border-[#d4af3733]">  
      <a href="/invitation" className="inline-block border border-[#d4af37] px-16 py-5 text-sm tracking-[0.5em] uppercase hover:bg-[#d4af37] hover:text-black transition-all duration-500">  
        REQUEST AN INVITATION  
      </a>  
    </section>  
  </main>  
);  
}  
