import { PERSPECTIVE_POSTS } from '@/lib/data/perspectives'    
import { notFound } from 'next/navigation'    
import Link from 'next/link'  
import React from 'react';

export default async function PerspectiveArticle({     
params     
}: {     
params: Promise<{ id: string }>     
}) {    
const { id } = await params    
const article = PERSPECTIVE_POSTS.find((p) => p.id === id)

if (!article) {    
notFound()    
}

return (    
<main className="min-h-screen bg-[#1C1C1C] text-[#FCFAF7] selection:bg-[#C5A059] selection:text-[#1C1C1C]">    
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

  <article className="max-w-3xl mx-auto px-6 py-24">    
    {/* Navigation */}    
    <Link     
      href="/perspective"     
      className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] hover:opacity-70 transition-opacity mb-16 block"    
    >    
      ← Return to Perspectives    
    </Link>    
        
    {/* Header */}    
    <header className="mb-20">    
      <div className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059]/60 mb-6 italic">    
        {article.category}    
      </div>    
      <h1 className="text-4xl md:text-6xl font-light tracking-tighter leading-[1.1] text-[#FCFAF7]">    
        {article.title}    
      </h1>    
    </header>

    {/* Content Area */}    
    <div className="space-y-12">    
      <p className="text-xl md:text-2xl leading-relaxed text-[#FCFAF7]/80 font-light italic border-l border-[#C5A059]/30 pl-8 mb-16">    
        {article.subtitle}    
      </p>    
          
      <div className="prose prose-invert max-w-none text-[#FCFAF7]/60 font-light leading-relaxed space-y-8 text-lg">    
        <p>    
          In the realm of high-net-worth travel, the distinction lies in the orchestration.     
          What we define as "{article.title}" is more than a service—it is a manifesto     
          of intentionality and quiet luxury.    
        </p>    
        <p>    
          Every element within this perspective has been curated to resonate with the     
          NexVoyage Collective philosophy: brass accents, shadowed corners, and     
          the luxury of silence.    
        </p>    
      </div>    
    </div>

    {/* Lead Gen Footer */}    
    <footer className="mt-32 pt-16 border-t border-[#C5A059]/10">    
      <div className="bg-[#C5A059]/5 p-12 border border-[#C5A059]/10 text-center">    
        <h3 className="text-[#FCFAF7] text-lg font-light tracking-wide mb-6 italic">    
          Begin your orchestration.    
        </h3>    
        <Link     
          href="/invitation"    
          className="inline-block px-10 py-4 bg-[#C5A059] text-[#1C1C1C] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#FCFAF7] transition-all"    
        >    
          Request Access    
        </Link>    
      </div>    
    </footer>    
  </article>    
</main>    
)    
}  
