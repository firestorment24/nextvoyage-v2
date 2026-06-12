import { SANCTUARY_DATA } from '@/data/sanctuaries'  
import { notFound } from 'next/navigation'  
import Link from 'next/link'  
import Navigation from '@/components/Navigation'

export default function ArchiveDetailPage({ params }: { params: { id: string } }) {  
  // Use .find() because SANCTUARY_DATA is an array  
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
          className="h-full w-full object-cover opacity-60"  
        />  
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">  
          <span className="mb-4 text-xs font-light tracking-[0.3em] uppercase opacity-70">  
            {sanctuary.loc}  
          </span>  
          <h1 className="max-w-4xl font-serif text-5xl md:text-8xl font-medium leading-tight tracking-tight">  
            {sanctuary.name}  
          </h1>  
          <p className="mt-8 text-xs font-light uppercase tracking-[0.4em] opacity-40 italic">  
            {sanctuary.tag}  
          </p>  
        </div>  
      </section>

      {/* Narrative Section */}  
      <section className="mx-auto max-w-7xl px-6 py-32 md:py-48">  
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">  
          <div className="md:col-span-4 text-white/30 text-xs uppercase tracking-widest">  
            Collective Archive  
          </div>  
          <div className="md:col-span-8">  
            <p className="font-serif text-3xl leading-relaxed md:text-5xl text-white/90">  
              "This artifact, discovered in {sanctuary.loc}, represents the {sanctuary.name} archetype—an architectural study in {sanctuary.tag.toLowerCase()}."  
            </p>  
          </div>  
        </div>  
      </section>

      {/* Inquiry Footer */}  
      <footer className="border-t border-white/10 py-32 text-center">  
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
