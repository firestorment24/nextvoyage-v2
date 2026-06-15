import { sql } from "@vercel/postgres";  
import Link from 'next/link';

export const revalidate = 0; // Always fetch fresh data

export default async function PerspectivePage() {  
  let articles = [];  
    
  try {  
    const result = await sql`  
      SELECT * FROM perspectives   
      ORDER BY publish_date DESC, created_at DESC  
    `;  
    articles = result.rows;  
  } catch (error) {  
    console.error("Database fetch failed:", error);  
  }

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-6">  
      <div className="max-w-6xl mx-auto">  
        <div className="mb-20">  
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-4">The Perspective</h1>  
          <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs">Intellectual Insights & Observations</p>  
        </div>

        {articles.length === 0 ? (  
          <div className="py-20 border-t border-white/10">  
            <p className="text-white/40 font-serif italic text-xl">The archives are currently being curated. Check back shortly.</p>  
          </div>  
        ) : (  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">  
            {articles.map((article) => (  
              <Link   
                key={article.id}   
                href={`/perspective/${article.slug || article.id}`}  
                className="group block space-y-6"  
              >  
                <div className="aspect-[16/9] overflow-hidden bg-white/5 relative">  
                  {article.image_url ? (  
                    <img   
                      src={article.image_url}   
                      alt={article.title}  
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"  
                    />  
                  ) : (  
                    <div className="w-full h-full flex items-center justify-center text-white/10 italic font-serif">  
                      Visual pending  
                    </div>  
                  )}  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60" />  
                </div>

                <div className="space-y-3">  
                  <div className="flex items-center space-x-4">  
                    <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em]">  
                      {article.category || 'Editorial'}  
                    </span>  
                    <span className="w-1 h-1 bg-[#D4AF37] rounded-full opacity-30" />  
                    <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">  
                      {article.publish_date ? new Date(article.publish_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'June 2026'}  
                    </span>  
                  </div>  
                    
                  <h2 className="text-2xl md:text-3xl font-serif group-hover:text-[#D4AF37] transition-colors duration-500 leading-tight">  
                    {article.title}  
                  </h2>  
                    
                  <p className="text-white/50 font-serif leading-relaxed line-clamp-2 text-sm">  
                    {article.content?.substring(0, 150)}...  
                  </p>

                  <div className="pt-2 flex items-center space-x-2 text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">  
                    <span>Read Perspective</span>  
                    <span>→</span>  
                  </div>  
                </div>  
              </Link>  
            ))}  
          </div>  
        )}  
      </div>  
    </main>  
  );  
}  
