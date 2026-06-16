import Link from 'next/link'

const ARTICLES = [  
  {  
    id: 'the-south-pacific-drift',  
    title: 'The South Pacific Drift',  
    category: 'INTELLIGENCE',  
    date: '06.16.2026',  
    image: 'https://cdn.marblism.com/qFTkeALRTbV.webp', // Moody island/water shot  
    excerpt: 'An analysis of private island accessibility and the shifting currents of Polynesian seclusion.'  
  },  
  {  
    id: 'european-prestige-anchors',  
    title: 'European Prestige Anchors',  
    category: 'LOGISTICS',  
    date: '06.12.2026',  
    excerpt: 'Securing berthage in the Mediterranean’s most guarded marinas ahead of the gala season.'  
  },  
  {  
    id: 'the-art-of-discretion',  
    title: 'The Art of Discretion',  
    category: 'PHILOSOPHY',  
    date: '05.29.2026',  
    excerpt: 'Why the most exclusive experiences are the ones that never appear on a map.'  
  }  
]

export default function JournalPage() {  
  return (  
    <main className="min-h-screen bg-[#000000] text-[#D4AF37] selection:bg-[#D4AF37] selection:text-[#000000] overflow-x-hidden">  
        
      {/* Cinematic Hero Section */}  
      <section className="relative h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-12">  
        <div className="absolute inset-0 z-0">  
          <img   
            src={ARTICLES[0].image}   
            alt="Hero"   
            className="w-full h-full object-cover opacity-30 grayscale contrast-125"  
          />  
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent" />  
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]" />  
        </div>

        <div className="relative z-10 max-w-5xl">  
          <Link href={`/journal/${ARTICLES[0].id}`} className="group inline-block">  
            <div className="flex items-center space-x-3 mb-6 font-mono text-[10px] tracking-[0.4em] uppercase">  
              <span className="w-8 h-[1px] bg-[#D4AF37]/50" />  
              <span className="text-[#D4AF37]/80">Current Intelligence // {ARTICLES[0].date}</span>  
            </div>  
            <h1 className="text-6xl md:text-[7rem] font-serif leading-[0.9] tracking-tighter mb-8 group-hover:italic transition-all duration-700">  
              {ARTICLES[0].title}  
            </h1>  
            <p className="text-lg md:text-xl font-serif italic text-[#D4AF37]/60 max-w-xl leading-relaxed mb-8">  
              "{ARTICLES[0].excerpt}"  
            </p>  
            <span className="font-mono text-[11px] tracking-[0.5em] uppercase border border-[#D4AF37]/30 px-6 py-3 group-hover:bg-[#D4AF37] group-hover:text-[#000000] transition-all">  
              Examine Entry  
            </span>  
          </Link>  
        </div>  
      </section>

      {/* The Ledger Rows (Shadow Aesthetic) */}  
      <section className="px-6 md:px-12 py-32 border-t border-[#D4AF37]/10">  
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">  
            
          {/* Vertical Label */}  
          <div className="hidden md:block md:col-span-1">  
            <span className="font-mono text-[10px] tracking-[0.6em] uppercase vertical-text opacity-30 rotate-180 whitespace-nowrap">  
              ARCHIVE // 2026  
            </span>  
          </div>

          <div className="md:col-span-11 space-y-32">  
            {ARTICLES.slice(1).map((article, idx) => (  
              <Link   
                key={article.id}   
                href={`/journal/${article.id}`}  
                className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-[#D4AF37]/5 pb-32"  
              >  
                <div className="space-y-4">  
                  <span className="font-mono text-[9px] tracking-widest text-[#D4AF37]/40">  
                    ENTRY {idx + 2} — {article.category}  
                  </span>  
                  <h2 className="text-4xl md:text-5xl font-serif tracking-tight group-hover:pl-4 transition-all duration-500">  
                    {article.title}  
                  </h2>  
                </div>  
                <div className="md:pl-12">  
                  <p className="text-sm font-serif italic opacity-50 leading-relaxed mb-6 max-w-xs">  
                    {article.excerpt}  
                  </p>  
                  <div className="flex items-center space-x-4">  
                    <span className="font-mono text-[10px] tracking-widest uppercase opacity-30">{article.date}</span>  
                    <span className="w-12 h-[1px] bg-[#D4AF37]/20 group-hover:w-24 group-hover:bg-[#D4AF37] transition-all" />  
                  </div>  
                </div>  
              </Link>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* Global Vignette Overlay */}  
      <div className="fixed inset-0 pointer-events-none z-50 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />  
        
      {/* Ambient Soul Accents */}  
      <div className="fixed top-1/4 -left-20 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />  
      <div className="fixed bottom-1/4 -right-20 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      <footer className="px-6 md:px-12 py-24 border-t border-[#D4AF37]/10 flex flex-col md:flex-row justify-between items-center opacity-30 font-mono text-[9px] tracking-[0.5em] uppercase">  
        <div className="mb-4 md:mb-0 text-center md:text-left">  
          NexVoyage Collective // Private Implementation  
        </div>  
        <div className="flex space-x-12">  
          <Link href="/archive" className="hover:text-[#D4AF37] hover:opacity-100 transition-all">Archive</Link>  
          <Link href="/invitation" className="hover:text-[#D4AF37] hover:opacity-100 transition-all">Invitation</Link>  
        </div>  
      </footer>  
    </main>  
  )  
}  
