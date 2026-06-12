import { SANCTUARY_DATA } from '@/data/sanctuaries'  
import { notFound } from 'next/navigation'  
import Link from 'next/link'  
import Navigation from '@/components/Navigation'

export default function ArchiveDetailPage({ params }: { params: { id: string } }) {  
  // Use .find() for the array structure  
  const sanctuary = SANCTUARY_DATA.find(s => s.id === params.id)

  if (!sanctuary) {  
    notFound()  
  }

  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] selection:bg-white selection:text-black">  
      <Navigation />  
        
      {/* Narrative Hero */}  
      <section className="relative h-[90vh] w-full overflow-hidden">  
        <img   
          src={sanctuary.heroImage}   
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

      {/* The Atmosphere (Verified Field) */}  
      <section className="mx-auto max-w-7xl px-6 py-32 md:py-48">  
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">  
          <div className="md:col-span-4">  
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white/50 italic">The Atmosphere</h2>  
          </div>  
          <div className="md:col-span-8">  
            <p className="font-serif text-3xl leading-relaxed md:text-5xl text-white/90">  
              "{sanctuary.atmosphere || "A curated silence designed for the discerning traveler."}"  
            </p>  
          </div>  
        </div>  
      </section>

      {/* Highlights / Exhibition Features */}  
      <section className="bg-[#111] py-32 border-y border-white/5">  
        <div className="mx-auto max-w-7xl px-6">  
          <div className="mb-16">  
            <h3 className="text-xs uppercase tracking-[0.4em] text-white/30">Curated Highlights</h3>  
          </div>  
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">  
            {sanctuary.highlights?.map((highlight, idx) => (  
              <div key={idx} className="group border-l border-white/10 pl-8 py-4 transition-colors hover:border-white">  
                <p className="text-lg font-serif italic text-white/60 group-hover:text-white transition-colors">  
                  {highlight}  
                </p>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* Exhibition Archive Footer */}  
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
