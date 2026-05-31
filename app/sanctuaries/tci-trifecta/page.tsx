import React from 'react';

// --- Inline Components to fix build errors ---  
const Navigation = () => (  
  <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black to-transparent">  
    <div className="text-amber-200/80 tracking-[0.3em] uppercase text-sm font-bold underline decoration-amber-200/20 underline-offset-8">  
      <a href="/">NexVoyage</a>  
    </div>  
    <div className="flex gap-8 text-stone-400 uppercase tracking-widest text-[10px]">  
      <a href="/sanctuaries" className="hover:text-amber-100 transition-colors">Sanctuaries</a>  
      <a href="/reserve" className="hover:text-amber-100 transition-colors font-bold text-amber-200/60">Reserve</a>  
    </div>  
  </nav>  
);

const Footer = () => (  
  <footer className="bg-stone-950 py-20 px-8 border-t border-stone-900">  
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 text-stone-500">  
      <div className="space-y-4">  
        <h4 className="text-amber-200/50 uppercase tracking-[0.2em] text-xs font-semibold">NexVoyage Collective</h4>  
        <p className="text-stone-600 text-sm max-w-xs font-serif italic leading-relaxed">  
          Curated isolation for the high-net-worth traveler. We specialize in the restoration of privacy through architectural silence.  
        </p>  
      </div>  
      <div className="text-[10px] uppercase tracking-[0.3em] space-y-4 text-stone-700">  
        <div className="space-y-1">  
          <p>© 2026 NexVoyage</p>  
          <p>By Appointment Only</p>  
        </div>  
        <div className="flex gap-4">  
          <span className="hover:text-amber-200 cursor-pointer transition-colors">Instagram</span>  
          <span className="hover:text-amber-200 cursor-pointer transition-colors">Contact</span>  
        </div>  
      </div>  
    </div>  
  </footer>  
);

// --- Main Page Component ---  
export default function TCITrifecta() {  
  return (  
    <div className="bg-black text-stone-200 min-h-screen font-serif selection:bg-amber-200/20 selection:text-amber-100">  
      <Navigation />  
        
      {/* Hero Section */}  
      <section className="relative h-screen flex items-center justify-center overflow-hidden">  
        <img   
          src="https://cdn.marblism.com/cUyJDkxI7Ky.webp"   
          alt="TCI Trifecta - Grace Bay"   
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"  
        />  
        <div className="relative z-10 text-center px-4 space-y-6">  
          <h1 className="text-5xl md:text-8xl tracking-[0.4em] text-amber-100/90 mb-4 uppercase drop-shadow-2xl">  
            TCI Trifecta  
          </h1>  
          <p className="text-sm md:text-lg tracking-[0.5em] uppercase text-stone-400 font-sans border-t border-b border-stone-800/50 py-4 inline-block px-8">  
            Grace Bay | Absolute Isolation  
          </p>  
        </div>  
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-pulse text-amber-200/30 text-xs tracking-widest uppercase">  
          Scroll to enter  
        </div>  
      </section>

      {/* Narrative Section */}  
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">  
        <h2 className="text-4xl mb-12 text-amber-100 italic font-light tracking-tight">The Sound of Gravity</h2>  
        <div className="space-y-8">  
          <p className="text-xl leading-relaxed text-stone-400 font-light">  
            Located on the most secluded stretch of Grace Bay, the Trifecta is a masterclass in architectural silence. Three private pavilions, interconnected by floating stone pathways, designed to disappear into the horizon.  
          </p>  
          <div className="w-12 h-px bg-amber-200/20 mx-auto"></div>  
          <p className="text-lg leading-relaxed text-stone-500 italic">  
            "This isn't just a stay; it's a recalibration. No crowds, no noise, just the rhythmic pull of the tide and the amber glow of the Caribbean sun."  
          </p>  
        </div>  
      </section>

      {/* Feature Grid */}  
      <section className="py-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-900 border-t border-b border-stone-900">  
        {[  
          { title: "The Pavilion", desc: "12,000 sq ft of indoor-outdoor living. Floor-to-ceiling glass that dissolves at the touch of a button." },  
          { title: "The Service", desc: "A dedicated household team of four. Invisible, yet anticipatory. Your glass is never empty, your peace never disturbed." },  
          { title: "The Water", desc: "A 100-foot zero-edge pool that bleeds into the Atlantic. Private boat access to the hidden cays." }  
        ].map((item, i) => (  
          <div key={i} className="p-16 bg-black flex flex-col justify-center min-h-[400px] group hover:bg-stone-950 transition-all duration-700">  
            <h3 className="text-amber-200/60 text-xs mb-6 tracking-[0.3em] uppercase font-bold group-hover:text-amber-100 transition-colors">{item.title}</h3>  
            <p className="text-stone-500 font-sans leading-relaxed text-sm group-hover:text-stone-300 transition-colors">{item.desc}</p>  
          </div>  
        ))}  
      </section>

      {/* Reservation CTA */}  
      <section className="py-40 text-center bg-black">  
        <div className="max-w-xl mx-auto space-y-12">  
          <p className="text-stone-500 uppercase tracking-[0.4em] text-[10px]">Restoration Awaits</p>  
          <a   
            href="/reserve"   
            className="group relative inline-block px-16 py-5 border border-amber-200/20 text-amber-100/80 hover:text-white transition-all overflow-hidden uppercase tracking-[0.3em] text-xs font-bold"  
          >  
            <span className="relative z-10">Secure Your Sanctuary</span>  
            <div className="absolute inset-0 bg-amber-200/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>  
          </a>  
        </div>  
      </section>

      <Footer />  
    </div>  
  );  
}  
