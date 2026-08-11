import Link from 'next/link'  
import Navigation from '@/components/Navigation'

export const metadata = {  
title: 'Meet Daryl Clark | NexVoyage Collective',  
description:  
  'Meet Daryl Clark, Founder & Principal of NexVoyage Collective—a private travel office for clients who demand discretion, depth, and uncommon access.',  
}

const headshotUrl = 'https://cdn.marblism.com/_XUs99xWdak.jpeg'

const disciplines = [  
{  
  number: '01',  
  title: 'Private Security Routing',  
  description:  
    'Tactical logistics and discreet threat mitigation for high-profile journeys across sensitive or remote geographies.',  
},  
{  
  number: '02',  
  title: 'Off-Market Estate Sourcing',  
  description:  
    'Direct access to sequestered private islands, unlisted historic palazzos, and wilderness reserves beyond public inventory.',  
},  
{  
  number: '03',  
  title: 'Family Office Stewardship',  
  description:  
    'Holistic, multi-generational travel infrastructure designed to align seamlessly with existing family office governance.',  
},  
]

const affiliations = [  
{ name: 'FORA TRAVEL', role: 'Flagship Partner' },  
{ name: 'VIRTUOSO', role: 'Preferred Network' },  
{ name: 'AMAN', role: 'Preferred Partner' },  
{ name: 'FOUR SEASONS', role: 'Preferred Partner' },  
{ name: 'BELMOND', role: 'Preferred Partner' },  
{ name: 'ROSEWOOD', role: 'Preferred Partner' },  
{ name: 'MANDARIN ORIENTAL', role: 'Preferred Partner' },  
{ name: 'PENINSULA', role: 'Preferred Partner' },  
]

