"use client";

import React from 'react';  
import Navigation from '@/components/Navigation';  
import Link from 'next/link';

const PROPERTY_DATA = [  
  {  
    id: "NV-LDR-001",  
    name: "North Island",  
    location: "Seychelles",  
    image: "https://images.unsplash.com/photo-1506929113614-bb40ff1b61c3",  
    highlights: ['Private Helicopter Landing', 'Full Island Seclusion'],  
    atmosphere: 'Hyper-exclusive barefoot luxury with zero external visibility.'  
  },  
  {  
    id: "NV-LDR-002",  
    name: "Amangiri",  
    location: "Utah, USA",  
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7",  
    highlights: ['Concrete Monoliths', 'Desert Silence'],  
    atmosphere: 'Structural erasure within the Navajo desert landscape.'  
  },  
  {  
    id: "NV-LDR-016",  
    name: "Joali Being",  
    location: "Maldives",  
    image: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992",  
    highlights: ['Sound Therapy', 'Biophilic Design'],  
    atmosphere: 'Weightless architectural forms in a state of perpetual healing.'  
  },  
  {  
    id: "NV-LDR-009",  
    name: "Sonop",  
    location: "Namib Desert, Namibia",  
    image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0",  
    highlights: ['Stilted Tents', 'Zero Light Pollution'],  
    atmosphere: 'A 1920s British colonial outpost reimagined for the modern nomad.'  
  }  
];

export default function HomePage() {  
  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#C5A059]/30">  
      <Navigation />

      {/* Hero Section */}  
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7"   
            alt="Hero Sanctuary"  
            className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"  
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]" />  
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">  
          <h2 className="text-[#C5A059] uppercase tracking-[0.4em] text-sm mb-6 font-medium">  
            The Master Ledger  
          </h2>  
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight italic">  
            Uncharted <span className="text-[#C5A059] not-italic">Sanctuaries</span>  
          </h1>  
          <p className="text-gray-400 max-w-xl mx-auto text-lg font-light leading-relaxed tracking-wide">  
            A curated collective of the world’s most secure and secluded escapes for the modern sovereign traveler.  
          </p>  
          <div className="mt-12">  
            <div className="w-px h-24 bg-gradient-to-b from-[#C5A059] to-transparent mx-auto" />  
          </div>  
        </div>  
      </section>

      {/* Property Archive Grid */}  
      <section className="max-w-7xl mx-auto px-6 py-24">  
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">  
          <div>  
            <h3 className="font-serif text-3xl italic mb-2">The Archive</h3>  
            <p className="text-gray-500 uppercase tracking-widest text-xs">Current Availability — Vol. I</p>  
          </div>  
          <div className="text-[#C5A059] text-sm uppercase tracking-widest cursor-pointer hover:opacity-70 transition-opacity">  
            View All Entries →  
          </div>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
          {PROPERTY_DATA.map((property) => (  
            <Link   
              key={property.id}  
              href={`/archive/property/${property.id}`}  
              className="group relative block overflow-hidden bg-[#111]"  
            >  
              <div className="aspect-[16/10] overflow-hidden">  
                <img   
                  src={property.image}   
                  alt={property.name}  
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"  
                />  
              </div>  
                
              <div className="p-8 border border-white/5 border-t-0 group-hover:border-[#C5A059]/30 transition-colors">  
                <div className="flex justify-between items-start mb-4">  
                  <div>  
                    <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.3em] font-bold">  
                      {property.id}  
                    </span>  
                    <h4 className="text-2xl font-serif mt-1">{property.name}</h4>  
                    <p className="text-gray-500 text-sm">{property.location}</p>  
                  </div>  
                </div>  
                  
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light italic">  
                  "{property.atmosphere}"  
                </p>

                <div className="flex flex-wrap gap-2">  
                  {property.highlights.map((tag) => (  
                    <span key={tag} className="text-[10px] uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full text-gray-500">  
                      {tag}  
                    </span>  
                  ))}  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Footer Signature */}  
      <section className="py-32 text-center border-t border-white/5">  
        <h2 className="font-serif italic text-4xl mb-4">NexVoyage Collective</h2>  
        <p className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px]">Simple. Secure. Sovereign.</p>  
      </section>

      <style jsx global>{`  
        @keyframes slow-zoom {  
          0% { transform: scale(1.05); }  
          100% { transform: scale(1.15); }  
        }  
        .animate-slow-zoom {  
          animation: slow-zoom 20s linear infinite alternate;  
        }  
      `}</style>  
    </main>  
  );  
}  
