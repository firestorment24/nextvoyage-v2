"use client";

import { useParams } from "next/navigation";      
import { PROPERTY_DATA } from "@/lib/data/sanctuaries";      
import Link from "next/link";



export default function PropertyDossierPage() {  
  const params = useParams();  
  const property = PROPERTY_DATA.find(p => p.id === params.id);

  if (!property) return <div className="pt-24 px-6 text-[#444]">Asset not found in ledger.</div>;

  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] pt-24 pb-20">  
      <div className="max-w-7xl mx-auto px-6">  
        {/* Navigation / Metadata */}  
        <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">  
          <Link href="/archive" className="text-[10px] uppercase tracking-[0.3em] text-[#666] hover:text-white transition-colors">  
            ← Return to Ledger  
          </Link>  
          <div className="text-right">  
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#444]">Serial No.</p>  
            <p className="text-sm font-sans tracking-widest">{property.id}</p>  
          </div>  
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">  
          {/* Visual Asset */}  
          <div className="lg:col-span-7">  
            <div className="border border-white/10 p-2 bg-white/[0.02]">  
              <div className="aspect-[3/4] md:aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">  
                <img   
                  src={property.image}   
                  alt={property.name}   
                  className="w-full h-full object-cover"   
                />  
              </div>  
            </div>  
            {/* Context Assets (Placeholders for now) */}  
            <div className="mt-8 grid grid-cols-3 gap-4">  
               {[1,2,3].map(i => (  
                 <div key={i} className="aspect-square bg-white/[0.03] border border-white/5" />  
               ))}  
            </div>  
          </div>

          {/* Intelligence Data */}  
          <div className="lg:col-span-5 space-y-12">  
            <section>  
              <h1 className="text-5xl font-serif mb-4 leading-tight">{property.name}</h1>  
              <p className="text-sm text-[#888] uppercase tracking-[0.2em] mb-8">{property.location}</p>  
              <div className="h-px bg-gradient-to-r from-white/20 to-transparent w-full" />  
            </section>

            <section className="space-y-6">  
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#666]">Narrative Overview</h3>  
              <p className="font-serif italic text-lg leading-relaxed text-white/90">  
                "{property.description}"  
              </p>  
            </section>

            {/* Technical Specifications */}  
            <section className="grid grid-cols-2 gap-y-8 gap-x-4">  
              <div>  
                <h4 className="text-[10px] uppercase tracking-widest text-[#444] mb-2">Technical Highlight</h4>  
                <p className="text-sm text-[#ccc] leading-snug">{property.highlight}</p>  
              </div>  
              {property.specs && Object.entries(property.specs).map(([key, value]) => (  
                <div key={key}>  
                  <h4 className="text-[10px] uppercase tracking-widest text-[#444] mb-2">{key}</h4>  
                  <p className="text-sm text-[#ccc] leading-snug">{String(value)}</p>  
                </div>  
              ))}  
            </section>

{/* Vetting Action */}  
<section className="pt-12 border-t border-white/5">  
  <Link href="/inquiry" className="block">  
    <button className="w-full border border-neutral-700 py-4 text-[10px] font-mono uppercase tracking-[0.4em] text-white hover:bg-white hover:text-black transition-all duration-500">  
      Initialize Strategic Vetting  
    </button>  
  </Link>  
  <p className="mt-4 text-[9px] text-[#444] uppercase tracking-widest text-center">  
    Secure Transmission via NexVoyage Protocol  
  </p>  
</section>  
            
            <div className="pt-12">  
              <button className="w-full border border-white/20 py-4 text-[11px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500">  
                Request Acquisition Details  
              </button>  
            </div>  
          </div>  
        </div>  
      </div>  
    </main>  
  );  
}  
