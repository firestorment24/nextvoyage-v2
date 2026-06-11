import React from 'react';  
import Link from 'next/link';

export default function HomePage() {  
  return (  
    <main className="relative">  
      {/* Cinematic Hero */}  
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">  
        <div className="absolute inset-0 z-0">  
          <div className="absolute inset-0 bg-black/60 z-10" />  
          <img   
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80"   
            className="w-full h-full object-cover scale-105"  
            alt="The Horizon"  
          />  
        </div>  
          
        <div className="relative z-20 max-w-5xl">  
          <span className="text-[#A68966] text-[10px] tracking-[0.6em] uppercase mb-12 block font-bold">  
            The New Standard of Travel  
          </span>  
          <h1 className="text-6xl md:text-9xl font-serif italic text-white mb-12 leading-[0.8]">  
            Beyond the <br/> Horizon  
          </h1>  
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">  
            <Link href="/sanctuaries" className="px-12 py-5 bg-[#A68966] text-white text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-white hover:text-black transition-all">  
              Explore Collection  
            </Link>  
            <Link href="/concierge" className="text-white text-[10px] tracking-[0.4em] uppercase font-bold border-b border-white/20 pb-2 hover:border-[#A68966] transition-colors">  
              The Inquiry Flow  
            </Link>  
          </div>  
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.5em] text-white/30 uppercase">  
          Scroll  
        </div>  
      </section>

      {/* Philosophy Section */}  
      <section className="bg-[#0A0A0A] py-32 md:py-64">  
        <div className="max-w-7xl mx-auto px-6">  
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">  
            <div className="lg:col-span-7">  
              <h2 className="text-3xl md:text-5xl font-serif italic text-white/90 leading-tight mb-12">  
                "We don’t just book travel. We architect sanctuaries—temporary homes for the global soul."  
              </h2>  
              <div className="h-px w-24 bg-[#A68966]" />  
            </div>  
            <div className="lg:col-span-5">  
              <p className="text-lg text-white/50 leading-relaxed font-light">  
                Curated with obsessive attention to the quiet luxury of time and privacy.   
                Our mission is to maintain the ROI of your reset through a "Guardian Layer" of reliability.  
              </p>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Featured Teaser */}  
      <section className="bg-[#050505] py-32 border-t border-white/5">  
        <div className="max-w-7xl mx-auto px-6">  
          <div className="flex justify-between items-end mb-20">  
            <div>  
              <span className="text-[#A68966] text-[10px] tracking-[0.4em] uppercase block mb-4">01 / The Collection</span>  
              <h3 className="text-4xl md:text-6xl font-serif italic">A Curated Atlas</h3>  
            </div>  
            <Link href="/sanctuaries" className="hidden md:block text-xs tracking-widest uppercase border-b border-[#A68966] pb-2 text-white/60 hover:text-white transition-colors">  
              View All Sanctuaries →  
            </Link>  
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
            {/* We can map this once data is solidified, for now a placeholder showcase */}  
            <div className="group relative aspect-[4/5] overflow-hidden bg-white/5">  
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />  
              <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />  
              <div className="absolute bottom-8 left-8 z-20">  
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#A68966] mb-2 font-bold">Mountain Archetype</p>  
                <h4 className="text-2xl font-serif italic">The Alpinist Retreat</h4>  
              </div>  
            </div>  
            {/* Additional cards here... */}  
          </div>  
        </div>  
      </section>  
    </main>  
  );  
}  
