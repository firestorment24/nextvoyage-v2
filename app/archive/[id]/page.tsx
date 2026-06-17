// app/archive/[id]/page.tsx

import { SANCTUARIES_DATA, PROPERTY_DATA } from '@/lib/data/sanctuaries';  
import { notFound } from 'next/navigation';  
import Link from 'next/link';  
import Image from 'next/image';  
import { Cormorant_Garamond, Inter } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant' });  
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default async function ArchiveCollectionPage({ params }: { params: { id: string } }) {  
const { id } = params;  
const sanctuary = SANCTUARIES_DATA.find(s => s.id === id);  
if (!sanctuary) return notFound();

const properties = PROPERTY_DATA.filter(p => p.sanctuaryId === id);

return (  
  <main className={`min-h-screen !bg-[#0A0A0A] text-[#E5E5E5] ${cormorant.variable} ${inter.variable} font-sans selection:bg-[#d4af37] selection:text-black`}>  
    {/* Header */}  
    <section className="pt-40 pb-20 px-6 border-b border-[#d4af37]/10 !bg-transparent">  
      <div className="max-w-7xl mx-auto !bg-transparent">  
        <Link href="/archive" className="text-[#d4af37] text-[10px] font-mono tracking-[0.4em] mb-8 block uppercase hover:text-white transition-colors">  
          ← Back to Registry  
        </Link>  
        <h1 className="text-6xl md:text-9xl font-serif text-white uppercase tracking-tighter leading-none mb-6">  
          {sanctuary.name}  
        </h1>  
        <p className="max-w-2xl text-xl text-gray-500 font-serif italic leading-relaxed">  
          {sanctuary.description}  
        </p>  
      </div>  
    </section>

    {/* Property Grid */}  
    <section className="py-24 md:py-40 px-6 !bg-transparent">  
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-40 !bg-transparent">  
        {properties.map((property, index) => (  
          <Link href={`/properties/${property.id}`} key={property.id} className="group block !bg-transparent">  
            <div className="relative aspect-[16/10] overflow-hidden !bg-[#111]">  
              <Image   
                src={property.images[0]}   
                alt={property.name}  
                fill  
                className="object-cover grayscale-0 group-hover:grayscale transition-all duration-1000 ease-out"  
              />  
              <div className="absolute top-6 left-6 mix-blend-difference">  
                <span className="text-white/40 font-mono text-[10px] tracking-tighter">[{String(index + 1).padStart(2, '0')}]</span>  
              </div>  
            </div>  
            <div className="mt-8 !bg-transparent">  
              <h3 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-tight group-hover:text-[#d4af37] transition-colors duration-500">  
                {property.name}  
              </h3>  
              <p className="text-[#d4af37] text-[10px] font-mono uppercase tracking-[0.2em] mt-3">  
                {property.location} // {property.intel?.category}  
              </p>  
            </div>  
          </Link>  
        ))}  
      </div>  
    </section>  
  </main>  
);  
}  
