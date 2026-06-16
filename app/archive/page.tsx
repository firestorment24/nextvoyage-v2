// app/archive/page.tsx

import { PROPERTY_DATA } from '@/lib/data/sanctuaries';  
import Link from 'next/link';

export default function ArchivePage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-24 px-8">  
      {/* Header */}  
      <header className="max-w-7xl mx-auto mb-20">  
        <h1 className="text-[10px] uppercase tracking-[0.8em] text-[#C5A059] mb-4">The Elite Ledger</h1>  
        <h2 className="text-4xl md:text-5xl font-light tracking-tighter max-w-2xl leading-none">  
          A curated chronicle of the world's most exceptional sanctuaries.  
        </h2>  
      </header>

      {/* Grid */}  
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">  
        {PROPERTY_DATA.map((property) => (  
          <Link   
            key={property.id}   
            href={`/archive/property/${property.id}`} // UPDATED: Links to our new dynamic route  
            className="group block"  
          >  
            <div className="relative aspect-[4/5] overflow-hidden bg-[#111] mb-6">  
              <img  
                src={property.image}  
                alt={property.name}  
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out opacity-80 group-hover:opacity-100"  
              />  
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />  
                
              {/* Status Tag */}  
              <div className="absolute top-4 right-4">  
                <span className="text-[8px] uppercase tracking-[0.3em] px-3 py-1 bg-black/80 border border-white/10 backdrop-blur-md">  
                  {property.verified ? 'Verified' : 'Review'}  
                </span>  
              </div>  
            </div>

            <div className="space-y-2">  
              <div className="flex justify-between items-baseline">  
                <h3 className="text-xl font-light tracking-tight group-hover:text-[#C5A059] transition-colors duration-300">  
                  {property.name}  
                </h3>  
                <span className="text-[9px] uppercase tracking-widest text-white/20 font-mono">  
                  {property.serial}  
                </span>  
              </div>  
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">  
                {property.location}  
              </p>  
            </div>  
          </Link>  
        ))}  
      </div>

      {/* Footer Branding */}  
      <footer className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex justify-between items-center">  
        <p className="text-[9px] uppercase tracking-[0.5em] text-white/20 italic">  
          NexVoyage Collective &copy; 2026  
        </p>  
        <div className="text-[9px] uppercase tracking-[0.5em] text-white/20">  
          Records: {PROPERTY_DATA.length}  
        </div>  
      </footer>  
    </main>  
  );  
}  
