// app/sanctuaries/[id]/page.tsx  
import { SANCTUARY_DATA } from '../../../data/sanctuaries'  
import { PROPERTY_DATA } from '../../../data/properties'  
import Link from 'next/link'  
import Image from 'next/image'  
import Navigation from '../../Navigation'  
import Footer from '../../Footer'

export default function SanctuaryDetailPage({ params }: { params: { id: string } }) {  
  const sanctuary = SANCTUARY_DATA.find(s => s.id === params.id)  
    
  if (!sanctuary) return <div>Sanctuary not found</div>

  // Filter properties that belong to this sanctuary archetype  
  const filteredProperties = PROPERTY_DATA.filter(p => p.sanctuaryId === sanctuary.id)

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white">  
      <Navigation />  
        
      {/* Hero Section */}  
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">  
        <Image   
          src={sanctuary.heroImage}   
          alt={sanctuary.name}  
          fill  
          className="object-cover opacity-60"  
          priority  
        />  
        <div className="relative z-10 text-center max-w-4xl px-6">  
          <span className="uppercase tracking-[0.3em] text-sm mb-4 block text-gray-400">The Sanctuary</span>  
          <h1 className="text-6xl md:text-8xl font-light mb-6">{sanctuary.name}</h1>  
          <p className="text-xl md:text-2xl font-light text-gray-300 italic">"{sanctuary.tagline}"</p>  
        </div>  
      </section>

      {/* Narrative Section */}  
      <section className="py-24 px-6 max-w-5xl mx-auto">  
        <div className="grid md:grid-cols-2 gap-16 items-start">  
          <div>  
            <h2 className="text-3xl font-light mb-8 italic">The Atmosphere</h2>  
            <p className="text-gray-400 leading-relaxed text-lg">{sanctuary.atmosphere}</p>  
          </div>  
          <div className="bg-[#111] p-12 border border-white/5">  
            <h3 className="text-sm uppercase tracking-widest mb-6 text-gray-500">Key Distinctions</h3>  
            <ul className="space-y-4">  
              {sanctuary.highlights.map((h, i) => (  
                <li key={i} className="flex items-center gap-4 text-gray-300">  
                  <span className="h-[1px] w-4 bg-gray-600"></span>  
                  {h}  
                </li>  
              ))}  
            </ul>  
          </div>  
        </div>  
      </section>

      {/* The Property Collection - This is the dynamic engine */}  
      <section className="py-24 px-6 bg-white text-black">  
        <div className="max-w-7xl mx-auto">  
          <div className="mb-16">  
            <h2 className="text-4xl font-light mb-4">The Collection</h2>  
            <p className="text-gray-500 italic">Hand-selected sanctuaries within {sanctuary.name}.</p>  
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">  
            {filteredProperties.map((property) => (  
              <Link key={property.id} href={`/properties/${property.id}`} className="group">  
                <div className="relative aspect-[4/5] overflow-hidden mb-6">  
                  <Image   
                    src={property.image}  
                    alt={property.name}  
                    fill  
                    className="object-cover transition-transform duration-700 group-hover:scale-105"  
                  />  
                </div>  
                <h3 className="text-2xl font-light mb-2">{property.name}</h3>  
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">{property.location}</p>  
                <p className="text-gray-600 italic line-clamp-2">{property.tagline}</p>  
              </Link>  
            ))}  
          </div>  
            
          {filteredProperties.length === 0 && (  
            <div className="text-center py-20 border border-dashed border-gray-200">  
              <p className="text-gray-400 italic">The collection for this sanctuary is currently being curated.</p>  
            </div>  
          )}  
        </div>  
      </section>

      <Footer />  
    </main>  
  )  
}  
