import Navigation from "@/components/Navigation";  
import Footer from "@/components/Footer";

const BRASS = "#C5A059";  
const DARK = "#0A0A0A";

export default function MandatePage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white font-sans">  
      <Navigation />

      {/* ───── HERO ───── */}  
      <section className="relative h-screen w-full overflow-hidden">  
        {/* Cinematic landscape placeholder — swap gradient with <Image /> */}  
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#0d0d0d] to-black">  
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />  
          <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent" />  
        </div>

        <div className="relative z-10 flex h-full flex-col justify-end pb-24 px-6 md:px-16 lg:px-24">  
          <span className="text-xs tracking-[0.3em] text-[#C5A059] font-mono mb-4">  
            01 / MANDATE  
          </span>  
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-3">  
            Our Philosophy  
          </h1>  
          <p className="text-lg md:text-xl text-white/60 max-w-xl font-light">  
            The principles that guide every sanctuary, every journey, every  
            arrival.  
          </p>  
        </div>  
      </section>

      {/* ───── INTRO ───── */}  
      <section className="px-6 md:px-16 lg:px-24 py-32 max-w-5xl mx-auto">  
        <div className="w-12 h-px bg-[#C5A059] mb-8" />  
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/80">  
          NexVoyage was founded on a singular premise: that the most valuable  
          commodity for the modern pioneer is not time, but the quality of the  
          experience within it.  
        </p>  
      </section>

      {/* ───── THREE PILLARS ───── */}  
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-black/40">  
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">  
          {/* Curation */}  
          <div className="border-t border-[#C5A059]/30 pt-8">  
            <span className="text-[#C5A059] text-xs tracking-[0.2em] font-mono">  
              PILLAR I  
            </span>  
            <h2 className="text-2xl font-light mt-4 mb-6">The Curation</h2>  
            <p className="text-white/60 leading-relaxed font-light">  
              We do not offer a directory; we offer a selection. Every sanctuary  
              in our ledger has been vetted not just for its luxury, but for its  
              soul. If it doesn&apos;t move us, it doesn&apos;t make the  
              Manifest.  
            </p>  
          </div>

          {/* Discretion */}  
          <div className="border-t border-[#C5A059]/30 pt-8">  
            <span className="text-[#C5A059] text-xs tracking-[0.2em] font-mono">  
              PILLAR II  
            </span>  
            <h2 className="text-2xl font-light mt-4 mb-6">The Discretion</h2>  
            <p className="text-white/60 leading-relaxed font-light">  
              True luxury is silent. We operate with a ghost-like precision,  
              ensuring your requirements are met before you even have to voice  
              them. Your privacy is our highest currency.  
            </p>  
          </div>

          {/* Legacy */}  
          <div className="border-t border-[#C5A059]/30 pt-8">  
            <span className="text-[#C5A059] text-xs tracking-[0.2em] font-mono">  
              PILLAR III  
            </span>  
            <h2 className="text-2xl font-light mt-4 mb-6">The Legacy</h2>  
            <p className="text-white/60 leading-relaxed font-light">  
              Travel should be more than a change of scenery — it should be a  
              chapter in your story. We curate experiences that linger in the  
              memory long after the return flight has landed.  
            </p>  
          </div>  
        </div>  
      </section>

      {/* ───── FOUNDER SECTION ───── */}  
      <section className="px-6 md:px-16 lg:px-24 py-32">  
        <div className="max-w-5xl mx-auto">  
          <span className="text-[#C5A059] text-xs tracking-[0.2em] font-mono">  
            THE FOUNDER  
          </span>  
          <h2 className="text-3xl md:text-5xl font-light mt-4 mb-12">  
            Daryl Clark  
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">  
            {/* Portrait placeholder — replace with <Image /> once you have the asset */}  
            <div className="aspect-[3/4] w-full bg-gradient-to-br from-[#1a1a1a] via-[#111] to-black border border-white/5 flex items-center justify-center">  
              <div className="text-center">  
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-[#C5A059]/30 flex items-center justify-center">  
                  <span className="text-[#C5A059] text-2xl font-light">DC</span>  
                </div>  
                <p className="text-white/30 text-xs tracking-[0.15em] font-mono">  
                  PORTRAIT PLACEHOLDER  
                </p>  
              </div>  
            </div>

            {/* Bio */}  
            <div>  
              <div className="w-12 h-px bg-[#C5A059] mb-8" />  
              <p className="text-white/70 leading-relaxed font-light mb-6">  
                Daryl Clark founded NexVoyage Collective on a conviction that  
                luxury travel had lost its soul — buried under aggregators and  
                algorithms. With two decades in corporate travel and a network  
                spanning the world&apos;s most discreet properties, he built a  
                house that operates on connection, not volume.  
              </p>  
              <p className="text-white/50 leading-relaxed font-light text-sm">  
                Every sanctuary in the Archive reflects a personal standard:  
                if it doesn&apos;t move him, it doesn&apos;t make the ledger.  
                The result is a collection defined not by what&apos;s available,  
                but by what&apos;s worthy.  
              </p>  
              <div className="mt-8 flex items-center gap-4">  
                <div className="h-px flex-1 bg-white/10" />  
                <span className="text-[#C5A059] text-sm italic font-light">  
                  &ldquo;Curation is not exclusion. It&apos;s devotion.&rdquo;  
                </span>  
                <div className="h-px flex-1 bg-white/10" />  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* ───── CLOSING ───── */}  
      <section className="px-6 md:px-16 lg:px-24 py-32 bg-black/60 text-center">  
        <div className="max-w-3xl mx-auto">  
          <div className="w-12 h-px bg-[#C5A059] mx-auto mb-8" />  
          <blockquote className="text-2xl md:text-4xl font-light italic leading-relaxed text-white/80 mb-12">  
            &ldquo;We don&apos;t just book trips.  
            <br />  
            We engineer arrivals.&rdquo;  
          </blockquote>  
          <a  
            href="/inquiry"  
            className="inline-block px-10 py-4 border border-[#C5A059] text-[#C5A059] tracking-[0.2em] text-xs font-mono hover:bg-[#C5A059] hover:text-black transition-all duration-500"  
          >  
            BEGIN YOUR CONSULTATION  
          </a>  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
