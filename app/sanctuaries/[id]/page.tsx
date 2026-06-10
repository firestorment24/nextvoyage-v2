import { notFound } from 'next/navigation'  
import Image from 'next/image'  
import { SANCTUARY_DATA } from '@/data/sanctuaries'

interface PageProps {  
  params: Promise<{ id: string }>  
}

export default async function SanctuaryPage({ params }: PageProps) {  
  const { id } = await params  
  const sanctuary = SANCTUARY_DATA[id]

  if (!sanctuary) {  
    notFound()  
  }

  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-white">  
      {/* Hero Section */}  
      <section className="relative h-[80vh] w-full overflow-hidden">  
        <Image  
          src={sanctuary.heroImage}  
          alt={sanctuary.name}  
          fill  
          className="object-cover opacity-60"  
          priority  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />  
          
        <div className="absolute bottom-20 left-6 md:left-20 max-w-4xl">  
          <div className="flex items-center gap-4 mb-6">  
            <span className="text-xs tracking-[0.3em] uppercase text-zinc-400">{sanctuary.tag}</span>  
            <div className="h-[1px] w-12 bg-zinc-600" />  
            <span className="text-xs tracking-[0.3em] uppercase text-zinc-400">{sanctuary.loc}</span>  
          </div>  
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter mb-8 leading-none">  
            {sanctuary.name}  
          </h1>  
        </div>  
      </section>

      {/* Content Grid */}  
      <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">  
          <div>  
            <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-8 font-medium">The Philosophy</h2>  
            <p className="text-2xl md:text-3xl font-light leading-snug text-zinc-200 italic">  
              "{sanctuary.philosophy}"  
            </p>  
          </div>  
            
          <div className="bg-zinc-900/50 border border-zinc-800 p-12 backdrop-blur-sm">  
            <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-8 font-medium">Cognitive Yield</h2>  
            <div className="text-3xl md:text-4xl font-light mb-6 tracking-tight">  
              {sanctuary.roi}  
            </div>  
            <div className="flex flex-wrap gap-3">  
              {sanctuary.highlights.map((item) => (  
                <span key={item} className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-zinc-400">  
                  {item}  
                </span>  
              ))}  
            </div>  
          </div>  
        </div>  
      </section>  
    </main>  
  )  
}  
