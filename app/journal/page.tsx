import React from 'react';

export default function JournalPage() {  
  const entries = [  
    {  
      id: "01",  
      category: "Intelligence",  
      title: "The South Pacific Drift",  
      summary: "Three floating retreats where the horizon is the only neighbor.",  
      date: "JUNE 2026"  
    },  
    {  
      id: "02",  
      category: "Seasonal",  
      title: "European Prestige Anchors",  
      summary: "The quietest corners of the Mediterranean for late summer seclusion.",  
      date: "JUNE 2026"  
    }  
  ];

  return (  
    <main className="min-h-screen bg-[#F5F5F5] text-[#0A0A0A] selection:bg-[#C5A059] selection:text-white">  
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">  
        <header className="mb-20">  
          <p className="text-black/40 uppercase tracking-[0.2em] text-xs mb-4">Curation & Intel</p>  
          <h1 className="text-7xl font-serif tracking-tighter mb-4 text-[#0A0A0A]">The Journal</h1>  
          <p className="text-lg text-black/60 max-w-xl border-l-2 border-[#C5A059] pl-6 italic">  
            Practical notes on world-class sanctuaries and seasonal travel intelligence.  
          </p>  
        </header>

        <div className="grid md:grid-cols-2 gap-12">  
          {entries.map((entry) => (  
            <div key={entry.id} className="border border-black/5 p-10 hover:bg-white transition-all duration-700 cursor-pointer group">  
              <div className="flex justify-between items-start mb-12">  
                <span className="text-xs tracking-[0.3em] uppercase text-[#C5A059]">{entry.category}</span>  
                <span className="text-[10px] tracking-widest text-black/30 font-mono">{entry.date}</span>  
              </div>  
              <h3 className="text-3xl font-serif mb-4 group-hover:translate-x-2 transition-transform duration-500">  
                {entry.title}  
              </h3>  
              <p className="text-black/60 mb-8 font-light leading-relaxed">  
                {entry.summary}  
              </p>  
              <div className="h-[1px] w-full bg-black/5 group-hover:bg-[#C5A059] transition-colors" />  
            </div>  
          ))}  
        </div>  
      </section>  
    </main>  
  );  
}  
