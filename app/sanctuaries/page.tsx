import Link from 'next/link';  
import { SANCTUARIES_DATA } from '@/lib/data/sanctuaries';

export default function SanctuariesHub() {  
  return (  
    <main className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] pt-32 pb-24 px-6">  
      <div className="max-w-7xl mx-auto">  
        <header className="mb-20">  
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-6">The Collection</h1>  
          <p className="text-xl text-stone-500 font-light max-w-2xl">  
            Nine specialized archetypes designed to guarantee the ROI of Reset.   
          </p>  
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">  
          {SANCTUARIES_DATA.map((sanctuary, index) => (  
            <Link key={sanctuary.slug} href={`/sanctuaries/${sanctuary.slug}`} className="group block">  
              <div className="relative aspect-[3/4] bg-stone-200 mb-6 overflow-hidden">  
                <img   
                  src={sanctuary.heroImage}   
                  alt={sanctuary.name}   
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"  
                />  
                <div className="absolute top-6 left-6 bg-black text-white px-3 py-1 text-[10px] tracking-widest uppercase">  
                  {sanctuary.propertyCount} PROPERTIES  
                </div>  
              </div>  
              <div className="flex justify-between items-start border-b border-stone-200 pb-4">  
                <div>  
                  <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-1">  
                    {sanctuary.location}  
                  </span>  
                  <h2 className="text-2xl font-light tracking-tight group-hover:italic transition-all">  
                    {sanctuary.name}  
                  </h2>  
                </div>  
                <span className="text-xs font-serif text-stone-300">/0{index + 1}</span>  
              </div>  
              <p className="mt-4 text-sm text-stone-500 font-light leading-relaxed">  
                {sanctuary.tagline}  
              </p>  
            </Link>  
          ))}  
        </div>  
      </div>  
    </main>  
  );  
}  
