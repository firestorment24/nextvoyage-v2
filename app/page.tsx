import React from 'react';

export default function Home() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-zinc-800">  
      {/* NUCLEAR FIX: ELIMINATE ALL GHOST BOXES & FORCED DARK MODE */}  
      <style dangerouslySetInnerHTML={{ __html: `  
        body, html, #__next, main { background-color: #0A0A0A !important; }  
        * { box-shadow: none !important; border-radius: 0 !important; }  
        ::-webkit-scrollbar { display: none; }  
      `}} />

      {/* HERO: AMAN NEW YORK HIGH-CONTRAST */}  
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="https://images.unsplash.com/photo-1578683062331-92935539d7a0?q=80&w=2670&auto=format&fit=crop"   
            alt="Aman New York"   
            className="w-full h-full object-cover grayscale-[0.3] brightness-75"  
          />  
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/40" />  
        </div>  
          
        <div className="relative z-10 text-center px-6">  
          <p className="text-[10px] tracking-[1em] uppercase text-[#B5A48B] mb-6 font-light">  
            THE ARCHIVE // MMXXVI  
          </p>  
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter mb-8 italic">  
            NexVoyage  
          </h1>  
          <p className="max-w-2xl mx-auto text-zinc-400 text-xs md:text-sm tracking-[0.4em] leading-relaxed uppercase">  
            Curating the invisible layers of global hospitality.  
          </p>  
        </div>  
      </section>

      {/* TRUST STRIP: THE CORE 5 */}  
      <div className="border-y border-zinc-900 bg-[#0D0D0D] py-4">  
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale">  
          {["Virtuoso Member", "Fora Travel Partner", "ILTM Global", "Rosewood Elite", "Aman Preferred"].map((trust) => (  
            <span key={trust} className="text-[9px] tracking-[0.3em] uppercase font-mono">{trust}</span>  
          ))}  
        </div>  
      </div>

      {/* EXPANDED STRATEGIC ALLIANCES: 18 ELITE PARTNERS */}  
      <section className="py-32 bg-[#0A0A0A]">  
        <div className="max-w-7xl mx-auto px-6">  
          <div className="flex items-center gap-4 mb-20">  
            <div className="h-[1px] w-12 bg-[#B5A48B]" />  
            <p className="text-[10px] tracking-[0.5em] text-[#B5A48B] uppercase">Global Leverage Network</p>  
          </div>  
            
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-12">  
            {[  
              { label: "Fora Travel", type: "Host" },  
              { label: "Four Seasons", type: "Preferred" },  
              { label: "Belmond", type: "Bellini Club" },  
              { label: "Mandarin Oriental", type: "Fan Club" },  
              { label: "Peninsula", type: "PenClub" },  
              { label: "Dorchester", type: "Diamond Club" },  
              { label: "Hyatt Privé", type: "Pillar" },  
              { label: "Oetker", type: "Pearl Partner" },  
              { label: "Auberge", type: "Preferred" },  
              { label: "One&Only", type: "Pillar" },  
              { label: "Relais & Châteaux", type: "Preferred" },  
              { label: "Small Luxury Hotels", type: "withIN" },  
              { label: "LHW", type: "Leaders Club" },  
              { label: "Accor", type: "HERA" },  
              { label: "IHG", type: "Destined" },  
              { label: "Langham", type: "Couture" },  
              { label: "Jumeirah", type: "Passport" },  
              { label: "Rocco Forte", type: "Knights" }  
            ].map((partner) => (  
              <div key={partner.label} className="group border-l border-zinc-900 pl-4 hover:border-[#B5A48B] transition-colors duration-700">  
                <p className="text-[8px] text-zinc-600 font-mono mb-1 uppercase">{partner.type}</p>  
                <p className="text-zinc-300 group-hover:text-white tracking-widest text-[11px] uppercase transition-colors">{partner.label}</p>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* PROPERTY PORTFOLIO: NV-00X SERIES */}  
      <section className="py-32 border-t border-zinc-900">  
        <div className="max-w-7xl mx-auto px-6">  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">  
            <div className="group cursor-crosshair">  
              <div className="aspect-[16/11] overflow-hidden bg-zinc-900 mb-8">  
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover transition-all duration-1000 grayscale-0 group-hover:grayscale" alt="NV-001" />  
              </div>  
              <div className="flex justify-between items-end pb-4 border-b border-zinc-900">  
                <div>  
                  <p className="text-[10px] text-[#B5A48B] font-mono mb-2 uppercase tracking-widest">NV-001 // AMAN NY</p>  
                  <h3 className="text-2xl text-white font-light tracking-tighter italic uppercase">The Urban Monolith</h3>  
                </div>  
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest">View Entry</span>  
              </div>  
            </div>

            <div className="group cursor-crosshair">  
              <div className="aspect-[16/11] overflow-hidden bg-zinc-900 mb-8">  
                <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover transition-all duration-1000 grayscale-0 group-hover:grayscale" alt="NV-002" />  
              </div>  
              <div className="flex justify-between items-end pb-4 border-b border-zinc-900">  
                <div>  
                  <p className="text-[10px] text-[#B5A48B] font-mono mb-2 uppercase tracking-widest">NV-002 // LONDON</p>  
                  <h3 className="text-2xl text-white font-light tracking-tighter italic uppercase">The Belgravia Archive</h3>  
                </div>  
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest">View Entry</span>  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* CONCIERGE: BESPOKE TRAVEL MANIFEST */}  
      <section className="py-48 bg-[#0D0D0D] border-t border-zinc-900">  
        <div className="max-w-4xl mx-auto px-6 text-center">  
          <h2 className="text-5xl md:text-7xl text-white font-extralight tracking-tighter mb-12 italic">  
            The Bespoke Travel Manifest  
          </h2>  
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-left border-y border-zinc-800 py-12">  
            <div>  
              <p className="text-[9px] text-zinc-600 font-mono uppercase mb-4">Current Window</p>  
              <p className="text-white text-xs tracking-widest uppercase">Q3 / Q4 2026</p>  
            </div>  
            <div>  
              <p className="text-[9px] text-zinc-600 font-mono uppercase mb-4">Target Cohort</p>  
              <p className="text-white text-xs tracking-widest uppercase">Private Advisory Only</p>  
            </div>  
            <div>  
              <p className="text-[9px] text-zinc-600 font-mono uppercase mb-4">Current Status</p>  
              <p className="text-[#B5A48B] text-xs tracking-widest uppercase animate-pulse">Waitlist Active</p>  
            </div>  
          </div>

          <button className="group relative overflow-hidden px-16 py-6 border border-[#B5A48B]">  
            <span className="relative z-10 text-[10px] tracking-[0.6em] text-[#B5A48B] uppercase group-hover:text-black transition-colors duration-500">Open Intake</span>  
            <div className="absolute inset-0 bg-[#B5A48B] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />  
          </button>  
        </div>  
      </section>

      {/* FOOTER */}  
      <footer className="py-20 border-t border-zinc-950 text-center">  
        <p className="text-[9px] font-mono text-zinc-800 tracking-[0.8em] uppercase">  
          NexVoyage Collective &copy; 2026 // Private Engine  
        </p>  
      </footer>  
    </main>  
  );  
}  
