import React from 'react';

export default function Home() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-zinc-800">  
      {/* NUCLEAR FIX: FORCE BLACK BACKGROUND & KILL GHOST BOXES */}  
      <style dangerouslySetInnerHTML={{ __html: `  
        body, html, #__next, main { background-color: #0A0A0A !important; }  
        * { box-shadow: none !important; }  
        .shadow-xl, .shadow-lg, .shadow-md, .shadow-sm { box-shadow: none !important; }  
      `}} />

      {/* HERO SECTION */}  
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="https://images.unsplash.com/photo-1578683062331-92935539d7a0?q=80&w=2670&auto=format&fit=crop"   
            alt="Aman New York"   
            className="w-full h-full object-cover scale-110 grayscale-[0.2]"  
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0A0A0A]" />  
        </div>  
          
        <div className="relative z-10 text-center px-6">  
          <p className="text-[10px] tracking-[0.8em] uppercase text-zinc-400 mb-4 animate-pulse">  
            Established MMXXVI  
          </p>  
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter mb-8 italic">  
            NexVoyage <span className="font-serif">Collective</span>  
          </h1>  
          <p className="max-w-xl mx-auto text-zinc-300 text-sm md:text-base tracking-widest leading-relaxed uppercase">  
            The invisible engine behind the world's most <br/>discerning travel portfolios.  
          </p>  
        </div>  
          
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">  
          <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-800 to-transparent" />  
        </div>  
      </section>

      {/* STRATEGIC ALLIANCES SECTION */}  
      <section className="py-24 bg-[#0A0A0A] border-t border-zinc-900">  
        <div className="max-w-7xl mx-auto px-6">  
          <p className="text-[10px] tracking-[0.4em] text-zinc-500 mb-16 uppercase text-center">  
            Unmatched Access. Preferred Status. Global Leverage.  
          </p>  
            
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8 opacity-80">  
            {/* Row 1 */}  
            <div className="flex flex-col gap-1 group">  
              <span className="text-[9px] text-zinc-600 font-mono italic">Primary Node</span>  
              <span className="text-zinc-300 tracking-widest uppercase text-[11px] group-hover:text-white transition-colors">Fora Travel Partner</span>  
            </div>  
            <div className="flex flex-col gap-1 group">  
              <span className="text-[9px] text-zinc-600 font-mono">Network</span>  
              <span className="text-zinc-300 tracking-widest uppercase text-[11px] group-hover:text-white transition-colors">Virtuoso Member</span>  
            </div>  
            <div className="flex flex-col gap-1 group">  
              <span className="text-[9px] text-zinc-600 font-mono">Pillar</span>  
              <span className="text-zinc-300 tracking-widest uppercase text-[11px] group-hover:text-white transition-colors">Four Seasons Preferred</span>  
            </div>  
            <div className="flex flex-col gap-1 group">  
              <span className="text-[9px] text-zinc-600 font-mono">Pillar</span>  
              <span className="text-zinc-300 tracking-widest uppercase text-[11px] group-hover:text-white transition-colors">Aman Preferred</span>  
            </div>  
            <div className="flex flex-col gap-1 group">  
              <span className="text-[9px] text-zinc-600 font-mono">Pillar</span>  
              <span className="text-zinc-300 tracking-widest uppercase text-[11px] group-hover:text-white transition-colors">Belmond Bellini Club</span>  
            </div>  
            <div className="flex flex-col gap-1 group">  
              <span className="text-[9px] text-zinc-600 font-mono">Pillar</span>  
              <span className="text-zinc-300 tracking-widest uppercase text-[11px] group-hover:text-white transition-colors">Mandarin Oriental Fan</span>  
            </div>

            {/* Row 2 */}  
            <div className="flex flex-col gap-1 group">  
              <span className="text-[9px] text-zinc-600 font-mono">Pillar</span>  
              <span className="text-zinc-300 tracking-widest uppercase text-[11px] group-hover:text-white transition-colors">Rosewood Elite</span>  
            </div>  
            <div className="flex flex-col gap-1 group">  
              <span className="text-[9px] text-zinc-600 font-mono">Pillar</span>  
              <span className="text-zinc-300 tracking-widest uppercase text-[11px] group-hover:text-white transition-colors">Peninsula PenClub</span>  
            </div>  
            <div className="flex flex-col gap-1 group">  
              <span className="text-[9px] text-zinc-600 font-mono">Pillar</span>  
              <span className="text-zinc-300 tracking-widest uppercase text-[11px] group-hover:text-white transition-colors">Dorchester Diamond</span>  
            </div>  
            <div className="flex flex-col gap-1 group">  
              <span className="text-[9px] text-zinc-600 font-mono">Pillar</span>  
              <span className="text-zinc-300 tracking-widest uppercase text-[11px] group-hover:text-white transition-colors">Hyatt Privé</span>  
            </div>  
            <div className="flex flex-col gap-1 group">  
              <span className="text-[9px] text-zinc-600 font-mono">Pillar</span>  
              <span className="text-zinc-300 tracking-widest uppercase text-[11px] group-hover:text-white transition-colors">Oetker Pearl Partner</span>  
            </div>  
            <div className="flex flex-col gap-1 group">  
              <span className="text-[9px] text-zinc-600 font-mono">Authority</span>  
              <span className="text-zinc-300 tracking-widest uppercase text-[11px] group-hover:text-white transition-colors">ILTM Global</span>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* PROPERTY PORTFOLIO SECTION */}  
      <section className="py-32 bg-[#0A0A0A]">  
        <div className="max-w-7xl mx-auto px-6">  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">  
            {/* Property 001 */}  
            <div className="group cursor-crosshair">  
              <div className="overflow-hidden mb-8 bg-zinc-900 aspect-[16/10]">  
                <img   
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop"   
                  alt="NV-001"   
                  className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000"  
                />  
              </div>  
              <div className="flex justify-between items-baseline border-b border-zinc-900 pb-6">  
                <h3 className="text-zinc-200 text-xl tracking-tighter uppercase font-light">The Urban Sanctuary</h3>  
                <span className="text-zinc-600 font-mono text-[10px] italic tracking-widest">NV-001 / NYC</span>  
              </div>  
            </div>

            {/* Property 002 */}  
            <div className="group cursor-crosshair">  
              <div className="overflow-hidden mb-8 bg-zinc-900 aspect-[16/10]">  
                <img   
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2650&auto=format&fit=crop"   
                  alt="NV-002"   
                  className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000"  
                />  
              </div>  
              <div className="flex justify-between items-baseline border-b border-zinc-900 pb-6">  
                <h3 className="text-zinc-200 text-xl tracking-tighter uppercase font-light">The Heritage Estate</h3>  
                <span className="text-zinc-600 font-mono text-[10px] italic tracking-widest">NV-002 / LDN</span>  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* CONCIERGE INTAKE SECTION */}  
      <section className="py-40 bg-[#0A0A0A] border-t border-zinc-900">  
        <div className="max-w-3xl mx-auto px-6 text-center">  
          <h2 className="text-4xl md:text-6xl text-white tracking-tighter mb-10 uppercase italic font-extralight">  
            Initiate Access.  
          </h2>  
          <p className="text-zinc-500 mb-16 leading-relaxed font-light tracking-[0.1em] text-sm md:text-base">  
            The Bespoke Travel Manifest is currently accepting inquiries for the upcoming fiscal quarter.   
            Placement within the Collective is strictly limited.  
          </p>  
          <button className="bg-transparent border border-zinc-800 text-zinc-400 px-16 py-5 tracking-[0.5em] uppercase text-[10px] hover:border-white hover:text-white transition-all duration-700">  
            Enter the Intake  
          </button>  
        </div>  
      </section>

      {/* FOOTER STRIP */}  
      <footer className="py-12 border-t border-zinc-950 text-center">  
        <p className="text-[9px] font-mono text-zinc-700 tracking-[0.5em] uppercase">  
          NexVoyage Collective &copy; 2026 // Private Advisory Node  
        </p>  
      </footer>  
    </main>  
  );  
}  
