import { notFound } from 'next/navigation'

const LEGAL_DOCS: Record<string, { title: string; date: string; content: string }> = {  
  'privacy-policy': {  
    title: 'Privacy Policy',  
    date: 'May 29, 2026',  
    content: `  
      <section class="space-y-6">  
        <div>  
          <h2 class="text-xl font-semibold text-slate-900 mb-4">1. Data Stewardship</h2>  
          <p>At NexVoyage Collective, we view your privacy as the cornerstone of the Guardian Layer. We collect personal data—including travel preferences, biometric identifiers for security clearances, and financial information—solely to facilitate bespoke sanctuary experiences. Your data is encrypted and never sold.</p>  
        </div>  
        <div>  
          <h2 class="text-xl font-semibold text-slate-900 mb-4">2. The ROI of Reset Protocol</h2>  
          <p>We utilize advanced analytics to optimize your "ROI of Reset," ensuring that every interaction with our platform is seamless and tailored to your specific travel DNA. We only share information with third-party sanctuary providers (e.g., Ritz-Carlton Yacht Collection) under strict non-disclosure agreements.</p>  
        </div>  
        <div>  
          <h2 class="text-xl font-semibold text-slate-900 mb-4">3. Security Measures</h2>  
          <p>All client data is stored in air-gapped, sovereign cloud environments to ensure absolute discretion and protection against unauthorized access.</p>  
        </div>  
      </section>  
    `,  
  },  
  'terms-and-conditions': {  
    title: 'Terms and Conditions',  
    date: 'May 29, 2026',  
    content: `  
      <section class="space-y-6">  
        <div>  
          <h2 class="text-xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>  
          <p>By engaging with NexVoyage Collective, you agree to our "Guardian Layer" protocols. These terms govern all sanctuary bookings, concierge interactions, and digital platform usage.</p>  
        </div>  
        <div>  
          <h2 class="text-xl font-semibold text-slate-900 mb-4">2. Sanctuary Access</h2>  
          <p>Access to specific sanctuaries (Metropolitan Penthouse, Floating Sanctuary, etc.) is subject to availability and strict security vetting. NexVoyage Collective reserves the right to refuse service to maintain the integrity of our member network.</p>  
        </div>  
        <div>  
          <h2 class="text-xl font-semibold text-slate-900 mb-4">3. Limitation of Liability</h2>  
          <p>While we provide the ultimate "Guardian Layer," NexVoyage Collective acts as an intermediary advisor. Sanctuary specific terms and conditions from our partners also apply.</p>  
        </div>  
      </section>  
    `,  
  },  
}

export async function generateStaticParams() {  
  return Object.keys(LEGAL_DOCS).map((slug) => ({  
    slug: slug,  
  }))  
}

export default function LegalPage({ params }: { params: { slug: string } }) {  
  const doc = LEGAL_DOCS[params.slug]

  if (!doc) {  
    notFound()  
  }

  return (  
    <div className="min-h-screen bg-white">  
      <div className="max-w-4xl mx-auto px-6 py-24">  
        <header className="mb-16 border-b border-slate-100 pb-12">  
          <h1 className="text-4xl font-serif text-slate-900 mb-4">{doc.title}</h1>  
          <p className="text-sm text-slate-400 font-mono tracking-tighter">  
            EFFECTIVE DATE: {doc.date}  
          </p>  
        </header>  
          
        <article   
          className="prose prose-slate prose-headings:font-serif prose-p:text-slate-600 prose-p:leading-relaxed max-w-none"  
          dangerouslySetInnerHTML={{ __html: doc.content }}  
        />  
          
        <footer className="mt-20 pt-8 border-t border-slate-50">  
          <p className="text-xs text-slate-400 italic">  
            For further legal inquiries regarding the Guardian Layer, please contact the NexVoyage Collective legal team.  
          </p>  
        </footer>  
      </div>  
    </div>  
  )  
}  
