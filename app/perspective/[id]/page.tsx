import { PERSPECTIVE_POSTS } from '@/lib/data/perspectives'  
import { notFound } from 'next/navigation'  
import Link from 'next/link'

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
    <main className="min-h-screen bg-[#0a0a0a] text-stone-200">  
      <article className="max-w-3xl mx-auto px-6 py-24">  
        {/* Navigation */}  
        <Link   
          href="/perspective"   
          className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] hover:opacity-70 transition-opacity mb-16 block"  
        >  
          ← Return to Perspectives  
        </Link>  
          
        {/* Header */}  
        <header className="mb-20">  
          <div className="text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-6">  
            {article.category}  
          </div>  
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter leading-[1.1] text-stone-100">  
            {article.title}  
          </h1>  
        </header>

        {/* Content Area */}  
        <div className="space-y-12">  
          <p className="text-xl md:text-2xl leading-relaxed text-stone-400 font-light italic border-l border-[#c5a059]/30 pl-8 mb-16">  
            {article.description}  
          </p>  
            
          <div className="prose prose-invert prose-stone max-w-none text-stone-300 font-light leading-relaxed space-y-8 text-lg">  
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
        <footer className="mt-32 pt-16 border-t border-stone-900">  
          <div className="bg-stone-900/30 p-12 border border-stone-800/50 text-center">  
            <h3 className="text-stone-100 text-lg font-light tracking-wide mb-6">  
              Begin your orchestration.  
            </h3>  
            <Link   
              href="/invitation"  
              className="inline-block px-10 py-4 bg-[#c5a059] text-stone-950 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#d4b475] transition-colors"  
            >  
              Request Access  
            </Link>  
          </div>  
        </footer>  
      </article>  
    </main>  
  )  
}  
