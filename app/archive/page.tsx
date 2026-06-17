// app/archive/page.tsx

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
        
      {/* Editorial Header */}  
      <section className="relative pt-48 pb-32 px-6 !bg-transparent">  
        <div className="max-w-7xl mx-auto !bg-transparent">  
          <div className="flex flex-col items-start !bg-transparent">  
            <span className="text-[#d4af37] text-xs font-mono tracking-[0.6em] uppercase mb-8 !bg-transparent">  
              Registry of Significance  
            </span>  
            <h1 className="text-8xl md:text-[12rem] font-serif text-white tracking-tighter leading-[0.8] mb-12 !bg-transparent uppercase">  
              The <br />  
              <span className="italic ml-12 md:ml-24 text-[#d4af37]">Archive</span>  
            </h1>  
            <div className="w-full h-[1px] bg-[#d4af37]/20 mb-12" />  
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl font-serif italic !bg-transparent">  
              A curated selection of the world’s most significant escapes, deconstructed for the discerning traveler.  
            </p>  
          </div>  
        </div>  
      </section>

      {/* Journal-Style List (Editorial Flow) */}  
      <section className="pb-40 px-6 !bg-transparent">  
        <div className="max-w-7xl mx-auto !bg-transparent space-y-32">  
          {SANCTUARIES_DATA.map((collection, index) => (  
            <Link   
              href={`/archive/${collection.id}`}   
              key={collection.id}  
              className="group flex flex-col md:flex-row items-center gap-12 md:gap-24 !bg-transparent border-none"  
            >  
              {/* Image Side - Editorial Framing */}  
              <div className="w-full md:w-1/2 relative aspect-[3/4] overflow-hidden !bg-[#111]">  
                <Image   
                  src={collection.image}   
                  alt={collection.name}  
                  fill  
                  sizes="(max-width: 768px) 100vw, 50vw"  
                  className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-1000 ease-out"  
                />  
                {/* Thin Brass Border Frame */}  
                <div className="absolute inset-0 border border-[#d4af37]/10 group-hover:border-[#d4af37]/40 transition-colors duration-700 m-6 pointer-events-none" />  
              </div>

              {/* Text Side - Journal Typography */}  
              <div className="w-full md:w-1/2 !bg-transparent">  
                <span className="text-xs font-mono text-[#d4af37] tracking-[0.4em] mb-4 block !bg-transparent">  
                  COLLECTION No. 0{index + 1}  
                </span>  
                <h2 className="text-6xl md:text-8xl font-serif text-white uppercase tracking-tight mb-8 group-hover:italic transition-all duration-500 !bg-transparent">  
                  {collection.name}  
                </h2>  
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md !bg-transparent">  
                  {collection.description}  
                </p>  
                <div className="flex items-center gap-6 !bg-transparent">  
                  <span className="text-[#d4af37] text-xs font-mono tracking-widest !bg-transparent">VIEW PORTFOLIO</span>  
                  <div className="h-[1px] w-12 bg-[#d4af37]/40 group-hover:w-24 transition-all duration-700" />  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Minimalistic Journal Footer */}  
      <footer className="py-24 px-6 border-t border-white/5 !bg-[#0A0A0A]">  
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 !bg-transparent">  
          <div className="!bg-transparent text-center md:text-left">  
            <h3 className="text-2xl font-serif text-white italic mb-2 !bg-transparent">NexVoyage Collective</h3>  
            <p className="text-[10px] font-mono text-gray-600 tracking-[0.5em] uppercase !bg-transparent">  
              Defining the frontier of luxury.  
            </p>  
          </div>  
            
          <div className="flex gap-16 font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em] !bg-transparent">  
            <Link href="/" className="hover:text-[#d4af37] transition-colors !bg-transparent">Intelligence</Link>  
            <Link href="/archive" className="hover:text-[#d4af37] transition-colors !bg-transparent">Archive</Link>  
            <Link href="/about" className="hover:text-[#d4af37] transition-colors !bg-transparent">Philosophy</Link>  
          </div>  
        </div>  
      </footer>  
    </main>  
  );  
}  
