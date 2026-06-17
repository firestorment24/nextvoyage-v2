// app/archive/property/[id]/page.tsx

import { PROPERTY_DATA } from '@/lib/data/sanctuaries';  
import { notFound } from 'next/navigation';  
import Link from 'next/link';  
import { Cormorant_Garamond, Inter } from 'next/font/google';

const cormorant = Cormorant_Garamond({   
  subsets: ['latin'],   
  variable: '--font-cormorant'   
});

const inter = Inter({   
  subsets: ['latin'],  
  variable: '--font-inter'  
});

export default async function ArchivePropertyDetail({ params }: { params: { id: string } }) {  
  const { id } = params;  
  const property = PROPERTY_DATA.find(p => p.id === id);

  if (!property) return notFound();

  return (  
    <main className={`min-h-screen bg-[#0A0A0A] text-[#E5E5E5] ${cormorant.variable} ${inter.variable} font-sans`}>  
      {/* Cinematic Hero Section */}  
      <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden border-b border-[#d4af37]/20">  
        {property.images && property.images.length > 0 ? (  
          <img   
            src={property.images[0]}   
            alt={property.name}   
            className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-1000"  
          />  
        ) : (  
          <div className="w-full h-full bg-[#111]" />  
        )}  
          
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />  
          
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">  
          <div className="max-w-7xl mx-auto">  
            <Link   
              href="/archive"   
              className="text-[#d4af37] text-xs font-mono tracking-widest mb-6 block uppercase hover:text-white transition-colors"  
            >  
              ← Return to Archive Registry  
            </Link>  
            <h1 className="text-6xl md:text-8xl font-serif uppercase tracking-tighter text-white mb-4">  
              {property.name}  
            </h1>  
            <p className="text-[#d4af37] text-sm font-mono tracking-[0.3em] uppercase">  
              Location // {property.location}  
            </p>  
          </div>  
        </div>  
      </div>

      {/* Intel Breakdown */}  
      <section className="py-24 px-8">  
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">  
          {/* Dossier Description */}  
          <div className="md:col-span-7">  
            <div className="mb-12">  
              <span className="text-xs font-mono text-gray-500 block mb-4 uppercase tracking-widest">[ FIELD REPORT SUMMARY ]</span>  
              <p className="text-2xl md:text-3xl font-serif text-gray-300 leading-relaxed italic">  
                {property.description}  
              </p>  
            </div>  
          </div>

          {/* Technical Specs / Intel */}  
          <div className="md:col-span-5">  
            <div className="bg-[#111] border border-[#d4af37]/10 p-8 space-y-8">  
              <div>  
                <span className="text-[#d4af37] text-[10px] font-mono uppercase tracking-[0.4em] block mb-2">Classification</span>  
                <p className="text-white font-serif text-xl uppercase tracking-widest">  
                  {property.intel?.category || "Standard Luxury Asset"}  
                </p>  
              </div>

              <div>  
                <span className="text-[#d4af37] text-[10px] font-mono uppercase tracking-[0.4em] block mb-2">Member Intel</span>  
                <ul className="space-y-3">  
                  {property.intel?.memberBenefits.map((benefit, i) => (  
                    <li key={i} className="text-gray-400 text-sm font-mono uppercase flex items-start gap-3">  
                      <span className="text-[#d4af37]">•</span>  
                      {benefit}  
                    </li>  
                  ))}  
                </ul>  
              </div>

              <div className="pt-8 border-t border-white/5">  
                <span className="text-gray-600 text-[9px] font-mono uppercase tracking-tighter">  
                  RECORD ID: NV-{property.id.toUpperCase()}-026  
                </span>  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* End of Report footer */}  
      <div className="py-12 border-t border-white/5 text-center opacity-20">  
        <span className="text-[10px] font-mono tracking-[1em] uppercase">End of Dossier</span>  
      </div>  
    </main>  
  );  
}  
