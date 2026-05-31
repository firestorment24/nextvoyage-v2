// app/sanctuaries/tci-trifecta/page.js

import React from 'react';  
import Navigation from '@/components/Navigation';  
import Footer from '@/components/Footer';

export default function TCITrifecta() {  
  return (  
    <div className="bg-black text-stone-200 min-h-screen font-serif">  
      <Navigation />  
        
      {/* Hero Section */}  
      <section className="relative h-screen flex items-center justify-center overflow-hidden">  
        <img   
          src="https://cdn.marblism.com/cUyJDkxI7Ky.webp"   
          alt="TCI Trifecta - Grace Bay"   
          className="absolute inset-0 w-full h-full object-cover opacity-60"  
        />  
        <div className="relative z-10 text-center px-4">  
          <h1 className="text-6xl md:text-8xl tracking-widest text-amber-200/80 mb-4 uppercase">  
            TCI Trifecta  
          </h1>  
          <p className="text-xl md:text-2xl tracking-widest uppercase text-stone-400">  
            Grace Bay | Absolute Isolation  
          </p>  
        </div>  
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-amber-200/50">  
          ↓  
        </div>  
      </section>

      {/* Narrative Section */}  
      <section className="py-24 px-6 max-w-4xl mx-auto text-center border-b border-stone-800">  
        <h2 className="text-3xl mb-8 text-amber-100 italic">The Sound of Gravity</h2>  
        <p className="text-lg leading-relaxed mb-6 text-stone-400">  
          Located on the most secluded stretch of Grace Bay, the Trifecta is a masterclass in architectural silence. Three private pavilions, interconnected by floating stone pathways, designed to disappear into the horizon.  
        </p>  
        <p className="text-lg leading-relaxed text-stone-400">  
          This isn't just a stay; it's a recalibration. No crowds, no noise, just the rhythmic pull of the tide and the amber glow of the Caribbean sun against hand-finished brass interiors.  
        </p>  
      </section>

      {/* The Experience Blocks */}  
      <section className="py-24 grid grid-cols-1 md:grid-cols-3 gap-1 px-4 bg-stone-950">  
        {[  
          { title: "The Pavilion", desc: "12,000 sq ft of indoor-outdoor living. Floor-to-ceiling glass that dissolves at the touch of a button." },  
          { title: "The Service", desc: "A dedicated household team of four. Invisible, yet anticipatory. Your glass is never empty, your peace never disturbed." },  
          { title: "The Water", desc: "A 100-foot zero-edge pool that bleeds into the Atlantic. Private boat access to the hidden cays." }  
        ].map((item, i) => (  
          <div key={i} className="p-12 border border-stone-800/50 hover:bg-stone-900 transition-colors">  
            <h3 className="text-amber-200/70 text-xl mb-4 tracking-tighter uppercase">{item.title}</h3>  
            <p className="text-stone-500 font-sans leading-relaxed">{item.desc}</p>  
          </div>  
        ))}  
      </section>

      {/* CTA */}  
      <section className="py-32 text-center bg-black">  
        <a   
          href="/reserve"   
          className="inline-block px-12 py-4 border border-amber-200/30 text-amber-200/80 hover:bg-amber-200/10 transition-all uppercase tracking-widest text-sm"  
        >  
          Secure Your Sanctuary  
        </a>  
      </section>

      <Footer />  
    </div>  
  );  
}  
