import Link from 'next/link';

const JOURNAL_ENTRIES = [  
  {  
    title: "The South Pacific Drift",  
    category: "Intelligence",  
    date: "JUNE 2026",  
    slug: "the-south-pacific-drift",  
    excerpt: "Analysis of the new ultra-remote: From private atolls to heli-access ridge estates.",  
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80"  
  },  
  {  
    title: "European Prestige Anchors",  
    category: "Seasonal",  
    date: "JUNE 2026",  
    slug: "european-prestige-anchors",  
    excerpt: "The shift from Old World luxury to Living History in the Mediterranean.",  
    image: "https://images.unsplash.com/photo-1519922639192-e73293ca430e?auto=format&fit=crop&q=80"  
  }  
];

export default function JournalHub() {  
  return (  
    <main className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] pt-32 pb-24">  
      <div className="max-w-6xl mx-auto px-6">  
        <header className="mb-20">  
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-4">The Journal</h1>  
          <p className="text-xl text-stone-500 font-light">Tactical Intelligence & Seasonal Curation.</p>  
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">  
          {JOURNAL_ENTRIES.map((entry) => (  
            <Link key={entry.slug} href={`/journal/${entry.slug}`} className="group">  
              <article>  
                <div className="aspect-[4/5] bg-stone-200 mb-8 overflow-hidden">  
                  <img   
                    src={entry.image}   
                    alt={entry.title}   
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"  
                  />  
                </div>  
                <div className="flex items-center space-x-4 mb-4 text-[10px] uppercase tracking-[0.2em] text-stone-500 font-medium">  
                  <span>{entry.category}</span>  
                  <span className="w-8 h-[1px] bg-stone-300"></span>  
                  <span>{entry.date}</span>  
                </div>  
                <h2 className="text-3xl font-light tracking-tight mb-4 group-hover:italic transition-all">  
                  {entry.title}  
                </h2>  
                <p className="text-stone-600 font-light leading-relaxed mb-6">  
                  {entry.excerpt}  
                </p>  
                <span className="text-[10px] uppercase tracking-widest border-b border-black pb-1 group-hover:text-stone-500 group-hover:border-stone-500 transition-all">  
                  Read Intelligence Report  
                </span>  
              </article>  
            </Link>  
          ))}  
        </div>  
      </div>  
    </main>  
  );  
}  
