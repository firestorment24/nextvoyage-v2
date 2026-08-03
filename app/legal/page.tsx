import Link from 'next/link';

export default function LegalPage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C5A059]/30 pt-32 pb-24 px-6 md:px-12">  
      <div className="max-w-4xl mx-auto space-y-12">  
        {/* Header */}  
        <div className="border-b border-white/10 pb-8">  
          <p className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-medium mb-3">Governance & Stewardship</p>  
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">Legal & Discretion Protocols</h1>  
          <p className="text-white/60 text-sm md:text-base leading-relaxed">  
            The standards governing privacy, advisory mandates, and confidentiality across the NexVoyage Collective ecosystem.  
          </p>  
        </div>

        {/* Section 1: Confidentiality & Privacy */}  
        <section className="space-y-4">  
          <h2 className="text-xl font-medium text-[#C5A059] tracking-wide">01. Absolute Discretion & Privacy</h2>  
          <p className="text-white/70 text-sm md:text-base leading-relaxed">  
            We operate on the foundational principle that true luxury is unlisted and unseen. All client communications, itinerary details, private collection inquiries, and asset access arrangements are held under strict non-disclosure standards. We do not monetize, distribute, or broker client data.  
          </p>  
        </section>

        {/* Section 2: Advisory & Itinerary Mandates */}  
        <section className="space-y-4">  
          <h2 className="text-xl font-medium text-[#C5A059] tracking-wide">02. Advisory Engagements</h2>  
          <p className="text-white/70 text-sm md:text-base leading-relaxed">  
            Engagement with NexVoyage Collective for private collection curation, estate acquisitions, or bespoke event access is governed by individual advisory mandates. All proposals, private aviation routings, and unlisted property allocations are provisional until confirmed through direct concierge stewardship.  
          </p>  
        </section>

        {/* Section 3: Intellectual Property */}  
        <section className="space-y-4">  
          <h2 className="text-xl font-medium text-[#C5A059] tracking-wide">03. Intellectual Property & Editorial</h2>  
          <p className="text-white/70 text-sm md:text-base leading-relaxed">  
            All proprietary frameworks, dossiers, journals, perspective essays, and visual assets published under NexVoyage Collective are protected by copyright. Reproduction or redistribution without explicit written authorization is strictly prohibited.  
          </p>  
        </section>

        {/* Section 4: Limitation of Liability */}  
        <section className="space-y-4">  
          <h2 className="text-xl font-medium text-[#C5A059] tracking-wide">04. Stewardship & Liability</h2>  
          <p className="text-white/70 text-sm md:text-base leading-relaxed">  
            While our stewardship guarantees rigorous vetting of every sanctuary, estate, and partner in our collection, travel within remote wilderness, high alpine, and private maritime corridors involves inherent conditions managed by respective independent operators.  
          </p>  
        </section>

        {/* Footer / Return */}  
        <div className="pt-12 border-t border-white/10 flex items-center justify-between">  
          <Link href="/" className="text-xs uppercase tracking-[0.2em] text-[#C5A059] hover:text-white transition-colors">  
            ← Return to Sanctuary  
          </Link>  
          <span className="text-white/40 text-xs">NexVoyage Collective © 2026</span>  
        </div>  
      </div>  
    </main>  
  );  
}  
