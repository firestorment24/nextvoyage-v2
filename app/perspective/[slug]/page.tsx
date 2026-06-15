import { sql } from '@vercel/postgres';  
import Link from 'next/link';  
import { notFound } from 'next/navigation';

export const revalidate = 0;

export default async function PerspectiveArticle({ params }: { params: { slug: string } }) {  
  const { slug } = params;

  try {  
    // This query is the "tank"—it handles ID, Slug, and prevents crashes  
    const { rows } = await sql`  
      SELECT * FROM perspectives   
      WHERE slug = ${slug}   
      OR id::text = ${slug}   
      LIMIT 1  
    `;

    const article = rows[0];  
    if (!article) notFound();

    return (  
      <main className="min-h-screen bg-black text-zinc-400 p-8 md:p-24 font-mono">  
        <div className="max-w-3xl mx-auto">  
          <Link href="/perspective" className="text-[#D4AF37] hover:text-white mb-12 inline-block text-sm">  
            ← BACK TO PERSPECTIVE  
          </Link>  
          <article>  
            <h1 className="text-3xl md:text-5xl text-white font-light tracking-tighter mb-4">{article.title}</h1>  
            <div className="flex gap-4 text-xs text-zinc-500 mb-12 uppercase tracking-widest border-b border-zinc-800 pb-4">  
              <span>{article.date || 'EDITORIAL'}</span>  
              <span className="text-[#D4AF37]">{article.author}</span>  
            </div>  
            <div className="space-y-6 leading-relaxed text-lg">  
              {article.content?.split('\n').map((p: string, i: number) => (  
                p ? <p key={i}>{p}</p> : <br key={i} />  
              ))}  
            </div>  
          </article>  
        </div>  
      </main>  
    );  
  } catch (e) {  
    return <div className="p-24 text-[#D4AF37] font-mono">[ RENDER_ERROR: {slug} ]</div>;  
  }  
}  
