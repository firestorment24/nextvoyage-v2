import Link from 'next/link'  
import { SANCTUARIES_DATA } from '../lib/data'

export default function SanctuariesPage() {  
const ArrowRight = () => (  
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">  
    <path d="M5 12h14M12 5l7 7-7 7"/>  
  </svg>  
)

return (  
  <main className="bg-black text-white selection:bg-white selection:text-black min-h-screen">  
    {/* Page Header */}  
    <section className="pt-64 pb-32 px-8 max-w-7xl mx-auto">  
      <div className="max-w-3xl">  
        <span className="text-[10px] tracking-[0.5em] uppercase opacity-40 block mb-8">The Collection</span>  
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-tight mb-12">  
          A Curated Atlas of <br />  
          <span className="italic font-serif">Nine Archetypes</span>  
        </h1>  
        <p className="text-lg md:text-xl font-light opacity-50 leading-relaxed max-w-xl">  
          Meticulously architected for the world's most discerning travelers. Each archetype represents a unique intersection of privacy, geography, and purpose.  
        </p>  
      </div>  
    </section>

    {/* The Grid */}  
    <section className="px-1 md:px-4 pb-40">  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-4">  
        {SANCTUARIES_DATA.map((item, index) => (  
          <Link   
            key={item.id}   
            href={`/sanctuaries/${item.id}`}   
            className="group relative aspect-[3/4] overflow-hidden bg-[#111]"  
          >  
            {/* Image Layer */}  
            <img   
              src={item.image}   
              alt={item.name}   
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-[1.2s] ease-out grayscale group-hover:grayscale-0"  
            />  
              
            {/* Index Number Overlay */}  
            <div className="absolute top-10 left-10 overflow-hidden h-6">  
              <span className="text-[10px] tracking-widest opacity-20 group-hover:translate-y-[-100%] transition-transform duration-500 block">  
                0{index + 1}  
              </span>  
              <span className="text-[10px] tracking-widest text-white translate-y-[0%] transition-transform duration-500 block">  
                View  
              </span>  
            </div>

            {/* Content Layer */}  
            <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-700">  
              <div className="space-y-4">  
                <span className="text-[9px] tracking-[0.3em] uppercase text-white/40 block">  
                  {item.location}  
                </span>  
                <h3 className="text-3xl font-light tracking-wide italic font-serif">  
                  {item.name}  
                </h3>  
                <p className="text-xs font-light opacity-0 group-hover:opacity-60 transition-opacity duration-700 delay-100 max-w-[80%] leading-relaxed">  
                  {item.vibe}  
                </p>  
                <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">  
                  <ArrowRight />  
                </div>  
              </div>  
            </div>

            {/* Subtle Gradient Reveal */}  
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />  
          </Link>  
        ))}  
      </div>  
    </section>

    {/* Bottom CTA */}  
    <section className="py-40 px-8 border-t border-white/10 text-center">  
      <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-8">Can't find your archetype?</p>  
      <Link   
        href="/concierge"   
        className="text-4xl md:text-5xl font-light italic font-serif hover:opacity-60 transition-opacity"  
      >  
        Request a custom architectural brief →  
      </Link>  
    </section>  
  </main>  
)  
}  
