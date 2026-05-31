import React from 'react';

const ArchivePage = () => {  
  const sanctuaries = [  
    { name: 'Metropolitan', description: 'Curated urban high-performance hubs.' },  
    { name: 'Coastal', description: 'Shoreline silence and architectural clarity.' },  
    { name: 'Alpine', description: 'High-altitude seclusion and perspective.' },  
    { name: 'Desert', description: 'Arid minimalism and vast horizons.' },  
    { name: 'Island', description: 'Private latitudes for total disconnection.' },  
    { name: 'Rural', description: 'Refined pastoral retreats and estate stays.' },  
    { name: 'Wellness', description: 'Scientific restoration and physical resets.' },  
    { name: 'Historic', description: 'Cultural gravity and timeless environments.' },  
    { name: 'Safari', description: 'Raw nature met with ultra-luxury vetting.' }  
  ];

  return (  
    <div className="bg-white text-[#1a1a1a] font-sans min-h-screen">  
      {/* Navigation */}  
      <nav className="flex justify-between items-center px-8 py-10 uppercase tracking-[0.2em] text-[10px] border-b border-gray-50">  
        <div className="font-bold"><a href="/">NexVoyage Collective</a></div>  
        <div className="space-x-8">  
          <a href="/archive" className="text-gray-400">The Archive</a>  
          <a href="/perspective" className="hover:text-gray-400 transition-colors">The Perspective</a>  
          <a href="/reserve" className="hover:text-gray-400 transition-colors border border-black px-4 py-2">The Reserve</a>  
        </div>  
      </nav>

      {/* Header */}  
      <header className="py-24 px-8 max-w-4xl mx-auto text-center">  
        <h1 className="text-4xl md:text-5xl font-serif italic mb-6">The Archive</h1>  
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-8">Curated Destination Guides</p>  
        <div className="h-px w-20 bg-black mx-auto"></div>  
      </header>

      {/* Archive Grid */}  
      <section className="px-8 pb-32 max-w-7xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">  
          {sanctuaries.map((item) => (  
            <div key={item.name} className="group cursor-pointer">  
              <div className="aspect-[4/5] bg-[#fafafa] mb-8 overflow-hidden relative">  
                {/* Image Placeholder */}  
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/5">  
                  <span className="text-[9px] uppercase tracking-[0.3em]">View Guide</span>  
                </div>  
              </div>  
              <h3 className="font-serif text-2xl mb-3">{item.name}</h3>  
              <p className="text-sm text-gray-500 leading-relaxed font-light tracking-wide italic">  
                {item.description}  
              </p>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* Footer */}  
      <footer className="py-20 px-8 border-t border-gray-100 text-center">  
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400">  
          © 2026 NexVoyage Collective. All Rights Reserved.  
        </div>  
      </footer>  
    </div>  
  );  
};

export default ArchivePage;  
