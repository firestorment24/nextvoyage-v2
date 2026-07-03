import { properties } from '@/data/properties'  
import { notFound } from 'next/navigation'  
import Image from 'next/image'  
import Link from 'next/link'  
import Navigation from '@/components/Navigation'  
import Footer from '@/components/Footer'  
import GalleryLightbox from './GalleryLightbox'

const proxyUrl = (url: string) => `/api/image?url=${encodeURIComponent(url)}`

export async function generateStaticParams() {  
  return properties.map((property) => ({  
    slug: property.id,  
  }))  
}

export default async function PropertyPage({ params }: { params: { slug: string } }) {  
  const { slug } = await params  
  const property = properties.find((p) => p.id === slug)

  if (!property) {  
    notFound()  
  }

  const benefits = property.intel?.memberBenefits

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D4AF37]/30">  
      <Navigation />

      {/* hero section */}  
      <section className="relative h-[70vh] w-full overflow-hidden">  
        <Image  
          src={proxyUrl(property.image)}  
          alt={property.name}  
          fill  
          unoptimized  
          className="object-cover"  
          priority  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />  
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center w-full max-w-4xl px-6">  
          <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4 block">  
            {property.collection}  
          </span>  
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4 uppercase italic">  
            {property.name}  
          </h1>  
          <p className="text-xl text-white/70 font-light tracking-wide italic">  
            {property.location}  
          </p>  
        </div>  
      </section>

      {/* content */}  
      <section className="max-w-4xl mx-auto px-6 py-24 leading-relaxed">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">  
          <div className="md:col-span-2">  
            <h2 className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] mb-8">The Intel</h2>  
            <p className="text-2xl font-light text-white/90 mb-12">  
              {property.description}  
            </p>  
          </div>

          <div className="space-y-12">  
            <div>  
              <h3 className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] mb-4">Registry Notes</h3>  
              <p className="text-sm font-light text-white/50 leading-loose uppercase tracking-wider">  
                {property.intel?.positioning || "Private Portfolio Entry"}  
              </p>  
            </div>  
            {benefits && benefits.length > 0 && (  
              <div className="bg-[#1A1A1A] p-8 border border-[#D4AF37]/10">  
                <h3 className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] mb-4">Elite Benefits</h3>  
                <ul className="space-y-3">  
                  {benefits.map((benefit: string, i: number) => (  
                    <li key={i} className="text-sm font-light text-white/80 italic flex items-start gap-3">  
                      <span className="text-[#D4AF37] mt-1 shrink-0">◆</span>  
                      <span>{benefit}</span>  
                    </li>  
                  ))}  
                </ul>  
              </div>  
            )}  
            <Link  
              href="/archive"  
              className="inline-block text-[#D4AF37] text-xs uppercase tracking-[0.4em] hover:text-white transition-colors pt-8"  
            >  
              ← Back to Archive  
            </Link>  
          </div>  
        </div>  
      </section>

      {/* gallery */}  
      {property.gallery && property.gallery.length > 0 && (  
        <section className="py-24">  
          <div className="max-w-7xl mx-auto px-6 mb-12">  
            <h2 className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] text-center">  
              The Estate  
            </h2>  
          </div>  
          <GalleryLightbox  
            images={property.gallery.map((img: string) => proxyUrl(img))}  
            name={property.name}  
          />  
        </section>  
      )}

      <Footer />  
    </main>  
  )  
}  
