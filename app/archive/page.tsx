import { properties } from '@/data/properties'  
import Image from 'next/image'  
import Link from 'next/link'

import { SANCTUARIES_DATA } from '@/lib/data/sanctuaries';  
import Link from 'next/link';  
import Image from 'next/image';  
import { Cormorant_Garamond, Inter } from 'next/font/google';

const cormorant = Cormorant_Garamond({   
subsets: ['latin'],   
weight: ['300', '400', '500', '600'],  
variable: '--font-cormorant'   
});

const inter = Inter({   
subsets: ['latin'],  
variable: '--font-inter'  
});

export default function ArchiveIndexPage() {  
return (  
  <main className={`min-h-screen !bg-[#0A0A0A] text-[#E5E5E5] ${cormorant.variable} ${inter.variable} font-sans selection:bg-[#d4af37] selection:text-black`}>  
      
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 !bg-transparent">  
      <div className="max-w-7xl mx-auto !bg-transparent">  
        <div className="flex flex-col items-start !bg-transparent">  
          <span className="text-[#d4af37] text-[10px] md:text-xs font-mono tracking-[0.6em] uppercase mb-6 md:mb-8 !bg-transparent">  
export default function ArchivePage() {  
  return (  
    <main className="min-h-screen bg-black text-white">  
      <div className="max-w-7xl mx-auto px-6 py-20">  
        <div className="border-b border-[#C5A059]/30 pb-8 mb-16">  
          <p className="text-[#C5A059]/60 font-inter text-sm tracking-[0.2em] uppercase mb-2">  
            Registry of Significance  
          </span>  
          <h1 className="text-6xl md:text-[12rem] font-serif text-white tracking-tighter leading-[0.8] mb-12 !bg-transparent uppercase">  
            The <br />  
            <span className="italic ml-8 md:ml-24 text-[#d4af37]">Archive</span>  
          </p>  
          <h1 className="font-cormorant text-5xl md:text-7xl text-[#C5A059]">  
            The Archive  
          </h1>  
          <div className="w-full h-[1px] bg-[#d4af37]/20 mb-12" />  
        </div>  
      </div>  
    </section>
        </div>

    <section className="pb-40 px-6 !bg-transparent">  
      <div className="max-w-7xl mx-auto !bg-transparent space-y-24 md:space-y-48">  
        {SANCTUARIES_DATA.map((collection, index) => (  
          <Link   
            href={`/archive/${collection.id}`}   
            key={collection.id}  
            className="group flex flex-col md:flex-row items-center gap-10 md:gap-24 !bg-transparent border-none"  
          >  
            <div className="w-full md:w-1/2 relative aspect-[4/5] md:aspect-[3/4] overflow-hidden !bg-[#111]">  
              <Image   
                src={collection.image}   
                alt={collection.name}  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {properties.map((property) => (  
            <Link  
              key={property.id}  
              href={`/archive/property/${property.id}`}  
              className="group relative aspect-[4/5] bg-[#0A0A0A] overflow-hidden border border-white/5 rounded-sm transition-all duration-500 hover:border-[#C5A059]/50"  
            >  
              <Image  
                src={property.image}  
                alt={property.name}  
                fill  
                sizes="(max-width: 768px) 100vw, 50vw"  
                className="object-cover grayscale-0 group-hover:grayscale transition-all duration-1000 ease-out"  
                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"  
              />  
              <div className="absolute inset-0 border border-[#d4af37]/10 group-hover:border-[#d4af37]/40 transition-colors duration-700 m-4 md:m-6 pointer-events-none" />  
            </div>

            <div className="w-full md:w-1/2 !bg-transparent text-left">  
              <span className="text-[10px] font-mono text-[#d4af37] tracking-[0.4em] mb-4 block !bg-transparent">  
                COLLECTION No. 0{index + 1}  
              </span>  
              <h2 className="text-5xl md:text-8xl font-serif text-white uppercase tracking-tight mb-6 md:mb-8 group-hover:italic transition-all duration-500 !bg-transparent">  
                {collection.name}  
              </h2>  
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-md !bg-transparent font-serif italic">  
                {collection.description}  
              </p>  
              <div className="flex items-center gap-6 !bg-transparent">  
                <span className="text-[#d4af37] text-[10px] font-mono tracking-widest !bg-transparent">EXPLORE</span>  
                <div className="h-[1px] w-12 bg-[#d4af37]/40 group-hover:w-24 transition-all duration-700" />  
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />  
              <div className="absolute bottom-0 left-0 right-0 p-6">  
                <p className="text-[#C5A059]/70 font-inter text-xs tracking-[0.2em] uppercase mb-1">  
                  {property.collection}  
                </p>  
                <h2 className="font-cormorant text-2xl text-white mb-1">  
                  {property.name}  
                </h2>  
                <p className="font-inter text-sm text-white/60">  
                  {property.location}  
                </p>  
                <p className="font-inter text-xs text-white/40 mt-3 line-clamp-2">  
                  {property.description}  
                </p>  
              </div>  
            </div>  
          </Link>  
        ))}  
            </Link>  
          ))}  
        </div>  
      </div>  
    </section>  
  </main>  
);  
    </main>  
  )  
}  
