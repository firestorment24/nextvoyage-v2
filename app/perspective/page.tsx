import React from 'react';  
import Link from 'next/link';

const volumes = [  
  {  
    id: 'vol-01',  
    title: 'The Silent ROI',  
    subtitle: 'The Perspective Manifesto',  
    slug: 'the-silent-roi',  
    image: 'https://cdn.marblism.com/rYQTev1orML.webp',  
    label: 'Vol. 01',  
  },  
  {  
    id: 'vol-02',  
    title: 'The Architecture of Calm',  
    subtitle: 'Our Philosophy',  
    slug: 'the-architecture-of-calm',  
    image: 'https://cdn.marblism.com/VymBul776ZU.webp',  
    label: 'Vol. 02',  
  },  
  {  
    id: 'vol-03',  
    title: 'The Nine Sanctuary Pillars',  
    subtitle: 'The Framework of Seclusion',  
    slug: 'the-nine-pillars',  
    image: 'https://cdn.marblism.com/UH9Ov0JJZZy.webp',  
    label: 'Vol. 03',  
  },  
];

const dispatches = [  
  { title: 'The Quiet Recalibration', category: 'Wellness', slug: 'quiet-recalibration' },  
  { title: 'The Architecture of the Journey', category: 'Itineraries', slug: 'architecture-of-journey' },  
  { title: 'The Logistics of Composure', category: 'Aviation', slug: 'logistics-of-composure' },  
];

export default function PerspectiveHub() {  
  return (  
    <div className="bg-[#050505] min-h-screen text-[#F5F5F5] font-serif selection:bg-[#B8860B] selection:text-black">  
      {/* Header */}  
      <header className="pt-24 pb-12 px-8 md:px-24 border-b border-[#1A1A1A]">  
        <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-4">Perspective</h1>  
        <p className="text-[#B8860B] uppercase tracking-[0.3em] text-sm font-sans font-medium">  
          The Editorial Manifesto Layer  
        </p>  
      </header>

      {/* Featured Volumes */}  
      <main className="px-8 md:px-24 py-24">  
        <div className="grid grid-cols-1 gap-32">  
          {volumes.map((vol) => (  
            <Link key={vol.id} href={`/perspective/${vol.slug}`} className="group block">  
              <div className="flex flex-col md:flex-row gap-12 items-center">  
                <div className="w-full md:w-2/3 overflow-hidden bg-black aspect-[16/9]">  
                  <img  
                    src={vol.image}  
                    alt={vol.title}  
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"  
                  />  
                </div>  
                <div className="w-full md:w-1/3">  
                  <span className="text-[#B8860B] font-sans text-xs tracking-widest uppercase mb-4 block">  
                    {vol.label}  
                  </span>  
                  <h2 className="text-4xl md:text-5xl font-light mb-4 group-hover:translate-x-2 transition-transform duration-500">  
                    {vol.title}  
                  </h2>  
                  <p className="text-[#888] text-lg font-light leading-relaxed italic">  
                    {vol.subtitle}  
                  </p>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>

        {/* Dispatches Section */}  
        <section className="mt-48 pt-24 border-t border-[#1A1A1A]">  
          <h3 className="text-xs uppercase tracking-[0.4em] text-[#B8860B] mb-12">Latest Dispatches</h3>  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  
            {dispatches.map((dispatch) => (  
              <Link key={dispatch.slug} href={`/perspective/${dispatch.slug}`} className="group border-b border-transparent hover:border-[#B8860B] pb-4 transition-all">  
                <span className="text-[#555] font-sans text-[10px] uppercase tracking-widest mb-2 block">  
                  {dispatch.category}  
                </span>  
                <h4 className="text-xl font-light">{dispatch.title}</h4>  
              </Link>  
            ))}  
          </div>  
        </section>  
      </main>  
    </div>  
  );  
}  
