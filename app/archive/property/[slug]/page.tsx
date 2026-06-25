import { PROPERTY_DATA } from '@/data/properties'  
import { notFound } from 'next/navigation'  
import Link from 'next/link'  
import GalleryLightbox from './GalleryLightbox'

const proxyUrl = (url: string) => `/api/image?url=${encodeURIComponent(url)}`

export default async function PropertyDetailPage({  
params  
}: {  
params: Promise<{ slug: string }>  
}) {  
const { slug } = await params  
const property = PROPERTY_DATA.find(p => p.id === slug)  
if (!property) return notFound()

return (  
  <main className="min-h-screen bg-black property-detail-page">  
    <style>{`  
      .property-detail-page * {  
        color: #FCFAF7 !important;  
      }  
      .property-detail-page .brass-text {  
        color: #C5A059 !important;  
      }  
      .property-detail-page .muted-text {  
        color: rgba(252,250,247,0.6) !important;  
      }  
      .property-detail-page .label-text {  
        color: rgba(252,250,247,0.4) !important;  
      }  
    `}</style>

    {/* Hero Section */}  
    <div className="relative h-[70vh] w-full">  
      <img  
        src={proxyUrl(property.image)}  
        alt={property.name}  
        className="absolute inset-0 w-full h-full object-cover opacity-70"  
      />  
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />  
      <Link  
        href="/archive"  
        className="absolute top-8 left-8 font-inter text-sm brass-text/60 hover:brass-text transition-colors tracking-wider uppercase"  
      >  
        ← Back to Archive  
      </Link>  
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">  
        <p className="font-inter text-xs tracking-[0.2em] uppercase brass-text/70 mb-2">  
          {property.collection} — {property.intel.positioning}  
        </p>  
        <h1 className="font-cormorant text-5xl md:text-7xl font-light mb-2">  
          {property.name}  
        </h1>  
        <p className="font-inter text-lg muted-text">  
          {property.location}  
        </p>  
      </div>  
    </div>

    <div className="max-w-5xl mx-auto px-6 py-16">  
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">  
        <div className="lg:col-span-2">  
          <p className="font-inter text-lg leading-relaxed mb-8">  
            {property.description}  
          </p>

          {property.gallery?.length > 1 && (  
            <GalleryLightbox  
              images={property.gallery}  
              propertyName={property.name}  
              proxyUrl={proxyUrl}  
            />  
          )}  
        </div>

        <div className="border border-[#C5A059]/20 p-6 rounded-sm bg-[#0A0A0A]">  
          <p className="font-inter text-xs tracking-[0.2em] uppercase brass-text/60 mb-4">  
            Intelligence Dossier  
          </p>  
          <div className="space-y-4">  
            <div>  
              <p className="font-inter text-xs label-text uppercase tracking-wider">Positioning</p>  
              <p className="font-cormorant text-lg mt-1">{property.intel.positioning}</p>  
            </div>  
            <div>  
              <p className="font-inter text-xs label-text uppercase tracking-wider">Category</p>  
              <p className="font-cormorant text-lg mt-1">{property.intel.category}</p>  
            </div>  
            <div>  
              <p className="font-inter text-xs label-text uppercase tracking-wider mb-2">Member Benefits</p>  
              <ul className="space-y-2">  
                {property.intel.memberBenefits.map((benefit, i) => (  
                  <li key={i} className="font-inter text-sm flex items-start gap-2">  
                    <span className="brass-text mt-0.5">—</span>  
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
