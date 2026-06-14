// app/perspective/page.tsx  
import Link from 'next/link';

const coreVolumes = [  
  {  
    title: "The Silent ROI",  
    slug: "the-silent-roi",  
    excerpt: "Why the ultimate luxury is a nervous system at rest.",  
    volume: "Vol. 01"  
  },  
  {  
    title: "The Architecture of Calm",  
    slug: "the-architecture-of-calm",  
    excerpt: "Tactile seclusion and the design of stillness.",  
    volume: "Vol. 02"  
  },  
  {  
    title: "The Shadow of Protection",  
    slug: "the-shadow-of-protection",  
    excerpt: "Privacy as the final frontier of the high-net-worth experience.",  
    volume: "Vol. 03"  
  }  
];

const supportingDispatches = [  
  {  
    title: "The Quiet Recalibration",  
    slug: "the-quiet-recalibration",  
    category: "Wellness",  
    excerpt: "Navigating discrete wellness through dark stone and burnished brass."  
  },  
  {  
    title: "The Architecture of the Journey",  
    slug: "the-architecture-of-the-journey",  
    category: "Itineraries",  
    excerpt: "The invisible hand of radical personalization."  
  },  
  {  
    title: "The Logistics of Composure",  
    slug: "the-logistics-of-composure",  
    category: "Aviation",  
    excerpt: "Private aviation as the infrastructure for sovereignty over time."  
  }  
];

export default function PerspectiveHub() {  
  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#d4d4d4] px-8 py-24">  
      <div className="max-w-6xl mx-auto">  
        <header className="mb-24 border-b border-zinc-800 pb-12">  
          <h1 className="text-5xl font-light tracking-tighter text-white mb-4">PERSPECTIVE</h1>  
          <p className="text-zinc-500 uppercase tracking-widest text-sm">NexVoyage Collective Intelligence</p>  
        </header>

        {/* Core Volumes Section */}  
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">  
          {coreVolumes.map((vol) => (  
            <Link key={vol.slug} href={`/perspective/${vol.slug}`} className="group">  
              <div className="border border-zinc-800 p-8 hover:border-[#b19149] transition-colors duration-500 bg-[#0d0d0d]">  
                <span className="text-[#b19149] text-xs font-mono mb-4 block">{vol.volume}</span>  
                <h2 className="text-2xl text-white mb-4 group-hover:text-[#b19149] transition-colors">{vol.title}</h2>  
                <p className="text-zinc-500 font-serif leading-relaxed">{vol.excerpt}</p>  
              </div>  
            </Link>  
          ))}  
        </section>

        {/* Supporting Dispatches Grid */}  
        <section>  
          <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-12 border-b border-zinc-900 pb-4">Supporting Dispatches</h3>  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">  
            {supportingDispatches.map((dispatch) => (  
              <Link key={dispatch.slug} href={`/perspective/${dispatch.slug}`} className="group">  
                <div className="space-y-4">  
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500">{dispatch.category}</span>  
                  <h4 className="text-xl text-zinc-200 group-hover:text-white transition-colors">{dispatch.title}</h4>  
                  <p className="text-sm text-zinc-600 leading-relaxed italic">{dispatch.excerpt}</p>  
                  <div className="h-[1px] w-0 group-hover:w-full bg-[#b19149] transition-all duration-700" />  
                </div>  
              </Link>  
            ))}  
          </div>  
        </section>  
      </div>  
    </main>  
  );  
}  
