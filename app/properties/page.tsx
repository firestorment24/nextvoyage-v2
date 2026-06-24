'use client';

import { useState } from 'react';  
import Navigation from '../Navigation';  
import Footer from '../Footer';  
import { properties } from '../../data/properties';  
import Link from 'next/link';  
import Image from 'next/image';

export default function PropertiesPage() {  
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(properties.map(p => p.collection)))];

  const filteredProperties = filter === 'All'  
    ? properties  
    : properties.filter(p => p.collection === filter);
 
  return (  
    <main className="min-h-screen bg-black text-white">  
      <Navigation />  
      <div className="max-w-7xl mx-auto px-6 py-20">  
        <p className="text-[#d4af37]/60 font-inter text-sm tracking-[0.2em] uppercase mb-2">  
          Field Reports  
        </p>  
        <h1 className="font-cormorant text-5xl md:text-7xl text-[#d4af37] mb-12">  
          Properties  
        </h1>

        {/* Category Filter */}  
        <div className="flex flex-wrap gap-3 mb-12">  
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

        {/* Archive Grid */}  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {filteredProperties.map((property) => (  
            <Link  
              key={property.id}  
              href={`/properties/${property.id}`}  
              className="group relative aspect-[4/5] bg-[#0A0A0A] overflow-hidden border border-white/5 rounded-sm transition-all duration-500 hover:border-[#d4af37]/50"  
            >  
              <Image  
                src={property.image}  
                alt={property.name}  
                fill  
                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"  
              />  
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />  
              <div className="absolute bottom-0 left-0 right-0 p-6">  
                <p className="text-[#d4af37]/70 font-inter text-xs tracking-[0.2em] uppercase mb-1">  
                  {property.collection}  
                </p>  
                <h3 className="font-cormorant text-2xl text-white mb-1">  
                  {property.name}  
                </h3>  
                <p className="font-inter text-sm text-white/60">  
                  {property.location}  
                </p>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </div>  
      <Footer />  
    </main>  
  );  
}  
