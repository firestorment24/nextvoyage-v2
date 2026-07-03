// app/mandate/page.tsx

export default function MandatePage() {  
  return (  
    <main className="relative w-full">  
      {/* ── Hero Section ── */}  
      <section className="relative h-screen w-full overflow-hidden">  
        <Image  
          src="https://cdn.marblism.com/6bITE0mM6q2.webp"  
          alt="Private jet arrival at golden hour — exclusive travel begins"  
          fill  
          className="object-cover"  
          style={{ filter: 'brightness(0.45)', transform: 'scale(1.02)', transition: 'transform 1.5s ease' }}  
          priority  
        />  
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-transparent to-[#0d0d0d]/90" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">  
          <h1 className="text-5xl md:text-7xl font-serif text-[#d4af37] tracking-wide mb-4">  
            The Mandate  
          </h1>  
          <p className="max-w-2xl text-lg md:text-xl text-[#e8e0d0]/80 font-light leading-relaxed">  
            Curation. Discretion. Legacy. — Three pillars that define every journey we craft.  
          </p>  
        </div>

        {/* scroll indicator */}  
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">  
          <span className="text-[#d4af37]/60 text-sm tracking-widest uppercase">↓ Scroll</span>  
        </div>  
      </section>

      {/* ── Pillars Section ── */}  
      <section className="bg-[#0d0d0d] px-6 py-24 md:py-32">  
        <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-3">  
          {[  
            {  
              title: 'Curation',  
              body: 'Every destination, every detail, every moment is hand-selected. We don\'t book trips — we compose experiences that feel impossible anywhere else.',  
            },  
            {  
              title: 'Discretion',  
              body: 'Our network exists in the spaces that don\'t advertise. Private entries, unlisted residences, and relationships built on trust rather than transactions.',  
            },  
            {  
              title: 'Legacy',  
              body: 'A NexVoyage journey isn\'t a checkbox — it\'s a story your family tells for generations. We build travel that outlives the itinerary.',  
            },  
          ].map((pillar) => (  
            <div key={pillar.title} className="text-center">  
              <h2 className="text-3xl font-serif text-[#d4af37] mb-4">{pillar.title}</h2>  
              <p className="text-[#a09880] leading-relaxed">{pillar.body}</p>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* ── Founder Story ── */}  
      <section className="bg-[#111111] px-6 py-24 md:py-32">  
        <div className="max-w-4xl mx-auto text-center">  
          <span className="text-[#d4af37]/60 text-sm tracking-[0.3em] uppercase mb-6 block">  
            Founder&apos;s Note  
          </span>  
          <p className="text-xl md:text-2xl text-[#e8e0d0]/90 font-light leading-relaxed italic">  
            "I built NexVoyage because I wanted a world that didn't exist — one where ambition meets  
            absolute privacy, where every detail is intentional, and where travel becomes the  
            foundation of a legacy. This isn't a business. It's a standard."  
          </p>  
          <p className="mt-8 text-[#d4af37] font-serif text-lg">— Daryl Clark</p>  
        </div>  
      </section>

      {/* ── Call to Action ── */}  
      <section className="bg-[#0d0d0d] px-6 py-24 md:py-32 text-center">  
        <h2 className="text-3xl md:text-4xl font-serif text-[#d4af37] mb-4">  
          Begin Your Mandate  
        </h2>  
        <p className="max-w-xl mx-auto text-[#a09880] mb-10 leading-relaxed">  
          Not everyone belongs here. If you understand the difference between a trip and a legacy,  
          we should talk.  
        </p>  
        <Link  
          href="/inquiry"  
          className="inline-block border border-[#d4af37] text-[#d4af37] px-10 py-4 tracking-[0.2em] uppercase text-sm hover:bg-[#d4af37] hover:text-[#0d0d0d] transition-all duration-500"  
        >  
          Submit an Inquiry  
        </Link>  
      </section>  
    </main>  
  );  
}  
