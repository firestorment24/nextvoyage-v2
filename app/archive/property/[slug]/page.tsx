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
 
export default async function PropertyPage({  
params,  
}: {  
params: { slug: string }  
}) {  
const { slug } = await params  
const property = properties.find((item) => item.id === slug)

if (!property) {  
  notFound()  
}

const preferredBenefits = property.intel?.preferredBenefits ?? []  
const canArrange = property.intel?.canArrange ?? []

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
      <div className="absolute bottom-12 left-1/2 w-full max-w-4xl -translate-x-1/2 px-6 text-center">  
        <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-[#D4AF37]">  
          {property.collection}  
        </span>  
        <h1 className="mb-4 text-5xl font-light uppercase italic tracking-tight md:text-7xl">  
          {property.name}  
        </h1>  
        <p className="text-xl font-light italic tracking-wide text-white/70">  
          {property.location}  
        </p>  
      </div>  
    </section>

    {/* content */}  
    <section className="mx-auto max-w-4xl px-6 py-24 leading-relaxed">  
      <div className="grid grid-cols-1 gap-16 md:grid-cols-3">  
        <div className="md:col-span-2">  
          <h2 className="mb-8 text-xs uppercase tracking-[0.4em] text-[#D4AF37]">  
            The Intel  
          </h2>  
          <p className="mb-12 text-2xl font-light text-white/90">  
            {property.description}  
          </p>  
        </div>

        <div className="space-y-12">  
          <div>  
            <h3 className="mb-4 text-xs uppercase tracking-[0.4em] text-[#D4AF37]">  
              Registry Notes  
            </h3>  
            <p className="text-sm font-light uppercase leading-loose tracking-wider text-white/50">  
              {property.intel?.positioning || 'Private Portfolio Entry'}  
            </p>  
          </div>

          {preferredBenefits.length > 0 && (  
            <div className="border border-[#D4AF37]/10 bg-[#1A1A1A] p-8">  
              <h3 className="mb-4 text-xs uppercase tracking-[0.4em] text-[#D4AF37]">  
                Preferred Benefits  
              </h3>  
              <p className="mb-5 text-xs font-light leading-relaxed text-white/45">  
                Benefits are subject to availability and applicable program  
                terms. Exact inclusions vary by property, rate, and  
                preferred-partner program.  
              </p>  
              <ul className="space-y-3">  
                {preferredBenefits.map((benefit: string) => (  
                  <li  
                    key={benefit}  
                    className="flex items-start gap-3 text-sm font-light italic text-white/80"  
                  >  
                    <span className="mt-1 shrink-0 text-[#D4AF37]">◆</span>  
                    <span>{benefit}</span>  
                  </li>  
                ))}  
              </ul>  
            </div>  
          )}

          {canArrange.length > 0 && (  
            <div className="border border-white/10 bg-white/[0.03] p-8">  
              <h3 className="mb-4 text-xs uppercase tracking-[0.4em] text-[#D4AF37]">  
                NexVoyage Can Arrange  
              </h3>  
              <ul className="space-y-3">  
                {canArrange.map((service: string) => (  
                  <li  
                    key={service}  
                    className="flex items-start gap-3 text-sm font-light text-white/70"  
                  >  
                    <span className="mt-1 shrink-0 text-[#D4AF37]">—</span>  
                    <span>{service}</span>  
                  </li>  
                ))}  
              </ul>  
            </div>  
          )}

          <Link  
            href="/archive"  
            className="inline-block pt-8 text-xs uppercase tracking-[0.4em] text-[#D4AF37] transition-colors hover:text-white"  
          >  
            ← Back to Archive  
          </Link>  
        </div>  
      </div>  
    </section>

    {/* gallery */}  
    {property.gallery && property.gallery.length > 0 && (  
      <section className="py-24">  
        <div className="mx-auto mb-12 max-w-7xl px-6">  
          <h2 className="text-center text-xs uppercase tracking-[0.4em] text-[#D4AF37]">  
            The Estate  
          </h2>  
        </div>  
        <GalleryLightbox  
          images={property.gallery.map((image: string) => proxyUrl(image))}  
          propertyName={property.name}  
        />  
      </section>  
    )}

    <Footer />  
  </main>  
)  
}  
