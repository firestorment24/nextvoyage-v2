import Link from 'next/link';

export const metadata = {  
title: 'Terms of Engagement — NexVoyage Collective',  
description: 'Commercial mechanics, cancellation terms, and confidential dispute resolution.',  
};

export default function TermsPage() {  
return (  
<main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C5A059]/30 pt-32 pb-24 px-6 md:px-12">  
  <div className="max-w-4xl mx-auto space-y-12">  
    <div className="border-b border-white/10 pb-8">  
      <p className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-medium mb-3">Protocol 02</p>  
      <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">Terms of Engagement</h1>  
      <p className="text-white/60 text-sm md:text-base leading-relaxed">  
        Advisory mandates, commercial settlement structures, and confidentiality covenants.  
      </p>  
    </div>

    <section className="space-y-4">  
      <h2 className="text-xl font-medium text-[#C5A059] tracking-wide">01. Commercial Mechanics & Retainers</h2>  
      <p className="text-white/70 text-sm md:text-base leading-relaxed">  
        Advisory engagements, private collection curation, and estate acquisitions operate on non-refundable curation fees and structured milestone retainers. Specific financial terms are defined in individual client mandates.  
      </p>  
    </section>

    <section className="space-y-4">  
      <h2 className="text-xl font-medium text-[#C5A059] tracking-wide">02. Cancellation & Contingencies</h2>  
      <p className="text-white/70 text-sm md:text-base leading-relaxed">  
        Private aviation charters, yacht voyages, remote wilderness expeditions, and estate buyouts are subject to specialized operator cancellation terms and force majeure protections, structured to safeguard member capital.  
      </p>  
    </section>

    <section className="space-y-4">  
      <h2 className="text-xl font-medium text-[#C5A059] tracking-wide">03. Governing Law & Confidential Arbitration</h2>  
      <p className="text-white/70 text-sm md:text-base leading-relaxed">  
        All disputes arising from or relating to advisory engagements shall be governed by the laws of the State of New York. Any formal resolution shall be conducted exclusively through confidential, binding arbitration to protect client anonymity and reputational integrity.  
      </p>  
    </section>

    <div className="pt-12 border-t border-white/10 flex items-center justify-between">  
      <Link href="/legal" className="text-xs uppercase tracking-[0.2em] text-[#C5A059] hover:text-white transition-colors">  
        ← Back to Legal Directory  
      </Link>  
      <span className="text-white/40 text-xs">NexVoyage Collective © 2026</span>  
    </div>  
  </div>  
</main>  
);  
}  
