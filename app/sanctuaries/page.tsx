import React from 'react';  
import { SANCTUARY_DATA } from '../../data/sanctuaries';  
import Link from 'next/link';

export default function SanctuaryIndex() {  
  return (  
    <div className="bg-[#F9F8F6] min-h-screen font-serif text-slate-900">  
      {/* Navigation is handled by layout.tsx */}  
        
      <main className="max-w-7xl mx-auto px-6 py-24">  
        <header className="mb-20 text-center md:text-left">  
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">The Collection</h1>  
          <p className="text-xl text-slate-600 max-w-2xl font-light leading-relaxed">  
            A curated atlas of destination archetypes. From the silence of the Alps to the pulse of the metropolis,   
            choose your sanctuary.  
          </p>  
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">  
          {SANCTUARY_DATA.map((sanctuary, index) => (  
            <Link   
              href={`/sanctuaries/${sanctuary.id}`}   
              key={sanctuary.id}  
              className={`group relative overflow-hidden bg-white shadow-sm transition-all duration-700 hover:shadow-2xl   
                ${index % 3 === 0 ? 'md:col-span-8 aspect-[16/9]' : 'md:col-span-4 aspect-[4/5]'}   
                ${index % 4 === 0 ? 'md:mt-12' : ''}`}  
            >  
              <img   
                src={sanctuary.img}   
                alt={sanctuary.name}  
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"  
              />  
                
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />  
                
              <div className="absolute bottom-0 left-0 p-8 w-full text-white">  
                <p className="text-xs uppercase tracking-[0.2em] mb-2 opacity-80">{sanctuary.loc}</p>  
                <h2 className="text-3xl font-light mb-4">{sanctuary.name}</h2>  
                  
                <div className="h-0 group-hover:h-20 overflow-hidden transition-all duration-500 ease-out">  
                  <p className="text-sm italic font-light leading-relaxed mb-4 border-l border-white/30 pl-4">  
                    "Return on Ideas: {sanctuary.roi}"  
                  </p>  
                  <span className="text-xs font-medium uppercase tracking-widest border-b border-white/50 pb-1">  
                    Explore Sanctuary  
                  </span>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </main>

      {/* Footer is handled by layout.tsx */}  
    </div>  
  );  
}  
