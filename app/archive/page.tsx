import React from 'react';  
import Link from 'next/link';

// Archetypes for the Archive  
const archives = [  
  { id: '01', title: 'The Tundra', description: 'Arctic silence and glass-walled isolation.', image: 'https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&q=80&w=1200' },  
  { id: '02', title: 'The Archipelago', description: 'Private atolls and turquoise horizons.', image: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&q=80&w=1200' },  
  { id: '03', title: 'The Metropolis', description: 'Penthouse views and midnight logistics.', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200' },  
  { id: '04', title: 'The Savannah', description: 'Golden plains and the rhythm of the wild.', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200' },  
  { id: '05', title: 'The Alpine', description: 'Glacial peaks and timber-framed warmth.', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200' },  
  { id: '06', title: 'The Desert', description: 'Infinite dunes and obsidian night skies.', image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80&w=1200' },  
  { id: '07', title: 'The Rainforest', description: 'Emerald canopies and deep humidity.', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200' },  
  { id: '08', title: 'The Coast', description: 'Rugged cliffs and the Atlantic spray.', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=1200' },  
  { id: '09', title: 'The Estate', description: 'Manicured tradition and walled gardens.', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200' },  
];

export default function ArchivePage() {  
  return (  
    <main className="min-h-screen bg-[#FCFAF7] text-[#1C1C1C] px-6 py-24">  
      {/* Editorial Header */}  
      <header className="max-w-7xl mx-auto mb-24 text-center">  
        <h1 className="text-6xl md:text-8xl font-serif mb-8 italic tracking-tight">  
          The Archive  
        </h1>  
        <div className="flex items-center justify-center space-x-4">  
          <span className="h-px w-12 bg-[#1C1C1C]/20"></span>  
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#1C1C1C]/60">  
            A Ledger of Curated Sanctuaries  
          </p>  
          <span className="h-px w-12 bg-[#1C1C1C]/20"></span>  
        </div>  
      </header>

      {/* 3x3 Ledger Grid */}  
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1C1C1C]/10 border border-[#1C1C1C]/10">  
        {archives.map((item) => (  
          <Link   
            key={item.id}   
            href={`/archive/${item.id}`}  
            className="group relative bg-[#FCFAF7] aspect-[4/5] overflow-hidden block"  
          >  
            {/* Visual Logic: Full color on mobile, Grayscale-to-Color on Desktop Hover */}  
            <img   
              src={item.image}   
              alt={item.title}   
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out   
                         grayscale-0 md:grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105"  
            />

            {/* Ink Black / Parchment Overlay */}  
            <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF7]/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-12">  
              <span className="text-[10px] mb-3 opacity-40 tracking-[0.4em] uppercase font-sans">{item.id}</span>  
              <h2 className="text-4xl font-serif italic mb-4">{item.title}</h2>  
              <p className="text-[11px] text-[#1C1C1C]/70 leading-relaxed max-w-[240px] uppercase tracking-[0.2em] font-sans">  
                {item.description}  
              </p>  
            </div>  
              
            {/* Mobile Label */}  
            <div className="md:hidden absolute bottom-8 left-10">  
              <span className="text-[9px] block mb-1 opacity-50 tracking-[0.3em] uppercase">{item.id}</span>  
              <h2 className="text-2xl font-serif italic">{item.title}</h2>  
            </div>  
          </Link>  
        ))}  
      </div>

      {/* CTA Section */}  
      <footer className="mt-32 text-center">  
        <p className="text-[11px] uppercase tracking-[0.4em] text-[#1C1C1C]/40 mb-10">  
          Access to specific coordinates requires authorization.  
        </p>  
        <button className="px-14 py-6 border border-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-[#FCFAF7] transition-all text-[11px] uppercase tracking-[0.4em] font-sans">  
          Begin the Inquiry  
        </button>  
      </footer>  
    </main>  
  );  
}  
