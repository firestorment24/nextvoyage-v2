'use client';

import React, { useState } from 'react';  
import Navigation from '../Navigation';  
import Footer from '../Footer';  
// Importing the properties from our root data folder  
import { properties } from '../../data/properties';

export default function PropertiesPage() {  
const [filter, setFilter] = useState('All');

const categories = ['All', ...new Set(properties.map((p: any) => p.category || 'Residences'))];

const filteredProperties = filter === 'All'   
  ? properties   
  : properties.filter((p: any) => p.category === filter);

return (  
  <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black font-light">  
    <Navigation />

    {/* Section 01: The Collection Header */}  
    <section className="pt-40 pb-20 px-6 md:px-12 border-b border-white/5">  
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-end">  
        <div>  
          <p className="text-[10px] uppercase tracking-[0.4em] mb-4 text-white/40">The Private Collection</p>  
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter leading-none italic">Assets</h1>  
        </div>  
        <div className="mt-8 md:mt-0 flex gap-8">  
           {categories.map((cat: string) => (  
             <button   
               key={cat}  
               onClick={() => setFilter(cat)}  
               className={`text-[10px] uppercase tracking-widest transition-all ${filter === cat ? 'text-white' : 'text-white/30 hover:text-white/60'}`}  
             >  
               {cat}  
             </button>  
           ))}  
        </div>  
      </div>  
    </section>

    {/* Section 02: The Gallery Grid */}  
    <section className="px-6 md:px-12 py-24">  
      <div className="max-w-screen-2xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">  
          {filteredProperties.map((property: any, index: number) => (  
            <a   
              key={property.id}   
              href={`/properties/${property.id}`}  
              className="group block"  
            >  
              <div className="relative aspect-[4/5] overflow-hidden mb-8 rounded-sm bg-zinc-900">  
                <img   
                  src={property.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"}   
                  alt={property.name}  
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000 ease-out"  
                />  
                <div className="absolute top-6 left-6">  
                   <span className="text-[9px] uppercase tracking-[0.3em] bg-black/60 backdrop-blur-xl px-3 py-1.5 border border-white/10 rounded-full">  
                     Ref: {property.id.slice(0, 8).toUpperCase()}  
                   </span>  
                </div>  
              </div>  
                
              <div className="flex justify-between items-start gap-4">  
                <div className="space-y-1">  
                  <h3 className="text-2xl tracking-tight group-hover:translate-x-1 transition-transform">{property.name}</h3>  
                  <p className="text-xs uppercase tracking-widest text-white/40">{property.location}</p>  
                </div>  
                <div className="text-right">  
                   <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Status</p>  
                   <p className="text-[10px] uppercase tracking-widest text-white/80">Available</p>  
                </div>  
              </div>  
                
              <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">  
                 <span className="text-[10px] uppercase tracking-[0.3em] italic">View Asset Details</span>  
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">  
                    <path d="M5 12h14m-7-7 7 7-7 7"/>  
                 </svg>  
              </div>  
            </a>  
          ))}  
        </div>  
      </div>  
    </section>

    {/* Section 03: Footnote */}  
    <section className="py-24 border-t border-white/5 bg-zinc-950/20">  
      <div className="max-w-2xl mx-auto px-6 text-center">  
         <p className="text-lg text-white/40 leading-relaxed italic">  
           "The properties listed represent a fraction of our off-market portfolio. For specific requirements and secure inventory, please contact the concierge."  
         </p>  
      </div>  
    </section>

    <Footer />  
  </main>  
);  
}  
