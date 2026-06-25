import { PROPERTY_DATA } from '@/data/properties'  
import { notFound } from 'next/navigation'  
import Link from 'next/link'  
import Image from 'next/image'

export default async function PropertyDetailPage({  
  params  
}: {  
  params: Promise<{ slug: string }>  
}) {  
  const { slug } = await params  
  const property = PROPERTY_DATA.find(p => p.id === slug)  
  if (!property) return notFound()

  return (  
    <main className="min-h-screen bg-black text-white">  
      {/* Hero Section */}  
      <div className="relative h-[70vh] w-full">  
        <Image  
          src={property.image}  
          alt={property.name}  
          fill  
          className="object-cover opacity-70"  
          priority  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />  
          
        {/* Back Link */}  
        <Link  
          href="/archive"  
          className="absolute top-8 left-8 font-inter text-sm text-[#C5A059]/60 hover:text-[#C5A059] transition-colors tracking-wider uppercase"  
        >  
          ← Back to Archive  
        </Link>

        {/* Property Title Overlay */}  
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">  
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-[#C5A059]/70 mb-2">  
            {property.collection} — {property.intel.positioning}  
          </p>  
          <h1 className="font-cormorant text-5xl md:text-7xl text-white mb-2">  
            {property.name}  
          </h1>  
          <p className="font-inter text-lg text-white/60">  
            {property.location}  
          </p>  
        </div>  
      </div>

      {/* Description */}  
      <div className="max-w-5xl mx-auto px-6 py-16">  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">  
          <div className="lg:col-span-2">  
            <p className="font-inter text-lg leading-relaxed text-white/80 mb-8">  
              {property.description}  
            </p>  
              
            {/* Gallery Grid */}  
            {property.gallery.length > 1 && (  
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">  
                {property.gallery.map((img, i) => (  
                  <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-sm">  
                    <Image  
                      src={img}  
                      alt={`${property.name} — view ${i + 1}`}  
                      fill  
                      className="object-cover hover:scale-105 transition-transform duration-700"  
                    />  
                  </div>  
                ))}  
              </div>  
            )}  
          </div>

          {/* Intel Sidebar */}  
          <div className="border border-[#C5A059]/20 p-6 rounded-sm bg-[#0A0A0A]">  
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-[#C5A059]/60 mb-4">  
              Intelligence Dossier  
            </p>  
            <div className="space-y-4">  
              <div>  
                <p className="font-inter text-xs text-white/40 uppercase tracking-wider">Positioning</p>  
                <p className="font-cormorant text-lg text-white mt-1">{property.intel.positioning}</p>  
              </div>  
              <div>  
                <p className="font-inter text-xs text-white/40 uppercase tracking-wider">Category</p>  
                <p className="font-cormorant text-lg text-white mt-1">{property.intel.category}</p>  
              </div>  
              <div>  
                <p className="font-inter text-xs text-white/40 uppercase tracking-wider mb-2">Member Benefits</p>  
                <ul className="space-y-2">  
                  {property.intel.memberBenefits.map((benefit, i) => (  
                    <li key={i} className="font-inter text-sm text-white/70 flex items-start gap-2">  
                      <span className="text-[#C5A059] mt-0.5">—</span>  
                      {benefit}  
                    </li>  
                  ))}  
                </ul>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </main>  
  )  
}  
