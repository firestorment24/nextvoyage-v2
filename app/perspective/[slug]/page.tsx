import { sql } from '@vercel/postgres'  
import { notFound } from 'next/navigation'  
import Link from 'next/link'  
import Navigation from '@/components/Navigation'  
import Footer from '@/components/Footer'

export const revalidate = 0  
export const dynamic = 'force-dynamic'

export default async function PerspectiveDetail({ params }: { params: Promise<{ slug: string }> }) {  
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
      
    // Fetch related articles for the footer  
    const { rows: related } = await sql`  
      SELECT title, slug, image_url, category FROM perspective_articles  
      WHERE slug != ${article.slug}  
      ORDER BY published_at DESC  
      LIMIT 2  
    `

    return (  
      <main className="bg-[#0A0A0A] text-white min-h-screen font-serif selection:bg-[#D4AF37] selection:text-black">  
        <Navigation transparent />

        {/* Cinematic Hero */}  
        <div className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row">  
          <div className="w-full md:w-1/3 h-1/2 md:h-full bg-black flex flex-col justify-end p-8 md:p-16 border-r border-[#D4AF37]/20 z-10">  
            <div className="mb-8">  
              <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] block mb-4">  
                {article.category || 'Perspective'} — Dossier {article.id.toString().padStart(2, '0')}  
              </span>  
              <h1 className="text-4xl md:text-6xl font-normal leading-tight tracking-tight">  
                {article.title}  
              </h1>  
            </div>  
            <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest text-zinc-500 border-t border-zinc-800 pt-8">  
              <div>  
                <span className="block text-zinc-600 mb-1 italic uppercase">Author</span>  
                {article.author || 'Daryl Clark'}  
              </div>  
              <div>  
                <span className="block text-zinc-600 mb-1 italic uppercase">Dispatch Date</span>  
                {new Date(article.published_at || article.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}  
              </div>  
            </div>  
          </div>  
            
          <div className="w-full md:w-2/3 h-1/2 md:h-full relative group">  
            <img   
              src={article.image_url || 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=2070'}   
              alt={article.title}  
              className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 scale-105 group-hover:scale-100"  
            />  
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent md:block hidden" />  
            <div className="absolute bottom-8 right-8 text-[10px] text-white/30 uppercase tracking-[0.2em] font-sans">  
              Visual Narrative: 01 / {article.slug}  
            </div>  
          </div>  
        </div>

        {/* Editorial Content Layer */}  
        <section className="py-24 px-8 md:px-0 max-w-7xl mx-auto">  
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">  
              
            {/* The Sidebar (Manifest Pillars) */}  
            <aside className="md:col-span-3 hidden md:block">  
              <div className="sticky top-32 space-y-12">  
                <div>  
                  <h3 className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] mb-6">Article Pillars</h3>  
                  <div className="space-y-4">  
                    {article.tags && article.tags.map((tag: string) => (  
                      <div key={tag} className="text-[11px] text-zinc-400 uppercase tracking-widest flex items-center gap-3">  
                        <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />  
                        {tag}  
                      </div>  
                    ))}  
                  </div>  
                </div>  
                  
                <div className="pt-12 border-t border-zinc-900">  
                  <h3 className="text-zinc-600 text-[9px] uppercase tracking-[0.3em] mb-4">Share Perspective</h3>  
                  <div className="flex gap-4 opacity-50 hover:opacity-100 transition-opacity">  
                    <span className="text-[10px] cursor-pointer hover:text-[#D4AF37]">X</span>  
                    <span className="text-[10px] cursor-pointer hover:text-[#D4AF37]">LN</span>  
                    <span className="text-[10px] cursor-pointer hover:text-[#D4AF37]">CP</span>  
                  </div>  
                </div>  
              </div>  
            </aside>

            {/* Main Editorial Body */}  
            <article className="md:col-span-6 space-y-12">  
              <div className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic border-l-2 border-[#D4AF37] pl-8 py-2">  
                {article.excerpt}  
              </div>

              <div   
                className="prose prose-invert prose-amber max-w-none   
                  prose-p:text-lg prose-p:leading-relaxed prose-p:text-zinc-300 prose-p:font-light  
                  prose-headings:font-normal prose-headings:tracking-tight prose-headings:text-white  
                  prose-strong:text-[#D4AF37] prose-strong:font-normal  
                  prose-blockquote:border-[#D4AF37] prose-blockquote:bg-zinc-950 prose-blockquote:p-8 prose-blockquote:rounded-sm  
                  first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#D4AF37]"  
                dangerouslySetInnerHTML={{ __html: article.content }}  
              />

              {/* Lookbook Callout (Static Example of dynamic vision) */}  
              <div className="my-20 p-12 bg-zinc-950 border border-zinc-900 relative overflow-hidden group">  
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">  
                  <div className="md:w-1/2 space-y-6">  
                    <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em]">Lookbook Spotlight</span>  
                    <h2 className="text-3xl font-light tracking-tight">The Architecture of Silence</h2>  
                    <p className="text-zinc-500 text-sm leading-relaxed">  
                      Every NexVoyage sanctuary is audited for acoustic privacy. From triple-glazed heritage glass to the selection of sound-absorbing textiles, we treat silence as a structural requirement.  
                    </p>  
                    <Link href="/sanctuaries" className="inline-block text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] border-b border-[#D4AF37]/30 pb-1 hover:border-[#D4AF37] transition-all">  
                      Explore Sanctuaries  
                    </Link>  
                  </div>  
                  <div className="md:w-1/2 overflow-hidden aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700">  
                    <img   
                      src="https://images.unsplash.com/photo-1600607687940-4e524cb35a36?q=80&w=2000&auto=format&fit=crop"   
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"  
                    />  
                  </div>  
                </div>  
              </div>  
            </article>

            {/* Right Side / Quote Layer */}  
            <aside className="md:col-span-3 space-y-24">  
              <div className="text-4xl text-zinc-800 font-light leading-none rotate-90 origin-left translate-x-12 translate-y-24 opacity-20 pointer-events-none select-none">  
                THE MANIFESTO  
              </div>  
                
              <div className="space-y-4 pt-48">  
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Key Reflection</p>  
                <p className="text-sm italic text-zinc-400 leading-relaxed">  
                  "Luxury is not the presence of objects, but the absence of noise. The higher the performance, the quieter the engine."  
                </p>  
              </div>  
            </aside>  
          </div>  
        </section>

        {/* Footer Navigation / Further Reading */}  
        <section className="bg-black py-24 border-t border-zinc-900 px-8">  
          <div className="max-w-7xl mx-auto">  
            <h2 className="text-[#D4AF37] text-[10px] uppercase tracking-[0.5em] mb-16 text-center">Further Perspectives</h2>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">  
              {related.map((post) => (  
                <Link key={post.slug} href={`/perspective/${post.slug}`} className="bg-black group overflow-hidden relative p-12 md:p-24 transition-colors hover:bg-zinc-950">  
                  <div className="relative z-10 space-y-4">  
                    <span className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] block">  
                      {post.category || 'Editorial'}  
                    </span>  
                    <h3 className="text-2xl md:text-3xl font-light group-hover:text-[#D4AF37] transition-colors">{post.title}</h3>  
                    <div className="pt-4 flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-zinc-500">  
                      View Dossier <div className="w-8 h-px bg-zinc-800 group-hover:w-16 group-hover:bg-[#D4AF37] transition-all" />  
                    </div>  
                  </div>  
                  <img   
                    src={post.image_url}   
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity grayscale"  
                  />  
                </Link>  
              ))}  
            </div>  
          </div>  
        </section>

        <Footer />  
      </main>  
    )  
  } catch (error) {  
    console.error('Render error:', error)  
    return (  
      <div className="min-h-screen bg-black flex items-center justify-center p-8">  
        <div className="text-center space-y-4 max-w-md">  
          <div className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em]">System Error: 500</div>  
          <h1 className="text-2xl font-serif text-white">Dossier Retrieval Failed</h1>  
          <p className="text-zinc-500 text-sm">The requested perspective could not be compiled. Please return to the hub.</p>  
          <Link href="/perspective" className="inline-block pt-8 text-[10px] uppercase tracking-widest text-[#D4AF37] border-b border-[#D4AF37]/30 hover:border-[#D4AF37]">  
            Return to Perspective  
          </Link>  
        </div>  
      </div>  
    )  
  }  
}  
