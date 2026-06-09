import Link from 'next/link'  
import Navigation from '../Navigation'  
import Footer from '../components/Footer'

// Sample journal data - we can move this to lib/data.ts later  
const ARTICLES = [  
  {  
    slug: 'the-art-of-discretion',  
    title: 'The Art of Discretion: Travel in the Age of Visibility',  
    excerpt: 'How the world’s most private individuals are redefining what it means to be truly "away."',  
    category: 'Intelligence',  
    date: 'June 2026'  
  },  
  {  
    slug: 'metropolitan-sanctuaries',  
    title: 'Metropolitan Sanctuaries: Above the Glass Horizon',  
    excerpt: 'A study of the vertical retreats redefining luxury in the heart of the global capitals.',  
    category: 'Collection',  
    date: 'May 2026'  
  },  
  {  
    slug: 'the-silent-concierge',  
    title: 'The Silent Concierge: Anticipation vs. Reaction',  
    excerpt: 'Why the best service is the one you never have to ask for.',  
    category: 'Perspective',  
    date: 'May 2026'  
  }  
]

export default function JournalPage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white font-light selection:bg-white/20">  
      <Navigation />

      <section className="pt-40 pb-24 px-6 max-w-[1600px] mx-auto">  
        <header className="mb-20 border-b border-white/10 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">  
          <div className="max-w-2xl">  
            <h1 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none mb-6">  
              The <span className="italic">Journal</span>  
            </h1>  
            <p className="text-xl opacity-60 font-serif italic">  
              Intelligence, perspective, and the architecture of travel.  
            </p>  
          </div>  
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-40">  
            Issue No. 01 — 2026  
          </div>  
        </header>

        {/* Featured Article */}  
        <div className="mb-24">  
          <Link href={`/journal/${ARTICLES[0].slug}`} className="group block">  
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">  
              <div className="lg:col-span-8 aspect-[16/9] bg-neutral-900 relative overflow-hidden border border-white/5">  
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=2070')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />  
              </div>  
              <div className="lg:col-span-4">  
                <p className="text-[10px] uppercase tracking-[0.4em] mb-6 opacity-40">{ARTICLES[0].category} / {ARTICLES[0].date}</p>  
                <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6 group-hover:italic transition-all duration-500">  
                  {ARTICLES[0].title}  
                </h2>  
                <p className="text-lg opacity-60 leading-relaxed mb-8">  
                  {ARTICLES[0].excerpt}  
                </p>  
                <span className="text-[10px] uppercase tracking-[0.3em] border-b border-white/20 pb-2">Read The Story →</span>  
              </div>  
            </div>  
          </Link>  
        </div>

        {/* Secondary Grid */}  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/10 pt-24">  
          {ARTICLES.slice(1).map((article) => (  
            <Link key={article.slug} href={`/journal/${article.slug}`} className="group block">  
              <div className="aspect-video bg-neutral-900 mb-8 overflow-hidden relative border border-white/5">  
                 <div className="absolute inset-0 bg-neutral-800 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />  
              </div>  
              <p className="text-[10px] uppercase tracking-[0.4em] mb-4 opacity-40">{article.category} / {article.date}</p>  
              <h3 className="text-3xl font-serif mb-4 group-hover:italic transition-all">  
                {article.title}  
              </h3>  
              <p className="text-sm opacity-50 leading-relaxed max-w-md">  
                {article.excerpt}  
              </p>  
            </Link>  
          ))}  
        </div>  
      </section>

      <Footer />  
    </main>  
  )  
}  
