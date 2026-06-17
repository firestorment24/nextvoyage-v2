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
  <main className={`min-h-screen bg-[#0A0A0A] text-[#E5E5E5] ${cormorant.variable} ${inter.variable} font-sans selection:bg-[#d4af37] selection:text-black`}>  
      
    {/* Refined Header - No background boxes */}  
    <section className="relative pt-48 pb-32 px-6 bg-transparent">  
      <div className="max-w-5xl mx-auto text-center bg-transparent">  
        <span className="text-[#d4af37] text-xs font-mono tracking-[0.5em] uppercase mb-6 block bg-transparent">  
          Curated Portfolios  
        </span>  
        <h1 className="text-7xl md:text-8xl font-serif text-white tracking-tight leading-tight mb-10 bg-transparent">  
          The <span className="italic">Collection</span>  
        </h1>  
        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto font-serif italic bg-transparent">  
          A definitive selection of the world’s most significant escapes,   
          curated for those who seek the intersection of soul and luxury.  
        </p>  
      </div>  
    </section>

    {/* Collection Grid - Visual First, Explicitly Transparent */}  
    <section className="pb-40 px-6 bg-transparent">  
      <div className="max-w-7xl mx-auto bg-transparent">  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-transparent">  
          {SANCTUARIES_DATA.map((collection) => (  
            <Link   
              href={`/archive/${collection.id}`}   
              key={collection.id}  
              className="group block relative overflow-hidden bg-transparent border-none outline-none"  
            >  
              {/* Image Container - Using dark background to prevent white flickering */}  
              <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-[#111]">  
                <Image   
                  src={collection.image}   
                  alt={collection.name}  
                  fill  
                  sizes="(max-width: 768px) 100vw, 33vw"  
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"  
                />  
                  
                {/* Brass Border Overlay - Transparent background */}  
                <div className="absolute inset-0 border border-transparent group-hover:border-[#d4af37]/30 transition-colors duration-700 m-4 pointer-events-none" />  
                  
                {/* Vignette */}  
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />  
              </div>

              {/* Collection Details - Force Transparent */}  
              <div className="text-center px-4 bg-transparent">  
                <h2 className="text-3xl md:text-4xl font-serif text-white uppercase tracking-widest mb-3 transition-colors duration-500 group-hover:text-[#d4af37] bg-transparent">  
                  {collection.name}  
                </h2>  
                <div className="w-8 h-[1px] bg-[#d4af37]/40 mx-auto mb-4 group-hover:w-16 transition-all duration-700" />  
                <p className="text-xs text-gray-500 font-mono tracking-[0.2em] uppercase bg-transparent">  
                  Explore Portfolio  
                </p>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </div>  
    </section>

    {/* Elegant Footer Detail */}  
    <footer className="py-20 px-6 border-t border-white/5 bg-[#0A0A0A]">  
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono text-gray-600 uppercase tracking-[0.4em] bg-transparent">  
        <div className="flex items-center gap-4 bg-transparent">  
          <span className="text-[#d4af37]">●</span>  
          <span>Global Concierge Active</span>  
        </div>  
        <span className="bg-transparent">NexVoyage Collective // Established 2026</span>  
        <div className="flex gap-8 bg-transparent">  
          <Link href="/" className="hover:text-white transition-colors bg-transparent">Home</Link>  
          <Link href="/about" className="hover:text-white transition-colors bg-transparent">Philosophy</Link>  
        </div>  
      </div>  
    </footer>  
  </main>  
);  
}  
