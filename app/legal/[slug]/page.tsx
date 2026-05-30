import { notFound } from 'next/navigation';  
import Link from 'next/link';

const LEGAL_CONTENT: Record<string, { title: string; content: React.ReactNode }> = {  
  'privacy-policy': {  
    title: 'Privacy Policy',  
    content: (  
      <>  
        <p className="text-sm opacity-60 mb-8">Effective Date: May 29, 2026</p>  
        <section className="space-y-6">  
          <p>At NexVoyage Collective, your privacy is a cornerstone of our service. We recognize that privacy is not just a legal requirement—it is a fundamental expectation of our high-net-worth clientele.</p>  
          <h2 className="text-xl font-medium mt-8">1. Information We Collect</h2>  
          <ul className="list-disc pl-5 space-y-2 opacity-80">  
            <li>Personal Identifiers: Passport copies, government ID, and contact details.</li>  
            <li>Payment Information: Encrypted billing data.</li>  
            <li>Travel Preferences: Dietary, lifestyle, and health considerations.</li>  
            <li>Safety Data: Security coordination and emergency contacts.</li>  
          </ul>  
          {/* Add remaining sections from the Privacy Policy resource */}  
        </section>  
      </>  
    ),  
  },  
  'terms-conditions': {  
    title: 'Terms and Conditions',  
    content: (  
      <>  
        <p className="text-sm opacity-60 mb-8">Effective Date: May 29, 2026</p>  
        <section className="space-y-6">  
          <p>Welcome to NexVoyage Collective. These Terms and Conditions govern your use of our website and bespoke travel services.</p>  
          <h2 className="text-xl font-medium mt-8">1. Scope of Services</h2>  
          <p className="opacity-80">NexVoyage Collective provides bespoke travel planning and concierge services tailored for high-net-worth individuals.</p>  
          {/* Add remaining sections from the Terms resource */}  
        </section>  
      </>  
    ),  
  },  
  // Add entries for 'impact-safety' and 'consent-guidelines' here  
};

export default function LegalPage({ params }: { params: { slug: string } }) {  
  const doc = LEGAL_CONTENT[params.slug];

  if (!doc) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6">  
      <div className="max-w-3xl mx-auto">  
        <Link   
          href="/"   
          className="text-xs uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity mb-12 inline-block"  
        >  
          ← Back to Collective  
        </Link>  
        <h1 className="text-4xl md:text-5xl font-light tracking-tighter mb-16">  
          {doc.title}  
        </h1>  
        <div className="prose prose-invert prose-neutral max-w-none leading-relaxed font-light">  
          {doc.content}  
        </div>  
      </div>  
    </main>  
  );  
}  
