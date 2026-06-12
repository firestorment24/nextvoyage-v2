"use client"

import React, { useState } from 'react'  
import Navigation from '../../components/Navigation'  
import Footer from '../../components/Footer'

const SANCTUARIES = [  
{  
  id: 'azure-retreat',  
  name: 'The Azure Retreat',  
  location: 'Maldives',  
  category: 'The Seclusion',  
  image: 'https://cdn.marblism.com/oEQg3iCpzVW.webp',  
  description: 'A floating sanctuary where the horizon is your only neighbor.'  
},  
{  
  id: 'neon-sanctuary',  
  name: 'The Neon Sanctuary',  
  location: 'Tokyo',  
  category: 'The Pulse',  
  image: 'https://cdn.marblism.com/tEQeAWrVeKE.webp',  
  description: 'Elevated luxury amidst the rhythmic energy of the world’s heartbeat.'  
},  
{  
  id: 'highland-keep',  
  name: 'The Highland Keep',  
  location: 'Scotland',  
  category: 'The Heritage',  
  image: 'https://cdn.marblism.com/L6hKoKTgsE5.webp',  
  description: 'Ancestral echoes met with modern-day refinement.'  
}  
]

export default function Manifest() {  
const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)  
const [activeFilter, setActiveFilter] = useState('All')

const filters = ['All', 'The Seclusion', 'The Pulse', 'The Heritage']

const filteredSanctuaries = activeFilter === 'All'   
  ? SANCTUARIES   
  : SANCTUARIES.filter(s => s.category === activeFilter)

return (  
  <main className="min-h-screen bg-black text-white selection:bg-[#d4af37]/30">  
    <Navigation />

    {/* Immersive Background Transition */}  
    <div className="fixed inset-0 z-0 transition-all duration-1000 ease-in-out pointer-events-none">  
      <div   
        className="absolute inset-0 bg-cover bg-center opacity-20 grayscale scale-105 transition-all duration-1000"  
        style={{   
          backgroundImage: hoveredIndex !== null   
            ? `url(${filteredSanctuaries[hoveredIndex].image})`   
            : 'none'   
        }}  
      ></div>  
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>  
    </div>

    <div className="relative z-10 pt-32 pb-20 px-8 max-w-7xl mx-auto">  
        
      {/* Header & Elite Filters */}  
      <header className="mb-20">  
        <h1 className="text-5xl md:text-7xl font-extralight tracking-[0.3em] mb-12 animate-in fade-in slide-in-from-top-4 duration-1000 uppercase">  
          The <span className="font-light">Manifest</span>  
        </h1>  
          
        <div className="flex flex-wrap gap-8">  
          {filters.map((filter) => (  
            <button  
              key={filter}  
              onClick={() => {  
                setActiveFilter(filter)  
                setHoveredIndex(null) // Reset hover on filter change  
              }}  
              className={`text-[10px] tracking-[0.4em] uppercase transition-all duration-300 ${  
                activeFilter === filter   
                  ? 'text-[#d4af37] border-b border-[#d4af37] pb-1'   
                  : 'text-white/40 hover:text-white'  
              }`}  
            >  
              {filter}  
            </button>  
          ))}  
        </div>  
      </header>

      {/* The Ledger Grid */}  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">  
        {filteredSanctuaries.map((sanctuary, index) => (  
          <div   
            key={sanctuary.id}  
            className="group relative aspect-[3/4] overflow-hidden cursor-pointer"  
            onMouseEnter={() => setHoveredIndex(index)}  
            onMouseLeave={() => setHoveredIndex(null)}  
          >  
            {/* Image Container */}  
            <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">  
              <img   
                src={sanctuary.image}   
                alt={sanctuary.name}  
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"  
              />  
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>  
            </div>

            {/* Text Overlay */}  
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">  
              <p className="text-[#d4af37] text-[10px] tracking-[0.4em] uppercase mb-2 font-light">  
                {sanctuary.category}  
              </p>  
              <h3 className="text-2xl font-extralight tracking-[0.2em] mb-4 uppercase">  
                {sanctuary.name}  
              </h3>  
              <div className="h-[1px] w-0 group-hover:w-full bg-[#d4af37]/50 transition-all duration-700 mb-4"></div>  
              <p className="text-white/60 text-xs font-extralight tracking-widest leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700">  
                {sanctuary.description}  
              </p>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>

    <Footer />  
  </main>  
)  
}  
