// app/sanctuaries/page.tsx  
import React from 'react';  
import Link from 'next/link';

const SANCTUARIES = [  
  { id: 'metropolitan', name: 'The Metropolitan Trio', tag: 'Urban Dominance', location: 'London / NYC / Tokyo', span: 'col-span-2' },  
  { id: 'fortress', name: 'The Fortress', tag: 'Absolute Privacy', location: 'Swiss Alps', span: 'col-span-1' },  
  { id: 'stadium', name: 'The Stadium', tag: 'Elite Access', location: 'Global Circuits', span: 'col-span-1' },  
  { id: 'alpine', name: 'The Alpine Estate', tag: 'High-Altitude Refinement', location: 'Courchevel', span: 'col-span-1' },  
  { id: 'cinematic', name: 'The Cinematic Archive', tag: 'Visual Legacy', location: 'Amalfi Coast', span: 'col-span-2' },  
  { id: 'safari', name: 'The Safari Outpost', tag: 'Raw Elegance', location: 'Serengeti', span: 'col-span-1' },  
  { id: 'oasis', name: 'The Desert Oasis', tag: 'Silent Luxury', location: 'Marrakech', span: 'col-span-1' },  
  { id: 'floating', name: 'The Floating Sanctuary', tag: 'Nautical Sovereignty', location: 'Mediterranean', span: 'col-span-1' },  
  { id: 'island', name: 'The Island Keep', tag: 'Isolated Majesty', location: 'Seychelles', span: 'col-span-1' },  
];

export default function SanctuaryVault() {  
  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#d4d4d4] font-serif selection:bg-[#c5a47e] selection:text-[#0a0a0a]">  
      {/* Header Section */}  
      <section className="max-w-7xl mx-auto pt-40 pb-20 px-6 text-center">  
        <span className="text-[#c5a47e] uppercase tracking-[0.4em] text-xs mb-6 block">  
          The Sanctuary Vault  
        </span>  
        <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8">  
          The Architecture <br /> of Absence.  
        </h1>  
        <p className="max-w-2xl mx-auto text-lg text-[#a1a1a1] leading-relaxed">  
          A curated collection of properties where privacy is the ultimate amenity. These are not merely stays; they are controlled environments designed for those who navigate the world on their own terms.  
        </p>  
      </section>

      {/* Asymmetrical Grid */}  
      <section className="max-w-7xl mx-auto px-6 pb-32">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">  
          {SANCTUARIES.map((item) => (  
            <Link   
              key={item.id}   
              href={`/sanctuaries/${item.id}`}  
              className={`group relative overflow-hidden bg-[#111] aspect-[4/5] ${item.span} border border-white/5 hover:border-[#c5a47e]/30 transition-all duration-700`}  
            >  
              {/* Overlay for "Heavy" feel */}  
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 z-10" />  
                
              {/* Content */}  
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">  
                <span className="text-[#c5a47e] text-[10px] uppercase tracking-[0.3em] mb-2 opacity-60 group-hover:opacity-100 transition-opacity">  
                  {item.tag}  
                </span>  
                <h3 className="text-2xl text-white font-light mb-1 group-hover:translate-x-2 transition-transform duration-500">  
                  {item.name}  
                </h3>  
                <p className="text-xs text-[#a1a1a1] uppercase tracking-widest">  
                  {item.location}  
                </p>  
                  
                <div className="mt-6 w-0 group-hover:w-full h-[1px] bg-[#c5a47e]/40 transition-all duration-700" />  
              </div>

              {/* Decorative "Keyhole" Element */}  
              <div className="absolute top-6 right-6 text-[10px] text-white/10 uppercase tracking-tighter group-hover:text-[#c5a47e]/40 transition-colors">  
                ID // {item.id.slice(0, 3).toUpperCase()}-VLT  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>  
    </main>  
  );  
}  
