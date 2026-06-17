import React from 'react';

export default function Home() {  
return (  
  <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#B5A48B]/30">  
    {/* NUCLEAR FIX: FORCE BLACK BACKGROUND & ELIMINATE GHOST BOXES */}  
    <style dangerouslySetInnerHTML={{ __html: `  
      body, html, #__next, main { background-color: #0A0A0A !important; margin: 0; padding: 0; }  
      * { box-shadow: none !important; border-radius: 0 !important; }  
      ::-webkit-scrollbar { display: none; }  
      .perspective-text { writing-mode: vertical-rl; text-orientation: mixed; }  
    `}} />

    {/* HERO SECTION: THE PORTAL */}  
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden border-b border-zinc-900">  
      <div className="absolute inset-0 z-0">  
        <img   
          src="https://images.unsplash.com/photo-1578683062331-92935539d7a0?q=80&w=2670&auto=format&fit=crop"   
          alt="Aman New York"   
          className="w-full h-full object-cover brightness-50"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/20" />  
      </div>  
        
      <div className="relative z-10 text-center px-6">  
        <div className="flex items-center justify-center gap-3 mb-8">  
          <div className="h-[1px] w-8 bg-[#B5A48B]" />  
          <span className="text-[9px] tracking-[0.8em] uppercase text-[#B5A48B] font-medium">System Active</span>  
          <div className="h-[1px] w-8 bg-[#B5A48B]" />  
        </div>  
        <h1 className="text-6xl md:text-9xl font-light tracking-tighter mb-6 italic">  
          NexVoyage  
        </h1>  
        <p className="max-w-xl mx-auto text-zinc-500 text-[10px] md:text-xs tracking-[0.5em] leading-relaxed uppercase">  
          The Private Infrastructure of <br/>Exceptional Hospitality.  
        </p>  
      </div>  
    </section>

    {/* STRATEGIC ALLIANCES: THE ACCESS MANIFEST */}  
    <section className="py-24 bg-[#0A0A0A]">  
      <div className="max-w-7xl mx-auto px-6">  
        <div className="flex justify-between items-end mb-16 border-b border-zinc-900 pb-8">  
          <div>  
            <h2 className="text-xs tracking-[0.4em] text-white uppercase mb-2">Strategic Alliances</h2>  
            <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest italic">Global Node Mapping // Status: Verified</p>  
          </div>  
          <div className="hidden md:block">  
            <span className="text-[10px] text-zinc-700 font-mono tracking-widest uppercase">Capacity: 24 Nodes Active</span>  
          </div>  
        </div>  
          
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12">  
          {[  
            { n: "01", name: "Fora Travel", type: "Host" },  
            { n: "02", name: "Virtuoso", type: "Network" },  
            { n: "03", name: "Four Seasons", type: "PP" },  
            { n: "04", name: "Aman", type: "Preferred" },  
            { n: "05", name: "Belmond", type: "Bellini" },  
            { n: "06", name: "Mandarin Oriental", type: "Fan Club" },  
            { n: "07", name: "Rosewood", type: "Elite" },  
            { n: "08", name: "Peninsula", type: "PenClub" },  
            { n: "09", name: "Dorchester", type: "Diamond" },  
            { n: "10", name: "Hyatt Privé", type: "Pillar" },  
            { n: "11", name: "Oetker", type: "Pearl" },  
            { n: "12", name: "Auberge", type: "Preferred" },  
            { n: "13", name: "One&Only", type: "Pillar" },  
            { n: "14", name: "Relais & Châteaux", type: "Partner" },  
            { n: "15", name: "SLH", type: "withIN" },  
            { n: "16", name: "LHW", type: "Leaders" },  
            { n: "17", name: "Accor", type: "HERA" },  
            { n: "18", name: "IHG", type: "Destined" },  
            { n: "19", name: "St. Regis", type: "STARS" },  
            { n: "20", name: "Ritz-Carlton", type: "STARS" },  
            { n: "21", name: "Waldorf Astoria", type: "Luxe" },  
            { n: "22", name: "Conrad", type: "Luxe" },  
            { n: "23", name: "Bvlgari", type: "Elite" },  
            { n: "24", name: "ILTM", type: "Global" }  
          ].map((item) => (  
            <div key={item.n} className="group border-t border-zinc-900 pt-4 hover:border-[#B5A48B] transition-colors duration-500">  
              <div className="flex justify-between items-center mb-1">  
                <span className="text-[8px] font-mono text-zinc-700">{item.n}</span>  
                <span className="text-[7px] font-mono text-[#B5A48B] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Access Confirmed</span>  
              </div>  
              <p className="text-white tracking-widest text-[10px] uppercase font-light">{item.name}</p>  
              <p className="text-[8px] text-zinc-600 font-mono tracking-tighter uppercase">{item.type}</p>  
            </div>  
          ))}  
        </div>  
      </div>  
    </section>

    {/* THE COLLECTION: NV-00X PORTFOLIO */}  
    <section className="py-32 bg-[#0D0D0D] border-y border-zinc-900">  
      <div className="max-w-7xl mx-auto px-6">  
        <div className="flex justify-between items-center mb-24">  
          <p className="text-[10px] tracking-[0.5em] text-[#B5A48B] uppercase">The Collection</p>  
          <div className="h-[1px] flex-1 bg-zinc-900 mx-8" />  
          <p className="text-[9px] font-mono text-zinc-700 uppercase">Vault Ref: 2026.Archive</p>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">  
          {/* Item 001 */}  
          <div className="group cursor-none">  
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-950 mb-10">  
              <img   
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1500"   
                className="w-full h-full object-cover transition-all duration-1000 grayscale-0 group-hover:grayscale brightness-90 group-hover:brightness-50 scale-100 group-hover:scale-105"   
                alt="NV-001"   
              />  
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">  
                <span className="text-[10px] tracking-[0.8em] uppercase text-[#B5A48B] border border-[#B5A48B] px-6 py-3">Open Record</span>  
              </div>  
            </div>  
            <div className="flex justify-between items-start">  
              <div>  
                <h3 className="text-xl text-white font-light tracking-tighter uppercase italic mb-2">The Urban Monolith</h3>  
                <p className="text-[9px] text-zinc-600 tracking-widest uppercase">New York City // Sanctuary Node</p>  
              </div>  
              <span className="text-zinc-800 font-mono text-sm group-hover:text-[#B5A48B] transition-colors">NV-001</span>  
            </div>  
          </div>

          {/* Item 002 */}  
          <div className="group cursor-none">  
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-950 mb-10">  
              <img   
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1500"   
                className="w-full h-full object-cover transition-all duration-1000 grayscale-0 group-hover:grayscale brightness-90 group-hover:brightness-50 scale-100 group-hover:scale-105"   
                alt="NV-002"   
              />  
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">  
                <span className="text-[10px] tracking-[0.8em] uppercase text-[#B5A48B] border border-[#B5A48B] px-6 py-3">Open Record</span>  
              </div>  
            </div>  
            <div className="flex justify-between items-start">  
              <div>  
                <h3 className="text-xl text-white font-light tracking-tighter uppercase italic mb-2">The Belgravia Archive</h3>  
                <p className="text-[9px] text-zinc-600 tracking-widest uppercase">London // Cultural Node</p>  
              </div>  
              <span className="text-zinc-800 font-mono text-sm group-hover:text-[#B5A48B] transition-colors">NV-002</span>  
            </div>  
          </div>  
        </div>  
      </div>  
    </section>

    {/* CONCIERGE: INTAKE MANIFEST */}  
    <section className="py-40 bg-[#0A0A0A]">  
      <div className="max-w-4xl mx-auto px-6 text-center">  
        <div className="inline-block px-4 py-1 border border-zinc-900 mb-12">  
          <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Protocol: Concierge Intake</span>  
        </div>  
        <h2 className="text-5xl md:text-8xl text-white font-extralight tracking-tighter mb-10 italic">  
          Initiate <span className="text-zinc-700">Access.</span>  
        </h2>  
        <p className="text-zinc-500 mb-20 leading-relaxed font-light tracking-[0.2em] text-xs max-w-2xl mx-auto uppercase">  
          The Bespoke Travel Manifest is currently reviewing <br/>private advisory placements for the upcoming fiscal window.  
        </p>  
          
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 border-t border-zinc-950 pt-16">  
          <div className="text-left">  
            <p className="text-[8px] text-zinc-700 font-mono uppercase mb-2">Window</p>  
            <p className="text-white text-[10px] tracking-widest uppercase italic">Q3 / Q4 2026</p>  
          </div>  
          <div className="h-12 w-[1px] bg-zinc-900 hidden md:block" />  
          <div className="text-left">  
            <p className="text-[8px] text-zinc-700 font-mono uppercase mb-2">Status</p>  
            <p className="text-[#B5A48B] text-[10px] tracking-widest uppercase animate-pulse">Waitlist Only</p>  
          </div>  
          <div className="h-12 w-[1px] bg-zinc-900 hidden md:block" />  
          <button className="px-12 py-4 bg-transparent border border-zinc-800 hover:border-[#B5A48B] hover:text-[#B5A48B] transition-all duration-700 text-xs tracking-[0.5em] uppercase">  
            Open Manifest  
          </button>  
        </div>  
      </div>  
    </section>

    {/* FOOTER: SYSTEM LOG */}  
    <footer className="py-16 bg-black border-t border-zinc-950">  
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">  
        <p className="text-[8px] font-mono text-zinc-800 tracking-[1em] uppercase">  
          NexVoyage Collective // Private Node  
        </p>  
        <p className="text-[8px] font-mono text-zinc-800 uppercase italic">  
          Verified access only  
        </p>  
      </div>  
    </footer>  
  </main>  
);  
}  
