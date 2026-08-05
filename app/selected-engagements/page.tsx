import React from 'react';  
import Link from 'next/link';  
import Image from 'next/image';

const engagements = [  
{  
  title: "Multi-Generational Japan",  
  challenge: "A family of six across four generations — ages 8 to 82 — wanted ten days in Japan without feeling like a tour group. One parent had limited mobility, and the booking window was six weeks out. The cherry blossom season meant most top-tier ryokan were already waitlisted.",  
  approach: "We mapped the route backward from the least flexible constraint: the mobility needs. This meant sourcing barrier-free accommodations across Kyoto, Hakone, and Tokyo — properties that could accommodate a wheelchair without compromising the experience for the rest of the family. We secured a private driver for the full itinerary (eliminating train transfers), arranged after-hours access at a temple garden, and coordinated a private sake-tasting evening at a family-run brewery that adapted the space for accessibility.",  
  outcome: "No one in the group felt like they were accommodating anyone else. The grandparents attended every activity. The family has since booked three additional trips with us.",  
  tags: ["Multi-Generational", "Japan", "Accessibility", "Last-Minute"]  
},  
{  
  title: "Last-Minute Alpine Rebook",  
  challenge: "A family of five had a private chalet in Courchevel cancel on them seven days before departure — the property had double-booked. Peak season, zero availability on the open market, and a non-refundable flight already confirmed.",  
  approach: "We bypassed the public booking channels entirely and reached out directly to a private residence we maintain a relationship with — a six-bedroom chalet that doesn't appear on any listing platform. Within 48 hours we secured it at the same rate as the original booking, arranged a private chef for three nights, and coordinated a nanny service that the original chalet didn't offer.",  
  outcome: "The family had a better experience than the original booking at the same cost. The client has since referred two colleagues to us.",  
  tags: ["Alpine", "France", "Crisis Management", "Private Residence"]  
},  
{  
  title: "Private Anniversary, Amalfi Coast",  
  challenge: "A couple wanted to celebrate their 25th anniversary with a week on the Amalfi Coast in a specific cliffside villa they'd seen profiled in a magazine. They'd spent three months trying to book it directly — the villa's management never responded.",  
  approach: "We had the villa confirmed within three days through our relationship with the property's local management team. Beyond the booking, we coordinated private boat transfers from Naples, a catered dinner on a secluded cove accessible only by water, and airport meet-and-greet logistics so the couple didn't handle a single bag from touchdown to departure.",  
  outcome: "The client described it as 'the most seamless trip we've ever taken.' The villa has since become one of our preferred properties, and we've booked it for three subsequent clients.",  
  tags: ["Italy", "Amalfi Coast", "Romance", "Private Villa"]  
}  
];

export default function SelectedEngagementsPage() {  
return (  
  <main className="min-h-screen bg-[#0A0A0A] text-white font-serif selection:bg-[#D4AF37] selection:text-black">

    {/* Hero with Cliffside Pool Background */}  
    <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">  
      <Image  
        src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80"  
        alt="Selected Engagements Hero"  
        fill  
        className="object-cover opacity-50"  
        priority  
        quality={100}  
      />  
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#0A0A0A]" />  
      <div className="relative z-10 text-center px-6 max-w-3xl mt-12">  
        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">  
          The Record  
        </span>  
        <h1 className="text-[#D4AF37] text-4xl md:text-6xl font-light tracking-tight mt-4 mb-4">  
          Selected Engagements  
        </h1>  
        <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans font-light max-w-2xl mx-auto">  
          A record of how we work — not a portfolio, but a demonstration of the principles that  
          guide every engagement. Each account is anonymized but otherwise unaltered.  
        </p>  
      </div>  
    </section>

    {/* Engagements */}  
    <section className="py-24 px-6 max-w-5xl mx-auto space-y-32">  
      {engagements.map((e, i) => (  
        <article key={i} className="space-y-10">  
          <div className="flex items-center gap-3 mb-2">  
            <span className="text-white/20 text-xs font-mono">  
              {String(i + 1).padStart(2, '0')}  
            </span>  
            <div className="h-px flex-1 bg-white/5" />  
          </div>

          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">  
            {e.title}  
          </h2>

          {/* Challenge */}  
          <div className="space-y-3">  
            <span className="text-[#D4AF37] text-[9px] uppercase tracking-[0.3em] font-sans font-semibold">  
              Challenge  
            </span>  
            <p className="text-white/60 text-sm md:text-base leading-relaxed font-sans font-light">  
              {e.challenge}  
            </p>  
          </div>

          {/* Approach */}  
          <div className="space-y-3">  
            <span className="text-[#D4AF37] text-[9px] uppercase tracking-[0.3em] font-sans font-semibold">  
              Approach  
            </span>  
            <p className="text-white/60 text-sm md:text-base leading-relaxed font-sans font-light">  
              {e.approach}  
            </p>  
          </div>

          {/* Outcome */}  
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-6 md:p-8 space-y-3">  
            <span className="text-[#D4AF37] text-[9px] uppercase tracking-[0.3em] font-sans font-semibold">  
              Outcome  
            </span>  
            <p className="text-white/80 text-sm md:text-base leading-relaxed font-sans font-light italic">  
              &ldquo;{e.outcome}&rdquo;  
            </p>  
          </div>

          {/* Tags */}  
          <div className="flex flex-wrap gap-3">  
            {e.tags.map((tag, j) => (  
              <span  
                key={j}  
                className="text-[10px] uppercase tracking-widest text-white/30 border border-white/10 px-3 py-1.5 font-sans"  
              >  
                {tag}  
              </span>  
            ))}  
          </div>  
        </article>  
      ))}  
    </section>

    {/* CTA */}  
    <section className="py-24 border-t border-white/5 text-center px-6">  
      <div className="max-w-xl mx-auto">  
        <h2 className="text-2xl md:text-3xl font-light text-white mb-4">  
          Begin Your Engagement  
        </h2>  
        <p className="text-white/40 text-sm leading-relaxed font-sans font-light mb-8">  
          Every journey begins with a conversation. We encourage you to reach out  
          — even if you are simply exploring the possibility.  
        </p>  
        <Link  
          href="https://cal.com/nexvoyagecollective/discovery-call"  
          className="inline-block border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-[0.3em] px-8 py-4 hover:bg-[#D4AF37] hover:text-black transition-all duration-500 font-sans"  
        >  
          Schedule a Discovery Call  
        </Link>  
      </div>  
    </section>

  </main>  
);  
}  
