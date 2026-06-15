import Image from 'next/image';  
import Link from 'next/link';

export default function HomePage() {  
  return (  
    <div className="relative">  
      {/* Hero Section Placeholder */}  
      <section className="relative h-[90vh] flex items-center justify-center bg-black overflow-hidden">  
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a2a2a] via-black to-black" />  
        <div className="relative z-10 text-center px-4">  
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tighter text-[#c5a059]">  
            THE ART OF <br /> DISCERNING TRAVEL  
          </h1>  
          <p className="max-w-xl mx-auto text-stone-400 text-lg md:text-xl font-light italic">  
            Private sanctuaries and bespoke journeys for the world's most selective travelers.  
          </p>  
        </div>  
      </section>

      {/* Featured Properties Placeholders */}  
      <section className="py-24 px-6 max-w-7xl mx-auto">  
        <div className="flex justify-between items-end mb-12 border-b border-[#2a2a2a] pb-6">  
          <div>  
            <h2 className="text-3xl text-[#c5a059] tracking-tight">FEATURED SANCTUARIES</h2>  
            <p className="text-stone-500 text-sm uppercase tracking-widest mt-2">Summer 2026 Collection</p>  
          </div>  
          <Link href="/sanctuaries" className="text-stone-400 hover:text-[#c5a059] transition-colors text-sm uppercase tracking-widest">  
            View All →  
          </Link>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
          {/* Placeholder Property 1 */}  
          <div className="group cursor-pointer">  
            <div className="aspect-[16/10] bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center mb-6 overflow-hidden relative">  
              <span className="text-[#2a2a2a] text-6xl font-bold">01</span>  
              <div className="absolute inset-0 bg-[#c5a059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />  
            </div>  
            <h3 className="text-xl text-stone-200 mb-2">Amanyara Private Villas</h3>  
            <p className="text-stone-500 font-light italic">Turks & Caicos</p>  
          </div>

          {/* Placeholder Property 2 */}  
          <div className="group cursor-pointer">  
            <div className="aspect-[16/10] bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center mb-6 overflow-hidden relative">  
              <span className="text-[#2a2a2a] text-6xl font-bold">02</span>  
              <div className="absolute inset-0 bg-[#c5a059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />  
            </div>  
            <h3 className="text-xl text-stone-200 mb-2">Cheval Blanc Randheli</h3>  
            <p className="text-stone-500 font-light italic">Maldives</p>  
          </div>  
        </div>  
      </section>  
    </div>  
  );  
}  
