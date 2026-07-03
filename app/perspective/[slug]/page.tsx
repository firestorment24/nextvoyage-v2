import { sql } from '@vercel/postgres'  
import Link from 'next/link'  
import { notFound } from 'next/navigation'  
import Navigation from '@/components/Navigation'  
import Footer from '@/components/Footer'

export const revalidate = 0  
export const dynamic = 'force-dynamic'

export default async function ArticlePage({  
  params,  
}: {  
  params: Promise<{ slug: string }>  
}) {  
  const { slug } = await params

  try {  
    const { rows } = await sql`  
      SELECT * FROM perspective_articles  
      WHERE slug = ${slug} OR id::text = ${slug}  
      LIMIT 1  
    `

    if (rows.length === 0) {  
      notFound()  
    }

    const article = rows[0]

    // Normalise tags — handles PG arrays, JSON strings, or null  
    const tags: string[] = (() => {  
      if (!article.tags) return []  
      if (Array.isArray(article.tags)) return article.tags.filter(Boolean)  
      if (typeof article.tags === 'string') {  
        try {  
          const parsed = JSON.parse(article.tags)  
          return Array.isArray(parsed) ? parsed.filter(Boolean) : []  
        } catch {  
          return article.tags.split(',').map((t: string) => t.trim()).filter(Boolean)  
        }  
      }  
      return []  
    })()

    return (  
      <div className="min-h-screen bg-[#0A0A0A] text-[#FCFAF7] font-serif selection:bg-[#D4AF37] selection:text-black">  
        <Navigation />  
        <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">  
          <div className="mb-12">  
            <Link  
              href="/perspective"  
              className="text-[#D4AF37] hover:text-white transition-colors duration-300 flex items-center gap-2 group tracking-widest text-xs uppercase"  
            >  
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Perspective  
            </Link>  
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">  
            <div className="lg:col-span-12 mb-8">  
              <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] block mb-4">  
                {article.category}  
              </span>  
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8">  
                {article.title}  
              </h1>

              <div className="flex flex-wrap items-center gap-8 text-[10px] uppercase tracking-widest text-white/40 border-y border-white/10 py-6">  
                <div>Written by <span className="text-white ml-1">{article.author || 'NexVoyage Editorial'}</span></div>  
                <div>Published <span className="text-white ml-1">{new Date(article.published_at || article.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span></div>  
              </div>  
            </div>

            {article.image_url && (  
              <div className="lg:col-span-12 mb-16 overflow-hidden aspect-[21/9] group relative">  
                <img  
                  src={article.image_url}  
                  alt={article.title}  
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out filter grayscale-0 group-hover:grayscale group-hover:scale-105"  
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />  
              </div>  
            )}

            <div className="lg:col-span-8 lg:col-start-3">  
              <div  
                className="prose prose-invert prose-lg max-w-none  
                  prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-8  
                  prose-headings:font-light prose-headings:tracking-tight prose-headings:text-white  
                  prose-strong:text-[#D4AF37] prose-strong:font-normal  
                  prose-blockquote:border-[#D4AF37] prose-blockquote:text-[#D4AF37] prose-blockquote:italic  
                  prose-img:rounded-none"  
                dangerouslySetInnerHTML={{ __html: article.content_html || article.body || '' }}  
              />

              {tags.length > 0 && (  
                <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap gap-3">  
                  {tags.map((tag: string) => (  
                    <span  
                      key={tag}  
                      className="px-4 py-1.5 border border-white/20 text-[9px] uppercase tracking-[0.2em] text-white/60 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300"  
                    >  
                      {tag}  
                    </span>  
                  ))}  
                </div>  
              )}  
            </div>  
          </div>  
        </main>  
        <Footer />  
      </div>  
    )  
  } catch (error) {  
    console.error('Error fetching article:', error)  
    return (  
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-10">  
        <div className="text-center">  
          <h2 className="text-2xl font-light mb-4 text-[#D4AF37]">SYSTEM_CRASH</h2>  
          <p className="text-xs tracking-widest text-white/40 uppercase">Connection to perspective_ledger lost.</p>  
          <Link href="/perspective" className="mt-8 inline-block text-[10px] uppercase tracking-widest border-b border-[#D4AF37] pb-1">Return to Archive</Link>  
        </div>  
      </div>  
    )  
  }  
}  
