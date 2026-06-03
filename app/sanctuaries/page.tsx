"use client"

import React from 'react'  
import Navigation from '../components/Navigation'  
import Footer from '../components/Footer'

const SANCTUARIES = [  
  {  
    id: 'metropolitan',  
    name: 'The Metropolitan',  
    tag: 'Urban Absolute',  
    image: 'https://images.unsplash.com/photo-1449153001391-42ca4914742d?q=80&w=2070&auto=format&fit=crop',  
    description: 'A vertical fortress in the heart of the grid.',  
    gridSpan: 'md:col-span-2 md:row-span-2'  
  },  
  {  
    id: 'fortress',  
    name: 'The Fortress',  
    tag: 'Isolated Luxury',  
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',  
    description: 'Impenetrable peace carved into coastal stone.',  
    gridSpan: 'md:col-span-1 md:row-span-1'  
  },  
  {  
    id: 'stadium',  
    name: 'The Stadium',  
    tag: 'The Grand Stage',  
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop',  
    description: 'Epic scale for private high-performance living.',  
    gridSpan: 'md:col-span-1 md:row-span-1'  
  },  
  {  
    id: 'alpine',  
    name: 'The Alpine',  
    tag: 'Peak Isolation',  
    image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2070&auto=format&fit=crop',  
    description: 'High-altitude sanctuary above the clouds.',  
    gridSpan: 'md:col-span-1 md:row-span-2'  
  },  
  {  
    id: 'cinematic',  
    name: 'The Cinematic',  
    tag: 'The Director’s Cut',  
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop',  
    description: 'Architecture that moves like a silent film.',  
    gridSpan: 'md:col-span-2 md:row-span-1'  
  },  
  {  
    id: 'safari',  
    name: 'The Safari',  
    tag: 'Wild Elegance',  
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop',  
    description: 'Primitive roots, absolute refinement.',  
    gridSpan: 'md:col-span-1 md:row-span-1'  
  },  
  {  
    id: 'oasis',  
    name: 'The Oasis',  
    tag: 'Liquid Gold',  
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',  
    description: 'Mirage-tier luxury in the deep desert.',  
    gridSpan: 'md:col-span-1 md:row-span-1'  
  },  
  {  
    id: 'floating',  
    name: 'The Floating',  
    tag: 'Buoyant Solitude',  
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop',  
    description: 'Drifting elegance on crystal waters.',  
    gridSpan: 'md:col-span-2 md:row-span-1'  
  },  
  {  
    id: 'island',  
    name: 'The Island',  
    tag: 'Sovereign Soil',  
    image: 'https://images.unsplash.com/photo-1505881502353-a1986add3734?q=80&w=2070&auto=format&fit=crop',  
    description: 'A private kingdom surrounded by blue.',  
    gridSpan: 'md:col-span-1 md:row-span-1'  
  }  
]

export default function SanctuaryIndex() {  
  return (  
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C5A059] selection:text-black">  
      <Navigation />  
        
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">  
        <header className="mb-16 border-l border-[#C5A059] pl-8">  
          <h1 className="text-6xl md:text-8xl font-serif mb-4 tracking-tighter">  
            THE <span className="text-[#C5A059]">COLLECTION</span>  
          </h1>  
          <p className="text-[#888] text-lg uppercase tracking-widest max-w-xl">  
            A curated portfolio of architectural silence for the global elite. Nine sanctuaries. Infinite peace.  
          </p>  
        </header>

        {/* Magazine Grid */}  
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">  
          {SANCTUARIES.map((item) => (  
            <a   
              key={item.id}  
              href={`/sanctuaries/${item.id}`}  
              className={`group relative overflow-hidden bg-[#111] border border-white/5 ${item.gridSpan}`}  
            >  
              {/* Image Overlay */}  
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-700 z-10" />  
                
              <img   
                src={item.image}   
                alt={item.name}  
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000"  
              />

              {/* Text Overlay */}  
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">  
                <div className="h-px w-12 bg-[#C5A059] mb-4 group-hover:w-full transition-all duration-700" />  
                <p className="text-[#C5A059] text-xs uppercase tracking-[0.3em] mb-2">{item.tag}</p>  
                <h3 className="text-3xl font-serif mb-2">{item.name}</h3>  
                <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 italic">  
                  {item.description}  
                </p>  
              </div>  
            </a>  
          ))}  
        </div>  
      </main>

      <Footer />  
    </div>  
  )  
}  
