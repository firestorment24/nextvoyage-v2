import React from 'react';

// Sample data based on our refined list  
const posts = [  
  {  
    title: "The CEO Reset: BCMC 2026",  
    subtitle: "Orchestrating silence in a noisy world.",  
    category: "Manifesto",  
    size: "col-span-2 row-span-2", // Large feature  
    image: "/images/ceo-reset.jpg"   
  },  
  {  
    title: "Suncoast Jazz Festival",  
    subtitle: "A protocol for the perfect weekend.",  
    category: "Protocol",  
    size: "col-span-1 row-span-1",  
    image: "/images/jazz.jpg"  
  },  
  {  
    title: "Rosewood Retreats",  
    subtitle: "The architecture of sanctuary.",  
    category: "Orchestration",  
    size: "col-span-1 row-span-2",  
    image: "/images/rosewood.jpg"  
  },  
  {  
    title: "GSX 2026: Security & Serenity",  
    subtitle: "Navigating global summits with ease.",  
    category: "Protocol",  
    size: "col-span-1 row-span-1",  
    image: "/images/gsx.jpg"  
  }  
];

export default function PerspectivePage() {  
  return (  
    <div className="min-h-screen bg-[#000] text-stone-300 p-8 pt-24">  
      <header className="max-w-7xl mx-auto mb-12">  
        <h1 className="text-4xl font-light tracking-widest text-[#d4af37] uppercase">Perspective</h1>  
        <p className="mt-2 text-stone-500 italic">Protocols, Orchestrations, and Manifestos for the Discerning Voyager.</p>  
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">  
        {posts.map((post, index) => (  
          <div   
            key={index}  
            className={`${post.size} group relative overflow-hidden bg-stone-900 border border-stone-800 hover:border-[#d4af37] transition-all duration-500 cursor-pointer`}  
          >  
            {/* Background Image / Overlay */}  
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />  
              
            <div className="absolute bottom-0 p-6 z-20">  
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] mb-2 block">  
                {post.category}  
              </span>  
              <h2 className="text-xl font-medium text-white group-hover:text-[#d4af37] transition-colors">  
                {post.title}  
              </h2>  
              <p className="text-sm text-stone-400 mt-1 line-clamp-2">  
                {post.subtitle}  
              </p>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
}  
