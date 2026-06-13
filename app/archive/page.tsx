// app/archive/page.tsx  
import Link from 'next/link';  
import { PROPERTY_DATA } from '@/lib/data/sanctuaries';

export default function ArchivePage() {  
  return (  
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-8">  
      <header className="max-w-7xl mx-auto mb-16 text-center">  
        <h1 className="text-5xl font-light tracking-widest uppercase mb-4">The Elite Ledger</h1>  
        <p className="text-neutral-500 font-mono text-sm uppercase tracking-widest">  
          The Vault / {PROPERTY_DATA.length} Active Records  
        </p>  
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">  
        {PROPERTY_DATA.map((property) => (  
          <Link key={property.id} href={`/archive/${property.id}`} className="group block relative">  
            <div className="aspect-[4/5] overflow-hidden bg-neutral-900 mb-4 relative">  
              {/* Serial Number Overlay */}  
              <div className="absolute top-4 left-4 z-10 text-[10px] font-mono text-neutral-400 bg-black/50 px-2 py-1 backdrop-blur-sm tracking-tighter">  
                {property.serial}  
              </div>  
                
              <img   
                src={property.image}   
                alt={property.name}  
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"  
              />  
                
              {/* Subtle Overlay on Hover */}  
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">  
                <span className="text-xs font-mono uppercase tracking-[0.2em] border-b border-white pb-1">Analyze Asset</span>  
              </div>  
            </div>  
              
            <div className="space-y-1">  
              <h2 className="text-lg font-medium tracking-wide group-hover:text-amber-100 transition-colors">{property.name}</h2>  
              <p className="text-neutral-500 text-xs uppercase tracking-widest">{property.location}</p>  
              <p className="text-neutral-400 text-sm italic font-light pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">  
                {property.highlight}  
              </p>  
            </div>  
          </Link>  
        ))}  
      </div>

      <footer className="max-w-7xl mx-auto mt-32 border-t border-neutral-800 pt-12 flex justify-between items-center text-[10px] font-mono text-neutral-600 uppercase tracking-widest">  
        <div>NexVoyage Collective © 2026</div>  
        <div>Vetting Mandatory / Private Archive</div>  
      </footer>  
    </div>  
  );  
}  
