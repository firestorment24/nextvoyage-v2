import React from 'react';

const archetypes = [  
  { id: '01', name: 'The Fortress', type: 'Monolithic' },  
  { id: '02', name: 'The Oasis', type: 'Fluid' },  
  { id: '03', name: 'The Observatory', type: 'Aerial' },  
  { id: '04', name: 'The Sanctum', type: 'Subterranean' },  
  { id: '05', name: 'The Spire', type: 'Vertical' },  
  { id: '06', name: 'The Grove', type: 'Arboreal' },  
  { id: '07', name: 'The Atoll', type: 'Maritime' },  
  { id: '08', name: 'The Peak', type: 'Alpine' },  
  { id: '09', name: 'The Vault', type: 'Urban' },  
];

export default function ManifestPage() {  
  return (  
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5] selection:bg-[#d4af37] selection:text-black">  
      {/* Background Ambience */}  
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_right,_#1a1a1a_0%,_#050505_100%)] pointer-events-none" />

      <section className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 md:py-32">  
          
        {/* Header */}  
        <header className="mb-24 md:mb-32">  
          <div className="flex items-center space-x-4 mb-6">  
            <div className="h-[1px] w-12 bg-[#d4af37]" />  
            <span className="font-sans text-[0.6rem] uppercase tracking-[0.4em] text-[#d4af37]">Portfolio Engine</span>  
          </div>  
          <h1 className="font-serif text-5xl md:text-8xl text-[#f0f0f0] uppercase tracking-[0.3em] font-light leading-none mb-10">  
            The <span className="text-[#d4af37]">Manifest</span>  
          </h1>  
          <p className="max-w-xl font-light text-white/50 leading-relaxed tracking-wide">  
            A curated ledger of global sanctuaries. We facilitate transitions into the world’s most secluded properties through a proprietary booking lens.  
          </p>  
        </header>

        {/* 3x3 Elite Ledger Grid */}  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#d4af37]/10 border border-[#d4af37]/10 shadow-2xl">  
          {archetypes.map((item) => (  
            <div   
              key={item.id}   
              className="group relative bg-black aspect-square p-8 flex flex-col justify-between transition-all duration-700 hover:bg-[#0a0a0a] overflow-hidden"  
            >  
              {/* Background Number Accent */}  
              <span className="absolute -bottom-4 -right-2 font-serif text-9xl text-white/[0.02] transition-colors duration-700 group-hover:text-[#d4af37]/[0.05]">  
                {item.id}  
              </span>

              <div className="flex justify-between items-start relative z-10">  
                <span className="font-sans text-[0.6rem] text-[#d4af37] tracking-widest">{item.id}</span>  
                <div className="w-1.5 h-1.5 border border-[#d4af37]/40 rotate-45 group-hover:bg-[#d4af37] transition-all duration-500" />  
              </div>

              <div className="relative z-10">  
                <p className="font-sans text-[0.5rem] uppercase tracking-[0.3em] text-white/40 mb-2">{item.type}</p>  
                <h3 className="font-serif text-2xl md:text-3xl text-[#f5f5f5] uppercase tracking-wider group-hover:text-[#d4af37] transition-colors duration-500">  
                  {item.name}  
                </h3>  
              </div>

              {/* Hover Interaction */}  
              <div className="absolute inset-0 border border-transparent group-hover:border-[#d4af37]/20 transition-all duration-700" />  
            </div>  
          ))}  
        </div>

        {/* Global Access Statement */}  
        <footer className="mt-24 md:mt-32 border-t border-[#d4af37]/10 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">  
          <p className="font-sans text-[0.6rem] uppercase tracking-[0.5em] text-white/30">  
            Worldwide Booking Capabilities Active  
          </p>  
          <button className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-[#d4af37] border-b border-[#d4af37] pb-1 hover:text-white hover:border-white transition-all duration-500">  
            View Sanctuary Details  
          </button>  
        </footer>  
      </section>  
    </main>  
  );  
}  
