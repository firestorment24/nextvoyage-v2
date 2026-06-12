import React from 'react';

export default function MandatePage() {  
return (  
  <main className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 md:p-10">  
    {/* Background Gradient Overlay */}  
    <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_#1a1a1a_0%,_#050505_100%)] pointer-events-none" />

    <section className="relative z-10 max-w-[1000px] w-full border border-[#d4af37]/10 bg-black/40 backdrop-blur-sm p-10 md:p-24 shadow-2xl overflow-hidden">  
        
      {/* Decorative Brass Rule */}  
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-[#d4af37] to-transparent opacity-50" />

      <header className="text-center mt-20 mb-24">  
        <h1 className="font-serif text-5xl md:text-7xl text-[#d4af37] uppercase tracking-[0.7em] font-light mb-8 leading-none">  
          The Mandate  
        </h1>  
        <p className="font-sans text-[0.7rem] uppercase tracking-[0.5em] text-white/40 font-extralight">  
          A Statement of Intent  
        </p>  
      </header>

      <div className="space-y-20">  
        {/* The Vision */}  
        <div className="max-w-2xl mx-auto text-center space-y-6">  
          <h2 className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-[#d4af37] opacity-80">The Vision</h2>  
          <p className="font-serif text-2xl md:text-3xl text-[#f0f0f0] font-light leading-relaxed italic">  
            "To define the standard of the extraordinary—delivering seamless, personalized journeys for those who view travel as a legacy, not a destination."  
          </p>  
        </div>

        {/* The Divider */}  
        <div className="flex justify-center items-center space-x-4">  
          <div className="h-[1px] w-12 bg-[#d4af37]/20" />  
          <div className="w-1.5 h-1.5 rotate-45 border border-[#d4af37]/40" />  
          <div className="h-[1px] w-12 bg-[#d4af37]/20" />  
        </div>

        {/* The Mission */}  
        <div className="max-w-3xl mx-auto space-y-8">  
          <h2 className="font-sans text-center text-[0.6rem] uppercase tracking-[0.3em] text-[#d4af37] opacity-80">The Mission</h2>  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/70 font-light leading-loose tracking-wide text-sm">  
            <p>  
              We design refined, stress-free travel experiences that inspire exploration and elevate comfort. For the traveler who expects more, we provide a sanctuary of service and a meticulous eye for the details that matter.  
            </p>  
            <p>  
              By beginning the dialogue, we create lasting memories and high-fidelity transitions between the world you know and the world we manifest. Excellence is our only engine.  
            </p>  
          </div>  
        </div>  
      </div>

      {/* Signature Graphic */}  
      <footer className="mt-32 text-center">  
        <div className="inline-block border border-[#d4af37]/30 px-8 py-3">  
          <p className="font-sans text-[0.5rem] uppercase tracking-[0.6em] text-[#d4af37]">  
            NexVoyage Collective  
          </p>  
        </div>  
      </footer>  
    </section>

    {/* Subtle Page Navigation Clue */}  
    <div className="relative z-10 mt-12 flex space-x-8 opacity-30 hover:opacity-100 transition-opacity duration-1000">  
        <span className="text-[0.6rem] uppercase tracking-widest text-white">01. Mandate</span>  
        <span className="text-[0.6rem] uppercase tracking-widest text-white/50">02. Manifest</span>  
        <span className="text-[0.6rem] uppercase tracking-widest text-white/50">03. Reserve</span>  
    </div>  
  </main>  
);  
}  
