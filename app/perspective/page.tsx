import React from 'react';    
import Link from 'next/link';    
import { PERSPECTIVE_POSTS } from '@/lib/data/perspectives';

export default function PerspectivePage() {    
  // Bento sizing logic (maintained)  
  const sizeClasses: { [key: string]: string } = {    
    small: "col-span-4 md:col-span-1 row-span-1",      
    medium: "col-span-4 md:col-span-2 row-span-1",     
    large: "col-span-4 md:col-span-2 row-span-2",      
    tall: "col-span-4 md:col-span-1 row-span-2",        
  };

  return (    
    <div className="min-h-screen bg-[#1C1C1C] text-[#FCFAF7] selection:bg-[#C5A059] selection:text-[#1C1C1C]">    
      {/* CSS Override for global parchment headers */}  
      <style>  
        {`  
          h1, h2, h3, h4 {  
            background-color: transparent !important;  
            color: #C5A059 !important;  
          }  
          body {  
            background-color: #1C1C1C !important;  
          }  
        `}  
      </style>

      {/* Editorial Header */}    
      <header className="pt-32 pb-20 px-8 border-b border-[#C5A059]/10">    
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">    
          <div className="space-y-4">    
            <div className="flex items-center gap-4">    
              <div className="h-px w-12 bg-[#C5A059]" />    
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold">Volume I: The Collective Perspective</span>    
            </div>    
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-[#FCFAF7] leading-[0.85]">    
              EDITORIAL<br />    
              <span className="italic ml-12 text-[#C5A059]">ARCHIVE</span>    
            </h1>    
          </div>    
          <div className="max-w-sm pb-2">    
            <p className="text-[#FCFAF7]/50 font-light text-sm leading-relaxed border-l border-[#C5A059]/20 pl-6 italic">    
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
              className={`${sizeClasses[post.size] || sizeClasses.small} group relative overflow-hidden bg-[#111] border border-[#C5A059]/10 transition-all duration-700 hover:border-[#C5A059]/40 hover:z-10`}    
            >    
              {/* Media Container: Color -> Grayscale on Hover */}    
              <div     
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-105 group-hover:grayscale group-hover:opacity-60"    
                style={{ backgroundImage: `url(${post.image})` }}    
              />    
                  
              {/* Gradients & Borders */}    
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/40 to-transparent" />    
              <div className="absolute inset-2 border border-[#C5A059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Content Overlay */}    
              <div className="absolute inset-0 p-6 flex flex-col justify-end">    
                <div className="mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">    
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A059] font-bold px-2 py-1 bg-[#1C1C1C]/90 backdrop-blur-sm border border-[#C5A059]/20">    
                    {post.category}    
                  </span>    
                </div>    
                    
                <h3 className={`font-light text-[#FCFAF7] leading-tight group-hover:text-[#C5A059] transition-colors duration-500 ${post.size === 'large' ? 'text-3xl' : 'text-lg md:text-xl'}`}>    
                  {post.title}    
                </h3>

                {post.size !== 'small' && (    
                  <p className="mt-3 text-[#FCFAF7]/50 text-xs font-light line-clamp-2 max-w-[280px] opacity-0 group-hover:opacity-100 transition-opacity duration-700">    
                    {post.subtitle}    
                  </p>    
                )}

                <div className="mt-4 flex items-center gap-3 text-[10px] text-[#FCFAF7]/30 uppercase tracking-widest">    
                  <span className="group-hover:text-[#FCFAF7]/80 transition-colors">{post.date}</span>    
                  <div className="h-px w-0 group-hover:w-8 bg-[#C5A059] transition-all duration-500" />    
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#C5A059]">Read</span>    
                </div>    
              </div>    
            </Link>    
          ))}    
        </div>    
      </main>

      {/* Magazine Footer */}    
      <footer className="py-32 px-8 border-t border-[#C5A059]/10 flex flex-col items-center justify-center text-center">    
        <div className="w-12 h-[1px] bg-[#C5A059]/20 mb-12" />    
        <h2 className="text-[#C5A059]/40 text-xs uppercase tracking-[0.6em] mb-12 italic">The NexVoyage Collective</h2>    
        <Link     
          href="/invitation"    
          className="group px-12 py-5 border border-[#C5A059]/30 text-[#FCFAF7] hover:bg-[#C5A059] hover:text-[#1C1C1C] transition-all duration-500 overflow-hidden relative"    
        >    
          <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold">Begin the Dialogue</span>    
        </Link>    
      </footer>    
    </div>    
  );    
}  
