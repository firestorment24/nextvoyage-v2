// app/perspective/the-silent-roi/page.tsx  
import Navigation from '@/components/Navigation';  
import Footer from '@/components/Footer';  
import Link from 'next/link';

export default function SilentROIPage() {  
  return (  
    <main className="min-h-screen bg-[#050505] text-stone-300 selection:bg-[#B8860B]/40">  
      <Navigation />  
        
      {/* Manifesto Hero */}  
      <header className="pt-48 pb-32 px-6">  
        <div className="max-w-4xl mx-auto text-center">  
          <p className="font-mono text-[#B8860B] text-xs tracking-[0.4em] uppercase mb-8">  
            Volume 01 — Manifesto  
          </p>  
          <h1 className="text-5xl md:text-8xl font-serif italic text-stone-100 tracking-tight leading-tight">  
            The Silent ROI  
          </h1>  
          <div className="mt-12 flex items-center justify-center gap-6 text-stone-500 font-mono text-[10px] tracking-[0.2em] uppercase">  
            <span>By Daryl Clark</span>  
            <span className="w-8 h-[1px] bg-stone-800"></span>  
            <span>June 2026</span>  
          </div>  
        </div>  
      </header>

      {/* The Reading Experience */}  
      <article className="max-w-2xl mx-auto px-6 pb-40">  
        <div className="prose prose-invert prose-stone">  
          <p className="text-2xl md:text-3xl font-serif text-stone-100 leading-relaxed italic mb-16 border-l-2 border-[#B8860B] pl-8">  
            "The ultimate luxury isn't access. It is the ability to be inaccessible."  
          </p>

          <section className="space-y-12 text-lg md:text-xl font-light leading-relaxed text-stone-300">  
            <p>  
              In an age of hyper-connectivity, the preservation of one’s presence has become the rarest asset. We are taught to measure investment by output, by visibility, and by the relentless accumulation of access.  
            </p>  
              
            <p>  
              But for the few who operate at the highest levels, the true yield is found in the opposite direction.   
              The <span className="text-stone-100 font-medium">Silent ROI</span> is the dividend paid in cognitive clarity, in the restoration of the nervous system, and in the profound quiet that can only be found in absolute seclusion.  
            </p>

            <div className="py-16">  
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />  
            </div>

            <h2 className="text-3xl font-serif text-stone-100 mt-16 mb-8 italic">The Mandate of Stillness</h2>  
              
            <p>  
              Our sanctuaries are not merely destinations; they are tactical environments designed for a specific purpose: the removal of the world. From the Brutalist cliffs of the Pacific to the Gothic stillness of the South, each node in our ledger is vetted for its ability to provide a total blackout of external noise.  
            </p>

            <p>  
              We do not provide "experiences." We provide the space required for the self to return. This is the mandate. This is the architecture of intent.  
            </p>  
          </section>  
        </div>

        {/* Call to Action */}  
        <footer className="mt-32 pt-16 border-t border-stone-800/50 text-center">  
          <p className="text-stone-500 font-serif italic mb-8">Begin your own recalibration.</p>  
          <Link   
            href="/concierge"  
            className="inline-block px-12 py-4 bg-transparent border border-[#B8860B]/50 text-[#B8860B] font-mono text-xs tracking-widest uppercase hover:bg-[#B8860B] hover:text-black transition-all duration-500"  
          >  
            Inquire for Access  
          </Link>  
          <div className="mt-12">  
            <Link href="/perspective" className="text-stone-600 hover:text-stone-400 text-[10px] font-mono tracking-widest uppercase flex items-center justify-center gap-2">  
              <span className="w-4 h-[1px] bg-stone-800"></span>  
              Back to The Perspective  
            </Link>  
          </div>  
        </footer>  
      </article>

      <Footer />  
    </main>  
  );  
}  
