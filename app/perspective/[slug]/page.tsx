import { getArticleBySlug, getArticles } from "@/lib/perspective"  
import { notFound } from "next/navigation"  
import Link from "next/link"  
import Navigation from "@/components/Navigation"  
import Footer from "@/components/Footer"

export async function generateStaticParams() {  
  const articles = await getArticles()  
  return articles.map((a: { slug: string }) => ({ slug: a.slug }))  
}
 
export default async function PerspectiveDetailPage({  
  params,  
}: {  
  params: Promise<{ slug: string }>  
}) {  
  const { slug } = await params  
  const article = await getArticleBySlug(slug)

  if (!article) notFound()

  const imageUrl = article.image_url?.startsWith("http")  
    ? article.image_url  
    : article.image_url  
      ? `https://nextvoyage-website.s3.us-east-1.amazonaws.com/${article.image_url}`  
      : null

  return (  
    <main className="min-h-screen bg-stone-950 text-stone-200">  
      <Navigation />

      {/* Cinematic Hero */}  
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">  
        {imageUrl ? (  
          <img  
            src={imageUrl}  
            alt={article.title}  
            className="w-full h-full object-cover opacity-60"  
          />  
        ) : (  
          <div className="w-full h-full bg-stone-900 flex items-center justify-center">  
            <span className="text-6xl text-stone-700">◆</span>  
          </div>  
        )}  
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />  
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-20">  
          {article.category && (  
            <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-light">  
              {article.category}  
            </span>  
          )}  
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mt-3 max-w-3xl">  
            {article.title}  
          </h1>  
          {article.excerpt && (  
            <p className="text-stone-400 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">  
              {article.excerpt}  
            </p>  
          )}  
          <div className="flex items-center gap-3 text-xs text-stone-500 mt-4">  
            {article.author && (  
              <span className="flex items-center gap-1.5">  
                <span className="w-5 h-5 rounded-full bg-stone-800 flex items-center justify-center text-[10px] text-stone-400">  
                  {article.author.charAt(0)}  
                </span>  
                {article.author}  
              </span>  
            )}  
            {article.date && (  
              <span>  
                · {new Date(article.date).toLocaleDateString("en-US", {  
                  year: "numeric",  
                  month: "long",  
                  day: "numeric",  
                })}  
              </span>  
            )}  
          </div>  
        </div>  
      </section>

      {/* Article Body */}  
      <article className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">  
        {article.content ? (  
          <div  
            className="  
              prose prose-lg prose-invert  
              prose-stone  
              prose-headings:font-light prose-headings:text-stone-100  
              prose-headings:tracking-tight  
              prose-p:leading-[1.75] prose-p:text-stone-300  
              prose-p:tracking-wide  
              prose-a:text-stone-400 prose-a:underline-offset-4  
              prose-strong:text-stone-200  
              prose-blockquote:border-stone-700 prose-blockquote:text-stone-400  
              max-w-none  
            "  
            dangerouslySetInnerHTML={{ __html: article.content }}  
          />  
        ) : (  
          <p className="text-stone-500 italic">  
            Full article content coming soon.  
          </p>  
        )}

        {/* Lookbook Divider */}  
        <div className="mt-16 pt-12 border-t border-stone-800">  
          <Link  
            href="/perspective"  
            className="text-sm uppercase tracking-[0.2em] text-stone-400 hover:text-stone-200 transition-colors"  
          >  
            ← Back to Perspective  
          </Link>  
        </div>  
      </article>

      <Footer />  
    </main>  
  )  
}  
