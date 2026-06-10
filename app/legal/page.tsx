import React from 'react'  
import Link from 'next/link'

export default function LegalIndex() {  
  const protocols = [  
    {  
      id: '01',  
      title: 'Privacy Architecture & Data Sovereignty',  
      slug: 'privacy',  
      description: 'Our protocols for the protection of your digital and physical footprint.'  
    },  
    {  
      id: '02',  
      title: 'Terms of Engagement',  
      slug: 'terms',  
      description: 'The governing agreement for service execution and liability architecture.'  
    },  
    {  
      id: '03',  
      title: 'The Sanctuary Protocol',  
      slug: 'vetting',  
      description: 'Our criteria for membership and the vetting of high-net-worth travelers.'  
    },  
    {  
      id: '04',  
      title: 'The NexVoyage Standard',  
      slug: 'security',  
      description: 'Our dual commitment to absolute security and cultural stewardship.'  
    }  
  ]

  return (  
    <div className="min-h-screen bg-[#0a0a0a] text-[#d4d4d4] font-serif">  
      <nav className="p-8 border-b border-[#1a1a1a]">  
        <Link href="/" className="text-sm uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity">  
          ← Back to Collective  
        </Link>  
      </nav>

      <main className="max-w-4xl mx-auto px-8 py-24">  
        <header className="mb-24">  
          <h1 className="text-6xl font-light tracking-tight mb-6">The Protocols</h1>  
          <p className="text-xl opacity-50 italic">Legal Framework & Architecture of the Collective.</p>  
          <div className="h-[1px] w-24 bg-[#d4d4d4] mt-12 opacity-20"></div>  
        </header>

        <div className="grid gap-16">  
          {protocols.map((protocol) => (  
            <Link   
              key={protocol.id}   
              href={`/legal/${protocol.slug}`}  
              className="group block border-b border-[#1a1a1a] pb-12 hover:border-[#d4d4d4] transition-colors"  
            >  
              <div className="flex justify-between items-start">  
                <div className="space-y-4">  
                  <span className="text-xs font-sans tracking-[0.3em] uppercase opacity-30">Protocol {protocol.id}</span>  
                  <h2 className="text-3xl font-light group-hover:translate-x-2 transition-transform duration-500">  
                    {protocol.title}  
                  </h2>  
                  <p className="text-lg opacity-50 font-sans max-w-xl">{protocol.description}</p>  
                </div>  
                <span className="text-2xl font-light opacity-0 group-hover:opacity-100 transition-opacity">→</span>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </main>

      <footer className="p-24 text-center opacity-20 text-xs tracking-widest uppercase">  
        NexVoyage Collective — Discretion by Design  
      </footer>  
    </div>  
  )  
}  
