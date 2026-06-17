// app/archive/[id]/page.tsx

import { SANCTUARIES_DATA, PROPERTY_DATA } from '@/lib/data/sanctuaries';  
import { notFound } from 'next/navigation';  
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

export default async function ArchiveCollectionPage({ params }: { params: { id: string } }) {  
  const { id } = params;

  // Find the specific collection/dossier  
  const sanctuary = SANCTUARIES_DATA.find(s => s.id === id);  
  if (!sanctuary) return notFound();

  // Filter properties belonging to this collection  
  const properties = PROPERTY_DATA.filter(p => p.sanctuaryId === id);

  return (  
    <main className={`min-h-screen bg-[#0A0A0A] text-[#E5E5E5] ${cormorant.variable} ${inter.variable} font-sans selection:bg-[#d4af37] selection:text-black`}>  
      {/* Dossier Header */}  
      <section className="relative pt-48 pb-24 px-6 border-b border-[#d4af37]/10 overflow-hidden">  
        <div className="absolute top-0 right-0 p-8 opacity-10">  
          <span className="text-[12rem] font-serif leading-none select-none">  
            {sanctuary.id.toUpperCase()}  
          </span>  
        </div>  
          
        <div className="max-w-7xl mx-auto relative z-10">  
          <div className="flex items-center gap-4 mb-8">  
            <Link href="/archive" className="text-[#d4af37] hover:text-white transition-colors text-xs font-mono tracking-widest flex items-center gap-2">  
              <span>←</span> BACK TO REGISTRY  
            </Link>  
            <div className="h-[1px] w-12 bg-[#d4af37]/30" />  
            <span className="text-gray-500 text-xs font-mono tracking-tighter">REF: {sanctuary.id.toUpperCase()}-MASTER-DOSSIER</span>  
          </div>

          <h1 className="text-7xl md:text-9xl font-serif mb-10 text-white uppercase tracking-tighter leading-none">  
            {sanctuary.name}  
          </h1>  
            
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">  
            <div className="md:col-span-7">  
              <p className="text-2xl md:text-3xl text-gray-400 leading-relaxed font-light font-serif italic">  
                {sanctuary.description}  
              </p>  
            </div>  
            <div className="md:col-span-5 flex flex-col justify-end">  
              <div className="border-l border-[#d4af37]/30 pl-8 py-2">  
                <span className="text-[#d4af37] text-xs font-mono block mb-2 uppercase tracking-widest">Classification</span>  
                <span className="text-white text-lg font-serif uppercase tracking-widest italic">Confidential High-Net-Worth Intel</span>  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Property Registry Grid */}  
      <section className="py-32 px-6">  
        <div className="max-w-7xl mx-auto">  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">  
            {properties.map((property, index) => (  
              <Link   
                href={`/properties/${property.id}`}   
                key={property.id}   
                className="group block"  
              >  
                <div className="relative aspect-[16/10] overflow-hidden border border-white/5">  
                  {/* Fixed property.images[0] here */}  
                  <Image   
                    src={property.images[0]}   
                    alt={property.name}  
                    fill  
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"  
                  />  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />  
                    
                  {/* Index Number Overlay */}  
                  <div className="absolute top-6 left-6 mix-blend-difference">  
                    <span className="text-white/40 font-mono text-sm tracking-tighter">  
                      [{String(index + 1).padStart(2, '0')}]  
                    </span>  
                  </div>  
                </div>

                <div className="mt-10 flex justify-between items-start">  
                  <div>  
                    <h3 className="text-4xl font-serif text-white uppercase tracking-tight mb-2 group-hover:text-[#d4af37] transition-colors duration-500">  
                      {property.name}  
                    </h3>  
                    <div className="flex items-center gap-3">  
                      <span className="text-[#d4af37] text-xs font-mono uppercase tracking-[0.2em]">  
                        {property.location}  
                      </span>  
                      <span className="w-1 h-1 bg-white/20 rounded-full" />  
                      <span className="text-gray-500 text-xs font-mono uppercase">  
                        {property.intel?.category || 'Field Asset'}  
                      </span>  
                    </div>  
                  </div>  
                    
                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">  
                    <div className="w-10 h-10 rounded-full border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37]">  
                      →  
                    </div>  
                  </div>  
                </div>  
              </Link>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* Footer Intel Decoration */}  
      <section className="py-20 px-6 border-t border-[#d4af37]/5 bg-[#0D0D0D]">  
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-30 grayscale font-mono text-[10px] uppercase tracking-[0.3em]">  
          <span>© NEXTVOYAGE COLLECTIVE</span>  
          <div className="flex gap-12">  
            <span>Lat: 38.8951° N</span>  
            <span>Long: 77.0364° W</span>  
          </div>  
          <span>END OF REPORT</span>  
        </div>  
      </section>  
    </main>  
  );  
}  
