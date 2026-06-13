import React from 'react';  
import Link from 'next/link';  
import Image from 'next/image';  
import { notFound } from 'next/navigation';  
import { PROPERTY_DATA, SANCTUARIES_DATA } from '@/lib/data/sanctuaries';  
import { Cormorant_Garamond, Inter } from 'next/font/google';

const cormorant = Cormorant_Garamond({   
  subsets: ['latin'],   
  weight: ['300', '400', '600'],  
  variable: '--font-cormorant'   
});

const inter = Inter({   
  subsets: ['latin'],  
  variable: '--font-inter'  
});

// Renamed to avoid collision with the library's Property type  
interface DossierProperty {  
  id: string;  
  serial: string;  
  name: string;  
  sanctuaryId: string;  
  location: string;  
  image: string;  
  highlight: string;  
  description: string;  
  specs?: { label: string; value: string }[];  
}

export default async function PropertyDossierPage({   
  params   
}: {   
  params: Promise<{ id: string; propertyId: string }>   
}) {  
  const { id, propertyId } = await params;

  const sanctuary = SANCTUARIES_DATA.find(s => s.id === id);  
    
  // Using 'as unknown as DossierProperty' to bypass the type overlap error  
  const property = PROPERTY_DATA.find(p => p.id === propertyId) as unknown as DossierProperty;

  if (!property || !sanctuary) return notFound();

  return (  
    <main className={`min-h-screen bg-[#0A0A0A] text-[#E5E5E5] ${cormorant.variable} ${inter.variable} font-sans selection:bg-[#D4AF37]/30`}>  
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-12">  
        <nav className="flex items-center space-x-4 text-xs tracking-widest uppercase mb-12 opacity-60">  
          <Link href="/archive" className="hover:text-[#D4AF37] transition-colors">Archive</Link>  
          <span>/</span>  
          <Link href={`/archive/${id}`} className="hover:text-[#D4AF37] transition-colors">{sanctuary.name}</Link>  
          <span>/</span>  
          <span className="text-[#D4AF37]">{property.serial}</span>  
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">  
          <div className="lg:col-span-7">  
            <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/10">  
              <Image  
                src={property.image}  
                alt={property.name}  
                fill  
                className="object-cover"  
                priority  
              />  
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />  
            </div>  
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">  
            <div className="mb-8">  
              <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase block mb-4">  
                Property Dossier: {property.serial}  
              </span>  
              <h1 className="text-5xl lg:text-7xl font-serif text-white mb-6 leading-tight">  
                {property.name}  
              </h1>  
              <p className="text-[#D4AF37] font-serif italic text-xl mb-8">  
                {property.location}  
              </p>  
            </div>

            <div className="space-y-8 border-t border-white/10 pt-8">  
              <p className="text-lg leading-relaxed opacity-80 font-light">  
                {property.description}  
              </p>

              {property.specs && (  
                <div className="grid grid-cols-2 gap-6 py-8 border-y border-white/5">  
                  {property.specs.map((spec, i) => (  
                    <div key={i}>  
                      <span className="block text-[10px] uppercase tracking-widest opacity-40 mb-1">{spec.label}</span>  
                      <span className="block text-sm text-white/90">{spec.value}</span>  
                    </div>  
                  ))}  
                </div>  
              )}

              <div className="pt-4">  
                <button className="px-8 py-4 border border-[#D4AF37]/50 text-[#D4AF37] text-xs tracking-widest uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-500">  
                  Request Intelligence  
                </button>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </main>  
  );  
}  
