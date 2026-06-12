import React from 'react';  
import Link from 'next/link';

export default function Lobby() {  
  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#f4f4f4] font-light selection:bg-white selection:text-black">  
      {/* Hero Section */}  
      <section className="relative h-[90vh] flex flex-col items-center justify-center px-6 text-center border-b border-white/5">  
        <div className="max-w-4xl space-y-8">  
          <h2 className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4 animate-fade-in">  
            NexVoyage Collective // Private Collection  
          </h2>  
          <h1 className="text-5xl md:text-7xl font-serif italic tracking-tight leading-tight">  
            The Essence of Elsewhere  
          </h1>  
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">  
            A private anthology of the world’s most intentional sanctuaries.   
            Curated for those who seek depth over distance.  
          </p>  
          <div className="pt-8">  
            <Link   
              href="/archive"   
              className="px-8 py-4 border border-white/20 hover:border-white text-sm uppercase tracking-widest transition-all duration-500 bg-transparent hover:bg-white hover:text-black"  
            >  
              Enter the Archive  
            </Link>  
          </div>  
        </div>  
          
        {/* Scroll Indicator */}  
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20">  
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />  
        </div>  
      </section>

      {/* Featured Anthology Section */}  
      <section className="py-32 px-6 max-w-7xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">  
          <div className="space-y-6">  
            <h3 className="text-3xl font-serif italic text-white/90">Curated Intent</h3>  
            <p className="text-white/50 leading-relaxed text-lg">  
              We do not track trends or aggregate listings. Our work is a slow, methodical curation of spaces that possess a singular spirit. Whether it is a cliffside retreat in the Aegean or a brutalist sanctuary in the high desert, each entry in our anthology is vetted for its ability to foster stillness.  
            </p>  
            <div className="pt-4">  
              <Link href="/perspective" className="text-xs uppercase tracking-widest border-b border-white/20 pb-2 hover:border-white transition-colors">  
                Our Perspective  
              </Link>  
            </div>  
          </div>  
            
          <div className="relative aspect-[4/5] bg-white/5 overflow-hidden group">  
            {/* Placeholder for an evocative high-grain image */}  
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />  
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">  
               <span className="text-xs uppercase tracking-[0.3em] bg-black/80 px-4 py-2 backdrop-blur-sm">View Sanctuary</span>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* The Invitation */}  
      <section className="py-32 bg-white/[0.02] border-t border-white/5">  
        <div className="max-w-3xl mx-auto text-center px-6 space-y-10">  
          <h2 className="text-4xl font-serif italic">Initiate Private Curation</h2>  
          <p className="text-white/40 leading-relaxed">  
            Membership and access are handled with the same discretion we apply to our properties.   
            Begin a conversation to explore the full breadth of the collective.  
          </p>  
          <div className="pt-6">  
            <Link   
              href="/reserve"   
              className="inline-block text-xs uppercase tracking-[0.5em] text-white/80 hover:text-white transition-colors"  
            >  
              [ Request Access ]  
            </Link>  
          </div>  
        </div>  
      </section>  
    </main>  
  );  
}  
