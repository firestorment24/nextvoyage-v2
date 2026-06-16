'use client';

import React, { useState } from 'react';

// The Master Ledger: Destination Intelligence for HNW Travelers  
const destinations = [  
  {  
    id: "001",  
    location: "Lake Como",  
    coordinates: "45.9975° N, 9.2345° E",  
    summary: "The silent orchestration of silk and water.",  
    sanctuary: "Villa d'Este (The Cardinal Suite) // Private Residence in Moltrasio.",  
    orchestration: "Midnight seaplane arrival; Private silk weaving workshop in Bellagio; Riva boat transit with personal sommelier."  
  },  
  {  
    id: "002",  
    location: "Bhutan",  
    coordinates: "27.5142° N, 90.4336° E",  
    summary: "A sanctuary where the clock has no hands.",  
    sanctuary: "Amankora (The Five Lodge Circuit) // Punakha Dzong private quarters.",  
    orchestration: "Prayer flag ceremony with high lamas; Private trek to Tiger's Nest via secret lower trails; Helicopter traverse of the Himalayan peaks."  
  },  
  {  
    id: "003",  
    location: "Svalbard",  
    coordinates: "77.8750° N, 20.9752° E",  
    summary: "The ultimate silence of the high Arctic.",  
    sanctuary: "Nordenskiöld Lodge // Expedition-grade private yacht 'Varda'.",  
    orchestration: "Glacier trekking with expert glaciologists; Northern Lights dining on a frozen fjord; Polar bear tracking via carbon-neutral dog sled."  
  },  
  {  
    id: "004",  
    location: "Kyoto",  
    coordinates: "35.0116° N, 135.7681° E",  
    summary: "The architecture of time and tea.",  
    sanctuary: "Aman Kyoto // Secret Machiya in Gion District.",  
    orchestration: "Private tea ceremony with a Grand Master; Zen garden meditation led by a head monk; After-hours access to the Katsura Imperial Villa."  
  },  
  {  
    id: "005",  
    location: "Namib Desert",  
    coordinates: "24.8864° S, 15.3904° E",  
    summary: "The geometry of ancient dust.",  
    sanctuary: "&Beyond Sossusvlei Desert Lodge // Star-dune private bivouac.",  
    orchestration: "Hot air ballooning over Sossusvlei at dawn; Private geology masterclass; Sandboarding the world's tallest dunes."  
  },  
  // ... more destinations would be added here to reach the 27  
];

export default function JournalPage() {  
  const [selected, setSelected] = useState<string | null>(null);

  return (  
    <div className="min-h-screen bg-[#0a0a0a] text-[#d4af37] p-8 md:p-24 selection:bg-[#d4af37] selection:text-black">  
        
      {/* Header Section */}  
      <header className="max-w-6xl mx-auto mb-32 space-y-6">  
        <div className="flex items-center gap-4 opacity-40">  
          <div className="h-[1px] w-12 bg-[#d4af37]"></div>  
          <span className="font-mono text-[10px] uppercase tracking-[0.4em]">Volume 01 // The Master Ledger</span>  
        </div>  
        <h1 className="font-serif text-6xl md:text-8xl italic font-light tracking-tighter">  
          The Journal  
        </h1>  
        <p className="font-serif text-xl md:text-2xl opacity-60 max-w-2xl leading-relaxed italic">  
          "A curated archive of sanctuaries and the orchestrations that define them."  
        </p>  
      </header>

      {/* Magazine Grid */}  
      <section className="max-w-6xl mx-auto border-t border-[#d4af37]/10">  
        {destinations.map((dest) => (  
          <div   
            key={dest.id}  
            onClick={() => setSelected(selected === dest.id ? null : dest.id)}  
            className="group border-b border-[#d4af37]/10 py-16 cursor-pointer hover:bg-[#d4af37]/[0.02] transition-all duration-700"  
          >  
            <div className="flex flex-col md:flex-row justify-between items-baseline gap-8">  
              {/* ID & Title */}  
              <div className="space-y-4">  
                <span className="font-mono text-[10px] tracking-[0.5em] opacity-30 group-hover:opacity-100 transition-opacity">  
                  REF_{dest.id} // {dest.coordinates}  
                </span>  
                <h2 className="font-serif text-4xl md:text-6xl italic tracking-tight group-hover:pl-4 transition-all duration-700">  
                  {dest.location}  
                </h2>  
              </div>

              {/* Summary Text */}  
              <div className="md:max-w-md text-left md:text-right">  
                <p className="font-serif text-lg opacity-60 leading-relaxed italic group-hover:opacity-100 transition-opacity">  
                  {dest.summary}  
                </p>  
              </div>  
            </div>

            {/* Expanded Intel (The Soul) */}  
            <div className={`overflow-hidden transition-all duration-1000 ${selected === dest.id ? 'max-h-[500px] mt-16' : 'max-h-0'}`}>  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-[#d4af37]/5">  
                <div className="space-y-4">  
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40">The Sanctuary Archive</h3>  
                  <p className="font-serif text-xl italic leading-relaxed">{dest.sanctuary}</p>  
                </div>  
                <div className="space-y-4">  
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40">The Orchestration</h3>  
                  <p className="font-serif text-xl italic leading-relaxed">{dest.orchestration}</p>  
                </div>  
                <div className="md:col-span-2 pt-8">  
                  <button className="font-mono text-[10px] uppercase tracking-[0.4em] border border-[#d4af37]/30 px-6 py-3 hover:bg-[#d4af37] hover:text-black transition-all">  
                    Initiate Private Request for {dest.location}  
                  </button>  
                </div>  
              </div>  
            </div>  
          </div>  
        ))}  
      </section>

      {/* Footer Navigation */}  
      <footer className="max-w-6xl mx-auto mt-32 py-12 flex justify-between items-center border-t border-[#d4af37]/10">  
        <span className="font-mono text-[10px] opacity-20 uppercase tracking-widest">  
          End of Ledger // Page 01 of 27  
        </span>  
        <a href="/invitation" className="font-mono text-[10px] uppercase tracking-[0.4em] hover:opacity-50 transition-opacity">  
          Return to Terminal →  
        </a>  
      </footer>  
    </div>  
  );  
}  
