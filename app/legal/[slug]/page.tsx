import React from 'react'  
import Link from 'next/link'  
import { notFound } from 'next/navigation'

const LEGAL_DOCS = {  
  'privacy': {  
    title: 'Privacy Architecture & Data Sovereignty',  
    date: 'June 10, 2026',  
    content: `Privacy is not a policy at NexVoyage Collective; it is our primary architecture. We recognize that for our clientele, data is a vulnerability if not handled with absolute discretion...`  
  },  
  'terms': {  
    title: 'Terms of Engagement & The Sanctuary Agreement',  
    date: 'June 10, 2026',  
    content: `Engagement with NexVoyage Collective constitutes a formal acceptance of these Terms of Engagement. We operate as an elite travel architect and concierge...`  
  },  
  'vetting': {  
    title: 'Vetting Standard: The Sanctuary Protocol',  
    date: 'June 10, 2026',  
    content: `At NexVoyage Collective, we maintain a closed ecosystem. Our commitment to total discretion and security necessitates a rigorous vetting process...`  
  },  
  'security': {  
    title: 'The NexVoyage Standard: Impact & Security Architecture',  
    date: 'June 10, 2026',  
    content: `Our "Brass & Shadow" philosophy dictates a quiet, authoritative approach to both security and stewardship...`  
  }  
}

export default function LegalDocumentPage({ params }: { params: { slug: string } }) {  
  const doc = LEGAL_DOCS[params.slug as keyof typeof LEGAL_DOCS]

  if (!doc) return notFound()

  return (  
    <div className="min-h-screen bg-[#d4d4d4] text-[#0a0a0a] font-serif selection:bg-[#0a0a0a] selection:text-[#d4d4d4]">  
      <nav className="p-8 flex justify-between items-center border-b border-[#0a0a0a]/10">  
        <Link href="/legal" className="text-xs uppercase tracking-[0.2em] hover:opacity-50 transition-opacity">  
          ← Protocols Index  
        </Link>  
        <span className="text-[10px] uppercase tracking-[0.4em] opacity-40">NexVoyage Internal Standard</span>  
      </nav>

      <article className="max-w-3xl mx-auto px-8 py-32">  
        <header className="mb-20 space-y-8">  
          <div className="text-xs tracking-[0.3em] uppercase opacity-50">Effective {doc.date}</div>  
          <h1 className="text-5xl md:text-7xl font-light leading-tight">{doc.title}</h1>  
        </header>

        <div className="prose prose-neutral prose-lg font-sans leading-relaxed text-[#1a1a1a] opacity-80">  
          {/* Note: In a real app, you'd use a markdown renderer here for the content provided by Linda */}  
          <p className="whitespace-pre-line">{doc.content}</p>  
        </div>

        <div className="mt-32 pt-12 border-t border-[#0a0a0a]/10 italic opacity-40 text-sm">  
          Discreet. Authoritative. Absolute.  
        </div>  
      </article>  
    </div>  
  )  
}  
