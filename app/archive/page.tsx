'use client'

import React, { useState } from 'react'  
import { PROPERTY_DATA, Property } from '@/data/properties'

export default function ArchivePage() {  
  const [filter, setFilter] = useState<string>('ALL')

  const niches = Array.from(new Set(PROPERTY_DATA.map(p => p.niche)))  
  const filteredProperties = filter === 'ALL'   
    ? PROPERTY_DATA   
    : PROPERTY_DATA.filter(p => p.niche === filter)

  return (  
    <div className="min-h-screen bg-black text-white p-8 font-sans">  
      {/* MISSION PROFILE INDEX */}  
      <header className="mb-16 border-b border-zinc-800 pb-8">  
        <h1 className="text-4xl font-light tracking-tighter mb-6 uppercase">The Elite Ledger</h1>  
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-widest text-zinc-500">  
          <button   
            onClick={() => setFilter('ALL')}  
            className={`hover:text-white transition ${filter === 'ALL' ? 'text-white' : ''}`}  
          >  
            [ VIEW_ALL ]  
          </button>  
          {niches.map(niche => (  
            <button   
              key={niche}  
              onClick={() => setFilter(niche)}  
              className={`hover:text-white transition ${filter === niche ? 'text-white border-b border-white' : ''}`}  
            >  
              {niche.replace(' Sanctuary', '').toUpperCase()}  
            </button>  
          ))}  
        </div>  
      </header>

      {/* PROPERTY GRID */}  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">  
        {filteredProperties.map((property) => (  
          <div key={property.id} className="group relative">  
            <div className="overflow-hidden aspect-[4/5] bg-zinc-900 mb-4">  
              <img   
                src={property.image}   
                alt={property.name}  
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"  
              />  
              {property.status && (  
                <div className="absolute top-4 left-4 bg-white text-black text-[9px] px-2 py-1 font-bold tracking-widest">  
                  {property.status}  
                </div>  
              )}  
            </div>  
              
            <div className="flex flex-col space-y-1">  
              <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-mono">  
                {property.serial} // [ATMOS: {property.niche.toUpperCase()}]  
              </span>  
              <h2 className="text-xl font-light tracking-tight">{property.name}</h2>  
              <p className="text-xs text-zinc-400">{property.location}</p>  
              <p className="pt-4 text-xs italic text-zinc-500 leading-relaxed max-w-[280px]">  
                "{property.highlight}"  
              </p>  
                
              {property.legalLink && (  
                <a href="/legal/safety-consent" className="mt-4 inline-block text-[9px] text-zinc-300 border-b border-zinc-700 w-fit hover:border-white transition">  
                  VIEW_COMPLIANCE_FRAMEWORK  
                </a>  
              )}  
            </div>  
          </div>  
        ))}  
      </div>

      <footer className="mt-24 pt-8 border-t border-zinc-900 text-[10px] text-zinc-600 uppercase tracking-widest flex justify-between">  
        <span>Total_Access_Points: {PROPERTY_DATA.length}</span>  
        <span>Secure Protocol // NexVoyage Collective</span>  
      </footer>  
    </div>  
  )  
}  
