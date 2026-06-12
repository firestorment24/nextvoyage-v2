import React from 'react'  
import Link from 'next/link'

const sanctuaries = [  
  { id: 'azure-heights', name: 'Azure Heights', location: 'Amalfi Coast, Italy', tagline: 'The blue hour, perfected.' },  
  { id: 'velvet-pines', name: 'Velvet Pines', location: 'Zermatt, Switzerland', tagline: 'The pinnacle of alpine silence.' },  
  { id: 'obsidian-sands', name: 'Obsidian Sands', location: 'Santorini, Greece', tagline: 'Volcanic luxury on the edge.' },  
  { id: 'gilded-dunes', name: 'Gilded Dunes', location: 'Dubai, UAE', tagline: 'Desert royalty redefined.' },  
  { id: 'jade-canopy', name: 'Jade Canopy', location: 'Ubud, Bali', tagline: 'A dialogue with the jungle.' },  
  { id: 'ivory-reef', name: 'Ivory Reef', location: 'Maldives', tagline: 'The architecture of water.' },  
]

export default function ArchivePage() {  
  return (  
    <main className="min-h-screen bg-black pt-32 pb-20 px-8 md:px-20">  
      <header className="mb-20">  
        <h1 className="text-[#C5A059] font-serif text-5xl md:text-7xl tracking-tighter mb-4">  
          The Elite Ledger  
        </h1>  
        <p className="text-[#C5A059]/40 font-sans text-xs uppercase tracking-[0.4em]">  
          Quarterly Rotation: Summer 2026  
        </p>  
      </header>

      <div className="grid grid-cols-1 gap-12">  
        {sanctuaries.map((item, index) => (  
          <Link   
            key={item.id}   
            href={`/archive/${item.id}`}  
            className="group border-b border-[#C5A059]/10 pb-12 flex flex-col md:flex-row md:items-end justify-between hover:border-[#C5A059]/30 transition-colors"  
          >  
            <div className="flex flex-col">  
              <span className="text-[#C5A059]/40 font-sans text-[10px] mb-4 uppercase tracking-widest">  
                Entry No. 00{index + 1}  
              </span>  
              <h2 className="text-[#C5A059] font-serif text-3xl md:text-5xl tracking-tight group-hover:text-white transition-colors">  
                {item.name}  
              </h2>  
              <span className="text-[#C5A059]/60 font-sans text-xs uppercase tracking-[0.2em] mt-2">  
                {item.location}  
              </span>  
            </div>  
              
            <div className="mt-6 md:mt-0 md:text-right">  
              <p className="text-[#C5A059]/40 font-serif italic text-lg">  
                "{item.tagline}"  
              </p>  
            </div>  
          </Link>  
        ))}  
      </div>

      <footer className="mt-32 text-center">  
        <p className="text-[#C5A059]/20 font-sans text-[10px] uppercase tracking-[0.5em]">  
          End of Current Ledger  
        </p>  
      </footer>  
    </main>  
  )  
}  
