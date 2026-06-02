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
      className="absolute inset-0 h-full w-full object-cover brightness-[0.4]"  
    />  
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">  
      <h2 className="text-4xl md:text-6xl font-light tracking-[0.2em] text-[#d4af37] mb-4 uppercase">  
        {title}  
      </h2>  
      {subtitle && (  
        <p className="text-sm md:text-lg tracking-widest text-gray-300 uppercase max-w-2xl">  
          {subtitle}  
        </p>  
      )}  
    </div>  
  </section>  
);

const Navigation = () => (  
  <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-black/20 backdrop-blur-md border-b border-white/10">  
    <div className="text-[#d4af37] font-bold tracking-tighter text-xl">NV</div>  
    <div className="flex gap-8 text-[10px] tracking-[0.3em] uppercase text-white/70">  
      <a href="/sanctuaries" className="hover:text-[#d4af37] transition-colors">The Collection</a>  
      <a href="/" className="hover:text-[#d4af37] transition-colors">Home</a>  
    </div>  
  </nav>  
);

const Footer = () => (  
  <footer className="bg-black py-20 border-t border-[#3d3d3d] text-center">  
    <p className="text-[10px] tracking-[0.5em] uppercase text-gray-500">  
      © 2026 NexVoyage Collective | Private Sanctuary Series  
    </p>  
  </footer>  
);

export default function RCYachtPage() {  
  return (  
    <main className="bg-black min-h-screen text-white font-sans selection:bg-[#d4af37] selection:text-black">  
      <Navigation />  
        
      <OverlaidSection   
        image="https://cdn.marblism.com/WuyrXpnAwo9.webp"   
        title="The RC Yacht Collection"  
        subtitle="Floating Sanctuaries for the Discerning"  
      />

      <OverlaidSection   
        image="https://images.unsplash.com/photo-1544469531-185e28e3c790?auto=format&fit=crop&q=80"   
        title="Midnight At Sea"  
        subtitle="Where the horizon vanishes into shadow and brass."  
      />

      <OverlaidSection   
        image="https://images.unsplash.com/photo-1605281317010-fe5ffe798156?auto=format&fit=crop&q=80"   
        title="Uncharted Stillness"  
        subtitle="Neural decoupling through the rhythm of the tide."  
      />

      <Footer />  
    </main>  
  );  
}  
