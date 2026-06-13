import React from 'react';  
import { notFound } from 'next/navigation';

// Mock data based on our Q2 Portfolio categorizations  
const archiveData: Record<string, any> = {  
  'pelorus-yachting': {  
    title: 'Pelorus Yachting',  
    archetype: 'The Fleet',  
    location: 'Global Waters',  
    heroImage: '3ZzEY41j2NO.webp',  
    description: 'Bespoke maritime expeditions designed for the modern explorer. A fusion of tactical precision and unparalleled luxury.',  
  },  
  'ritz-carlton-yacht': {  
    title: 'Ritz-Carlton Yacht Collection',  
    archetype: 'The Fleet',  
    location: 'Mediterranean / Caribbean',  
    heroImage: 'ZYrILXL2xND.webp',  
    description: 'A transformative journey at sea. Combining the legendary service of The Ritz-Carlton with the freedom of a yachting vacation.',  
  },  
  'greenland-solar-eclipse': {  
    title: 'Greenland Solar Eclipse',  
    archetype: 'The Zenith',  
    location: 'Greenland',  
    heroImage: 'f-crcv_KK4e.webp',  
    description: 'A celestial event viewed from the raw beauty of the Arctic. An experience that transcends the ordinary.',  
  },  
  'graylyn-estate': {  
    title: 'The Graylyn Estate',  
    archetype: 'The Estate',  
    location: 'Winston-Salem, NC',  
    heroImage: '7X1OAaaf6fJ.webp',  
    description: 'Historic elegance meets refined comfort. A sprawling sanctuary of limestone and legend.',  
  },  
  // Add others as needed...  
};

export default function ArchiveDetail({ params }: { params: { id: string } }) {  
  const item = archiveData[params.id];

  if (!item) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-[#0F0F0F] text-[#E5E5E5] selection:bg-[#B5A48B] selection:text-[#0F0F0F]">  
      {/* Hero Section */}  
      <section className="relative h-[80vh] w-full overflow-hidden">  
        <img  
          src={`/assets/archive/${item.heroImage}`}  
          alt={item.title}  
          className="h-full w-full object-cover brightness-75 transition-transform duration-1000 hover:scale-105"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent" />  
          
        <div className="absolute bottom-12 left-8 md:left-20">  
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-[#B5A48B]">  
            {item.archetype}  
          </p>  
          <h1 className="serif text-5xl md:text-7xl font-light tracking-tight">  
            {item.title}  
          </h1>  
        </div>  
      </section>

      {/* Content Section */}  
      <section className="mx-auto max-w-7xl px-8 py-24 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-16">  
        <div className="md:col-span-8">  
          <h2 className="mb-8 text-sm uppercase tracking-widest text-[#666]">Overview</h2>  
          <p className="text-xl leading-relaxed font-light text-[#BBB]">  
            {item.description}  
          </p>  
        </div>

        <div className="md:col-span-4 border-l border-white/10 pl-8 space-y-12">  
          <div>  
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#B5A48B] mb-4">Location</h3>  
            <p className="text-lg font-light">{item.location}</p>  
          </div>  
          <div>  
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#B5A48B] mb-4">Status</h3>  
            <p className="text-lg font-light italic">Active Portfolio</p>  
          </div>  
          <button className="w-full border border-[#B5A48B] py-4 text-xs uppercase tracking-widest text-[#B5A48B] hover:bg-[#B5A48B] hover:text-[#0F0F0F] transition-colors duration-300">  
            Inquire for Rates  
          </button>  
        </div>  
      </section>  
    </main>  
  );  
}  
