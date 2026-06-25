import Link from "next/link"  
import Image from "next/image"  
import { getPropertyImages, getAllPropertyImageSlugs } from "@/lib/data/property-images"

// If you have property data with names, import it. Otherwise hardcode a quick map.  
const PROPERTY_NAMES: Record<string, { name: string; location: string }> = {  
  "capella-ubud": { name: "Capella Ubud", location: "Bali, Indonesia" },  
  "chable-yucatan": { name: "Chable Yucatan", location: "Yucatán, Mexico" },  
  "dunton-hot-springs": { name: "Dunton Hot Springs", location: "Colorado, USA" },  
  "fawn-bluff-lodge-ontario": { name: "Fawn Bluff Lodge", location: "Ontario, Canada" },  
  "flockhill-lodge-canterbury": { name: "Flockhill Lodge", location: "Canterbury, New Zealand" },  
  "four-seasons-madrid": { name: "Four Seasons Madrid", location: "Madrid, Spain" },  
  "habitas-alula": { name: "Habitas AlUla", location: "AlUla, Saudi Arabia" },  
  "here-baa-atoll-maldives": { name: "Here Baa Atoll", location: "Baa Atoll, Maldives" },  
  "kilchoan-estate-scotland": { name: "Kilchoan Estate", location: "Scotland, UK" },  
  "la-valise-mazunte": { name: "La Valise Mazunte", location: "Oaxaca, Mexico" },  
  "one-only-aesthesis": { name: "One&Only Aesthesis", location: "Athens Riviera, Greece" },  
  "passalacqua-lake-como": { name: "Passalacqua", location: "Lake Como, Italy" },  
  "sentouchi-retreat-japan": { name: "Sentouchi Retreat", location: "Japan" }  
}

export default function ArchivePage() {  
  const slugs = getAllPropertyImageSlugs()

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white">  
      {/* Hero */}  
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">  
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0A0A]" />  
        <div className="relative z-10 text-center px-6">  
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-wide text-[#D4AF37] mb-4">  
            The Archive  
          </h1>  
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light">  
            A curated collection of the world&apos;s most extraordinary sanctuaries.  
          </p>  
        </div>  
      </section>

      {/* Grid */}  
      <section className="max-w-7xl mx-auto px-6 pb-24">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {slugs.map((slug) => {  
            const images = getPropertyImages(slug)  
            const info = PROPERTY_NAMES[slug]  
            if (!images || !info) return null

            return (  
              <Link  
                key={slug}  
                href={`/archive/${slug}`}  
                className="group block relative overflow-hidden rounded-sm"  
              >  
                <div className="aspect-[4/5] relative overflow-hidden">  
                  <Image  
                    src={images.hero}  
                    alt={info.name}  
                    fill  
                    className="object-cover transition-transform duration-700 group-hover:scale-105"  
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"  
                  />  
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />  
                </div>

                {/* Brass frame border on hover */}  
                <div className="absolute inset-0 border-0 group-hover:border border-[#D4AF37]/40 transition-all duration-500 pointer-events-none" />

                {/* Overlay text */}  
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">  
                  <h2 className="text-xl font-serif text-white group-hover:text-[#D4AF37] transition-colors duration-300">  
                    {info.name}  
                  </h2>  
                  <p className="text-sm text-white/60 mt-1 tracking-wide uppercase text-xs">  
                    {info.location}  
                  </p>  
                </div>  
              </Link>  
            )  
          })}  
        </div>  
      </section>

      {/* CTA */}  
      <section className="text-center py-16 border-t border-white/10">  
        <p className="text-white/50 text-sm mb-4">Not what you&apos;re looking for?</p>  
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
