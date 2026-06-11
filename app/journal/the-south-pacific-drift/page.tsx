import React from 'react';

export default function SouthPacificDriftPage() {  
const properties = [  
  {  
    name: "The Meridian Float",  
    location: "French Polynesia",  
    note: "Zero footprint, 100% seclusion. Only accessible by private tender."  
  },  
  {  
    name: "Atole Azure",  
    location: "Fiji",  
    note: "Submerged master suites with reinforced glass for 360-degree ocean floor visibility."  
  }  
];

return (  
  <main className="min-h-screen bg-white text-[#0A0A0A] selection:bg-[#C5A059] selection:text-white">  
    <article className="pt-48 pb-32 px-6 max-w-5xl mx-auto">  
      <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">  
        <div className="max-w-2xl">  
          <p className="text-[#C5A059] uppercase tracking-[0.3em] text-[11px] mb-4">Intelligence Report 01</p>  
          <h1 className="text-6xl md:text-8xl font-serif tracking-tighter mb-6">The South Pacific Drift</h1>  
          <p className="text-xl text-black/50 leading-relaxed font-light italic">  
            Where the geography of the mind meets the isolation of the deep blue.  
          </p>  
        </div>  
        <div className="text-right">  
          <span className="text-[10px] tracking-widest text-black/20 block mb-2 font-mono uppercase italic">Published June 10</span>  
          <span className="text-xs uppercase tracking-tighter text-black/40">Category: Floating Sanctuaries</span>  
        </div>  
      </header>

      <div className="grid md:grid-cols-2 gap-16 mb-32 items-center">  
        <div className="space-y-8 text-lg leading-relaxed text-black/70 font-light">  
          <p>  
            Traditional luxury is anchored to land. The new standard is fluid. In the South Pacific, we have curated a collection of floating retreats that drift within protected lagoons, offering a level of privacy that land-based resorts simply cannot replicate.  
          </p>  
          <p>  
            These are not "villas over water." They are autonomous sanctuaries—floating architectural statements that operate with complete self-sufficiency.  
          </p>  
        </div>  
        <div className="bg-[#F5F5F5] p-12 border border-black/5">  
          <h3 className="text-xs uppercase tracking-[0.4em] mb-8 text-[#C5A059]">The Intelligence</h3>  
          <ul className="space-y-8">  
            {properties.map((p) => (  
              <li key={p.name} className="group">  
                <span className="text-sm font-serif block mb-1">{p.name}</span>  
                <span className="text-[10px] uppercase text-black/30 tracking-widest mb-2 block">{p.location}</span>  
                <p className="text-xs text-black/60 italic leading-relaxed">{p.note}</p>  
              </li>  
            ))}  
          </ul>  
        </div>  
      </div>

      <div className="border-t border-black/10 pt-16 flex justify-between items-center">  
        <a href="/journal" className="text-xs uppercase tracking-widest text-black/30 hover:text-black transition-colors">  
          ← Back to Curation  
        </a>  
        <a href="/concierge" className="text-xs uppercase tracking-widest bg-black text-white px-8 py-4 hover:bg-[#C5A059] transition-colors">  
          Inquire for Logistics  
        </a>  
      </div>  
    </article>  
  </main>  
);  
}  
