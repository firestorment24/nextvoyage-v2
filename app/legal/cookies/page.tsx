import Link from 'next/link';

export const metadata = {  
title: 'Cookie & Tracking Policy — NexVoyage Collective',  
description: 'Minimalist analytics disclosure respecting high-net-worth digital privacy.',  
};

export default function CookiesPage() {  
return (  
<main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C5A059]/30 pt-32 pb-24 px-6 md:px-12">  
  <div className="max-w-4xl mx-auto space-y-12">  
    <div className="border-b border-white/10 pb-8">  
      <p className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-medium mb-3">Protocol 05</p>  
      <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">Cookie & Tracking Policy</h1>  
      <p className="text-white/60 text-sm md:text-base leading-relaxed">  
        Essential performance analytics with zero third-party advertising trackers.  
      </p>  
    </div>

    <section className="space-y-4">  
      <h2 className="text-xl font-medium text-[#C5A059] tracking-wide">01. Minimalist Analytics Disclosure</h2>  
      <p className="text-white/70 text-sm md:text-base leading-relaxed">  
        We utilize essential performance cookies and anonymous telemetry solely to ensure seamless digital functionality across our platform.   
      </p>  
    </section>

    <section className="space-y-4">  
      <h2 className="text-xl font-medium text-[#C5A059] tracking-wide">02. Absence of Ad-Network Trackers</h2>  
      <p className="text-white/70 text-sm md:text-base leading-relaxed">  
        NexVoyage Collective maintains a strict zero-tolerance policy regarding third-party ad-network trackers, behavioural profiling cookies, and external data monetization scripts. Your digital footprint remains entirely private.  
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
