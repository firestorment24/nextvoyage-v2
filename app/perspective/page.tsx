import React from 'react'

export default function PerspectivePage() {  
  const articles = [  
    {  
      volume: "01",  
      title: "The Silent ROI",  
      subtitle: "Why the best investment is a week of absolute nothing.",  
      excerpt: "In an economy of hyper-connectivity, the ultimate leverage is the ability to disconnect. We explore the architectural psychology of silence and why top-tier performers are trading luxury density for 'The Void.'",  
      author: "D. Clark"  
    },  
    {  
      volume: "02",  
      title: "Architecture of Calm",  
      subtitle: "The tactile reality of seclusion.",  
      excerpt: "Design is not just what you see, but what you feel against your skin. From the rough-hewn stone of Kyoto to the smooth basalt of Iceland, we catalog the surfaces of the world’s most secluded retreats.",  
      author: "D. Clark"  
    }  
  ]

  return (  
    <main className="min-h-screen pt-40 pb-32 px-6">  
      <div className="max-w-4xl mx-auto">  
        <header className="mb-32 text-center">  
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 block mb-6">The Journal</span>  
          <h1 className="text-6xl md:text-8xl font-serif tracking-tighter">Perspective.</h1>  
        </header>

        <div className="space-y-40">  
          {articles.map((article, i) => (  
            <article key={i} className="group cursor-pointer">  
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">  
                {/* Editorial Sidebar */}  
                <div className="md:col-span-3 border-t border-zinc-100 pt-6">  
                  <span className="text-[10px] uppercase tracking-[0.3em] font-medium block mb-2">Volume {article.volume}</span>  
                  <span className="text-xs italic text-zinc-400">By {article.author}</span>  
                </div>

                {/* Article Content */}  
                <div className="md:col-span-9">  
                  <h2 className="text-4xl md:text-5xl font-serif mb-6 group-hover:italic transition-all duration-700">  
                    {article.title}  
                  </h2>  
                  <p className="text-xl text-zinc-500 font-serif italic mb-8 leading-relaxed">  
                    {article.subtitle}  
                  </p>  
                  <p className="text-zinc-700 font-light leading-relaxed max-w-2xl mb-10">  
                    {article.excerpt}  
                  </p>  
                  <button className="text-[10px] uppercase tracking-[0.3em] border-b border-black pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-all">  
                    Read Narrative  
                  </button>  
                </div>  
              </div>  
            </article>  
          ))}  
        </div>  
      </div>

      {/* Decorative Editorial Element */}  
      <div className="mt-40 border-t border-zinc-100 pt-20 flex justify-between items-center max-w-4xl mx-auto opacity-30">  
        <span className="text-[10px] uppercase tracking-widest font-serif">NexVoyage</span>  
        <div className="w-12 h-[1px] bg-black" />  
        <span className="text-[10px] uppercase tracking-widest font-serif">2026 Archive</span>  
      </div>  
    </main>  
  )  
}  
