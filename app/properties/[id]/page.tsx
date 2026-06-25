import { notFound } from 'next/navigation'  
import Image from 'next/image'  
import Link from 'next/link'  
import { properties } from '../../../data/properties'  
import { EliteAmenities } from '../../../components/EliteAmenities'  
import Navigation from '../../../components/Navigation'  
import Footer from '../../../components/Footer'

export async function generateStaticParams() {  
  return properties.map((property) => ({  
    id: property.id,  
  }))  
}

export default async function PropertyPage({ params }: { params: { id: string } }) {  
  const { id } = params  
  const property = properties.find((p) => p.id === id)

  if (!property) {  
    notFound()  
  }
 
  return (  
    <main className="min-h-screen bg-black text-white">  
      <Navigation />

      {/* Cinematic Hero Section */}  
      <div className="relative h-[60vh] w-full">  
        <Image src={property.image} alt={property.name} fill className="object-cover" />  
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />  
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">  
          <p className="text-[#d4af37]/70 font-mono text-xs tracking-[0.2em] uppercase mb-2">  
            {property.id} // {property.collection}  
          </p>  
          <h1 className="font-cormorant text-5xl md:text-7xl text-[#d4af37] mb-2">  
            {property.name}  
          </h1>  
          <p className="font-inter text-lg text-white/60">{property.location}</p>  
        </div>  
      </div>

      {/* Intel / Dossier Section */}  
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">  
        <section>  
          <h2 className="font-cormorant text-3xl text-[#d4af37] mb-4">Strategic Positioning</h2>  
          <p className="font-inter text-white/70 leading-relaxed">{property.description}</p>  
        </section>

        <section className="border-l-2 border-[#d4af37] pl-6">  
          <h2 className="font-cormorant text-3xl text-[#d4af37] mb-4">The Highlight</h2>  
          <p className="font-inter text-white/70 leading-relaxed">{property.intel.positioning}</p>  
        </section>

        <section className="bg-[#0A0A0A] border border-[#d4af37]/20 p-8">  
          <h2 className="font-cormorant text-3xl text-[#d4af37] mb-4">Exclusive Offer</h2>  
          <ul className="font-inter text-white/70 space-y-3">  
            {property.intel.memberBenefits.map((benefit, i) => (  
              <li key={i} className="flex items-start gap-3">  
                <span className="text-[#d4af37] mt-1">—</span>  
                <span>{benefit}</span>  
              </li>  
            ))}  
          </ul>  
        </section>

        <div className="pt-8 border-t border-white/10 flex justify-between items-center">  
          <Link  
            href="/properties"  
            className="font-inter text-sm text-[#d4af37] hover:underline"  
          >  
            ← Back to Properties  
          </Link>  
          <Link  
            href="/contact"  
            className="px-8 py-3 bg-[#d4af37] text-black font-inter text-sm tracking-widest uppercase hover:bg-[#c5a059] transition-colors"  
          >  
            Initiate Booking Request  
          </Link>  
        </div>  
      </div>

      <EliteAmenities />  
      <Footer />  
    </main>  
  )  
}  
