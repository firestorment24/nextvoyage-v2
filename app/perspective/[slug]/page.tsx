import { sql } from '@vercel/postgres';  
import { notFound } from 'next/navigation';  
import Link from 'next/link';

export const revalidate = 0;

export default async function ArticlePage({ params }: { params: { slug: string } }) {  
const { slug } = params;

// Fetch the specific article by slug or ID  
const { rows } = await sql`  
  SELECT * FROM perspectives   
  WHERE slug = ${slug} OR id::text = ${slug}  
  LIMIT 1  
`;

const article = rows[0];

if (!article) {  
  notFound();  
}

return (  
  <main className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-6">  
    <article className="max-w-screen-md mx-auto">  
      {/* Back to Hub */}  
      <Link   
        href="/perspective"   
        className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] mb-12 inline-block hover:opacity-60 transition-opacity"  
      >  
        ← Back to Perspective  
      </Link>

      {/* Article Header */}  
      <header className="mb-16">  
        <div className="flex items-center gap-4 mb-6">  
          <span className="bg-[#D4AF37] text-black text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1">  
            {article.category || 'Editorial'}  
          </span>  
          <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">  
            {article.publish_date ? new Date(article.publish_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : '2026'}  
          </span>  
        </div>  
          
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-[0.95] mb-8">  
          {article.title}  
        </h1>

        <div className="flex items-center gap-3 border-t border-white/10 pt-8">  
          <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[10px] text-[#D4AF37]">  
            {article.author ? article.author.charAt(0) : 'C'}  
          </div>  
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">  
            By {article.author || 'The Collective'}  
          </span>  
        </div>  
      </header>

      {/* Hero Image */}  
      {article.image_url && (  
        <div className="aspect-video mb-16 overflow-hidden border border-white/5 bg-[#111111]">  
          <img   
            src={article.image_url}   
            alt={article.title}  
            className="w-full h-full object-cover grayscale opacity-80"  
          />  
        </div>  
      )}

      {/* Article Content */}  
      <div className="prose prose-invert prose-brass max-w-none">  
        <div className="text-xl md:text-2xl font-light leading-relaxed text-white/80 whitespace-pre-wrap tracking-wide">  
          {article.content}  
        </div>  
      </div>

      {/* Footer Accents */}  
      <footer className="mt-24 pt-12 border-t border-[#D4AF37]/20 text-center">  
        <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.5em] italic">  
          NexVoyage Collective Intelligence  
        </p>  
      </footer>  
    </article>  
  </main>  
);  
}  
