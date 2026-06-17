import Link from 'next/link';  
import Image from 'next/image';  
import { PROPERTY_DATA, SANCTUARIES_DATA } from '@/lib/data/sanctuaries';

export default function HomePage() {    
const featuredProperties = PROPERTY_DATA.slice(0, 6);

// Type-safe helper for Sanctuary names  
const getSanctuaryName = (id?: string) => {    
  if (!id) return "Private Collection";    
  return SANCTUARIES_DATA.find(s => s.id === id)?.name || "Private Collection";    
};

return (    
<main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C5A059]/30 relative">    
  {/* NUCLEAR FIX: Force background colors and kill ghost boxes */}    
  <style dangerouslySetInnerHTML={{ __html: `    
    body { background-color: #0A0A0A !important; }    
    * { background-image: none !important; }    
    h1, h2, h3, p, span, a, section, div, main {     
      background-color: transparent !important;     
      box-shadow: none !important;    
    }    
    .image-container { background-color: #121212 !important; }    
  `}} />

  {/* Hero Section */}    
  <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-[#C5A059]/10">    
    <div className="absolute inset-0 z-0">    
      <Image    
        src="https://images.unsplash.com/photo-1544161515-436cefd659f4?q=80&w=2070&auto=format&fit=crop"    
        alt="The Art of Discerning Travel"    
        fill    
        className="object-cover opacity-60 contrast-125"    
        priority    
      />    
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/20 via-[#0A0A0A]/40 to-[#0A0A0A]" />    
    </div>

    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">    
      <h1 className="text-5xl md:text-8xl font-light tracking-[0.25em] uppercase mb-8 font-serif text-[#C5A059]">    
        The Art of <br /> Discerning Travel    
      </h1>    
      <p className="text-lg md:text-xl text-zinc-300 font-light tracking-[0.15em] max-w-2xl mx-auto mb-16 italic">    
        Private sanctuaries and bespoke journeys for the world's most selective travelers.    
      </p>    
      <div className="flex flex-wrap justify-center gap-8 md:gap-20 text-[10px] tracking-[0.4em] font-bold uppercase text-[#C5A059]/60">    
        <span>24/7 Global Concierge</span>    
        <span>Off-Market Access</span>    
        <span>Tailored Itineraries</span>    
      </div>    
    </div>    
  </section>

  {/* STRATEGIC ALLIANCES SECTION */}  
<section className="py-24 bg-[#0A0A0A] border-t border-zinc-800">  
  <div className="max-w-7xl mx-auto px-6">  
    <p className="text-xs tracking-[0.3em] text-zinc-500 mb-12 uppercase">  
      Unmatched Access. Preferred Status. Global Leverage.  
    </p>  
      
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-700">  
      {/* Starting with Fora as requested */}  
      <div className="flex flex-col gap-1">  
        <span className="text-[10px] text-zinc-600 font-mono italic">Primary Node</span>  
        <span className="text-white tracking-widest uppercase text-sm">Fora Travel Partner</span>  
      </div>  
      <div className="flex flex-col gap-1">  
        <span className="text-[10px] text-zinc-600 font-mono">Network</span>  
        <span className="text-white tracking-widest uppercase text-sm">Virtuoso Member</span>  
      </div>  
      <div className="flex flex-col gap-1">  
        <span className="text-[10px] text-zinc-600 font-mono">Pillar</span>  
        <span className="text-white tracking-widest uppercase text-sm">Four Seasons Preferred</span>  
      </div>  
      <div className="flex flex-col gap-1">  
        <span className="text-[10px] text-zinc-600 font-mono">Pillar</span>  
        <span className="text-white tracking-widest uppercase text-sm">Aman Preferred</span>  
      </div>  
      <div className="flex flex-col gap-1">  
        <span className="text-[10px] text-zinc-600 font-mono">Pillar</span>  
        <span className="text-white tracking-widest uppercase text-sm">Belmond Bellini Club</span>  
      </div>  
      <div className="flex flex-col gap-1">  
        <span className="text-[10px] text-zinc-600 font-mono">Pillar</span>  
        <span className="text-white tracking-widest uppercase text-sm">Mandarin Oriental Fan Club</span>  
      </div>  
      <div className="flex flex-col gap-1">  
        <span className="text-[10px] text-zinc-600 font-mono">Pillar</span>  
        <span className="text-white tracking-widest uppercase text-sm">Rosewood Elite</span>  
      </div>  
      <div className="flex flex-col gap-1">  
        <span className="text-[10px] text-zinc-600 font-mono">Pillar</span>  
        <span className="text-white tracking-widest uppercase text-sm">Peninsula PenClub</span>  
      </div>  
      <div className="flex flex-col gap-1">  
        <span className="text-[10px] text-zinc-600 font-mono">Pillar</span>  
        <span className="text-white tracking-widest uppercase text-sm">Dorchester Diamond Club</span>  
      </div>  
      <div className="flex flex-col gap-1">  
        <span className="text-[10px] text-zinc-600 font-mono">Pillar</span>  
        <span className="text-white tracking-widest uppercase text-sm">Hyatt Privé</span>  
      </div>  
      <div className="flex flex-col gap-1">  
        <span className="text-[10px] text-zinc-600 font-mono">Pillar</span>  
        <span className="text-white tracking-widest uppercase text-sm">Oetker Pearl Partner</span>  
      </div>  
      <div className="flex flex-col gap-1">  
        <span className="text-[10px] text-zinc-600 font-mono">Authority</span>  
        <span className="text-white tracking-widest uppercase text-sm">ILTM Global</span>  
      </div>  
    </div>  
  </div>  
</section>

{/* PROPERTY PORTFOLIO SECTION */}  
<section className="py-24 bg-[#0A0A0A]">  
  <div className="max-w-7xl mx-auto px-6">  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">  
      {/* Property 001 */}  
      <div className="group cursor-crosshair">  
        <div className="overflow-hidden mb-6 bg-zinc-900 aspect-[16/9]">  
          <img   
            src="/aman-ny-detail.jpg"   
            alt="NV-001"   
            className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000"  
          />  
        </div>  
        <div className="flex justify-between items-baseline border-b border-zinc-800 pb-4">  
          <h3 className="text-white text-lg tracking-tighter uppercase">Aman New York</h3>  
          <span className="text-zinc-600 font-mono text-xs italic">NV-001</span>  
        </div>  
      </div>

      {/* Property 002 */}  
      <div className="group cursor-crosshair">  
        <div className="overflow-hidden mb-6 bg-zinc-900 aspect-[16/9]">  
          <img   
            src="/lanesborough-london.jpg"   
            alt="NV-002"   
            className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000"  
          />  
        </div>  
        <div className="flex justify-between items-baseline border-b border-zinc-800 pb-4">  
          <h3 className="text-white text-lg tracking-tighter uppercase">The Lanesborough</h3>  
          <span className="text-zinc-600 font-mono text-xs italic">NV-002</span>  
        </div>  
      </div>  
    </div>  
  </div>  
</section>

{/* CONCIERGE INTAKE (REPLACING PRIVATE INQUIRY) */}  
<section className="py-32 bg-[#0A0A0A] border-t border-zinc-900">  
  <div className="max-w-3xl mx-auto px-6 text-center">  
    <h2 className="text-3xl md:text-5xl text-white tracking-tighter mb-8 uppercase italic font-light">  
      Initiate the Collective Access.  
    </h2>  
    <p className="text-zinc-400 mb-12 leading-relaxed font-light">  
      The Bespoke Travel Manifest is now open for Q3 and Q4.   
      Secure your position within the cohort.  
    </p>  
    <button className="bg-transparent border border-zinc-700 text-white px-12 py-4 tracking-[0.4em] uppercase text-xs hover:bg-white hover:text-black transition-all duration-500">  
      Open Concierge Intake  
    </button>  
  </div>  
</section>  
