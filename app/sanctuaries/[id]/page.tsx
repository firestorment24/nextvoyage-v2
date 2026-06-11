import { notFound } from 'next/navigation'  
import Link from 'next/link'  
import { SANCTUARY_DATA } from '../../../data/sanctuaries'  
import { Navigation } from '../../Navigation'

/**  
 * Generates the static paths for all sanctuaries at build time.  
 * Derives IDs from the keys of the SANCTUARY_DATA record.  
 */  
export function generateStaticParams() {  
  return Object.keys(SANCTUARY_DATA).map((id) => ({  
    id: id,  
  }))  
}
 
export default function SanctuaryPage({ params }: { params: { id: string } }) {  
  const { id } = params  
  const sanctuary = SANCTUARY_DATA[id]

  // Guard: If sanctuary ID doesn't exist, show 404  
  if (!sanctuary) {  
    notFound()  
  }

  return (  
    <main className="min-h-screen bg-white text-black font-sans selection:bg-[#C5A059]/30">  
      <Navigation />

      {/* Hero Section - High-Impact Editorial */}  
      <section className="relative h-[85vh] w-full overflow-hidden">  
        <img  
          src={sanctuary.heroImage || sanctuary.img}  
          alt={sanctuary.name}  
          className="w-full h-full object-cover"  
        />  
        <div className="absolute inset-0 bg-black/20" />  
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">  
          <div className="max-w-7xl mx-auto">  
            <span className="uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block font-bold opacity-90">  
              {sanctuary.tag} — {sanctuary.loc}  
            </span>  
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif italic leading-tight">  
              {sanctuary.name}  
            </h1>  
          </div>  
        </div>  
      </section>

      {/* Content Grid */}  
      <section className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-32 grid grid-cols-1 lg:grid-cols-12 gap-20">  
          
        {/* Left Column: Narrative & Philosophy */}  
        <div className="lg:col-span-7 space-y-20">  
          <div>  
            <h2 className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] font-black mb-10">  
              The Philosophy  
            </h2>  
            <p className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-zinc-800 italic">  
              "{sanctuary.philosophy}"  
            </p>  
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 border-t border-zinc-100">  
            <div>  
              <h3 className="uppercase tracking-widest text-[10px] font-bold text-zinc-400 mb-6">  
                Atmosphere  
              </h3>  
              <p className="text-zinc-600 leading-relaxed text-lg">  
                {sanctuary.atmosphere}  
              </p>  
            </div>  
            <div>  
              <h3 className="uppercase tracking-widest text-[10px] font-bold text-zinc-400 mb-6">  
                Strategic ROI  
              </h3>  
              <p className="text-zinc-600 leading-relaxed text-lg">  
                {sanctuary.roi}  
              </p>  
            </div>  
          </div>  
        </div>

        {/* Right Column: Highlights & Secured Inquiry */}  
        <div className="lg:col-span-5 lg:pl-12">  
          <div className="sticky top-32 space-y-12 bg-[#F9F9F7] p-10 md:p-14 border border-zinc-100 shadow-sm">  
            <div>  
              <h3 className="uppercase tracking-[0.2em] text-[10px] font-bold text-[#C5A059] mb-8 border-b border-[#C5A059]/20 pb-4">  
                Exclusive Highlights  
              </h3>  
              <ul className="space-y-6">  
                {sanctuary.highlights?.map((item: string, i: number) => (  
                  <li key={i} className="flex items-start gap-4 text-sm md:text-base text-zinc-700">  
                    <span className="text-[#C5A059] text-xs mt-1.5">✦</span>  
                    {item}  
                  </li>  
                ))}  
              </ul>  
            </div>

            <div className="space-y-4">  
              <Link  
                href="/concierge"  
                className="block w-full bg-black text-white text-center py-6 uppercase tracking-[0.4em] text-xs font-bold hover:bg-[#C5A059] transition-all duration-700 ease-in-out"  
              >  
                Secure Inquiry  
              </Link>  
              <p className="text-[9px] text-zinc-400 text-center uppercase tracking-[0.2em] leading-relaxed">  
                NexVoyage Guardian Layer™ <br />   
                Private consultation required for access  
              </p>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Structural Details / Buckets */}  
      <section className="bg-zinc-50 border-y border-zinc-100">  
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-32">  
          <h2 className="text-center font-serif text-3xl italic mb-20">Sanctuary Specifications</h2>  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">  
            {sanctuary.buckets?.map((bucket: any, index: number) => (  
              <div key={index} className="space-y-6">  
                <h4 className="text-zinc-900 font-serif text-2xl border-b border-zinc-200 pb-4 italic">  
                  {bucket.title}  
                </h4>  
                <p className="text-zinc-500 text-base leading-relaxed">  
                  {bucket.description}  
                </p>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* Final Call to Action */}  
      <section className="py-32 text-center bg-white">  
        <div className="max-w-2xl mx-auto px-8">  
          <h3 className="font-serif text-4xl italic mb-8">Ready to step inside?</h3>  
          <p className="text-zinc-500 mb-12 leading-relaxed">  
            Due to the exclusive nature of our sanctuaries, we provide detailed dossiers only after a preliminary vetting process.  
          </p>  
          <Link  
            href="/concierge"  
            className="inline-block border-b-2 border-black pb-2 uppercase tracking-[0.4em] text-xs font-bold hover:text-[#C5A059] hover:border-[#C5A059] transition-all"  
          >  
            Contact Concierge  
          </Link>  
        </div>  
      </section>  
    </main>  
  )  
}  
