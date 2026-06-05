import React from 'react';  
import Link from 'next/link';

const IconArrowLeft = () => (  
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>  
);

export default function CollectivePage() {  
return (  
  <main className="min-h-screen bg-[#1a1a1a] text-[#faf9f6] font-light">  
    {/* Minimal Nav */}  
    <nav className="p-8 flex justify-between items-center">  
      <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">  
        <IconArrowLeft />  
        <span className="text-xs uppercase tracking-widest font-light opacity-60 text-white">Exit</span>  
      </Link>  
      <div className="text-xl tracking-[0.2em] font-extralight uppercase text-white">NexVoyage</div>  
    </nav>

    {/* Narrative Section */}  
    <section className="max-w-4xl mx-auto px-8 py-32 space-y-24">  
      <div className="space-y-8">  
        <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter lowercase italic leading-tight">  
          Beyond the itinerary.  
        </h1>  
        <p className="text-xl md:text-2xl leading-relaxed font-extralight text-stone-400">  
          NexVoyage Collective is a private engine for the modern traveler. We don&apos;t just book rooms; we manage movement, access, and the subtle details that define a journey.  
        </p>  
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-stone-800 pt-16">  
        <div className="space-y-4">  
          <h2 className="text-xs uppercase tracking-[0.4em] text-stone-500">The Access</h2>  
          <p className="text-stone-300 leading-relaxed font-light">  
            Through our direct partnerships with GMs at Aman, Belmond, and Ritz-Carlton Reserve, our clients are recognized long before they arrive.  
          </p>  
        </div>  
        <div className="space-y-4">  
          <h2 className="text-xs uppercase tracking-[0.4em] text-stone-500">The Curation</h2>  
          <p className="text-stone-300 leading-relaxed font-light">  
            We operate on a &quot;Quiet Luxury&quot; ethos. No noise, no clutter—only the properties and routes that actually matter.  
          </p>  
        </div>  
      </div>

      <div className="pt-12 text-center">  
        <Link   
          href="/reserve"  
          className="inline-block border border-stone-700 px-12 py-5 text-[10px] uppercase tracking-[0.5em] hover:bg-[#faf9f6] hover:text-[#1a1a1a] transition-all duration-700"  
        >  
          Request Membership  
        </Link>  
      </div>  
    </section>

    {/* Dark Footer */}  
    <footer className="py-20 border-t border-stone-900 text-center text-stone-600">  
      <p className="text-[10px] uppercase tracking-widest">NexVoyage Collective | Fora Reserve</p>  
    </footer>  
  </main>  
);  
}  
