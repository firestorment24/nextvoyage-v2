import { sql } from '@vercel/postgres';  
import Link from 'next/link';

export const revalidate = 0;

export default async function PerspectiveHub() {  
  try {  
    // We only select what we absolutely need  
    const { rows: articles } = await sql`SELECT id, title, slug, author FROM perspectives ORDER BY id DESC`;

    return (  
      <main className="min-h-screen bg-black text-white p-8 md:p-24 font-mono">  
        <div className="max-w-4xl mx-auto">  
          <header className="mb-24 border-l border-[#D4AF37] pl-6">  
            <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-2 italic">PERSPECTIVE</h1>  
          </header>

          <div className="grid gap-12">  
            {articles.map((article: any) => (  
              <Link   
                key={article.id}  
                href={`/perspective/${article.slug || article.id}`}  
                className="group border-b border-zinc-900 pb-12 block"  
              >  
                <h2 className="text-2xl md:text-3xl font-light group-hover:text-[#D4AF37] transition-colors mb-4">  
                  {article.title}  
                </h2>  
                <div className="text-xs text-zinc-500 uppercase tracking-widest flex items-center gap-4">  
                  <span>By {article.author || 'Collective'}</span>  
                  <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">READ —&gt;</span>  
                </div>  
              </Link>  
            ))}  
          </div>  
        </div>  
      </main>  
    );  
  } catch (error) {  
    console.error(error);  
    return <div className="p-24 text-[#D4AF37] font-mono">[ DATABASE_SCHEMA_ERROR ]</div>;  
  }  
}  
