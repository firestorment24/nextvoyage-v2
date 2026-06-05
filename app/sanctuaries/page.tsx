'use client'

import { useState } from 'react'  
import Navigation from '../Navigation'  
import Footer from '../components/Footer'  
import Link from 'next/link'

const SANCTUARIES = [  
{ id: 'metropolitan', name: 'Metropolitan', tag: 'Access', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2000', roi: 'High-speed efficiency meets absolute silence.' },  
{ id: 'alpine', name: 'Alpine', tag: 'Seclusion', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000', roi: 'Vertical isolation at the edge of the world.' },  
{ id: 'island', name: 'Island', tag: 'Restoration', image: 'https://images.unsplash.com/photo-1505881502353-a1986add3732?auto=format&fit=crop&q=80&w=2000', roi: 'The luxury of unmapped horizons.' },  
{ id: 'floating', name: 'Floating', tag: 'Privacy', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=2000', roi: 'Mobile sovereignty on the open sea.' },  
// ... will populate the rest (Safari, Fortress, etc.)  
]

export default function SanctuariesIndex() {  
const [filter, setFilter] = useState('All')  
const tags = ['All', 'Access', 'Seclusion', 'Restoration', 'Privacy']

return (  
  <main className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-light">  
    <Navigation />  
      
    <header className="pt-40 pb-20 px-6 max-w-screen-xl mx-auto">  
      <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-12 italic">The Collection</h1>  
        
      {/* Intent-based Filtering */}  
      <div className="flex flex-wrap gap-8 border-b border-neutral-200 pb-8">  
        {tags.map(tag => (  
          <button   
            key={tag}  
            onClick={() => setFilter(tag)}  
            className={`text-[10px] uppercase tracking-[0.3em] transition-all ${filter === tag ? 'text-black font-medium' : 'text-neutral-400 hover:text-neutral-600'}`}  
          >  
            {tag}  
          </button>  
        ))}  
      </div>  
    </header>

    <section className="max-w-screen-xl mx-auto px-6 pb-40">  
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">  
        {SANCTUARIES.filter(s => filter === 'All' || s.tag === filter).map((s, i) => (  
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
              
            {/* The Guardian Overlay */}  
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">  
              <span className="text-[9px] uppercase tracking-[0.4em] mb-2 opacity-70">{s.tag}</span>  
              <h3 className="text-2xl font-light italic mb-4">{s.name}</h3>  
              <p className="text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">  
                {s.roi}  
              </p>  
            </div>

            {/* Default Label */}  
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
