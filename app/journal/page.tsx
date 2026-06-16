import Link from 'next/link'

const ARTICLES = [  
  {  
    id: 'the-south-pacific-drift',  
    title: 'The South Pacific Drift',  
    category: 'Intelligence',  
    date: 'JUNE 2026',  
    excerpt: 'An analysis of private island accessibility and the shifting currents of Polynesian seclusion.'  
  },  
  {  
    id: 'european-prestige-anchors',  
    title: 'European Prestige Anchors',  
    category: 'Seasonal',  
    date: 'JUNE 2026',  
    excerpt: 'Securing berthage in the Mediterranean’s most guarded marinas ahead of the gala season.'  
  },  
  {  
    id: 'the-art-of-discretion',  
    title: 'The Art of Discretion',  
    category: 'Philosophy',  
    date: 'MAY 2026',  
    excerpt: 'Why the most exclusive experiences are the ones that never appear on a map.'  
  }  
]

export default function JournalPage() {  
  return (  
    <main className="min-main-screen bg-[#0a0a0a] text-[#A69F88] selection:bg-[#A69F88] selection:text-[#0a0a0a]">  
      {/* Header Section */}  
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-b border-[#A69F88]/10">  
        <div className="flex flex-col space-y-2 mb-12">  
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-50">  
            Volume 01 // The Master Ledger  
          </span>  
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight text-[#A69F88]">  
            The Journal  
          </h1>  
        </div>  
          
        <p className="max-w-xl text-lg font-serif italic opacity-80 leading-relaxed">  
          "True travel is not about the destination, but the orchestration of silence and the preservation of the unknown."  
        </p>  
      </header>

      {/* Featured Entry */}  
      <section className="max-w-6xl mx-auto px-6 py-20">  
        <Link href={`/journal/${ARTICLES[0].id}`} className="group block">  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">  
            <div className="space-y-6">  
              <div className="flex items-center space-x-4 font-mono text-[10px] tracking-widest uppercase">  
                <span className="px-2 py-1 border border-[#A69F88]/30">Featured</span>  
                <span className="opacity-50">{ARTICLES[0].category} // {ARTICLES[0].date}</span>  
              </div>  
              <h2 className="text-5xl md:text-6xl font-serif group-hover:italic transition-all duration-500">  
                {ARTICLES[0].title}  
              </h2>  
            </div>  
            <div className="pb-2">  
              <p className="text-sm opacity-60 leading-relaxed max-w-sm mb-6">  
                {ARTICLES[0].excerpt}  
              </p>  
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase border-b border-[#A69F88] pb-1 group-hover:pr-4 transition-all">  
                Read Entry  
              </span>  
            </div>  
          </div>  
        </Link>  
      </section>

      {/* The Grid / Ledger Rows */}  
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-[#A69F88]/10">  
        <div className="space-y-0">  
          {ARTICLES.slice(1).map((article) => (  
            <Link   
              key={article.id}   
              href={`/journal/${article.id}`}  
              className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-[#A69F88]/5 hover:bg-[#A69F88]/[0.02] transition-colors px-4 -mx-4"  
            >  
              <div className="flex flex-col space-y-1">  
                <span className="font-mono text-[9px] tracking-widest uppercase opacity-40">  
                  {article.category}  
                </span>  
                <h3 className="text-3xl font-serif group-hover:translate-x-2 transition-transform duration-500">  
                  {article.title}  
                </h3>  
              </div>  
              <div className="flex flex-col md:items-end mt-4 md:mt-0 space-y-1">  
                <span className="font-mono text-[10px] opacity-40">{article.date}</span>  
                <span className="text-xs italic opacity-0 group-hover:opacity-60 transition-opacity font-serif">  
                  View Intelligence  
                </span>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Footer Navigation */}  
      <footer className="max-w-6xl mx-auto px-6 py-24 flex justify-between items-center opacity-40 font-mono text-[10px] tracking-[0.3em] uppercase">  
        <span>End of Ledger // Page 01 of 27</span>  
        <Link href="/invitation" className="hover:text-[#A69F88] hover:opacity-100 transition-all">  
          Next Pillar: Invitation →  
        </Link>  
      </footer>

      {/* Subtle Ambient Glow */}  
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">  
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#A69F88]/5 rounded-full blur-[120px]" />  
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#A69F88]/5 rounded-full blur-[120px]" />  
      </div>  
    </main>  
  )  
}  
