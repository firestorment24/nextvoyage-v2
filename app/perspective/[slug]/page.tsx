import { sql } from '@vercel/postgres';  
import Link from 'next/link';

export const revalidate = 0;

export default async function PerspectiveArticle({ params }: any) {  
  const slug = params?.slug;

  try {  
    const { rows } = await sql`  
      SELECT * FROM perspectives   
      WHERE slug = ${slug}   
      OR id::text = ${slug}   
      LIMIT 1  
    `;

    const article = rows[0];

    if (!article) {  
      return (  
        <div className="p-24 bg-black text-[#D4AF37] font-mono">  
          [ 404: ARTICLE_NOT_FOUND_IN_LEDGER ]<br/>  
          DEBUG_INFO: SEARCHED_FOR_SLUG_"{slug}"  
          <br/><br/>  
          <Link href="/perspective" className="underline">← RETURN TO HUB</Link>  
        </div>  
      );  
    }

    return (  
      <main className="min-h-screen bg-black text-white p-8 md:p-24 font-mono">  
        <div className="max-w-3xl mx-auto">  
          <Link href="/perspective" className="text-[#D4AF37] mb-12 inline-block">← BACK</Link>  
          <h1 className="text-4xl mb-8">{article.title}</h1>  
          <p className="leading-relaxed opacity-80 whitespace-pre-wrap">{article.content}</p>  
        </div>  
      </main>  
    );

  } catch (e: any) {  
    return (  
      <div className="p-24 bg-black text-red-500 font-mono">  
        [ SYSTEM_CRASH ]<br/>  
        ERROR: {e.message}<br/>  
        SLUG_RECEIVED: {slug}  
      </div>  
    );  
  }  
}  
