import { notFound } from 'next/navigation';  
import Link from 'next/link';

const LEGAL_DOCS: Record<string, { title: string; content: string[] }> = {  
  'privacy': {  
    title: 'Privacy Policy',  
    content: [  
      "At NexVoyage Collective, your privacy is a cornerstone of our service. We recognize that privacy is a fundamental expectation of our high-net-worth clientele.",  
      "1. Information We Collect: Personal Identifiers (Passports, IDs), Payment Information, Travel Preferences, and Safety Data.",  
      "2. Data Sharing: We do not sell or rent your information. We share data only with vetted partners (Hotels, Security) with your explicit consent."  
    ]  
  },  
  'terms': {  
    title: 'Terms & Conditions',  
    content: [  
      "NexVoyage Collective provides bespoke travel planning and concierge services.",  
      "1. Scope: Includes itinerary design, booking management, and safety recommendations through our Sanctuary Tiers.",  
      "2. Payments: All fees must be paid in full according to the provided schedule. Service fees are non-refundable."  
    ]  
  },  
  'safety': {  
    title: 'Impact & Safety Commitment',  
    content: [  
      "Your safety is our highest priority. We take a proactive approach via Expert Guidance and Vetted Partners.",  
      "Our Sanctuary Tiers offer enhanced security protocols designed for discretion and peace of mind.",  
      "We prioritize local economies by supporting boutique hotels and regional guides."  
    ]  
  },  
  'consent': {  
    title: 'Client & Data Consent',  
    content: [  
      "Transparency in Data Collection: We collect information to provide a seamless and secure experience.",  
      "Explicit Consent for Security: We never share your location with third-party security firms without your direct approval.",  
      "You have the right to opt-out of data sharing at any time."  
    ]  
  }  
};

export default function LegalPage({ params }: { params: { slug: string } }) {  
  const doc = LEGAL_DOCS[params.slug];  
  if (!doc) notFound();

  return (  
    <div className="max-w-2xl mx-auto px-6 py-40">  
      <h1 className="text-4xl font-light mb-12 tracking-tight">{doc.title}</h1>  
      <div className="space-y-8 text-neutral-600 leading-relaxed font-light">  
        {doc.content.map((p, i) => <p key={i}>{p}</p>)}  
      </div>  
      <div className="mt-20 pt-10 border-t border-neutral-100">  
        <Link href="/" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-black">  
          ← Back to Collective  
        </Link>  
      </div>  
    </div>  
  );  
}

export async function generateStaticParams() {  
  return Object.keys(LEGAL_DOCS).map((slug) => ({ slug }));  
}  
