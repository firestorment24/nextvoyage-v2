import Link from 'next/link';  
import { sql } from '@vercel/postgres';

export const revalidate = 0;

export default async function PerspectivePage() {  
  let articles: any[] = [];

  try {  
    const { rows } = await sql`  
      SELECT id, slug, title, excerpt, category, image_url, author, published_at  
      FROM perspective_articles  
      ORDER BY published_at DESC, created_at DESC  
    `;  
    articles = rows;  
  } catch (err) {  
    console.error('Perspective fetch error:', err);  
  }

  if (articles.length === 0) {  
    return (  
      <main className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">  
        <p className="text-zinc-500 tracking-[0.2em] uppercase text-sm">No perspective pieces yet</p>  
      </main>  
    );  
  }

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white">  
      <div className="max-w-7xl mx-auto px-6 py-24">  
        <header className="mb-20">  
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white">  
            The Perspective  
          </h1>  
          <p className="mt-4 text-zinc-400 text-sm tracking-[0.3em] uppercase">  
            Quiet Luxury · Invisible Service · Brass &amp; Shadow  
          </p>  
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {articles.map((article) => (  
            <Link  
              key={article.id}  
              href={`/perspective/${article.slug || article.id}`}  
              className="group block"  
            >  
              <article className="border border-zinc-800 hover:border-amber-900/50 transition-colors duration-500 bg-[#0D0D0D]">  
                {article.image_url && (  
                  <div className="relative h-48 overflow-hidden">  
                    <img  
                      src={article.image_url}  
                      alt={article.title}  
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"  
                    />  
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent" />  
                  </div>  
                )}  
                <div className="p-6">  
                  {article.category && (  
                    <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-mono">  
                      {article.category}  
                    </span>  
                  )}  
                  <h2 className="mt-3 text-lg font-light text-white group-hover:text-amber-100 transition-colors">  
                    {article.title}  
                  </h2>  
                  <p className="mt-2 text-sm text-zinc-400 line-clamp-2 leading-relaxed">  
                    {article.excerpt}  
                  </p>  
                  <div className="mt-4 flex items-center gap-3 text-[10px] text-zinc-600 tracking-[0.2em] uppercase">  
                    {article.author && <span>{article.author}</span>}  
                    {article.published_at && (  
                      <time>  
                        {new Date(article.published_at).toLocaleDateString('en-US', {  
                          year: 'numeric', month: 'short', day: 'numeric'  
                        })}  
                      </time>  
                    )}  
                  </div>  
                </div>  
              </article>  
            </Link>  
          ))}  
        </div>  
      </div>  
    </main>  
  );  
}  
