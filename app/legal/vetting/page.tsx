import Link from 'next/link';

export const metadata = {  
title: 'The Sanctuary Protocol — NexVoyage Collective',  
description: 'Closed ecosystem membership and reputational vetting standards.',  
};

export default function VettingPage() {  
return (  
<main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C5A059]/30 pt-32 pb-24 px-6 md:px-12">  
  <div className="max-w-4xl mx-auto space-y-12">  
    <div className="border-b border-white/10 pb-8">  
      <p className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-medium mb-3">Protocol 03</p>  
      <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">The Sanctuary Protocol</h1>  
      <p className="text-white/60 text-sm md:text-base leading-relaxed">  
        Membership criteria, financial vetting, and mutual confidentiality covenants.  
      </p>  
    </div>

    <section className="space-y-4">  
      <h2 className="text-xl font-medium text-[#C5A059] tracking-wide">01. Closed Ecosystem & Vetting</h2>  
      <p className="text-white/70 text-sm md:text-base leading-relaxed">  
        NexVoyage Collective is a closed ecosystem. Membership and access to the Private Collection are strictly restricted and subject to rigorous financial and reputational vetting or direct sponsor referral.  
      </p>  
    </section>

    <section className="space-y-4">  
      <h2 className="text-xl font-medium text-[#C5A059] tracking-wide">02. Mutual Non-Disclosure</h2>  
      <p className="text-white/70 text-sm md:text-base leading-relaxed">  
        Members agree to maintain absolute confidentiality regarding unlisted properties, private estate locations, proprietary routings, and fellow collective participants. Discretion is both our standard and our mandate.  
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
