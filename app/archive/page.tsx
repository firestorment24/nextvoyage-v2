// app/archive/page.tsx  
import React from 'react'  
import Link from 'next/link'  
import Image from 'next/image'  
import { SANCTUARIES_DATA } from '@/lib/data/sanctuaries'

export default function ArchivePage() {  
// Ensure we're pulling all items from our data  
const items = Array.isArray(SANCTUARIES_DATA)   
  ? SANCTUARIES_DATA   
  : Object.values(SANCTUARIES_DATA)

return (  
  <main className="min-h-screen bg-[#000000] text-[#D4AF37] selection:bg-[#D4AF37] selection:text-black">  
    {/* Minimalist Header */}  
    <header className="px-6 pt-32 pb-16 md:px-12 border-b border-[#D4AF37]/10">  
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">  
        <div>  
          <span className="block text-[10px] uppercase tracking-[0.6em] mb-4 opacity-50">  
            Digital Exhibition // Index  
          </span>  
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter uppercase">  
            The Archive  
          </h1>  
        </div>  
        <p className="max-w-md text-sm font-light leading-relaxed opacity-60 uppercase tracking-wider">  
          A 3x3 ledger of sanctuary blueprints curated for the high-net-worth traveler.  
        </p>  
      </div>  
    </header>

    {/* The 3x3 Ledger Grid */}  
    <section className="px-6 py-12 md:px-12 max-w-7xl mx-auto">  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-[#D4AF37]/10 border border-[#D4AF37]/10">  
        {items.map((item: any) => (  
          <Link   
            key={item.id}   
            href={`/archive/${item.id}`}   
            className="group relative bg-black aspect-[4/5] overflow-hidden block"  
          >  
            {/* Image Layer */}  
            <Image  
              src={item.image || item.heroImage}  
              alt={item.name}  
              fill  
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 group-hover:scale-110 opacity-70 group-hover:opacity-100"  
            />  
              
            {/* Brass Hover Overlay */}  
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />  
              
            {/* Item Metadata (Bottom Left) */}  
            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">  
              <div className="overflow-hidden">  
                <p className="text-[9px] uppercase tracking-[0.4em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">  
                  {item.location}  
                </p>  
              </div>  
              <h2 className="text-2xl font-light tracking-tight group-hover:tracking-widest transition-all duration-700">  
                {item.name}  
              </h2>  
              <div className="h-[1px] w-0 group-hover:w-full bg-[#D4AF37] mt-4 transition-all duration-1000" />  
            </div>

            {/* Top Right Index Number */}  
            <div className="absolute top-8 right-8 text-[10px] font-bold tracking-widest opacity-30 group-hover:opacity-100 transition-opacity">  
              {item.id.toUpperCase()}  
            </div>  
          </Link>  
        ))}  
      </div>  
    </section>

    {/* Footer CTA */}  
    <footer className="px-6 py-24 md:px-12 text-center border-t border-[#D4AF37]/10">  
      <Link   
        href="/contact"   
        className="group inline-flex flex-col items-center gap-4"  
      >  
        <span className="text-[10px] uppercase tracking-[0.5em] opacity-40 group-hover:opacity-100 transition-opacity">  
          Request Portfolio Access  
        </span>  
        <div className="h-12 w-[1px] bg-[#D4AF37]/20 group-hover:h-20 transition-all duration-700" />  
      </Link>  
    </footer>  
  </main>  
)  
}  
