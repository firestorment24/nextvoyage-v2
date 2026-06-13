import Link from 'next/link'  
import { PROPERTY_DATA } from '@/lib/data/sanctuaries'

export default function ArchivePage() {  
  return (  
    <main className="min-h-screen bg-white">  
      {/* Editorial Header */}  
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20 border-b border-gray-100">  
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">  
          <div className="max-w-2xl">  
            <h1 className="text-4xl md:text-6xl font-light tracking-[-0.03em] leading-tight text-black">  
              The Elite <span className="italic serif font-normal">Ledger</span>  
            </h1>  
            <p className="mt-6 text-sm text-gray-400 uppercase tracking-[0.2em] leading-relaxed">  
              Node 02: The Manifest — A curated index of the world's most discreet sanctuaries.  
            </p>  
          </div>  
          <div className="text-right">  
            <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest">  
              Total Records: {PROPERTY_DATA.length}  
            </span>  
          </div>  
        </div>  
      </section>

      {/* Property Grid */}  
      <section className="max-w-7xl mx-auto px-6 py-20">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">  
          {PROPERTY_DATA.map((property) => (  
            <Link key={property.id} href={`/archive/${property.id}`} className="group block">  
              {/* Image Frame */}  
              <div className="aspect-[4/5] overflow-hidden bg-gray-50 border border-gray-100 relative">  
                <img  
                  src={property.image}  
                  alt={property.name}  
                  className="h-full w-full object-cover grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-105"  
                />  
                <div className="absolute top-4 right-4 text-[8px] tracking-[0.3em] text-white mix-blend-difference opacity-50 font-mono">  
                  {property.id}  
                </div>  
              </div>

              {/* Card Meta */}  
              <div className="mt-6 space-y-2">  
                <div className="flex justify-between items-start">  
                  <h3 className="text-[11px] uppercase tracking-[0.4em] font-medium text-black">  
                    {property.name}  
                  </h3>  
                </div>  
                <p className="text-[12px] font-serif italic text-gray-400">  
                  {property.location}  
                </p>  
                  
                {/* Hover Reveal Line */}  
                <div className="pt-4 overflow-hidden">  
                  <div className="h-[1px] w-0 bg-black transition-all duration-700 group-hover:w-full" />  
                  <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-gray-400 opacity-0 transform translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">  
                    {property.highlight}  
                  </p>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Footer Branding */}  
      <footer className="py-20 border-t border-gray-100 text-center">  
        <p className="text-[10px] uppercase tracking-[0.5em] text-gray-300">  
          NexVoyage Collective &copy; 2026 — All Rights Reserved  
        </p>  
      </footer>  
    </main>  
  )  
}  
