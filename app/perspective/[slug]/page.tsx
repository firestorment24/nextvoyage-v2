import { getArticleBySlug, getArticles } from "@/lib/perspective"  
import { notFound } from "next/navigation"  
import Navigation from "@/components/Navigation"  
import Link from "next/link"  
import Image from "next/image"

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
<main className="bg-[#0A0A0A] text-white min-h-screen font-serif selection:bg-[#D4AF37] selection:text-[#0A0A0A]">  
  <Navigation />

  {/* Cinematic Hero */}  
  <div className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row">  
    <div className="relative w-full md:w-[60%] h-[50vh] md:h-full">  
      {imageUrl ? (  
        <Image  
          src={imageUrl}  
          alt={article.title}  
          fill  
          className="object-cover"  
          priority  
        />  
      ) : (  
        <div className="w-full h-full bg-gradient-to-br from-[#1A1A2E] to-[#0A0A0A] flex items-center justify-center">  
          <span className="text-[#D4AF37] text-6xl">◆</span>  
        </div>  
      )}  
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent md:bg-gradient-to-r md:from-[#0A0A0A] md:via-transparent md:to-transparent" />  
    </div>

    <div className="relative w-full md:w-[40%] flex flex-col justify-end md:justify-center px-8 md:px-12 pb-16 md:pb-0 -mt-24 md:mt-0 z-10">  
      {article.category && (  
        <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-4">  
          {article.category}  
        </span>  
      )}  
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">  
        {article.title}  
      </h1>  
      {article.excerpt && (  
        <p className="text-lg md:text-xl text-gray-300 font-sans font-light leading-relaxed max-w-xl">  
          {article.excerpt}  
        </p>  
      )}  
      <div className="flex items-center gap-4 mt-6 text-sm text-gray-400 font-sans">  
        {article.author && (  
          <span className="flex items-center gap-2">  
            <span className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-xs">  
              {article.author.charAt(0)}  
            </span>  
            {article.author}  
          </span>  
        )}  
        {article.date && (  
          <span>· {new Date(article.date).toLocaleDateString("en-US", {  
            year: "numeric",  
            month: "long",  
            day: "numeric",  
          })}</span>  
        )}  
      </div>  
    </div>  
  </div>

  <div className="max-w-3xl mx-auto px-6 md:px-8 py-20">  
    {article.content ? (  
      <div  
        className="prose prose-invert prose-lg max-w-none  
          prose-headings:font-serif prose-headings:text-white prose-headings:font-light  
          prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6  
          prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4  
          prose-p:text-gray-300 prose-p:leading-[1.9] prose-p:mb-6  
          prose-a:text-[#D4AF37] prose-a:no-underline hover:prose-a:underline  
          prose-blockquote:border-[#D4AF37] prose-blockquote:text-gray-300 prose-blockquote:font-light prose-blockquote:italic  
          prose-strong:text-white  
          prose-li:text-gray-300  
          prose-img:rounded-lg prose-img:my-12"  
        dangerouslySetInnerHTML={{ __html: article.content }}  
      />  
    ) : (  
      <p className="text-gray-500 italic">Full article content coming soon.</p>  
    )}  
  </div>

  <div className="relative w-full h-64 md:h-96 overflow-hidden">  
    {imageUrl && (  
      <Image  
        src={imageUrl}  
        alt=""  
        fill  
        className="object-cover opacity-40"  
      />  
    )}  
    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]" />  
    <div className="absolute inset-0 flex items-center justify-center">  
      <span className="text-[#D4AF37]/40 text-8xl md:text-9xl font-serif italic">  
        ◆  
      </span>  
    </div>  
  </div>

  <div className="border-t border-white/10 py-12 px-6 md:px-8">  
    <Link  
      href="/perspective"  
      className="inline-flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors font-sans text-sm tracking-wider uppercase"  
    >  
      <span>←</span>  
      <span>Back to Perspective</span>  
    </Link>  
  </div>  
</main>  
)  
}  
