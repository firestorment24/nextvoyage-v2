'use client'

import Navigation from './Navigation'  
import Footer from './components/Footer'  
import Link from 'next/link'

export default function HomePage() {  
  return (  
    <main className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-light selection:bg-black selection:text-white">  
      <Navigation />

      {/* Hero: The Entrance */}  
      <section className="h-screen flex flex-col justify-center px-6 md:px-20 bg-white">  
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-6 duration-1000">  
          <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 mb-8 block">  
            NexVoyage Collective  
          </span>  
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-12 italic">  
            The Art of the <br />   
            <span className="text-neutral-300 not-italic">Unreachable.</span>  
          </h1>  
          <p className="text-xl md:text-2xl text-neutral-500 max-w-xl leading-relaxed mb-12">  
            A closed-loop travel ecosystem for those who value privacy over prominence.  
          </p>  
          <Link   
            href="/sanctuaries"  
            className="group inline-flex items-center gap-6 text-xs uppercase tracking-[0.3em] border-b border-black pb-2 hover:text-neutral-400 transition-colors"  
          >  
            Explore The Collection  
            <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>  
          </Link>  
        </div>  
      </section>

      {/* The NexVoyage Standard */}  
      <section className="py-40 px-6 bg-[#0a0a0a] text-white">  
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">  
          <div>  
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-8 block">The Standard</span>  
            <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8">  
              The ROI of <span className="italic">Reset.</span>  
            </h2>  
            <p className="text-lg text-neutral-400 leading-relaxed mb-8">  
              We operate behind a "Guardian Layer" of absolute reliability. Every rate, every elite access point, and every logistical detail is secured before you even arrive.  
            </p>  
            <div className="flex gap-12 border-t border-neutral-800 pt-12">  
              <div>  
                <span className="block text-2xl font-serif italic mb-1">100%</span>  
                <span className="text-[9px] uppercase tracking-widest text-neutral-500">Privacy Secure</span>  
              </div>  
              <div>  
                <span className="block text-2xl font-serif italic mb-1">Global</span>  
                <span className="text-[9px] uppercase tracking-widest text-neutral-500">Access Network</span>  
              </div>  
            </div>  
          </div>  
          <div className="relative aspect-[4/5] bg-neutral-900 overflow-hidden group">  
            <img   
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070"   
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"  
              alt="Luxury Interior"  
            />  
          </div>  
        </div>  
      </section>

      {/* The Journal Teaser */}  
      <section className="py-40 px-6 max-w-screen-xl mx-auto text-center">  
        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 mb-8 block">Insights</span>  
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-16 italic">The Journal</h2>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">  
          {[  
            { title: "The Art of the Unreachable", cat: "Philosophy" },  
            { title: "Tempo and Territory", cat: "Strategy" },  
            { title: "The Invisible Concierge", cat: "Access" }  
          ].map((post, i) => (  
            <Link key={i} href="/journal" className="group border-t border-neutral-200 pt-8">  
              <span className="text-[9px] uppercase tracking-widest text-neutral-400 mb-4 block">{post.cat}</span>  
              <h3 className="text-xl group-hover:text-neutral-500 transition-colors">{post.title}</h3>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Final Call */}  
      <section className="pb-40 px-6 text-center">  
        <div className="max-w-2xl mx-auto bg-white border border-neutral-100 p-20 shadow-sm">  
          <h2 className="text-3xl mb-8 tracking-tight font-light">Begin your private discovery.</h2>  
          <Link   
            href="/concierge"  
            className="inline-block bg-black text-white px-12 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-neutral-800 transition-all"  
          >  
            Request Consultation  
          </Link>  
        </div>  
      </section>

      <Footer />  
    </main>  
  )  
}  
