import { SANCTUARY_DATA } from '@/data/sanctuaries'  
import { notFound } from 'next/navigation'  
import Link from 'next/link'  
import Navigation from '@/components/Navigation'

export default function ArchiveDetailPage({ params }: { params: { id: string } }) {  
  const sanctuary = SANCTUARY_DATA[params.id]

  if (!sanctuary) {  
    notFound()  
  }

  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] selection:bg-white selection:text-black">  
      <Navigation />  
        
      {/* Narrative Hero */}  
      <section className="relative h-[90vh] w-full overflow-hidden">  
        <img   
          src={sanctuary.heroImage || sanctuary.img}   
          alt={sanctuary.name}  
          className="h-full w-full object-cover opacity-60 transition-transform duration-1000 hover:scale-105"  
        />  
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">  
          <span className="mb-4 text-xs font-light tracking-[0.3em] uppercase opacity-70">  
            {sanctuary.loc} — {sanctuary.tag}  
          </span>  
          <h1 className="max-w-4xl font-serif text-5xl md:text-8xl font-medium leading-tight tracking-tight">  
            {sanctuary.name}  
          </h1>  
        </div>  
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">  
          <div className="h-12 w-[1px] bg-white"></div>  
        </div>  
      </section>

      {/* The Essence (Philosophy Section) */}  
      <section className="mx-auto max-w-7xl px-6 py-32 md:py-48">  
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">  
          <div className="md:col-span-4">  
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white/50">The Philosophy</h2>  
          </div>  
          <div className="md:col-span-8">  
            <p className="font-serif text-3xl leading-relaxed md:text-5xl text-white/90">  
              "{sanctuary.philosophy || "An invitation to disappear into the architecture of silence."}"  
            </p>  
          </div>  
        </div>  
      </section>

      {/* Visual Atmosphere */}  
      <section className="bg-[#111] py-24 border-y border-white/5">  
        <div className="mx-auto max-w-7xl px-6">  
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">  
            <div className="order-2 md:order-1">  
              <div className="aspect-[4/5] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000">  
                 <img   
                  src={sanctuary.img}   
                  alt="Atmosphere"  
                  className="h-full w-full object-cover"  
                />  
              </div>  
            </div>  
            <div className="order-1 md:order-2 space-y-8">  
              <h3 className="text-3xl font-serif italic text-white/80">The Atmosphere</h3>  
              <p className="text-lg leading-relaxed text-white/60 max-w-md">  
                {sanctuary.atmosphere || "Where the boundaries between the built environment and the raw horizon dissolve."}  
              </p>  
              <div className="pt-8">  
                <div className="h-[1px] w-24 bg-white/20"></div>  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Visual Studies Grid */}  
      <section className="mx-auto max-w-7xl px-6 py-32">  
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">  
          <h2 className="font-serif text-4xl md:text-6xl italic">Visual Studies</h2>  
          <p className="text-sm uppercase tracking-widest text-white/40">Entry No. {sanctuary.id}</p>  
        </div>  
          
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">  
          {sanctuary.buckets?.map((bucket, idx) => (  
            <div   
              key={idx}   
              className={`overflow-hidden rounded-sm border border-white/5 ${  
                idx % 3 === 0 ? 'md:col-span-8 aspect-video' : 'md:col-span-4 aspect-[3/4]'  
              }`}  
            >  
              <img   
                src={bucket.imageUrl}   
                alt={`Detail ${idx}`}  
                className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-110"  
              />  
            </div>  
          ))}  
        </div>  
      </section>

      {/* Footer / Inquiry */}  
      <footer className="border-t border-white/10 py-32 text-center">  
        <p className="mb-12 text-[10px] uppercase tracking-[0.5em] text-white/30">Private Collective Inquiry</p>  
        <Link   
          href="mailto:access@nexvoyage.com"  
          className="group relative inline-block text-2xl md:text-4xl font-serif tracking-tight transition-colors hover:text-white/70"  
        >  
          Request Access to {sanctuary.name}  
          <span className="absolute -bottom-2 left-0 h-[1px] w-full origin-left scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100"></span>  
        </Link>  
        <div className="mt-24 flex justify-center gap-12 text-[10px] uppercase tracking-[0.4em] text-white/30">  
          <Link href="/archive" className="hover:text-white transition-colors">Return to Gallery</Link>  
          <Link href="/" className="hover:text-white transition-colors">Manifesto</Link>  
        </div>  
      </footer>  
    </main>  
  )  
}  
