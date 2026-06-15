import { sql } from '@vercel/postgres'  
import Link from 'next/link'  
import Image from 'next/image'

export const revalidate = 0

export default async function PerspectivesPage() {  
  const { rows: articles } = await sql`  
    SELECT * FROM perspectives   
    ORDER BY date DESC, id DESC  
  `

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-6">  
      <div className="max-w-6xl mx-auto">  
        <header className="mb-16 border-b border-[#D4AF37]/20 pb-8">  
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase mb-4">  
            Perspectives  
          </h1>  
          <p className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs">  
            Editorial & Manifestos  
          </p>  
        </header>

        {articles.length === 0 ? (  
          <div className="py-20 text-center border border-[#D4AF37]/10 bg-[#111]/50">  
            <p className="text-[#D4AF37]/40 tracking-widest uppercase text-sm italic">  
              The ledger is currently empty.  
            </p>  
          </div>  
        ) : (  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
            {articles.map((article) => (  
              <Link   
                key={article.id}   
                href={`/perspective/${article.slug || article.id}`}  
                className="group block space-y-6"  
              >  
                <div className="relative aspect-[16/10] overflow-hidden bg-[#111] border border-[#D4AF37]/10">  
                  {article.image_url ? (  
                    <Image  
                      src={article.image_url}  
                      alt={article.title}  
                      fill  
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"  
                    />  
                  ) : (  
                    <div className="w-full h-full flex items-center justify-center text-[#D4AF37]/20">  
                      NO IMAGE  
                    </div>  
                  )}  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60" />  
                </div>

                <div className="space-y-3">  
                  <div className="flex justify-between items-center">  
                    <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase font-medium">  
                      {article.category || 'Editorial'}  
                    </span>  
                    <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-light">  
                      {new Date(article.date).toLocaleDateString('en-US', {  
                        month: 'short',  
                        day: 'numeric',  
                        year: 'numeric'  
                      })}  
                    </span>  
                  </div>  
                    
                  <h2 className="text-2xl font-light tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">  
                    {article.title}  
                  </h2>  
                    
                  <p className="text-white/50 text-sm leading-relaxed font-light line-clamp-3">  
                    {article.content.substring(0, 150)}...  
                  </p>

                  <div className="pt-4 flex items-center gap-4">  
                    <div className="h-[1px] w-8 bg-[#D4AF37]/30 group-hover:w-16 transition-all duration-500" />  
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500">  
                      Read Entry  
                    </span>  
                  </div>  
                </div>  
              </Link>  
            ))}  
          </div>  
        )}  
      </div>  
    </main>  
  )  
}  
