import React from 'react';

export default function SilentROIPage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] selection:bg-[#C5A059] selection:text-black">  
      <article className="pt-48 pb-32 px-6 max-w-3xl mx-auto">  
        <header className="mb-20 text-center">  
          <p className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] mb-6">Volume 01 / Manifesto</p>  
          <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight italic leading-tight">  
            The Silent ROI  
          </h1>  
          <div className="h-[1px] w-24 bg-[#C5A059]/30 mx-auto mb-8" />  
          <p className="text-white/40 uppercase tracking-widest text-[11px]">By Daryl Clark — June 2026</p>  
        </header>

        <div className="space-y-12 text-xl md:text-2xl font-light leading-relaxed text-white/80 font-serif">  
          <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-[#C5A059] first-letter:mr-3 first-letter:float-left">  
            In the modern landscape of high-stakes enterprise, we have optimized every second of our waking lives.   
            We track dividends, we measure quarterly growth, and we obsess over the velocity of our capital.   
            Yet, the most critical asset in any high-net-worth portfolio is often the most neglected: the owner’s capacity for silence.  
          </p>

          <p>  
            The "Silent ROI" is the compounded interest of a mind that has been allowed to go offline.   
            It is the strategic advantage gained when you step into a sanctuary where the world cannot find you.   
            When the noise of the market is replaced by the rhythmic pulse of the South Pacific or the absolute stillness of a metropolitan glass tower, something happens to the architecture of thought.  
          </p>

          <blockquote className="border-l-2 border-[#C5A059] pl-8 my-16 italic text-3xl text-white py-4">  
            "The ultimate luxury isn't access. It is the ability to be inaccessible."  
          </blockquote>

          <p>  
            At NexVoyage, we don't view travel as a luxury expense. We view it as a necessary re-calibration of a human engine.   
            A week of "absolute nothing" isn't a lapse in productivity—it is the catalyst for the next decade of vision.   
            It is where the next pivot is seen, where the next acquisition is weighed, and where the clarity of the "global soul" is restored.  
          </p>

          <p>  
            We architect these sanctuaries because we know that for the visionary, the most expensive thing in the world is a distraction.   
            The ROI of rest isn't found in a receipt; it's found in the power of your next move.  
          </p>  
        </div>

        <footer className="mt-32 pt-12 border-t border-white/10 flex justify-between items-center">  
          <a href="/perspective" className="text-xs uppercase tracking-widest text-white/40 hover:text-[#C5A059] transition-colors">  
            ← Back to Index  
          </a>  
          <a href="/concierge" className="text-xs uppercase tracking-widest bg-[#C5A059] text-black px-6 py-3 hover:bg-white transition-colors">  
            Secure Inquiry  
          </a>  
        </footer>  
      </article>  
    </main>  
  );  
}  