export default function FounderPage() {  
return (  
  <div className="min-h-screen bg-[#0A0A0A] font-serif text-white selection:bg-[#C5A059] selection:text-black">  
    <Navigation />

    <main className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-12">  
      <Link  
        href="/"  
        className="mb-16 inline-block text-[10px] uppercase tracking-[0.3em] text-[#C5A059] transition-opacity hover:opacity-70"  
      >  
        ← Return to Sanctuary  
      </Link>

      <section className="mb-32 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">  
        <div className="relative lg:col-span-5 lg:mt-[8.5rem]">  
          <div className="relative aspect-[4/5] overflow-hidden border border-[#C5A059]/20 bg-white/5 shadow-2xl">  
            <img  
              src={headshotUrl}  
              alt="Daryl Clark, Founder and Principal of NexVoyage Collective"  
              className="h-full w-full object-cover"  
              decoding="async"  
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent" />  
          </div>

          <div className="absolute -bottom-6 -right-6 -z-10 hidden h-32 w-32 border border-[#C5A059]/25 sm:block" />

          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-[9px] uppercase tracking-[0.25em] text-white/35">  
            <span>NexVoyage Collective</span>  
            <span>New York · Global</span>  
          </div>  
        </div>

        <div className="lg:col-span-7">  
          <span className="mb-4 block text-[10px] uppercase tracking-[0.4em] text-[#C5A059]">  
            Founder &amp; Principal  
          </span>

          <h1 className="mb-10 whitespace-nowrap text-4xl font-light leading-[0.95] tracking-[-0.06em] md:text-7xl">  
            Daryl Clark  
          </h1>

          <div className="space-y-6 text-lg font-light leading-[1.85] text-white/70">  
            <p>  
              Built on decades of executive leadership and complex logistics,  
              NexVoyage Collective was founded on a singular, uncompromising thesis:{' '}  
              <span className="italic text-white">  
                true luxury isn&apos;t about where you go, but how you arrive.  
              </span>  
            </p>

            <p>  
              Our work transcends traditional concierge service. We operate  
              at the intersection of high-stakes logistics, unlisted estate  
              access, and family office travel stewardship, transforming  
              complex global movements into an effortless, invisible  
              choreography. Whether orchestrating multi-generational journeys  
              across continents, securing access to properties beyond public  
              reach, or managing the precise sequencing of overlapping  
              schedules and unspoken expectations, we solve problems that most  
              concierge services don&apos;t know exist.  
            </p>

            <p>  
              Arrival, for us, means stepping into an experience that has  
              already begun—one where every detail has been anticipated,  
              every complexity dissolved, and every transition engineered to  
              feel natural. It means your family office runs seamlessly  
              across time zones. It means your private retreat is waiting  
              exactly as envisioned. It means the machinery of travel becomes  
              entirely invisible, and you simply belong wherever you are.  
            </p>

            <p>  
              We work with a limited number of clients who demand the  
              uncommon, who understand that discretion and depth of knowledge  
              matter more than volume, and who recognize that the best travel  
              experiences are built on relationships, not transactions.  
            </p>  
          </div>

          <blockquote className="my-12 border-l border-[#C5A059] py-2 pl-6 text-xl italic leading-relaxed text-white/90 md:text-2xl">  
            &ldquo;Discretion is not merely the absence of exposure; it is the  
            presence of absolute sovereign control over your environment.&rdquo;  
          </blockquote>  
        </div>  
      </section>

      <section className="mb-32 border-y border-white/10 py-20">  
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">  
          <div className="md:col-span-4">  
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">  
              The Operating Principle  
            </span>  
          </div>

          <div className="md:col-span-8">  
            <p className="max-w-4xl text-3xl font-light leading-tight tracking-tight text-white/90 md:text-5xl">  
              The finest journeys are not assembled from options. They are  
              constructed from understanding.  
            </p>  
          </div>  
        </div>  
      </section>

      <section className="mb-32">  
        <div className="mb-16 max-w-2xl">  
          <span className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">  
            Core Competencies  
          </span>

          <h2 className="text-3xl font-light tracking-tight md:text-5xl">  
            The Architecture of Sovereign Travel  
          </h2>

          <p className="mt-6 text-base font-light leading-relaxed text-white/55">  
            The visible itinerary is only one layer of the work. The real  
            value lies in the infrastructure beneath it.  
          </p>  
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">  
          {disciplines.map((discipline) => (  
            <article  
              key={discipline.number}  
              className="group border border-white/10 bg-white/[0.02] p-8 transition-colors duration-500 hover:border-[#C5A059]/50"  
            >  
              <div className="mb-16 flex items-start justify-between">  
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">  
                  {discipline.number}  
                </span>

                <span className="text-xs text-white/20 transition-colors group-hover:text-[#C5A059]">  
                  ↗  
                </span>  
              </div>

              <h3 className="mb-5 text-2xl font-light tracking-tight">  
                {discipline.title}  
              </h3>

              <p className="text-sm font-light leading-relaxed text-white/55">  
                {discipline.description}  
              </p>  
            </article>  
          ))}  
        </div>  
      </section>

      <section className="mb-32 border-t border-white/10 pt-20">  
        <div className="mb-16 max-w-2xl">  
          <span className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">  
            Strategic Alliances  
          </span>

          <h2 className="text-3xl font-light tracking-tight md:text-5xl">  
            A Network Built on Trust  
          </h2>

          <p className="mt-6 text-base font-light leading-relaxed text-white/55">  
            Our relationships are carefully maintained over time. They are  
            not simply booking channels; they are the foundation for access,  
            recognition, and precise execution.  
          </p>  
        </div>

        <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-4">  
          {affiliations.map((partner) => (  
            <div  
              key={partner.name}  
              className="flex min-h-32 flex-col justify-between bg-[#0A0A0A] p-6 transition-colors hover:bg-white/[0.04]"  
            >  
              <span className="text-sm font-light tracking-[0.08em] text-white/90">  
                {partner.name}  
              </span>

              <span className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059]">  
                {partner.role}  
              </span>  
            </div>  
          ))}  
        </div>  
      </section>

      <section className="border-t border-white/10 pt-24 text-center">  
        <span className="mb-4 block text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">  
          Begin a Conversation  
        </span>

        <h2 className="mb-8 text-4xl font-light tracking-tight md:text-6xl">  
          Travel requires a point of view.  
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-base font-light leading-relaxed text-white/60">  
          Inquiries regarding private office representation and itinerary  
          orchestration are reviewed personally.  
        </p>

        <a  
          href="https://cal.com/nexvoyagecollective"  
          target="_blank"  
          rel="noopener noreferrer"  
          className="inline-block bg-[#C5A059] px-10 py-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-black transition-colors hover:bg-white"  
        >  
          Schedule Discovery Call  
        </a>  
      </section>  
    </main>  
  </div>  
)  
}  
The "built on decades of executive leadership and complex logistics" phrasing now leads the founder bio and keeps the thesis line intact.

