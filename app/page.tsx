import React from 'react';

const HomePage = () => {  
  return (  
    <div className="bg-white text-[#1a1a1a] font-sans selection:bg-gray-100">  
      {/* Navigation */}  
      <nav className="flex justify-between items-center px-8 py-10 uppercase tracking-[0.2em] text-[10px] border-b border-gray-50">  
        <div className="font-bold">NexVoyage Collective</div>  
        <div className="space-x-8">  
          <a href="/archive" className="hover:text-gray-400 transition-colors">The Archive</a>  
          <a href="/perspective" className="hover:text-gray-400 transition-colors">The Perspective</a>  
          <a href="/reserve" className="hover:text-gray-400 transition-colors border border-black px-4 py-2">The Reserve</a>  
        </div>  
      </nav>

      {/* Hero Section */}  
      <section className="h-[80vh] flex flex-col justify-center items-center text-center px-4">  
        <h2 className="text-[10px] uppercase tracking-[0.4em] mb-6 text-gray-400">NexVoyage Collective</h2>  
        <h1 className="text-5xl md:text-7xl font-serif italic mb-8 max-w-4xl leading-tight">  
          The ROI of Reset  
        </h1>  
        <p className="text-sm md:text-base max-w-md leading-relaxed tracking-wide text-gray-500">  
          Travel is an investment in clarity. We curate the sanctuaries that deliver the return.  
        </p>  
      </section>

      {/* Philosophy Section */}  
      <section className="py-32 px-8 bg-[#fafafa]">  
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">  
          <div>  
            <h3 className="text-xs uppercase tracking-[0.3em] mb-12 text-gray-400">The Philosophy</h3>  
            <h2 className="text-4xl font-serif leading-snug mb-8">  
              In an era of constant connectivity, silence is the ultimate luxury.  
            </h2>  
          </div>  
          <div className="text-sm leading-[2] text-gray-600 space-y-6">  
            <p>  
              At NexVoyage Collective, we view travel not as an escape, but as a high-performance investment in one's mental and physical well-being.  
            </p>  
            <p>  
              Our vetting standard ensures that every sanctuary in <strong>The Archive</strong> meets the rigorous demands of the global elite. We don't just book rooms; we secure assets for your perspective.  
            </p>  
          </div>  
        </div>  
      </section>

      {/* Sanctuaries Preview */}  
      <section className="py-32 px-8">  
        <div className="text-center mb-20">  
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-gray-400">The Vetting Standard</h3>  
        </div>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">  
          {['Metropolitan', 'Coastal', 'Alpine'].map((type) => (  
            <div key={type} className="group relative aspect-[3/4] bg-gray-100 overflow-hidden cursor-pointer">  
              <div className="absolute inset-0 flex items-center justify-center">  
                <span className="text-xs uppercase tracking-[0.2em] group-hover:tracking-[0.4em] transition-all duration-500">  
                  {type}  
                </span>  
              </div>  
              {/* Image placeholder - would be your high-res sanctuary shots */}  
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />  
            </div>  
          ))}  
        </div>  
      </section>

      {/* Footer */}  
      <footer className="py-20 px-8 border-t border-gray-100 text-center">  
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400">  
          © 2026 NexVoyage Collective. All Rights Reserved.  
        </div>  
        <div className="mt-6 space-x-6 text-[9px] uppercase tracking-widest">  
          <a href="/legal" className="hover:underline">Privacy</a>  
          <a href="/legal" className="hover:underline">Terms</a>  
        </div>  
      </footer>  
    </div>  
  );  
};

export default HomePage;  
