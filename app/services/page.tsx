import React from 'react';  
import Link from 'next/link';  
import Image from 'next/image';

const curations = [  
  {  
    num: '01',  
    title: 'Hotels & Private Sanctuaries',  
    subtitle: 'Unlisted Estates & Flagship Properties',  
    desc: 'Curated access to private villas, historic châteaux, and distinguished hotels with preferential rates and VIP status.',  
  },  
  {  
    num: '02',  
    title: 'Private Aviation',  
    subtitle: 'Seamless Global Air Mobility',  
    desc: 'Bespoke jet charters, helicopter transfers, and tarmac-side coordination managed with appropriate discretion.',  
  },  
  {  
    num: '03',  
    title: 'Yacht Charters & Cruises',  
    subtitle: 'Floating Sanctuaries & Expedition Vessels',  
    desc: 'Superyacht charters across polar, Galapagos, and Mediterranean waters, alongside ultra-luxury ocean and river itineraries.',  
  },  
  {  
    num: '04',  
    title: 'Safaris & Wilderness Expeditions',  
    subtitle: 'Untouched Frontiers',  
    desc: 'Private-guide safaris across Sabi Sand, Serengeti, and high-alpine mountain retreats with expert wildlife trackers.',  
  },  
  {  
    num: '05',  
    title: 'Corporate Travel & Executive Offsites',  
    subtitle: 'Discreet Leadership Logistics',  
    desc: 'Full-spectrum travel architecture for executive teams, private boards, and high-profile delegations.',  
  },  
  {  
    num: '06',  
    title: 'Destination Weddings & Celebrations',  
    subtitle: 'Milestone Estates & Buyouts',  
    desc: 'Exclusive-use castle, island, and vineyard buyouts orchestrated for private celebrations of distinction.',  
  },  
  {  
    num: '07',  
    title: 'Luxury Rail Journeys',  
    subtitle: 'Timeless Continental Transit',  
    desc: 'Reserved suites aboard iconic heritage trains crossing Europe, Asia, and the Americas.',  
  },  
  {  
    num: '08',  
    title: 'Polar & Remote Expeditions',  
    subtitle: 'Edge-of-the-World Exploration',  
    desc: 'Ice-class luxury voyages and remote wilderness heli-skiing backed by established operator safety procedures and support protocols.',  
  },  
];

