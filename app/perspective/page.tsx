// app/perspective/page.tsx  
import React from 'react';  
import Link from 'next/link';  
import { PERSPECTIVE_POSTS } from '@/lib/data/perspectives';

export default function PerspectivePage() {  
  return (  
    <div className="min-h-screen bg-[#0a0a0a] text-stone-300 selection:bg-[#d4af37] selection:text-black">  
      {/* Header Section */}  
      <header className="pt-24 pb-12 px-6 border-b border-stone-800/50">  
        <div className="max-w-7xl mx-auto">  
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-4">  
            THE <span className="text-[#d4af37]">PERSPECTIVE</span>  
          </h1>  
          <p className="text-stone-500 max-w-2xl text-lg font-light leading-relaxed">  
            A curated archive of protocols, orchestrations, and manifestos designed for the high-net-worth traveler.  
          </p>  
        </div>  
      </header>

      {/* Bento Grid */}  
      <main className="max-w-7xl mx-auto p-6 lg:p-12">  
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">  
          {PERSPECTIVE_POSTS.map((post) => {  
            // Mapping sizing logic for the grid  
            const sizeClasses = {  
              small: "col-span-1 row-span-1",  
              medium: "col-span-1 md:col-span-2 row-span-1",  
              large: "col-span-1 md:col-span-2 row-span-2",  
            };

            return (  
              <Link  
                key={post.id}  
                href={`/perspective/${post.id}`}  
                className={`${sizeClasses[post.size]} group relative overflow-hidden border border-stone-800 bg-[#111] transition-all duration-500 hover:border-[#d4af37]/50`}  
              >  
                {/* Background Image/Overlay */}  
                <div   
                  className="absolute inset-0 bg-cover bg-center grayscale opacity-40 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"  
                  style={{ backgroundImage: `url(${post.image})` }}  
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                {/* Content */}  
                <div className="absolute inset-0 p-6 flex flex-col justify-end">  
                  <div className="mb-2">  
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-bold px-2 py-1 border border-[#d4af37]/30 bg-black/50">  
                      {post.category}  
                    </span>  
                  </div>  
                  <h3 className="text-xl md:text-2xl font-light text-white leading-tight group-hover:text-[#d4af37] transition-colors">  
                    {post.title}  
                  </h3>  
                  {post.size !== 'small' && (  
                    <p className="mt-2 text-stone-400 text-sm font-light line-clamp-2 max-w-md">  
                      {post.subtitle}  
                    </p>  
                  )}  
                  <div className="mt-4 flex items-center gap-2 text-[10px] text-stone-500 uppercase tracking-widest">  
                    <span>{post.date}</span>  
                    <span className="w-1 h-1 rounded-full bg-stone-700" />  
                    <span>Read Article</span>  
                  </div>  
                </div>  
              </Link>  
            );  
          })}  
        </div>  
      </main>

      {/* Footer CTA */}  
      <section className="py-24 px-6 text-center border-t border-stone-800/50">  
        <h2 className="text-2xl font-light text-stone-400 mb-8 italic">  
          Seeking a more personal dialogue?  
        </h2>  
        <Link   
          href="/invitation"  
          className="inline-block px-8 py-4 bg-[#d4af37] text-black font-medium tracking-widest uppercase text-xs hover:bg-white transition-colors"  
        >  
          Begin the Dialogue  
        </Link>  
      </section>  
    </div>  
  );  
}  
