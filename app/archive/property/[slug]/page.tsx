import { notFound } from 'next/navigation'  
import Image from 'next/image'  
import Link from 'next/link'  
import { properties } from '../../../data/properties'  
import { EliteAmenities } from '../../../components/EliteAmenities'  
import Navigation from '../../../components/Navigation'  
import Footer from '../../../components/Footer'

export async function generateStaticParams() {  
  return properties.map((property) => ({  
    slug: property.id,  
  }))  
}

export default async function PropertyPage({  
  params,  
}: {  
  params: { slug: string }  
}) {  
  const { slug } = params  
  const property = properties.find((item) => item.id === slug)

  if (!property) {  
    notFound()  
  }

  const benefits = property.intel?.memberBenefits ?? []

  return (  
    <main className="min-h-screen bg-black text-white">  
      <Navigation />

      {/* Cinematic Hero Section */}  
      <div className="relative h-[60vh] w-full">  
        <Image  
          src={property.image}  
          alt={property.name}  
          fill  
          className="object-cover"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />  
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">  
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#d4af37]/70 mb-2">  
            {property.id} // {property.collection}  
          </p>  
          <h1 className="font-cormorant mb-2 text-5xl text-[#d4af37] md:text-7xl">  
            {property.name}  
          </h1>  
          <p className="font-inter text-lg text-white/60">{property.location}</p>  
        </div>  
      </div>

      {/* Intel / Dossier Section */}  
      <div className="mx-auto max-w-4xl space-y-16 px-6 py-16">  
        <section>  
          <h2 className="font-cormorant mb-4 text-3xl text-[#d4af37]">  
            Strategic Positioning  
          </h2>  
          <p className="font-inter leading-relaxed text-white/70">  
            {property.description}  
          </p>  
        </section>

        <section className="border-l-2 border-[#d4af37] pl-6">  
          <h2 className="font-cormorant mb-4 text-3xl text-[#d4af37]">  
            The Highlight  
          </h2>  
          <p className="font-inter leading-relaxed text-white/70">  
            {property.intel.positioning}  
          </p>  
        </section>

        <section className="border border-[#d4af37]/20 bg-[#0A0A0A] p-8">  
          <h2 className="font-cormorant mb-4 text-3xl text-[#d4af37]">  
            Exclusive Offer  
          </h2>  
          <ul className="font-inter space-y-3 text-white/70">  
            {benefits.map((benefit, i) => (  
              <li key={i} className="flex items-start gap-3">  
                <span className="mt-1 text-[#d4af37]">—</span>  
                <span>{benefit}</span>  
              </li>  
            ))}  
          </ul>  
        </section>

        <div className="flex items-center justify-between border-t border-white/10 pt-8">  
          <Link  
            href="/properties"  
            className="font-inter text-sm text-[#d4af37] hover:underline"  
          >  
            ← Back to Properties  
          </Link>  
          <Link  
            href="/contact"  
            className="bg-[#d4af37] px-8 py-3 font-inter text-sm uppercase tracking-widest text-black transition-colors hover:bg-[#c5a059]"  
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
