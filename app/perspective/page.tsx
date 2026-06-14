// app/perspective/page.tsx  
import Navigation from '@/components/Navigation';  
import Footer from '@/components/Footer';  
import Link from 'next/link';

const ARTICLES = [  
  {  
    volume: "01",  
    title: "The Silent ROI",  
    subtitle: "A Manifesto of Presence",  
    author: "Daryl Clark",  
    description: "The preservation of presence and cognitive restoration in an age of constant access. Why the ultimate luxury is the ability to be inaccessible.",  
    slug: "the-silent-roi",  
    type: "Manifesto"  
  },  
  {  
    volume: "02",  
    title: "The Architecture of Calm",  
    subtitle: "The Tactile Reality of Seclusion",  
    author: "Daryl Clark",  
    description: "An exploration of physical space as a tool for stillness. How the environments we curate serve as the foundation for internal recalibration.",  
    slug: "architecture-of-calm",  
    type: "Philosophy"  
  },  
  {  
    volume: "03",  
    title: "The Nine Sanctuary Pillars",  
    subtitle: "The Framework of Restoration",  
    author: "Editorial",  
    description: "A technical breakdown of the environmental archetypes required for deep recovery, from Coastal Brutalism to High-Altitude Isolation.",  
    slug: "sanctuary-pillars",  
    type: "Intelligence"  
  }  
];

export default function PerspectivePage() {  
  return (  
    <main className="min-h-screen bg-[#050505] text-stone-200 selection:bg-[#B8860B]/30">  
      <Navigation />  
        
      {/* Editorial Header */}  
      <header className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-stone-800/50">  
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">  
          <div>  
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-stone-100 italic">  
              The Perspective  
            </h1>  
            <p className="mt-4 text-[#B8860B] font-mono text-sm tracking-[0.2em] uppercase">  
              Intellectual Insights & Observations  
            </p>  
          </div>  
          <div className="max-w-xs">  
            <p className="text-sm text-stone-500 leading-relaxed font-light italic">  
              A curated journal exploring the intersection of architecture, seclusion, and the preservation of the self.  
            </p>  
          </div>  
        </div>  
      </header>

      {/* Article Feed */}  
      <section className="max-w-7xl mx-auto px-6 py-20">  
        <div className="grid gap-24">  
          {ARTICLES.map((article) => (  
            <Link   
              key={article.volume}  
              href={`/perspective/${article.slug}`}  
              className="group block"  
            >  
              <article className="grid md:grid-cols-12 gap-8 items-start">  
                <div className="md:col-span-1">  
                  <span className="text-[#B8860B] font-mono text-xs tracking-widest block pt-2">  
                    VOL. {article.volume}  
                  </span>  
                </div>  
                  
                <div className="md:col-span-7">  
                  <h2 className="text-3xl md:text-5xl font-serif text-stone-200 group-hover:text-[#B8860B] transition-colors duration-500 mb-4">  
                    {article.title}  
                  </h2>  
                  <p className="text-stone-400 font-light text-lg md:text-xl leading-relaxed max-w-2xl">  
                    {article.description}  
                  </p>  
                  <div className="mt-8 flex items-center gap-4 text-[10px] font-mono tracking-[0.3em] uppercase text-stone-600">  
                    <span>By {article.author}</span>  
                    <span className="w-8 h-[1px] bg-stone-800"></span>  
                    <span className="text-[#B8860B]/70">{article.type}</span>  
                  </div>  
                </div>

                <div className="md:col-span-4 flex justify-end md:pt-4">  
                  <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-stone-500 group-hover:text-stone-200 transition-all duration-300">  
                    [ READ DISPATCH ]  
                    <span className="w-12 h-[1px] bg-stone-800 group-hover:bg-[#B8860B] transition-all"></span>  
                  </span>  
                </div>  
              </article>  
              <div className="mt-20 h-[1px] w-full bg-gradient-to-r from-transparent via-stone-800/50 to-transparent" />  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Editorial Footer Quote */}  
      <section className="py-32 px-6 max-w-3xl mx-auto text-center">  
        <blockquote className="text-2xl md:text-3xl font-serif italic text-stone-400 leading-relaxed">  
          "The ability to be unreachable is the final frontier of autonomy."  
        </blockquote>  
        <div className="mt-8 w-12 h-[1px] bg-[#B8860B] mx-auto" />  
      </section>

      <Footer />  
    </main>  
  );  
}  
