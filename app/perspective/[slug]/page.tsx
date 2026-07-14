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
          {/* Back link */}  
          <Link   
            href="/perspective"   
            className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] hover:opacity-70 transition-opacity mb-12 inline-block"  
          >  
            ← Back to Perspective  
          </Link>

          {/* Header */}  
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

          {/* Hero Image */}  
          {article.image_url && (  
            <div className="aspect-[16/9] mb-16 overflow-hidden bg-white/5">  
              <img   
                src={article.image_url}   
                alt={article.title}  
                className="w-full h-full object-cover"  
              />  
            </div>  
          )}

          {/* Article Body - This is the fix */}  
          <div   
            className="prose prose-invert prose-brass max-w-none  
                       prose-p:text-white/70 prose-p:leading-[1.8] prose-p:mb-8 prose-p:text-lg prose-p:font-light  
                       prose-headings:text-white prose-headings:font-light prose-headings:tracking-tight  
                       prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-[#D4AF37]  
                       prose-strong:text-white prose-strong:font-medium  
                       font-sans antialiased"  
            dangerouslySetInnerHTML={{ __html: article.content }}   
          />

          {/* Footer Tags */}  
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
