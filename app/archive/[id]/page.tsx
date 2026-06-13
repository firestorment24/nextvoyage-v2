"use client";

import { useParams } from "next/navigation";    
import { SANCTUARIES } from "@/lib/data/sanctuaries";    
import Link from "next/link";

export default function PropertyDetailPage() {  
  const { id } = useParams();  
  const property = SANCTUARIES.find((p) => p.id === id);

  if (!property) {  
    return (  
      <div className="min-h-screen bg-black text-[#D4AF37] flex flex-col items-center justify-center p-8 font-sans">  
        <h1 className="text-2xl font-serif italic mb-4 tracking-widest uppercase">Record Not Found</h1>  
        <Link href="/archive" className="text-[10px] tracking-[0.3em] border border-[#D4AF37]/40 px-6 py-3 hover:bg-[#D4AF37] hover:text-black transition-all">  
          RETURN_TO_ARCHIVE  
        </Link>  
      </div>  
    );  
  }
 
  return (  
    <main className="min-h-screen bg-black text-[#D4AF37] selection:bg-[#D4AF37] selection:text-black pt-24">  
      {/* Dossier Navigation */}  
      <nav className="px-8 py-6 border-b border-[#D4AF37]/10 flex justify-between items-center">  
        <Link href="/archive" className="text-[10px] tracking-[0.4em] hover:opacity-50 transition-all font-sans">  
          &lt; BACK_TO_LEDGER  
        </Link>  
        <div className="flex gap-8 items-center">  
          <span className="text-[9px] tracking-[0.3em] opacity-40 font-sans uppercase">Status: Verified_Asset</span>  
          <span className="text-[9px] tracking-[0.3em] opacity-40 font-sans uppercase">Ref: {property.id}</span>  
        </div>  
      </nav>

      <section className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-12 gap-16 mt-8">  
          
        {/* Left Column: The Narrative */}  
        <div className="lg:col-span-7 space-y-12">  
          <div className="space-y-4">  
            <p className="text-[11px] tracking-[0.5em] opacity-50 font-sans uppercase">{property.loc}</p>  
            <h1 className="text-6xl md:text-8xl font-serif font-light tracking-tighter leading-tight italic">  
              {property.name}  
            </h1>  
            <div className="flex gap-3 pt-4">  
              {/* High-Density Atmospheric Tags */}  
              <span className="text-[9px] px-3 py-1 border border-[#D4AF37]/20 font-sans tracking-widest uppercase">  
                {property.tag}  
              </span>  
              <span className="text-[9px] px-3 py-1 bg-[#D4AF37]/10 font-sans tracking-widest uppercase italic">  
                Aesthetic_Validated  
              </span>  
            </div>  
          </div>

          <div className="aspect-[16/9] w-full overflow-hidden border border-[#D4AF37]/10 bg-[#111]">  
            <img   
              src={property.heroImage}   
              alt={property.name}   
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"   
            />  
          </div>

          <div className="max-w-xl space-y-6">  
            <h3 className="text-[10px] tracking-[0.4em] font-sans opacity-40 border-b border-[#D4AF37]/10 pb-2 uppercase">Atmosphere_Report</h3>  
            <p className="text-lg md:text-xl font-serif font-light leading-relaxed italic opacity-90">  
              "{property.atmosphere}"  
            </p>  
          </div>  
        </div>

        {/* Right Column: Technical Ledger & ROI */}  
        <div className="lg:col-span-5 space-y-16 lg:pt-32">  
            
          {/* ROI / Technical Specs Section */}  
          <div className="space-y-8 p-8 border border-[#D4AF37]/10 bg-[#050505]">  
            <h3 className="text-[10px] tracking-[0.4em] font-sans opacity-40 uppercase">Technical_Specifications</h3>  
              
            <div className="space-y-6">  
              <div className="flex justify-between items-end border-b border-[#D4AF37]/5 pb-2">  
                <span className="text-[10px] font-sans opacity-60 tracking-widest uppercase">Privacy Grade</span>  
                <span className="text-xs font-sans tracking-tighter">CLASS_AAA // GHOST_MODE</span>  
              </div>  
              <div className="flex justify-between items-end border-b border-[#D4AF37]/5 pb-2">  
                <span className="text-[10px] font-sans opacity-60 tracking-widest uppercase">Asset Count</span>  
                <span className="text-xs font-sans tracking-tighter">{property.propertyCount} UNITS</span>  
              </div>  
              <div className="flex justify-between items-end border-b border-[#D4AF37]/5 pb-2">  
                <span className="text-[10px] font-sans opacity-60 tracking-widest uppercase">ROI Factor</span>  
                <span className="text-xs font-sans tracking-tighter">REGENERATIVE_WELLNESS</span>  
              </div>  
              <div className="flex justify-between items-end border-b border-[#D4AF37]/5 pb-2">  
                <span className="text-[10px] font-sans opacity-60 tracking-widest uppercase">Archetype</span>  
                <span className="text-xs font-sans tracking-tighter italic">THE_SILENT_ROI</span>  
              </div>  
            </div>  
          </div>

          {/* Highlights */}  
          <div className="space-y-8 px-8">  
            <h3 className="text-[10px] tracking-[0.4em] font-sans opacity-40 uppercase">Strategic_Highlights</h3>  
            <ul className="space-y-6">  
              {property.highlights.map((h, i) => (  
                <li key={i} className="flex gap-4 items-start group">  
                  <span className="text-[9px] mt-1 font-sans opacity-40 group-hover:opacity-100 transition-opacity">0{i + 1}</span>  
                  <p className="text-sm font-sans tracking-wide leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">  
                    {h}  
                  </p>  
                </li>  
              ))}  
            </ul>  
          </div>

          {/* Call to Action */}  
          <div className="px-8 pt-8">  
            <Link   
              href="/inquiry"   
              className="block w-full text-center py-5 border border-[#D4AF37] text-[10px] tracking-[0.5em] hover:bg-[#D4AF37] hover:text-black transition-all font-sans uppercase"  
            >  
              Request_Dossier_Access  
            </Link>  
          </div>  
        </div>  
      </section>

      <footer className="p-20 text-center opacity-10">  
        <p className="text-[8px] tracking-[1.5em] font-sans">NVC_ELITE_LEDGER_ENCRYPTED</p>  
      </footer>  
    </main>  
  );  
}  
