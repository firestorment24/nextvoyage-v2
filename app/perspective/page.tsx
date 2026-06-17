import React from 'react';

const PerspectivePage = () => {  
  const articles = [  
    {  
      id: 1,  
      category: "PHILOSOPHY",  
      title: "The Architecture of Stillness",  
      excerpt: "In a world of constant noise, we curate the luxury of silence. How physical space dictates cognitive clarity.",  
      image: "/images/perspective-1.jpg", // Placeholder path  
    },  
    {  
      id: 2,  
      category: "VETTING",  
      title: "The Guardian Layer",  
      excerpt: "Beyond security, we explore the invisible orchestration that keeps our sanctuaries truly private.",  
      image: "/images/perspective-2.jpg",  
    },  
    {  
      id: 3,  
      category: "EXPEDITION",  
      title: "Shadow over the Serengeti",  
      excerpt: "A look at the private mobile camps redefining the 'Safari' for the modern sovereign traveler.",  
      image: "/images/perspective-3.jpg",  
    }  
  ];

  return (  
    <div className="bg-black text-[#d4af37] min-h-screen font-sans selection:bg-[#d4af37] selection:text-black">  
      {/* Hero Header */}  
      <header className="pt-32 pb-20 px-6 text-center">  
        <h1 className="text-xs uppercase tracking-[0.5em] mb-4 opacity-70">Editorial</h1>  
        <h2 className="text-5xl md:text-7xl font-light tracking-[0.2em] uppercase">Perspective</h2>  
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-40">  
          
        {/* Featured Cover Story */}  
        <section className="mb-32 group cursor-pointer">  
          <div className="relative aspect-[21/9] overflow-hidden bg-zinc-900 mb-8">  
            {/* Image would go here */}  
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-transform duration-700 group-hover:scale-105" />  
          </div>  
          <div className="max-w-3xl">  
            <span className="text-[10px] tracking-[0.4em] uppercase border-b border-[#d4af37]/30 pb-1 mb-6 inline-block">Featured Insight</span>  
            <h3 className="text-4xl tracking-widest uppercase mb-4 group-hover:text-white transition-colors">The Silent ROI of Seclusion</h3>  
            <p className="text-lg font-light tracking-wide leading-relaxed opacity-80 max-w-2xl">  
              Investment isn't always about the bottom line. It's about the recovery of the self. Discover the tactical advantages of deep-nature sanctuaries.  
            </p>  
          </div>  
        </section>

        {/* Editorial Grid */}  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">  
          {articles.map((article) => (  
            <article key={article.id} className="group cursor-pointer">  
              <div className="aspect-[4/5] bg-zinc-900 mb-6 overflow-hidden">  
                 <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black transition-transform duration-700 group-hover:scale-110" />  
              </div>  
              <span className="text-[9px] tracking-[0.5em] uppercase opacity-60 mb-3 block">{article.category}</span>  
              <h4 className="text-xl tracking-widest uppercase mb-4 group-hover:text-white transition-colors">{article.title}</h4>  
              <p className="text-sm font-light leading-relaxed tracking-wide opacity-70">  
                {article.excerpt}  
              </p>  
            </article>  
          ))}  
        </div>

      </main>  
    </div>  
  );  
};

export default PerspectivePage; 
