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
    <section className="relative h-[110vh] w-full overflow-hidden">  
      <img   
        src={image}   
        alt={title}   
        className="absolute inset-0 h-full w-full object-cover brightness-[0.4]"  
      />  
      <div className={`absolute inset-0 flex flex-col justify-center ${alignmentClasses[align]}`}>  
        <div className="h-[1px] w-12 bg-[#d4af37] mb-8 opacity-60"></div>  
        <h2 className="text-4xl md:text-6xl font-light tracking-[0.3em] text-white mb-6 uppercase">  
          {title}  
        </h2>  
        {subtitle && (  
          <p className="text-xs md:text-sm tracking-[0.5em] text-[#d4af37] uppercase max-w-lg leading-loose">  
            {subtitle}  
          </p>  
        )}  
      </div>  
    </section>  
  );  
};

const Navigation = () => (  
  <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-12 py-10">  
    <div className="text-[#d4af37] font-light tracking-[0.5em] text-[10px] uppercase">  
      NexVoyage <span className="text-white/20 mx-2">|</span> TCI Trifecta  
    </div>  
    <a href="/sanctuaries" className="text-[9px] tracking-[0.4em] uppercase text-white/50 hover:text-white transition-all">Back</a>  
  </nav>  
);

export default function TCITrifectaPage() {  
  return (  
    <main className="bg-black min-h-screen text-white">  
      <Navigation />  
        
      <OverlaidSection   
        image="https://cdn.marblism.com/OjY-xEukLaC.webp"   
        title="The Trifecta"  
        subtitle="Three islands. One consciousness. Architecturally perfected."  
        align="left"  
      />

      <OverlaidSection   
        image="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80"   
        title="Neural Decoupling"  
        subtitle="The salt, the shadow, and the silence."  
        align="right"  
      />

      <footer className="h-screen flex flex-col items-center justify-center bg-[#0a0a0a]">  
         <h2 className="text-[#d4af37] text-[10px] tracking-[1em] uppercase mb-12">The Reserve</h2>  
         <a href="/reserve" className="text-4xl font-light tracking-[0.2em] hover:text-[#d4af37] transition-all">SECURE PASSAGE</a>  
      </footer>  
    </main>  
  );  
}  
