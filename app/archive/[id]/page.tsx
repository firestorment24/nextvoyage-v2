"use client";

import { useParams } from "next/navigation";      
import { SANCTUARIES_DATA } from "@/lib/data/sanctuaries";      
import Link from "next/link";

export default function SanctuaryDetailPage() {  
  const params = useParams();  
  const sanctuary = SANCTUARIES_DATA.find(s => s.id === params.id);

  if (!sanctuary) return <div className="pt-24 px-6">Dossier not found.</div>;

  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] pt-24">  
      <div className="max-w-7xl mx-auto px-6">  
        <div className="flex flex-col md:flex-row gap-12">  
          {/* Left: Intelligence Summary */}  
          <div className="w-full md:w-1/3 border-r border-white/10 pr-8">  
            <Link href="/archive" className="text-[10px] uppercase tracking-widest text-[#666] hover:text-white mb-8 block">  
              ← Back to Index  
            </Link>  
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#888] mb-2">{sanctuary.tag}</p>  
            <h1 className="text-5xl font-serif mb-6">{sanctuary.name}</h1>  
            <p className="text-[#888] leading-relaxed font-light mb-8 italic">  
              {sanctuary.atmosphere}  
            </p>  
              
            <div className="space-y-6">  
              <div>  
                <p className="text-[10px] uppercase tracking-widest text-[#444] mb-2">Location</p>  
                <p className="text-sm">{sanctuary.loc}</p>  
              </div>  
              <div>  
                <p className="text-[10px] uppercase tracking-widest text-[#444] mb-2">Assets</p>  
                <p className="text-sm">{sanctuary.propertyCount} Properties in Ledger</p>  
              </div>  
            </div>  
          </div>

          {/* Right: Narrative Detail */}  
          <div className="w-full md:w-2/3">  
            <div className="aspect-video bg-white/5 mb-12 overflow-hidden border border-white/10">  
              <img   
                src={sanctuary.heroImage}   
                alt={sanctuary.name}   
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"   
              />  
            </div>  
              
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
              <div>  
                <h3 className="text-[10px] uppercase tracking-widest mb-4 text-[#888]">Key Highlights</h3>  
                <ul className="space-y-2 text-sm text-[#ccc]">  
                  {sanctuary.highlights.map((h, i) => (  
                    <li key={i}>• {h}</li>  
                  ))}  
                </ul>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </main>  
  );  
}  
