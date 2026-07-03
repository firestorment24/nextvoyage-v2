import { sql } from '@vercel/postgres';  
import Link from 'next/link';  
import Image from 'next/image';

export default async function PerspectivePage() {  
  const { rows: articles } = await sql`  
    SELECT * FROM perspective_articles   
    ORDER BY publish_date DESC  
  `;

  return (  
    <div className="min-h-screen bg-black text-[#d4af37] font-serif p-8 pt-24">  
      <header className="max-w-7xl mx-auto mb-16 text-center">  
        <h1 className="text-5xl md:text-7xl font-light tracking-widest uppercase mb-4">Perspective</h1>  
        <p className="text-sm tracking-[0.3em] uppercase opacity-60 italic">The NexVoyage Collective Editorial</p>  
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">  
        {articles.map((article) => (  
          <Link   
            key={article.slug}   
            href={`/perspective/${article.slug}`}  
            className="group block space-y-6 border border-[#d4af37]/10 p-6 hover:border-[#d4af37]/40 transition-all duration-500"  
          >  
            <div className="relative aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">  
              <Image  
                src={article.image_url}  
                alt={article.title}  
                fill  
                className="object-cover transform group-hover:scale-105 transition-transform duration-1000"  
              />  
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />  
            </div>  
              
            <div className="space-y-3">  
              <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase opacity-50">  
                <span>{article.category}</span>  
                <span>{new Date(article.publish_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>  
              </div>  
              <h2 className="text-2xl font-light leading-tight group-hover:text-white transition-colors">  
                {article.title}  
              </h2>  
              <p className="text-sm leading-relaxed opacity-70 line-clamp-3 font-sans font-light text-gray-300">  
                {article.excerpt}  
              </p>  
            </div>  
          </Link>  
        ))}  
      </div>  
    </div>  
  );  
}  
