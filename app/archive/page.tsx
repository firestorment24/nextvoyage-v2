import React from 'react';  
import Navigation from '@/components/Navigation';

const ARCHIVE_ITEMS = [  
  {  
    id: 'pelorus-yachting',  
    title: 'Pelorus Yachting',  
    category: 'The Fleet',  
    image: 'https://cdn.marblism.com/3ZzEY41j2NO.webp',  
    location: 'Global Expeditions'  
  },  
  {  
    id: 'ritz-carlton-yacht',  
    title: 'Ritz-Carlton Yacht',  
    category: 'The Fleet',  
    image: 'https://cdn.marblism.com/ZYrILXL2xND.webp',  
    location: 'Mediterranean'  
  },  
  {  
    id: 'greenland-solar-eclipse',  
    title: 'Solar Eclipse',  
    category: 'The Zenith',  
    image: 'https://cdn.marblism.com/f-crcv_KK4e.webp',  
    location: 'Arctic Circle'  
  },  
  {  
    id: 'graylyn-estate',  
    title: 'Graylyn Estate',  
    category: 'The Estate',  
    image: 'https://cdn.marblism.com/7X1OAaaf6fJ.webp',  
    location: 'Winston-Salem, NC'  
  },  
  {  
    id: 'sensi-azores',  
    title: 'Sensi Azores',  
    category: 'The Sanctuary',  
    image: 'https://cdn.marblism.com/QmkI2-MTxpm.webp',  
    location: 'Portugal'  
  },  
  {  
    id: 'rocco-forte-edinburgh',  
    title: 'Rocco Forte',  
    category: 'The Global Gridiron',  
    image: 'https://cdn.marblism.com/jt2E8oYdxMY.webp',  
    location: 'Scotland'  
  }  
];

export default function ArchivePage() {  
  return (  
    <>  
      <Navigation />  
      <main className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] selection:bg-[#B5A48B] selection:text-[#0F0F0F]">  
          
        {/* Header Section */}  
        <header className="relative pt-40 pb-20 px-8 md:px-20 border-b border-white/5">  
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">  
            <div className="space-y-4">  
              <p className="font-mono text-[10px] uppercase tracking-[0.6em] text-[#B5A48B]">  
                Portfolio Index  
              </p>  
              <h1 className="serif text-5xl md:text-7xl font-light tracking-tight">  
                The Archive <span className="text-stone-600">/</span> <span className="italic">Q2 2026</span>  
              </h1>  
            </div>  
            <p className="max-w-xs text-xs uppercase tracking-[0.2em] text-stone-500 leading-relaxed font-light">  
              A curated selection of terrestrial sanctuaries and maritime escapes, categorized by architectural archetype.  
            </p>  
          </div>  
        </header>

        {/* Gallery Grid */}  
        <section className="px-8 md:px-20 py-24 max-w-7xl mx-auto">  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">  
            {ARCHIVE_ITEMS.map((item) => (  
              <a   
                key={item.id}   
                href={`/archive/${item.id}`}   
                className="group block space-y-6"  
              >  
                {/* Image Container with Brass Border Effect */}  
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-900">  
                  <img   
                    src={item.image}   
                    alt={item.title}  
                    className="h-full w-full object-cover grayscale-[0.3] brightness-75 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-90"  
                  />  
                  {/* Subtle Brass Frame on Hover */}  
                  <div className="absolute inset-0 border border-[#B5A48B]/0 transition-all duration-500 group-hover:border-[#B5A48B]/20 group-hover:inset-4" />  
                </div>

                {/* Metadata */}  
                <div className="space-y-2">  
                  <div className="flex justify-between items-baseline">  
                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#B5A48B]">  
                      {item.category}  
                    </p>  
                    <p className="text-[10px] text-stone-600 uppercase tracking-widest">  
                      {item.location}  
                    </p>  
                  </div>  
                  <h3 className="serif text-2xl font-light tracking-tight group-hover:text-[#B5A48B] transition-colors duration-300">  
                    {item.title}  
                  </h3>  
                </div>  
              </a>  
            ))}  
          </div>  
        </section>

        {/* Footer CTA */}  
        <section className="py-40 px-8 border-t border-white/5 text-center">  
          <div className="space-y-8">  
            <p className="text-stone-500 text-sm font-light italic serif tracking-wide">  
              &ldquo;True exclusivity is found in the detail.&rdquo;  
            </p>  
            <div className="h-px w-12 bg-[#B5A48B]/30 mx-auto" />  
            <a href="/inquiry" className="inline-block text-[10px] uppercase tracking-[0.5em] text-[#B5A48B] hover:text-white transition-colors">  
              Request Full Portfolio Access  
            </a>  
          </div>  
        </section>

      </main>  
    </>  
  );  
}  
