'use client';

import { useState } from 'react';  
import Navigation from '../Navigation';  
import Footer from '../Footer';  
import { PROPERTY_DATA } from '../../data/properties';  
import Link from 'next/link';  
import Image from 'next/image';

export default function PropertiesPage() {  
const [filter, setFilter] = useState('All');

const categories = ['All', ...new Set(PROPERTY_DATA.map(p => p.intel.category))];

const filteredProperties = filter === 'All'   
  ? PROPERTY_DATA   
  : PROPERTY_DATA.filter(p => p.intel.category === filter);

return (  
  <main className="min-h-screen bg-black text-white selection:bg-[#d4af37]/30">  
    <Navigation />  
      
    <div className="pt-32 pb-16 px-8 md:px-16 border-b border-zinc-900">  
      <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8 uppercase">Field Reports</h1>  
        
      {/* Category Filter */}  
      <div className="flex flex-wrap gap-4">  
        {categories.map((cat) => (  
          <button  
            key={cat}  
            onClick={() => setFilter(cat)}  
            className={`px-6 py-2 border font-mono text-xs tracking-widest uppercase transition-all ${  
              filter === cat   
                ? 'bg-[#d4af37] border-[#d4af37] text-black'   
                : 'border-zinc-800 text-zinc-500 hover:border-zinc-500'  
            }`}  
          >  
            {cat}  
          </button>  
        ))}  
      </div>  
    </div>

    {/* Archive Grid */}  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-r border-zinc-900">  
      {filteredProperties.map((property) => (  
        <Link   
          key={property.id}   
          href={`/properties/${property.id}`}  
          className="group relative aspect-square overflow-hidden border-b border-l border-zinc-900"  
        >  
          <Image  
            src={property.image}  
            alt={property.name}  
            fill  
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"  
          />  
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />  
          <div className="absolute bottom-8 left-8">  
            <p className="text-[#d4af37] font-mono text-[10px] tracking-[0.3em] uppercase mb-2">  
              {property.id}  
            </p>  
            <h3 className="text-2xl font-light tracking-wide">{property.name}</h3>  
            <p className="text-zinc-500 text-xs uppercase tracking-widest">{property.location}</p>  
          </div>  
        </Link>  
      ))}  
    </div>

    <Footer />  
  </main>  
);  
}  
