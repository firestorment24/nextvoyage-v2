// app/archive/page.tsx  
import React from 'react';  
import Link from 'next/link';  
import { PROPERTY_DATA } from '@/lib/data/sanctuaries';  
import { getPropertyImages } from '@/lib/data/property-images';

interface ArchiveProperty {  
  id: string;  
  name: string;  
  location: string;  
  image: string;  
  images?: string[];  
  intel?: {  
    category?: string;  
    positioning?: string;  
    memberBenefits?: string;  
  };  
  collection?: string;  
  description?: string;  
  highlight?: string;  
  exclusiveOffer?: string;  
}

const properties = PROPERTY_DATA as ArchiveProperty[];

export default function ArchivePage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A]">  
      {/* Hero */}  
      <section className="relative px-6 pt-28 pb-16 md:pt-40 md:pb-24">  
        <div className="max-w-7xl mx-auto">  
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl lg:text-8xl text-white tracking-wide leading-tight">  
            The Archive  
          </h1>  
          <p className="mt-4 text-white/50 font-['Inter'] text-base md:text-lg max-w-xl leading-relaxed">  
            A curated ledger of sanctuaries — each vetted for discretion,  
            access, and atmosphere.  
          </p>  
          <div className="mt-6 text-[#D4AF37]/60 text-xs font-['Inter'] tracking-[0.15em] uppercase">  
            {properties.length} Records &middot; Active  
          </div>  
        </div>  
      </section>

      {/* Property Grid */}  
      <section className="px-6 pb-32">  
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]">  
          {properties.map((property) => {  
            const images = getPropertyImages(property.id);  
            const heroSrc = images?.hero ?? property.images?.[0] ?? property.image;

            return (  
              <Link  
                key={property.id}  
                href={`/archive/property/${property.id}`}  
                className="group relative block bg-[#0A0A0A] overflow-hidden"  
              >  
                {/* Image */}  
                <div className="aspect-[4/5] relative overflow-hidden">  
                  <img  
                    src={heroSrc}  
                    alt={property.name}  
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"  
                  />  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />  
                </div>

                {/* Overlay Content */}  
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">  
                  <span className="text-[#D4AF37]/70 text-[10px] md:text-xs font-['Inter'] tracking-[0.2em] uppercase">  
                    {property.intel?.category || property.collection || 'Property'}  
                  </span>  
                  <h2 className="mt-1.5 text-white text-xl md:text-2xl font-['Cormorant_Garamond'] leading-tight">  
                    {property.name}  
                  </h2>  
                  <p className="text-white/40 text-sm font-['Inter'] mt-1">  
                    {property.location}  
                  </p>  
                  <p className="mt-2 text-white/60 text-xs md:text-sm font-['Inter'] leading-relaxed line-clamp-2">  
                    {property.intel?.positioning || property.description}  
                  </p>  
                </div>

                {/* Hover Brass Border */}  
                <div className="absolute inset-0 border border-transparent group-hover:border-[#D4AF37]/30 transition-colors duration-500 pointer-events-none" />  
              </Link>  
            );  
          })}  
        </div>  
      </section>

      {/* Footer */}  
      <footer className="border-t border-[#1A1A1A] px-6 py-8">  
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">  
          <span className="text-white/20 text-xs font-['Inter'] tracking-widest uppercase">  
            NexVoyage Collective  
          </span>  
          <span className="text-[#D4AF37]/40 text-[10px] font-['Inter'] tracking-[0.15em] uppercase">  
            Global Concierge Active  
          </span>  
          <span className="text-white/20 text-xs font-['Inter']">  
            &copy; {new Date().getFullYear()} &mdash; All Rights Reserved  
          </span>  
        </div>  
      </footer>  
    </main>  
  );  
}  
