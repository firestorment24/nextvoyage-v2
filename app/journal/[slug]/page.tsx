/**  
 * app/journal/[slug]/page.tsx  
 */  
import { notFound } from 'next/navigation'  
import Link from 'next/link'  
import { DESTINATIONS_DATA } from '@/lib/journal-data'

// Standardized slug generator (must match index page)  
const getSlug = (location: string) =>   
  location.toLowerCase()  
    .replace(/\s+/g, '-')  
    .replace(/[().]/g, '')  
    .replace(/-+/g, '-')

interface PageProps {  
  params: Promise<{ slug: string }>  
}

export default async function JournalDetailPage({ params }: PageProps) {  
  const { slug } = await params  
    
  // Lookup using the same slug logic  
  const destination = DESTINATIONS_DATA.find(  
    (d) => getSlug(d.location) === slug  
  )

  if (!destination) {  
    notFound()  
  }

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5]">  
      {/* Hero Section */}  
      <section className="relative h-[80vh] w-full">  
        <img   
          src={destination.heroImage}   
          alt={destination.location}  
          className="w-full h-full object-cover opacity-60"  
        />  
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]" />  
          
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">  
          <p className="text-[12px] tracking-[0.4em] uppercase text-[#C5A059] mb-8 animate-fade-in">  
            {destination.coordinates}  
          </p>  
          <h1 className="text-6xl md:text-8xl font-serif font-light mb-6 tracking-tighter">  
            {destination.location}  
          </h1>  
          <p className="text-xl md:text-2xl font-serif italic text-[#C5A059] max-w-2xl">  
            {destination.orchestration}  
          </p>  
        </div>  
      </section>

      {/* Editorial Content */}  
      <section className="max-w-4xl mx-auto px-6 py-24">  
        <div className="space-y-12">  
          <div className="border-l border-[#C5A059] pl-8 py-2">  
            <p className="text-2xl font-serif font-light leading-relaxed text-[#D1D1D1]">  
              {destination.summary}  
            </p>  
          </div>  
            
          <div className="prose prose-invert prose-brass max-w-none">  
            <p className="text-lg text-[#888] leading-loose font-light">  
              This report is part of the NexVoyage Master Ledger. The full tactical dossier including  
              vetted sanctuaries, private transport logistics, and on-ground orchestration is available   
              exclusively to Collective members.  
            </p>  
          </div>

          <div className="pt-20 border-t border-[#1A1A1A]">  
            <Link   
              href="/journal"  
              className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-[#C5A059] hover:text-white transition-colors group"  
            >  
              <span className="h-px w-12 bg-[#C5A059] group-hover:w-16 transition-all" />  
              Return to Ledger  
            </Link>  
          </div>  
        </div>  
      </section>  
    </main>  
  )  
}  
