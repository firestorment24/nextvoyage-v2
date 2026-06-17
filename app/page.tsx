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

  {/* Strategic Alliances - Trust Strip */}  
  <section className="py-12 border-b border-[#C5A059]/5 bg-[#0D0D0D]">  
    <div className="max-w-[1600px] mx-auto px-6">  
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:opacity-100 transition-opacity duration-700">  
        <span className="text-[10px] tracking-[0.4em] uppercase font-bold">Virtuoso Member</span>  
        <span className="text-[10px] tracking-[0.4em] uppercase font-bold">Fora Travel Partner</span>  
        <span className="text-[10px] tracking-[0.4em] uppercase font-bold">ILTM Global</span>  
        <span className="text-[10px] tracking-[0.4em] uppercase font-bold">Rosewood Elite</span>  
        <span className="text-[10px] tracking-[0.4em] uppercase font-bold">Aman Preferred</span>  
      </div>  
    </div>  
  </section>

  {/* Ledger Grid */}    
  <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">    
    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">    
      <div className="space-y-4">    
        <h2 className="text-xs tracking-[0.5em] uppercase text-[#C5A059]">Curated Archive</h2>    
        <p className="text-4xl md:text-5xl font-serif font-light tracking-tight">The Current Collection</p>    
      </div>    
      <Link     
        href="/archive"     
        className="group flex items-center gap-6 text-[10px] tracking-[0.3em] uppercase text-zinc-500 hover:text-[#C5A059] transition-all"    
      >    
        Explore Entire Ledger    
        <span className="w-16 h-[1px] bg-zinc-800 group-hover:w-24 group-hover:bg-[#C5A059] transition-all" />    
      </Link>    
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-28">    
      {featuredProperties.map((property, idx) => (    
        <Link     
          key={property.id}     
          href={`/archive/${property.id}`}    
          className="group block"    
        >    
          <div className="image-container relative aspect-[4/5] overflow-hidden mb-8 shadow-2xl">    
            <Image    
              src={property.images[0]}    
              alt={property.name}    
              fill    
              className="object-cover transition-all duration-1000 grayscale-0 group-hover:grayscale group-hover:scale-105"    
            />    
            <div className="absolute top-6 left-6 text-[10px] tracking-[0.3em] text-white/80 font-bold uppercase mix-blend-difference">    
              NV-{String(idx + 1).padStart(3, '0')}    
            </div>    
          </div>    
          <div className="space-y-3">    
            <h3 className="text-2xl font-serif font-light tracking-wide group-hover:text-[#C5A059] transition-colors">    
              {property.name}    
            </h3>    
            <div className="flex items-center gap-4 text-[9px] tracking-[0.25em] uppercase text-zinc-500">    
              <span className="text-[#C5A059]/80 italic">{property.location}</span>    
              <span className="w-1 h-1 rounded-full bg-zinc-800" />    
              <span>{getSanctuaryName(property.sanctuaryId)}</span>    
            </div>    
          </div>    
        </Link>    
      ))}    
    </div>    
  </section>

  {/* Concierge Intake */}    
  <section className="py-40 bg-[#0D0D0D] border-y border-[#C5A059]/5 relative overflow-hidden">    
    <div className="max-w-4xl mx-auto text-center px-6 relative z-10">    
      <h2 className="text-xs tracking-[0.6em] uppercase text-[#C5A059] mb-10">Private Inquiry</h2>    
      <h3 className="text-4xl md:text-7xl font-serif font-light mb-10 leading-tight">Secure Your Passage</h3>    
      <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-16 font-light italic max-w-2xl mx-auto">    
        "Membership is not granted; it is recognized. We provide the keys to the unreachable for those who require nothing less."    
      </p>    
      <Link     
        href="/concierge"    
        className="inline-block px-16 py-5 border border-[#C5A059]/30 text-[11px] tracking-[0.4em] uppercase hover:bg-[#C5A059] hover:text-black transition-all duration-700 ease-in-out"    
      >    
        Begin Intake    
      </Link>    
    </div>    
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]" />    
  </section>

  {/* Journal Teaser */}    
  <section className="py-32 bg-[#0A0A0A]">    
    <div className="max-w-4xl mx-auto text-center px-6">    
      <h2 className="text-xs tracking-[0.4em] uppercase text-zinc-600 mb-8">Editorial Perspective</h2>    
      <Link href="/perspective" className="group inline-block">    
        <h3 className="text-3xl md:text-4xl font-serif font-light mb-6 group-hover:text-[#C5A059] transition-colors">The ROI of Reset</h3>    
        <p className="text-zinc-500 text-sm tracking-widest uppercase group-hover:tracking-[0.3em] transition-all duration-500">Read the Journal</p>    
      </Link>    
    </div>    
  </section>    
</main>    
);    
}  
