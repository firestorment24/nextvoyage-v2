import Link from 'next/link'

export default function HomePage() {  
  return (  
    <div className="min-h-screen bg-[#FCFAF7] text-[#1C1C1C] px-6 py-24 md:px-12 lg:px-24">  
      {/* Editorial Header - Matching /sanctuaries style */}  
      <header className="max-w-4xl mb-32">  
        <p className="text-[10px] tracking-[0.3em] uppercase mb-8 text-gray-400 font-medium">  
          Global Operations // Private Brief  
        </p>  
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] uppercase mb-12">  
          Curating the <br />  
          <span className="text-gray-300 italic font-light">Unreachable</span>  
        </h1>  
        <p className="text-xl md:text-2xl font-light max-w-2xl leading-relaxed border-l border-black pl-8 py-2">  
          We do not sell travel. We engineer time, privacy, and perspective for those whose presence is their most valuable asset.  
        </p>  
      </header>

      {/* Ledger Grid Section - Mirrors the /sanctuaries layout structure */}  
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-black/10 pt-16">  
        <div className="space-y-6">  
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400">  
            Current Status  
          </p>  
          <h2 className="text-3xl font-bold uppercase tracking-tight">  
            The Invitation  
          </h2>  
          <p className="text-sm leading-relaxed max-w-md text-gray-600">  
            Access to the Collective is by referral only. We maintain a strict ratio of architects to clients to ensure the integrity of the "Atmospheric ROI."  
          </p>  
          <Link   
            href="/invitation"   
            className="inline-block text-[10px] tracking-[0.4em] uppercase font-bold border-b-2 border-black pb-1 hover:text-gray-500 transition-colors"  
          >  
            Request Briefing  
          </Link>  
        </div>

        <div className="space-y-6">  
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400">  
            Strategic Assets  
          </p>  
          <h2 className="text-3xl font-bold uppercase tracking-tight">  
            The Collection  
          </h2>  
          <p className="text-sm leading-relaxed max-w-md text-gray-600">  
            A curated atlas of nine sanctuary archetypes, from the boardroom in the clouds to total disconnection from the grid.  
          </p>  
          <Link   
            href="/sanctuaries"   
            className="inline-block text-[10px] tracking-[0.4em] uppercase font-bold border-b-2 border-black pb-1 hover:text-gray-500 transition-colors"  
          >  
            Explore Sanctuaries  
          </Link>  
        </div>  
      </section>

      {/* Footer Branding Note */}  
      <footer className="mt-48">  
        <p className="text-[10px] tracking-[0.5em] uppercase text-gray-300 text-center">  
          NexVoyage Collective // Established 2026  
        </p>  
      </footer>  
    </div>  
  )  
}  
