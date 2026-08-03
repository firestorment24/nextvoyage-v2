import Link from 'next/link';

export const metadata = {  
title: 'Impact & Security Architecture — NexVoyage Collective',  
description: 'Vetted security partnerships and remote wilderness risk mitigation.',  
};

export default function ImpactSafetyPage() {  
return (  
<main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C5A059]/30 pt-32 pb-24 px-6 md:px-12">  
  <div className="max-w-4xl mx-auto space-y-12">  
    <div className="border-b border-white/10 pb-8">  
      <p className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-medium mb-3">Protocol 04</p>  
      <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">Impact & Security Architecture</h1>  
      <p className="text-white/60 text-sm md:text-base leading-relaxed">  
        Rigorous risk mitigation, private transport oversight, and environmental stewardship.  
      </p>  
    </div>

    <section className="space-y-4">  
      <h2 className="text-xl font-medium text-[#C5A059] tracking-wide">01. Vetted Security Partnerships</h2>  
      <p className="text-white/70 text-sm md:text-base leading-relaxed">  
        All security details, executive protection logistics, and private transport providers undergo rigorous auditing to ensure compliance with international safety and discretion standards.  
      </p>  
    </section>

    <section className="space-y-4">  
      <h2 className="text-xl font-medium text-[#C5A059] tracking-wide">02. Wilderness & Expedition Risk Mitigation</h2>  
      <p className="text-white/70 text-sm md:text-base leading-relaxed">  
        High alpine, remote maritime, and wildlife sanctuary expeditions are supported by localized emergency evacuation protocols, satellite tracking, and expert expedition leaders.  
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
