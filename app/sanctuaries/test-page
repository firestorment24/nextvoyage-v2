'use client';

import React from 'react';  
import Link from 'next/link';

const SANCTUARIES = [  
  { id: 'metropolitan', name: 'Metropolitan', tag: 'The Urban Citadel', img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2670&auto=format&fit=crop' },  
  { id: 'floating', name: 'Floating', tag: 'The Aquatic Drift', img: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2670&auto=format&fit=crop' },  
  { id: 'island', name: 'Island', tag: 'The Private Atoll', img: 'https://images.unsplash.com/photo-1506929113675-b9299d39bb6b?q=80&w=2670&auto=format&fit=crop' },  
  { id: 'alpine', name: 'Alpine', tag: 'The Peak Silence', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop' },  
  { id: 'stadium', name: 'Stadium', tag: 'The High Stakes', img: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=2670&auto=format&fit=crop' },  
  { id: 'cinematic', name: 'Cinematic', tag: 'The Still Frame', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2670&auto=format&fit=crop' },  
  { id: 'fortress', name: 'Fortress', tag: 'The Secure Hold', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2670&auto=format&fit=crop' },  
  { id: 'safari', name: 'Safari', tag: 'The Primal Dusk', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2670&auto=format&fit=crop' },  
  { id: 'oasis', name: 'Oasis', tag: 'The Desert Reset', img: 'https://images.unsplash.com/photo-1509316785289-025f54846b5e?q=80&w=2670&auto=format&fit=crop' },  
];

export default function SanctuaryIndex() {  
  return (  
    <div className="bg-[#0D0D0D] text-[#D4AF37] min-h-screen font-serif">  
      {/* Navigation */}  
      <nav className="fixed top-0 w-full z-50 p-8 flex justify-between items-center border-b border-[#D4AF37]/10 bg-[#0D0D0D]/80 backdrop-blur-md">  
        <Link href="/" className="text-xl tracking-widest uppercase">NexVoyage</Link>  
        <div className="flex gap-12 text-sm tracking-widest uppercase">  
          <Link href="/" className="hover:opacity-50 transition-opacity">Home</Link>  
          <Link href="/sanctuaries" className="opacity-100 border-b border-[#D4AF37]">The Collection</Link>  
          <Link href="/reserve" className="hover:opacity-50 transition-opacity">Reserve</Link>  
        </div>  
      </nav>

      <main className="pt-40 px-8 pb-20 max-w-[1600px] mx-auto">  
        <header className="mb-20">  
          <h1 className="text-7xl md:text-9xl font-light mb-4 tracking-tighter">The Sanctuaries</h1>  
          <p className="text-xl md:text-2xl text-[#D4AF37]/60 max-w-2xl leading-relaxed">  
            Nine distinct architectures of stillness. Each designed as a sanctuary for the modern titan.  
          </p>  
        </header>

        {/* Magazine Grid */}  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">  
          {SANCTUARIES.map((item, idx) => (  
            <Link key={item.id} href={`/sanctuaries/${item.id}`} className="group block">  
              <div className={`overflow-hidden mb-6 aspect-[3/4] relative ${idx % 2 === 1 ? 'md:mt-24' : 'mt-0'}`}>  
                <img   
                  src={item.img}   
                  alt={item.name}   
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"  
                />  
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />  
              </div>  
              <div className="flex justify-between items-end border-b border-[#D4AF37]/20 pb-4">  
                <div>  
                  <span className="block text-[10px] uppercase tracking-[0.3em] mb-2 opacity-50">0{idx + 1} — {item.tag}</span>  
                  <h3 className="text-3xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-500">{item.name}</h3>  
                </div>  
                <div className="text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">Explore</div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </main>

      <footer className="p-20 border-t border-[#D4AF37]/10 flex flex-col items-center gap-8">  
          <span className="text-sm tracking-[0.5em] uppercase opacity-40">NexVoyage Collective</span>  
          <div className="flex gap-8 text-xs tracking-widest uppercase opacity-60">  
            <span>© 2026</span>  
            <Link href="/legal">Legal</Link>  
            <Link href="/privacy">Privacy</Link>  
          </div>  
      </footer>  
    </div>  
  );  
}  
