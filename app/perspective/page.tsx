import { sql } from '@vercel/postgres'  
import Link from 'next/link'  
import Navigation from '@/components/Navigation'  

 
export const revalidate = 0  
export const dynamic = 'force-dynamic'

export default async function PerspectivePage() {  
  const { rows: articles } = await sql`  
    SELECT id, slug, title, excerpt, category, image_url, author, published_at, created_at   
    FROM perspective_articles   
    ORDER BY published_at DESC, created_at DESC  
  ` 

  return (  
    <div className="min-h-screen bg-[#0A0A0A] text-white font-serif selection:bg-[#D4AF37] selection:text-black">  
      <Navigation />  
      <main className="pt-32 pb-20 px-6">  
        <div className="max-w-7xl mx-auto">  
          <header className="mb-20 text-center">  
            <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] block mb-4">Intellectual Insights & Observations</span>  
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-6">Perspective</h1>  
          </header>

          {articles.length === 0 ? (  
            <div className="py-20 text-center border-t border-white/10">  
              <p className="text-white/40 uppercase tracking-widest text-xs">The ledger is currently empty.</p>  
            </div>  
          ) : (  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 border-t border-white/10 pt-16">  
              {articles.map((article) => (  
                <Link   
                  key={article.id}   
                  href={`/perspective/${article.slug}`}  
                  className="group block"  
                >  
                  <article className="space-y-6">  
                    <div className="aspect-[4/5] overflow-hidden bg-white/5 relative">  
                      <img   
                        src={article.image_url || 'https://cdn.marblism.com/placeholder.webp'}   
                        alt={article.title}  
                        className="w-full h-full object-cover transition-all duration-700 ease-in-out filter grayscale-0 group-hover:grayscale group-hover:scale-105"  
                      />  
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />  
                    </div>  
                      
                    <div className="space-y-3">  
                      <span className="text-[#D4AF37] uppercase tracking-widest text-[9px]">  
                        {article.category}  
                      </span>  
                      <h2 className="text-2xl font-light leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">  
                        {article.title}  
                      </h2>  
                      <p className="text-white/50 text-sm leading-relaxed line-clamp-3 font-sans font-light">  
                        {article.excerpt}  
                      </p>  
                      <div className="pt-4 flex items-center justify-between text-[8px] uppercase tracking-[0.2em] text-white/30">  
                        <span>{article.author || 'Editorial'}</span>  
                        <span>{new Date(article.published_at || article.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>  
                      </div>  
                    </div>  
                  </article>  
                </Link>  
              ))}  
            </div>  
          )}  
        </div>  
      </main>  
    
    </div>  
  )  
}  
