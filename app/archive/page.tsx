// app/archive/page.tsx  
import Link from 'next/link'  
import { PROPERTY_DATA } from '@/data/properties'

// ── Collection ordering ──────────────────────────────────────────────────  
const COLLECTION_ORDER = [  
  'Wild Frontiers',  
  'Urban Sovereigns',  
  'Heritage & Estate',  
  'Nole Sanctuary',  
  'Industrial & Frontier',  
]

// ── Collection descriptions ──────────────────────────────────────────────  
const COLLECTION_DESCRIPTIONS: Record<string, string> = {  
  'Wild Frontiers': 'Remote landscapes, raw nature, uncompromising solitude.',  
  'Urban Sovereigns': 'Commanding city stays for those who move through capitals.',  
  'Heritage & Estate': 'Historic estates with generational soul and provenance.',  
  'Nole Sanctuary': 'Reserved for future revelation.',  
  'Industrial & Frontier': 'Reserved for future revelation.',  
}

// ── Image proxy helper ───────────────────────────────────────────────────  
function proxyImage(url: string): string {  
  if (!url) return ''  
  if (url.startsWith('/api/image') || url.startsWith('/')) return url  
  return `/api/image?url=${encodeURIComponent(url)}`  
}

// ── Page ─────────────────────────────────────────────────────────────────  
export default function ArchivePage() {  
  // Group properties by their collection  
  const grouped = COLLECTION_ORDER.reduce<Record<string, typeof PROPERTY_DATA>>(  
    (acc, name) => {  
      const items = PROPERTY_DATA.filter((p) => p.collection === name)  
      if (items.length > 0) acc[name] = items  
      return acc  
    },  
    {}  
  )

  return (  
    <main className="min-h-screen bg-black text-white">  
      {/* ─── Header ─────────────────────────────────────────────── */}  
      <section className="px-6 pt-24 pb-16 md:px-12 lg:px-24">  
        <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-4 font-sans">  
          Registry of Significance  
        </p>  
        <h1 className="font-serif text-5xl md:text-7xl text-[#C5A059]">  
          The Archive  
        </h1>  
      </section>

      {/* ─── Collections ─────────────────────────────────────────── */}  
      {Object.entries(grouped).map(([collectionName, properties]) => (  
        <section key={collectionName} className="px-6 md:px-12 lg:px-24 mb-20">  
          {/* Collection header */}  
          <div className="mb-8 border-t border-white/10 pt-6">  
            <h2 className="font-serif text-2xl md:text-3xl text-[#C5A059]">  
              {collectionName}  
            </h2>  
            <p className="mt-1 text-sm text-white/50 font-sans max-w-xl">  
              {COLLECTION_DESCRIPTIONS[collectionName] ?? ''}  
            </p>  
          </div>

          {/* Property cards grid */}  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">  
            {properties.map((property) => (  
              <Link  
                key={property.id}  
                href={`/archive/property/${property.id}`}  
                className="group block"  
              >  
                {/* Image */}  
                <div className="aspect-[4/3] overflow-hidden bg-white/5 mb-4">  
                  {property.image ? (  
                    <img  
                      src={proxyImage(property.image)}  
                      alt={property.name}  
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"  
                      loading="lazy"  
                    />  
                  ) : (  
                    <div className="w-full h-full flex items-center justify-center text-white/20 text-sm font-sans">  
                      No image  
                    </div>  
                  )}  
                </div>

                {/* Label */}  
                <p className="text-xs tracking-[0.15em] uppercase text-white/40 font-sans mb-1">  
                  {collectionName}  
                </p>

                {/* Title */}  
                <h3 className="font-serif text-xl text-white group-hover:text-[#C5A059] transition-colors">  
                  {property.name}  
                </h3>

                {/* Location */}  
                <p className="text-sm text-white/50 font-sans mt-0.5">  
                  {property.location}  
                </p>

                {/* Description */}  
                <p className="text-sm text-white/40 font-sans mt-2 leading-relaxed line-clamp-2">  
                  {property.description}  
                </p>  
              </Link>  
            ))}  
          </div>  
        </section>  
      ))}

      {/* ─── Footer ──────────────────────────────────────────────── */}  
      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-white/10">  
        <p className="text-xs tracking-[0.2em] uppercase text-white/30 font-sans text-center">  
          NexVoyage Collective · The Archive  
        </p>  
      </footer>  
    </main>  
  )  
}  
