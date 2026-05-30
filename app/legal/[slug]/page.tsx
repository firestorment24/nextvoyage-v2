import { notFound } from 'next/navigation'

const LEGAL_DOCS: Record<string, { title: string; content: string }> = {  
  'privacy-policy': {  
    title: 'Privacy Policy',  
    content: 'Our commitment to your privacy is absolute. We do not track, sell, or share your data...'  
  },  
  'terms-and-conditions': {  
    title: 'Terms and Conditions',  
    content: 'By accessing NexVoyage Collective, you agree to our protocols for private sanctuary access...'  
  }  
}

export function generateStaticParams() {  
  return Object.keys(LEGAL_DOCS).map((slug) => ({ slug }))  
}

export default function LegalPage({ params }: { params: { slug: string } }) {  
  const doc = LEGAL_DOCS[params.slug]  
  if (!doc) notFound()

  return (  
    <main className="min-h-screen bg-white text-neutral-900 py-32 px-6">  
      <div className="max-w-3xl mx-auto">  
        <h1 className="text-4xl font-light tracking-tight mb-12 uppercase">{doc.title}</h1>  
        <div className="prose prose-neutral leading-relaxed font-light">  
          {doc.content}  
        </div>  
      </div>  
    </main>  
  )  
}  
