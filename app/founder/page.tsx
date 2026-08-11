import Image from 'next/image'  
import Link from 'next/link'  
import Navigation from '@/components/Navigation'

export const metadata = {  
  title: 'Meet Daryl Clark | NexVoyage Collective',  
  description: 'Founder & Principal of NexVoyage Collective. Two decades of navigating the world’s most demanding itineraries with absolute discretion.',  
}

export default function FounderPage() {  
  const headshotUrl = "https://w0ijk7zmvlb7mxph.private.blob.vercel-storage.com/Headshot/Daryl%20Clark_Headshot.jpeg"

  const affiliations = [  
    { name: 'FORA TRAVEL', role: 'Flagship Partner' },  
    { name: 'VIRTUOSO', role: 'Preferred Network' },  
    { name: 'AMAN', role: 'Preferred Partner' },  
    { name: 'FOUR SEASONS', role: 'Preferred Partner' },  
    { name: 'BELMOND', role: 'Bellini Club' },  
    { name: 'ROSEWOOD', role: 'Elite Member' },  
    { name: 'MANDARIN ORIENTAL', role: 'Fan Club' },  
    { name: 'PENINSULA', role: 'PenClub' },  
  ]

  const disciplines = [  
    {  
      title: 'Private Security Routing',  
      desc: 'Tactical logistics and discreet threat mitigation for high-profile journeys across sensitive or remote geographies.',  
    },  
    {  
      title: 'Off-Market Estate Sourcing',  
      desc: 'Direct access to sequestered private islands, unlisted historic palazzos, and wilderness reserves beyond public inventory.',  
    },  
    {  
      title: 'Family Office Stewardship',  
      desc: 'Holistic multi-generational travel infrastructure designed to align seamlessly with existing family office governance.',  
    },  
  ]

  return (  
    <div className="min-h-screen bg-[#0A0A0A] text-white font-serif selection:bg-[#C5A059] selection:text-black">  
      <Navigation />

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">  
        {/* Breadcrumb */}  
        <Link  
          href="/"  
          className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] hover:opacity-70 transition-opacity mb-16 inline-block"  
        >  
          ← Return to Sanctuary  
        </Link>

        {/* Hero Split Section */}  
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">  
          {/* Left: Portrait */}  
          <div className="lg:col-span-5 relative">  
            <div className="relative aspect-[4/5] overflow-hidden bg-white/5 border border-[#C5A059]/20 shadow-2xl">  
              <img  
                src={headshotUrl}  
                alt="Daryl Clark, Founder & Principal"  
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"  
              />  
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />  
            </div>  
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#C5A059]/20 -z-10 hidden sm:block" />  
          </div>

          {/* Right: Bio & Narrative */}  
          <div className="lg:col-span-7">  
            <span className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] block mb-4">  
              Founder & Principal  
            </span>  
            <h1 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight mb-8">  
              Daryl Clark  
            </h1>

            <div className="space-y-6 text-white/70 text-lg font-light font-sans leading-[1.8]">  
              <p>  
                For over two decades, I have navigated the world’s most demanding itineraries—from sub-polar archipelagos to private wildlife concessions in the Okavango. NexVoyage Collective was founded on a singular, uncompromising thesis: <span className="text-white italic">true luxury isn't about where you go, but how you arrive.</span>  
              </p>  
              <p>  
                Our work transcends traditional concierge service. We operate at the intersection of high-stakes logistics, unlisted estate access, and family office travel stewardship, transforming complex global movements into an effortless, invisible choreography.  
              </p>  
            </div>

            {/* Philosophy Pull-Quote */}  
            <blockquote className="my-10 border-l border-[#C5A059] pl-6 py-2 text-white/90 italic font-serif text-xl">  
              &ldquo;Discretion is not merely the absence of exposure; it is the presence of absolute sovereign control over your environment.&rdquo;  
            </blockquote>  
          </div>  
        </section>

        {/* Disciplines Section */}  
        <section className="mb-28 border-t border-white/10 pt-20">  
          <div className="max-w-2xl mb-16">  
            <span className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] block mb-3">  
              Core Competencies  
            </span>  
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">  
              The Architecture of Sovereign Travel  
            </h2>  
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
            {disciplines.map((item, idx) => (  
              <div  
                key={idx}  
                className="p-8 bg-white/[0.02] border border-white/10 hover:border-[#C5A059]/40 transition-colors"  
              >  
                <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.3em] block mb-4">  
                  0{idx + 1} / Discipline  
                </span>  
                <h3 className="text-xl font-light mb-4">{item.title}</h3>  
                <p className="text-white/60 text-sm font-sans leading-relaxed">  
                  {item.desc}  
                </p>  
              </div>  
            ))}  
          </div>  
        </section>

        {/* Affiliations / Global Network */}  
        <section className="mb-28 border-t border-white/10 pt-20">  
          <div className="max-w-2xl mb-16">  
            <span className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] block mb-3">  
              Strategic Alliances  
            </span>  
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">  
              Preferred Global Partnerships  
            </h2>  
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">  
            {affiliations.map((partner, idx) => (  
              <div  
                key={idx}  
                className="p-6 border border-white/10 bg-white/[0.01] flex flex-col justify-between"  
              >  
                <span className="text-white/90 font-light tracking-wider text-sm mb-2">  
                  {partner.name}  
                </span>  
                <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.2em]">  
                  {partner.role}  
                </span>  
              </div>  
            ))}  
          </div>  
        </section>

        {/* Call to Action */}  
        <section className="border-t border-white/10 pt-24 text-center">  
          <span className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] block mb-4">  
            Begin a Conversation  
          </span>  
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8">  
            Engage the Principal  
          </h2>  
          <p className="text-white/60 font-sans max-w-xl mx-auto mb-10 text-base leading-relaxed">  
            Inquiries regarding private office representation and itinerary orchestration are reviewed personally.  
          </p>  
          <a  
            href="https://cal.com/nexvoyagecollective"  
            target="_blank"  
            rel="noopener noreferrer"  
            className="inline-block px-10 py-4 bg-[#C5A059] text-black font-sans uppercase tracking-[0.2em] text-xs font-medium hover:bg-white transition-colors"  
          >  
            Schedule Discovery Call  
          </a>  
        </section>  
      </main>  
    </div>  
  )  
}  
