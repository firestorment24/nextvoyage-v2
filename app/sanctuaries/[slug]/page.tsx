import { notFound } from 'next/navigation'  
import Link from 'next/link'  
import Image from 'next/image'  
import { sanctuaries } from '@/data/sanctuaries'  
import PropertyBuckets from '@/components/PropertyBuckets'

interface PageProps {  
  params: {  
    slug: string  
  }  
}

export default function SanctuaryPage({ params }: PageProps) {  
  const sanctuary = sanctuaries.find((s) => s.slug === params.slug)

  if (!sanctuary) {  
    notFound()  
  }

  return (  
    <main className="min-h-screen bg-white">  
      {/* 1. Immersive Hero Section */}  
      <section className="relative h-[70vh] w-full">  
        <Image  
          src={sanctuary.heroImage}  
          alt={sanctuary.name}  
          fill  
          priority  
          className="object-cover"  
        />  
        <div className="absolute inset-0 bg-black/40" />  
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">  
          <span className="text-xs uppercase tracking-[0.4em] text-white/80 mb-4">  
            Sanctuary Collection  
          </span>  
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight">  
            {sanctuary.name}  
          </h1>  
          <div className="mt-8">  
            <Link   
              href="/reserve"  
              className="px-8 py-3 bg-white text-slate-900 text-xs uppercase tracking-widest hover:bg-slate-100 transition-colors"  
            >  
              Request a Bespoke Quote  
            </Link>  
          </div>  
        </div>  
      </section>

      {/* 2. Philosophy & USPs */}  
      <section className="max-w-5xl mx-auto px-4 py-24">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">  
          <div className="md:col-span-2">  
            <h2 className="text-3xl font-light text-slate-900 mb-6">  
              {sanctuary.categoryDescription}  
            </h2>  
            <p className="text-slate-500 leading-relaxed text-lg font-light">  
              We have curated this collection specifically for the traveler who seeks {sanctuary.atmosphere.join(' and ')}.   
              Every property within {sanctuary.name} is chosen based on its ability to provide a significant return on your time.  
            </p>  
          </div>  
            
          <div className="flex flex-col gap-8">  
            <div>  
              <h4 className="text-xs uppercase tracking-widest text-slate-400 mb-4 border-b pb-2">  
                The Highlights  
              </h4>  
              <ul className="space-y-3">  
                {sanctuary.highlights.map((highlight, index) => (  
                  <li key={index} className="text-sm text-slate-600 flex items-center gap-2">  
                    <span className="h-1 w-1 bg-slate-400 rounded-full" />  
                    {highlight}  
                  </li>  
                ))}  
              </ul>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* 3. Property Buckets Logic */}  
      <section className="bg-slate-50 py-24 border-t border-slate-100">  
        <div className="max-w-7xl mx-auto px-4">  
          <div className="mb-12">  
            <h3 className="text-2xl font-light text-slate-900">Featured Properties</h3>  
            <p className="text-slate-500 text-sm mt-2">  
              Available exclusively via our Quiet Luxury inquiry system.  
            </p>  
          </div>  
            
          {/* Dynamic component that filters by sanctuary ID */}  
          <PropertyBuckets sanctuaryId={sanctuary.id} />  
        </div>  
      </section>

      {/* 4. Final CTA */}  
      <section className="py-24 text-center border-t border-slate-100">  
        <h3 className="text-xl font-light text-slate-800 mb-8">Ready to secure your sanctuary?</h3>  
        <Link   
          href="/reserve"  
          className="inline-block px-12 py-4 border border-slate-900 text-slate-900 text-xs uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all duration-300"  
        >  
          Begin Private Inquiry  
        </Link>  
      </section>  
    </main>  
  )  
}  
