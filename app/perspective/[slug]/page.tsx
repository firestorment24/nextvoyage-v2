import { sql } from "@/lib/db"  
import { notFound } from "next/navigation"  
import Link from "next/link"  
import { Navigation } from "@/components/Navigation"  
import { Footer } from "@/components/Footer"

export const revalidate = 0  
export const dynamic = "force-dynamic"

export default async function ArticlePage({  
  params,  
}: {  
  params: Promise<{ slug: string }>  
}) {  
  const { slug } = await params

  const [article] = await sql`  
    SELECT * FROM perspective_articles  
    WHERE slug = ${slug} OR id = ${slug}  
    LIMIT 1  
  `

  if (!article) notFound()

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-stone-200">  
      <Navigation variant="dark" />

      {/* Back link */}  
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-8">  
        <Link  
          href="/perspective"  
          className="text-amber-600/70 hover:text-amber-500 text-sm tracking-widest uppercase transition-colors"  
        >  
          ← Back to Perspective  
        </Link>  
      </div>

      {/* Article Header */}  
      <article className="max-w-4xl mx-auto px-6 pb-20">  
        {article.category && (  
          <span className="text-amber-600/80 text-xs tracking-[0.25em] uppercase font-light">  
            {article.category}  
          </span>  
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mt-4 mb-6 leading-tight tracking-tight">  
          {article.title}  
        </h1>

        {/* Author & Date */}  
        <div className="flex items-center gap-3 text-stone-500 text-sm mb-8">  
          {article.author && (  
            <span className="text-stone-400">{article.author}</span>  
          )}  
          {article.date && (  
            <time dateTime={article.date}>  
              {new Date(article.date).toLocaleDateString("en-US", {  
                year: "numeric",  
                month: "long",  
                day: "numeric",  
              })}  
            </time>  
          )}  
        </div>

        {/* Hero Image */}  
        {article.image_url && (  
          <div className="relative w-full aspect-[21/9] mb-16 overflow-hidden rounded-sm">  
            <img  
              src={article.image_url}  
              alt={article.title}  
              className="w-full h-full object-cover"  
            />  
          </div>  
        )}

        {/* Body Content — Editorial-grade prose */}  
        <div  
          className="prose prose-invert prose-lg max-w-3xl mx-auto leading-[1.9] space-y-6 prose-p:mb-6 prose-p:text-stone-300 prose-p:font-light prose-p:tracking-wide prose-p:leading-[1.9]"  
          dangerouslySetInnerHTML={{ __html: article.content || "" }}  
        />

        {/* Tags */}  
        {article.tags && article.tags.length > 0 && (  
          <div className="flex flex-wrap gap-2 mt-16 pt-8 border-t border-stone-800">  
            {article.tags.map((tag: string) => (  
              <span  
                key={tag}  
                className="text-xs text-stone-500 bg-stone-900/50 px-3 py-1.5 rounded-full tracking-wider uppercase"  
              >  
                {tag}  
              </span>  
            ))}  
          </div>  
        )}  
      </article>

      <Footer />  
    </main>  
  )  
}  
