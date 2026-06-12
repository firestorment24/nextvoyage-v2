// app/archive/[id]/page.tsx  
import { SANCTUARIES_DATA } from '@/lib/data/sanctuaries' // Corrected export name  
import Link from 'next/link'  
import { notFound } from 'next/navigation'

export async function generateStaticParams() {  
  // Use the correct data object  
  return SANCTUARIES_DATA.map((item) => ({  
    id: item.id,  
  }))  
}

export default function SanctuaryDetailPage({ params }: { params: { id: string } }) {  
  const sanctuary = SANCTUARIES_DATA.find((s) => s.id === params.id)

  if (!sanctuary) {  
    notFound()  
  }

  return (  
    <main className="min-h-screen bg-black text-white py-20 px-6">  
      <div className="max-w-4xl mx-auto">  
        {/* Navigation Back */}  
        <Link   
          href="/archive"   
          className="text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity mb-12 inline-block"  
        >  
          ← Back to Archive  
        </Link>

        {/* Header Section */}  
        <header className="mb-12">  
          <div className="flex items-center gap-4 mb-4">  
            <span className="text-[10px] uppercase tracking-[0.3em] px-2 py-1 border border-white/20">  
              {sanctuary.tag}  
            </span>  
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-50">  
              {sanctuary.loc}  
            </span>  
          </div>  
          <h1 className="text-4xl md:text-6xl font-light tracking-tight">  
            {sanctuary.name}  
          </h1>  
        </header>

        {/* Content Section */}  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">  
          <div className="md:col-span-2">  
            <p className="text-lg leading-relaxed text-gray-300 font-light">  
              {sanctuary.description}  
            </p>  
          </div>

          <div className="space-y-8">  
            <div>  
              <h4 className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Rachel's Inquiry Desk</h4>  
              <p className="text-sm text-gray-400 mb-6">  
                Connect with our AI Lead Analyst to initialize your dossier and unlock Daryl’s calendar.  
              </p>  
                
              <Link   
                href={`/inquiry?id=${sanctuary.id}`}  
                className="inline-block w-full text-center bg-white text-black px-6 py-4 uppercase text-[10px] tracking-[0.2em] hover:bg-gray-200 transition-colors"  
              >  
                Connect with Concierge  
              </Link>  
            </div>

            <div className="pt-8 border-t border-white/10">  
              <h4 className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Status</h4>  
              <p className="text-xs text-green-500 uppercase tracking-widest">Available for Booking</p>  
            </div>  
          </div>  
        </div>  
      </div>  
    </main>  
  )  
}  
