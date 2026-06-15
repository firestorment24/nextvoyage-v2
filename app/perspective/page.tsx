import { sql } from '@vercel/postgres';  
import Link from 'next/link';

export const revalidate = 0;

export default async function PerspectiveHub() {  
  try {  
    // Fetching everything from the perspectives table  
    const { rows: articles } = await sql`  
      SELECT id, title, slug, author, created_at   
      FROM perspectives   
      ORDER BY created_at DESC  
    `;

    return (  
      <main className="min-h-screen bg-black text-white p-8 md:p-24 font-mono">  
        <div className="max-w-4xl mx-auto">  
          <header className="mb-24 border-l border-[#D4AF37] pl-6">  
            <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-2 italic">  
              PERSPECTIVE  
            </h1>  
            <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">  
              Intellectual Insights & Observations  
            </p>  
          </header>

          <div className="grid gap-12">  
            {articles.map((article: any) => (  
              <Link   
                key={article.id}  
                href={`/perspective/${article.slug || article.id}`}  
                className="group border-b border-zinc-900 pb-12 block"  
              >  
                <div className="flex justify-between items-start mb-4">  
                  <h2 className="text-2xl md:text-3xl font-light group-hover:text-[#D4AF37] transition-colors tracking-tight">  
                    {article.title}  
                  </h2>  
                  <span className="text-[10px] text-zinc-600 mt-2">  
                    {new Date(article.created_at).toLocaleDateString()}  
                  </span>  
                </div>  
                <div className="text-xs text-zinc-500 uppercase tracking-widest flex items-center gap-4">  
                  <span>By {article.author || 'Collective'}</span>  
                  <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">  
                    READ ARTICLE —&gt;  
                  </span>  
                </div>  
              </Link>  
            ))}  
          </div>

          {articles.length === 0 && (  
            <div className="text-zinc-700 text-sm italic">  
              [ NO_PERSPECTIVES_FOUND_IN_LEDGER ]  
            </div>  
          )}  
        </div>  
      </main>  
    );  
  } catch (error) {  
    console.error('Database Error:', error);  
    return (  
      <div className="min-h-screen bg-black flex items-center justify-center text-[#D4AF37] font-mono">  
        [ SYSTEM_ERROR: LEDGER_UNAVAILABLE ]  
      </div>  
    );  
  }  
}  
