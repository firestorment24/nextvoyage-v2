// app/sanctuaries/[id]/page.tsx  
'use client'

import { useParams } from 'next/navigation'  
import Link from 'next/link'  
import { SANCTUARY_DATA } from '@/data/sanctuaries'
export default function SanctuaryDetail() {  
  const params = useParams()  
  const id = params.id as string

  const sanctuary = SANCTUARY_DATA[id]

  if (!sanctuary) {  
    return (  
      <div className="min-h-screen flex items-center justify-center bg-white">  
        <div className="text-center">  
          <h1 className="text-2xl font-light mb-4">Sanctuary not found</h1>  
          <Link href="/sanctuaries" className="text-gold hover:underline">  
            Return to Collection  
          </Link>  
        </div>  
      </div>  
    )  
  }

  return (  
    <main className="min-h-screen bg-white">  
      {/* Hero Section */}  
      <div className="relative h-[60vh] w-full overflow-hidden">  
        <img  
          src={sanctuary.img || sanctuary.heroImage}  
          alt={sanctuary.name}  
          className="w-full h-full object-cover"  
        />  
        <div className="absolute inset-0 bg-black/30" />  
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">  
          <div className="max-w-4xl">  
            <p className="text-white/80 uppercase tracking-[0.3em] text-sm mb-4">  
              {sanctuary.loc}  
            </p>  
            <h1 className="text-4xl md:text-6xl text-white font-light mb-6 tracking-tight">  
              {sanctuary.name}  
            </h1>  
            <p className="text-xl text-white/90 font-light italic">  
              {sanctuary.tag}  
            </p>  
          </div>  
        </div>  
      </div>

      {/* Philosophy Section */}  
      <div className="max-w-7xl mx-auto px-6 py-24">  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">  
          <div>  
            <span className="text-gold uppercase tracking-[0.2em] text-xs font-medium mb-4 block">  
              The Philosophy  
            </span>  
            <h2 className="text-3xl font-light mb-8 text-charcoal">  
              A New Standard of Travel  
            </h2>  
            <p className="text-gray-500 font-light leading-relaxed text-lg">  
              {sanctuary.philosophy}  
            </p>  
          </div>  
          <div className="bg-stone-50 p-12 rounded-sm border border-stone-100">  
            <span className="text-gold uppercase tracking-[0.2em] text-xs font-medium mb-4 block">  
              Why it Matters  
            </span>  
            <h3 className="text-2xl font-light mb-6">Investment in Self</h3>  
            <p className="text-gray-600 font-light italic mb-8">  
              "{sanctuary.roi}"  
            </p>  
            <Link  
              href={`/reserve?sanctuary=${sanctuary.id}`}  
              className="inline-block bg-charcoal text-white px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-300"  
            >  
              Apply for Curation  
            </Link>  
          </div>  
        </div>  
      </div>

      {/* Atmosphere & Highlights */}  
      <div className="bg-stone-50 py-24">  
        <div className="max-w-7xl mx-auto px-6">  
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">  
            <div className="lg:col-span-1">  
              <h3 className="text-2xl font-light mb-6 text-charcoal">The Atmosphere</h3>  
              <p className="text-gray-500 font-light leading-relaxed">  
                {sanctuary.atmosphere}  
              </p>  
            </div>  
            <div className="lg:col-span-2">  
              <h3 className="text-2xl font-light mb-8 text-center lg:text-left text-charcoal">  
                Curated Highlights  
              </h3>  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
                {sanctuary.highlights.map((highlight, index) => (  
                  <div  
                    key={index}  
                    className="flex items-start space-x-4 bg-white p-6 rounded-sm border border-stone-200"  
                  >  
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />  
                    <p className="text-gray-600 font-light text-sm">  
                      {highlight}  
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
