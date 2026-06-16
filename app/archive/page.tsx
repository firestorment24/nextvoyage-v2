import React from 'react';  
import Link from 'next/link';

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
    <main className="min-h-screen bg-[#050505] text-[#d4af37] px-6 py-24 selection:bg-[#d4af37] selection:text-black">  
      {/* Editorial Header */}  
      <header className="max-w-7xl mx-auto mb-24 text-center">  
        <h1 className="text-6xl md:text-8xl font-serif mb-8 italic tracking-tighter opacity-90 drop-shadow-2xl">  
          The Archive  
        </h1>  
        <div className="flex items-center justify-center space-x-6">  
          <span className="h-[1px] w-16 bg-[#d4af37]/30"></span>  
          <p className="text-[10px] uppercase tracking-[0.6em] text-[#d4af37]/60 font-light">  
            Authorized Personnel Only  
          </p>  
          <span className="h-[1px] w-16 bg-[#d4af37]/30"></span>  
        </div>  
      </header>

      {/* 3x3 Grid with Brass Borders */}  
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-[#d4af37]/20 border border-[#d4af37]/20">  
        {archives.map((item) => (  
          <Link   
            key={item.id}   
            href={`/archive/${item.id}`}  
            className="group relative bg-[#0a0a0a] aspect-[4/5] overflow-hidden block"  
          >  
            {/* Image Logic: Muted & Grayscale on Desktop, Color on Hover */}  
            <img   
              src={item.image}   
              alt={item.title}   
              className="w-full h-full object-cover transition-all duration-[1200ms] ease-in-out   
                         grayscale md:grayscale group-hover:grayscale-0 brightness-[0.6] group-hover:brightness-100 scale-100 group-hover:scale-110"  
            />

            {/* Brass & Shadow Reveal */}  
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex flex-col justify-end p-12">  
              <span className="text-[10px] mb-3 text-[#d4af37]/60 tracking-[0.5em] uppercase font-sans font-medium">{item.id}</span>  
              <h2 className="text-4xl font-serif italic mb-4 text-[#d4af37]">{item.title}</h2>  
              <p className="text-[11px] text-[#d4af37]/80 leading-relaxed max-w-[240px] uppercase tracking-[0.2em] font-sans">  
                {item.description}  
              </p>  
            </div>  
              
            {/* Persistent Mobile Label */}  
            <div className="md:hidden absolute bottom-8 left-10 text-[#d4af37]">  
              <span className="text-[9px] block mb-1 opacity-50 tracking-[0.4em] uppercase">{item.id}</span>  
              <h2 className="text-2xl font-serif italic">{item.title}</h2>  
            </div>

            {/* Subtle Inner Glow on Hover */}  
            <div className="absolute inset-0 border border-[#d4af37]/0 group-hover:border-[#d4af37]/20 transition-colors duration-1000 pointer-events-none"></div>  
          </Link>  
        ))}  
      </div>

      {/* Footer / Secure Line CTA */}  
      <footer className="mt-32 text-center">  
        <div className="mb-12 flex flex-col items-center">  
          <div className="h-20 w-[1px] bg-gradient-to-b from-transparent to-[#d4af37]/40 mb-8"></div>  
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#d4af37]/40">  
            Coordinates encrypted in transit.  
          </p>  
        </div>  
        <button className="px-16 py-6 border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-700 text-[11px] uppercase tracking-[0.5em] font-sans group relative overflow-hidden">  
          <span className="relative z-10">Request Secure Line Access</span>  
          <div className="absolute inset-0 bg-[#d4af37] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>  
        </button>  
      </footer>  
    </main>  
  );  
}  
