import React from 'react';  
import Link from 'next/link';  
import Navigation from '../Navigation';  
import Footer from '../Footer';

const sanctuaries = [  
  { id: 'fortress', title: 'The Fortress', category: 'Security & Solitude', size: 'large' },  
  { id: 'stadium', title: 'The Stadium', category: 'High-Performance Sport', size: 'small' },  
  { id: 'cinematic', title: 'The Cinematic', category: 'Private Screening', size: 'small' },  
  { id: 'safari', title: 'The Safari', category: 'Wilderness Outpost', size: 'medium' },  
  { id: 'oasis', title: 'The Oasis', category: 'Arid Wellness', size: 'large' },  
  { id: 'metropolitan', title: 'The Metropolitan', category: 'Urban Penthouse', size: 'small' },  
  { id: 'alpine', title: 'The Alpine', category: 'Summit Retreat', size: 'medium' },  
  { id: 'nautical', title: 'The Nautical', category: 'Oceanic Sovereignty', size: 'small' },  
  { id: 'celestial', title: 'The Celestial', category: 'Astronomy & Air', size: 'medium' },  
];

export default function SanctuariesPage() {  
  return (  
    <main className="bg-[#1A1A1A] text-[#E5E5E5] min-h-screen font-serif">  
      <Navigation />

      {/* Header Section */}  
      <header className="pt-32 pb-16 px-6 max-w-7xl mx-auto border-b border-[#B5A48B]/20">  
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-4">  
          The <span className="text-[#B5A48B]">Command Center</span>  
        </h1>  
        <p className="max-w-xl text-lg text-[#B5A48B]/80 leading-relaxed italic">  
          A curated index of our most exclusive environments, designed for the modern sovereign.  
        </p>  
      </header>

      {/* Asymmetrical Magazine Grid */}  
      <section className="max-w-7xl mx-auto px-6 py-20">  
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px]">  
          {sanctuaries.map((item, index) => {  
            // Logic for asymmetrical layout sizing  
            const colSpan = item.size === 'large' ? 'md:col-span-8' : item.size === 'medium' ? 'md:col-span-6' : 'md:col-span-4';  
            const rowSpan = item.size === 'large' ? 'md:row-span-2' : 'md:row-span-1';

            return (  
              <Link   
                key={item.id}  
                href={`/sanctuaries/${item.id}`}  
                className={`${colSpan} ${rowSpan} group relative overflow-hidden bg-[#242424] border border-[#B5A48B]/10 hover:border-[#B5A48B]/50 transition-all duration-700`}  
              >  
                {/* Visual Placeholder / Background Overlay */}  
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />  
                  
                {/* Content */}  
                <div className="absolute bottom-8 left-8 z-20">  
                  <span className="text-[#B5A48B] uppercase tracking-[0.2em] text-xs mb-2 block font-sans">  
                    {item.category}  
                  </span>  
                  <h3 className="text-2xl md:text-3xl font-light group-hover:translate-x-2 transition-transform duration-500">  
                    {item.title}  
                  </h3>  
                </div>

                {/* Decorative Elements */}  
                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">  
                  <span className="text-[#B5A48B] text-xl">→</span>  
                </div>  
              </Link>  
            );  
          })}  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
