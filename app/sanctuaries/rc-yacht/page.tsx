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
    left: 'items-start text-left pl-12 md:pl-24',  
    right: 'items-end text-right pr-12 md:pr-24',  
    center: 'items-center text-center px-6',  
  };

  return (  
    <section className="relative h-screen w-full overflow-hidden border-b border-[#1a1a1a]">  
      <img   
        src={image}   
        alt={title}   
        className="absolute inset-0 h-full w-full object-cover brightness-[0.35] transition-transform duration-700 hover:scale-105"  
      />  
      <div className={`absolute inset-0 flex flex-col justify-center ${alignmentClasses[align]}`}>  
        <h2 className="text-4xl md:text-7xl font-light tracking-[0.25em] text-[#d4af37] mb-6 uppercase">  
          {title}  
        </h2>  
        {subtitle && (  
          <p className="text-sm md:text-base tracking-[0.4em] text-gray-400 uppercase max-w-2xl leading-relaxed">  
            {subtitle}  
          </p>  
        )}  
      </div>  
    </section>  
  );  
};

const Navigation = () => (  
  <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-8 bg-gradient-to-b from-black/60 to-transparent">  
    <div className="text-[#d4af37] font-medium tracking-[0.3em] text-xs uppercase">  
      NexVoyage / <span className="text-white/40">RC Yacht Collection</span>  
    </div>  
    <div className="flex gap-10 text-[9px] tracking-[0.4em] uppercase text-white/60">  
      <a href="/sanctuaries" className="hover:text-[#d4af37] transition-all">The Collection</a>  
      <a href="/reserve" className="text-[#d4af37] border-b border-[#d4af37]/30 pb-1">Reserve</a>  
    </div>  
  </nav>  
);

export default function RCYachtPage() {  
  return (  
    <main className="bg-black min-h-screen text-white selection:bg-[#d4af37] selection:text-black">  
      <Navigation />  
        
      <OverlaidSection   
        image="https://cdn.marblism.com/WuyrXpnAwo9.webp"   
        title="Floating Stillness"  
        subtitle="A sanctuary that moves with the tide, anchored only by silence."  
        align="center"  
      />

      <OverlaidSection   
        image="https://images.unsplash.com/photo-1544469531-185e28e3c790?auto=format&fit=crop&q=80"   
        title="Brass & Shadow"  
        subtitle="Where the horizon vanishes and the digital world dissolves."  
        align="right"  
      />

      <section className="bg-black py-40 text-center px-6">  
        <h3 className="text-[10px] tracking-[0.8em] uppercase text-[#d4af37] mb-12">Claim Your Sanctuary</h3>  
        <a href="/reserve" className="inline-block border border-white/20 px-12 py-5 text-[10px] tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all">  
          Start the Reserve Process  
        </a>  
      </section>  
    </main>  
  );  
}  
