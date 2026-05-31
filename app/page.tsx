import React from 'react';

// Self-contained Navigation for the Home Page  
const Navigation = () => (  
<nav className="fixed top-0 w-full z-50 px-12 py-8 flex justify-between items-center font-sans">  
  <div className="text-amber-100/90 tracking-[0.5em] uppercase text-xs font-bold">  
    NexVoyage Collective  
  </div>  
  <div className="flex gap-12 text-stone-500 uppercase tracking-[0.3em] text-[10px]">  
    <a href="/sanctuaries" className="hover:text-amber-100 transition-colors">Sanctuaries</a>  
    <a href="/reserve" className="hover:text-amber-100 transition-colors">Reserve</a>  
  </div>  
</nav>  
);

export default function Home() {  
return (  
  <main className="bg-black text-stone-200 min-h-screen font-serif overflow-hidden">  
    <Navigation />

    {/* Cinematic Hero */}  
    <section className="relative h-screen w-full flex items-center justify-center">  
      {/* Background Image with Deep Vignette */}  
      <div className="absolute inset-0 z-0">  
        <img   
          src="https://cdn.marblism.com/WuyrXpnAwo9.webp"   
          alt="NexVoyage Twilight Sanctuary"   
          className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>  
        <div className="absolute inset-0 bg-black/20"></div>  
      </div>

      {/* Central Hook */}  
      <div className="relative z-10 text-center px-6 max-w-5xl">  
        <h2 className="text-amber-100/40 uppercase tracking-[0.6em] text-[10px] mb-12 font-sans animate-fade-in">  
          By Appointment Only  
        </h2>  
        <h1 className="text-4xl md:text-7xl lg:text-8xl tracking-tighter text-stone-100 font-light leading-tight mb-16 italic">  
          Restoration of Privacy through <br/>  
          <span className="text-amber-100/90">Architectural Silence.</span>  
        </h1>  
          
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate-fade-in-up">  
          <a   
            href="/sanctuaries"   
            className="group relative px-12 py-4 border border-stone-800 text-stone-400 hover:text-amber-100 hover:border-amber-200/30 transition-all duration-500 uppercase tracking-[0.3em] text-[10px] font-sans"  
          >  
            Explore the Sanctuaries  
          </a>  
          <a   
            href="/reserve"   
            className="text-amber-200/60 hover:text-amber-100 transition-colors uppercase tracking-[0.3em] text-[10px] font-sans border-b border-amber-200/10 pb-1"  
          >  
            Inquire  
          </a>  
        </div>  
      </div>

      {/* Decorative Bottom Left Detail */}  
      <div className="absolute bottom-12 left-12 hidden md:block">  
        <div className="flex items-center gap-4">  
          <div className="w-12 h-px bg-amber-200/20"></div>  
          <span className="text-[9px] uppercase tracking-[0.5em] text-stone-600 font-sans">  
            Global Collection 2026  
          </span>  
        </div>  
      </div>  
    </section>

    <style jsx global>{`  
      @keyframes slow-zoom {  
        from { transform: scale(1.0); }  
        to { transform: scale(1.1); }  
      }  
      .animate-slow-zoom {  
        animation: slow-zoom 20s ease-out forwards;  
      }  
      .animate-fade-in {  
        animation: fadeIn 2s ease-out;  
      }  
      .animate-fade-in-up {  
        animation: fadeInUp 2.5s ease-out;  
      }  
      @keyframes fadeIn {  
        from { opacity: 0; }  
        to { opacity: 1; }  
      }  
      @keyframes fadeInUp {  
        from { opacity: 0; transform: translateY(20px); }  
        to { opacity: 1; transform: translateY(0); }  
      }  
    `}</style>  
  </main>  
);  
}  
