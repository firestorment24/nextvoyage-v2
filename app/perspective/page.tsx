import Link from "next/link";  
import { sql } from "@vercel/postgres";

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
  } catch (e) {  
    console.error("Failed to fetch perspective articles:", e);  
  }

  return (  
    <main className="min-h-screen bg-black text-white px-6 py-20 md:px-20">  
      <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-2">Perspective</h1>  
      <p className="text-zinc-400 text-lg mb-12 max-w-xl">  
        A journal of quiet intelligence for the discerning traveler.  
      </p>

      {articles.length === 0 ? (  
        <p className="text-zinc-600 italic">No articles yet. The first edition is being composed.</p>  
      ) : (  
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">  
          {articles.map((article) => (  
            <Link  
              key={article.id}  
              href={`/perspective/${article.slug || article.id}`}  
              className="group block border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors"  
            >  
              {article.image_url && (  
                <div  
                  className="w-full h-48 rounded-lg mb-4 bg-cover bg-center"  
                  style={{ backgroundImage: `url(${article.image_url})` }}  
                />  
              )}  
              <span className="text-xs uppercase tracking-widest text-amber-500">  
                {article.category || "Uncategorized"}  
              </span>  
              <h2 className="text-xl font-medium mt-1 group-hover:text-amber-400 transition-colors">  
                {article.title}  
              </h2>  
              <p className="text-zinc-400 text-sm mt-2 line-clamp-2">{article.excerpt}</p>  
              <div className="flex items-center justify-between mt-4 text-xs text-zinc-600">  
                <span>{article.author}</span>  
                <span>  
                  {article.published_at  
                    ? new Date(article.published_at).toLocaleDateString("en-US", {  
                        year: "numeric",  
                        month: "short",  
                        day: "numeric",  
                      })  
                    : ""}  
                </span>  
              </div>  
            </Link>  
          ))}  
        </div>  
      )}  
    </main>  
  );  
}  
