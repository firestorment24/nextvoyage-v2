"use client";

import Link from 'next/link';

const SANCTUARIES = [  
  { slug: 'metropolitan', name: 'Metropolitan', description: 'Urban elite retreats.' },  
  { slug: 'floating', name: 'Floating', description: 'Yachts & private islands.' },  
  { slug: 'island', name: 'Island', description: 'Remote coastal escapes.' },  
  { slug: 'alpine', name: 'Alpine', description: 'High-altitude seclusion.' },  
  { slug: 'stadium', name: 'Stadium', description: 'The ultimate VIP access.' },  
  { slug: 'cinematic', name: 'Cinematic', description: 'Screen-worthy vistas.' },  
  { slug: 'fortress', name: 'Fortress', description: 'Maximum security & privacy.' },  
  { slug: 'safari', name: 'Safari', description: 'Wild luxury redefined.' },  
  { slug: 'oasis', name: 'Oasis', description: 'Desert tranquility.' },  
];

export default function Home() {  
  return (  
    <main className="min-h-screen bg-white">  
      {/* Hero Section */}  
      <section className="h-[70vh] flex flex-col items-center justify-center text-center px-6">  
        <h1 className="text-5xl md:text-7xl font-extralight tracking-[0.2em] uppercase mb-6">  
          NexVoyage Collective  
        </h1>  
        <p className="text-sm md:text-base text-gray-400 tracking-widest uppercase">  
          Bespoke Sanctuaries for the Refined Traveler  
        </p>  
      </section>

      {/* Philosophy */}  
      <section className="max-w-4xl mx-auto py-20 px-6 text-center border-y border-gray-50">  
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-8">Our Philosophy</h2>  
        <p className="text-2xl font-light leading-relaxed">  
          We do not just book travel. We engineer "Quiet Luxury"—seamless, secure, and soulful escapes designed for those who value privacy above all else.  
        </p>  
      </section>

      {/* 9 Sanctuary Grid */}  
      <section className="max-w-6xl mx-auto py-20 px-6">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  
          {SANCTUARIES.map((item) => (  
            <Link key={item.slug} href={`/sanctuary/${item.slug}`} className="group block text-center">  
              <div className="aspect-[4/5] bg-gray-50 mb-6 overflow-hidden relative">  
                {/* Background "Image" Placeholder */}  
                <div className="absolute inset-0 bg-gray-100 group-hover:scale-105 transition-transform duration-700" />  
                <div className="absolute inset-0 flex items-center justify-center">  
                   <span className="text-[10px] uppercase tracking-widest text-gray-300">Sanctuary: {item.name}</span>  
                </div>  
              </div>  
              <h3 className="text-sm uppercase tracking-widest mb-2">{item.name}</h3>  
              <p className="text-xs text-gray-400 font-light">{item.description}</p>  
            </Link>  
          ))}  
        </div>  
      </section>  
    </main>  
  );  
}  
