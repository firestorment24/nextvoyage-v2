// app/page.js  
import Link from 'next/link'

export default function Home() {  
  return (  
    <div className="max-w-7xl mx-auto px-6">  
      {/* Hero Section */}  
      <section className="min-h-[80vh] flex flex-col justify-center border-b border-zinc-100">  
        <div className="max-w-3xl">  
          <h1 className="text-7xl md:text-8xl font-light tracking-tighter leading-[1.1] mb-12">  
            NEXVOYAGE COLLECTIVE <br />  
            <span className="italic text-zinc-400">The ROI of Reset</span>  
          </h1>  
          <p className="text-xl md:text-2xl font-light text-zinc-600 leading-relaxed mb-12">  
            Travel is an investment in clarity. We curate the sanctuaries that deliver the return.  
          </p>  
          <Link   
            href="/reserve"   
            className="inline-block text-[10px] tracking-[0.4em] uppercase border border-black px-12 py-5 hover:bg-black hover:text-white transition-all"  
          >  
            Inquire for Access  
          </Link>  
        </div>  
      </section>

      {/* Philosophy Teaser */}  
      <section className="py-32 grid md:grid-cols-2 gap-24 items-center">  
        <div>  
          <h2 className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 mb-8">Our Philosophy</h2>  
          <h3 className="text-4xl font-light leading-tight">  
            Quiet luxury isn't about what is added. It's about what remains after the noise is removed.  
          </h3>  
        </div>  
        <div className="aspect-[4/5] bg-zinc-50 border border-zinc-100 flex items-center justify-center">  
          <span className="text-[10px] tracking-widest text-zinc-300 uppercase italic">The Aesthetic of Absence</span>  
        </div>  
      </section>  
    </div>  
  )  
}  
