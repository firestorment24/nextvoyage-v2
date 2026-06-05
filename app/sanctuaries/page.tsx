'use client'

import { useState } from 'react'  
import Navigation from '../Navigation'  
import Footer from '../components/Footer'  
import Link from 'next/link'  
// Import the data we just moved to the lib folder  
import { SANCTUARIES_DATA } from '../lib/data'

export default function SanctuariesIndex() {  
  const [filter, setFilter] = useState('All')  
  const tags = ['All', 'Access', 'Seclusion', 'Restoration', 'Privacy']

  const filteredSanctuaries = SANCTUARIES_DATA.filter(  
    s => filter === 'All' || s.tag === filter  
  )

  return (  
    <main className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-light">  
      <Navigation />  
        
      <header className="pt-40 pb-20 px-6 max-w-screen-xl mx-auto">  
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-12 italic">The Collection</h1>  
          
        <div className="flex flex-wrap gap-8 border-b border-neutral-200 pb-8">  
          {tags.map(tag => (  
            <button   
              key={tag}  
              onClick={() => setFilter(tag)}  
              className={`text-[10px] uppercase tracking-[0.3em] transition-all ${  
                filter === tag ? 'text-black font-medium' : 'text-neutral-400 hover:text-neutral-600'  
              }`}  
            >  
              {tag}  
            </button>  
          ))}  
        </div>  
      </header>

      <section className="max-w-screen-xl mx-auto px-6 pb-40">  
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">  
          {filteredSanctuaries.map((s) => (  
            <Link   
              key={s.id}   
              href={`/sanctuaries/${s.id}`}  
              className="group block relative overflow-hidden bg-neutral-200 break-inside-avoid"  
            >  
              <img   
                src={s.image}   
                alt={s.name}  
                className="w-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"  
              />  
                
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">  
                <span className="text-[9px] uppercase tracking-[0.4em] mb-2 opacity-70">{s.tag}</span>  
                <h3 className="text-2xl font-light italic mb-4">{s.name}</h3>  
                <p className="text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">  
                  {s.roi}  
                </p>  
              </div>

              <div className="absolute top-6 left-6 group-hover:opacity-0 transition-opacity">  
                 <span className="text-[10px] uppercase tracking-[0.3em] text-white mix-blend-difference">  
                   {s.name}  
                 </span>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      <Footer />  
    </main>  
  )  
}  
