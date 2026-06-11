import Link from 'next/link'

export default function HomePage() {  
  return (  
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">  
      {/* Header Section - Matching the Sanctuaries /perspective vibe */}  
      <div className="border-b border-black/10 pb-16 mb-24">  
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase mb-12 text-gray-400 font-medium">  
          Global Operations // Private Dossier  
        </p>  
          
        <h1 className="font-serif text-6xl md:text-9xl leading-[0.85] tracking-tight italic mb-12">  
          Curating the <br />  
          <span className="not-italic font-medium uppercase text-4xl md:text-6xl tracking-widest block mt-4">Unreachable</span>  
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8">  
          <p className="font-serif text-2xl md:text-3xl font-light max-w-xl leading-snug text-gray-700">  
            We do not sell travel. We engineer time, privacy, and perspective for those whose presence is their most valuable asset.  
          </p>  
            
          <Link   
            href="/sanctuaries"   
            className="font-sans text-[10px] tracking-[0.5em] uppercase font-bold border-b border-black pb-2 hover:text-gray-400 transition-colors shrink-0"  
          >  
            Access The Collection  
          </Link>  
        </div>  
      </div>

      {/* Grid Section - Ledger Style */}  
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">  
        <div className="space-y-4">  
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-gray-400">Section 01</span>  
          <h3 className="font-sans font-bold uppercase tracking-widest border-b border-black pb-2">The Invitation</h3>  
          <p className="font-serif italic text-lg text-gray-600 pt-2">By referral only.</p>  
          <p className="font-sans text-xs leading-relaxed text-gray-500">  
            Strict client-to-architect ratios ensure the integrity of every "Atmospheric ROI."  
          </p>  
        </div>

        <div className="space-y-4">  
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-gray-400">Section 02</span>  
          <h3 className="font-sans font-bold uppercase tracking-widest border-b border-black pb-2">The Perspective</h3>  
          <p className="font-serif italic text-lg text-gray-600 pt-2">Beyond the itinerary.</p>  
          <p className="font-sans text-xs leading-relaxed text-gray-500">  
            Deep intelligence reports on seasonal global shifts and private sanctuary availability.  
          </p>  
        </div>

        <div className="space-y-4">  
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-gray-400">Section 03</span>  
          <h3 className="font-sans font-bold uppercase tracking-widest border-b border-black pb-2">The Reserve</h3>  
          <p className="font-serif italic text-lg text-gray-600 pt-2">Total autonomy.</p>  
          <p className="font-sans text-xs leading-relaxed text-gray-500">  
            Secure, move-ready sanctuaries in the world's most remote and refined quadrants.  
          </p>  
        </div>  
      </section>  
    </div>  
  )  
}  
