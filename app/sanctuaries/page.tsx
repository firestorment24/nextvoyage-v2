import React from 'react';  
import Link from 'next/link';  
import Image from 'next/image';  
import Navigation from '../Navigation';  
import Footer from '../Footer';

const sanctuaries = [  
{ id: 'fortress', title: 'The Fortress', category: 'Security & Solitude', size: 'portrait', width: 'md:w-full', offset: 'mt-0', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' },  
{ id: 'stadium', title: 'The Stadium', category: 'High-Performance', size: 'square', width: 'md:w-3/4', offset: 'md:mt-48 md:ml-auto', img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018' },  
{ id: 'cinematic', title: 'The Cinematic', category: 'Private Screening', size: 'landscape', width: 'md:w-full', offset: 'md:-mt-12', img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba' },  
{ id: 'safari', title: 'The Safari', category: 'Wilderness Outpost', size: 'portrait', width: 'md:w-[85%]', offset: 'mt-0 mx-auto', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801' },  
{ id: 'oasis', title: 'The Oasis', category: 'Arid Wellness', size: 'landscape', width: 'md:w-full', offset: 'md:mt-24', img: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda' },  
{ id: 'metropolitan', title: 'The Metropolitan', category: 'Urban Penthouse', size: 'square', width: 'md:w-2/3', offset: 'md:-mt-32', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750' },  
{ id: 'alpine', title: 'The Alpine', category: 'Summit Retreat', size: 'portrait', width: 'md:w-full', offset: 'mt-0', img: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb' },  
{ id: 'nautical', title: 'The Nautical', category: 'Oceanic Sovereignty', size: 'landscape', width: 'md:w-[90%]', offset: 'md:mt-32', img: 'https://images.unsplash.com/photo-1491251880772-1fe1c8b6d5f6' },  
{ id: 'celestial', title: 'The Celestial', category: 'Astronomy & Air', size: 'square', width: 'md:w-3/4', offset: 'md:-mt-20 md:mx-auto', img: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3' },  
];

export default function SanctuariesPage() {  
return (  
  <main className="bg-[#121212] text-[#E5E5E5] min-h-screen font-serif selection:bg-[#B5A48B]/30">  
    <Navigation />

    <header className="pt-48 pb-32 px-6 max-w-[1400px] mx-auto">  
      <h1 className="text-6xl md:text-[9rem] font-light leading-[0.8] tracking-tighter mb-12">  
        SANC<span className="text-[#B5A48B]">TU</span>ARIES  
      </h1>  
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-t border-[#B5A48B]/10 pt-8">  
        <p className="max-w-md text-lg text-[#B5A48B]/60 italic">  
          An indexed collection of sovereign environments tailored for the global elite.  
        </p>  
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.4em] text-[#B5A48B]/40">  
          <span>Vol. 2026.01</span>  
          <span>Index: 01—09</span>  
        </div>  
      </div>  
    </header>

    <section className="max-w-[1400px] mx-auto px-6 pb-64">  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-48">  
        {sanctuaries.map((item, index) => {  
          const aspectClass = item.size === 'portrait' ? 'aspect-[4/5]' : item.size === 'landscape' ? 'aspect-[16/10]' : 'aspect-square';  
            
          return (  
            <Link   
              key={item.id}  
              href={`/sanctuaries/${item.id}`}  
              className={`group relative block ${item.offset} ${item.width} transition-opacity duration-500 hover:opacity-80`}  
            >  
              <div className={`relative overflow-hidden mb-8 ${aspectClass} bg-[#1A1A1A] shadow-2xl`}>  
                <Image  
                  src={`${item.img}?auto=format&fit=crop&q=90&w=1000`}  
                  alt={item.title}  
                  fill  
                  className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"  
                />  
              </div>

              <div className="space-y-1">  
                <span className="text-[9px] uppercase tracking-[0.5em] text-[#B5A48B] block">  
                  {item.category}  
                </span>  
                <h3 className="text-2xl font-light tracking-tight">{item.title}</h3>  
                <p className="text-[10px] text-[#B5A48B]/30 pt-2 font-sans">REF_00{index + 1}</p>  
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
