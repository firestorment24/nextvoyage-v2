import React from 'react';  
import { notFound } from 'next/navigation';  
import { PROPERTY_DATA } from '@/lib/data/sanctuaries';  
import Link from 'next/link';

export default async function PropertyDossierPage({ params }: { params: { id: string } }) {  
const { id } = await params;  
const property = PROPERTY_DATA.find((p) => p.id === id);

if (!property) {  
  notFound();  
}

return (  
  <div className="min-h-screen bg-[#1C1C1C] text-[#FCFAF7] selection:bg-[#C5A059] selection:text-[#1C1C1C]">  
    <style>  
      {`  
        h1, h2, h3, h4 {  
          background-color: transparent !important;  
          color: #C5A059 !important;  
        }  
        body {  
          background-color: #1C1C1C !important;  
        }  
      `}  
    </style>

    <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden border-b border-[#C5A059]/20">  
      {property.image ? (  
        <img   
          src={property.image}   
          alt={property.name}   
          className="w-full h-full object-cover"  
        />  
      ) : (  
        <div className="w-full h-full bg-neutral-900 flex items-center justify-center italic text-[#C5A059]/20">  
          Vaulted Imagery Unavailable  
        </div>  
      )}  
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent" />  
        
      <div className="absolute bottom-12 left-6 md:left-12">  
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-4 block">  
          Verified Sanctuary  
        </span>  
        <h1 className="text-4xl md:text-7xl font-light tracking-tighter italic">  
          {property.name}  
        </h1>  
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#FCFAF7]/60 mt-2">  
          {property.location}  
        </p>  
      </div>  
    </div>

    <main className="max-w-4xl mx-auto px-6 py-24 space-y-24">  
      <section className="space-y-6">  
        <h3 className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059]/60">Narrative</h3>  
        <p className="text-xl md:text-2xl font-light leading-relaxed italic text-[#FCFAF7]/90">  
          "{property.description}"  
        </p>  
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">  
        <section className="space-y-6">  
          <h3 className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059]/60">Elite Amenities</h3>  
          <ul className="space-y-4">  
            {property.highlight?.split(',').map((item, i) => (  
              <li key={i} className="text-sm tracking-wide border-l border-[#C5A059]/30 pl-4 py-1">  
                {item.trim()}  
              </li>  
            ))}  
          </ul>  
        </section>

        <section className="space-y-6 bg-[#C5A059]/5 p-8 border border-[#C5A059]/10">  
          <h3 className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059]/60">Specifications</h3>  
          <div className="grid grid-cols-2 gap-y-4 text-[10px] uppercase tracking-widest">  
            {/* Dynamic Mapping of Specs Object */}  
            {property.specs && typeof property.specs === 'object' &&   
              Object.entries(property.specs).map(([key, value]) => (  
                <React.Fragment key={key}>  
                  <span className="text-[#C5A059]/40">{key}</span>  
                  <span>{value as string}</span>  
                </React.Fragment>  
              ))  
            }  
              
            <span className="text-[#C5A059]/40">Status</span>  
            <span className="text-[#C5A059]">Archived</span>  
              
            <span className="text-[#C5A059]/40">Serial</span>  
            <span>{property.serial}</span>  
          </div>  
        </section>  
      </div>

      <footer className="pt-24 border-t border-[#C5A059]/20 flex justify-between items-center">  
        <Link href="/archive" className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] hover:opacity-60 transition-opacity">  
          ← Return to Archive  
        </Link>  
        <Link href="/invitation" className="text-[10px] uppercase tracking-[0.4em] bg-[#C5A059] text-[#1C1C1C] px-6 py-3 font-bold hover:bg-[#FCFAF7] transition-all">  
          Request Access  
        </Link>  
      </footer>  
    </main>  
  </div>  
);  
}  
