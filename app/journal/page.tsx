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
    orchestration: "Midnight seaplane arrival from Milan; Private silk weaving workshop in Bellagio; Riva boat transit with personal sommelier and 1945 vintages."  
  },  
  {  
    id: "002",  
    location: "Bhutan",  
    coordinates: "27.5142° N, 90.4336° E",  
    summary: "A sanctuary where the clock has no hands.",  
    sanctuary: "Amankora (The Five Lodge Circuit) // Punakha Dzong private quarters.",  
    orchestration: "Prayer flag ceremony with high lamas; Private trek to Tiger's Nest via secret lower trails; Helicopter traverse of the Himalayan peaks at sunrise."  
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
    orchestration: "Hot air ballooning over Sossusvlei at dawn; Private geology masterclass; Sandboarding the world's tallest dunes followed by a champagne oasis lunch."  
  },  
  {  
    id: "006",  
    location: "Antarctica",  
    coordinates: "80.0000° S, 13.5000° E",  
    summary: "The white desert of the end of the world.",  
    sanctuary: "Whichaway Camp (Echo Pods) // Private Ice Runway Access.",  
    orchestration: "Emperor Penguin colony visitation via private jet; South Pole traversal; Ice cave meditation with specialized sound acoustics."  
  },  
  {  
    id: "007",  
    location: "Raja Ampat",  
    coordinates: "0.5000° S, 130.0000° E",  
    summary: "The last paradise of the blue frontier.",  
    sanctuary: "The Prana Phinisi // Misool Private Island Sanctuary.",  
    orchestration: "Deep sea exploration with marine biologists; Manta ray night diving; Private island dining under the Milky Way with a live string quartet."  
  },  
  {  
    id: "008",  
    location: "Patagonia",  
    coordinates: "51.7269° S, 72.5060° W",  
    summary: "Wind-sculpted granite and glacial mirrors.",  
    sanctuary: "Awasi Patagonia // Private Villa within Torres del Paine.",  
    orchestration: "Puma tracking with lead conservationists; Private fly-fishing in untouched streams; Gaucho-led horse traverse across the steppes."  
  },  
  {  
    id: "009",  
    location: "Amalfi Coast",  
    coordinates: "40.6333° N, 14.6027° E",  
    summary: "Vertical living on the edge of the Tyrrhenian.",  
    sanctuary: "Hotel Santa Caterina (The Follia d'Amalfi) // Private cliffside loft.",  
    orchestration: "Vintage Alfa Romeo coastal drive; Private lemon grove dinner in Ravello; Moonlight cruise to the Li Galli islands."  
  },  
  {  
    id: "010",  
    location: "Gobi Desert",  
    coordinates: "42.5900° N, 103.4300° E",  
    summary: "The nomadic spirit of the Flaming Cliffs.",  
    sanctuary: "Three Camel Lodge // Custom-built expedition Gers.",  
    orchestration: "Dinosaur egg fossil hunting with paleontologists; Traditional Mongolian archery masterclass; Stargazing with a desert astronomer."  
  }  
];

export default function JournalPage() {  
  const [selected, setSelected] = useState<string | null>(null);

  const handleRequest = (location: string) => {  
    // Passes the location intent to the Invitation terminal  
    const intent = encodeURIComponent(`Orchestration Request for ${location}`);  
    window.location.href = `/invitation?reason=${intent}`;  
  };

  return (  
    <div className="min-h-screen bg-[#0a0a0a] text-[#d4af37] p-8 md:p-24 selection:bg-[#d4af37] selection:text-black">  
        
      {/* Header Section */}  
      <header className="max-w-6xl mx-auto mb-32 space-y-8">  
        <div className="flex items-center gap-4 opacity-40">  
          <div className="h-[1px] w-12 bg-[#d4af37]"></div>  
          <span className="font-mono text-[10px] uppercase tracking-[0.5em]">Volume 01 // The Master Ledger</span>  
        </div>  
        <h1 className="font-serif text-6xl md:text-9xl italic font-light tracking-tighter leading-none">  
          The Journal  
        </h1>  
        <p className="font-serif text-xl md:text-2xl opacity-60 max-w-2xl leading-relaxed italic">  
          "A curated archive of sanctuaries and the orchestrations that define the modern voyager."  
        </p>  
      </header>

      {/* Magazine Grid List */}  
      <section className="max-w-6xl mx-auto border-t border-[#d4af37]/10">  
        {destinations.map((dest) => (  
          <div   
            key={dest.id}  
            onClick={() => setSelected(selected === dest.id ? null : dest.id)}  
            className="group border-b border-[#d4af37]/10 py-16 cursor-pointer hover:bg-[#d4af37]/[0.02] transition-all duration-700"  
          >  
            <div className="flex flex-col md:flex-row justify-between items-baseline gap-12">  
              {/* ID & Title */}  
              <div className="space-y-4">  
                <span className="font-mono text-[10px] tracking-[0.5em] opacity-30 group-hover:opacity-100 transition-opacity">  
                  LEDGER_REF_{dest.id} // {dest.coordinates}  
                </span>  
                <h2 className="font-serif text-4xl md:text-7xl italic tracking-tight group-hover:pl-6 transition-all duration-700">  
                  {dest.location}  
                </h2>  
              </div>

              {/* Summary Text */}  
              <div className="md:max-w-md text-left md:text-right">  
                <p className="font-serif text-lg md:text-xl opacity-60 leading-relaxed italic group-hover:opacity-100 transition-opacity">  
                  "{dest.summary}"  
                </p>  
              </div>  
            </div>

            {/* Expanded Intel (The Soul) */}  
            <div className={`overflow-hidden transition-all duration-[1200ms] cubic-bezier(0.22, 1, 0.36, 1) ${selected === dest.id ? 'max-h-[800px] mt-20 opacity-100' : 'max-h-0 opacity-0'}`}>  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-[#d4af37]/5">  
                  
                <div className="space-y-6">  
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">I. The Sanctuary Archive</h3>  
                  <p className="font-serif text-2xl italic leading-relaxed opacity-90">{dest.sanctuary}</p>  
                </div>

                <div className="space-y-6">  
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">II. The Orchestration</h3>  
                  <p className="font-serif text-2xl italic leading-relaxed opacity-90">{dest.orchestration}</p>  
                </div>

                <div className="md:col-span-2 pt-12">  
                  <button   
                    onClick={(e) => {  
                      e.stopPropagation();  
                      handleRequest(dest.location);  
                    }}  
                    className="group/btn relative font-mono text-[11px] uppercase tracking-[0.4em] border border-[#d4af37] px-10 py-5 overflow-hidden transition-all duration-500"  
                  >  
                    <span className="relative z-10 group-hover/btn:text-black transition-colors duration-500">  
                      Initiate Private Request  
                    </span>  
                    <div className="absolute inset-0 bg-[#d4af37] translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-500"></div>  
                  </button>  
                </div>  
              </div>  
            </div>  
          </div>  
        ))}  
      </section>

      {/* Footer / Navigation */}  
      <footer className="max-w-6xl mx-auto mt-40 py-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#d4af37]/10">  
        <span className="font-mono text-[10px] opacity-20 uppercase tracking-[0.6em]">  
          NexVoyage Collective // End of Archive  
        </span>  
        <div className="flex gap-12">  
          <a href="/invitation" className="font-mono text-[10px] uppercase tracking-[0.4em] hover:opacity-50 transition-opacity flex items-center gap-2">  
            Terminal <span className="text-lg">→</span>  
          </a>  
        </div>  
      </footer>  
    </div>  
  );  
}  
