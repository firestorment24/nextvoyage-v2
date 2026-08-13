import React from 'react'  
import Link from 'next/link'  
import Navigation from '@/components/Navigation'  
import Footer from '@/components/Footer'

const partnerCategories = [  
{  
role: 'Family Offices & Wealth Advisors',  
detail: 'Seamlessly extend travel stewardship to your principals without adding operational overhead.',  
},  
{  
role: 'Private Banks & Estate Attorneys',  
detail: 'A trusted, discreet referral point for complex, high-touch travel requirements.',  
},  
{  
role: 'Luxury Realtors & Asset Managers',  
detail: 'Positioned to serve clients across second residences, seasonal relocations, and lifestyle logistics.',  
},  
{  
role: 'Executive Assistants & Chiefs of Staff',  
detail: 'A single accountable point of contact for the travel demands of busy principals.',  
},  
{  
role: 'Private Aviation & Maritime Partners',  
detail: 'Coordinated ground, air, and sea logistics that reflect the same standard you hold onboard.',  
},  
]

const whatWeHandle = [  
'Unlisted estates and residences beyond standard public inventory',  
'Complex, detail-sensitive multi-jurisdictional logistics',  
'Preferred Virtuoso and brand-partner benefits',  
'Discreet logistical planning for sensitive or remote journeys',  
'Consistent point of contact across every journey we manage',  
]

export default function PrivateClientPartnersPage() {  
return (  
<main className="min-h-screen bg-[#0A0A0A] text-white font-serif selection:bg-[#D4AF37] selection:text-black">  
  <Navigation />

  {/* Hero */}  
  <section className="py-32 md:py-40 px-6 max-w-4xl mx-auto text-center border-b border-white/10">  
    <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-sans">  
      Private Client Partners  
    </span>  
    <h1 className="text-white text-4xl md:text-6xl font-serif font-light tracking-tight mt-6 mb-8">  
      Extend your standard of service beyond your office.  
    </h1>  
    <p className="text-white/60 text-base md:text-lg leading-relaxed font-sans font-light max-w-2xl mx-auto">  
      A seamless private travel advisory partnership designed for family  
      officers, wealth advisors, private banks, estate attorneys, luxury  
      realtors, executive assistants, and principals in private aviation.  
    </p>  
  </section>

  {/* The Partnership Model */}  
  <section className="py-24 px-6 max-w-4xl mx-auto space-y-8">  
    <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-sans">  
      The Partnership Model  
    </span>  
    <h2 className="text-white text-3xl md:text-4xl font-serif font-light tracking-tight">  
      How we work alongside your team.  
    </h2>  
    <p className="text-white/60 text-base leading-relaxed font-sans font-light">  
      We integrate quietly into the way you already serve your clients —  
      either white-label under your name or as a direct, confidential point of  
      contact. Every engagement operates under strict confidentiality and  
      non-disclosure standards, so nothing about your client&apos;s footprint is  
      shared beyond the scope of the journey itself.  
    </p>  
  </section>

  {/* Who This Serves */}  
  <section className="py-24 px-6 max-w-6xl mx-auto border-t border-white/10">  
    <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-sans">  
      Who This Serves  
    </span>  
    <h2 className="text-white text-3xl md:text-4xl font-serif font-light tracking-tight mt-4 mb-16">  
      Built for the professionals who manage discerning lives.  
    </h2>  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">  
      {partnerCategories.map((item) => (  
        <div key={item.role} className="bg-[#0A0A0A] p-8 space-y-3">  
          <h3 className="text-white text-xl font-serif font-light tracking-tight">  
            {item.role}  
          </h3>  
          <p className="text-white/55 text-sm leading-relaxed font-sans font-light">  
            {item.detail}  
          </p>  
        </div>  
      ))}

      {/* 6th cell — conversion box */}  
      <div className="bg-[#D4AF37] p-8 flex flex-col justify-between min-h-[180px]">  
        <div className="space-y-3">  
          <h3 className="text-black text-xl font-serif font-light tracking-tight">  
            A tailored partnership  
          </h3>  
          <p className="text-black/70 text-sm leading-relaxed font-sans font-light">  
            Your clients carry complex travel demands. Tell us how your team  
            serves them today — we&apos;ll shape the arrangement around your  
            practice, not the other way around.  
          </p>  
        </div>  
        <Link  
          href="https://cal.com/nexvoyagecollective/discovery-call"  
          target="_blank"  
          rel="noopener noreferrer"  
          className="inline-block mt-6 text-black text-xs uppercase tracking-[0.3em] font-sans border-b border-black pb-1 hover:opacity-70 transition-opacity"  
        >  
          Shape the Arrangement →  
        </Link>  
      </div>  
    </div>  
  </section>

  {/* What We Handle */}  
  <section className="py-24 px-6 max-w-4xl mx-auto border-t border-white/10">  
    <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-sans">  
      What We Handle  
    </span>  
    <h2 className="text-white text-3xl md:text-4xl font-serif font-light tracking-tight mt-4 mb-12">  
      The weight your clients&apos; travel carries — handled.  
    </h2>  
    <ul className="space-y-5">  
      {whatWeHandle.map((item) => (  
        <li key={item} className="flex items-start gap-4 text-white/75 text-base font-sans font-light">  
          <span className="mt-1 text-[#D4AF37]">◆</span>  
          <span>{item}</span>  
        </li>  
      ))}  
    </ul>  
  </section>

  {/* Conversion */}  
  <section className="py-28 px-6 border-t border-white/10 text-center bg-[#0E0E0E]">  
    <div className="max-w-xl mx-auto space-y-6">  
      <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">  
        One Introduction  
      </span>  
      <h2 className="text-white text-3xl md:text-5xl font-serif font-light tracking-tight">  
        One introduction. We handle the rest.  
      </h2>  
      <p className="text-white/50 text-sm md:text-base leading-relaxed font-sans font-light">  
        Introduce your principals or clients to our private office for a  
        confidential discussion of their global travel footprint.  
      </p>  
      <div className="pt-4">  
        <Link  
          href="https://cal.com/nexvoyagecollective/discovery-call"  
          target="_blank"  
          rel="noopener noreferrer"  
          className="inline-block border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-[0.3em] px-8 py-4 font-sans hover:bg-[#D4AF37] hover:text-black transition-all duration-500"  
        >  
          Initiate Partner Introduction  
        </Link>  
      </div>  
    </div>  
  </section>

  <Footer />  
</main>  
)  
}  
