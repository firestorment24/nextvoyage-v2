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

  const heroImage = property.images[0] || "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=80";  
  const positioning = property.intel?.positioning || property.description || "";  
  const benefits = property.intel?.memberBenefits || [];  
  const category = property.intel?.category || "Sanctuary";

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
        {/* Description / Positioning */}  
        <div>  
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">  
            Field Report  
          </h2>  
          <p className="font-sans text-base md:text-lg text-white/80 leading-relaxed">  
            {positioning}  
          </p>  
        </div>

        {/* Member Benefits */}  
        {benefits.length > 0 && (  
          <div>  
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">  
              Member Benefits  
            </h2>  
            <ul className="space-y-3">  
              {benefits.map((benefit, idx) => (  
                <li  
                  key={idx}  
                  className="font-sans text-base md:text-lg text-white/70 border-l-2 border-[#C5A059] pl-4"  
                >  
                  {benefit}  
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
