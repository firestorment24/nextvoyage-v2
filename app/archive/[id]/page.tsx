import React from 'react';  
import { notFound } from 'next/navigation';  
import Navigation from '@/components/Navigation';

const ARCHIVE_DATA: Record<string, any> = {  
  'pelorus-yachting': {  
    title: 'Pelorus Yachting',  
    archetype: 'The Fleet',  
    location: 'Global Expeditions',  
    image: 'https://cdn.marblism.com/3ZzEY41j2NO.webp',  
    description: 'Bespoke maritime expeditions designed for the modern explorer. A fusion of tactical precision and unparalleled luxury, charting waters where others do not follow.',  
    specs: ['Range: Global', 'Vessel Type: Expedition', 'Capacity: 12-36 Guests', 'Service: 1:1 Crew Ratio']  
  },  
  'ritz-carlton-yacht': {  
    title: 'Ritz-Carlton Yacht',  
    archetype: 'The Fleet',  
    location: 'Mediterranean / Caribbean',  
    image: 'https://cdn.marblism.com/ZYrILXL2xND.webp',  
    description: 'A transformative journey at sea. Combining the legendary service of The Ritz-Carlton with the freedom of a yachting vacation. An intimate atmosphere for the discerning.',  
    specs: ['Atmosphere: Yacht-Style', 'Dining: Michelin-Inspired', 'Shore Collection: Curated', 'Suites: All Terrace']  
  },  
  'greenland-solar-eclipse': {  
    title: 'Solar Eclipse 2026',  
    archetype: 'The Zenith',  
    location: 'Greenland / Arctic Circle',  
    image: 'https://cdn.marblism.com/f-crcv_KK4e.webp',  
    description: 'A celestial event viewed from the raw, silent beauty of the Arctic. A momentary alignment of the cosmos experienced in absolute luxury.',  
    specs: ['Event Date: August 2026', 'Access: Charter Only', 'Setting: Arctic Tundra', 'Exclusivity: Ultra-Rare']  
  },  
  'graylyn-estate': {  
    title: 'The Graylyn Estate',  
    archetype: 'The Estate',  
    location: 'Winston-Salem, NC',  
    image: 'https://cdn.marblism.com/7X1OAaaf6fJ.webp',  
    description: 'Historic elegance meets refined comfort. A sprawling sanctuary of limestone and legend, offering a retreat from the velocity of modern life.',  
    specs: ['Architecture: Norman Revival', 'Land: 55 Private Acres', 'Service: Manor Style', 'Legacy: 1932']  
  },  
  'sensi-azores': {  
    title: 'Sensi Azores',  
    archetype: 'The Sanctuary',  
    location: 'São Miguel, Portugal',  
    image: 'https://cdn.marblism.com/QmkI2-MTxpm.webp',  
    description: 'Nature and spa integrated into the volcanic soul of the Azores. A minimalist sanctuary designed to restore the senses through silence and sea air.',  
    specs: ['Focus: Wellness', 'Design: Nature-Integrated', 'Setting: Volcanic Coast', 'Pace: Slow Living']  
  },  
  'rocco-forte-edinburgh': {  
    title: 'Rocco Forte Edinburgh',  
    archetype: 'The Global Gridiron',  
    location: 'Edinburgh, Scotland',  
    image: 'https://cdn.marblism.com/jt2E8oYdxMY.webp',  
    description: 'A landmark of Scottish hospitality at the intersection of history and modern luxury. Timeless service in the heart of the Old Town.',  
    specs: ['Status: Parity Pending', 'Style: Classic Scottish', 'Amenities: Award-Winning Spa', 'View: Castle View']  
  }  
};

export default function ArchiveDetail({ params }: { params: { id: string } }) {  
  const item = ARCHIVE_DATA[params.id];

  if (!item) notFound();

  return (  
    <>  
      <Navigation />  
      <main className="min-h-screen bg-[#0F0F0F] text-[#E5E5E5] flex flex-col lg:flex-row">  
          
        {/* Visual Content (Sticky on Desktop) */}  
        <section className="lg:w-1/2 h-[60vh] lg:h-screen sticky top-0 overflow-hidden">  
          <img   
            src={item.image}   
            alt={item.title}   
            className="h-full w-full object-cover grayscale-[0.2] brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-[2000ms] ease-out"  
          />  
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F0F0F]/40 hidden lg:block" />  
        </section>

        {/* Narrative Content */}  
        <section className="lg:w-1/2 px-8 py-24 md:px-20 md:py-40 flex flex-col justify-center space-y-16">  
          <div className="space-y-6">  
            <p className="font-mono text-[10px] uppercase tracking-[0.6em] text-[#B5A48B]">  
              Archive {item.archetype} &mdash; 0{Object.keys(ARCHIVE_DATA).indexOf(params.id) + 1}  
            </p>  
            <h1 className="serif text-5xl md:text-7xl font-light tracking-tight leading-tight">  
              {item.title}  
            </h1>  
            <p className="text-[10px] text-stone-600 uppercase tracking-widest italic">  
              {item.location}  
            </p>  
          </div>

          <div className="max-w-md">  
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-6">The Narrative</h2>  
            <p className="text-lg font-light text-stone-400 leading-relaxed serif italic">  
              &ldquo;{item.description}&rdquo;  
            </p>  
          </div>

          {/* Technical Specs / Brass Accents */}  
          <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-12 border-y border-white/5 max-w-xl">  
            {item.specs.map((spec: string) => (  
              <div key={spec} className="space-y-2">  
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#B5A48B]/60">Detail</p>  
                <p className="text-sm font-light text-stone-300 uppercase tracking-widest">{spec}</p>  
              </div>  
            ))}  
          </div>

          <div className="pt-10">  
            <a   
              href="/inquiry"   
              className="group relative inline-block px-12 py-5 border border-[#B5A48B]/30 hover:border-[#B5A48B] transition-all duration-700"  
            >  
              <span className="relative z-10 text-[10px] uppercase tracking-[0.5em] text-[#B5A48B] group-hover:text-[#0F0F0F] transition-colors">  
                Inquire for Perspective  
              </span>  
              <div className="absolute inset-0 bg-[#B5A48B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />  
            </a>  
          </div>  
        </section>

      </main>  
    </>  
  );  
}  
