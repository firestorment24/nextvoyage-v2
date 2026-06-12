'use client';

import React, { useState } from 'react';  
import Link from 'next/link';

const sanctuaries = [  
  {  
    id: 'sky-pavilion',  
    title: 'The Sky Pavilion',  
    location: 'New York, USA',  
    category: 'Urban',  
    imageLabel: '01'  
  },  
  {  
    id: 'aegean-solstice',  
    title: 'The Aegean Solstice',  
    location: 'Cyclades, Greece',  
    category: 'Coastal',  
    imageLabel: '02'  
  },  
  {  
    id: 'obsidian-ridge',  
    title: 'The Obsidian Ridge',  
    location: 'South Coast, Iceland',  
    category: 'Nature',  
    imageLabel: '03'  
  },  
  {  
    id: 'cedar-veil',  
    title: 'The Cedar Veil',  
    location: 'Kyoto, Japan',  
    category: 'Cultural',  
    imageLabel: '04'  
  }  
];

const categories = ['All', 'Urban', 'Coastal', 'Nature', 'Cultural'];

export default function Archive() {  
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredSanctuaries = activeFilter === 'All'   
    ? sanctuaries   
    : sanctuaries.filter(s => s.category === activeFilter);

  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#f4f4f4] pt-32 pb-20 px-6">  
      <header className="max-w-7xl mx-auto mb-16">  
        <h2 className="text-xs uppercase tracking-[0.4em] text-white/30 mb-4">  
          The Anthology  
        </h2>  
        <h1 className="text-5xl md:text-6xl font-serif italic mb-12">  
          Selected Sanctuaries  
        </h1>

        {/* Soft Label Navigation */}  
        <nav className="flex flex-wrap gap-x-8 gap-y-4 border-b border-white/5 pb-8">  
          {categories.map((cat) => (  
            <button  
              key={cat}  
              onClick={() => setActiveFilter(cat)}  
              className={`text-[10px] uppercase tracking-[0.3em] transition-all duration-500 ${  
                activeFilter === cat   
                ? 'text-white border-b border-white pb-1'   
                : 'text-white/30 hover:text-white/60'  
              }`}  
            >  
              {cat}  
            </button>  
          ))}  
        </nav>  
      </header>

      <section className="max-w-7xl mx-auto min-h-[60vh]">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">  
          {filteredSanctuaries.map((item, index) => (  
            <Link   
              key={item.id}   
              href={`/manifest/${item.id}`}  
              className={`group block space-y-6 transition-all duration-700 animate-in fade-in slide-in-from-bottom-4 ${  
                index % 2 !== 0 ? 'md:mt-32' : ''  
              }`}  
            >  
              <div className="relative aspect-[4/5] bg-white/5 overflow-hidden transition-all duration-700 group-hover:scale-[1.01]">  
                <div className="absolute top-6 left-6 text-[10px] tracking-widest text-white/40">  
                  REF // {item.imageLabel}  
                </div>  
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />  
              </div>

              <div className="flex justify-between items-end border-b border-white/10 pb-6 group-hover:border-white/40 transition-colors">  
                <div className="space-y-1">  
                  <h3 className="text-2xl font-serif italic leading-none">{item.title}</h3>  
                  <p className="text-xs uppercase tracking-widest text-white/40">{item.location}</p>  
                </div>  
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors">  
                  View Entry  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      <footer className="mt-48 max-w-2xl mx-auto text-center space-y-8">  
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 to-transparent mx-auto mb-12" />  
        <p className="text-white/40 font-light italic leading-relaxed">  
          "The collection is not static. We are constantly identifying new spaces that meet the threshold of stillness required by the Collective."  
        </p>  
        <Link href="/reserve" className="inline-block text-[10px] uppercase tracking-[0.4em] border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all">  
          Request Inclusion  
        </Link>  
      </footer>  
    </main>  
  );  
}  
