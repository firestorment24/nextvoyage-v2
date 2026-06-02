'use client';

import React from 'react';

interface SectionProps {  
  image: string;  
  title: string;  
  subtitle?: string;  
}

const OverlaidSection: React.FC<SectionProps> = ({ image, title, subtitle }) => (  
  <section className="relative h-screen w-full overflow-hidden border-b border-[#3d3d3d]">  
    <img   
      src={image}   
      alt={title}   
      className="absolute inset-0 h-full w-full object-cover brightness-[0.45]"  
    />  
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">  
      <h2 className="text-4xl md:text-6xl font-light tracking-[0.2em] text-[#d4af37] mb-4 uppercase leading-tight">  
        {title}  
      </h2>  
      {subtitle && (  
        <p className="text-sm md:text-lg tracking-widest text-gray-400 uppercase max-w-xl">  
          {subtitle}  
        </p>  
      )}  
    </div>  
  </section>  
);

const Navigation = () => (  
  <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-black/30 backdrop-blur-md">  
    <div className="text-[#d4af37] font-bold tracking-tighter text-xl underline decoration-1 underline-offset-4">NV</div>  
    <div className="flex gap-8 text-[10px] tracking-[0.3em] uppercase text-white/80">  
      <a href="/sanctuaries" className="hover:text-white transition-colors">Sanctuaries</a>  
      <a href="/" className="hover:text-white transition-colors">Main</a>  
    </div>  
  </nav>  
);

const Footer = () => (  
  <footer className="bg-black py-24 text-center">  
    <div className="h-[1px] w-24 bg-[#d4af37] mx-auto mb-10 opacity-30"></div>  
    <p className="text-[10px] tracking-[0.5em] uppercase text-gray-600">  
      Turks & Caicos | The Trifecta Experience  
    </p>  
  </footer>  
);

export default function TCITrifectaPage() {  
  return (  
    <main className="bg-black min-h-screen text-white font-sans">  
      <Navigation />  
        
      <OverlaidSection   
        image="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80"   
        title="TCI Trifecta"  
        subtitle="Three Islands. Three Rhythms. One Soul."  
      />

      <OverlaidSection   
        image="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80"   
        title="Providenciales Ivory"  
        subtitle="The silence of white sands at dusk."  
      />

      <OverlaidSection   
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80"   
        title="Parrot Cay Solitude"  
        subtitle="The ultimate expression of the Brass & Shadow aesthetic."  
      />

      <Footer />  
    </main>  
  );  
}  
