import { notFound } from 'next/navigation'

const LEGAL_DOCS: Record<string, { title: string; date: string; content: string }> = {  
  'privacy': {  
    title: 'Privacy Policy',  
    date: 'May 30, 2026',  
    content: `At NexVoyage Collective, your privacy is a cornerstone of our service. We recognize that privacy is not just a legal requirement—it is a fundamental expectation of our high-net-worth clientele. 

    We collect only what is necessary to craft your experience. Your personal details are never sold, only utilized to facilitate your bookings and provide seamless sanctuary access. We use industry-standard encryption to ensure your digital footprint remains private.`  
  },  
  'terms': {  
    title: 'Terms & Conditions',  
    date: 'May 30, 2026',  
    content: `NexVoyage Collective provides bespoke travel planning and concierge services, including itinerary design and safety recommendations through our Sanctuary Tiers. 

    By accessing the platform, you agree to our standards of excellence. All bookings are subject to availability and the specific terms of our sanctuary partners. Your safety is a priority, but travel inherently involves risk. NexVoyage Collective is not liable for personal injury or property damage resulting from third-party acts.`  
  }  
}

export function generateStaticParams() {  
  return Object.keys(LEGAL_DOCS).map((slug) => ({ slug }))  
}

export default function LegalPage({ params }: { params: { slug: string } }) {  
  const doc = LEGAL_DOCS[params.slug]  
  if (!doc) notFound()

  return (  
    <div className="min-h-screen bg-[#0A0A0A] text-white/90 pt-32 pb-20 px-6">  
      <article className="max-w-3xl mx-auto text-left">  
        <h1 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">{doc.title}</h1>  
        <p className="text-xs tracking-[0.2em] text-white/40 mb-12 uppercase font-light">Last Updated: {doc.date}</p>  
        <div className="prose prose-invert max-w-none">  
          <p className="whitespace-pre-line font-light leading-relaxed text-white/70">{doc.content}</p>  
        </div>  
      </article>  
    </div>  
  )  
}  
