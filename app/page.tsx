import React from 'react';  
import Link from 'next/link';  
import Navigation from '@/components/Navigation';  
import { PROPERTY_DATA } from '@/lib/data/sanctuaries';

export default function HomePage() {  
  // We'll feature the first 3 properties from your Elite Ledger  
  const featuredProperties = PROPERTY_DATA.slice(0, 3);

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C5A059]/30">  
      <Navigation />

      {/* Hero Section */}  
      <section className="relative h-screen flex items-center justify-center overflow-hidden">  
        <div className="absolute inset-0 z-0">  
          <div className="absolute inset-0 bg-black/50 z-10" />  
          <video  
            autoPlay  
            loop  
            muted  
            playsInline  
            className="w-full h-full object-cover"  
          >  
            <source src="/hero-background.mp4" type="video/mp4" />  
          </video>  
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">  
          <h1 className="text-5xl md:text-7xl font-light tracking-[0.2em] mb-6 font-serif">  
            NEXVOYAGE <span className="text-[#C5A059]">COLLECTIVE</span>  
          </h1>  
          <p className="text-sm md:text-base tracking-[0.4em] uppercase text-gray-400 mb-12">  
            The Engine of High-Net-Worth Exploration  
          </p>  
          <Link   
            href="/archive"  
            className="inline-block px-8 py-3 border border-[#C5A059]/30 text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all duration-500 uppercase tracking-widest text-xs"  
          >  
            Enter The Archive  
          </Link>  
        </div>  
      </section>

      {/* Featured Dossiers Section */}  
      <section className="py-24 px-6 md:px-12 bg-[#0A0A0A]">  
        <div className="max-w-7xl mx-auto">  
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">  
            <div>  
              <h2 className="text-3xl font-serif text-[#C5A059] mb-2">Featured Sanctuaries</h2>  
              <p className="text-gray-500 uppercase tracking-widest text-[10px]">Quarterly Rotation: Summer 2026</p>  
            </div>  
            <Link href="/archive" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-[#C5A059] transition-colors border-b border-gray-800 pb-1">  
              View Full Ledger  
            </Link>  
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  
            {featuredProperties.map((property) => (  
              <Link   
                key={property.id}   
                href={`/archive/property/${property.id}`}  
                className="group block"  
              >  
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-6">  
                  <img  
                    src={property.image}  
                    alt={property.name}  
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"  
                  />  
                  <div className="absolute inset-0 border border-white/5 pointer-events-none" />  
                </div>  
                <div className="space-y-2">  
                  <p className="text-[10px] text-[#C5A059] uppercase tracking-[0.3em]">{property.location}</p>  
                  <h3 className="text-xl font-serif tracking-wide group-hover:text-[#C5A059] transition-colors">  
                    {property.name}  
                  </h3>  
                  <p className="text-sm text-gray-500 leading-relaxed font-light italic">  
                    "{property.highlight}"  
                  </p>  
                  <div className="pt-4">  
                    <span className="text-[9px] uppercase tracking-widest text-gray-400 border-b border-gray-800 pb-1 group-hover:border-[#C5A059] transition-colors">  
                      View Private Dossier  
                    </span>  
                  </div>  
                </div>  
              </Link>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* Signature Footer Placeholder */}  
      <footer className="py-12 border-t border-white/5 text-center">  
        <p className="text-[9px] tracking-[0.5em] text-gray-600 uppercase">  
          NexVoyage Collective &copy; 2026 | Private Access Only  
        </p>  
      </footer>  
    </main>  
  );  
}  
