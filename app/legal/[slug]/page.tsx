// app/legal/[slug]/page.tsx  
import { notFound } from 'next/navigation';  
import Link from 'next/link';

const LEGAL_DOCS = {  
  'privacy': {  
    title: 'Privacy Policy',  
    updated: 'May 29, 2026',  
    resource: ,  
    content: `We prioritize the discretion and security of our clients above all else. NexVoyage Collective does not sell, rent, or trade personal data to third parties. Information is collected solely to facilitate bespoke travel arrangements and concierge services.`  
  },  
  'terms': {  
    title: 'Terms & Conditions',  
    updated: 'May 29, 2026',  
    resource: ,  
    content: `All journeys curated by NexVoyage Collective are subject to the specific terms of our sanctuary partners. We act as your primary liaison to ensure these terms meet the NexVoyage Standard of luxury and security.`  
  },  
  'safety': {  
    title: 'Impact & Safety Commitment',  
    updated: 'May 29, 2026',  
    resource: ,  
    content: `Every sanctuary in our collective undergoes a rigorous 118-point vetting process. Our safety commitment ensures that your privacy is maintained through physical security and digital anonymity throughout your stay.`  
  },  
  'consent': {  
    title: 'Client & Data Consent',  
    updated: 'May 29, 2026',  
    resource: ,  
    content: `By engaging with our concierge, you consent to the secure processing of your travel preferences. You maintain the right to "Digital Erasure" at any time, purging all travel history from our secure servers.`  
  }  
};

export default function LegalPage({ params }: { params: { slug: string } }) {  
  const doc = LEGAL_DOCS[params.slug as keyof typeof LEGAL_DOCS];

  if (!doc) notFound();

  return (  
    <main className="max-w-2xl mx-auto px-6 py-32 min-h-screen">  
      <header className="mb-16">  
        <h1 className="text-3xl font-light tracking-tight text-neutral-900 mb-2">  
          {doc.title}  
        </h1>  
        <p className="text-xs uppercase tracking-widest text-neutral-400">  
          Last Updated — {doc.updated}  
        </p>  
      </header>

      <article className="prose prose-neutral prose-sm max-w-none text-neutral-600 leading-relaxed">  
        <p className="mb-8">{doc.content}</p>  
          
        {/* Placeholder for Linda's full legal text */}  
        <div className="pt-8 border-t border-neutral-100 italic text-neutral-400">  
          The full statutory text for {doc.title} is available upon request via your private concierge.  
        </div>  
      </article>

      <footer className="mt-24 pt-8 border-t border-neutral-100">  
        <Link   
          href="/concierge"   
          className="text-xs uppercase tracking-widest text-neutral-900 hover:text-neutral-500 transition-colors"  
        >  
          Return to Private Concierge →  
        </Link>  
      </footer>  
    </main>  
  );  
}

// Generates the paths at build time for Vercel  
export async function generateStaticParams() {  
  return Object.keys(LEGAL_DOCS).map((slug) => ({ slug }));  
}  
