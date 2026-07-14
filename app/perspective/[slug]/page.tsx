import { sql } from '@vercel/postgres'  
import { notFound } from 'next/navigation'  
import Link from 'next/link'  
import Navigation from '@/components/Navigation'  
import Footer from '@/components/Footer'

export const revalidate = 0  
export const dynamic = 'force-dynamic'

export default async function ArticlePage({ params }: { params: { slug: string } }) {  
const { slug } = params

try {  
const { rows } = await sql`  
  SELECT * FROM perspective_articles   
  WHERE slug = ${slug} OR id::text = ${slug}  
  LIMIT 1  
`  
const article = rows[0]

if (!article) {  
  notFound()  
}

return (  
  <div className="min-h-screen bg-[#0A0A0A] text-white font-serif selection:bg-[#D4AF37] selection:text-black">  
    <Navigation />  
      
    <main className="pt-32 pb-20 px-6">  
      <div className="max-w-3xl mx-auto">  
        <Link   
          href="/perspective"   
          className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] hover:opacity-70 transition-opacity mb-12 inline-block"  
        >  
          ← Back to Perspective  
        </Link>

        <header className="mb-16">  
          <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] block mb-4">  
            {article.category}  
          </span>  
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight mb-8">  
            {article.title}  
          </h1>  
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/40 border-b border-white/10 pb-8">  
            <span>{article.author || 'NexVoyage Collective'}</span>  
            <span className="w-1 h-1 bg-white/20 rounded-full" />  
            <span>{new Date(article.published_at || article.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>  
          </div>  
        </header>

        {article.image_url && (  
          <div className="aspect-[16/9] mb-16 overflow-hidden bg-white/5">  
            <img   
              src={article.image_url}   
              alt={article.title}  
              className="w-full h-full object-cover"  
            />  
          </div>  
        )}

        {article.content ? (  
          <div   
            className="  
              max-w-none  
              [&>p]:text-white/70 [&>p]:leading-[1.8] [&>p]:mb-8 [&>p]:text-lg [&>p]:font-light [&>p]:font-sans  
              [&>h3]:text-2xl [&>h3]:mt-12 [&>h3]:mb-6 [&>h3]:text-[#D4AF37] [&>h3]:font-light [&>h3]:tracking-tight  
              [&>h2]:text-3xl [&>h2]:mt-14 [&>h2]:mb-8 [&>h2]:text-white [&>h2]:font-light  
              [&>strong]:text-white [&>strong]:font-medium  
            "  
            dangerouslySetInnerHTML={{ __html: article.content }}   
          />  
        ) : (  
          <p className="text-white/40 text-lg font-light">Full article content coming soon.</p>  
        )}

        {article.tags && (  
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-wrap gap-3">  
            {article.tags.split(',').map((tag: string) => (  
              <span   
                key={tag}   
                className="text-[9px] uppercase tracking-widest text-white/30 border border-white/10 px-3 py-1 rounded-full"  
              >  
                {tag.trim()}  
              </span>  
            ))}  
          </div>  
        )}  
      </div>  
    </main>

    <Footer />  
  </div>  
)  
} catch (error) {  
console.error('Error fetching article:', error)  
return <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white">System offline. Please recalibrate.</div>  
}  
}  
