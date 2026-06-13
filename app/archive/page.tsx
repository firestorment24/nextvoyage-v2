import { PROPERTY_DATA } from '@/data/properties';  
import Link from 'next/link';

export default function ArchivePage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans selection:bg-[#B8A164]/30">  
      {/* Header Section */}  
      <header className="pt-32 pb-16 px-6 border-b border-[#B8A164]/10">  
        <div className="max-w-[1400px] mx-auto">  
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">  
            <div>  
              <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-4">The Archive</h1>  
              <div className="flex items-center gap-4">  
                <div className="h-[1px] w-12 bg-[#B8A164]" />  
                <p className="text-[10px] tracking-[0.5em] uppercase text-[#B8A164] font-bold">  
                  Elite Ledger / Quarterly Rotation: Summer 2026  
                </p>  
              </div>  
            </div>  
            <div className="text-right">  
              <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 leading-loose">  
                Total Assets Verified: {PROPERTY_DATA.length}<br />  
                System Status: Operational / Full Green  
              </p>  
            </div>  
          </div>  
        </div>  
      </header>

      {/* The Ledger Grid */}  
      <section className="px-6 py-12">  
        <div className="max-w-[1400px] mx-auto">  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">  
            {PROPERTY_DATA.map((property, index) => (  
              <Link   
                key={property.id}   
                href={`/archive/${property.id}`}  
                className="group block"  
              >  
                {/* Visual Asset */}  
                <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-zinc-900 border border-[#B8A164]/5">  
                  <img   
                    src={property.image}   
                    alt={property.name}  
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-105"  
                  />  
                  <div className="absolute top-4 right-4 bg-[#0A0A0A]/80 backdrop-blur-md px-3 py-1 border border-[#B8A164]/20">  
                    <span className="text-[9px] tracking-[0.2em] text-[#B8A164] uppercase font-bold">  
                      NV-LDR-{(index + 1).toString().padStart(3, '0')}  
                    </span>  
                  </div>  
                </div>

                {/* Technical Specs / Typography Mix */}  
                <div className="space-y-3">  
                  <div className="flex items-start justify-between border-b border-[#B8A164]/10 pb-2">  
                    <h2 className="text-xl font-serif text-white group-hover:text-[#B8A164] transition-colors">  
                      {property.name}  
                    </h2>  
                    <span className="text-[10px] tracking-widest opacity-40 uppercase pt-1">  
                      {property.priceLevel}  
                    </span>  
                  </div>  
                    
                  <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase">  
                    <span className="text-[#B8A164] font-bold">{property.location}</span>  
                    <span className="opacity-40 italic font-serif lowercase tracking-normal text-sm">  
                      {property.exclusiveOffer}  
                    </span>  
                  </div>  
                    
                  <p className="text-[11px] leading-relaxed text-zinc-500 font-light line-clamp-2 pt-2">  
                    {property.highlight}  
                  </p>  
                </div>  
              </Link>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* Ledger Footer */}  
      <footer className="py-24 px-6 border-t border-[#B8A164]/10">  
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">  
          <div className="w-16 h-[1px] bg-[#B8A164]/30 mb-8" />  
          <p className="text-[10px] tracking-[0.8em] uppercase opacity-30">  
            End of Current Ledger  
          </p>  
        </div>  
      </footer>  
    </main>  
  );  
}  
