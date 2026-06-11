import Image from 'next/image'  
import { notFound } from 'next/navigation'  
import { SANCTUARY_DATA } from '@/lib/data/sanctuaries'

// Generate static routes for all sanctuaries using their unique ID  
export async function generateStaticParams() {  
  return SANCTUARY_DATA.map((s) => ({  
    id: s.id,  
  }))  
}

export default async function SanctuaryDossier({ params }: { params: { id: string } }) {  
  const { id } = params  
  const data = SANCTUARY_DATA.find((s) => s.id === id)

  if (!data) notFound()

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5]">  
      {/* Hero Section */}  
      <section className="relative h-[80vh] w-full flex items-end">  
        <div className="absolute inset-0 z-0">  
          <Image  
            src={data.heroImage || data.image}  
            alt={data.name}  
            fill  
            className="object-cover opacity-60"  
            priority  
          />  
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />  
        </div>  
          
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16">  
          <div className="flex flex-col gap-4">  
            <span className="text-[#B4975A] text-xs uppercase tracking-[0.5em] font-medium">  
              Archetype Registry // {data.id.padStart(3, '0')}  
            </span>  
            <h1 className="text-6xl md:text-8xl font-light leading-none tracking-tight">  
              {data.name}  
            </h1>  
            <p className="text-[#888] text-lg md:text-xl max-w-2xl font-light italic">  
              {data.tagline}  
            </p>  
          </div>  
        </div>  
      </section>

      {/* The Briefing Grid */}  
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-[#1a1a1a]">  
          
        {/* Left Column: Core Data */}  
        <div className="md:col-span-4 space-y-12">  
          <div>  
            <h3 className="text-[#444] text-[10px] uppercase tracking-[0.3em] mb-4">Location Focus</h3>  
            <p className="text-xl font-light">{data.location}</p>  
          </div>  
          <div>  
            <h3 className="text-[#444] text-[10px] uppercase tracking-[0.3em] mb-4">Primary ROI</h3>  
            <p className="text-[#B4975A] font-light leading-relaxed">{data.roi}</p>  
          </div>  
          <div>  
            <h3 className="text-[#444] text-[10px] uppercase tracking-[0.3em] mb-4">Active Inventory</h3>  
            <p className="text-4xl font-mono">{data.propertyCount.toString().padStart(2, '0')}</p>  
          </div>  
        </div>

        {/* Middle Column: The Philosophy */}  
        <div className="md:col-span-5 space-y-8">  
          <h3 className="text-[#444] text-[10px] uppercase tracking-[0.3em]">Operational Philosophy</h3>  
          <p className="text-2xl font-light leading-snug text-[#CCC]">  
            {data.description}  
          </p>  
          <div className="h-px w-20 bg-[#B4975A]" />  
          <p className="text-[#888] leading-relaxed">  
            {data.philosophy}  
          </p>  
        </div>

        {/* Right Column: Atmosphere & Highlights */}  
        <div className="md:col-span-3 space-y-12 bg-[#111] p-8 border border-[#1a1a1a]">  
          <div>  
            <h3 className="text-[#444] text-[10px] uppercase tracking-[0.3em] mb-4">Vibe / Vitals</h3>  
            <p className="text-sm uppercase tracking-widest text-[#B4975A]">{data.atmosphere}</p>  
          </div>  
          <div>  
            <h3 className="text-[#444] text-[10px] uppercase tracking-[0.3em] mb-4">Key Specifications</h3>  
            <ul className="space-y-3">  
              {data.highlights.map((item, i) => (  
                <li key={i} className="text-xs text-[#888] flex items-center gap-3">  
                  <span className="w-1 h-1 bg-[#444]" />  
                  {item}  
                </li>  
              ))}  
            </ul>  
          </div>  
        </div>  
      </section>

      {/* The Call to Action */}  
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 mb-24 bg-[#B4975A]/5 border border-[#B4975A]/20 flex flex-col items-center text-center">  
        <h2 className="text-3xl md:text-4xl font-light mb-8">Ready to initiate the dialogue?</h2>  
        <a   
          href="/invitation"   
          className="px-12 py-4 bg-[#B4975A] text-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-colors duration-500"  
        >  
          Request Invitation  
        </a>  
        <p className="mt-8 text-[10px] text-[#444] uppercase tracking-widest">  
          Reference Dossier: {data.id.padStart(3, '0')} // NV-COLLECTIVE  
        </p>  
      </section>  
    </main>  
  )  
}  
