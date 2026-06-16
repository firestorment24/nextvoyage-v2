import Link from 'next/link'

const ARTICLES = [  
  {  
    id: 'the-south-pacific-drift',  
    title: 'The South Pacific Drift',  
    category: 'CURATION',  
    location: 'POLYNESIA',  
    image: 'https://cdn.marblism.com/qFTkeALRTbV.webp',  
    excerpt: 'An exploration of the world’s most remote archipelagos, where luxury is defined by silence and the absence of a signal.'  
  },  
  {  
    id: 'european-prestige-anchors',  
    title: 'European Prestige Anchors',  
    category: 'THE COLLECTION',  
    location: 'MONACO // AMALFI',  
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop', // Moody yacht/coastline  
    excerpt: 'Securing the unreachable. A guide to the Mediterranean’s most guarded marinas and private berths.'  
  },  
  {  
    id: 'the-art-of-discretion',  
    title: 'The Art of Discretion',  
    category: 'PERSPECTIVE',  
    location: 'GLOBAL',  
    image: 'https://images.unsplash.com/photo-1493333858339-4c486682664d?q=80&w=2070&auto=format&fit=crop', // Moody interior/shadows  
    excerpt: 'In an era of total visibility, the ultimate luxury is being completely unaccounted for.'  
  }  
]

export default function JournalPage() {  
  return (  
    <main className="min-h-screen bg-[#000000] text-[#D4AF37] selection:bg-[#D4AF37] selection:text-[#000000]">  
        
      {/* Editorial Header */}  
      <header className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">  
        <div className="inline-block border-b border-[#D4AF37]/20 pb-4 mb-8">  
          <span className="font-mono text-[10px] tracking-[0.6em] uppercase opacity-60">  
            NexVoyage Editorial // Volume 01  
          </span>  
        </div>  
        <h1 className="text-7xl md:text-[9rem] font-serif tracking-tighter leading-none mb-12 italic">  
          The Journal  
        </h1>  
      </header>

      {/* Hero Narrative */}  
      <section className="relative w-full h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden border-y border-[#D4AF37]/10">  
        <div className="absolute inset-0 z-0">  
          <img   
            src={ARTICLES[0].image}   
            alt="Feature"   
            className="w-full h-full object-cover scale-105 opacity-40 grayscale"  
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-transparent to-[#000000]" />  
          <div className="absolute inset-0 bg-[#000000]/20" />  
        </div>

        <div className="relative z-10 max-w-4xl px-6">  
          <span className="font-mono text-[10px] tracking-[0.5em] uppercase mb-6 block opacity-80">  
            {ARTICLES[0].category} — {ARTICLES[0].location}  
          </span>  
          <Link href={`/journal/${ARTICLES[0].id}`} className="group">  
            <h2 className="text-5xl md:text-8xl font-serif leading-tight tracking-tight mb-8 group-hover:text-[#D4AF37]/80 transition-colors">  
              {ARTICLES[0].title}  
            </h2>  
            <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mb-8 group-hover:w-48 transition-all duration-700" />  
            <p className="text-xl md:text-2xl font-serif italic opacity-60 max-w-2xl mx-auto leading-relaxed">  
              "{ARTICLES[0].excerpt}"  
            </p>  
          </Link>  
        </div>  
      </section>

      {/* The Collection Grid */}  
      <section className="max-w-7xl mx-auto px-6 py-40">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-40">  
          {ARTICLES.slice(1).map((article, idx) => (  
            <Link   
              key={article.id}   
              href={`/journal/${article.id}`}  
              className={`group flex flex-col ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}  
            >  
              <div className="relative aspect-[3/4] overflow-hidden mb-12 border border-[#D4AF37]/10 bg-[#0a0a0a]">  
                <img   
                  src={article.image}   
                  alt={article.title}  
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:scale-110 group-hover:opacity-70 transition-all duration-1000"  
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent" />  
              </div>  
                
              <div className="space-y-4">  
                <div className="flex justify-between items-center font-mono text-[9px] tracking-[0.4em] uppercase opacity-50">  
                  <span>{article.category}</span>  
                  <span>{article.location}</span>  
                </div>  
                <h3 className="text-4xl md:text-5xl font-serif tracking-tight leading-none group-hover:italic transition-all">  
                  {article.title}  
                </h3>  
                <p className="text-sm font-serif italic opacity-40 max-w-xs leading-relaxed">  
                  {article.excerpt}  
                </p>  
                <div className="pt-4 overflow-hidden">  
                   <span className="inline-block font-mono text-[10px] tracking-widest border-b border-[#D4AF37]/30 pb-1 translate-y-0 group-hover:translate-x-2 transition-transform duration-500">  
                    Read Narrative →  
                   </span>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Global Aesthetics */}  
      <div className="fixed inset-0 pointer-events-none z-[60]">  
        {/* Soft Vignette */}  
        <div className="absolute inset-0 shadow-[inset_0_0_15vw_rgba(0,0,0,0.9)]" />  
        {/* Film Grain Texture - Assuming the SVG filter is in layout.tsx */}  
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-32 border-t border-[#D4AF37]/10 text-center">  
        <h4 className="font-serif italic text-3xl opacity-60 mb-12">  
          Finely Tuned Travel. Private Orchestration.  
        </h4>  
        <div className="flex justify-center space-x-12 font-mono text-[9px] tracking-[0.5em] uppercase opacity-30">  
          <Link href="/lobby" className="hover:opacity-100 transition-opacity">The Lobby</Link>  
          <Link href="/archive" className="hover:opacity-100 transition-opacity">Archive</Link>  
          <Link href="/perspective" className="hover:opacity-100 transition-opacity">Perspective</Link>  
          <Link href="/invitation" className="hover:opacity-100 transition-opacity">Invitation</Link>  
        </div>  
      </footer>  
    </main>  
  )  
}  
