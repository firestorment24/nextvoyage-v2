'use client';

import React from 'react';

interface SectionProps {  
  image: string;  
  title: string;  
  subtitle?: string;  
  align?: 'left' | 'right' | 'center';  
}

const OverlaidSection: React.FC<SectionProps> = ({ image, title, subtitle, align = 'center' }) => {  
  const alignmentClasses = {  
    left: 'items-start text-left pl-12 md:pl-32',  
    right: 'items-end text-right pr-12 md:pr-32',  
    center: 'items-center text-center px-6',  
  };

  return (  
    <section className="relative h-screen w-full overflow-hidden border-b border-white/5">  
      <img   
        src={image}   
        alt={title}   
        className="absolute inset-0 h-full w-full object-cover brightness-[0.3] grayscale-[0.2]"  
      />  
      <div className={`absolute inset-0 flex flex-col justify-center ${alignmentClasses[align]}`}>  
        <div className="h-[1px] w-16 bg-[#d4af37] mb-10 opacity-40"></div>  
        <h2 className="text-4xl md:text-7xl font-extralight tracking-[0.3em] text-white mb-6 uppercase leading-tight">  
          {title}  
        </h2>  
        {subtitle && (  
          <p className="text-[10px] md:text-[12px] tracking-[0.6em] text-[#d4af37] uppercase max-w-lg leading-[2.5]">  
            {subtitle}  
          </p>  
        )}  
      </div>  
    </section>  
  );  
};

const Navigation = () => (  
  <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-12 py-12">  
    <div className="text-[#d4af37] font-light tracking-[0.5em] text-[10px] uppercase">  
      NexVoyage <span className="text-white/10 mx-3">/</span> Metropolitan  
    </div>  
    <div className="flex gap-12 items-center">  
      <a href="/sanctuaries" className="text-[9px] tracking-[0.4em] uppercase text-white/40 hover:text-white transition-all">The Archive</a>  
      <a href="/reserve" className="text-[9px] tracking-[0.4em] uppercase text-[#d4af37] border border-[#d4af37]/20 px-6 py-2 hover:bg-[#d4af37] hover:text-black transition-all">Reserve</a>  
    </div>  
  </nav>  
);

export default function MetropolitanPage() {  
  return (  
    <main className="bg-black min-h-screen text-white font-sans antialiased">  
      <Navigation />  
        
      <OverlaidSection   
        image="https://cdn.marblism.com/5XPT1eT2nUw.webp"   
        title="Tokyo Stillness"  
        subtitle="Acoustic perfection 47 floors above the city pace."  
        align="left"  
      />

      <OverlaidSection   
        image="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80"   
        title="Neural Sync"  
        subtitle="Where neon shadows meet the silence of success."  
        align="right"  
      />

      <section className="min-h-screen flex flex-col items-center justify-center bg-black px-12 border-t border-white/5">  
         <div className="max-w-3xl text-center">  
            <h3 className="text-[9px] tracking-[0.8em] uppercase text-white/30 mb-20">The Specification</h3>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">  
               <div>  
                  <h4 className="text-[#d4af37] text-[10px] tracking-[0.4em] uppercase mb-4">Zero-Latency Access</h4>  
                  <p className="text-[11px] text-white/50 tracking-widest leading-relaxed uppercase">Secure fiber-uplink and hardened biometric perimeter control.</p>  
               </div>  
               <div>  
                  <h4 className="text-[#d4af37] text-[10px] tracking-[0.4em] uppercase mb-4">Acoustic Seclusion</h4>  
                  <p className="text-[11px] text-white/50 tracking-widest leading-relaxed uppercase">Triple-glazed vibration dampening for absolute cognitive isolation.</p>  
               </div>  
            </div>  
         </div>  
      </section>

      <footer className="py-32 flex flex-col items-center justify-center bg-[#050505]">  
         <a href="/reserve" className="text-5xl font-extralight tracking-[0.3em] text-[#d4af37] hover:scale-105 transition-transform">SECURE SPACE</a>  
         <p className="mt-12 text-[9px] tracking-[0.8em] text-white/20 uppercase font-light">Limited to three concurrent holders</p>  
      </footer>  
    </main>  
  );  
}  
