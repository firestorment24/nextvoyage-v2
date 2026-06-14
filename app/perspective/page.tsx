import { sql } from '@vercel/postgres';  
import Link from 'next/link';

export const revalidate = 0; // Ensures fresh data on every visit

export default async function PerspectivePage() {  
  // Fetch dynamic content from the database  
  const { rows: articles } = await sql`  
    SELECT * FROM perspectives   
    ORDER BY publish_date DESC, created_at DESC  
  `;

  return (  
    <main className="min-h-screen bg-[#F5F5F0] pt-32 pb-20 px-6">  
      <div className="max-w-screen-xl mx-auto">  
        {/* Header Section */}  
        <header className="mb-20 border-b border-black/10 pb-10">  
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-4 text-black">  
            The Perspective  
          </h1>  
          <p className="text-xl text-black/60 font-light max-w-2xl italic">  
            Intellectual insights, observations, and manifestos on the architecture of quiet luxury.  
          </p>  
        </header>

        {/* Dynamic Article Grid */}  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">  
          {articles.map((article) => (  
            <Link   
              key={article.id}   
              href={`/perspective/${article.slug || article.id}`}  
              className="group block"  
            >  
              <div className="aspect-[4/5] bg-neutral-200 mb-6 overflow-hidden relative">  
                {article.image_url ? (  
                  <img   
                    src={article.image_url}   
                    alt={article.title}  
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"  
                  />  
                ) : (  
                  <div className="w-full h-full flex items-center justify-center text-neutral-400 italic">  
                    Visual Pending  
                  </div>  
                )}  
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest text-black">  
                  {article.category || 'Editorial'}  
                </div>  
              </div>  
                
              <div className="space-y-3">  
                <h2 className="text-2xl font-light tracking-tight group-hover:text-neutral-600 transition-colors">  
                  {article.title}  
                </h2>  
                <div className="flex justify-between items-center text-[11px] uppercase tracking-[0.2em] text-black/40">  
                  <span>{article.author || 'Collective'}</span>  
                  <span>  
                    {article.publish_date ? new Date(article.publish_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Summer 2026'}  
                  </span>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>

        {articles.length === 0 && (  
          <div className="py-20 text-center border border-dashed border-black/10">  
            <p className="text-black/40 italic font-light">The archive is currently being indexed.</p>  
          </div>  
        )}  
      </div>  
    </main>  
  );  
}  
