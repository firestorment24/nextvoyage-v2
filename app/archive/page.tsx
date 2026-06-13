// app/archive/page.tsx  
import React from 'react'  
import Link from 'next/link'  
import Image from 'next/image'  
import { SANCTUARY_DATA } from '@/lib/data/sanctuaries'

export default function ArchivePage() {  
  // Convert the record to an array for the grid  
  const items = Object.values(SANCTUARY_DATA)

  return (  
    <main className="min-h-screen bg-[#000000] px-6 py-24 md:px-12">  
      <header className="mb-20 max-w-2xl">  
        <h1 className="text-[#D4AF37] text-xs uppercase tracking-[0.5em] mb-6">The Archive</h1>  
        <p className="text-[#D4AF37]/80 font-light text-2xl leading-relaxed">  
          A curated exhibition of our most significant sanctuary blueprints.  
        </p>  
      </header>

      {/* High-End Gallery Grid */}  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">  
        {items.map((item) => (  
          <Link   
            key={item.id}   
            href={`/archive/${item.id}`}   
            className="group block"  
          >  
            <div className="relative aspect-[4/5] overflow-hidden bg-[#111] mb-6">  
              <Image  
                src={item.image}  
                alt={item.name}  
                fill  
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"  
              />  
              <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/20 transition-colors duration-500" />  
            </div>  
              
            <div className="flex justify-between items-start">  
              <div>  
                <h2 className="text-[#D4AF37] text-lg font-light tracking-tight group-hover:translate-x-2 transition-transform duration-500">  
                  {item.name}  
                </h2>  
                <p className="text-[#D4AF37]/50 text-[10px] uppercase tracking-widest mt-1">  
                  {item.location}  
                </p>  
              </div>  
              <span className="text-[#D4AF37] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">  
                VIEW →  
              </span>  
            </div>  
          </Link>  
        ))}  
      </div>  
    </main>  
  )  
}  
