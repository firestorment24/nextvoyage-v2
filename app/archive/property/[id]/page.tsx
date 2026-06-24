import { notFound } from "next/navigation";  
import Image from "next/image";  
import Link from "next/link";  
import { PROPERTY_DATA } from "@/lib/data/sanctuaries";

export function generateStaticParams() {  
  return PROPERTY_DATA.map((p) => ({ id: String(p.id) }));  
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {  
  const property = PROPERTY_DATA.find((p) => String(p.id) === params.id);  
  if (!property) notFound();

  const heroImage =  
    property.image || property.images?.[0] || "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=80";  
  const category = property.intel?.category || property.collection || "Sanctuary";  
  const positioning = property.intel?.positioning || property.description || "";  
  const benefits = property.intel?.memberBenefits || property.highlight || property.exclusiveOffer || "";

  return (  
    <main className="min-h-screen bg-black">  
      {/* ─── HERO ─── */}  
      <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">  
        <Image  
          src={heroImage}  
          alt={property.name}  
          fill  
          className="object-cover opacity-60 grayscale"  
          priority  
        />  
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />  
        <div className="absolute bottom-10 left-6 md:left-12 max-w-3xl">  
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C5A059]">  
            {category}  
          </span>  
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mt-2 leading-tight">  
            {property.name}  
          </h1>  
          <p className="font-sans text-base md:text-lg text-white/80 mt-3">  
            {property.location}  
          </p>  
        </div>  
      </section>

      {/* ─── BACK LINK ─── */}  
      <div className="max-w-5xl mx-auto px-6 pt-8">  
        <Link  
          href="/archive"  
          className="font-sans text-xs tracking-[0.2em] uppercase text-white/50 hover:text-[#C5A059] transition-colors"  
        >  
          &larr; Back to Archive  
        </Link>  
      </div>

      {/* ─── DOSSIER BODY ─── */}  
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-16">  
        {/* Positioning */}  
        {positioning && (  
          <div>  
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">  
              Field Report  
            </h2>  
            <p className="font-sans text-base md:text-lg text-white/80 leading-relaxed">  
              {positioning}  
            </p>  
          </div>  
        )}

        {/* Member Benefits / Highlight */}  
        {benefits && (  
          <div>  
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">  
              Member Benefits  
            </h2>  
            <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed">  
              {benefits}  
            </p>  
          </div>  
        )}

        {/* Technical Specs */}  
        {property.specs && property.specs.length > 0 && (  
          <div>  
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-6">  
              Technical Specifications  
            </h2>  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">  
              {property.specs.map((spec, idx) => (  
                <div  
                  key={idx}  
                  className="border border-neutral-800 bg-neutral-900/50 px-5 py-4"  
                >  
                  <span className="font-sans text-xs tracking-widest uppercase text-[#C5A059]">  
                    {spec.label || spec.category || "Spec"}  
                  </span>  
                  <p className="font-sans text-base text-white/80 mt-1">  
                    {spec.value}  
                  </p>  
                </div>  
              ))}  
            </div>  
          </div>  
        )}

        {/* Amenities */}  
        {property.amenities && property.amenities.length > 0 && (  
          <div>  
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">  
              Amenities  
            </h2>  
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">  
              {property.amenities.map((item, idx) => (  
                <li  
                  key={idx}  
                  className="font-sans text-sm text-white/70 border border-neutral-800 px-4 py-3"  
                >  
                  {item}  
                </li>  
              ))}  
            </ul>  
          </div>  
        )}

        {/* CTA */}  
        <div className="border-t border-neutral-800 pt-10 text-center">  
          <Link  
            href="/invitation"  
            className="inline-block font-sans text-sm tracking-[0.25em] uppercase text-black bg-[#C5A059] px-10 py-4 hover:bg-[#B8922F] transition-colors"  
          >  
            Inquire with Rachel  
          </Link>  
        </div>  
      </section>

      {/* ─── FOOTER ─── */}  
      <footer className="border-t border-neutral-900 py-8 text-center">  
        <p className="font-sans text-xs tracking-widest uppercase text-white/40">  
          NexVoyage Collective &copy; {new Date().getFullYear()}  
        </p>  
      </footer>  
    </main>  
  );  
}  
