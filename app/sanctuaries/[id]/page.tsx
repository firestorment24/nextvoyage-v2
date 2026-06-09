import { notFound } from 'next/navigation'  
import Link from 'next/link'  
import Navigation from '../../Navigation'  
import Footer from '../../components/Footer'  
import { SANCTUARIES_DATA } from '../../lib/data'

export async function generateStaticParams() {  
  return SANCTUARIES_DATA.map((s) => ({  
    id: s.id,  
  }))  
}

export default async function SanctuaryDossier({ params }: { params: Promise<{ id: string }> }) {  
  const { id } = await params  
  const sanctuary = SANCTUARIES_DATA.find((s) => s.id === id)

  if (!sanctuary) return notFound()

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white font-light">  
      <Navigation />

      {/* Hero Section - Full Cinematic */}  
      <section className="relative h-[80vh] flex items-end pb-20 px-6 overflow-hidden">  
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />  
        <div className="absolute inset-0 bg-neutral-900">  
           {/* Placeholder for Cinematic Image */}  
           <div className="w-full h-full opacity-60 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070')] bg-cover bg-center" />  
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">  
          <p className="text-[10px] uppercase tracking-[0.5em] mb-4 opacity-60">  
            Dossier / {sanctuary.tag}  
          </p>  
          <h1 className="text-6xl md:text-8xl font-serif tracking-tighter mb-4">  
            {sanctuary.name}  
          </h1>  
          <p className="text-xl italic opacity-60 font-serif">{sanctuary.location}</p>  
        </div>  
      </section>

      {/* The Intelligence Section - Maimon Detail Style */}  
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">  
        {/* Left Col: The Narrative */}  
        <div className="lg:col-span-7">  
          <h2 className="text-[10px] uppercase tracking-[0.3em] mb-12 opacity-30">The Narrative</h2>  
          <p className="text-2xl md:text-3xl font-serif leading-relaxed mb-12 text-neutral-200">  
            {sanctuary.vibe}  
          </p>  
          <div className="h-px w-full bg-white/10 mb-12" />  
            
          <h2 className="text-[10px] uppercase tracking-[0.3em] mb-8 opacity-30">Investment & ROI</h2>  
          <p className="text-lg leading-relaxed opacity-70">  
            {sanctuary.roi}  
          </p>  
        </div>

        {/* Right Col: The Logistics (Technical Specs) */}  
        <div className="lg:col-span-5 bg-white/5 p-12 border border-white/10 backdrop-blur-sm self-start">  
          <h2 className="text-[10px] uppercase tracking-[0.3em] mb-12 opacity-40">Tactical Specifications</h2>  
            
          <div className="space-y-12">  
            <div>  
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-30 mb-2">Privacy & Security</p>  
              <p className="text-sm opacity-80">{sanctuary.logistics.privacy}</p>  
            </div>  
            <div>  
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-30 mb-2">Connectivity</p>  
              <p className="text-sm opacity-80">{sanctuary.logistics.connectivity}</p>  
            </div>  
            <div>  
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-30 mb-2">Access</p>  
              <p className="text-sm opacity-80">{sanctuary.logistics.access}</p>  
            </div>  
          </div>

          <div className="mt-16 pt-12 border-t border-white/10 text-center">  
            <Link   
              href="/concierge"   
              className="inline-block px-12 py-4 bg-white text-black text-[10px] uppercase tracking-[0.3em] hover:bg-opacity-90 transition-all"  
            >  
              Request Access  
            </Link>  
          </div>  
        </div>  
      </section>

      {/* Navigation back */}  
      <section className="py-24 border-t border-white/10 text-center">  
         <Link href="/sanctuaries" className="text-[10px] uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity">  
           ← Return to The Collection  
         </Link>  
      </section>

      <Footer />  
    </main>  
  )  
}  
