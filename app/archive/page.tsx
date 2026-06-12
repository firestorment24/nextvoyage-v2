import Link from 'next/link';  
import Image from 'next/image';  
import { SANCTUARIES_DATA } from '@/lib/data/sanctuaries'; // Added /sanctuaries

export default function ArchiveIndex() { 
  return (  
    <main className="min-h-screen bg-white pt-32 pb-20 px-6 sm:px-12">  
      {/* Editorial Header */}  
      <header className="max-w-screen-xl mx-auto mb-24">  
        <h1 className="text-[12vw] leading-[0.9] font-light tracking-tighter uppercase mb-8">  
          The <br /> Collective  
        </h1>  
        <div className="flex justify-between items-end border-t border-black pt-6">  
          <p className="text-sm uppercase tracking-widest">Selected Sanctuaries</p>  
          <p className="text-sm text-neutral-400">Vol. 01 — 2026</p>  
        </div>  
      </header>

      {/* Staggered Exhibition Grid */}  
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-32 gap-x-12">  
        {SANCTUARIES_DATA.map((item, index) => (  
          <Link   
            key={item.id}   
            href={`/archive/${item.id}`}  
            className={`group relative md:col-span-6 ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-40'}`}  
          >  
            <div className="overflow-hidden bg-neutral-100 aspect-[4/5] relative mb-6">  
              <Image  
                src={item.heroImage}  
                alt={item.name}  
                fill  
                className="object-cover transition-transform duration-1000 group-hover:scale-105"  
              />  
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />  
            </div>  
              
            <div className="flex justify-between items-start">  
              <div>  
                <h2 className="text-3xl font-light tracking-tight group-hover:italic transition-all">  
                  {item.name}  
                </h2>  
                <p className="text-xs uppercase tracking-widest text-neutral-500 mt-2">  
                  {item.loc} • {item.tag}  
                </p>  
              </div>  
              <span className="text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">  
                [{item.id}]  
              </span>  
            </div>  
          </Link>  
        ))}  
      </div>

      <footer className="mt-64 text-center border-t border-neutral-100 pt-20">  
        <p className="text-[8vw] font-serif italic text-neutral-200">NexVoyage</p>  
      </footer>  
    </main>  
  );  
}  
