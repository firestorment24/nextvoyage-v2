import Image from "next/image";  
import Link from "next/link";  
import Navigation from "../../components/Navigation";  
import Footer from "../../components/Footer";

const FEATURED = {  
  slug: "the-silent-roi",  
  title: "The Silent ROI",  
  subtitle: "Why disconnection is the ultimate asset",  
  category: "Editorial",  
  date: "May 2026",  
  readTime: "8 min read",  
  image:  
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",  
  alt: "Minimalist infinity pool overlooking ocean at dusk",  
  excerpt:  
    "The most profitable investment an executive can make is a week of absolute nothing. In an economy that rewards perpetual motion, stillness has become the rarest commodity — and the highest-yielding.",  
};

const ARTICLES = [  
  {  
    slug: "architecture-of-calm",  
    title: "Architecture of Calm",  
    subtitle: "The minimalist alpinist",  
    category: "Sanctuary Study",  
    date: "April 2026",  
    readTime: "6 min read",  
    image:  
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",  
    alt: "Modern alpine retreat with floor-to-ceiling windows",  
    excerpt:  
      "Space is the first luxury. Volume, proportion, and the deliberate absence of clutter — these are the true markers of arrival.",  
    wide: false,  
  },  
  {  
    slug: "the-curated-horizon",  
    title: "The Curated Horizon",  
    subtitle: "Intellectual travel in the age of algorithms",  
    category: "Intellectual Travel",  
    date: "March 2026",  
    readTime: "5 min read",  
    image:  
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop",  
    alt: "Aerial view of turquoise coastline",  
    excerpt:  
      "When every destination is a search result away, true curation becomes the differentiator. We don't recommend places — we prescribe them.",  
    wide: false,  
  },  
  {  
    slug: "the-art-of-discretion",  
    title: "The Art of Discretion",  
    subtitle: "Unmarked sanctuary",  
    category: "Discretion",  
    date: "June 2026",  
    readTime: "7 min read",  
    image:  
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop",  
    alt: "Private villa entrance hidden by tropical foliage",  
    excerpt:  
      "In an era of total visibility, the ultimate luxury is being completely unaccounted for. The unmarked entrance. The unlisted reservation. The unreachable hour.",  
    wide: false,  
  },  
  {  
    slug: "silence-as-luxury",  
    title: "Silence as Luxury",  
    subtitle: "The sound of nothing",  
    category: "Philosophy",  
    date: "July 2026",  
    readTime: "9 min read",  
    image:  
      "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2032&auto=format&fit=crop",  
    alt: "Misty mountain landscape at sunrise",  
    excerpt:  
      "Noise is the cost of modern life. Silence — true, uninterrupted silence — has become the most exclusive amenity on earth. And it cannot be booked online.",  
    wide: false,  
  },  
  {  
    slug: "beyond-the-gate",  
    title: "Beyond the Gate",  
    subtitle: "Private aviation protocols",  
    category: "Aviation",  
    date: "June 2026",  
    readTime: "6 min read",  
    image:  
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070&auto=format&fit=crop",  
    alt: "Private jet on tarmac at sunset",  
    excerpt:  
      "The journey should arrive before the plane does. From seamless FBO transfers to catering that anticipates, every second before takeoff is engineered for calm.",  
    wide: false,  
  },  
  {  
    slug: "wealth-preservation",  
    title: "Wealth Preservation: The Soul",  
    subtitle: "Why the truly wealthy travel differently",  
    category: "Theory",  
    date: "February 2026",  
    readTime: "10 min read",  
    image:  
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",  
    alt: "Empty luxury hotel corridor with warm lighting",  
    excerpt:  
      "Capital follows peace of mind. The truly wealthy don't collect destinations — they collect sanctuaries where their energy is protected, not drained.",  
    wide: false,  
  },  
  {  
    slug: "the-yacht-orchestration",  
    title: "The Yacht Orchestration",  
    subtitle: "Moving horizons",  
    category: "Yachting",  
    date: "May 2026",  
    readTime: "7 min read",  
    image:  
      "https://images.unsplash.com/photo-1567899378494-1b9c1a9e0c6d?q=80&w=2070&auto=format&fit=crop",  
    alt: "Luxury yacht anchored in crystal clear water",  
    excerpt:  
      "A yacht is not a vessel — it's a mobile sanctuary. The art lies not in the navigation, but in the orchestration of every invisible detail.",  
    wide: false,  
  },  
  {  
    slug: "in-search-of-the-unplugged-horizon",  
    title: "In Search of the Unplugged Horizon",  
    subtitle: "Where the signal ends and you begin",  
    category: "Editorial",  
    date: "January 2026",  
    readTime: "8 min read",  
    image:  
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop",  
    alt: "Remote beach with no footprints",  
    excerpt:  
      "The map is not the territory. The places worth going don't appear on Google Maps. They exist in the gaps — where the satellite imagery blurs and the reviews stop.",  
    wide: false,  
  },  
];