export default function ServicesPage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white font-serif selection:bg-[#D4AF37] selection:text-black">  
      {/* Hero Section */}  
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">  
        <Image  
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80"  
          alt="Advisory Services"  
          fill  
          className="object-cover opacity-45"  
          priority  
          quality={100}  
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0A0A0A]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mt-12">  
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-sans">  
            Private Travel Office  
          </span>

          <h1 className="text-[#D4AF37] text-4xl md:text-6xl font-light tracking-tight mt-4 mb-6">  
            Advisory Services  
          </h1>

          <p className="text-white/70 text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto font-sans">  
            Comprehensive travel architecture and elite curation tailored for  
            high-net-worth individuals and private family offices.  
          </p>  
        </div>  
      </section>

      {/* The Retained Advantage Comparison */}  
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/10">  
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">  
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">  
            The Retained Advantage  
          </span>

          <h2 className="text-3xl md:text-4xl font-light tracking-tight">  
            Open Networks vs. Boutique Advisory  
          </h2>

          <p className="text-white/50 text-sm md:text-base font-sans font-light">  
            Why discerning travelers choose a boutique travel advisory with  
            capped rosters over a standard open-network agency.  
          </p>  
        </div>

        <div className="grid md:grid-cols-2 gap-12">  
          {/* Open Consortium Model */}  
          <div className="border border-white/10 p-8 md:p-10 space-y-6 bg-white/[0.01]">  
            <div>  
              <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-sans">  
                Standard Open-Roster Agency  
              </span>

              <h3 className="text-xl md:text-2xl font-light text-white/70 mt-2">  
                Open Consortium Model  
              </h3>  
            </div>

            <ul className="space-y-4 font-sans font-light text-sm text-white/50">  
              <li className="flex items-start gap-3">  
                <span className="text-red-400/80 mt-0.5">✕</span>

                <span>  
                  <strong>High Client Volume:</strong> Advisors handle hundreds  
                  of travelers simultaneously, resulting in slower response  
                  times and standard booking support.  
                </span>  
              </li>

              <li className="flex items-start gap-3">  
                <span className="text-red-400/80 mt-0.5">✕</span>

                <span>  
                  <strong>Standard Consortium Rates:</strong> Reliance on public  
                  consortium rates and standard booking portals without private  
                  inventory access.  
                </span>  
              </li>

              <li className="flex items-start gap-3">  
                <span className="text-red-400/80 mt-0.5">✕</span>

                <span>  
                  <strong>Transactional Focus:</strong> Primarily acts as a  
                  hotel booking desk rather than managing your complete global  
                  travel portfolio.  
                </span>  
              </li>

              <li className="flex items-start gap-3">  
                <span className="text-red-400/80 mt-0.5">✕</span>

                <span>  
                  <strong>Standard Protocols:</strong> General travel agency  
                  booking procedures with standard privacy measures.  
                </span>  
              </li>  
            </ul>  
          </div>

          {/* The NexVoyage Standard */}  
          <div className="border border-[#D4AF37]/30 p-8 md:p-10 space-y-6 bg-white/[0.03] relative">  
            <div className="absolute top-0 right-0 bg-[#D4AF37] text-black text-[9px] uppercase tracking-[0.3em] px-4 py-1 font-sans font-semibold">  
              The Standard  
            </div>

            <div>  
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">  
                Boutique Travel Advisory  
              </span>

              <h3 className="text-xl md:text-2xl font-light text-white mt-2">  
                NexVoyage Collective  
              </h3>  
            </div>

            <ul className="space-y-4 font-sans font-light text-sm text-white/80">  
              <li className="flex items-start gap-3">  
                <span className="text-[#D4AF37] mt-0.5">✓</span>

                <span>  
                  <strong>Capped Client Roster:</strong> We intentionally limit  
                  our active clientele to ensure dedicated advisor bandwidth  
                  and personal attention for every trip.  
                </span>  
              </li>

              <li className="flex items-start gap-3">  
                <span className="text-[#D4AF37] mt-0.5">✓</span>

                <span>  
                  <strong>Unlisted Estate Access:</strong> Direct relationships  
                  with property owners allowing access to private villas and  
                  off-market sanctuaries.  
                </span>  
              </li>

              <li className="flex items-start gap-3">  
                <span className="text-[#D4AF37] mt-0.5">✓</span>

                <span>  
                  <strong>Holistic Itinerary Design:</strong> Complete travel  
                  architecture—coordinating private aviation, ground logistics,  
                  and exclusive stays seamlessly.  
                </span>  
              </li>

              <li className="flex items-start gap-3">  
                <span className="text-[#D4AF37] mt-0.5">✓</span>

                <span>  
                  <strong>Discretion &amp; Privacy:</strong> Confidential,  
                  preference-led service and white-glove stewardship tailored  
                  to your personal preferences.  
                </span>  
              </li>  
            </ul>  
          </div>  
        </div>  
      </section>

      {/* Engagement & Pricing Model Section */}  
      <section className="py-24 px-6 max-w-6xl mx-auto border-b border-white/10">  
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">  
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">  
            Economics &amp; Engagement  
          </span>

          <h2 className="text-3xl md:text-4xl font-light tracking-tight">  
            The Advisory Model  
          </h2>

          <p className="text-white/50 text-sm md:text-base font-sans font-light">  
            Tailored for high-net-worth clients who value time-saving precision  
            and uncompromised execution over transactional booking.  
          </p>  
        </div>

        <div className="grid md:grid-cols-3 gap-8">  
          {/* Card 1 */}  
          <div className="border border-white/10 p-8 space-y-4 bg-white/[0.01]">  
            <span className="text-white/20 text-xs font-mono">  
              01 / MODEL  
            </span>

            <h3 className="text-xl font-light text-white">  
              Transparent Advisory Relationship  
            </h3>

            <p className="text-white/60 text-sm font-sans font-light leading-relaxed">  
              We operate on a transparent, preferred-access framework that connects our clientele directly to premier global properties, private aviation networks, and bespoke estate buyouts with optimal partner privileges.  
            </p>  
          </div>

          {/* Card 2 */}  
          <div className="border border-white/10 p-8 space-y-4 bg-white/[0.01]">  
            <span className="text-white/20 text-xs font-mono">  
              02 / MODEL  
            </span>

            <h3 className="text-xl font-light text-white">  
              The Sanctuary Tier  
            </h3>

            <p className="text-white/60 text-sm font-sans font-light leading-relaxed">  
              Rather than charging traditional monthly retainers, our pricing  
              is absorbed into zero-friction execution. Clients invest in  
              premium logistics, private transport, and curated access where  
              the margin is baked into the curated tier.  
            </p>  
          </div>

          {/* Card 3 */}  
          <div className="border border-white/10 p-8 space-y-4 bg-white/[0.01]">  
            <span className="text-white/20 text-xs font-mono">  
              03 / MODEL  
            </span>

            <h3 className="text-xl font-light text-white">  
              Corporate Retainers  
            </h3>

            <p className="text-white/60 text-sm font-sans font-light leading-relaxed">  
              For corporate clients, event manifests, executive team retreats,  
              and recurring summit support, we structure custom project-based  
              pricing or flat-rate execution fees to manage room blocks, driver  
              manifests, and zero-friction travel policies.  
            </p>  
          </div>  
        </div>  
      </section>

      {/* What We Curate */}  
      <section className="py-24 px-6 max-w-7xl mx-auto">  
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">  
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">  
            Scope of Curation  
          </span>

          <h2 className="text-3xl md:text-4xl font-light tracking-tight">  
            What We Curate  
          </h2>  
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">  
          {curations.map((curation) => (  
            <div  
              key={curation.num}  
              className="border-t border-white/10 pt-6 space-y-3"  
            >  
              <span className="text-[#D4AF37] text-xs font-mono">  
                {curation.num}  
              </span>

              <h3 className="text-white text-lg font-light tracking-tight">  
                {curation.title}  
              </h3>

              <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest opacity-70 font-sans">  
                {curation.subtitle}  
              </p>

              <p className="text-white/50 text-xs leading-relaxed font-sans font-light">  
                {curation.desc}  
              </p>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* CTA */}  
      <section className="py-24 border-t border-white/10 text-center px-6 bg-[#0E0E0E]">  
        <div className="max-w-xl mx-auto space-y-6">  
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">  
            Begin Consultation  
          </span>

          <h2 className="text-3xl md:text-4xl font-light text-white">  
            Establish Your Advisory Mandate  
          </h2>

          <p className="text-white/50 text-sm leading-relaxed font-sans font-light">  
            Engage with our private advisory team to establish your travel  
            portfolio or discuss an upcoming itinerary.  
          </p>

          <div className="pt-4">  
            <Link  
              href="https://cal.com/nexvoyagecollective/discovery-call"  
              className="inline-block border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-[0.3em] px-8 py-4 hover:bg-[#D4AF37] hover:text-black transition-all duration-500 font-sans"  
            >  
              Schedule a Discovery Call  
            </Link>  
          </div>  
        </div>  
      </section>  
    </main>  
  );  
}  
