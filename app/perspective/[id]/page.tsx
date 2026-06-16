// app/perspective/[id]/page.tsx  
import React from 'react';  
import Link from 'next/link';  
import { notFound } from 'next/navigation';  
import { PERSPECTIVE_POSTS } from '@/lib/data/perspectives';

// Next.js 15+ requires params to be handled as a Promise in some environments,  
// but for static data lookup, we can keep it simple.  
export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {  
  const { id } = await params;  
  const post = PERSPECTIVE_POSTS.find((p) => p.id === id);

  if (!post) {  
    notFound();  
  }

  return (  
    <article className="min-h-screen bg-[#050505] text-stone-300 selection:bg-[#d4af37] selection:text-black">  
      {/* Editorial Hero */}  
      <header className="relative h-[70vh] w-full overflow-hidden">  
        <div   
          className="absolute inset-0 bg-cover bg-center grayscale contrast-125 brightness-50"  
          style={{ backgroundImage: `url(${post.image})` }}  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />  
          
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-24 max-w-7xl mx-auto">  
          <Link href="/perspective" className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37] mb-8 hover:text-white transition-colors inline-block">  
            ← Back to Archive  
          </Link>  
          <div className="mb-6">  
             <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold px-3 py-1 border border-[#d4af37]/30 bg-black/50">  
                {post.category}  
              </span>  
          </div>  
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-white max-w-4xl leading-tight">  
            {post.title}  
          </h1>  
          <p className="mt-6 text-stone-400 text-xl font-light max-w-2xl leading-relaxed italic">  
            {post.subtitle}  
          </p>  
        </div>  
      </header>

      {/* Article Content */}  
      <main className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-12 gap-16">  
          
        {/* Left Sidebar: Metadata */}  
        <aside className="md:col-span-3 space-y-12 border-t border-stone-900 pt-8">  
          <div>  
            <h4 className="text-[10px] uppercase tracking-widest text-stone-500 mb-4">Published</h4>  
            <p className="text-stone-300 font-light">{post.date}</p>  
          </div>  
          <div>  
            <h4 className="text-[10px] uppercase tracking-widest text-stone-500 mb-4">Reading Time</h4>  
            <p className="text-stone-300 font-light">6 Minute Protocol</p>  
          </div>  
          <div className="pt-12">  
            <Link   
              href="/invitation"  
              className="block p-6 border border-[#d4af37]/20 bg-[#d4af37]/5 hover:bg-[#d4af37]/10 transition-all group"  
            >  
              <p className="text-[10px] uppercase tracking-widest text-[#d4af37] mb-2">Next Step</p>  
              <p className="text-white font-light group-hover:text-[#d4af37] transition-colors">Begin a dialogue about this orchestration.</p>  
            </Link>  
          </div>  
        </aside>

        {/* Main Body Text */}  
        <section className="md:col-span-7 space-y-8">  
          <div className="prose prose-invert prose-stone max-w-none">  
            {/* Placeholder for content - Penny is finishing the full drafts */}  
            <p className="text-2xl leading-relaxed font-serif text-stone-200 first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-[#d4af37]">  
              In the realm of high-performance travel, the distinction between a trip and an orchestration lies in the invisible logistics.   
              {post.title} represents a shift in how we perceive movement across the global circuit.  
            </p>  
              
            <p className="text-lg leading-relaxed font-light text-stone-400">  
              When we discuss the {post.category.toLowerCase()} of {post.title.toLowerCase()}, we are not merely talking about destinations. We are discussing the preservation of momentum. For the modern executive, travel is often the greatest friction point in a high-output schedule.  
            </p>

            <div className="my-16 h-px w-full bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900" />

            <h3 className="text-2xl font-light text-white tracking-tight">The Architecture of Presence</h3>  
            <p className="text-lg leading-relaxed font-light text-stone-400">  
              The {post.subtitle} serves as the foundation for this analysis. By examining the interplay between environment and efficiency, we can begin to see the outline of a new standard. One where the sanctuary is not just a room, but a calibrated system designed to restore the self.  
            </p>

            <blockquote className="border-l-2 border-[#d4af37] pl-8 my-12 italic text-2xl text-stone-300 font-light">  
              "True luxury is the removal of the need to decide. It is the arrival at a conclusion that was reached on your behalf, perfectly."  
            </blockquote>

            <p className="text-lg leading-relaxed font-light text-stone-400">  
              As we move into the 2026 circuit, the protocols outlined here will become the baseline for the NexVoyage Collective. We invite you to explore the full implications of this {post.category.toLowerCase()}.  
            </p>  
          </div>  
        </section>

      </main>

      {/* Bottom Navigation */}  
      <footer className="max-w-7xl mx-auto px-8 py-24 border-t border-stone-900">  
        <div className="flex justify-between items-center">  
          <Link href="/perspective" className="group flex items-center gap-4">  
            <span className="text-[#d4af37] group-hover:-translate-x-2 transition-transform">←</span>  
            <span className="text-[10px] uppercase tracking-widest text-stone-500 group-hover:text-white transition-colors">Return to Archive</span>  
          </Link>  
          <span className="text-[10px] uppercase tracking-[0.5em] text-stone-800">NexVoyage Collective</span>  
        </div>  
      </footer>  
    </article>  
  );  
}  
