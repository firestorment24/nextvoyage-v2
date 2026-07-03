import { notFound } from 'next/navigation'  
import Navigation from '../../../../components/Navigation'  
import Footer from '../../../../components/Footer'  
import { properties } from '../../../../data/properties'  
import GalleryLightbox from './GalleryLightbox'

export default async function PropertyPage({ params }: { params: { slug: string } }) {  
  const property = properties.find(  
    (p) => p.id === params.slug  
  )

  if (!property) {  
    notFound()  
  }

  return (  
    <main className="min-h-screen bg-black">  
      <Navigation />

      {/* Hero Section */}  
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">  
        <img  
          src={property.image}  
          alt={property.name}  
          className="w-full h-full object-cover"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />  
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">  
          <p className="text-[#D4AF37] font-medium tracking-widest text-sm uppercase mb-2">  
            {property.collection}  
          </p>  
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">  
            {property.name}  
          </h1>  
          <p className="text-lg md:text-xl text-white/70">  
            {property.location}  
          </p>  
        </div>  
      </section>

      {/* Content Grid */}  
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">  
          {/* Main Content */}  
          <div className="lg:col-span-2">  
            <div className="prose prose-lg prose-invert max-w-none">  
              <p className="text-white/80 text-lg leading-relaxed">  
                {property.description}  
              </p>  
            </div>

            {/* Gallery */}  
            {property.gallery && property.gallery.length > 0 && (  
              <div className="mt-16">  
                <h2 className="text-2xl font-bold text-white mb-8">Gallery</h2>  
                <GalleryLightbox images={property.gallery} propertyName={property.name} />  
              </div>  
            )}  
          </div>

          {/* Sidebar */}  
          <aside className="lg:col-span-1">  
            <div className="sticky top-24 space-y-6">  
              {property.intel && (  
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">  
                  <h3 className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-4">  
                    Property Details  
                  </h3>  
                  <dl className="space-y-4">  
                    <div>  
                      <dt className="text-white/50 text-xs uppercase tracking-wider">Positioning</dt>  
                      <dd className="text-white font-medium mt-1">{property.intel.positioning}</dd>  
                    </div>  
                    <div>  
                      <dt className="text-white/50 text-xs uppercase tracking-wider">Category</dt>  
                      <dd className="text-white font-medium mt-1">{property.intel.category}</dd>  
                    </div>  
                    {property.intel.memberBenefits && property.intel.memberBenefits.length > 0 && (  
                      <div>  
                        <dt className="text-white/50 text-xs uppercase tracking-wider">Member Benefits</dt>  
                        <dd className="text-white/70 mt-1">  
                          <ul className="space-y-1">  
                            {property.intel.memberBenefits.map((b: string, i: number) => (  
                              <li key={i} className="text-sm">{b}</li>  
                            ))}  
                          </ul>  
                        </dd>  
                      </div>  
                    )}  
                  </dl>  
                </div>  
              )}  
            </div>  
          </aside>  
        </div>  
      </section>

      <Footer />  
    </main>  
  )  
}  
