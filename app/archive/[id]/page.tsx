"use client";

import { useParams, useRouter } from "next/navigation";    
import { SANCTUARIES } from "@/lib/data/sanctuaries";    
import Link from "next/link";

export default function PropertyDetailPage() {  
  const { id } = useParams();  
  const router = useRouter();  
    
  const property = SANCTUARIES.find((p) => p.id === id);

  if (!property) {  
    return (  
      <div className="min-h-screen bg-black text-[#D4AF37] flex flex-col items-center justify-center p-8">  
        <h1 className="text-2xl font-light mb-4 tracking-widest">RECORD NOT FOUND</h1>  
        <Link href="/archive" className="text-xs border border-[#D4AF37] px-4 py-2 hover:bg-[#D4AF37] hover:text-black transition-all">  
          RETURN TO ARCHIVE  
        </Link>  
      </div>  
    );  
  }

  return (  
    <main className="min-h-screen bg-black text-[#D4AF37] font-mono selection:bg-[#D4AF37] selection:text-black">  
      {/* Header */}  
      <nav className="p-6 border-b border-[#D4AF37]/20 flex justify-between items-center">  
        <Link href="/archive" className="text-xs tracking-[0.3em] hover:opacity-50 transition-all cursor-pointer">  
          &lt; BACK_TO_ARCHIVE  
        </Link>  
        <span className="text-[10px] opacity-40">REF_ID: {property.id}</span>  
      </nav>

      {/* Hero Section */}  
      <section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-7xl mx-auto">  
        <div className="space-y-8">  
          <div className="space-y-2">  
            <p className="text-[10px] tracking-widest opacity-50">{property.loc.toUpperCase()}</p>  
            <h1 className="text-4xl md:text-6xl font-light tracking-tighter leading-none">{property.name.toUpperCase()}</h1>  
          </div>  
            
          <div className="h-[400px] w-full grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden border border-[#D4AF37]/20">  
            <img src={property.heroImage} alt={property.name} className="w-full h-full object-cover transform hover:scale-105 transition-all duration-1000" />  
          </div>  
        </div>

        <div className="flex flex-col justify-end space-y-12 pb-4">  
          <div className="space-y-4">  
             <h3 className="text-xs tracking-[0.2em] border-b border-[#D4AF37]/20 pb-2">ATMOSPHERE</h3>  
             <p className="text-sm leading-relaxed opacity-80">{property.atmosphere}</p>  
          </div>

          <div className="grid grid-cols-1 gap-6">  
            <div className="space-y-4">  
              <h3 className="text-xs tracking-[0.2em] border-b border-[#D4AF37]/20 pb-2">HIGHLIGHTS</h3>  
              <ul className="space-y-2">  
                {property.highlights.map((h, i) => (  
                  <li key={i} className="text-xs opacity-70 flex items-center">  
                    <span className="mr-2 text-[8px]">●</span> {h}  
                  </li>  
                ))}  
              </ul>  
            </div>  
          </div>  
        </div>  
      </section>  
    </main>  
  );  
}  
