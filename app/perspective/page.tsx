// app/perspective/page.tsx  
import React from 'react';  
import Link from 'next/link';  
import { PERSPECTIVE_POSTS } from '@/lib/data/perspectives';

export default function PerspectivePage() {  
// High-end magazine spanning logic for a 12-column grid  
const sizeClasses: { [key: string]: string } = {  
  small: "col-span-12 md:col-span-3 row-span-1",  
  medium: "col-span-12 md:col-span-6 row-span-1",  
  large: "col-span-12 md:col-span-6 row-span-2",  
};

return (  
  <div className="min-h-screen bg-[#050505] text-stone-300 selection:bg-[#d4af37] selection:text-black font-sans">  
    {/* Navigation/Header Overlay */}  
    <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent z-50" />

    {/* Editorial Header */}  
    <header className="pt-32 pb-20 px-8 border-b border-stone-900">  
      <div className="max-w-7xl mx-auto">  
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">  
          <div className="max-w-3xl">  
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#d4af37] font-bold mb-6">  
              The Collective Journal / Vol. 01  
            </h2>  
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white leading-none">  
              THE <span className="italic font-serif">PERSPECTIVE</span>  
            </h1>  
          </div>  
          <div className="max-w-xs border-l border-stone-800 pl-6 hidden md:block">  
            <p className="text-stone-500 text-sm font-light leading-relaxed">  
              Dispatches on high-performance living, architectural sanctuaries, and the protocols of the elite circuit.  
            </p>  
          </div>  
        </div>  
      </div>  
    </header>

    {/* The Magazine Grid */}  
    <main className="max-w-[1400px] mx-auto p-8 lg:p-16">  
      <div className="grid grid-cols-12 gap-6 auto-rows-[280px]">  
        {PERSPECTIVE_POSTS.map((post) => (  
          <Link  
            key={post.id}  
            href={`/perspective/${post.id}`}  
            className={`${sizeClasses[post.size] || sizeClasses.small} group relative overflow-hidden bg-[#0a0a0a] border border-stone-900 transition-all duration-700 hover:border-[#d4af37]/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)]`}  
          >  
            {/* Editorial Image Treatment */}  
            <div   
              className="absolute inset-0 bg-cover bg-center grayscale contrast-125 brightness-50 transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-75"  
              style={{ backgroundImage: `url(${post.image})` }}  
            />  
              
            {/* Sophisticated Gradients */}  
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90" />  
            <div className="absolute inset-0 border-[0.5px] border-white/5 m-4 pointer-events-none group-hover:border-[#d4af37]/20 transition-colors duration-500" />

            {/* Content Overlay */}  
            <div className="absolute inset-0 p-8 flex flex-col justify-end">  
              <div className="mb-4">  
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold border-b border-[#d4af37]/50 pb-1">  
                  {post.category}  
                </span>  
              </div>  
                
              <h3 className={`text-white font-light leading-tight transition-all duration-500 group-hover:translate-x-1 ${post.size === 'large' ? 'text-3xl md:text-4xl' : 'text-xl'}`}>  
                {post.title}  
              </h3>

              {post.size !== 'small' && (  
                <p className="mt-4 text-stone-500 text-sm font-light line-clamp-2 max-w-sm group-hover:text-stone-400 transition-colors">  
                  {post.subtitle}  
                </p>  
              )}

              <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">  
                <span className="text-[10px] text-stone-600 uppercase tracking-widest">{post.date}</span>  
                <span className="text-[#d4af37] text-xs">→</span>  
              </div>  
            </div>  
          </Link>  
        ))}  
      </div>  
    </main>

    {/* Section Break / Divider */}  
    <div className="max-w-7xl mx-auto px-8 py-12 flex items-center gap-8">  
      <div className="h-px flex-1 bg-gradient-to-r from-stone-900 to-transparent" />  
      <span className="text-[10px] uppercase tracking-[1em] text-stone-700">End Archive</span>  
      <div className="h-px flex-1 bg-gradient-to-l from-stone-900 to-transparent" />  
    </div>

    {/* Footer Engagement */}  
    <section className="py-32 px-8 text-center bg-[#080808]">  
      <div className="max-w-2xl mx-auto">  
        <h2 className="text-3xl font-light text-white mb-6">A Dialogue Without Compromise.</h2>  
        <p className="text-stone-500 font-light mb-12">  
          Request a physical copy of the next volume or discuss a bespoke travel orchestration.  
        </p>  
        <Link   
          href="/invitation"  
          className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden font-medium transition-all bg-[#d4af37] rounded-none hover:bg-white"  
        >  
          <span className="relative text-black uppercase tracking-[0.2em] text-[10px] font-bold">Begin the Dialogue</span>  
        </Link>  
      </div>  
    </section>  
  </div>  
);  
}  
