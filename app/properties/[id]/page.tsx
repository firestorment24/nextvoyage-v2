import { properties } from "../../../data/properties";  
import { notFound } from "next/navigation";  
import Navigation from "../../../components/Navigation";  
import Footer from "../../../components/Footer";  
import { EliteAmenities } from "../../../components/EliteAmenities";  
import Link from "next/link";

interface Props {  
  params: { id: string };  
}

export async function generateStaticParams() {  
  return properties.map((prop) => ({  
    id: prop.id,  
  }));  
}

export default function PropertyDetailPage({ params }: Props) {  
  const property = properties.find((p) => p.id === params.id);

  if (!property) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-[#fafafa] text-[#1a1a1a]">  
      <Navigation />

      {/* Hero Section */}  
      <section className="relative h-[80vh] w-full overflow-hidden">  
        {property.image && (  
          <img  
            src={property.image}  
            alt={property.name}  
            className="absolute inset-0 h-full w-full object-cover"  
          />  
        )}  
        <div className="absolute inset-0 bg-black/30" />  
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">  
          <div className="max-w-4xl">  
            <p className="text-white/80 uppercase tracking-[0.3em] text-xs mb-4">  
              {property.location}  
            </p>  
            <h1 className="text-4xl md:text-7xl text-white font-light tracking-tight mb-8">  
              {property.name}  
            </h1>  
          </div>  
        </div>  
      </section>

      {/* Intro Section */}  
      <section className="max-w-7xl mx-auto px-6 py-24">  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">  
          <div className="lg:col-span-8">  
            <h2 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-8">  
              The Residence  
            </h2>  
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-800 mb-12">  
              {property.highlight || "An architectural masterpiece offering unparalleled privacy and bespoke luxury in one of the world's most sought-after destinations."}  
            </p>  
              
            <div className="prose prose-lg text-gray-600 max-w-none">  
              <p>  
                Experience a level of service and exclusivity that transcends traditional hospitality.   
                Every detail of this property has been curated for the discerning traveler who   
                values discretion, design, and effortless comfort.  
              </p>  
            </div>  
          </div>

          <div className="lg:col-span-4 lg:border-l border-gray-200 lg:pl-12">  
            <div className="sticky top-32">  
              <div className="mb-10">  
                <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Exclusivity</h3>  
                <p className="text-lg font-medium">{property.exclusiveOffer || "Private Commission Only"}</p>  
              </div>  
                
              <div className="mb-10">  
                <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Investment</h3>  
                <p className="text-lg">{property.priceLevel || "Upon Request"}</p>  
              </div>

              <Link  
                href={`/reserve?property=${property.id}`}  
                className="inline-block w-full text-center bg-[#1a1a1a] text-white py-5 px-8 text-sm uppercase tracking-widest hover:bg-black transition-colors"  
              >  
                Inquire for Access  
              </Link>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Amenities Section */}  
      <section className="bg-white py-24 border-y border-gray-100">  
        <div className="max-w-7xl mx-auto px-6">  
          <div className="mb-16">  
            <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 text-center">  
              The Collective Perks  
            </h2>  
          </div>  
          <EliteAmenities />  
        </div>  
      </section>

      {/* Property Details Grid */}  
      {property.amenities && property.amenities.length > 0 && (  
        <section className="max-w-7xl mx-auto px-6 py-24">  
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-12">  
            Features & Services  
          </h2>  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">  
            {property.amenities.map((amenity, index) => (  
              <div key={index} className="border-t border-gray-100 pt-6">  
                <p className="text-sm font-light text-gray-600 italic">{amenity}</p>  
              </div>  
            ))}  
          </div>  
        </section>  
      )}

      <Footer />  
    </main>  
  );  
}  
