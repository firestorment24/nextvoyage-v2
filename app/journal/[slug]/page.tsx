'use client'

import { useParams } from 'next/navigation'  
import Navigation from '../../Navigation'  
import Footer from '../../components/Footer'

// Mock post data (ideally this moves to a lib/posts.ts later)  
const posts = {  
  'art-of-the-unreachable': {  
    title: "The Art of the Unreachable",  
    category: "Philosophy",  
    date: "June 2026",  
    content: [  
      { type: 'text', value: "True luxury is no longer about ownership; it is about access to the inaccessible. In a world where everything is available at a click, the only thing of value is that which cannot be searched for." },  
      { type: 'pullquote', value: "Access is the new currency, but silence is the ultimate luxury." },  
      { type: 'text', value: "We find that our clients are moving away from the 'known' destinations. They are looking for the white space on the map—the places where the signal drops and the service begins." }  
    ],  
    nextSlug: 'tempo-and-territory'  
  },  
  // ... other posts  
}

export default function ArticlePage() {  
  const { slug } = useParams()  
  const post = posts[slug as keyof typeof posts]

  if (!post) return <div>Post not found.</div>

  return (  
    <main className="min-h-screen bg-white text-[#1a1a1a] font-light">  
      <Navigation />  
        
      {/* Article Header */}  
      <header className="pt-40 pb-20 px-6 max-w-screen-md mx-auto text-center">  
        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 mb-6 block">  
          {post.category} — {post.date}  
        </span>  
        <h1 className="text-4xl md:text-6xl font-normal tracking-tight leading-tight mb-12">  
          {post.title}  
        </h1>  
        <div className="w-px h-24 bg-neutral-200 mx-auto" />  
      </header>

      {/* Article Content */}  
      <article className="max-w-screen-sm mx-auto px-6 pb-32">  
        {post.content.map((block, i) => {  
          if (block.type === 'pullquote') {  
            return (  
              <blockquote key={i} className="my-20 -mx-4 md:-mx-20 text-2xl md:text-3xl italic font-serif text-neutral-800 text-center leading-relaxed">  
                "{block.value}"  
              </blockquote>  
            )  
          }  
          return (  
            <p key={i} className="text-lg md:text-xl leading-relaxed text-neutral-700 mb-8">  
              {block.value}  
            </p>  
          )  
        })}  
      </article>

      {/* Next Article Preview */}  
      {post.nextSlug && (  
        <section className="border-t border-neutral-100 py-32 px-6 bg-[#fafafa]">  
          <div className="max-w-screen-md mx-auto text-center">  
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-4 block">Next Perspective</span>  
            <a href={`/journal/${post.nextSlug}`} className="group">  
              <h2 className="text-3xl md:text-4xl hover:text-neutral-500 transition-colors">  
                {posts[post.nextSlug as keyof typeof posts]?.title}  
              </h2>  
              <div className="mt-8 inline-block text-xs uppercase tracking-widest border-b border-black pb-1 group-hover:border-neutral-400 transition-all">  
                Read Entry →  
              </div>  
            </a>  
          </div>  
        </section>  
      )}

      <Footer />  
    </main>  
  )  
}  
