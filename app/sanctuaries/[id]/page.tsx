'use client';

import React from 'react';  
import { useParams } from 'next/navigation';  
import Navigation from '../../Navigation';  
import Footer from '../../Footer';  
// Importing the data - using the verified source from our previous sync  
import { SANCTUARIES_DATA } from '@/lib/data';

export default function SanctuaryDetailPage() {  
const params = useParams();  
const slug = params?.slug as string;  
const sanctuary = SANCTUARIES_DATA.find((s: any) => s.slug === slug);

if (!sanctuary) {  
  return (  
    <div className="bg-black text-white min-h-screen flex items-center justify-center">  
      <p className="tracking-widest uppercase opacity-50">Sanctuary Not Found</p>  
    </div>  
  );  
}

return (  
  <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black">  
    <Navigation />

    {/* Dossier Header */}  
    <section className="pt-40 pb-20 px-6 md:px-12">  
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">  
        <div className="max-w-3xl">  
          <p className="text-xs uppercase tracking-[0.4em] mb-6 text-white/40">  
            Portfolio / {sanctuary.location}  
          </p>  
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter leading-none mb-8">  
            {sanctuary.name}  
          </h1>  
          <p className="text-xl md:text-2xl font-light text-white/60 leading-relaxed italic">  
            "{sanctuary.tagline}"  
          </p>  
        </div>  
        <div className="hidden md:block pb-4">  
          <div className="w-32 h-[1px] bg-white/20 mb-4"></div>  
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Established MMXXVI</p>  
        </div>  
      </div>  
    </section>

    {/* Cinematic Hero */}  
    <section className="px-6 md:px-12 mb-32">  
      <div className="max-w-screen-2xl mx-auto aspect-[21/9] overflow-hidden relative group">  
        <img   
          src={sanctuary.heroImage || "https://images.unsplash.com/photo-1445013544686-81424bc3399e?q=80&w=2073&auto=format&fit=crop"}   
          alt={sanctuary.name}  
          className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[2000ms]"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>  
        <div className="absolute bottom-8 left-8 border border-white/20 backdrop-blur-md px-6 py-3 rounded-full">  
           <span className="text-[10px] uppercase tracking-[0.3em]">Limited Access Portfolio</span>  
        </div>  
      </div>  
    </section>

    {/* Intelligence / Overview Grid */}  
    <section className="px-6 md:px-12 py-32 border-t border-white/5">  
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">  
        <div className="md:col-span-4 space-y-12">  
          <div>  
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Atmosphere</h4>  
            <p className="text-lg font-light leading-relaxed">{sanctuary.atmosphere}</p>  
          </div>  
          <div>  
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Curated Highlights</h4>  
            <ul className="space-y-3">  
              {sanctuary.highlights?.map((item: string, i: number) => (  
                <li key={i} className="text-sm font-light text-white/60 flex items-center gap-3">  
                  <span className="w-1 h-1 bg-white/20 rounded-full"></span>  
                  {item}  
                </li>  
              ))}  
            </ul>  
          </div>  
        </div>  
          
        <div className="md:col-span-8">  
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-8">Executive Summary</h4>  
          <p className="text-3xl md:text-5xl font-light leading-tight mb-12">  
            {sanctuary.categoryDescription}  
          </p>  
          <div className="pt-12 border-t border-white/5 flex flex-wrap gap-12">  
             <div>  
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Inventory</p>  
                <p className="text-2xl font-light">{sanctuary.propertyCount} Properties</p>  
             </div>  
             <div>  
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Security</p>  
                <p className="text-2xl font-light italic">High-Discretion</p>  
             </div>  
          </div>  
        </div>  
      </div>  
    </section>

    {/* Private Booking CTA */}  
    <section className="py-40 bg-zinc-950/50 text-center border-y border-white/5">  
       <div className="max-w-2xl mx-auto px-6">  
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-12 italic">Initiation</p>  
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-12 leading-none">  
            Request Private Access to {sanctuary.name}  
          </h2>  
          <button className="group relative px-12 py-5 overflow-hidden border border-white/20 rounded-full transition-all hover:border-white">  
            <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] group-hover:italic transition-all">Begin Consultation</span>  
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 opacity-5"></div>  
          </button>  
       </div>  
    </section>

    <Footer />  
  </main>  
);  
}  
