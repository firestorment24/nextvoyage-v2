import { sql } from '@vercel/postgres';  
import Link from 'next/link';  
import Navigation from '../components/Navigation';

export const revalidate = 0; // Ensure it always fetches fresh data

export default async function PerspectiveHub() {  
  const { rows: perspectives } = await sql`  
    SELECT * FROM perspectives   
    ORDER BY publish_date DESC, created_at DESC  
  `;

  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#d4af37] selection:bg-[#d4af37] selection:text-black">  
      <Navigation />  
        
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">  
        <header className="mb-20 border-b border-[#d4af37]/20 pb-10">  
          <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">The Perspective</h1>  
          <p className="text-xl md:text-2xl font-light text-[#a0a0a0] max-w-2xl leading-relaxed">  
            Tactical intelligence and seasonal reports from the NexVoyage Collective.  
          </p>  
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
          {perspectives.map((post) => (  
            <Link   
              key={post.id}   
              href={`/perspective/${post.slug || post.id}`}  
              className="group block space-y-6"  
            >  
              <div className="aspect-[16/9] overflow-hidden bg-[#1a1a1a] border border-[#d4af37]/10 group-hover:border-[#d4af37]/40 transition-colors">  
                {post.image_url ? (  
                  <img   
                    src={post.image_url}   
                    alt={post.title}  
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"  
                  />  
                ) : (  
                  <div className="w-full h-full flex items-center justify-center text-[#d4af37]/20 italic">  
                    Image Pending  
                  </div>  
                )}  
              </div>  
                
              <div className="space-y-3">  
                <div className="flex items-center space-x-4 text-xs tracking-[0.2em] uppercase text-[#a0a0a0]">  
                  <span>{post.category || 'Manifesto'}</span>  
                  <span className="w-1 h-1 bg-[#d4af37] rounded-full"></span>  
                  <span>{post.author || 'Collective'}</span>  
                </div>  
                <h2 className="text-3xl font-serif group-hover:text-white transition-colors">  
                  {post.title}  
                </h2>  
                <p className="text-[#808080] line-clamp-3 leading-relaxed">  
                  {post.content?.substring(0, 160)}...  
                </p>  
              </div>  
            </Link>  
          ))}  
        </div>

        {perspectives.length === 0 && (  
          <div className="py-20 text-center border border-dashed border-[#d4af37]/20 rounded-lg">  
            <p className="text-[#a0a0a0] italic text-lg">The archive is currently being indexed...</p>  
          </div>  
        )}  
      </div>  
    </main>  
  );  
}  
