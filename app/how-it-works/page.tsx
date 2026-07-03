// app/how-it-works/page.tsx

import Image from "next/image";  
import Link from "next/link";

export default function HowItWorksPage() {  
return (  
  <main className="relative w-full bg-[#0d0d0d]">  
    {/* ── Hero ── */}  
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex flex-col justify-center items-center text-center px-6">  
      <Image  
        src="https://cdn.marblism.com/rJnyXhC8bcl.webp"  
        alt="Overwater villa at golden hour — your dream vacation starts here"  
        fill  
        className="object-cover"  
        style={{ filter: 'brightness(0.4)', transform: 'scale(1.02)', transition: 'transform 1.5s ease' }}  
        priority  
      />  
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 via-transparent to-[#0d0d0d]/90" />  
      <div className="relative z-10">  
        <span className="text-[#d4af37]/60 text-sm tracking-[0.3em] uppercase mb-6 block">  
          The Process  
        </span>  
        <h1 className="text-5xl md:text-7xl font-serif text-[#d4af37] tracking-wide mb-4">  
          How It Works  
        </h1>  
        <p className="max-w-2xl text-lg md:text-xl text-[#e8e0d0]/70 font-light">  
          Four stages. Zero friction. Every detail intentional.  
        </p>  
      </div>  
    </section>

    {/* ── Steps ── */}  
    <section className="px-6 py-16 md:py-24">  
      <div className="max-w-4xl mx-auto space-y-20">  
        {steps.map((step, i) => (  
          <div key={step.title} className="grid md:grid-cols-[80px_1fr] gap-6">  
            <div className="text-center md:text-left">  
              <span className="text-5xl font-serif text-[#d4af37]/30">0{i + 1}</span>  
            </div>  
            <div>  
              <h2 className="text-2xl md:text-3xl font-serif text-[#d4af37] mb-3">{step.title}</h2>  
              <p className="text-[#a09880] leading-relaxed mb-4">{step.body}</p>  
              {step.action}  
            </div>  
          </div>  
        ))}  
      </div>  
    </section>

    {/* ── CTA ── */}  
    <section className="px-6 py-24 text-center border-t border-[#d4af37]/10">  
      <h2 className="text-3xl md:text-4xl font-serif text-[#d4af37] mb-4">  
        Ready to Begin?  
      </h2>  
      <p className="max-w-xl mx-auto text-[#a09880] mb-10 leading-relaxed">  
        Your first conversation costs nothing. The journey it unlocks? Priceless.  
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

const steps = [  
{  
  title: "Submit an Inquiry",  
  body: "Fill out a brief, confidential form telling us your destination, intent, and preferred timeline. No commitment — just the start of a conversation.",  
  action: null,  
},  
{  
  title: "Curated Consultation",  
  body: "We review your dossier and schedule a private discovery call. This is where we align on vision, budget, and the kind of experience that defines a legacy.",  
  action: (  
    <a  
      href="https://cal.com/nexvoyagecollective/discovery-call"  
      target="_blank"  
      rel="noopener noreferrer"  
      className="inline-block border border-[#d4af37]/50 text-[#d4af37] px-6 py-3 tracking-[0.15em] uppercase text-xs hover:bg-[#d4af37] hover:text-[#0d0d0d] transition-all duration-500"  
    >  
      Book a Discovery Call  
    </a>  
  ),  
},  
{  
  title: "The Journey",  
  body: "Once the vision is locked, we execute — silently, seamlessly. Private transport, exclusive access, and a pace that answers only to you.",  
  action: null,  
},  
{  
  title: "The Archive",  
  body: "After you return, your journey is preserved — a curated memory book, media dossier, and an open invitation to revisit or build the next chapter.",  
  action: null,  
},  
];  
