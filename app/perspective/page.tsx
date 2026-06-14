import { sql } from '@vercel/postgres';  
import Link from 'next/link';

export const revalidate = 0;

export default async function PerspectivePage() {  
  const { rows: articles } = await sql`  
    SELECT * FROM perspectives   
    ORDER BY publish_date DESC, created_at DESC  
  `;

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-6">  
      <div className="max-w-screen-xl mx-auto">  
        {/* Editorial Header */}  
        <header className="mb-24 border-b border-[#D4AF37]/20 pb-12">  
          <div className="flex flex-col gap-4">  
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-medium">  
              The Collective Intelligence  
            </span>  
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white">  
              The Perspective  
            </h1>  
            <p className="text-lg text-white/50 font-light max-w-xl italic mt-4 leading-relaxed">  
              Dispatches on the philosophy of travel, the architecture of silence, and the curation of the horizon.  
            </p>  
          </div>  
        </header>

        {/* Dynamic Article Grid */}  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">  
          {articles.map((article) => (  
            <Link   
              key={article.id}   
              href={`/perspective/${article.slug || article.id}`}  
              className="group block"  
            >  
              <div className="relative aspect-[4/5] mb-8 overflow-hidden bg-[#111111] border border-white/5">  
                {/* Image with Shadow Overlay */}  
                {article.image_url ? (  
                  <>  
                    <img   
                      src={article.image_url}   
                      alt={article.title}  
                      className="object-cover w-full h-full opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"  
                    />  
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />  
                  </>  
                ) : (  
                  <div className="w-full h-full flex items-center justify-center">  
                    <span className="text-[#D4AF37]/20 text-[10px] uppercase tracking-widest italic">Visual Missing</span>  
                  </div>  
                )}  
                  
                {/* Brass Category Tag */}  
                <div className="absolute top-6 left-6">  
                  <span className="bg-[#D4AF37] text-black text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1">  
                    {article.category || 'Editorial'}  
                  </span>  
                </div>  
              </div>  
                
              <div className="space-y-4 px-2">  
                <h2 className="text-3xl font-light tracking-tight group-hover:text-[#D4AF37] transition-colors duration-500">  
                  {article.title}  
                </h2>  
                  
                <div className="flex justify-between items-center pt-2 border-t border-white/10">  
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">  
                    {article.author || 'Collective'}  
                  </span>  
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">  
                    {article.publish_date ? new Date(article.publish_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '2026'}  
                  </span>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>

        {/* Empty State */}  
        {articles.length === 0 && (  
          <div className="py-32 text-center border border-[#D4AF37]/10 bg-white/5">  
            <p className="text-[#D4AF37] text-[11px] uppercase tracking-[0.5em] font-light">  
              Archives are being curated  
            </p>  
          </div>  
        )}  
      </div>  
    </main>  
  );  
}  
