import { sql } from '@vercel/postgres'  
import { notFound } from 'next/navigation'  
import Link from 'next/link'  
import Image from 'next/image'

export const revalidate = 0

export default async function PerspectiveArticle({ params }: { params: { slug: string } }) {  
const { slug } = params

// Look for the article by slug OR id (in case someone manually types the old URL)  
const { rows } = await sql`  
  SELECT * FROM perspectives   
  WHERE slug = ${slug}   
  OR id::text = ${slug}  
  LIMIT 1  
`

const article = rows[0]

if (!article) {  
  notFound()  
}

return (  
  <main className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-6">  
    <article className="max-w-3xl mx-auto">  
      {/* Back Button */}  
      <Link   
        href="/perspective"  
        className="inline-flex items-center gap-2 text-[#D4AF37]/50 hover:text-[#D4AF37] transition-colors text-[10px] tracking-[0.3em] uppercase mb-12 group"  
      >  
        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Perspectives  
      </Link>

      <header className="space-y-6 mb-12">  
        <div className="flex items-center gap-4">  
          <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase font-medium">  
            {article.category || 'Editorial'}  
          </span>  
          <div className="h-[1px] w-8 bg-[#D4AF37]/20" />  
          <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-light">  
            {new Date(article.date).toLocaleDateString('en-US', {  
              month: 'long',  
              day: 'numeric',  
              year: 'numeric'  
            })}  
          </span>  
        </div>

        <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">  
          {article.title}  
        </h1>

        <div className="pt-4">  
          <p className="text-[#D4AF37]/60 text-xs tracking-[0.2em] uppercase font-light">  
            Written by {article.author || 'NexVoyage Collective'}  
          </p>  
        </div>  
      </header>

      {article.image_url && (  
        <div className="relative aspect-video mb-16 border border-[#D4AF37]/10">  
          <Image  
            src={article.image_url}  
            alt={article.title}  
            fill  
            className="object-cover"  
          />  
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-40" />  
        </div>  
      )}

      <div className="prose prose-invert prose-brass max-w-none">  
        {/* Split content by newlines to create paragraphs */}  
        {article.content.split('\n').map((paragraph: string, idx: number) => (  
          paragraph.trim() && (  
            <p key={idx} className="text-lg text-white/70 leading-relaxed font-light mb-8">  
              {paragraph}  
            </p>  
          )  
        ))}  
      </div>

      <footer className="mt-20 pt-12 border-t border-[#D4AF37]/10">  
        <div className="flex flex-col items-center text-center space-y-6">  
          <div className="w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center">  
            <span className="text-[#D4AF37] text-xs">NV</span>  
          </div>  
          <p className="text-white/30 text-xs tracking-widest uppercase italic">  
            End of Entry — NexVoyage Registry  
          </p>  
        </div>  
      </footer>  
    </article>  
  </main>  
)  
}  
