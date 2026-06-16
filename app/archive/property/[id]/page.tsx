import { notFound } from 'next/navigation';  
import Link from 'next/link';  
import Image from 'next/image';  
import { PROPERTY_DATA } from '@/lib/data/sanctuaries';

interface PageProps {  
  params: Promise<{ id: string }>;  
}

export default async function PropertyPage({ params }: PageProps) {  
  const { id } = await params;  
  const property = PROPERTY_DATA.find((p) => p.id === id);

  if (!property) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">  
      {/* Hero Section */}  
      <section className="relative h-[80vh] w-full overflow-hidden">  
        <Image  
          src={property.image}  
          alt={property.name}  
          fill  
          className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"  
          priority  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />  
          
        <div className="absolute bottom-12 left-6 md:left-12">  
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/50 mb-4">  
            {property.serial} // {property.location}  
          </p>  
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter uppercase">  
            {property.name}  
          </h1>  
        </div>  
      </section>

      {/* Narrative & Technical Specs */}  
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">  
          
        {/* Left: Description */}  
        <div className="lg:col-span-7 space-y-12">  
          <div className="space-y-6">  
            <h2 className="text-xs uppercase tracking-[0.3em] text-white/40">The Perspective</h2>  
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-neutral-200">  
              {property.description}  
            </p>  
          </div>  
            
          <div className="pt-12 border-t border-white/10">  
            <p className="text-lg text-neutral-400 italic font-light">  
              "{property.highlight}"  
            </p>  
          </div>  
        </div>

        {/* Right: Technical Deep-Dive */}  
        <div className="lg:col-span-4 lg:col-start-9 space-y-12">  
          <div className="space-y-8">  
            <h2 className="text-xs uppercase tracking-[0.3em] text-white/40">Specifications</h2>  
              
            <div className="space-y-6">  
              <div>  
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1">Architect</p>  
                <p className="text-sm tracking-wide">{property.specs.architect}</p>  
              </div>  
              <div>  
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1">Inauguration</p>  
                <p className="text-sm tracking-wide">{property.specs.year}</p>  
              </div>  
              <div>  
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1">Primary Materials</p>  
                <p className="text-sm tracking-wide leading-relaxed">{property.specs.materials}</p>  
              </div>  
            </div>  
          </div>

          {/* CTA Button */}  
          <div className="pt-8">  
            <Link   
              href="/invitation"   
              className="group relative flex items-center justify-center w-full bg-white text-black py-6 text-[10px] uppercase tracking-[0.5em] transition-all hover:bg-neutral-200"  
            >  
              Request Access  
              <span className="absolute right-8 transform transition-transform group-hover:translate-x-2">→</span>  
            </Link>  
            <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-center text-white/20">  
              Verification Required for Full Dossier  
            </p>  
          </div>  
        </div>  
      </section>

      {/* Simple Footer Link to go back */}  
      <div className="max-w-7xl mx-auto px-6 pb-24">  
        <Link href="/archive" className="text-[10px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors">  
          ← Return to Archive  
        </Link>  
      </div>  
    </main>  
  );  
}  
