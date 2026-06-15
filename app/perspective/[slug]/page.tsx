import { sql } from '@vercel/postgres';  
import Link from 'next/link';

export const revalidate = 0;

export default async function PerspectiveArticle({ params }: any) {  
  // DIAGNOSTIC: We grab whatever Next.js is passing us,   
  // whether it's called 'slug', 'id', or 'article'.  
  const routeParam = params?.slug || params?.id || Object.values(params)[0];

  if (!routeParam) {  
    return (  
      <div className="p-24 bg-black text-red-500 font-mono">  
        [ ROUTING_ERROR ]<br/>  
        NO_PARAMETERS_FOUND_IN_URL  
      </div>  
    );  
  }

  try {  
    const { rows } = await sql`  
      SELECT * FROM perspectives   
      WHERE slug = ${routeParam}   
      OR id::text = ${routeParam}   
      LIMIT 1  
    `;

    const article = rows[0];

    if (!article) {  
      return (  
        <div className="p-24 bg-black text-[#D4AF37] font-mono text-sm leading-loose">  
          [ 404: NOT_FOUND_IN_LEDGER ]<br/>  
          DEBUG_VAL: "{routeParam}"<br/>  
          HINT: Ensure the record exists in Vercel SQL.  
          <br/><br/>  
          <Link href="/perspective" className="underline">← RETURN TO HUB</Link>  
        </div>  
      );  
    }

    return (  
      <main className="min-h-screen bg-black text-zinc-400 p-8 md:p-24 font-mono">  
        <div className="max-w-3xl mx-auto">  
          <Link href="/perspective" className="text-[#D4AF37] mb-12 inline-block text-sm">  
            ← BACK TO PERSPECTIVE  
          </Link>  
          <article>  
            <h1 className="text-3xl md:text-5xl text-white font-light tracking-tighter mb-4">  
              {article.title}  
            </h1>  
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

  } catch (e: any) {  
    return (  
      <div className="p-24 bg-black text-red-500 font-mono">  
        [ DATABASE_CRASH ]<br/>  
        ERROR: {e.message}  
      </div>  
    );  
  }  
}  
