import Link from 'next/link'  
import Image from 'next/image'

const JOURNAL_ENTRIES = [  
{  
  id: '01',  
  slug: 'the-south-pacific-drift',  
  category: 'Intelligence',  
  title: 'The South Pacific Drift',  
  date: 'June 2026',  
  image: '/images/journal/south-pacific.jpg',  
  description: 'A tactical analysis of the shift toward private archipelago autonomy.'  
},  
{  
  id: '02',  
  slug: 'european-prestige-anchors',  
  category: 'Seasonal',  
  title: 'European Prestige Anchors',  
  date: 'June 2026',  
  image: '/images/journal/european-anchors.jpg',  
  description: 'Securing berth and sanctuary in the Mediterranean’s most congested month.'  
}  
]

export default function JournalHub() {  
return (  
  <main className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-12">  
    <div className="max-w-7xl mx-auto">  
      {/* Header */}  
      <div className="mb-24">  
        <h2 className="text-[#888] uppercase tracking-[0.3em] text-[10px] mb-4">  
          Internal Perspective // Intelligence  
        </h2>  
        <h1 className="text-5xl md:text-7xl font-light text-[#E5E5E5] leading-tight">  
          Tactical Reports & <span className="text-[#666]">Seasonal Logic.</span>  
        </h1>  
      </div>

      {/* Journal Grid */}  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
        {JOURNAL_ENTRIES.map((entry) => (  
          <Link   
            key={entry.id}   
            href={`/journal/${entry.slug}`}  
            className="group relative flex flex-col border border-[#1a1a1a] bg-[#111] overflow-hidden"  
          >  
            <div className="relative aspect-[16/9] overflow-hidden">  
              <Image  
                src={entry.image}  
                alt={entry.title}  
                fill  
                className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"  
              />  
              <div className="absolute top-6 left-6 flex gap-2">  
                <span className="text-[9px] tracking-widest uppercase bg-black px-2 py-1 border border-[#333]">  
                  {entry.category}  
                </span>  
                <span className="text-[9px] tracking-widest uppercase bg-[#B4975A] text-black px-2 py-1 font-bold">  
                  {entry.id}  
                </span>  
              </div>  
            </div>

            <div className="p-10">  
              <div className="flex justify-between items-baseline mb-6">  
                <h3 className="text-3xl font-light group-hover:text-[#B4975A] transition-colors">  
                  {entry.title}  
                </h3>  
                <span className="text-[10px] font-mono text-[#444]">{entry.date}</span>  
              </div>  
              <p className="text-[#888] text-sm leading-relaxed max-w-sm mb-8">  
                {entry.description}  
              </p>  
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#666] group-hover:text-white transition-colors">  
                Read Intelligence →  
              </span>  
            </div>  
          </Link>  
        ))}  
      </div>

      {/* Subscription Teaser */}  
      <div className="mt-32 pt-24 border-t border-[#1a1a1a] text-center">  
        <h4 className="text-[#444] uppercase tracking-[0.4em] text-[10px] mb-6">The Collective Pulse</h4>  
        <p className="text-[#888] max-w-md mx-auto text-sm leading-relaxed mb-12">  
          Subscribe to receive monthly intelligence briefings directly to your secure communications channel.  
        </p>  
        <Link   
          href="/invitation"  
          className="inline-block border border-[#B4975A] px-10 py-4 text-[10px] uppercase tracking-[0.5em] hover:bg-[#B4975A] hover:text-black transition-all"  
        >  
          Request Access  
        </Link>  
      </div>  
    </div>  
  </main>  
)  
}  
