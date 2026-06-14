import React from 'react';  
import Link from 'next/link';  
import Image from 'next/image';  
import { notFound } from 'next/navigation';  
import { SANCTUARIES_DATA, PROPERTY_DATA } from '@/lib/data/sanctuaries';  
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

export default async function SanctuaryArchivePage({   
  params   
}: {   
  params: Promise<{ id: string }>   
}) {  
  const { id } = await params;  
  const sanctuary = SANCTUARIES_DATA.find(s => s.id === id);  
    
  if (!sanctuary) return notFound();

  // Filter properties belonging to this sanctuary  
  const properties = PROPERTY_DATA.filter(p => p.sanctuaryId === id);

  return (  
    <main className={`min-h-screen bg-[#0A0A0A] text-[#E5E5E5] ${cormorant.variable} ${inter.variable} font-sans selection:bg-[#D4AF37]/30`}>  
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">  
          
        {/* Navigation & Header */}  
        <nav className="flex items-center space-x-4 text-xs tracking-widest uppercase mb-12 opacity-60">  
          <Link href="/archive" className="hover:text-[#D4AF37] transition-colors">Archive</Link>  
          <span>/</span>  
          <span className="text-[#D4AF37]">{sanctuary.name}</span>  
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">  
          <div className="lg:col-span-5 flex flex-col justify-center">  
            <span className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase block mb-6">{sanctuary.tag}</span>  
            <h1 className="text-5xl lg:text-7xl font-serif mb-8 text-white">{sanctuary.name}</h1>  
              
            <div className="space-y-8 border-l border-[#D4AF37]/30 pl-8 py-2">  
              <p className="text-xl font-serif italic text-[#D4AF37]/90 leading-relaxed">  
                "{sanctuary.atmosphere}"  
              </p>  
              <p className="text-sm tracking-widest uppercase opacity-60">  
                {sanctuary.loc}  
              </p>  
            </div>

            <div className="mt-12 flex items-center space-x-8">  
              <button className="px-8 py-4 border border-[#D4AF37]/50 text-[#D4AF37] text-xs tracking-widest uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-500">  
                Inquire with Rachel  
              </button>  
              <div className="text-[10px] tracking-[0.2em] uppercase opacity-40">  
                Status: Intelligence Active  
              </div>  
            </div>  
          </div>

          <div className="lg:col-span-7">  
            <div className="relative aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10 group">  
              <Image  
                src={sanctuary.heroImage}  
                alt={sanctuary.name}  
                fill  
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"  
                priority  
              />  
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent opacity-40" />  
            </div>  
          </div>  
        </div>

        {/* Ledger Highlights */}  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-white/5 py-16 mb-32">  
          {sanctuary.highlights.map((highlight, i) => (  
            <div key={i} className="text-center md:text-left">  
              <span className="text-[#D4AF37] text-[10px] tracking-widest uppercase block mb-2">Protocol 0{i + 1}</span>  
              <p className="text-lg font-serif text-white/90">{highlight}</p>  
            </div>  
          ))}  
        </div>

        {/* Property Grid: The Elite Ledger */}  
        <div className="mb-12 flex justify-between items-end border-b border-white/10 pb-8">  
          <div>  
            <h2 className="text-3xl font-serif text-white mb-2">The Elite Ledger</h2>  
            <p className="text-xs tracking-widest uppercase opacity-40">Property Database for {sanctuary.name}</p>  
          </div>  
          <div className="text-xs tracking-widest uppercase text-[#D4AF37]">  
            {properties.length} Active Records  
          </div>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">  
          {properties.map((property) => (  
            <Link   
              key={property.id}   
              href={`/archive/${id}/${property.id}`}  
              className="group relative aspect-[4/5] overflow-hidden border border-white/5 bg-[#111]"  
            >  
              <Image  
                src={property.image}  
                alt={property.name}  
                fill  
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"  
              />  
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />  
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">  
                <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase block mb-2">{property.serial}</span>  
                <h3 className="text-xl font-serif text-white mb-1">{property.name}</h3>  
                <p className="text-[10px] tracking-widest uppercase opacity-60">{property.location}</p>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </div>  
    </main>  
  );  
}  
