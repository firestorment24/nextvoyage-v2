// app/journal/page.tsx  
import React from 'react';

const JournalPage = () => {  
  const dispatches = [  
    {  
      id: "01",  
      location: "THE ATLAS MOUNTAINS",  
      coordinates: "31.0546° N, 7.1352° W",  
      title: "The Architecture of Dust",  
      imageLabel: "Visual Study: 018",  
      date: "Spring 2026",  
    },  
    {  
      id: "02",  
      location: "KYOTO, JAPAN",  
      coordinates: "35.0116° N, 135.7681° E",  
      title: "Silence as a Material",  
      imageLabel: "Visual Study: 042",  
      date: "Winter 2025",  
    },  
    {  
      id: "03",  
      location: "THE AEGEAN SEA",  
      coordinates: "36.3932° N, 25.4615° E",  
      title: "The Indigo Hour",  
      imageLabel: "Visual Study: 009",  
      date: "Summer 2026",  
    },  
    {  
      id: "04",  
      location: "REYKJAVÍK, ICELAND",  
      coordinates: "64.1265° N, 21.8174° W",  
      title: "The Edge of the Map",  
      imageLabel: "Visual Study: 112",  
      date: "Autumn 2025",  
    }  
  ];

  return (  
    <main className="min-h-screen bg-[#0D0D0D] text-[#E2E0D5] selection:bg-[#E2E0D5] selection:text-[#0D0D0D] pb-32">  
      {/* --- Header --- */}  
      <header className="px-6 pt-32 pb-20 md:pt-48 md:pb-32 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-baseline gap-8">  
        <div>  
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#A69F88] block mb-4">Volume I</span>  
          <h1 className="text-5xl md:text-7xl font-serif italic text-white">Dispatches</h1>  
        </div>  
        <p className="max-w-xs text-sm leading-relaxed opacity-50 font-light italic">  
          Fragments of feeling from the edges of our map. A visual record of the search for the essence of elsewhere.  
        </p>  
      </header>

      {/* --- The Journal Feed (Staggered Layout) --- */}  
      <section className="px-6 max-w-7xl mx-auto space-y-32 md:space-y-64">  
        {dispatches.map((item, idx) => (  
          <div   
            key={item.id}   
            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}  
          >  
            {/* The Image Wrapper */}  
            <div className="w-full md:w-3/5 group cursor-pointer overflow-hidden">  
              <div className="aspect-[16/9] md:aspect-[4/3] bg-[#1A1A1A] relative overflow-hidden transition-all duration-1000 grayscale hover:grayscale-0">  
                {/* Visual Placeholder: Imagine a very grainy, high-contrast shot of a mountain or a coastline */}  
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />  
                <div className="w-full h-full flex items-center justify-center text-[10px] uppercase tracking-[0.3em] opacity-10">  
                  {item.imageLabel}  
                </div>  
              </div>  
            </div>

            {/* The Context */}  
            <div className="w-full md:w-2/5 space-y-6">  
              <div className="space-y-1">  
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#A69F88]">{item.location}</span>  
                <p className="text-[9px] font-mono opacity-30 tracking-widest">{item.coordinates}</p>  
              </div>  
                
              <h2 className="text-3xl md:text-4xl font-serif text-white italic leading-tight">  
                {item.title}  
              </h2>  
                
              <div className="pt-6 border-t border-white/5 flex justify-between items-center">  
                <span className="text-[10px] uppercase tracking-widest opacity-40">{item.date}</span>  
                <button className="text-[10px] uppercase tracking-[0.3em] text-[#A69F88] hover:text-white transition-colors duration-300 group flex items-center gap-2">  
                  View Entry  
                  <span className="group-hover:translate-x-1 transition-transform">→</span>  
                </button>  
              </div>  
            </div>  
          </div>  
        ))}  
      </section>

      {/* --- Bottom Navigation / Call to Action --- */}  
      <footer className="mt-64 px-6 text-center">  
        <div className="max-w-xl mx-auto border-t border-white/10 pt-20">  
          <p className="font-serif italic text-2xl text-white mb-8">Ready to define your own Elsewhere?</p>  
          <a href="/inquiry" className="inline-block text-[10px] uppercase tracking-[0.5em] text-[#A69F88] hover:text-white transition-all border border-[#A69F88]/30 px-12 py-4 hover:bg-[#A69F88]/5">  
            Request Access  
          </a>  
        </div>  
      </footer>  
    </main>  
  );  
};

export default JournalPage;  
