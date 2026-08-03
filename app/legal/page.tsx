import Link from 'next/link';

export const metadata = {  
title: 'Legal & Compliance Architecture — NexVoyage Collective',  
description: 'Governance, privacy standards, and advisory terms for UHNW clientele.',  
};

export default function LegalIndexPage() {  
return (  
  <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C5A059]/30 pt-32 pb-24 px-6 md:px-12">  
    <div className="max-w-4xl mx-auto space-y-12">  
      <div className="border-b border-white/10 pb-8">  
        <p className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-medium mb-3">Governance & Stewardship</p>  
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">Legal Framework</h1>  
        <p className="text-white/60 text-sm md:text-base leading-relaxed">  
          The protocols governing data sovereignty, confidentiality, advisory mandates, and sanctuary vetting.  
        </p>  
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
        <LegalCard  
          title="Privacy & Data Sovereignty"  
          href="/legal/privacy"  
          description="Global compliance (GDPR/CCPA), secure metadata retention, and Zero-Knowledge transmission protocols."  
        />  
        <LegalCard  
          title="Terms of Engagement"  
          href="/legal/terms"  
          description="Advisory retainers, curation fees, charter cancellation contingencies, and confidential New York arbitration."  
        />  
        <LegalCard  
          title="The Sanctuary Protocol"  
          href="/legal/vetting"  
          description="Closed ecosystem membership, reputational vetting, and mutual client non-disclosure obligations."  
        />  
        <LegalCard  
          title="Impact & Security Architecture"  
          href="/legal/impact-safety"  
          description="Vetted security partnerships, private transport standards, and remote wilderness risk mitigation."  
        />  
        <LegalCard  
          title="Cookie & Tracking Policy"  
          href="/legal/cookies"  
          description="Minimalist analytics disclosure respecting high-net-worth digital privacy."  
        />  
      </div>

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

function LegalCard({ title, href, description }: { title: string; href: string; description: string }) {  
return (  
  <Link href={href} className="bg-[#111111] border border-white/10 p-6 hover:border-[#C5A059]/40 transition-colors flex flex-col justify-between space-y-4">  
    <div className="space-y-2">  
      <h3 className="text-xl font-normal text-white">{title}</h3>  
      <p className="text-white/60 text-xs leading-relaxed">{description}</p>  
    </div>  
    <span className="text-xs uppercase tracking-[0.15em] text-[#C5A059]">Review Protocol →</span>  
  </Link>  
);  
}  
2. Privacy Policy (app/legal/privacy/page.tsx)
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
          For inquiries regarding personal data sovereignty or secure profile management, contact our Data Protection Officer directly at <span className="text-[#C5A059]">privacy@nexvoyagecollective.com</span>.  
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
