import { sql } from '@vercel/postgres';  
import Link from 'next/link';  
import { notFound } from 'next/navigation';

export const revalidate = 0;

export default async function PerspectiveArticle({  
  params,  
}: {  
  params: { slug: string };  
}) {  
  const { slug } = params;

  try {  
    // This query checks both the slug column and the id column (cast to text)  
    // so that old numeric links still work while we transition to slugs.  
    const { rows } = await sql`  
      SELECT * FROM perspectives   
      WHERE slug = ${slug}   
      OR id::text = ${slug}   
      LIMIT 1  
    `;

    const article = rows[0];

    if (!article) {  
      notFound();  
    }

    return (  
      <main className="min-h-screen bg-black text-zinc-400 p-8 md:p-24 font-mono">  
        <div className="max-w-3xl mx-auto">  
          <Link   
            href="/perspective"   
            className="text-[#D4AF37] hover:text-white transition-colors mb-12 inline-block text-sm"  
          >  
            ← BACK TO PERSPECTIVE  
          </Link>

          <article>  
            <h1 className="text-3xl md:text-5xl text-white font-light tracking-tighter mb-4">  
              {article.title}  
            </h1>  
              
            <div className="flex gap-4 text-xs text-zinc-500 mb-12 uppercase tracking-widest border-b border-zinc-800 pb-4">  
              <span>{new Date(article.created_at).toLocaleDateString()}</span>  
              {article.author && <span className="text-[#D4AF37]">{article.author}</span>}  
            </div>

            <div className="space-y-6 leading-relaxed text-lg">  
              {article.content?.split('\n').map((paragraph: string, i: number) => (  
                paragraph ? <p key={i}>{paragraph}</p> : <br key={i} />  
              ))}  
            </div>  
          </article>

          <div className="mt-24 pt-8 border-t border-zinc-900 text-[10px] uppercase tracking-[0.2em] text-zinc-600">  
            NexVoyage Collective // Internal Ledger Reference: {article.id}  
          </div>  
        </div>  
      </main>  
    );  
  } catch (error) {  
    console.error('Database Error:', error);  
    return (  
      <div className="min-h-screen bg-black flex items-center justify-center text-[#D4AF37] font-mono">  
        [ SYSTEM_ERROR: FAILED_TO_RETRIEVE_PERSPECTIVE ]  
      </div>  
    );  
  }  
}  
