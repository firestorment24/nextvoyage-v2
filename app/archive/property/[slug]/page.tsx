import Link from "next/link"  
import Image from "next/image"  
import { notFound } from "next/navigation"  
import { getPropertyImages, getAllPropertyImageSlugs } from "@/lib/data/property-images"

const PROPERTY_DATA: Record<string, { name: string; location: string; description: string }> = {  
"capella-ubud": { name: "Capella Ubud", location: "Bali, Indonesia", description: "Tented luxury deep in the Balinese jungle. Raw, romantic, untamed." },  
"chable-yucatan": { name: "Chable Yucatan", location: "Yucatán, Mexico", description: "A restored 17th-century hacienda wrapped in jungle and cenotes." },  
"dunton-hot-springs": { name: "Dunton Hot Springs", location: "Colorado, USA", description: "A restored ghost town turned thermal spa deep in the San Juan Mountains." },  
"fawn-bluff-lodge-ontario": { name: "Fawn Bluff Lodge", location: "Ontario, Canada", description: "Untouched Canadian wilderness meets uncompromising comfort." },  
"flockhill-lodge-canterbury": { name: "Flockhill Lodge", location: "Canterbury, New Zealand", description: "Alpine solitude on New Zealand's South Island." },  
"four-seasons-madrid": { name: "Four Seasons Madrid", location: "Madrid, Spain", description: "Urban sophistication at the heart of the Golden Triangle of Art." },  
"habitas-alula": { name: "Habitas AlUla", location: "AlUla, Saudi Arabia", description: "A desert sanctuary carved into ancient sandstone canyons." },  
"here-baa-atoll-maldives": { name: "Here Baa Atoll", location: "Baa Atoll, Maldives", description: "Private-island minimalism in a UNESCO biosphere reserve." },  
"kilchoan-estate-scotland": { name: "Kilchoan Estate", location: "Scotland, UK", description: "A private Scottish highland estate with centuries of history." },  
"la-valise-mazunte": { name: "La Valise Mazunte", location: "Oaxaca, Mexico", description: "Beachfront bohemia where the Pacific meets the Mexican coastline." },  
"one-only-aesthesis": { name: "One&Only Aesthesis", location: "Athens Riviera, Greece", description: "Seaside luxury on the Athenian Riviera, where myth meets modern." },  
"passalacqua-lake-como": { name: "Passalacqua", location: "Lake Como, Italy", description: "An 18th-century villa on the shores of Italy's most storied lake." },  
"sentouchi-retreat-japan": { name: "Sentouchi Retreat", location: "Japan", description: "A Zen-inspired escape in the Seto Inland Sea." }  
}

export function generateStaticParams() {  
return getAllPropertyImageSlugs().map((slug) => ({ slug }))  
}

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {  
const images = getPropertyImages(params.slug)  
const info = PROPERTY_DATA[params.slug]

if (!images || !info) notFound()

return (  
  <main className="min-h-screen bg-[#0A0A0A] text-white">  
    {/* Breadcrumb */}  
    <div className="max-w-7xl mx-auto px-6 pt-8">  
      <Link  
        href="/archive"  
        className="text-sm text-white/40 hover:text-[#D4AF37] transition-colors tracking-wider uppercase"  
      >  
        ← Back to Archive  
      </Link>  
    </div>

    {/* Hero Image */}  
    <section className="relative h-[60vh] md:h-[70vh] mt-4 mx-6 rounded-sm overflow-hidden">  
      <Image  
        src={images.hero}  
        alt={info.name}  
        fill  
        className="object-cover"  
        priority  
        sizes="100vw"  
      />  
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/30 to-transparent" />  
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">  
        <h1 className="text-4xl md:text-6xl font-serif text-[#D4AF37]">  
          {info.name}  
        </h1>  
        <p className="text-white/60 mt-2 tracking-wider uppercase text-sm">  
          {info.location}  
        </p>  
      </div>  
    </section>

    {/* Description */}  
    <section className="max-w-4xl mx-auto px-6 py-12">  
      <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">  
        {info.description}  
      </p>  
    </section>

    {/* Gallery */}  
    <section className="max-w-7xl mx-auto px-6 pb-16">  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">  
        {images.gallery.map((url, idx) => (  
          <div  
            key={idx}  
            className="relative aspect-[4/3] overflow-hidden rounded-sm group"  
          >  
            <Image  
              src={url}  
              alt={`${info.name} — Image ${idx + 1}`}  
              fill  
              className="object-cover transition-transform duration-500 group-hover:scale-105"  
              sizes="(max-width: 768px) 100vw, 50vw"  
            />  
          </div>  
        ))}  
      </div>  
    </section>

    {/* CTA */}  
    <section className="text-center py-16 border-t border-white/10">  
      <p className="text-white/50 text-sm mb-6">Interested in this sanctuary?</p>  
      <Link  
        href="/invitation"  
        className="inline-block px-8 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 text-sm tracking-widest uppercase"  
      >  
        Inquire with Rachel  
      </Link>  
    </section>  
  </main>  
)  
}  
