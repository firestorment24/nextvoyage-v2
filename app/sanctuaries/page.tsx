import React from 'react';  
import Link from 'next/link';  
import Image from 'next/image';  
import Navigation from '../Navigation';  
import Footer from '../Footer';

const sanctuaries = [  
  { id: 'fortress', title: 'The Fortress', category: 'Security & Solitude', size: 'large', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' },  
  { id: 'stadium', title: 'The Stadium', category: 'High-Performance Sport', size: 'small', img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018' },  
  { id: 'cinematic', title: 'The Cinematic', category: 'Private Screening', size: 'small', img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba' },  
  { id: 'safari', title: 'The Safari', category: 'Wilderness Outpost', size: 'medium', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801' },  
  // FIXED: New Oasis Image  
  { id: 'oasis', title: 'The Oasis', category: 'Arid Wellness', size: 'large', img: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda' },  
  { id: 'metropolitan', title: 'The Metropolitan', category: 'Urban Penthouse', size: 'small', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750' },  
  { id: 'alpine', title: 'The Alpine', category: 'Summit Retreat', size: 'medium', img: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb' },  
  // FIXED: New Nautical Image (Monaco Port)  
  { id: 'nautical', title: 'The Nautical', category: 'Oceanic Sovereignty', size: 'small', img: 'https://images.unsplash.com/photo-1491251880772-1fe1c8b6d5f6' },  
  { id: 'celestial', title: 'The Celestial', category: 'Astronomy & Air', size: 'medium', img: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3' },  
];

export default function SanctuariesPage() {  
  return (  
    <main className="bg-[#1A1A1A] text-[#E5E5E5] min-h-screen font-serif">  
      <Navigation />

      <header className="pt-32 pb-16 px-6 max-w-7xl mx-auto border-b border-[#B5A48B]/20 text-center md:text-left">  
        <h1 className="text-5xl md:text-8xl font-light tracking-tighter mb-4">  
          The <span className="text-[#B5A48B]">Command Center</span>  
        </h1>  
        <p className="max-w-2xl text-lg text-[#B5A48B]/80 leading-relaxed italic mx-auto md:mx-0">  
          An indexed collection of sovereign environments tailored for the global elite.  
        </p>  
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20">  
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[350px]">  
          {sanctuaries.map((item) => {  
            const colSpan = item.size === 'large' ? 'md:col-span-8' : item.size === 'medium' ? 'md:col-span-6' : 'md:col-span-4';  
            const rowSpan = item.size === 'large' ? 'md:row-span-2' : 'md:row-span-1';

            return (  
              <Link   
                key={item.id}  
                href={`/sanctuaries/${item.id}`}  
                className={`${colSpan} ${rowSpan} group relative overflow-hidden bg-[#121212] border border-[#B5A48B]/5`}  
              >  
                <Image  
                  src={`${item.img}?auto=format&fit=crop&q=85&w=1400`}  
                  alt={item.title}  
                  fill  
                  sizes="(max-width: 768px) 100vw, 50vw"  
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100"  
                />  
                  
                {/* Brass gradient overlay for legibility */}  
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent z-10" />  
                  
                <div className="absolute bottom-10 left-10 z-20">  
                  <span className="text-[#B5A48B] uppercase tracking-[0.3em] text-[10px] mb-3 block font-sans font-bold">  
                    {item.category}  
                  </span>  
                  <h3 className="text-3xl md:text-4xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-500">  
                    {item.title}  
                  </h3>  
                </div>

                {/* Corner Accent */}  
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#B5A48B]/0 group-hover:border-[#B5A48B]/40 transition-all duration-500 m-6" />  
              </Link>  
            );  
          })}  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
