import { PROPERTY_DATA } from '@/data/properties'  
import { notFound } from 'next/navigation'  
import Link from 'next/link'  
import GalleryLightbox from './GalleryLightbox'

const proxyUrl = (url: string) => `/api/image?url=${encodeURIComponent(url)}`

export default async function PropertyDetailPage({  
  params,  
}: {  
  params: Promise<{ slug: string }>  
}) {  
  const { slug } = await params  
  const property = PROPERTY_DATA.find((p) => p.id === slug)  
  if (!property) return notFound()

  return (  
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: '#ffffff' }}>  
      {/* Hero Section */}  
      <div style={{ position: 'relative', width: '100%', height: '65vh', overflow: 'hidden' }}>  
        <img  
          src={proxyUrl(property.image)}  
          alt={property.name}  
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}  
        />  
        <div  
          style={{  
            position: 'absolute',  
            inset: 0,  
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',  
          }}  
        />  
      </div>

      {/* Content */}  
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>  
        {/* Back Link */}  
        <Link  
          href="/archive"  
          style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '0.1em' }}  
        >  
          ← Back to Archive  
        </Link>

        {/* Breadcrumb */}  
        <p style={{ color: '#ffffff', fontSize: '0.75rem', letterSpacing: '0.15em', marginTop: '1rem', opacity: 0.7 }}>  
          {property.collection} — {property.intel.positioning}  
        </p>

        {/* Title */}  
        <h1 style={{ color: '#ffffff', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 300, letterSpacing: '0.05em', marginTop: '0.5rem' }}>  
          {property.name}  
        </h1>

        {/* Location */}  
        <p style={{ color: '#ffffff', fontSize: '0.875rem', letterSpacing: '0.15em', marginTop: '0.5rem', opacity: 0.7 }}>  
          {property.location}  
        </p>

        {/* Description */}  
        <p style={{ color: '#ffffff', fontSize: '1rem', lineHeight: 1.8, marginTop: '2rem', maxWidth: '720px', opacity: 0.85 }}>  
          {property.description}  
        </p>

        {/* Photo Gallery */}  
        {property.gallery && property.gallery.length > 1 && (  
          <section style={{ marginTop: '3rem' }}>  
            <h2 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 300, letterSpacing: '0.15em', marginBottom: '1rem' }}>  
              Gallery  
            </h2>  
            <GalleryLightbox images={property.gallery} propertyName={property.name} proxyUrl={proxyUrl} />  
          </section>  
        )}

        {/* Intelligence Dossier */}  
        <section style={{ marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '2rem' }}>  
          <h2 style={{ color: '#ffffff', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '1.5rem', opacity: 0.6 }}>  
            Intelligence Dossier  
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '600px' }}>  
            <div>  
              <p style={{ color: '#ffffff', fontSize: '0.7rem', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '0.25rem' }}>  
                Positioning  
              </p>  
              <p style={{ color: '#ffffff', fontSize: '0.875rem' }}>{property.intel.positioning}</p>  
            </div>  
            <div>  
              <p style={{ color: '#ffffff', fontSize: '0.7rem', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '0.25rem' }}>  
                Category  
              </p>  
              <p style={{ color: '#ffffff', fontSize: '0.875rem' }}>{property.intel.category}</p>  
            </div>  
          </div>

          <div style={{ marginTop: '2rem' }}>  
            <p style={{ color: '#ffffff', fontSize: '0.7rem', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '0.75rem' }}>  
              Member Benefits  
            </p>  
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>  
              {property.intel.memberBenefits.map((benefit, i) => (  
                <li  
                  key={i}  
                  style={{  
                    color: '#ffffff',  
                    fontSize: '0.875rem',  
                    padding: '0.4rem 0',  
                    borderBottom: '1px solid rgba(255,255,255,0.08)',  
                    opacity: 0.85,  
                  }}  
                >  
                  — {benefit}  
                </li>  
              ))}  
            </ul>  
          </div>  
        </section>  
      </div>  
    </div>  
  )  
}  
