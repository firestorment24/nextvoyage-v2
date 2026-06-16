// app/perspective/page.tsx  
import React from 'react';  
import Link from 'next/link';  
import { PERSPECTIVE_POSTS } from '@/lib/data/perspectives';

export default function PerspectivePage() {  
  // Bento-specific sizing logic (4-column base)  
  const sizeClasses: { [key: string]: string } = {  
    small: "col-span-4 md:col-span-1 row-span-1",    // 1x1 box  
    medium: "col-span-4 md:col-span-2 row-span-1",   // 2x1 landscape  
    large: "col-span-4 md:col-span-2 row-span-2",    // 2x2 featured  
    tall: "col-span-4 md:col-span-1 row-span-2",      // 1x2 portrait  
  };

  return (  
    <div className="min-h-screen bg-[#050505] text-stone-300 selection:bg-[#d4af37] selection:text-black">  
      {/* Editorial Header */}  
      <header className="pt-32 pb-20 px-8 border-b border-stone-900/50">  
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">  
          <div className="space-y-4">  
            <div className="flex items-center gap-4">  
              <div className="h-px w-12 bg-[#d4af37]" />  
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37] font-bold">Volume I: The Collective Perspective</span>  
            </div>  
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white leading-[0.85]">  
              EDITORIAL<br />  
              <span className="italic font-serif ml-12 text-[#d4af37]">ARCHIVE</span>  
            </h1>  
          </div>  
          <div className="max-w-sm pb-2">  
            <p className="text-stone-500 font-light text-sm leading-relaxed border-l border-stone-800 pl-6">  
              A curated collection of dispatches, manifestos, and orchestrations for the high-performance traveler.  
            </p>  
          </div>  
        </div>  
      </header>

      {/* The Bento Grid */}  
      <main className="max-w-7xl mx-auto p-6 lg:p-12">  
        <div className="grid grid-cols-4 gap-4 auto-rows-[220px]">  
          {PERSPECTIVE_POSTS.map((post) => (  
            <Link  
              key={post.id}  
              href={`/perspective/${post.id}`}  
              className={`${sizeClasses[post.size] || sizeClasses.small} group relative overflow-hidden bg-[#111] border border-stone-800/50 transition-all duration-700 hover:border-[#d4af37]/40 hover:z-10`}  
            >  
              {/* Media Container */}  
              <div   
                className="absolute inset-0 bg-cover bg-center grayscale brightness-50 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-75"  
                style={{ backgroundImage: `url(${post.image})` }}  
              />  
                
              {/* Gradients & Borders */}  
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />  
              <div className="absolute inset-2 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Content Overlay */}  
              <div className="absolute inset-0 p-6 flex flex-col justify-end">  
                <div className="mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">  
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#d4af37] font-bold px-2 py-1 bg-black/80 backdrop-blur-sm border border-[#d4af37]/20">  
                    {post.category}  
                  </span>  
                </div>  
                  
                <h3 className={`font-light text-white leading-tight group-hover:text-[#d4af37] transition-colors duration-500 ${post.size === 'large' ? 'text-3xl' : 'text-lg md:text-xl'}`}>  
                  {post.title}  
                </h3>

                {/* Only show subtitle for non-small boxes */}  
                {post.size !== 'small' && (  
                  <p className="mt-3 text-stone-400 text-xs font-light line-clamp-2 max-w-[280px] opacity-0 group-hover:opacity-100 transition-opacity duration-700">  
                    {post.subtitle}  
                  </p>  
                )}

                <div className="mt-4 flex items-center gap-3 text-[10px] text-stone-500 uppercase tracking-widest">  
                  <span className="group-hover:text-stone-300 transition-colors">{post.date}</span>  
                  <div className="h-px w-0 group-hover:w-8 bg-[#d4af37] transition-all duration-500" />  
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#d4af37]">Read</span>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </main>

      {/* Magazine Footer */}  
      <footer className="py-32 px-8 border-t border-stone-900 flex flex-col items-center justify-center text-center">  
        <div className="w-12 h-[1px] bg-stone-800 mb-12" />  
        <h2 className="text-stone-500 text-xs uppercase tracking-[0.6em] mb-12">The NexVoyage Collective</h2>  
        <Link   
          href="/invitation"  
          className="group px-12 py-5 border border-stone-800 text-white hover:bg-white hover:text-black transition-all duration-500 overflow-hidden relative"  
        >  
          <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold">Begin the Dialogue</span>  
        </Link>  
      </footer>  
    </div>  
  );  
}  
