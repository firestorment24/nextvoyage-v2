import React from 'react';  
import Link from 'next/link';  
import { notFound } from 'next/navigation';  
import { SANCTUARY_DATA } from '@/data/sanctuaries';

interface PageProps {  
  params: {  
    id: string;  
  };  
}

export default function SanctuaryPage({ params }: PageProps) {  
  const sanctuary = SANCTUARY_DATA.find((s) => s.id === params.id);

  if (!sanctuary) {  
    notFound();  
  }

  return (  
    <div className="bg-[#0A0A0A] text-white selection:bg-[#A68966]/30">  
      {/* Fixed Navigation Bar */}  
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">  
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">  
          <Link   
            href="/"   
            className="group flex items-center gap-3 text-sm tracking-[0.2em] uppercase font-medium transition-colors hover:text-[#A68966]"  
          >  
            <span className="text-lg transition-transform group-hover:-translate-x-1">←</span>  
            Back to Collection  
          </Link>  
          <div className="hidden md:block text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">  
            NexVoyage Collective / {sanctuary.tag}  
          </div>  
        </div>  
      </nav>

      {/* Hero Section */}  
      <section className="relative h-[80vh] w-full overflow-hidden">  
        <div className="absolute inset-0">  
          <img  
            src={sanctuary.heroImage}  
            alt={sanctuary.name}  
            className="w-full h-full object-cover"  
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0A0A0A]" />  
        </div>

        <div className="absolute inset-0 flex flex-col justify-end pb-20">  
          <div className="max-w-7xl mx-auto px-6 w-full">  
            <span className="inline-block text-[#A68966] text-xs tracking-[0.3em] uppercase mb-4">  
              {sanctuary.tag}  
            </span>  
            <h1 className="text-5xl md:text-8xl font-serif leading-none mb-6 max-w-4xl italic">  
              {sanctuary.name}  
            </h1>  
            <p className="text-lg md:text-xl font-light text-white/60 max-w-2xl uppercase tracking-widest">  
              {sanctuary.loc}  
            </p>  
          </div>  
        </div>  
      </section>

      {/* Main Content Area */}  
      <div className="relative z-10 bg-[#0A0A0A]">  
        {/* Narrative Section */}  
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-40">  
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">  
            {/* Metadata Sidebar */}  
            <div className="lg:col-span-4">  
              <div className="lg:sticky lg:top-32 space-y-12">  
                <div>  
                  <h2 className="text-[10px] tracking-[0.5em] uppercase text-[#A68966] mb-6 font-bold">  
                    The Experience  
                  </h2>  
                  <div className="space-y-6 text-xs tracking-[0.2em] text-white/60 uppercase">  
                    <div>  
                      <p className="text-white/30 mb-1">Location</p>  
                      <p className="text-white">{sanctuary.loc}</p>  
                    </div>  
                    <div>  
                      <p className="text-white/30 mb-1">Classification</p>  
                      <p className="text-white">Curated Sanctuary</p>  
                    </div>  
                  </div>  
                </div>  
              </div>  
            </div>

            {/* Narrative Content */}  
            <div className="lg:col-span-8">  
              <div className="max-w-2xl">  
                <p className="text-2xl md:text-4xl font-serif leading-tight text-white italic mb-12">  
                  "Designed for those who seek the profound over the popular."  
                </p>  
                <div className="h-px w-20 bg-[#A68966] mb-12" />  
                <div className="space-y-8 text-lg text-white/70 leading-relaxed font-light">  
                  <p>  
                    Every detail here has been scrutinized to meet the high-stakes expectations of our collective.   
                    From the orientation of the morning light to the tactile response of the interior finishes,   
                    this is a space that doesn't just house a traveler—it transforms their perspective.  
                  </p>  
                  <p>  
                    As part of the NexVoyage "Guardian Layer," your presence here is managed with absolute   
                    discretion and precision. We curate not just the stay, but the entire journey—ensuring   
                    the ROI of your reset is protected at all costs.  
                  </p>  
                </div>  
              </div>  
            </div>  
          </div>  
        </section>

        {/* The Footer / CTA - Wrapped in a distinct section with visible padding */}  
        <section className="bg-[#050505] border-t border-white/5 pt-32 pb-40 text-center">  
          <div className="max-w-4xl mx-auto px-6">  
            <h3 className="font-serif text-4xl md:text-6xl italic text-white mb-12">  
              Ready to transcend?  
            </h3>  
            <Link   
              href={`/sanctuaries/${sanctuary.id}/inquiry`}  
              className="inline-block px-12 py-6 bg-[#A68966] text-white text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-white hover:text-black transition-all duration-500 transform hover:-translate-y-1"  
            >  
              Secure Arrangement  
            </Link>  
            <div className="mt-16 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">  
              <p className="text-[9px] tracking-[0.3em] text-white/20 uppercase">  
                © 2026 NexVoyage Collective  
              </p>  
              <p className="text-[9px] tracking-[0.3em] text-[#A68966] uppercase font-bold">  
                Guardian Response Active  
              </p>  
            </div>  
          </div>  
        </section>  
      </div>  
    </div>  
  );  
}  
