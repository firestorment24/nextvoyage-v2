import { properties } from '@/data/properties'  

import Image from 'next/image'  
import Link from 'next/link'

export async function generateStaticParams() {  
  return properties.map((p) => ({ id: p.id }))  
}

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {  
  const { id } = await params  
  const property = properties.find((p) => p.id === id)

  if (!property) {  
    return (  
      <main className="min-h-screen bg-black flex items-center justify-center">  
        <div className="text-center">  
          <h1 className="font-cormorant text-6xl text-[#C5A059] mb-4">Lost in Transit</h1>  
          <p className="font-inter text-white/60 mb-8">This dossier does not exist in our registry.</p>  
          <Link href="/archive" className="font-inter text-sm text-[#C5A059] hover:underline">  
            ← Return to Archive  
          </Link>  
        </div>  
      </main>  
    )  
  }

  return (  
    <main className="min-h-screen bg-black text-white">  
   {/* Hero */}  
      <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">  
        <img  
          src={property.image}  
          alt={property.name}  
          className="absolute inset-0 w-full h-full object-cover"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />  
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">  
          <p className="text-[#C5A059]/70 font-inter text-xs tracking-[0.2em] uppercase mb-2">  
            {property.collection}  
          </p>  
          <h1 className="font-cormorant text-5xl md:text-7xl text-[#C5A059] mb-2">  
            {property.name}  
          </h1>  
          <p className="font-inter text-lg text-white/60">{property.location}</p>  
        </div>  
      </div>  

      {/* Content */}  
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">  
        {/* Description */}  
        <section>  
          <h2 className="font-cormorant text-3xl text-[#C5A059] mb-4">About</h2>  
          <p className="font-inter text-white/70 leading-relaxed">{property.description}</p>  
        </section>

        {/* Highlight */}  
        <section className="border-l-2 border-[#C5A059] pl-6">  
          <h2 className="font-cormorant text-3xl text-[#C5A059] mb-4">The Highlight</h2>  
          <p className="font-inter text-white/70 leading-relaxed">{property.highlight}</p>  
        </section>

        {/* Exclusive Offer */}  
        <section className="bg-[#0A0A0A] border border-[#C5A059]/20 p-8">  
          <h2 className="font-cormorant text-3xl text-[#C5A059] mb-4">Exclusive Offer</h2>  
          <p className="font-inter text-white/70 leading-relaxed">{property.exclusiveOffer}</p>  
        </section>

        {/* Back link */}  
        <div className="pt-8 border-t border-white/10">  
          <Link href="/archive" className="font-inter text-sm text-[#C5A059] hover:underline">  
            ← Back to Archive  
          </Link>  
        </div>  
      </div>  
    </main>  
  )  
}  
