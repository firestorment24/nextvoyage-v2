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
        
      {/* Registry Header */}  
      <section className="relative pt-40 pb-20 px-6 border-b border-[#d4af37]/10">  
        <div className="max-w-7xl mx-auto">  
          <div className="flex items-center gap-4 mb-6">  
            <div className="h-[1px] w-12 bg-[#d4af37]" />  
            <span className="text-[#d4af37] text-xs font-mono tracking-[0.4em] uppercase">Global Asset Registry</span>  
          </div>  
            
          <h1 className="text-7xl md:text-9xl font-serif text-white uppercase tracking-tighter leading-none mb-12">  
            The <span className="italic text-[#d4af37]">Archive</span>  
          </h1>  
            
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">  
            <div className="md:col-span-8">  
              <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl">  
                A consolidated intelligence manifest of the world’s most significant properties.   
                Deconstructed by terrain, intent, and architectural significance.   
                For the eyes of the Vanguard only.  
              </p>  
            </div>  
            <div className="md:col-span-4 flex md:justify-end items-end">  
              <div className="text-right font-mono text-[10px] text-gray-600 uppercase tracking-widest leading-loose">  
                Status: Operational<br />  
                Last Update: 17-JUN-2026<br />  
                Security: Level 5  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Dossier Grid */}  
      <section className="py-24 px-6">  
        <div className="max-w-7xl mx-auto">  
          <div className="grid grid-cols-1 gap-1">  
            {SANCTUARIES_DATA.map((dossier, index) => (  
              <Link   
                href={`/archive/${dossier.id}`}   
                key={dossier.id}  
                className="group relative block border-b border-white/5 py-16 hover:bg-white/[0.02] transition-colors duration-700"  
              >  
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12 relative z-10">  
                    
                  {/* Index */}  
                  <div className="md:col-span-1">  
                    <span className="text-xs font-mono text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors duration-500">  
                      [0{index + 1}]  
                    </span>  
                  </div>

                  {/* Identity */}  
                  <div className="md:col-span-5">  
                    <h2 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-700">  
                      {dossier.name}  
                    </h2>  
                  </div>

                  {/* Summary */}  
                  <div className="md:col-span-4">  
                    <p className="text-sm text-gray-500 font-mono uppercase tracking-widest leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">  
                      {dossier.description.split('.')[0]}.  
                    </p>  
                  </div>

                  {/* CTA */}  
                  <div className="md:col-span-2 text-right">  
                    <span className="text-[#d4af37] text-xs font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">  
                      OPEN DOSSIER →  
                    </span>  
                  </div>  
                </div>

                {/* Hover Image Preview (Floating effect) */}  
                <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-64 h-80 pointer-events-none opacity-0 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000 ease-out z-0 overflow-hidden hidden lg:block border border-[#d4af37]/20">  
                  <Image   
                    src={dossier.image}   
                    alt={dossier.name}  
                    fill  
                    className="object-cover grayscale"  
                  />  
                  <div className="absolute inset-0 bg-[#0A0A0A]/40" />  
                </div>  
              </Link>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* Registry Footer Decorations */}  
      <section className="py-20 px-6 border-t border-[#d4af37]/5">  
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">  
          <div className="space-y-4">  
            <div className="flex gap-2">  
              {[...Array(5)].map((_, i) => (  
                <div key={i} className="w-8 h-[2px] bg-[#d4af37]/20" />  
              ))}  
            </div>  
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em]">  
              NexVoyage Collective // Internal Asset Retrieval  
            </p>  
          </div>  
            
          <div className="text-right">  
            <span className="text-xs font-mono text-gray-500 uppercase tracking-tighter block mb-2">Authenticated Connection</span>  
            <div className="flex gap-4 justify-end">  
              <div className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse" />  
              <div className="w-2 h-2 rounded-full bg-[#d4af37]/50" />  
              <div className="w-2 h-2 rounded-full bg-white/20" />  
            </div>  
          </div>  
        </div>  
      </section>  
    </main>  
  );  
}  
