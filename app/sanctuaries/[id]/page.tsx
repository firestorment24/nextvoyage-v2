'use client';

import React from 'react';  
import { useParams } from 'next/navigation';  
import Navigation from '../../Navigation';  
import Footer from '../../Footer';  
import { SANCTUARIES_DATA } from '@/lib/data';

export default function SanctuaryDetailPage() {  
const params = useParams();  
const id = params?.id as string;  
// Lookup now uses 'id' instead of 'slug'  
const sanctuary = SANCTUARIES_DATA.find((s: any) => s.id === id);

if (!sanctuary) {  
return (  
  <div className="bg-black text-white min-h-screen flex items-center justify-center">  
    <p className="tracking-widest uppercase opacity-50">Sanctuary Dossier Not Found</p>  
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
          Intelligence / {sanctuary.location}  
        </p>  
        <h1 className="text-6xl md:text-9xl font-light tracking-tighter leading-none mb-8">  
          {sanctuary.name}  
        </h1>  
        <p className="text-xl md:text-2xl font-light text-white/60 leading-relaxed italic">  
          "{sanctuary.tagline}"  
        </p>  
      </div>  
      <div className="hidden md:block pb-4 text-right">  
        <div className="w-32 h-[1px] bg-white/20 mb-4 ml-auto"></div>  
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Reference: NV-{sanctuary.id.toUpperCase()}</p>  
      </div>  
    </div>  
  </section>

  {/* Cinematic Hero */}  
  <section className="px-6 md:px-12 mb-32">  
    <div className="max-w-screen-2xl mx-auto aspect-[21/9] overflow-hidden relative group rounded-sm">  
      <img   
        src={sanctuary.heroImage || "https://images.unsplash.com/photo-1445013544686-81424bc3399e?q=80&w=2073&auto=format&fit=crop"}   
        alt={sanctuary.name}  
        className="w-full h-full object-cover grayscale brightness-[0.6] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[3000ms] ease-out"  
      />  
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>  
      <div className="absolute bottom-8 left-8 flex items-center gap-4">  
         <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>  
         <span className="text-[10px] uppercase tracking-[0.4em] text-white/80">Active Sanctuary Portfolio</span>  
      </div>  
    </div>  
  </section>

  {/* Intelligence / Overview Grid */}  
  <section className="px-6 md:px-12 py-32 border-t border-white/5">  
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">  
      <div className="md:col-span-4 space-y-12">  
        <div className="group">  
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 group-hover:text-white transition-colors">Atmosphere</h4>  
          <p className="text-lg font-light leading-relaxed text-white/70">{sanctuary.atmosphere}</p>  
        </div>  
        <div>  
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">Curated Highlights</h4>  
          <ul className="space-y-4">  
            {sanctuary.highlights?.map((item: string, i: number) => (  
              <li key={i} className="text-sm font-light text-white/50 flex items-start gap-4">  
                <span className="text-[10px] text-white/20 mt-1">0{i+1}</span>  
                <span className="leading-tight">{item}</span>  
              </li>  
            ))}  
          </ul>  
        </div>  
      </div>  
        
      <div className="md:col-span-8">  
        <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-8">Executive Summary</h4>  
        <p className="text-3xl md:text-5xl font-light leading-[1.1] mb-12 tracking-tight">  
          {sanctuary.categoryDescription}  
        </p>  
        <div className="pt-12 border-t border-white/5 flex flex-wrap gap-16">  
           <div>  
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-3">Portfolio Size</p>  
              <p className="text-3xl font-light">{sanctuary.propertyCount} Properties</p>  
           </div>  
           <div>  
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-3">Service Level</p>  
              <p className="text-3xl font-light italic">Invisible</p>  
           </div>  
        </div>  
      </div>  
    </div>  
  </section>

  {/* Private Booking CTA */}  
  <section className="py-40 bg-zinc-950/20 text-center border-y border-white/5">  
     <div className="max-w-2xl mx-auto px-6">  
        <p className="text-[10px] uppercase tracking-[0.6em] text-white/30 mb-12">Initiation Sequence</p>  
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-12 leading-none">  
          Request Access to {sanctuary.name}  
        </h2>  
        <button className="group relative px-16 py-6 overflow-hidden border border-white/10 rounded-full transition-all hover:border-white/40">  
          <span className="relative z-10 text-[10px] uppercase tracking-[0.5em] group-hover:italic transition-all">Begin Consultation</span>  
          <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 opacity-[0.03]"></div>  
        </button>  
     </div>  
  </section>

  <Footer />  
</main>  
);  
}  
