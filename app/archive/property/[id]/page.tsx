// app/archive/property/[id]/page.tsx
import { properties } from '@/data/properties'  
import Image from 'next/image'  
import Link from 'next/link'

import { PROPERTY_DATA } from '@/lib/data/sanctuaries';  
import { notFound } from 'next/navigation';  
import Link from 'next/link';  
import { Cormorant_Garamond, Inter } from 'next/font/google';
export async function generateStaticParams() {  
  return properties.map((p) => ({ id: p.id }))  
}

const cormorant = Cormorant_Garamond({   
  subsets: ['latin'],   
  variable: '--font-cormorant'   
});
export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {  
  const { id } = await params  
  const property = properties.find((p) => p.id === id)

const inter = Inter({   
  subsets: ['latin'],  
  variable: '--font-inter'  
});

export default async function ArchivePropertyDetail({ params }: { params: { id: string } }) {  
  const { id } = params;  
  const property = PROPERTY_DATA.find(p => p.id === id);

  if (!property) return notFound();
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
    <main className={`min-h-screen bg-[#0A0A0A] text-[#E5E5E5] ${cormorant.variable} ${inter.variable} font-sans`}>  
      {/* Cinematic Hero Section */}  
      <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden border-b border-[#d4af37]/20">  
        {property.images && property.images.length > 0 ? (  
          <img   
            src={property.images[0]}   
            alt={property.name}   
            className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-1000"  
          />  
        ) : (  
          <div className="w-full h-full bg-[#111]" />  
        )}  
          
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />  
          
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">  
          <div className="max-w-7xl mx-auto">  
            <Link   
              href="/archive"   
              className="text-[#d4af37] text-xs font-mono tracking-widest mb-6 block uppercase hover:text-white transition-colors"  
            >  
              ← Return to Archive Registry  
            </Link>  
            <h1 className="text-6xl md:text-8xl font-serif uppercase tracking-tighter text-white mb-4">  
              {property.name}  
            </h1>  
            <p className="text-[#d4af37] text-sm font-mono tracking-[0.3em] uppercase">  
              Location // {property.location}  
            </p>  
          </div>  
    <main className="min-h-screen bg-black text-white">  
      {/* Hero */}  
      <div className="relative h-[50vh] md:h-[70vh] w-full">  
        <Image src={property.image} alt={property.name} fill className="object-cover" />  
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

      {/* Intel Breakdown */}  
      <section className="py-24 px-8">  
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">  
          {/* Dossier Description */}  
          <div className="md:col-span-7">  
            <div className="mb-12">  
              <span className="text-xs font-mono text-gray-500 block mb-4 uppercase tracking-widest">[ FIELD REPORT SUMMARY ]</span>  
              <p className="text-2xl md:text-3xl font-serif text-gray-300 leading-relaxed italic">  
                {property.description}  
              </p>  
            </div>  
          </div>
      {/* Content */}  
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">  
        {/* Description */}  
        <section>  
          <h2 className="font-cormorant text-3xl text-[#C5A059] mb-4">About</h2>  
          <p className="font-inter text-white/70 leading-relaxed">{property.description}</p>  
        </section>

          {/* Technical Specs / Intel */}  
          <div className="md:col-span-5">  
            <div className="bg-[#111] border border-[#d4af37]/10 p-8 space-y-8">  
              <div>  
                <span className="text-[#d4af37] text-[10px] font-mono uppercase tracking-[0.4em] block mb-2">Classification</span>  
                <p className="text-white font-serif text-xl uppercase tracking-widest">  
                  {property.intel?.category || "Standard Luxury Asset"}  
                </p>  
              </div>
        {/* Highlight */}  
        <section className="border-l-2 border-[#C5A059] pl-6">  
          <h2 className="font-cormorant text-3xl text-[#C5A059] mb-4">The Highlight</h2>  
          <p className="font-inter text-white/70 leading-relaxed">{property.highlight}</p>  
        </section>

              <div>  
                <span className="text-[#d4af37] text-[10px] font-mono uppercase tracking-[0.4em] block mb-2">Member Intel</span>  
                <ul className="space-y-3">  
                  {property.intel?.memberBenefits.map((benefit, i) => (  
                    <li key={i} className="text-gray-400 text-sm font-mono uppercase flex items-start gap-3">  
                      <span className="text-[#d4af37]">•</span>  
                      {benefit}  
                    </li>  
                  ))}  
                </ul>  
              </div>
        {/* Exclusive Offer */}  
        <section className="bg-[#0A0A0A] border border-[#C5A059]/20 p-8">  
          <h2 className="font-cormorant text-3xl text-[#C5A059] mb-4">Exclusive Offer</h2>  
          <p className="font-inter text-white/70 leading-relaxed">{property.exclusiveOffer}</p>  
        </section>

              <div className="pt-8 border-t border-white/5">  
                <span className="text-gray-600 text-[9px] font-mono uppercase tracking-tighter">  
                  RECORD ID: NV-{property.id.toUpperCase()}-026  
                </span>  
              </div>  
            </div>  
          </div>  
        {/* Back link */}  
        <div className="pt-8 border-t border-white/10">  
          <Link href="/archive" className="font-inter text-sm text-[#C5A059] hover:underline">  
            ← Back to Archive  
          </Link>  
        </div>  
      </section>

      {/* End of Report footer */}  
      <div className="py-12 border-t border-white/5 text-center opacity-20">  
        <span className="text-[10px] font-mono tracking-[1em] uppercase">End of Dossier</span>  
      </div>  
    </main>  
  );  
  )  
}  
