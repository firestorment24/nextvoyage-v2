import React from 'react';  
import Link from 'next/link';

const sanctuaries = [  
  {  
    id: 'sky-pavilion',  
    title: 'The Sky Pavilion',  
    location: 'New York, USA',  
    category: 'Urban Sanctuary',  
    imageLabel: '01'  
  },  
  {  
    id: 'aegean-solstice',  
    title: 'The Aegean Solstice',  
    location: 'Cyclades, Greece',  
    category: 'Coastal Retreat',  
    imageLabel: '02'  
  },  
  {  
    id: 'obsidian-ridge',  
    title: 'The Obsidian Ridge',  
    location: 'South Coast, Iceland',  
    category: 'High Desert',  
    imageLabel: '03'  
  },  
  {  
    id: 'cedar-veil',  
    title: 'The Cedar Veil',  
    location: 'Kyoto, Japan',  
    category: 'Cultural Anchor',  
    imageLabel: '04'  
  }  
];

export default function Archive() {  
  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#f4f4f4] pt-32 pb-20 px-6">  
      <header className="max-w-7xl mx-auto mb-24">  
        <h2 className="text-xs uppercase tracking-[0.4em] text-white/30 mb-4">  
          The Anthology  
        </h2>  
        <h1 className="text-5xl md:text-6xl font-serif italic">  
          Selected Sanctuaries  
        </h1>  
      </header>

      <section className="max-w-7xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">  
          {sanctuaries.map((item, index) => (  
            <Link   
              key={item.id}   
              href={`/manifest/${item.id}`}  
              className={`group block space-y-6 ${index % 2 !== 0 ? 'md:mt-32' : ''}`}  
            >  
              {/* Visual Container */}  
              <div className="relative aspect-[4/5] bg-white/5 overflow-hidden transition-all duration-700 group-hover:scale-[1.02]">  
                <div className="absolute top-6 left-6 text-[10px] tracking-widest text-white/40">  
                  REF // {item.imageLabel}  
                </div>  
                {/* Subtle gradient overlay */}  
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />  
              </div>

              {/* Meta Data */}  
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

      {/* Narrative Break */}  
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
