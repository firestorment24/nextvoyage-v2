import Link from 'next/link';  
import Image from 'next/image';  
import { PROPERTY_DATA } from '@/lib/data/sanctuaries';

export default function HomePage() {  
  // We'll take a curated selection for the home page featured section  
  const featuredProperties = PROPERTY_DATA.slice(0, 6);

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C5A059]/30">  
      {/* Cinematic Hero Section */}  
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#C5A059]/10">  
        <div className="absolute inset-0 z-0">  
          <Image  
            src="https://www.aman.com/sites/default/files/2022-08/Correct_Aman%20New%20York_Landscape.jpg"  
            alt="Aman New York Hero"  
            fill  
            className="object-cover opacity-40 grayscale"  
            priority  
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />  
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">  
          <h1 className="text-5xl md:text-8xl font-light tracking-[0.2em] uppercase mb-6 font-serif text-[#C5A059]">  
            The Art of <br /> Discerning Travel  
          </h1>  
          <p className="text-lg md:text-xl text-zinc-400 font-light tracking-widest max-w-2xl mx-auto mb-12">  
            Private sanctuaries and bespoke journeys for the world's most selective travelers.  
          </p>  
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-[10px] md:text-xs tracking-[0.3em] font-bold uppercase text-[#C5A059]/80">  
            <span className="hover:text-[#C5A059] transition-colors cursor-default">24/7 Global Concierge</span>  
            <span className="hover:text-[#C5A059] transition-colors cursor-default">Off-Market Properties</span>  
            <span className="hover:text-[#C5A059] transition-colors cursor-default">Tailored Itineraries</span>  
          </div>  
        </div>  
      </section>

      {/* Featured Collection Grid */}  
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">  
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">  
          <div>  
            <h2 className="text-xs tracking-[0.4em] uppercase text-[#C5A059] mb-4">Curated Ledger</h2>  
            <p className="text-3xl md:text-4xl font-serif font-light">Featured Sanctuaries</p>  
          </div>  
          <Link   
            href="/archive"   
            className="group flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-[#C5A059] transition-all"  
          >  
            View Entire Ledger  
            <span className="w-12 h-[1px] bg-zinc-800 group-hover:w-20 group-hover:bg-[#C5A059] transition-all" />  
          </Link>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">  
          {featuredProperties.map((property) => (  
            <Link   
              key={property.id}   
              href={`/archive/${property.id}`}  
              className="group block bg-transparent"  
            >  
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-zinc-900">  
                <Image  
                  src={property.images[0]}  
                  alt={property.name}  
                  fill  
                  className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 grayscale"  
                />  
              </div>  
              <div className="space-y-2">  
                <h3 className="text-xl font-serif font-light tracking-wide group-hover:text-[#C5A059] transition-colors">  
                  {property.name}  
                </h3>  
                <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-medium italic">  
                  {property.location}  
                </p>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Perspective / Journal Teaser */}  
      <section className="py-32 bg-[#0D0D0D] border-y border-[#C5A059]/5">  
        <div className="max-w-4xl mx-auto text-center px-6">  
          <h2 className="text-xs tracking-[0.4em] uppercase text-[#C5A059] mb-8">Editorial Perspective</h2>  
          <h3 className="text-4xl md:text-6xl font-serif font-light mb-8 leading-tight">The ROI of Reset</h3>  
          <p className="text-zinc-400 text-lg leading-relaxed mb-12 font-light italic">  
            "Explore our curated insights on high-density travel, quiet luxury, and the intellectual pursuit of the unreachable."  
          </p>  
          <Link   
            href="/perspective"  
            className="inline-block px-12 py-4 border border-[#C5A059]/30 text-[10px] tracking-[0.3em] uppercase hover:bg-[#C5A059] hover:text-black transition-all duration-500"  
          >  
            Read the Journal  
          </Link>  
        </div>  
      </section>  
    </main>  
  );  
}  
