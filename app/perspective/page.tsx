// app/perspective/page.tsx

const articles = [  
  {  
    id: 1,  
    category: "Editorial",  
    date: "May 2026",  
    title: "The Silent ROI: Why Disconnection is the Ultimate Asset",  
    excerpt: "In an era of hyper-connectivity, the rarest luxury isn't access—it's absence. We explore the cognitive dividends of total digital silence.",  
    readTime: "8 min read"  
  },  
  {  
    id: 2,  
    category: "Sanctuary Study",  
    date: "April 2026",  
    title: "Architecture of Calm: The Minimalist Alpinist",  
    excerpt: "How high-altitude design is shifting away from rustic kitsch toward brutalist serenity and glass-walled isolation.",  
    readTime: "6 min read"  
  },  
  {  
    id: 3,  
    category: "Intellectual Travel",  
    date: "March 2026",  
    title: "The Curated Horizon",  
    excerpt: "A deep dive into the psychology of the 'Reset.' Why the environment you choose dictates the quality of your next major decision.",  
    readTime: "5 min read"  
  }  
]

export default function PerspectivePage() {  
  return (  
    <div className="max-w-7xl mx-auto px-6 py-24">  
      {/* Header */}  
      <header className="mb-32">  
        <h1 className="text-6xl font-light tracking-tight mb-6">The Perspective</h1>  
        <p className="text-zinc-500 text-sm tracking-[0.2em] uppercase">Intellectual Insights & Observations</p>  
      </header>

      {/* Featured Article */}  
      <section className="mb-32 group cursor-pointer">  
        <div className="grid md:grid-cols-2 gap-12 items-center">  
          <div className="aspect-[4/3] bg-zinc-50 border border-zinc-100 overflow-hidden relative">  
             {/* Placeholder for a high-end black and white image */}  
             <div className="absolute inset-0 flex items-center justify-center text-[10px] tracking-widest text-zinc-300 uppercase">Featured Visual</div>  
          </div>  
          <div>  
            <div className="flex gap-4 text-[10px] tracking-widest text-zinc-400 uppercase mb-6">  
              <span>{articles[0].category}</span>  
              <span>—</span>  
              <span>{articles[0].date}</span>  
            </div>  
            <h2 className="text-4xl font-light leading-tight mb-6 group-hover:text-zinc-600 transition-colors">  
              {articles[0].title}  
            </h2>  
            <p className="text-zinc-600 font-light leading-relaxed mb-8 text-lg">  
              {articles[0].excerpt}  
            </p>  
            <span className="text-[10px] tracking-widest uppercase border-b border-black pb-2">Read Article</span>  
          </div>  
        </div>  
      </section>

      {/* Grid for other articles */}  
      <div className="grid md:grid-cols-2 gap-24">  
        {articles.slice(1).map((article) => (  
          <article key={article.id} className="group cursor-pointer">  
            <div className="aspect-[16/9] bg-zinc-50 border border-zinc-100 mb-8 flex items-center justify-center">  
               <div className="text-[10px] tracking-widest text-zinc-300 uppercase">Study {article.id}</div>  
            </div>  
            <div className="flex gap-4 text-[10px] tracking-widest text-zinc-400 uppercase mb-4">  
              <span>{article.category}</span>  
              <span>—</span>  
              <span>{article.date}</span>  
            </div>  
            <h3 className="text-2xl font-light mb-4 group-hover:text-zinc-600 transition-colors">{article.title}</h3>  
            <p className="text-zinc-500 font-light leading-relaxed mb-6 line-clamp-2 italic text-sm">  
              "{article.excerpt}"  
            </p>  
            <span className="text-[10px] tracking-widest uppercase text-zinc-400 group-hover:text-black transition-colors">{article.readTime}</span>  
          </article>  
        ))}  
      </div>  
    </div>  
  )  
}  
