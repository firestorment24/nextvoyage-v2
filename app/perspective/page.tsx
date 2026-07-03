import Link from "next/link";  
import Image from "next/image";  
import Navigation from "@/components/Navigation";  
import Footer from "@/components/Footer";

const articles = [  
  {  
    slug: "the-perspective-framework",  
    title: "Dossier 00: The Perspective Framework — The Silent ROI",  
    category: "Philosophy / Framework",  
    date: "June 11, 2026",  
    excerpt:  
      "An exploration of the tactical ROI of luxury travel through the lens of the Perspective Framework. Discover the hidden value of time, invisible service, and high-performance logistics for the high-net-worth traveler.",  
    image: "https://cdn.marblism.com/tQ6-iP8FIY3.webp",  
    featured: true,  
  },  
  {  
    slug: "the-architecture-of-calm",  
    title: "Our Philosophy: The Architecture of Calm",  
    category: "Philosophy",  
    date: "June 14, 2026",  
    excerpt:  
      "An exploration of NexVoyage Collective's brand philosophy, focusing on the Architecture of Intent, the Brass & Shadow aesthetic, and the commitment to legacy in luxury travel.",  
    image: "https://cdn.marblism.com/VymBul776ZU.webp",  
    featured: false,  
  },  
  {  
    slug: "the-roi-of-reset",  
    title: "The Perspective Manifesto: The ROI of Reset",  
    category: "Manifesto / Editorial",  
    date: "June 14, 2026",  
    excerpt:  
      "An exploration of the ROI of deep rest for high-performance leaders, focusing on privacy as infrastructure, cognitive restoration, and tactical recovery within a Brass & Shadow aesthetic.",  
    image: "https://cdn.marblism.com/2ee19ezvSvk.webp",  
    featured: false,  
  },  
  {  
    slug: "silence-as-luxury",  
    title: "Silence as Luxury: The Sound of Nothing",  
    category: "Editorial",  
    date: "June 16, 2026",  
    excerpt:  
      "An exploration of acoustic luxury, mental clarity, and the profound peace of silence in the context of high-end travel and the 'Brass & Shadow' aesthetic.",  
    image: "https://cdn.marblism.com/4uxdua4JQg5.webp",  
    featured: false,  
  },  
  {  
    slug: "the-art-of-discretion",  
    title: "The Art of Discretion: Unmarked Sanctuary",  
    category: "Editorial",  
    date: "June 16, 2026",  
    excerpt:  
      "An exploration of the art of discretion and unmarked luxury sanctuaries for the elite traveler, focusing on quiet luxury, privacy, and refined minimalism.",  
    image: "https://cdn.marblism.com/3GCxqGcplNJ.webp",  
    featured: false,  
  },  
];

export default function PerspectivePage() {  
  const featured = articles.find((a) => a.featured);  
  const remaining = articles.filter((a) => !a.featured);

  return (  
    <main className="min-h-screen bg-[#0D0D0D] text-[#E2E0D5]">  
      <Navigation />  
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">  
        {/* Header */}  
        <header className="mb-16">  
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight text-[#C8A97E]">  
            The Perspective  
          </h1>  
          <p className="mt-3 text-lg text-[#A09F94] font-light tracking-wide uppercase">  
            Intellectual Insights &amp; Observations  
          </p>  
          <div className="w-16 h-px bg-[#C8A97E]/40 mt-6" />  
        </header>

        {/* Featured Article */}  
        {featured && (  
          <Link  
            href={`/perspective/${featured.slug}`}  
            className="group block mb-16"  
          >  
            <div className="relative aspect-[21/9] overflow-hidden rounded-sm">  
              <Image  
                src={featured.image}  
                alt={featured.title}  
                fill  
                className="object-cover transition-transform duration-700 group-hover:scale-105"  
              />  
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-[#0D0D0D]/20 to-transparent" />  
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">  
                <span className="text-xs tracking-[0.2em] uppercase text-[#C8A97E] mb-3 block">  
                  {featured.category} &mdash; {featured.date}  
                </span>  
                <h2 className="font-serif text-3xl md:text-4xl text-[#E2E0D5] mb-3">  
                  {featured.title}  
                </h2>  
                <p className="text-[#A09F94] max-w-2xl text-sm md:text-base leading-relaxed">  
                  {featured.excerpt}  
                </p>  
              </div>  
            </div>  
          </Link>  
        )}

        {/* Remaining Articles Grid */}  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
          {remaining.map((article) => (  
            <Link  
              key={article.slug}  
              href={`/perspective/${article.slug}`}  
              className="group block"  
            >  
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-5">  
                <Image  
                  src={article.image}  
                  alt={article.title}  
                  fill  
                  className="object-cover transition-transform duration-700 group-hover:scale-105"  
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />  
              </div>  
              <span className="text-xs tracking-[0.2em] uppercase text-[#C8A97E]">  
                {article.category} &mdash; {article.date}  
              </span>  
              <h3 className="font-serif text-xl md:text-2xl text-[#E2E0D5] mt-2 mb-2 group-hover:text-[#C8A97E] transition-colors">  
                {article.title}  
              </h3>  
              <p className="text-[#A09F94] text-sm leading-relaxed">  
                {article.excerpt}  
              </p>  
            </Link>  
          ))}  
        </div>  
      </div>  
      <Footer />  
    </main>  
  );  
}  
