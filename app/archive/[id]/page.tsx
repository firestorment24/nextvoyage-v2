// app/archive/[id]/page.tsx  
import { notFound } from 'next/navigation'  
import { SANCTUARIES_DATA } from '@/lib/data/sanctuaries'  
import Navigation from '@/components/Navigation'  
import Link from 'next/link'

export default function ArchiveDetail({ params }: { params: { id: string } }) {  
  const sanctuary = SANCTUARIES_DATA.find((s) => s.id === params.id)

  if (!sanctuary) return notFound()

  return (  
    <main className="min-h-screen bg-[#FDFCFB] text-[#1a1a1a] selection:bg-black/5">  
      <Navigation />  
        
      <div className="max-w-screen-xl mx-auto px-6 pt-32 pb-24">  
        {/* Breadcrumb / Back */}  
        <Link   
          href="/archive"   
          className="text-[10px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity mb-12 block"  
        >  
          ← Back to Archive  
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">  
            
          {/* Left Column: Metadata & Ledger */}  
          <div className="lg:col-span-4 space-y-12">  
            <header className="space-y-6">  
              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-none">  
                {sanctuary.name}  
              </h1>  
              <p className="text-xs uppercase tracking-[0.3em] opacity-50 italic">  
                {sanctuary.loc} — {sanctuary.tag}  
              </p>  
            </header>

            <div className="space-y-8 pt-8 border-t border-black/5">  
              <div>  
                <h3 className="text-[10px] uppercase tracking-[0.2em] mb-3 opacity-40 text-black">Atmosphere</h3>  
                <p className="text-sm leading-relaxed max-w-xs">{sanctuary.atmosphere}</p>  
              </div>  
                
              <div>  
                <h3 className="text-[10px] uppercase tracking-[0.2em] mb-3 opacity-40 text-black">Inquiry Status</h3>  
                <p className="text-sm font-medium">Available for Private Viewing</p>  
              </div>

              {/* Static Concierge Button */}  
              <button className="bg-black text-white px-8 py-4 text-[10px] uppercase tracking-[0.3em] w-full lg:w-auto">  
                Inquire with Rachel  
              </button>  
            </div>  
          </div>

          {/* Right Column: Visual Anchor & Dossier */}  
          <div className="lg:col-span-8 space-y-16">  
            <div className="relative aspect-[16/10] overflow-hidden grayscale opacity-80 brightness-105 transition-all duration-700 hover:opacity-100 hover:grayscale-0">  
              <img   
                src={sanctuary.heroImage}   
                alt={sanctuary.name}  
                className="object-cover w-full h-full scale-[1.01]"  
              />  
              <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCFB]/20 to-transparent" />  
            </div>

            <div className="max-w-2xl">  
              <h2 className="text-[10px] uppercase tracking-[0.2em] mb-8 opacity-40">The Dossier</h2>  
              <div className="space-y-10">  
                {sanctuary.highlights.map((item, idx) => (  
                  <div key={idx} className="group">  
                    <p className="text-xl md:text-2xl font-light leading-snug">  
                      {item}  
                    </p>  
                  </div>  
                ))}  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </main>  
  )  
}  
