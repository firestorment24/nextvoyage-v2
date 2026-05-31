import React from 'react';

const Navigation = () => (  
<nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black to-transparent font-sans">  
  <div className="text-amber-200/80 tracking-[0.3em] uppercase text-sm font-bold">  
    <a href="/">NexVoyage</a>  
  </div>  
  <div className="flex gap-8 text-stone-400 uppercase tracking-widest text-[10px]">  
    <a href="/sanctuaries" className="hover:text-amber-100 transition-colors">Sanctuaries</a>  
    <a href="/reserve" className="hover:text-amber-100 transition-colors font-bold text-amber-200/60 font-sans">Reserve</a>  
  </div>  
</nav>  
);

const Footer = () => (  
<footer className="bg-stone-950 py-20 px-8 border-t border-stone-900 font-sans">  
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 text-stone-500">  
    <div className="space-y-4">  
      <h4 className="text-amber-200/50 uppercase tracking-[0.2em] text-xs font-semibold">NexVoyage Collective</h4>  
      <p className="text-stone-600 text-sm max-w-xs italic leading-relaxed font-serif">  
        Curated isolation for the high-net-worth traveler.  
      </p>  
    </div>  
    <div className="text-[10px] uppercase tracking-[0.3em] space-y-1 text-stone-700">  
      <p>© 2026 NexVoyage</p>  
      <p>By Appointment Only</p>  
    </div>  
  </div>  
</footer>  
);

export default function RCYacht() {  
return (  
  <div className="bg-black text-stone-200 min-h-screen font-serif selection:bg-amber-200/20">  
    <Navigation />  
      
    {/* Hero Section */}  
    <section className="relative h-screen flex items-center justify-center overflow-hidden">  
      <img   
        src="https://cdn.marblism.com/bezdT4Fs3Bm.webp"   
        alt="Ritz-Carlton Yacht Collection"   
        className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"  
      />  
      <div className="relative z-10 text-center px-4 space-y-6">  
        <h1 className="text-5xl md:text-8xl tracking-[0.4em] text-amber-100/90 mb-4 uppercase drop-shadow-2xl">  
          RC Yacht Collection  
        </h1>  
        <p className="text-sm md:text-lg tracking-[0.5em] uppercase text-stone-400 font-sans border-t border-b border-stone-800/50 py-4 inline-block px-8">  
          A Sanctuary at Sea | Charter Only  
        </p>  
      </div>  
    </section>

    {/* Narrative */}  
    <section className="py-32 px-6 max-w-4xl mx-auto text-center">  
      <h2 className="text-4xl mb-12 text-amber-100 italic font-light tracking-tight">Curated Isolation</h2>  
      <div className="space-y-8">  
        <p className="text-xl leading-relaxed text-stone-400 font-light">  
          Redefining the yachting experience with a focus on absolute privacy. The Evrima and Ilma class yachts are designed to access the world’s most secluded moorings—where the heavy liners cannot follow.  
        </p>  
        <div className="w-12 h-px bg-amber-200/20 mx-auto"></div>  
        <p className="text-lg leading-relaxed text-stone-500 italic">  
          "A 1:1 guest-to-staff ratio ensures that every desire is met before it is even felt."  
        </p>  
      </div>  
    </section>

    {/* Grid */}  
    <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-900 border-t border-b border-stone-900">  
      {[  
        { title: "The Suites", desc: "Every suite features a private oceanfront terrace. Up to 1,000 sq ft of minimalist luxury at sea." },  
        { title: "The Concierge", desc: "A dedicated Personal Concierge to curate your shore excursions—from private vineyard tours to hidden beach setups." },  
        { title: "The Dining", desc: "Michelin-inspired culinary experiences served in-suite or at five world-class venues onboard." },  
        { title: "The Reset", desc: "Dual-hull stabilization technology and specialized acoustic dampening for weightless, uninterrupted sleep." }  
      ].map((item, i) => (  
        <div key={i} className="p-16 bg-black flex flex-col justify-center min-h-[350px] group hover:bg-stone-950 transition-all duration-700">  
          <h3 className="text-amber-200/60 text-xs mb-6 tracking-[0.3em] uppercase font-bold group-hover:text-amber-100 transition-colors font-sans">{item.title}</h3>  
          <p className="text-stone-500 font-sans leading-relaxed text-sm group-hover:text-stone-300 transition-colors">{item.desc}</p>  
        </div>  
      ))}  
    </section>

    {/* CTA */}  
    <section className="py-40 text-center bg-black">  
      <div className="max-w-xl mx-auto space-y-12">  
        <p className="text-stone-500 uppercase tracking-[0.4em] text-[10px] font-sans">The Ocean Awaits</p>  
        <a   
          href="/reserve"   
          className="group relative inline-block px-16 py-5 border border-amber-200/20 text-amber-100/80 hover:text-white transition-all overflow-hidden uppercase tracking-[0.3em] text-xs font-bold font-sans"  
        >  
          <span className="relative z-10">Secure Your Charter</span>  
          <div className="absolute inset-0 bg-amber-200/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>  
        </a>  
      </div>  
    </section>

    <Footer />  
  </div>  
);  
}  
