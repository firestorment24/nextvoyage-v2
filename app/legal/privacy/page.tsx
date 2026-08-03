import Link from 'next/link';

export const metadata = {  
title: 'Privacy Architecture & Data Sovereignty — NexVoyage Collective',  
description: 'Global compliance and confidential data handling standards.',  
};

export default function PrivacyPage() {  
return (  
<main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C5A059]/30 pt-32 pb-24 px-6 md:px-12">  
  <div className="max-w-4xl mx-auto space-y-12">  
    <div className="border-b border-white/10 pb-8">  
      <p className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-medium mb-3">Protocol 01</p>  
      <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">Privacy & Data Sovereignty</h1>  
      <p className="text-white/60 text-sm md:text-base leading-relaxed">  
        Stewardship of member data under strict international compliance and absolute discretion standards.  
      </p>  
    </div>

    <section className="space-y-4">  
      <h2 className="text-xl font-medium text-[#C5A059] tracking-wide">01. Regulatory Alignment & Scope</h2>  
      <p className="text-white/70 text-sm md:text-base leading-relaxed">  
        NexVoyage Collective adheres strictly to cross-border data protection frameworks, including GDPR, CCPA, and Swiss/EU data transfer safeguards. We recognize that elite discretion requires uncompromising data stewardship.  
      </p>  
    </section>

    <section className="space-y-4">  
      <h2 className="text-xl font-medium text-[#C5A059] tracking-wide">02. Data Retention & Purging Protocols</h2>  
      <p className="text-white/70 text-sm md:text-base leading-relaxed">  
        Sensitive travel itineraries, security routing details, and personal preferences are retained only for the duration required to execute active mandates. Post-journey security metadata is purged in accordance with our zero-retention schedule unless specifically retained under active client advisory agreements.  
      </p>  
    </section>

    <section className="space-y-4">  
      <h2 className="text-xl font-medium text-[#C5A059] tracking-wide">03. Zero-Knowledge Transmission</h2>  
      <p className="text-white/70 text-sm md:text-base leading-relaxed">  
        When interfacing with vetted security partners, private aviation operators, and unlisted sanctuary estates, client profile data is shared solely on a strict need-to-know basis under binding confidentiality covenants. We never monetize or broker member data.  
      </p>  
    </section>

    <section className="space-y-4">  
      <h2 className="text-xl font-medium text-[#C5A059] tracking-wide">04. Secure Inquiries & DPO Contact</h2>  
      <p className="text-white/70 text-sm md:text-base leading-relaxed">  
        For inquiries regarding personal data sovereignty or secure profile management, contact our Data Protection Officer directly at <span className="text-[#C5A059]">info@nexvoyagecollective.com</span>.  
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
