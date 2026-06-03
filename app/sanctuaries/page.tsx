import React from 'react';  
import Link from 'next/link';  
import Image from 'next/image';  
import Navigation from '../Navigation';  
import Footer from '../Footer';

const sanctuaries = [  
  { id: 'fortress', title: 'The Fortress', category: 'Security & Solitude', size: 'portrait', offset: 'mt-0', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' },  
  { id: 'stadium', title: 'The Stadium', category: 'High-Performance', size: 'square', offset: 'md:mt-32', img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018' },  
  { id: 'cinematic', title: 'The Cinematic', category: 'Private Screening', size: 'landscape', offset: 'md:-mt-20', img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba' },  
  { id: 'safari', title: 'The Safari', category: 'Wilderness Outpost', size: 'portrait', offset: 'mt-0', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801' },  
  { id: 'oasis', title: 'The Oasis', category: 'Arid Wellness', size: 'landscape', offset: 'md:mt-12', img: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda' },  
  { id: 'metropolitan', title: 'The Metropolitan', category: 'Urban Penthouse', size: 'square', offset: 'md:-mt-40', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750' },  
  { id: 'alpine', title: 'The Alpine', category: 'Summit Retreat', size: 'portrait', offset: 'mt-0', img: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb' },  
  { id: 'nautical', title: 'The Nautical', category: 'Oceanic Sovereignty', size: 'landscape', offset: 'md:mt-24', img: 'https://images.unsplash.com/photo-1491251880772-1fe1c8b6d5f6' },  
  { id: 'celestial', title: 'The Celestial', category: 'Astronomy & Air', size: 'square', offset: 'md:-mt-12', img: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3' },  
];

export default function SanctuariesPage() {  
  return (  
    <main className="bg-[#121212] text-[#E5E5E5] min-h-screen font-serif selection:bg-[#B5A48B]/30">  
      <Navigation />

      <header className="pt-48 pb-32 px-6 max-w-[1600px] mx-auto text-center md:text-left">  
        <div className="overflow-hidden">  
          <h1 className="text-6xl md:text-[10rem] font-light leading-[0.8] tracking-tighter mb-8 translate-y-0 opacity-100">  
            SANC<span className="text-[#B5A48B]">TU</span>ARIES  
          </h1>  
        </div>  
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">  
          <p className="max-w-md text-xl text-[#B5A48B]/60 leading-relaxed font-light italic">  
            Volume I: An curated index of sovereign environments for the modern voyager.  
          </p>  
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#B5A48B] border-b border-[#B5A48B]/30 pb-2">  
            Established 2026  
          </span>  
        </div>  
      </header>

      <section className="max-w-[1600px] mx-auto px-6 pb-64">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32 items-start">  
          {sanctuaries.map((item, index) => {  
            const aspectClass = item.size === 'portrait' ? 'aspect-[3/4]' : item.size === 'landscape' ? 'aspect-[4/3]' : 'aspect-square';  
              
            return (  
              <Link   
                key={item.id}  
                href={`/sanctuaries/${item.id}`}  
                className={`group relative block ${item.offset} transition-transform duration-700 hover:-translate-y-2`}  
              >  
                <div className={`relative w-full overflow-hidden mb-6 ${aspectClass} bg-[#1A1A1A]`}>  
                  <Image  
                    src={`${item.img}?auto=format&fit=crop&q=90&w=1200`}  
                    alt={item.title}  
                    fill  
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"  
                  />  
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />  
                </div>

                <div className="flex justify-between items-start pt-4 border-t border-[#B5A48B]/10">  
                  <div>  
                    <h3 className="text-3xl font-light tracking-tight mb-1">{item.title}</h3>  
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#B5A48B] font-sans font-bold">  
                      {item.category}  
                    </p>  
                  </div>  
                  <span className="text-xs font-sans text-[#B5A48B]/40">  
                    0{index + 1}  
                  </span>  
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
