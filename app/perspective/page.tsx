import React from 'react';  
import Link from 'next/link';

export default function PerspectivePage() {  
  const essays = [  
    {  
      volume: "01",  
      title: "The Silent ROI",  
      slug: "the-silent-roi",  
      author: "D. Clark",  
      description: "Why the ultimate luxury investment isn't a property—it's a week of absolute, uninterrupted nothing.",  
      tag: "Manifesto"  
    },  
    {  
      volume: "02",  
      title: "The Architecture of Calm",  
      slug: "#", // Not built yet  
      author: "D. Clark",  
      description: "An exploration into the tactile reality of seclusion and why physical environment dictates mental clarity.",  
      tag: "Philosophy"  
    }  
  ];

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] selection:bg-[#C5A059] selection:text-black">  
      <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto">  
        <header className="mb-24 border-b border-white/10 pb-12">  
          <p className="text-[#C5A059] uppercase tracking-[0.3em] text-xs mb-4">Volume Index</p>  
          <h1 className="text-6xl md:text-8xl font-serif mb-6 tracking-tight italic">The Perspective</h1>  
          <p className="text-xl text-white/60 max-w-2xl font-light leading-relaxed">  
            Intellectual observations on the intersection of privacy, wealth preservation, and the global soul.  
          </p>  
        </header>

        <div className="grid gap-20">  
          {essays.map((essay) => (  
            <Link key={essay.volume} href={`/perspective/${essay.slug}`} className="group block">  
              <article className="flex flex-col md:flex-row gap-8 items-baseline">  
                <span className="text-[#C5A059] font-mono text-sm tracking-widest">{essay.volume} — {essay.tag}</span>  
                <div className="flex-1">  
                  <h2 className="text-4xl md:text-5xl font-serif mb-4 group-hover:italic transition-all duration-500">  
                    {essay.title}  
                  </h2>  
                  <p className="text-lg text-white/50 max-w-xl mb-6 leading-relaxed">  
                    {essay.description}  
                  </p>  
                  <span className="text-xs uppercase tracking-widest border-b border-white/20 pb-1 group-hover:border-[#C5A059] transition-colors">  
                    Read Essay →  
                  </span>  
                </div>  
                <span className="hidden md:block text-white/20 uppercase tracking-tighter text-sm italic">Written by {essay.author}</span>  
              </article>  
            </Link>  
          ))}  
        </div>  
      </section>  
    </main>  
  );  
}  
