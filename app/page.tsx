"use client";

import React from 'react';  
import Navigation from '@/components/Navigation';  
import Link from 'next/link';

const PROPERTY_DATA = [  
  {  
    id: "NV-LDR-002",  
    name: "Amangiri",  
    location: "Canyon Point, Utah",  
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914", // Moody desert monolith  
    atmosphere: 'A concrete sanctuary carved into the Navajo desert.',  
    type: 'Desert Monolith'  
  },  
  {  
    id: "NV-LDR-001",  
    name: "North Island",  
    location: "Seychelles",  
    image: "https://images.unsplash.com/photo-1548574505-12730427929d", // Darker beach aerial  
    atmosphere: 'Total island seclusion with restricted airspace protocol.',  
    type: 'Marine Sanctuary'  
  },  
  {  
    id: "NV-LDR-016",  
    name: "Joali Being",  
    location: "Bodufushi, Maldives",  
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b", // Deep blue/shadow water  
    atmosphere: 'Weightless architectural forms in a state of healing.',  
    type: 'Wellness Fortress'  
  }  
];

export default function HomePage() {  
  return (  
    <main className="min-h-screen bg-[#060606] text-white selection:bg-[#C5A059]/30 font-sans">  
      <Navigation />

      {/* Hero Section - The Shadow */}  
      <section className="relative h-screen flex items-center justify-center overflow-hidden">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742" // Brutalist brass/shadow architecture  
            alt="Hero Sanctuary"  
            className="w-full h-full object-cover opacity-40 scale-100 animate-slow-zoom"  
          />  
          <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-[#060606]/80" />  
        </div>

        <div className="relative z-10 text-center px-6">  
          <h2 className="text-[#C5A059] uppercase tracking-[0.6em] text-[10px] mb-8 font-semibold">  
            NexVoyage Collective  
          </h2>  
          <h1 className="text-6xl md:text-[10rem] font-serif leading-[0.85] tracking-tighter italic">  
            Brass <span className="text-[#C5A059] not-italic">&</span> <br />   
            <span className="ml-12 md:ml-24">Shadow</span>  
          </h1>  
          <div className="mt-12 max-w-md mx-auto">  
            <p className="text-gray-500 text-sm uppercase tracking-[0.2em] leading-loose">  
              The definitive ledger of sovereign travel and secure sanctuaries.  
            </p>  
          </div>  
        </div>  
      </section>

      {/* Services Section - The Overview */}  
      <section className="py-32 px-6 border-y border-white/5 bg-[#080808]">  
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">  
          <div className="space-y-6">  
            <span className="text-[#C5A059] font-serif italic text-2xl">01. Intelligence</span>  
            <p className="text-gray-400 font-light leading-relaxed">  
              We provide deep-vetted data on the world’s most secluded properties, ensuring physical security and digital privacy are baseline requirements.  
            </p>  
          </div>  
          <div className="space-y-6">  
            <span className="text-[#C5A059] font-serif italic text-2xl">02. Logistics</span>  
            <p className="text-gray-400 font-light leading-relaxed">  
              End-to-end movement management. From private aviation to restricted water-space access, we handle the friction so you don't have to.  
            </p>  
          </div>  
          <div className="space-y-6">  
            <span className="text-[#C5A059] font-serif italic text-2xl">03. Access</span>  
            <p className="text-gray-400 font-light leading-relaxed">  
              Our collective grants direct lines to sanctuaries that do not appear on public booking engines. Off-market, off-grid, and unmatched.  
            </p>  
          </div>  
        </div>  
      </section>

      {/* Featured Properties - Staggered Ledger */}  
      <section className="max-w-7xl mx-auto px-6 py-32">  
        <div className="mb-24">  
          <h3 className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] mb-4">The Current Ledger</h3>  
          <h2 className="font-serif text-5xl italic">Featured Sanctuaries</h2>  
        </div>

        <div className="space-y-48">  
          {PROPERTY_DATA.map((property, index) => (  
            <Link   
              key={property.id}  
              href={`/archive/property/${property.id}`}  
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 group`}  
            >  
              <div className="w-full md:w-3/5 overflow-hidden relative">  
                <div className="absolute inset-0 bg-[#C5A059]/10 group-hover:bg-transparent transition-colors z-10" />  
                <img   
                  src={property.image}   
                  alt={property.name}  
                  className="w-full aspect-[16/9] object-cover transition-transform duration-[2s] group-hover:scale-110"  
                />  
              </div>  
                
              <div className="w-full md:w-2/5 space-y-6">  
                <div className="flex items-center gap-4">  
                  <span className="h-px w-8 bg-[#C5A059]" />  
                  <span className="text-[#C5A059] text-[10px] uppercase tracking-widest font-bold">{property.id}</span>  
                </div>  
                <h4 className="text-4xl font-serif italic group-hover:text-[#C5A059] transition-colors">{property.name}</h4>  
                <p className="text-gray-500 uppercase tracking-widest text-[10px]">{property.location} — {property.type}</p>  
                <p className="text-gray-400 font-light leading-relaxed text-lg">  
                  "{property.atmosphere}"  
                </p>  
                <div className="pt-4">  
                  <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] border-b border-[#C5A059]/30 pb-2">  
                    View Full Intelligence →  
                  </span>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Footer */}  
      <footer className="py-24 text-center border-t border-white/5">  
        <div className="opacity-40 hover:opacity-100 transition-opacity cursor-default">  
          <h2 className="font-serif italic text-2xl mb-2">NexVoyage Collective</h2>  
          <p className="text-[#C5A059] uppercase tracking-[0.5em] text-[9px]">Simple. Secure. Sovereign.</p>  
        </div>  
      </footer>

      <style jsx global>{`  
        @keyframes slow-zoom {  
          0% { transform: scale(1); }  
          100% { transform: scale(1.1); }  
        }  
        .animate-slow-zoom {  
          animation: slow-zoom 30s ease-out infinite alternate;  
        }  
      `}</style>  
    </main>  
  );  
}  
