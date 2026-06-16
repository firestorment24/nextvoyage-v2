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
  <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-20">  
    {/* Navigation Breadcrumb */}  
    <nav className="max-w-7xl mx-auto px-6 py-8">  
      <Link href="/archive" className="text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors">  
        ← Return to Archive  
      </Link>  
    </nav>

    {/* Hero Section */}  
    <section className="relative h-[70vh] w-full overflow-hidden px-6">  
      <div className="relative h-full w-full">  
        <Image  
          src={property.image}  
          alt={property.name}  
          fill  
          className="object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms] ease-out"  
          priority  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />  
      </div>  
    </section>

    {/* Content Grid */}  
    <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-20">  
        
      {/* Left: Brand & Narrative */}  
      <div className="lg:col-span-7 space-y-16">  
        <div className="space-y-4">  
          <p className="text-[10px] uppercase tracking-[0.6em] text-white/40">  
            Record No. {property.serial} // {property.location}  
          </p>  
          <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter uppercase">  
            {property.name}  
          </h1>  
        </div>

        <div className="space-y-8">  
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-neutral-300">  
            {property.description}  
          </p>  
          <div className="pt-8 border-t border-white/10">  
            <p className="text-xl text-neutral-500 italic font-light max-w-xl">  
              "{property.highlight}"  
            </p>  
          </div>  
        </div>  
      </div>

      {/* Right: Technical Sidebar & CTA */}  
      <div className="lg:col-span-4 lg:col-start-9 space-y-16">  
          
        {/* Deep Dive Specs */}  
        <div className="space-y-10 bg-neutral-900/30 p-8 border border-white/5">  
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/40">Architectural Specs</h2>  
            
          <div className="space-y-6">  
            <div>  
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 mb-1">Lead Architect</p>  
              <p className="text-sm tracking-wide text-neutral-200">{property.specs.architect}</p>  
            </div>  
            <div>  
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 mb-1">Inauguration</p>  
              <p className="text-sm tracking-wide text-neutral-200">{property.specs.year}</p>  
            </div>  
            <div>  
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 mb-1">Materials</p>  
              <p className="text-sm tracking-wide leading-relaxed text-neutral-200">{property.specs.materials}</p>  
            </div>  
          </div>  
        </div>

        {/* THE CTA - Updated to /invitation */}  
        <div className="space-y-6">  
          <Link   
            href="/invitation"   
            className="group relative flex items-center justify-center w-full bg-white text-black py-8 text-[11px] font-medium uppercase tracking-[0.5em] transition-all hover:bg-neutral-200"  
          >  
            Request Access  
            <span className="absolute right-8 transform transition-transform group-hover:translate-x-2">→</span>  
          </Link>  
            
          <div className="text-center space-y-2">  
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">  
              Private Intake Required  
            </p>  
            <p className="text-[8px] uppercase tracking-[0.1em] text-white/10">  
              Response within 24 hours  
            </p>  
          </div>  
        </div>  
      </div>  
    </section>

    {/* Subtle Section Divider */}  
    <div className="max-w-7xl mx-auto px-6">  
       <div className="h-px w-full bg-white/5" />  
    </div>  
  </main>  
);  
}  