export default function PerspectivePage() {  
  return (  
    <>  
      <Navigation />  
      <main className="min-h-screen bg-[#FCFAF7]">  
        {/* Hero */}  
        <section className="px-6 pt-32 pb-16 md:px-12 lg:px-24">  
          <div className="mx-auto max-w-6xl">  
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-6">  
              NexVoyage Collective  
            </p>  
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-[#1C1C1C] leading-tight">  
              The Perspective  
            </h1>  
            <p className="font-sans text-lg md:text-xl text-[#6B6B6B] mt-6 max-w-2xl leading-relaxed">  
              Essays, observations, and manifestos from the edge of luxury  
              travel. No algorithms. No noise. Just signal.  
            </p>  
          </div>  
        </section>

        {/* Featured Article */}  
        <section className="px-6 md:px-12 lg:px-24 pb-16">  
          <div className="mx-auto max-w-6xl">  
            <Link href={`/perspective/${FEATURED.slug}`} className="group block">  
              <div className="relative aspect-[21/9] overflow-hidden mb-8">  
                <Image  
                  src={FEATURED.image}  
                  alt={FEATURED.alt}  
                  fill  
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"  
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />  
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">  
                  <span className="inline-block font-sans text-xs tracking-[0.15em] uppercase text-[#C9A96E] mb-3">  
                    {FEATURED.category} · {FEATURED.date} · {FEATURED.readTime}  
                  </span>  
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">  
                    {FEATURED.title}  
                  </h2>  
                  <p className="font-sans text-base md:text-lg text-white/80 mt-3 max-w-2xl">  
                    {FEATURED.subtitle}  
                  </p>  
                </div>  
              </div>  
              <p className="font-sans text-base md:text-lg text-[#4B4B4B] max-w-3xl leading-relaxed">  
                {FEATURED.excerpt}  
              </p>  
            </Link>  
          </div>  
        </section>

        {/* Article Grid */}  
        <section className="px-6 md:px-12 lg:px-24 pb-32">  
          <div className="mx-auto max-w-6xl">  
            <div className="border-t border-[#E5DDD3] pt-12 mb-12">  
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#8B7355]">  
                Latest Issues  
              </p>  
            </div>  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">  
              {ARTICLES.map((article) => (  
                <Link  
                  key={article.slug}  
                  href={`/perspective/${article.slug}`}  
                  className="group"  
                >  
                  <div className="relative aspect-[4/3] overflow-hidden mb-5">  
                    <Image  
                      src={article.image}  
                      alt={article.alt}  
                      fill  
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"  
                    />  
                  </div>  
                  <span className="font-sans text-xs tracking-[0.15em] uppercase text-[#8B7355]">  
                    {article.category} · {article.date}  
                  </span>  
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-[#1C1C1C] mt-2 leading-snug group-hover:text-[#8B7355] transition-colors">  
                    {article.title}  
                  </h3>  
                  <p className="font-sans text-sm text-[#6B6B6B] mt-2 leading-relaxed line-clamp-2">  
                    {article.excerpt}  
                  </p>  
                  <p className="font-sans text-xs text-[#8B7355] mt-3 tracking-wide">  
                    {article.readTime}  
                  </p>  
                </Link>  
              ))}  
            </div>  
          </div>  
        </section>  
      </main>  
      <Footer />  
    </>  
  );  
}  
