// app/archive/page.tsx  
import Link from 'next/link'  
import { PROPERTY_DATA } from '@/data/properties'

const COLLECTION_ORDER = [  
  'Wild Frontiers',  
  'Urban Sovereigns',  
  'Heritage & Estate',  
  'Nole Sanctuary',  
  'Industrial & Frontier',  
]

function groupByCollection() {  
  const groups: Record<string, typeof PROPERTY_DATA> = {}  
  for (const p of PROPERTY_DATA) {  
    const cat = p.intel?.category || 'Uncategorized'  
    if (!groups[cat]) groups[cat] = []  
    groups[cat].push(p)  
  }  
  const ordered: { category: string; items: typeof PROPERTY_DATA }[] = []  
  const used = new Set<string>()  
  for (const cat of COLLECTION_ORDER) {  
    if (groups[cat]) {  
      ordered.push({ category: cat, items: groups[cat] })  
      used.add(cat)  
    }  
  }  
  for (const cat of Object.keys(groups).sort()) {  
    if (!used.has(cat)) {  
      ordered.push({ category: cat, items: groups[cat] })  
    }  
  }  
  return ordered  
}

export default function ArchivePage() {  
  const grouped = groupByCollection()

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white">  
      {/* Header */}  
      <section className="relative pt-32 pb-16 px-6 text-center">  
        <h1 className="text-4xl md:text-6xl font-light tracking-[0.15em] uppercase text-[#C5A059] font-serif mb-4">  
          Registry of Significance  
        </h1>  
        <p className="text-sm md:text-base tracking-[0.2em] uppercase text-white/40 font-sans">  
          The Archive  
        </p>  
      </section>

      {/* Grouped Grid */}  
      {grouped.map((group) => (  
        <section key={group.category} className="px-6 pb-16 max-w-7xl mx-auto">  
          <h2 className="text-xs tracking-[0.3em] uppercase text-[#C5A059]/60 mb-8 font-sans border-b border-white/10 pb-3">  
            {group.category}  
          </h2>  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">  
            {group.items.map((property) => (  
              <Link  
                key={property.id}  
                href={`/archive/property/${property.id}`}  
                className="group block bg-white/[0.03] border border-white/10 rounded-sm overflow-hidden hover:border-[#C5A059]/40 transition-all duration-500"  
              >  
                {/* Image via proxy */}  
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1C1C1C]">  
                  {property.image ? (  
                    <img  
                      src={`/api/image?url=${encodeURIComponent(property.image)}`}  
                      alt={property.name}  
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale group-hover:opacity-60"  
                      loading="lazy"  
                    />  
                  ) : (  
                    <div className="w-full h-full flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">  
                      No Image  
                    </div>  
                  )}  
                </div>

                {/* Card Body */}  
                <div className="p-5">  
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A059]/70 font-sans">  
                    {p.intel?.category || 'Uncategorized'}  
                  </span>  
                  <h3 className="text-lg font-serif text-white mt-1 group-hover:text-[#C5A059] transition-colors duration-300">  
                    {p.name}  
                  </h3>  
                  <p className="text-xs text-white/50 mt-1 font-sans">  
                    {p.location}  
                  </p>  
                  <p className="text-sm text-white/60 mt-3 leading-relaxed font-sans line-clamp-2">  
                    {p.intel?.positioning}  
                  </p>  
                </div>  
              </Link>  
            ))}  
          </div>  
        </section>  
      ))}

      {/* Footer */}  
      <footer className="border-t border-white/10 py-8 text-center">  
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-sans">  
          NexVoyage Collective &copy; {new Date().getFullYear()}  
        </p>  
      </footer>  
    </main>  
  )  
}  
