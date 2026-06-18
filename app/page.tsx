import React from 'react';

export default function Home() {  
return (  
<main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#B5A48B]/30">  
  <style dangerouslySetInnerHTML={{ __html: `  
    body, html, #__next, main { background-color: #0A0A0A !important; }  
    * { box-shadow: none !important; border-radius: 0 !important; }  
    ::-webkit-scrollbar { display: none; }  
  `}} />

  {/* HERO SECTION - CHABLÉ VILLA */}  
  <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">  
    <div className="absolute inset-0 z-0">  
      <img   
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/9a/b3/f2/chable-villa.jpg?w=1800&h=-1&s=1"   
        alt="The Sanctuary Node"   
        className="w-full h-full object-cover brightness-[0.5]"  
      />  
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0A0A0A]" />  
    </div>  
      
    <div className="relative z-10 text-center px-6">  
      <p className="text-[10px] tracking-[1.2em] uppercase text-[#B5A48B] mb-8 font-medium">  
        NexVoyage Collective  
      </p>  
      <h1 className="text-7xl md:text-9xl font-extralight tracking-tighter mb-10 italic">  
        Shadow <span className="text-[#B5A48B] font-serif">&</span> Brass  
      </h1>  
      <p className="max-w-xl mx-auto text-zinc-500 text-[11px] tracking-[0.6em] leading-relaxed uppercase">  
        The private infrastructure of global elite travel.  
      </p>  
    </div>  
  </section>

  {/* THE GUARDIAN LAYER: MISSION CRITICAL OFFERING */}  
  <section className="py-40 bg-[#0A0A0A]">  
    <div className="max-w-7xl mx-auto px-6">  
      <div className="grid md:grid-cols-2 gap-24 items-start">  
        <div className="sticky top-32">  
          <p className="text-[10px] tracking-[0.5em] text-[#B5A48B] uppercase mb-12">The Offering</p>  
          <h2 className="text-5xl md:text-7xl text-white font-extralight tracking-tighter mb-12 italic leading-[0.9]">  
            The <span className="text-[#B5A48B]">Guardian</span> Layer.  
          </h2>  
          <p className="text-zinc-400 text-sm tracking-widest uppercase leading-loose mb-16 max-w-md">  
            We operate as the invisible interface between our clients and the global luxury machine. We don't just book; we advocate, secure, and leverage.  
          </p>  
          <div className="grid grid-cols-1 gap-12">  
            <div className="border-l border-zinc-900 pl-6 group">  
              <h4 className="text-[#B5A48B] text-xs tracking-[0.3em] uppercase mb-2">Invisible Advocacy</h4>  
              <p className="text-zinc-600 text-[10px] tracking-widest uppercase leading-relaxed group-hover:text-zinc-400 transition-colors">Every stay is pre-vetted and managed by an invisible concierge team, ensuring your status is recognized before you arrive.</p>  
            </div>  
            <div className="border-l border-zinc-900 pl-6 group">  
              <h4 className="text-[#B5A48B] text-xs tracking-[0.3em] uppercase mb-2">Status Leverage</h4>  
              <p className="text-zinc-600 text-[10px] tracking-widest uppercase leading-relaxed group-hover:text-zinc-400 transition-colors">Accessing our 12-node alliance to unlock the upgrades, credits, and off-market experiences reserved for the 1%.</p>  
            </div>  
            <div className="border-l border-zinc-900 pl-6 group">  
              <h4 className="text-[#B5A48B] text-xs tracking-[0.3em] uppercase mb-2">Tactical Oversight</h4>  
              <p className="text-zinc-600 text-[10px] tracking-widest uppercase leading-relaxed group-hover:text-zinc-400 transition-colors">Real-time transit monitoring and on-ground logistics support that operates entirely in the shadow.</p>  
            </div>  
          </div>  
        </div>  
        <div className="relative group">  
          <div className="aspect-[3/4] overflow-hidden border border-zinc-900">  
            <img   
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"   
              alt="The Operations Node"   
              className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000 brightness-75 group-hover:brightness-50"  
            />  
          </div>  
          <div className="absolute -bottom-10 -left-10 bg-[#0A0A0A] p-8 border border-zinc-900 hidden lg:block">  
            <p className="text-[9px] font-mono text-zinc-700 tracking-widest uppercase">Protocol: Active Surveillance</p>  
          </div>  
        </div>  
      </div>  
    </div>  
  </section>

  {/* STRATEGIC ALLIANCES: THE CORE 12 */}  
  <section className="py-32 bg-[#0A0A0A] border-y border-zinc-900">  
    <div className="max-w-7xl mx-auto px-6">  
      <div className="flex items-center gap-6 mb-20">  
        <span className="text-[10px] tracking-[0.5em] text-[#B5A48B] uppercase">Strategic Alliances</span>  
        <div className="h-[1px] flex-1 bg-zinc-900" />  
        <span className="text-[10px] font-mono text-zinc-700 uppercase">Verified Access Nodes</span>  
      </div>  
        
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16">  
        {[  
          { name: "Fora Travel", type: "Primary Node" },  
          { name: "Virtuoso", type: "Network Hub" },  
          { name: "Aman", type: "Preferred Partner" },  
          { name: "Four Seasons", type: "Elite Pillar" },  
          { name: "Belmond", type: "Bellini Club" },  
          { name: "Rosewood", type: "Elite Status" },  
          { name: "Mandarin Oriental", type: "Fan Club" },  
          { name: "Peninsula", type: "PenClub" },  
          { name: "Dorchester", type: "Diamond Club" },  
          { name: "Oetker", type: "Pearl Partner" },  
          { name: "Auberge", type: "Strategic" },  
          { name: "Hyatt Privé", type: "Pillar" }  
        ].map((partner, i) => (  
          <div key={partner.name} className="group cursor-default">  
            <p className="text-[8px] font-mono text-zinc-700 mb-2 uppercase">0{i + 1}</p>  
            <p className="text-zinc-200 group-hover:text-[#B5A48B] tracking-widest text-[11px] uppercase transition-colors duration-500">{partner.name}</p>  
            <p className="text-[8px] text-zinc-600 font-mono tracking-tighter uppercase mt-1">{partner.type}</p>  
          </div>  
        ))}  
      </div>  
    </div>  
  </section>

  {/* ASYMMETRICAL PORTFOLIO: THE VAULT */}  
  <section className="py-40 bg-[#0A0A0A]">  
    <div className="max-w-7xl mx-auto px-6">  
      <div className="grid grid-cols-12 gap-12 items-end">  
        <div className="col-span-12 md:col-span-8 md:col-start-5 group mb-20 md:mb-0">  
          <div className="aspect-[16/9] overflow-hidden bg-zinc-900 mb-8 border border-zinc-900">  
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000 scale-100 group-hover:scale-105" alt="NV-001" />  
          </div>  
          <div className="flex justify-between items-baseline"><h3 className="text-2xl text-white font-light tracking-tighter uppercase italic">The Monolith Sanctuary</h3><span className="text-[#B5A48B] font-mono text-xs">NV-001</span></div>  
        </div>  
        <div className="col-span-12 md:col-span-5 group md:-mt-40 z-10">  
          <div className="aspect-[4/5] overflow-hidden bg-zinc-900 mb-8 border border-zinc-900">  
            <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000 scale-100 group-hover:scale-105" alt="NV-002" />  
          </div>  
          <div className="flex justify-between items-baseline"><h3 className="text-xl text-white font-light tracking-tighter uppercase italic">The Belgravia Archive</h3><span className="text-[#B5A48B] font-mono text-xs">NV-002</span></div>  
        </div>  
        <div className="col-span-12 group mt-32">  
          <div className="aspect-[21/9] overflow-hidden bg-zinc-900 mb-8 border border-zinc-900">  
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000 brightness-90 group-hover:brightness-75 scale-100 group-hover:scale-105" alt="NV-003" />  
          </div>  
          <div className="flex justify-between items-baseline max-w-4xl"><h3 className="text-2xl text-white font-light tracking-tighter uppercase italic">The Alpine Bastion</h3><span className="text-[#B5A48B] font-mono text-xs">NV-003</span></div>  
        </div>  
      </div>  
    </div>  
  </section>

  {/* PRIVATE TRANSIT: CUSTOM BRASS & SHADOW JET */}  
  <section className="py-32 bg-[#0D0D0D] border-y border-zinc-950">  
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">  
      <div className="order-2 md:order-1">  
        <span className="text-[10px] tracking-[0.5em] text-[#B5A48B] uppercase mb-8 block">Transit Logic</span>  
        <h2 className="text-4xl md:text-6xl text-white font-extralight tracking-tighter mb-8 italic">The Global Fleet</h2>  
        <p className="text-zinc-500 text-xs tracking-widest uppercase leading-loose mb-12 max-w-md">Propelling the Collective across borders with invisible efficiency. Private aviation, maritime assets, and secured ground logistics.</p>  
        <div className="flex gap-8 text-zinc-700 font-mono text-[9px] uppercase tracking-widest"><span>Jet Access</span><span>•</span><span>Yacht Charter</span><span>•</span><span>Secured Transit</span></div>  
      </div>  
      <div className="relative aspect-video overflow-hidden border border-zinc-900 group order-1 md:order-2">  
        <img src="https://cdn.marblism.com/jyV_xaai_p4.webp" className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000 brightness-75 group-hover:brightness-50" alt="Private Advisory Jet" />  
      </div>  
    </div>  
  </section>

  {/* THE PERSPECTIVE: JOURNAL TEASER */}  
  <section className="py-40 bg-[#0A0A0A]">  
    <div className="max-w-4xl mx-auto px-6 text-center">  
      <p className="text-[10px] tracking-[0.8em] text-zinc-600 uppercase mb-12">The Perspective</p>  
      <h2 className="text-5xl md:text-7xl text-white font-extralight tracking-tighter italic mb-16 leading-tight">Read the <span className="text-[#B5A48B]">Journal</span> of Modern Leverage.</h2>  
      <button className="text-[#B5A48B] text-[10px] tracking-[0.5em] uppercase border-b border-[#B5A48B] pb-2 hover:text-white hover:border-white transition-all duration-500">Enter the Journal</button>  
    </div>  
  </section>

  {/* CONCIERGE: INTAKE MANIFEST */}  
  <section className="py-48 bg-[#0A0A0A] border-t border-zinc-950">  
    <div className="max-w-3xl mx-auto px-6 text-center">  
      <div className="inline-block px-4 py-1 border border-[#B5A48B]/30 mb-12"><span className="text-[8px] font-mono text-[#B5A48B] uppercase tracking-widest">Protocol: Concierge Intake</span></div>  
      <h2 className="text-5xl md:text-8xl text-white font-extralight tracking-tighter mb-12 italic">Initiate <span className="text-zinc-800">Access.</span></h2>  
      <button className="group relative overflow-hidden px-20 py-6 border border-zinc-800"><span className="relative z-10 text-[10px] tracking-[0.8em] text-[#B5A48B] uppercase group-hover:text-black transition-colors duration-500">Open Manifest</span><div className="absolute inset-0 bg-[#B5A48B] translate-y-full group-hover:translate-y-0 transition-transform duration-500" /></button>  
    </div>  
  </section>

  {/* FOOTER */}  
  <footer className="py-20 bg-black border-t border-zinc-950">  
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">  
      <p className="text-[8px] font-mono text-zinc-800 tracking-[1em] uppercase">NexVoyage Collective // Private Node</p>  
      <div className="flex gap-12 text-[8px] font-mono text-zinc-800 uppercase tracking-widest"><span>Archive</span><span>Journal</span><span>Concierge</span></div>  
    </div>  
  </footer>  
</main>  
);  
}  
