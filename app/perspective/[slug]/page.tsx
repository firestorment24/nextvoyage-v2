import { sql } from "@vercel/postgres"  
import { notFound } from "next/navigation"  
import Link from "next/link"  
import Navigation from "@/components/Navigation"  
import Footer from "@/components/Footer"

export const revalidate = 0  
export const dynamic = "force-dynamic"

interface Article {  
  id: number  
  slug: string  
  title: string  
  category: string  
  date: string  
  excerpt: string  
  image: string  
  tags: string[]  
  content: string  
}

function formatDate(dateString: string) {  
  const date = new Date(dateString)  
  return date.toLocaleDateString("en-US", {  
    year: "numeric",  
    month: "long",  
    day: "numeric",  
  })  
}

export default async function PerspectiveArticlePage({  
  params,  
}: {  
  params: { slug: string }  
}) {  
  const { rows } = await sql`  
    SELECT * FROM perspective_articles WHERE slug = ${params.slug}  
  `

  if (rows.length === 0) {  
    notFound()  
  }

  const article = rows[0] as unknown as Article

  return (  
    <main className="min-h-screen bg-stone-950 text-stone-200">  
      <Navigation />

      {/* Hero Section */}  
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">  
        <img  
          src={article.image}  
          alt={article.title}  
          className="w-full h-full object-cover opacity-60"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />  
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-20">  
          <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-light">  
            {article.category}  
          </span>  
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mt-3 max-w-3xl">  
            {article.title}  
          </h1>  
          <p className="text-sm text-stone-400 mt-4">  
            {formatDate(article.date)}  
          </p>  
        </div>  
      </section>

      {/* Article Body */}  
      <article className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">  
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
