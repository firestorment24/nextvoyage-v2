import { notFound } from 'next/navigation';  
import Link from 'next/link';

const LEGAL_DOCS: Record<string, { title: string; content: string[] }> = {  
  'privacy': {  
    title: 'Privacy Policy',  
    content: ["At NexVoyage Collective, your privacy is our cornerstone.", "We collect data only to facilitate bespoke travel.", "We do not sell information to third parties."]  
  },  
  'terms': {  
    title: 'Terms & Conditions',  
    content: ["Our services include bespoke itinerary design and booking management.", "All payments are subject to the schedule provided at booking.", "Cancellations are governed by partner-specific policies."]  
  },  
  'safety': {  
    title: 'Impact & Safety',  
    content: ["Safety is proactive. We use vetted partners and expert guidance.", "Our commitment to impact supports local boutique hotels and guides."]  
  },  
  'consent': {  
    title: 'Data Consent',  
    content: ["Explicit consent is required for all security coordination.", "You may withdraw data processing consent at any time."]  
  }  
};

export default function LegalPage({ params }: { params: { slug: string } }) {  
  const doc = LEGAL_DOCS[params.slug];  
  if (!doc) notFound();

  return (  
    <main className="max-w-2xl mx-auto px-6 py-24">  
      <h1 className="text-3xl font-light mb-12 tracking-tight">{doc.title}</h1>  
      <div className="space-y-6 text-neutral-600 leading-relaxed font-light">  
        {doc.content.map((p, i) => <p key={i}>{p}</p>)}  
      </div>  
      <footer className="mt-20 pt-10 border-t border-neutral-100">  
        <Link href="/" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-black">  
          ← Return to Collective  
        </Link>  
      </footer>  
    </main>  
  );  
}

export async function generateStaticParams() {  
  return Object.keys(LEGAL_DOCS).map((slug) => ({ slug }));  
}  
