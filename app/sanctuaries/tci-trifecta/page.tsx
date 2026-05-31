import React from 'react';

export default function TCITrifecta() {  
  // Inline components to guarantee the build passes  
  const Navigation = () => (  
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black to-transparent">  
      <div className="text-amber-200/80 tracking-[0.3em] uppercase text-sm font-bold font-sans">  
        <a href="/">NexVoyage</a>  
      </div>  
      <div className="flex gap-8 text-stone-400 uppercase tracking-widest text-[10px] font-sans">  
        <a href="/sanctuaries" className="hover:text-amber-100 transition-colors">Sanctuaries</a>  
        <a href="/reserve" className="hover:text-amber-100 transition-colors font-bold text-amber-200/60">Reserve</a>  
      </div>  
    </nav>  
  );

  const Footer = () => (  
    <footer className="bg-stone-950 py-20 px-8 border-t border-stone-900 font-sans">  
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 text-stone-500">  
        <div className="space-y-4">  
          <h4 className="text-amber-200/50 uppercase tracking-[0.2em] text-xs font-semibold font-sans">NexVoyage Collective</h4>  
          <p className="text-stone-600 text-sm max-w-xs italic leading-relaxed font-serif">  
            Curated isolation for the high-net-worth traveler.  
          </p>  
        </div>  
        <div className="text-[10px] uppercase tracking-[0.3em] space-y-1 text-stone-700 font-sans">  
          <p>© 2026 NexVoyage</p>  
          <p>By Appointment Only</p>  
        </div>  
      </div>  
    </footer>  
  );

  return (  
    <div className="bg-black text-stone-200 min-h-screen font-serif selection:bg-amber-200/20">  
      <Navigation />  
        
      {/* Hero */}  
      <section className="relative h-screen flex items-center justify-center overflow-hidden">  
        <img   
          src="https://cdn.marblism.com/cUyJDkxI7Ky.webp"   
          alt="TCI Trifecta"   
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"  
        />  
        <div className="relative z-10 text-center px-4 space-y-6">  
          <h1 className="text-5xl md:text-8xl tracking-[0.4em] text-amber-100/90 mb-4 uppercase">  
            TCI Trifecta  
          </h1>  
          <p className="text-sm md:text-lg tracking-[0.5em] uppercase text-stone-400 font-sans border-t border-b border-stone-800/50 py-4 inline-block px-8">  
            Grace Bay | Absolute Isolation  
          </p>  
        </div>  
      </section>

      {/* Content */}  
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">  
        <h2 className="text-4xl mb-12 text-amber-100 italic font-light">The Sound of Gravity</h2>  
        <p className="text-xl leading-relaxed text-stone-400 font-light mb-8">  
          Located on the most secluded stretch of Grace Bay, the Trifecta is a masterclass in architectural silence. Three private pavilions, designed to disappear into the horizon.  
        </p>  
        <div className="w-12 h-px bg-amber-200/20 mx-auto"></div>  
      </section>

      {/* CTA */}  
      <section className="py-40 text-center bg-black">  
        <a   
          href="/reserve"   
          className="inline-block px-16 py-5 border border-amber-200/20 text-amber-100/80 hover:bg-amber-200/5 transition-all uppercase tracking-[0.3em] text-xs font-bold font-sans"  
        >  
          Secure Your Sanctuary  
        </a>  
      </section>

      <Footer />  
    </div>  
  );  
}  
