import { notFound } from 'next/navigation';  
import Link from 'next/link';  
import Image from 'next/image';  
import { sanctuaries } from '@/data/sanctuaries';  
import PropertyBuckets from '@/components/PropertyBuckets';

interface PageProps {  
  params: {  
    slug: string;  
  };  
}

// Generate routes for all 12 sanctuaries at build time  
export async function generateStaticParams() {  
  return sanctuaries.map((s) => ({  
    slug: s.slug,  
  }));  
}

export default function SanctuaryDetailPage({ params }: PageProps) {  
  const sanctuary = sanctuaries.find((s) => s.slug === params.slug);

  if (!sanctuary) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-white">  
      {/* Hero Section */}  
      <section className="relative h-[80vh] w-full overflow-hidden">  
        <Image  
          src={sanctuary.heroImage}  
          alt={sanctuary.name}  
          fill  
          priority  
          className="object-cover transition-transform duration-1000 hover:scale-105"  
        />  
        <div className="absolute inset-0 bg-black/30" />  
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">  
          <span className="text-xs tracking-[0.4em] uppercase mb-4 opacity-80">  
            {sanctuary.location}  
          </span>  
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-8">  
            {sanctuary.name}  
          </h1>  
          <Link  
            href="/reserve"  
            className="px-8 py-4 bg-white text-black text-xs tracking-widest uppercase hover:bg-neutral-100 transition-colors"  
          >  
            Request a Quote  
          </Link>  
        </div>  
      </section>

      {/* Narrative Section */}  
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-neutral-100">  
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">  
          <div className="md:col-span-5">  
            <h2 className="text-sm tracking-[0.3em] uppercase text-neutral-400 mb-8">  
              The Philosophy  
            </h2>  
            <p className="text-3xl font-light leading-tight text-neutral-900 italic">  
              "{sanctuary.tagline}"  
            </p>  
          </div>  
          <div className="md:col-span-7">  
            <p className="text-xl text-neutral-600 font-light leading-relaxed mb-12">  
              {sanctuary.categoryDescription} {sanctuary.atmosphere}  
            </p>  
              
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">  
              <div>  
                <h3 className="text-[10px] tracking-widest uppercase font-bold text-neutral-900 mb-4">  
                  Signature Amenities  
                </h3>  
                <ul className="space-y-2">  
                  {sanctuary.highlights.map((item, i) => (  
                    <li key={i} className="text-sm text-neutral-500 flex items-center">  
                      <span className="w-1 h-1 bg-neutral-300 rounded-full mr-3" />  
                      {item}  
                    </li>  
                  ))}  
                </ul>  
              </div>  
              <div>  
                <h3 className="text-[10px] tracking-widest uppercase font-bold text-neutral-900 mb-4">  
                  Inventory  
                </h3>  
                <p className="text-sm text-neutral-500">  
                  {sanctuary.propertyCount} Curated Residences  
                </p>  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Dynamic Property Buckets */}  
      <PropertyBuckets buckets={sanctuary.buckets} />

      {/* Footer CTA */}  
      <section className="py-32 bg-neutral-900 text-white text-center">  
        <div className="max-w-3xl mx-auto px-6">  
          <h2 className="text-4xl font-light mb-8">Ready to secure your sanctuary?</h2>  
          <Link  
            href="/reserve"  
            className="inline-block border border-white/20 px-12 py-5 text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500"  
          >  
            Begin Private Inquiry  
          </Link>  
        </div>  
      </section>  
    </main>  
  );  
}  
