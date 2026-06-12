'use client'

import React from 'react'  
import Link from 'next/link'  
import { SANCTUARIES_DATA } from '@/data/sanctuaries' 

export default function ArchiveGallery() {  
return (  
  <div className="min-h-screen bg-[#0D0D0D] text-[#E2E0D5] p-6 md:p-20 font-sans selection:bg-[#E2E0D5] selection:text-[#0D0D0D]">  
    {/* Editorial Header */}  
    <header className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[#E2E0D5]/10 pb-12">  
      <div className="max-w-xl">  
        <p className="text-[10px] uppercase tracking-[0.4em] mb-4 opacity-50">— The Collection</p>  
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter italic font-serif leading-none">  
          Nodes of <br />Absolute Calm  
        </h1>  
      </div>  
      <div className="mt-8 md:mt-0 text-right">  
        <p className="text-[10px] uppercase tracking-widest opacity-40">Filtered by: Perspective</p>  
        <p className="text-sm font-serif italic mt-1">Available for Acquisition</p>  
      </div>  
    </header>

    {/* Staggered Grid */}  
    <main className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">  
      {SANCTUARIES_DATA.map((sanctuary, index) => (  
        <Link   
          key={sanctuary.id}   
          href={`/archive/${sanctuary.id}`}  
          className={`group relative flex flex-col ${index % 2 !== 0 ? 'md:mt-32' : ''}`}  
        >  
          {/* Numbering Overlay */}  
          <span className="absolute -top-6 -left-6 text-[10px] opacity-20 font-mono tracking-widest">  
            VOL. 0{index + 1}  
          </span>

          {/* Image Container */}  
          <div className="overflow-hidden aspect-[4/5] bg-[#1A1A1A] relative">  
            <img   
              src={sanctuary.image}   
              alt={sanctuary.name}  
              className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-in-out"  
            />  
              
            {/* Hover Metadata */}  
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">  
              <p className="text-[10px] uppercase tracking-[0.3em] mb-2">{sanctuary.tag}</p>  
              <p className="font-serif italic text-xl">{sanctuary.atmosphere?.substring(0, 60)}...</p>  
            </div>  
          </div>

          {/* Sanctuary Label */}  
          <div className="mt-8 flex justify-between items-start border-t border-[#E2E0D5]/10 pt-4">  
            <div>  
              <h2 className="text-2xl font-light tracking-tight group-hover:italic transition-all uppercase">  
                {sanctuary.name}  
              </h2>  
              <p className="text-[10px] uppercase tracking-widest opacity-40 mt-1">{sanctuary.loc}</p>  
            </div>  
            <div className="h-px w-12 bg-[#E2E0D5]/20 mt-4 group-hover:w-20 transition-all duration-500" />  
          </div>  
        </Link>  
      ))}  
    </main>

    {/* Footer Utility */}  
    <footer className="mt-40 pt-20 border-t border-[#E2E0D5]/10 text-center">  
      <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 mb-8">End of Current Archive</p>  
      <Link   
        href="/inquiry"   
        className="inline-block px-12 py-5 border border-[#E2E0D5]/20 hover:border-[#E2E0D5] text-[10px] uppercase tracking-[0.5em] transition-all"  
      >  
        Initialize Dossier  
      </Link>  
    </footer>  
  </div>  
)  
}  
