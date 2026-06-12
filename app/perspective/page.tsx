// app/perspective/page.tsx  
import React from 'react';

const PerspectivePage = () => {  
  const essays = [  
    {  
      title: "The Architecture of Silence",  
      excerpt: "In a world of constant noise, the ultimate luxury is a vacuum. How we curate spaces where the world simply cannot reach you.",  
      category: "Philosophy",  
    },  
    {  
      title: "Wealth Preservation: The Soul",  
      excerpt: "True asset protection extends beyond the balance sheet. It requires the deliberate preservation of one’s own clarity and perspective.",  
      category: "Theory",  
    },  
    {  
      title: "In Search of the Unplugged Horizon",  
      excerpt: "The geography of a reset. Why certain landscapes possess the inherent power to recalibrate the human nervous system.",  
      category: "Exploration",  
    }  
  ];

  return (  
    <main className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] selection:bg-[#E2E0D5]">  
      {/* --- Section 1: The Hero (Opening Statement) --- */}  
      <section className="px-6 pt-32 pb-24 md:pt-48 md:pb-40 max-w-5xl mx-auto text-center">  
        <h1 className="text-4xl md:text-6xl font-serif italic mb-8 leading-tight">  
          The ROI of Reset  
        </h1>  
        <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto opacity-80">  
          We view travel not as a luxury expense, but as a capital investment in the architecture of silence. A strategic recalibration for those whose most non-renewable resource is headspace.  
        </p>  
      </section>

      {/* --- Section 2: The Manifesto (The Core) --- */}  
      <section className="px-6 py-24 border-t border-black/5 bg-white">  
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">  
          <div className="space-y-4">  
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">01. Perspective</span>  
            <h3 className="text-2xl font-serif italic">The Luxury of Invisibility</h3>  
            <p className="text-sm leading-relaxed opacity-70">  
              The modern elite is over-exposed. We specialize in the curation of "blackouts"—moments and places where you are truly invisible to the grid, but entirely present to yourself.  
            </p>  
          </div>  
          <div className="space-y-4">  
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">02. Philosophy</span>  
            <h3 className="text-2xl font-serif italic">The Essence of Elsewhere</h3>  
            <p className="text-sm leading-relaxed opacity-70">  
              Elsewhere is not just a destination; it is a mental state. We bridge the gap between the geography of the map and the geography of the mind.  
            </p>  
          </div>  
          <div className="space-y-4">  
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">03. Performance</span>  
            <h3 className="text-2xl font-serif italic">Regenerative Value</h3>  
            <p className="text-sm leading-relaxed opacity-70">  
              High performance requires high-fidelity rest. Our "Resets" are designed to return the capacity for deep work and decisive action.  
            </p>  
          </div>  
        </div>  
      </section>

      {/* --- Section 3: The Essays (The Feed) --- */}  
      <section className="px-6 py-24 max-w-6xl mx-auto">  
        <div className="flex justify-between items-end mb-12">  
          <h2 className="text-xs uppercase tracking-[0.3em] font-medium border-b border-black/10 pb-2">  
            The Editorial Archive  
          </h2>  
        </div>  
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">  
          {essays.map((essay, idx) => (  
            <article key={idx} className="group cursor-pointer">  
              <div className="aspect-[4/5] bg-[#E2E0D5] mb-6 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">  
                {/* Placeholder for evocative, grainy imagery */}  
                <div className="w-full h-full flex items-center justify-center text-[10px] uppercase tracking-widest opacity-20">  
                  Visual Study {idx + 1}  
                </div>  
              </div>  
              <span className="text-[10px] uppercase tracking-[0.15em] opacity-40 mb-2 block">{essay.category}</span>  
              <h4 className="text-xl font-serif mb-3 group-hover:italic transition-all duration-300">  
                {essay.title}  
              </h4>  
              <p className="text-sm leading-relaxed opacity-60">  
                {essay.excerpt}  
              </p>  
            </article>  
          ))}  
        </div>  
      </section>

      {/* --- Section 4: Footer Tagline --- */}  
      <footer className="px-6 py-32 text-center border-t border-black/5">  
        <p className="font-serif italic text-2xl opacity-30">  
          "The world is too much with us; late and soon..."  
        </p>  
      </footer>  
    </main>  
  );  
};

export default PerspectivePage;  
