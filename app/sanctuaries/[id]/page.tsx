import { SANCTUARY_DATA } from '@/data/sanctuaries'  
import { notFound } from 'next/navigation'  
import Hero from '@/components/Hero'  
import PropertyBuckets from '@/components/PropertyBuckets'

interface PageProps {  
  params: {  
    id: string  
  }  
}

export default function SanctuaryPage({ params }: PageProps) {  
  // Find sanctuary by slug (id) to avoid indexing errors  
  const sanctuary = SANCTUARY_DATA.find((s) => s.id === params.id)

  if (!sanctuary) {  
    notFound()  
  }

  return (  
    <main className="bg-black text-white min-h-screen selection:bg-zinc-800">  
      {/* Hero Section */}  
      <Hero   
        title={sanctuary.name}  
        subtitle={sanctuary.tag}  
        image={sanctuary.heroImage}  
      />

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">  
          
        {/* Philosophy & Atmosphere Section */}  
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">  
          <div>  
            <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-8">The Philosophy</h2>  
            <p className="text-3xl font-light leading-relaxed tracking-tight text-zinc-100">  
              {sanctuary.philosophy}  
            </p>  
          </div>  
          <div className="border-l border-zinc-900 pl-12 py-2">  
            <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-8">Atmosphere</h2>  
            <p className="text-xl text-zinc-400 font-light leading-relaxed italic">  
              "{sanctuary.atmosphere}"  
            </p>  
          </div>  
        </section>

        {/* Specifications & Highlights */}  
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-zinc-900 py-16">  
          <div className="space-y-4">  
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Primary Location</h3>  
            <p className="text-lg font-light tracking-wide">{sanctuary.loc}</p>  
          </div>  
          <div className="space-y-4">  
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Asset Performance</h3>  
            <p className="text-lg font-light tracking-wide text-zinc-300">  
              Expected ROI: <span className="text-zinc-100">{sanctuary.roi}</span>  
            </p>  
          </div>  
          <div className="space-y-4">  
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Key Distinctions</h3>  
            <ul className="space-y-2">  
              {sanctuary.highlights.map((highlight, i) => (  
                <li key={i} className="text-sm text-zinc-400 uppercase tracking-widest font-light">  
                  • {highlight}  
                </li>  
              ))}  
            </ul>  
          </div>  
        </section>

        {/* Investment Portfolios (Property Buckets) */}  
        <section className="pt-8">  
          <div className="mb-16">  
            <h2 className="text-4xl font-light tracking-tighter mb-4 text-zinc-100">Available Portfolios</h2>  
            <p className="text-zinc-500 max-w-xl font-light leading-relaxed">  
              Curated collections of exclusive residences and investment-grade properties within {sanctuary.name}.  
            </p>  
          </div>  
            
          <PropertyBuckets buckets={sanctuary.buckets} />  
        </section>

      </div>  
    </main>  
  )  
}  
