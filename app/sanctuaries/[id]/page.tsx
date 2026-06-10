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
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#A68966]/30">  
      {/* Fixed Navigation Bar */}  
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">  
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">  
          <Link   
            href="/"   
            className="group flex items-center gap-3 text-sm tracking-[0.2em] uppercase font-medium transition-colors hover:text-[#A68966]"  
          >  
            <span className="text-lg transition-transform group-hover:-translate-x-1">←</span>  
            Back to Collection  
          </Link>  
          <div className="hidden md:block text-[10px] tracking-[0.4em] uppercase text-white/40">  
            NexVoyage Collective / {sanctuary.tag}  
          </div>  
        </div>  
      </nav>

      {/* Hero Section */}  
      <section className="relative h-[85vh] w-full overflow-hidden">  
        <div className="absolute inset-0">  
          <img  
            src={sanctuary.heroImage}  
            alt={sanctuary.name}  
            className="w-full h-full object-cover"  
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0A0A0A]" />  
        </div>

        <div className="absolute inset-0 flex flex-col justify-end pb-24">  
          <div className="max-w-7xl mx-auto px-6 w-full">  
            <span className="inline-block text-[#A68966] text-xs tracking-[0.3em] uppercase mb-4 animate-fade-in">  
              {sanctuary.tag}  
            </span>  
            <h1 className="text-6xl md:text-8xl font-serif leading-none mb-6 max-w-4xl italic">  
              {sanctuary.name}  
            </h1>  
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl">  
              {sanctuary.loc}  
            </p>  
          </div>  
        </div>  
      </section>

      {/* Narrative Section */}  
      <section className="max-w-7xl mx-auto px-6 py-32">  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">  
          <div className="lg:col-span-4">  
            <div className="sticky top-32">  
              <h2 className="text-[10px] tracking-[0.5em] uppercase text-[#A68966] mb-8 font-bold">  
                The Experience  
              </h2>  
              <div className="space-y-6 text-sm tracking-wide text-white/60 leading-relaxed uppercase">  
                <div>  
                  <p className="text-white/40 mb-1">Location</p>  
                  <p className="text-white">{sanctuary.loc}</p>  
                </div>  
                <div>  
                  <p className="text-white/40 mb-1">Status</p>  
                  <p className="text-white">Curated Collection</p>  
                </div>  
                <div>  
                  <p className="text-white/40 mb-1">Inquiry</p>  
                  <p className="text-white">Priority Access Only</p>  
                </div>  
              </div>  
            </div>  
          </div>

          <div className="lg:col-span-8">  
            <div className="prose prose-invert prose-lg max-w-none">  
              <p className="text-2xl md:text-3xl font-serif leading-relaxed text-white/90 italic mb-12">  
                Designed for those who seek the profound over the popular. This sanctuary represents the pinnacle of our {sanctuary.tag.toLowerCase()} portfolio.  
              </p>  
              <div className="h-px w-24 bg-[#A68966] mb-12" />  
              <p className="text-lg text-white/70 leading-relaxed font-light">  
                Every detail here has been scrutinized to meet the high-stakes expectations of our collective.   
                From the orientation of the morning light to the tactile response of the interior finishes,   
                this is a space that doesn't just house a traveler—it transforms their perspective.  
              </p>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* High-Stakes Footer Call to Action */}  
      <footer className="border-t border-white/5 py-24 bg-[#050505]">  
        <div className="max-w-7xl mx-auto px-6 text-center">  
          <h3 className="font-serif text-4xl md:text-5xl italic mb-8">Ready to transcend?</h3>  
          <button className="px-12 py-5 bg-[#A68966] text-white text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#8E7455] transition-colors">  
            Secure This Arrangement  
          </button>  
        </div>  
      </footer>  
    </main>  
  );  
}  
