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
      
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 !bg-transparent">  
      <div className="max-w-7xl mx-auto !bg-transparent">  
        <div className="flex flex-col items-start !bg-transparent">  
          <span className="text-[#d4af37] text-[10px] md:text-xs font-mono tracking-[0.6em] uppercase mb-6 md:mb-8 !bg-transparent">  
            Registry of Significance  
          </span>  
          <h1 className="text-6xl md:text-[12rem] font-serif text-white tracking-tighter leading-[0.8] mb-12 !bg-transparent uppercase">  
            The <br />  
            <span className="italic ml-8 md:ml-24 text-[#d4af37]">Archive</span>  
          </h1>  
          <div className="w-full h-[1px] bg-[#d4af37]/20 mb-12" />  
        </div>  
      </div>  
    </section>

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
                fill  
                sizes="(max-width: 768px) 100vw, 50vw"  
                className="object-cover grayscale-0 group-hover:grayscale transition-all duration-1000 ease-out"  
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
              </div>  
            </div>  
          </Link>  
        ))}  
      </div>  
    </section>  
  </main>  
);  
}  
