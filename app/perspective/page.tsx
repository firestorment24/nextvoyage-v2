// app/perspective/page.tsx (Inverted Version)  
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
    <main className="min-h-screen bg-[#0D0D0D] text-[#E2E0D5] selection:bg-[#E2E0D5] selection:text-[#0D0D0D]">  
      {/* --- Section 1: The Hero --- */}  
      <section className="px-6 pt-32 pb-24 md:pt-48 md:pb-40 max-w-5xl mx-auto text-center">  
        <h1 className="text-4xl md:text-6xl font-serif italic mb-8 leading-tight text-white">  
          The ROI of Reset  
        </h1>  
        <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto opacity-70">  
          We view travel not as a luxury expense, but as a capital investment in the architecture of silence. A strategic recalibration for those whose most non-renewable resource is headspace.  
        </p>  
      </section>

      {/* --- Section 2: The Manifesto (The Core) --- */}  
      <section className="px-6 py-24 border-y border-white/5 bg-[#121212]">  
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">  
          <div className="space-y-4">  
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A69F88]">01. Perspective</span>  
            <h3 className="text-2xl font-serif italic text-white">The Luxury of Invisibility</h3>  
            <p className="text-sm leading-relaxed opacity-60">  
              The modern elite is over-exposed. We specialize in the curation of "blackouts"—moments and places where you are truly invisible to the grid, but entirely present to yourself.  
            </p>  
          </div>  
          <div className="space-y-4">  
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A69F88]">02. Philosophy</span>  
            <h3 className="text-2xl font-serif italic text-white">The Essence of Elsewhere</h3>  
            <p className="text-sm leading-relaxed opacity-60">  
              Elsewhere is not just a destination; it is a mental state. We bridge the gap between the geography of the map and the geography of the mind.  
            </p>  
          </div>  
          <div className="space-y-4">  
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A69F88]">03. Performance</span>  
            <h3 className="text-2xl font-serif italic text-white">Regenerative Value</h3>  
            <p className="text-sm leading-relaxed opacity-60">  
              High performance requires high-fidelity rest. Our "Resets" are designed to return the capacity for deep work and decisive action.  
            </p>  
          </div>  
        </div>  
      </section>

      {/* --- Section 3: The Essays --- */}  
      <section className="px-6 py-24 max-w-6xl mx-auto">  
        <div className="flex justify-between items-end mb-12">  
          <h2 className="text-xs uppercase tracking-[0.3em] font-medium border-b border-white/10 pb-2 text-[#A69F88]">  
            The Editorial Archive  
          </h2>  
        </div>  
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">  
          {essays.map((essay, idx) => (  
            <article key={idx} className="group cursor-pointer">  
              <div className="aspect-[4/5] bg-[#1A1A1A] mb-6 overflow-hidden transition-all duration-700 relative">  
                {/* Visual Placeholder: Imagine grainy, low-exposure photography */}  
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent opacity-40" />  
                <div className="w-full h-full flex items-center justify-center text-[10px] uppercase tracking-widest opacity-10">  
                  Visual Study {idx + 1}  
                </div>  
              </div>  
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#A69F88] mb-2 block">{essay.category}</span>  
              <h4 className="text-xl font-serif mb-3 text-white group-hover:italic group-hover:text-[#E2E0D5] transition-all duration-300">  
                {essay.title}  
              </h4>  
              <p className="text-sm leading-relaxed opacity-50">  
                {essay.excerpt}  
              </p>  
            </article>  
          ))}  
        </div>  
      </section>

      {/* --- Section 4: Footer --- */}  
      <footer className="px-6 py-32 text-center border-t border-white/5">  
        <p className="font-serif italic text-2xl opacity-20 text-[#E2E0D5]">  
          "The world is too much with us; late and soon..."  
        </p>  
      </footer>  
    </main>  
  );  
};

export default PerspectivePage;
