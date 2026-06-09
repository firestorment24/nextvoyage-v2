import Link from 'next/link'

const ARTICLES = [  
{  
  slug: 'the-art-of-discretion',  
  category: 'Intelligence',  
  date: 'June 2026',  
  title: 'The Art of Discretion: Travel in the Age of Visibility',  
  excerpt: 'How the world’s most private individuals are redefining what it means to be truly "away" in a hyper-connected era.',  
  image: 'https://images.unsplash.com/photo-1449130017114-05811710d8d5?auto=format&fit=crop&q=80',  
  featured: true  
},  
{  
  slug: 'metropolitan-sanctuaries',  
  category: 'Collection',  
  date: 'May 2026',  
  title: 'Above the Glass Horizon',  
  excerpt: 'A study of the vertical retreats redefining luxury in the heart of global capitals.',  
  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',  
},  
{  
  slug: 'the-silent-concierge',  
  category: 'Perspective',  
  date: 'May 2026',  
  title: 'The Silent Concierge: Anticipation vs. Reaction',  
  excerpt: 'Why the best service is the one you never have to ask for. The psychology of invisible hospitality.',  
  image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',  
}  
]

export default function JournalPage() {  
const ArrowRight = () => (  
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">  
    <path d="M5 12h14M12 5l7 7-7 7"/>  
  </svg>  
)

return (  
  <main className="bg-black text-white selection:bg-white selection:text-black min-h-screen">  
    {/* Journal Header */}  
    <section className="pt-64 pb-32 px-8 max-w-7xl mx-auto border-b border-white/5">  
      <div className="max-w-2xl">  
        <span className="text-[10px] tracking-[0.5em] uppercase opacity-40 block mb-8">The Journal</span>  
        <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.85] mb-12 italic font-serif">  
          Quiet <br />Perspectives  
        </h1>  
        <p className="text-lg font-light opacity-50 leading-relaxed">  
          Essays on architectural solitude, the philosophy of service, and the evolving definition of privacy.  
        </p>  
      </div>  
    </section>

    {/* Featured Article */}  
    <section className="px-8 py-32 max-w-7xl mx-auto">  
      {ARTICLES.filter(a => a.featured).map(article => (  
        <Link key={article.slug} href={`/journal/${article.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">  
          <div className="lg:col-span-7 relative aspect-[16/9] overflow-hidden bg-white/5">  
            <img   
              src={article.image}   
              alt={article.title}   
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[2s] ease-out"  
            />  
          </div>  
          <div className="lg:col-span-5 space-y-8">  
            <div className="flex gap-4 items-center">  
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">{article.category}</span>  
              <div className="w-8 h-px bg-white/20" />  
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">{article.date}</span>  
            </div>  
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight group-hover:italic transition-all">  
              {article.title}  
            </h2>  
            <p className="text-lg opacity-50 font-light leading-relaxed">  
              {article.excerpt}  
            </p>  
            <div className="pt-4 flex items-center gap-4 text-xs tracking-[0.3em] uppercase group-hover:translate-x-2 transition-transform">  
              Read Story <ArrowRight />  
            </div>  
          </div>  
        </Link>  
      ))}  
    </section>

    {/* Secondary Grid */}  
    <section className="px-8 pb-40 max-w-7xl mx-auto">  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-32">  
        {ARTICLES.filter(a => !a.featured).map(article => (  
          <Link key={article.slug} href={`/journal/${article.slug}`} className="group space-y-10">  
            <div className="relative aspect-[4/5] overflow-hidden bg-white/5">  
              <img   
                src={article.image}   
                alt={article.title}   
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[1.5s] ease-out"  
              />  
            </div>  
            <div className="space-y-6">  
              <div className="flex gap-4 items-center">  
                <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">{article.category}</span>  
                <span className="text-[10px] tracking-[0.3em] uppercase opacity-20">/</span>  
                <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">{article.date}</span>  
              </div>  
              <h3 className="text-3xl font-light leading-snug group-hover:opacity-60 transition-opacity">  
                {article.title}  
              </h3>  
              <p className="text-sm opacity-40 font-light leading-relaxed max-w-md">  
                {article.excerpt}  
              </p>  
            </div>  
          </Link>  
        ))}  
      </div>  
    </section>  
  </main>  
)  
}  
