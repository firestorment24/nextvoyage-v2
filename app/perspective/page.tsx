// app/perspective/page.tsx  
import Link from 'next/link';

const coreVolumes = [  
  {  
    title: "The Silent ROI",  
    slug: "the-silent-roi",  
    excerpt: "Why the ultimate luxury is a nervous system at rest.",  
    volume: "Vol. 01",  
    image: "https://cdn.marblism.com/JXJNAcJDNQ7.webp"  
  },  
  {  
    title: "The Architecture of Calm",  
    slug: "the-architecture-of-calm",  
    excerpt: "Tactile seclusion and the design of stillness.",  
    volume: "Vol. 02",  
    image: "https://cdn.marblism.com/GssaOUoI3J4.webp"  
  },  
  {  
    title: "The Shadow of Protection",  
    slug: "the-shadow-of-protection",  
    excerpt: "Privacy as the final frontier of the high-net-worth experience.",  
    volume: "Vol. 03",  
    image: "https://cdn.marblism.com/mYMtnpD3UpB.webp"  
  }  
];

const supportingDispatches = [  
  {  
    title: "The Quiet Recalibration",  
    slug: "the-quiet-recalibration",  
    category: "Wellness",  
    excerpt: "Navigating discrete wellness through dark stone and burnished brass.",  
    image: "https://cdn.marblism.com/bVv_xym0Ckt.webp"  
  },  
  {  
    title: "The Architecture of the Journey",  
    slug: "the-architecture-of-the-journey",  
    category: "Itineraries",  
    excerpt: "The invisible hand of radical personalization.",  
    image: "https://cdn.marblism.com/BZFczgXijCL.webp"  
  },  
  {  
    title: "The Logistics of Composure",  
    slug: "the-logistics-of-composure",  
    category: "Aviation",  
    excerpt: "Private aviation as the infrastructure for sovereignty over time.",  
    image: "https://cdn.marblism.com/ARrjs4vNOgk.webp"  
  }  
];

export default function PerspectiveHub() {  
  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#d4d4d4] px-8 py-24">  
      <div className="max-w-6xl mx-auto">  
        <header className="mb-24 border-b border-zinc-800 pb-12">  
          <h1 className="text-5xl font-light tracking-tighter text-white mb-4 italic">PERSPECTIVE</h1>  
          <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs">NexVoyage Collective Intelligence</p>  
        </header>

        {/* Core Volumes Section */}  
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">  
          {coreVolumes.map((vol) => (  
            <Link key={vol.slug} href={`/perspective/${vol.slug}`} className="group relative overflow-hidden">  
              <div className="aspect-[4/5] relative overflow-hidden border border-zinc-900">  
                <img   
                  src={vol.image}   
                  alt={vol.title}   
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 opacity-60 group-hover:opacity-100"  
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />  
                <div className="absolute bottom-0 left-0 p-8 w-full">  
                  <span className="text-[#b19149] text-[10px] font-mono tracking-widest mb-2 block">{vol.volume}</span>  
                  <h2 className="text-2xl text-white mb-2 group-hover:text-[#b19149] transition-colors duration-500">{vol.title}</h2>  
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">{vol.excerpt}</p>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </section>

        {/* Supporting Dispatches Grid */}  
        <section>  
          <h3 className="text-[10px] uppercase tracking-[0.5em] text-zinc-700 mb-16 text-center">THE DISPATCHES</h3>  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">  
            {supportingDispatches.map((dispatch) => (  
              <Link key={dispatch.slug} href={`/perspective/${dispatch.slug}`} className="group">  
                <div className="space-y-6">  
                  <div className="aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-zinc-900">  
                    <img src={dispatch.image} alt={dispatch.title} className="object-cover w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />  
                  </div>  
                  <div className="space-y-3">  
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#b19149]">{dispatch.category}</span>  
                    <h4 className="text-lg text-zinc-200 group-hover:text-white transition-colors">{dispatch.title}</h4>  
                    <p className="text-xs text-zinc-600 leading-relaxed font-serif">{dispatch.excerpt}</p>  
                  </div>  
                </div>  
              </Link>  
            ))}  
          </div>  
        </section>  
      </div>  
    </main>  
  );  
}  
