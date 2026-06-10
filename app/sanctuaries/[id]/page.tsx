// app/sanctuaries/[id]/page.tsx  
import React from 'react'  
import Link from 'next/link'  
import { notFound } from 'next/navigation'  
import { SANCTUARY_DATA } from '../../../data/sanctuaries'

export async function generateStaticParams() {  
  return SANCTUARY_DATA.map((sanctuary) => ({  
    id: sanctuary.id.toString(),  
  }))  
}

export default async function SanctuaryDetailPage({ params }: { params: { id: string } }) {  
  const { id } = await params  
  const sanctuary = SANCTUARY_DATA.find((s) => s.id.toString() === id)

  if (!sanctuary) {  
    notFound()  
  }

  return (  
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">  
      <main>  
        {/* Hero Section */}  
        <section className="relative h-[80vh] w-full bg-gray-50 overflow-hidden">  
          <img   
            src={sanctuary.heroImage || sanctuary.img}   
            alt={sanctuary.name}  
            className="w-full h-full object-cover animate-in fade-in zoom-in-105 duration-1000"  
          />  
          <div className="absolute inset-0 bg-black/10" />  
          <div className="absolute bottom-20 left-10 lg:left-20 text-white space-y-4">  
            <p className="text-xs uppercase tracking-[0.4em] font-light">Sanctuary Archetype</p>  
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight">{sanctuary.name}</h1>  
          </div>  
        </section>

        {/* Core Details */}  
        <section className="max-w-5xl mx-auto px-10 lg:px-20 py-24 lg:py-32 grid lg:grid-cols-2 gap-20 items-start">  
          <div className="space-y-10">  
            <div className="space-y-2">  
              <span className="text-[10px] uppercase tracking-widest text-gray-400">The Location</span>  
              <p className="text-lg font-light italic">{sanctuary.loc}</p>  
            </div>  
              
            <h2 className="text-3xl font-light leading-snug">  
              {sanctuary.tag}  
            </h2>  
              
            <p className="text-gray-500 font-light leading-relaxed text-lg">  
              {sanctuary.categoryDescription}  
            </p>  
          </div>

          <div className="bg-gray-50 p-12 lg:p-16 space-y-12">  
            <div>  
              <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-6">Atmosphere</span>  
              <p className="text-sm font-light leading-relaxed">{sanctuary.atmosphere}</p>  
            </div>

            <div>  
              <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-6">Notable Features</span>  
              <ul className="space-y-4">  
                {sanctuary.highlights && sanctuary.highlights.map((item, i) => (  
                  <li key={i} className="text-sm font-light flex items-start gap-3">  
                    <span className="h-1 w-1 bg-black mt-2 rounded-full flex-shrink-0" />  
                    {item}  
                  </li>  
                ))}  
              </ul>  
            </div>

            <div className="pt-8">  
              <Link   
                href={`/reserve?interest=${encodeURIComponent(sanctuary.name)}`}  
                className="inline-block bg-black text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-gray-800 transition-all w-full text-center"  
              >  
                Apply for Curation  
              </Link>  
            </div>  
          </div>  
        </section>

        {/* Narrative Section */}  
        <section className="border-t border-gray-100 py-32 px-10 lg:px-20 text-center max-w-3xl mx-auto space-y-12">  
          <div className="inline-block w-px h-20 bg-gray-200" />  
          <p className="text-2xl font-light italic text-gray-600 leading-relaxed">  
            "We do not simply book rooms; we curate environments that facilitate high-performance recovery and total sensory immersion."  
          </p>  
          <div className="pt-10">  
            <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-2">Available Properties</span>  
            <span className="text-2xl font-light">{sanctuary.propertyCount || 'Exclusive'} Estates</span>  
          </div>  
        </section>  
      </main>  
    </div>  
  )  
}  
