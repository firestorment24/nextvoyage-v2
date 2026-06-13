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
        <header className="relative pt-48 pb-20 px-8 md:px-20">  
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">  
            <div className="space-y-4">  
              <p className="font-mono text-[10px] uppercase tracking-[0.7em] text-[#B5A48B]">  
                Portfolio Index  
              </p>  
              <h1 className="serif text-5xl md:text-8xl font-light tracking-tight leading-none">  
                The Archive <span className="text-stone-800">/</span> <span className="italic text-stone-400">2026</span>  
              </h1>  
            </div>  
          </div>  
        </header>

        {/* Gallery Grid */}  
        <section className="px-8 md:px-20 py-24 max-w-7xl mx-auto">  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32">  
            {ARCHIVE_ITEMS.map((item) => (  
              <a   
                key={item.id}   
                href={`/archive/${item.id}`}   
                className="group block space-y-8"  
              >  
                {/* Image Container */}  
                <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">  
                  <img   
                    src={item.image}   
                    alt={item.title}  
                    className="h-full w-full object-cover grayscale brightness-50 transition-all duration-1000 ease-in-out group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-105"  
                  />  
                    
                  {/* Subtle Brass Frame Overlay on Hover */}  
                  <div className="absolute inset-0 border border-[#B5A48B]/0 transition-all duration-700 ease-out group-hover:border-[#B5A48B]/10 group-hover:inset-6" />  
                    
                  {/* View Detail Indicator */}  
                  <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">  
                     <p className="text-[9px] uppercase tracking-[0.4em] text-white">View Details &mdash;</p>  
                  </div>  
                </div>

                {/* Metadata */}  
                <div className="space-y-3 border-l border-white/5 pl-6">  
                  <div className="flex justify-between items-baseline">  
                    <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#B5A48B]">  
                      {item.category}  
                    </p>  
                  </div>  
                  <h3 className="serif text-3xl font-light tracking-tight text-stone-300 group-hover:text-white transition-colors duration-500">  
                    {item.title}  
                  </h3>  
                  <p className="text-[10px] text-stone-600 uppercase tracking-[0.2em] font-light">  
                    {item.location}  
                  </p>  
                </div>  
              </a>  
            ))}  
          </div>  
        </section>

        {/* Footer */}  
        <footer className="py-40 px-8 text-center border-t border-white/5">  
          <div className="h-px w-24 bg-[#B5A48B]/20 mx-auto mb-12" />  
          <a href="/inquiry" className="inline-block text-[10px] uppercase tracking-[0.6em] text-stone-500 hover:text-[#B5A48B] transition-colors">  
            Inquire for Private Access  
          </a>  
        </footer>

      </main>  
    </>  
  );  
}  
