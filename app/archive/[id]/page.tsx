// app/archive/[id]/page.tsx  
"use client";

import { useParams, useRouter } from "next/navigation";  
import { PROPERTY_DATA } from "@/lib/data/sanctuaries";  
import Link from "next/link";

export default function PropertyDetailPage() {  
  const params = useParams();  
  const router = useRouter();  
  const id = params?.id as string;

  const property = PROPERTY_DATA.find((p) => p.id === id);

  if (!property) {  
    return (  
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">  
        <h1 className="text-2xl font-light mb-4">Record Not Found</h1>  
        <p className="text-zinc-500 mb-8">The requested asset does not exist in the active ledger.</p>  
        <Link href="/archive" className="text-sm border-b border-zinc-700 pb-1 hover:text-amber-500 hover:border-amber-500 transition-all">  
          Return to Archive  
        </Link>  
      </div>  
    );  
  }

  return (  
    <main className="min-h-screen bg-black text-white selection:bg-amber-500/30">  
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">  
        {/* Navigation */}  
        <nav className="mb-12 flex justify-between items-center">  
          <Link href="/archive" className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors">  
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Ledger  
          </Link>  
          <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">  
            Serial No. {property.serial} / active_record  
          </div>  
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">  
          {/* Left: Imagery */}  
          <div className="lg:col-span-7">  
            <div className="aspect-[4/5] bg-zinc-900 overflow-hidden">  
              <img   
                src={property.image}   
                alt={property.name}  
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"  
              />  
            </div>  
              
            {/* Atmospheric Tags Display */}  
            <div className="mt-8 flex flex-wrap gap-3">  
              {property.atmosphericTags?.map((tag) => (  
                <span key={tag} className="text-[9px] font-bold tracking-[0.15em] border border-zinc-800 px-3 py-1 text-zinc-500 uppercase">  
                  {tag}  
                </span>  
              ))}  
            </div>  
          </div>

          {/* Right: Intelligence / Specs */}  
          <div className="lg:col-span-5 flex flex-col justify-center">  
            <header className="mb-12">  
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">{property.name}</h1>  
              <p className="text-amber-500 text-xs uppercase tracking-[0.3em] font-medium">{property.location}</p>  
            </header>

            <div className="space-y-12">  
              <section>  
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-4 font-bold italic">The Highlight</h3>  
                <p className="text-xl font-light leading-relaxed text-zinc-300">  
                  {property.highlight}  
                </p>  
              </section>

              <section>  
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-4 font-bold italic">Intelligence Brief</h3>  
                <p className="text-sm font-light leading-relaxed text-zinc-400">  
                  {property.description}  
                </p>  
              </section>

              <section>  
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-6 font-bold italic">Asset Specifications</h3>  
                <ul className="grid grid-cols-1 gap-4 border-t border-zinc-900 pt-6">  
                  {property.specs.map((spec, i) => (  
                    <li key={i} className="flex justify-between items-center text-[11px] tracking-wide">  
                      <span className="uppercase text-zinc-600 font-medium">{spec.label}</span>  
                      <span className="text-zinc-300 uppercase">{spec.value}</span>  
                    </li>  
                  ))}  
                </ul>  
              </section>

              <div className="pt-8">  
                <button className="w-full bg-white text-black py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-amber-500 transition-colors">  
                  Inquire for Access  
                </button>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </main>  
  );  
}  
